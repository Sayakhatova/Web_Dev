import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album, Product } from '../models';
import { Location } from '@angular/common';
@Component({
    selector: 'app-album-details',
    templateUrl: './album-details.component.html',
    styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
    creating: boolean = false;
    newTitle: string = "";
    newPrice: string = "";
    album: Product[] = [];
    loaded: boolean = false;
    category: string = "";
    constructor(private route: ActivatedRoute, private service: AlbumsService, private _location: Location) {

    }
    addItem() {
        this.loaded = false;
        const item = {
            title: this.newTitle,
            price: this.newPrice,
            category: this.category,
        }
        this.service.createItem(item as Product).subscribe((item) => {
            this.album.push(item);
            // console.log(item);
            this.creating = false;
            this.loaded = true;
            this.newTitle = "";
            this.newPrice = "";
        })
    }
    back() {
        this._location.back();
    }
    deleteItem(id: any) {
        this.album = this.album.filter((x) => x.id != id);
        this.service.deleteItem(id).subscribe(() => {
            // console.log("deleted");
        });
    }
    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const categ = params.get("title");
            this.loaded = false;
            if (categ) {
                this.category = categ;
                this.service.getAlbum(categ).subscribe((album) => {
                    this.album = album;
                    this.loaded = true;
                })
            }
        });
    }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album, Product } from '../models';
import { Location } from '@angular/common';

@Component({
    selector: 'app-album-item-detail',
    templateUrl: './album-item-detail.component.html',
    styleUrls: ['./album-item-detail.component.css']
})
export class AlbumItemDetailComponent implements OnInit {
    item!: Product;
    editing: boolean = false;
    loaded: boolean = false;
    constructor(private route: ActivatedRoute, private service: AlbumsService, private _location: Location) {
        this.route.paramMap.subscribe((params) => {
            const id = params.get("id");
            this.loaded = false;
            if (id) {
                this.service.getAlbumItem(id).subscribe((item) => {
                    this.item = item;
                    this.loaded = true;
                })
            }
        });
    }

    ngOnInit(): void {
    }
    editItem(id: any) {
        this.editing = true;
    }
    updateItem() {
        this.loaded = false;
        this.editing = false;
        this.service.updateItem(this.item).subscribe((item) => {
            // console.log(item);
            this.loaded = true;
        })
    }
    back() {
        this._location.back();
    }
}
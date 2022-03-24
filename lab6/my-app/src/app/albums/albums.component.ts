import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
    albums: Album[] = [];
    loaded: boolean = false;
    constructor(private service: AlbumsService) { }

    ngOnInit(): void {
        this.getAlbums();
    }

    getAlbums() {
        this.loaded = false;
        this.service.getAlbums().subscribe((albums) => {
            this.albums = albums;
            this.loaded = true;
        });
    }

}
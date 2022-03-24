import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Album, Product } from './models';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {

    constructor(private client: HttpClient) { }
    getAlbums(): Observable<Album[]> {
        let val = this.client.get<Album[]>("https://fakestoreapi.com/products/categories");
        return val;
    }
    getAlbum(categ: string): Observable<Product[]> {
        return this.client.get<Product[]>(`https://fakestoreapi.com/products/category/${categ}`);
    }
    getAlbumItem(id: any): Observable<Product> {
        return this.client.get<Product>(`https://fakestoreapi.com/products/${id}`);
    }
    deleteItem(id: any): Observable<any> {
        return this.client.delete(`https://fakestoreapi.com/products/${id}`);
    }
    updateItem(item: Product): Observable<Product> {
        return this.client.put<Product>(`https://fakestoreapi.com/products/${item.id}`, item);
    }
    createItem(item: Product): Observable<Product> {
        return this.client.post<Product>(`https://fakestoreapi.com/products`, item);
    }
}
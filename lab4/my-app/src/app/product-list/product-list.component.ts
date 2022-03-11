import { Component } from '@angular/core';

import { products } from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products = products;

    share(link: String, text: String) {
        window.open('https://telegram.me/share/url?url=' + link, '_blank')
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
}
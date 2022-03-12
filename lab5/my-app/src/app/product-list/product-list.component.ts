import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
    products = products;
    
    categoryPressed(category_id: number) {
        products[category_id].display_flag = !products[category_id].display_flag
    }

    share(link: String, text: String) {
        window.open('https://telegram.me/share/url?url=' + link, '_blank')
    }

    likeItem(category_id: number, item_id: number) {
        products[category_id].items[item_id].likes += 1
    }

    removeItem(category_id: number, item_id: number) {
        products[category_id].items.splice(item_id, 1)
        for (var i = item_id; i < products[category_id].items.length; i++) {
            products[category_id].items[i].id = i
        }
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
}
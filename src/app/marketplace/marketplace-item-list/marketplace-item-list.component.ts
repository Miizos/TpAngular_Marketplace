import { Component } from '@angular/core';
import { MarketplaceItemType } from 'src/app/types/marketplace.type';

@Component({
  selector: 'app-marketplace-item-list',
  templateUrl: './marketplace-item-list.component.html',
  styleUrls: ['./marketplace-item-list.component.scss']
})
export class MarketplaceItemListComponent {

  public marketplacesItems: MarketplaceItemType[] =[
    {
      id:1,
      title:"ADIDAR MAX",
      category:"ADULT",
      image: "https://via.placeholder.com/500",
      description: "lorem ispum is placeholder text commnly",
      price: 65.00
    },
    {
      id:2,
      title:"ADIDAR MAX",
      category:"ADULT",
      image: "https://via.placeholder.com/500",
      description: "lorem ispum is placeholder text commnly",
      price: 65.00
    },
    {
      id:3,
      title:"ADIDAR MAX",
      category:"ADULT",
      image: "https://via.placeholder.com/500",
      description: "lorem ispum is placeholder text commnly",
      price: 65.00
    },

  ];


}

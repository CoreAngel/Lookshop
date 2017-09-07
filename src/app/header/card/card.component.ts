import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../header.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public HeaderService: HeaderService) { }

  ngOnInit() {
  }

  openCard = function() {
    let items = document.querySelector("#card__items");

    items.classList.toggle("card__items--open");
  }

}

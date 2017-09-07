import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../header.service'

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  currencys = ["USD", "EUR", "PLN"];

  constructor(public HeaderService: HeaderService) { }

  ngOnInit() {
    document.addEventListener("click", e => this.closeCurency(e))
  }

  toogleCurency() {
    let optionsContainer = document.querySelector("#userBar__options");
    optionsContainer.classList.toggle("userBar__options--visible");
  }

  closeCurency(e) {
    let optionsContainer = document.querySelector("#userBar__options");
    let optionsSelected = document.querySelector("#userBar__selected");
    if(!optionsContainer.contains(e.target) && e.target != optionsSelected)
      optionsContainer.classList.remove("userBar__options--visible");
  }

  setCurrency(el) {
    if(el.target.innerText.length === 3)
      this.HeaderService.currentCurency = el.target.innerText;
    this.toogleCurency();
  }

}

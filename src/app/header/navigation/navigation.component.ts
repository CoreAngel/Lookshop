import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickMenu() {

    let navigation = document.querySelector("#navigation");
    let button = document.querySelector("#nav__button");

    if(navigation.classList.contains("nav__first-list--open")){
      button.setAttribute("aria-expanded", "false");
      navigation.classList.remove("nav__first-list--open");

      setTimeout(() => {
        navigation.classList.remove("nav__first-list--visible");
      }, 300);

    } else{
      button.setAttribute("aria-expanded", "true");
      navigation.classList.add("nav__first-list--visible");

      setTimeout(() => {
        navigation.classList.add("nav__first-list--open");
      }, 20);
      
    }

  }

}

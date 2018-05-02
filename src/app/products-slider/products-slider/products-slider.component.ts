import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)',
    '(window:orientationchange)': 'onResize($event)'
  }
})
export class ProductsSliderComponent implements OnInit {

  slider;
  slidesToShow = Math.floor(window.innerWidth/250);

  constructor() { }

  ngOnInit() {
    this.slider = $("#products-slider");

    this.slider.slick({
      dots: false,
      infinite: false,
      draggable: true,
      swipeToSlide: true,
      slidesToShow: this.slidesToShow,
      autoplay: false,
      zIndex: 1,
      nextArrow: $("#navigation__next"),
      prevArrow: $("#navigation__prev")
    });

  }

  onResize(event) {
    this.slidesToShow = Math.floor(event.target.innerWidth/250);

    $("#products-slider").slick('slickSetOption', 'slidesToShow', this.slidesToShow, true);
    
  }

}

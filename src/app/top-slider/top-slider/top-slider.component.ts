import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss']
})
export class TopSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#top-slider__slider").slick({
      dots: true,
      infinite: true,
      draggable: false,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      useTransform: false,
      dotsClass: 'top-slider__dots',
      zIndex: 1,
      nextArrow: $("#top-slider__next"),
      prevArrow: $("#top-slider__prev")
    });
  }

}

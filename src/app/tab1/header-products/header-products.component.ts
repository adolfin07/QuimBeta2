// header-products.component.ts
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-header-products',
  templateUrl: './header-products.component.html',
  styleUrls: ['./header-products.component.scss'],
  standalone: false,
})

export class HeaderProductsComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3000, // Cambia de slide cada 3 segundos
        disableOnInteraction: false, // No se detiene al interactuar
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });
  }
}
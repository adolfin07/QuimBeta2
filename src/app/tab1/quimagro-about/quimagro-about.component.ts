import { Component, OnInit } from '@angular/core';
import {
  ProductosService,
  Card,
  FeaturedImage,
} from 'src/app/services/productos.service'; // Ajusta ruta según tu estructura
import { SearchbarInputEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-quimagro-about',
  templateUrl: './quimagro-about.component.html',
  styleUrls: ['./quimagro-about.component.scss'],
  standalone: false,
})
export class QuimagroAboutComponent implements OnInit {
  cards: Card[] = [];
  featuredImages: FeaturedImage[] = [];

  // Para mantener las cards originales para filtrado
  allCards: Card[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.productosService.cards$.subscribe((cards) => {
      this.cards = cards;
      this.allCards = cards; // Guarda copia para el filtro
    });

    this.productosService.featuredImages$.subscribe(
      (images: FeaturedImage[]) => {
        this.featuredImages = images;
      }
    );
  }

  quimagroBuscador(event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    const query = event.detail.value?.toLowerCase() || '';
    if (query.length === 0) {
      this.cards = this.allCards;
    } else {
      this.cards = this.allCards.filter(
        (card) =>
          card.productName.toLowerCase().includes(query) ||
          card.location.toLowerCase().includes(query)
      );
    }
  }
}

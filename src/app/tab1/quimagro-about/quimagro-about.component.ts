import { Component, OnInit } from '@angular/core';
import { SearchbarInputEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-quimagro-about',
  templateUrl: './quimagro-about.component.html',
  styleUrls: ['./quimagro-about.component.scss'],
  standalone: false,
})
export class QuimagroAboutComponent implements OnInit {
  cards = [
    {
      imgSrc:
        'https://images.pexels.com/photos/872483/pexels-photo-872483.jpeg',
      productName: 'DK-4050',
      location: 'Campo Esperanza',
    },
    {
      imgSrc:
        'https://images.pexels.com/photos/1228526/pexels-photo-1228526.jpeg',
      productName: 'DK-5021',
      location: 'Rancho Verde',
    },
    {
      imgSrc:
        'https://images.pexels.com/photos/1400171/pexels-photo-1400171.jpeg',
      productName: 'DK-5021',
      location: 'Rancho Verde',
    },
    {
      imgSrc:
        'https://images.pexels.com/photos/1034825/pexels-photo-1034825.jpeg',
      productName: 'DK-5021',
      location: 'Rancho Verde',
    },
    {
      imgSrc:
        'https://images.pexels.com/photos/121629/pexels-photo-121629.jpeg',
      productName: 'DK-5021',
      location: 'Rancho Verde',
    },
  ];

  featuredImages = [
    {
      img: 'https://images.pexels.com/photos/1094544/pexels-photo-1094544.jpeg',
      location: 'Ciudad Gótica',
    },
    {
      img: 'https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg',
      location: 'Metrópolis',
    },
    {
      img: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg',
      location: 'Smallville',
    },
    {
      img: 'https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg',
      location: 'Central City',
    },
  ];

  quimagroBuscador($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  ngOnInit() {}
}

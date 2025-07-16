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
  
  quimagroBuscador($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  ngOnInit() {}
}

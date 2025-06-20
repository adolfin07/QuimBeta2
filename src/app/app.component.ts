import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  showSplash = true;
  splashLeaving = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashLeaving = true;

        setTimeout(() => {
          this.showSplash = false;
        }, 800); // duración igual que el CSS transition
      }, 2500); // tiempo que quieres mostrar el splash
    });
  }
}

import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Browser } from '@capacitor/browser';

export interface Sucursal {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  lat: number;
  lng: number;
  imagen: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  sucursales: Sucursal[] = [
    {
      id: 1,
      nombre: 'Los Mochis',
      direccion:
        'Blvd. Adolfo López Mateos 2463, Las Fuentes, 81223 Los Mochis, Sin.',
      telefono: '668-812-2426',
      lat: 25.814926573657242,
      lng: -108.97690280505894,
      imagen: '/assets/QUIMAGROAPP/SUCURSALES/mochis.png',
    },
    {
      id: 2,
      nombre: 'El Carrizo',
      direccion:
        'Presa Ocoroni y Río Tamazula 210 Sur, Villa, 81343 Gustavo Díaz Ordaz, Sin.',
      telefono: '668-865-0580',
      lat: 26.267659701607514,
      lng: -109.03788792163806,
      imagen: '/assets/QUIMAGROAPP/SUCURSALES/carrizo.png',
    },
    {
      id: 3,
      nombre: 'Guasave',
      direccion:
        '81000 Blvd. 16 de septiembre, Agustina Ramírez y, 81030 Guasave, Sin.',
      telefono: '687-872-2384',
      lat: 25.576987506775012,
      lng: -108.4634140217565,
      imagen: '/assets/QUIMAGROAPP/SUCURSALES/guasave.png',
    },
    {
      id: 4,
      nombre: 'Juan José Rios',
      direccion:
        '81000 Blvd. 16 de septiembre, Agustina Ramírez y, 81030 Guasave, Sin.',
      telefono: '687-896-1235',
      lat: 25.75959186535215,
      lng: -108.81329643229603,
      imagen: '/assets/QUIMAGROAPP/SUCURSALES/juanjoserios.png',
    },
    {
      id: 5,
      nombre: 'Guamuchil',
      direccion:
        'Nicolás Bravo y, Salvador Alvarado s/n, Zona Centro, 81400 Guamúchil, Sin.',
      telefono: '673-732-1313',
      lat: 25.460159090650347,
      lng: -108.07740647463261,
      imagen: '/assets/QUIMAGROAPP/SUCURSALES/Guamuchil.png',
    },
  ];

  //sucursalactiva
  sucursalActiva: Sucursal = this.sucursales[0];
  constructor(private sanitizer: DomSanitizer) {}
  async openGoogleMaps(lat: number, lng: number) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    try {
      await Browser.open({ url });
    } catch (error) {
      console.error('Error al abrir Google Maps:', error);
    }
  }
  cambiarSucursal(direccion: number) {
    const currentIndex = this.sucursales.indexOf(this.sucursalActiva);
    let newIndex = currentIndex + direccion;

    if (newIndex < 0) {
      newIndex = this.sucursales.length - 1;
    } else if (newIndex >= this.sucursales.length) {
      newIndex = 0;
    }

    this.sucursalActiva = this.sucursales[newIndex];
  }
  getMapaUrl(sucursal: Sucursal): SafeResourceUrl {
    const url = `https://www.google.com/maps?q=${sucursal.lat},${sucursal.lng}&hl=es&z=16&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

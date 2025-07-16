import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { IonicModule, Platform } from '@ionic/angular';
import { ProductosService } from '../services/productos.service';

interface Producto {
  id: string;
  title: string;
  img: string;
  detalles: Producto[];
  productTitle?: string;
  description?: string;
  ventajas?: string;
  presentations?: string[];
  ingredienteActivo?: string;
  descargables?: {
    fichaTecnica?: string;
    hojaSeguridad?: string;
    folleto?: string;
  };
}

interface Categoria {
  nombre: string;
  productos: Producto[];
}

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: false,
  providers: [File, FileOpener],
})
export class Tab1Page implements OnInit {
  selectedTab: 'productos' | 'buscar' | 'categorias' = 'productos';

  categorias: Categoria[] = [];

  categoriaSeleccionada: Categoria | null = null;
  productoSeleccionado: Producto | null = null;
  activeIndex: number | undefined;
  imagenPresentacionActiva: string | null = null;
  selectedProduct: any;
  detalleSeleccionado: any = null; // El subproducto
  producto: any;

  constructor(
    private file: File,
    private fileOpener: FileOpener,
    private http: HttpClient,
    private platform: Platform,
    private productosService: ProductosService
  ) {}

  async ngOnInit() {
    this.productosService.categorias$.subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  selectTab(tab: 'productos' | 'buscar' | 'categorias') {
    const isSameTab = this.selectedTab === tab;
    this.selectedTab = tab;

    // Limpia siempre
    this.categoriaSeleccionada = null;
    this.productoSeleccionado = null;

    // Si está en la misma tab 'productos', reinicia todo
    if (isSameTab && tab === 'productos') {
      this.resetProductosTab();
    }
  }

  resetProductosTab() {
    this.searchTerm = '';
    this.productosFiltrados = [];
    this.productoSeleccionado = null;
    this.subproductoSeleccionado = null;
    this.detalleSeleccionado = null;
    this.activeIndex = 0;
    this.categoriaSeleccionada = null;

    const content = document.querySelector('ion-content');
    content?.scrollToTop(300);
  }

  seleccionarCategoria(categoria: Categoria) {
    this.categoriaSeleccionada = categoria;
    this.productoSeleccionado = null;
  }

  volverAtrasCategoria() {
    this.categoriaSeleccionada = null;
    this.productoSeleccionado = null;
  }

  volverAtrasProducto() {
    this.productoSeleccionado = null;
  }

  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
    this.subproductoSeleccionado = null;
    this.detalleSeleccionado = null;
  }

  subproductoSeleccionado: any = null;

  seleccionarSubproducto(subproducto: any) {
    this.subproductoSeleccionado = subproducto;
    this.detalleSeleccionado = subproducto;
    this.imagenPresentacionActiva = subproducto.img;
    this.activeIndex = 0;
  }

  abrirProductoDesdeCategoria(producto: any) {
    this.productoSeleccionado = producto;
    this.subproductoSeleccionado = null;
    this.detalleSeleccionado = null;
  }

  abrirProductoDesdeBusqueda(subproducto: any) {
    this.subproductoSeleccionado = subproducto;
    this.detalleSeleccionado = subproducto;
    this.imagenPresentacionActiva = subproducto.img;
    this.activeIndex = 0;
  }

  volverAtrasSubproducto() {
    this.subproductoSeleccionado = null;
    this.imagenPresentacionActiva = null;
  }

  changeImage(index: number): void {
    this.activeIndex = index;
    const selectedImage = this.subproductoSeleccionado?.presentations?.[index];
    if (selectedImage) {
      this.imagenPresentacionActiva =
        typeof selectedImage === 'string' ? selectedImage : selectedImage.image;
    }
  }

  abrirWhatsApp() {
    const numero = '6682531211'; // o puedo this.sucursalActiva.telefono
    const mensaje = 'Hola, me gustaría más información';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  }

  openFileByType(tipo: 'fichaTecnica' | 'hojaSeguridad' | 'folleto') {
    if (!this.detalleSeleccionado) {
      console.error('No hay detalle (subproducto) seleccionado');
      return;
    }

    const descargables = this.detalleSeleccionado.descargables;
    if (!descargables) {
      console.error('No hay documentos descargables para este detalle');
      return;
    }

    let url = '';

    switch (tipo) {
      case 'fichaTecnica':
        url = descargables.fichaTecnica;
        break;
      case 'hojaSeguridad':
        url = descargables.hojaSeguridad;
        break;
      case 'folleto':
        url = descargables.folleto;
        break;
    }

    if (!url) {
      console.error(`No se encontró URL para tipo ${tipo}`);
      return;
    }

    this.openFile(url);
  }

  openFile(fileUrl: string) {
    if (this.platform.is('cordova') || this.platform.is('capacitor')) {
      const fileName = fileUrl.split('/').pop() || 'documento.pdf';

      this.http.get(fileUrl, { responseType: 'blob' }).subscribe(
        (blob) => {
          this.file
            .writeFile(this.file.dataDirectory, fileName, blob, {
              replace: true,
            })
            .then((fileEntry) => {
              this.fileOpener
                .open(fileEntry.nativeURL, 'application/pdf')
                .then(() => console.log('Archivo abierto'))
                .catch((err) => console.error('Error al abrir archivo', err));
            })
            .catch((err) => console.error('Error al escribir archivo', err));
        },
        (err) => {
          console.error('Error al descargar archivo', err);
        }
      );
    } else {
      window.open(fileUrl, '_blank');
    }
  }

  searchTerm: string = '';
  productosFiltrados: any[] = [];

  filtrarProductos(event: any) {
    this.searchTerm = event.target.value?.toLowerCase() || '';
    this.productosFiltrados = [];

    this.productoSeleccionado = null;
    this.subproductoSeleccionado = null;
    this.detalleSeleccionado = null;

    if (!this.searchTerm) {
      return;
    }

    for (const categoria of this.categorias) {
      for (const producto of categoria.productos) {
        for (const detalle of producto.detalles) {
          const titulo = detalle.title?.toLowerCase() || '';
          const ingrediente = detalle.ingredienteActivo?.toLowerCase() || '';

          if (
            titulo.includes(this.searchTerm) ||
            ingrediente.includes(this.searchTerm)
          ) {
            this.productosFiltrados.push(detalle);
          }
        }
      }
    }
  }
}

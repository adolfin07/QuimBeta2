import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { IonicModule, Platform } from '@ionic/angular';
import { Keyboard } from '@capacitor/keyboard';

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

  categorias: Categoria[] = [
    {
      nombre: 'Semillas',
      productos: [
        {
          id: 'semilla-maiz',
          title: 'Semilla De Maíz',
          img: '../assets/QUIMAGROAPP/seedling-solid.svg',
          detalles: [
            {
              id: 'DK-4050',
              title: 'DK-4050',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-4050.png',
              detalles: [],
              productTitle: 'DK-4050',
              description:
                'FAENA FUERTE® con Transorb® es un herbicida sistémico que contiene una nueva fórmula, única en el mercado de México y el mundo, que POTENCIALIZA LA VELOCIDAD DE PENETRACIÓN gracias a la tecnología Transorb®',
              ventajas:
                'Brinda un mejor desempeño y establece un nuevo estándar de control de malezas',
              presentations: [],
              ingredienteActivo:
                'Sal de potasio de N-(fosfonometil)-glicina; (sal de potasio de glifosato)',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DK-4050.pdf',
                hojaSeguridad: 'assets/pdfs/HojaSeguridad/FaenaClasico.pdf',
              },
            },
            {
              id: 'DK-5021',
              title: 'DK-5021',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-5021.png',
              detalles: [],
              productTitle: 'DK-5021',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DK-5021.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_dk2222.pdf',
              },
            },
            {
              id: 'DK-5024',
              title: 'DK-5024',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-5024.png',
              detalles: [],
              productTitle: 'DK-5024',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DK-5024.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_dk2222.pdf',
              },
            },
            {
              id: 'DK-4055',
              title: 'DK-4055',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-4055.png',
              detalles: [],
              productTitle: 'DK-4055',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DK-4055.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_dk2222.pdf',
              },
            },
            {
              id: 'DK-2048',
              title: 'DK-2048',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-2048.png',
              detalles: [],
              productTitle: 'DK-2048',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DK-2048.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_dk2222.pdf',
              },
            },
            {
              id: 'PRECEON DK-501SC',
              title: 'DK-501SC',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-501.png',
              detalles: [],
              productTitle: 'PRECEON DK-501SC',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DK-501.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_dk2222.pdf',
              },
            },
          ],
        },
        {
          id: 'semilla-sorgo',
          title: 'Semilla De Sorgo',
          img: '../assets/QUIMAGROAPP/seedling-solid.svg',
          detalles: [
            {
              id: 'DKS-40',
              title: 'DKS-40',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-40.png',
              detalles: [],
              productTitle: 'DKS-40',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-40.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_sorgoA.pdf',
              },
            },
            {
              id: 'DKS-2805',
              title: 'DKS-2805',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-2805.png',
              detalles: [],
              productTitle: 'DKS-2805',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-2805.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_sorgoA.pdf',
              },
            },
            {
              id: 'DKS-3607',
              title: 'DKS-3607',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-3607.png',
              detalles: [],
              productTitle: 'DKS-3607',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-3607.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_sorgoA.pdf',
              },
            },
            {
              id: 'DKS-26',
              title: 'DKS-26',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-26.png',
              detalles: [],
              productTitle: 'DKS-26',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-26.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_sorgoA.pdf',
              },
            },
            {
              id: 'DKS-820',
              title: 'DKS-820',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-820.png',
              detalles: [],
              productTitle: 'DKS-820',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-820.pdf',
                hojaSeguridad: 'https://example.com/hojas/seguridad_sorgoA.pdf',
              },
            },
          ],
        },
      ],
    },
    {
      nombre: 'Agroquimicos',
      productos: [
        {
          id: 'Faena',
          title: 'Faena',
          img: '../assets/QUIMAGROAPP/faena.svg',
          detalles: [
            {
              id: 'Faena Fuerte',
              title: 'Faena Fuerte',
              img: '../assets/QUIMAGROAPP/LOGOS/FAENAF.png',
              detalles: [],
              productTitle: 'Faena Fuerte',
              description: 'Eliminación efectiva de malezas.',
              ventajas: 'Uso seguro en cultivos de maíz.',
              presentations: [
                '../assets/QUIMAGROAPP/PRODUCTOS/FAENA FUERTE.png',
                '../assets/QUIMAGROAPP/PRODUCTOS/Faena Fuerte Garrafa.png',
              ],
              ingredienteActivo: 'Glifosato',
              descargables: {
                fichaTecnica: 'assets/QUIMAGROAPP/FICHAS/Ficha ',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Faena Fuerte.pdf ',
              },
            },
            {
              id: 'Faena Clásico',
              title: 'Faena Clásico',
              img: '../assets/QUIMAGROAPP/LOGOS/FAENA.png',
              detalles: [],
              productTitle: 'Faena Clásico',
              description: 'Control selectivo de malezas difíciles.',
              ventajas: 'Efectivo en pequeñas dosis.',
              presentations: [
                '../assets/QUIMAGROAPP/PRODUCTOS/FAENA CLASICO.png',
                '../assets/QUIMAGROAPP/PRODUCTOS/Faena Clasico Garrafa.png',
              ],
              ingredienteActivo: 'Glifosato',
              descargables: {
                fichaTecnica: 'https://example.com/fichas/herbicidaB.pdf',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Faena Clásico.pdf ',
              },
            },
          ],
        },
        {
          id: 'Fungicida',
          title: 'Fungicida',
          img: '../assets/QUIMAGROAPP/spray-can-solid.svg',
          detalles: [
            {
              id: 'Consist Max',
              title: 'Consist Max',
              img: '../assets/QUIMAGROAPP/LOGOS/CONSISTM.png',
              detalles: [],
              productTitle: 'Consist Max',
              description: 'Eliminación efectiva de malezas.',
              ventajas: 'Uso seguro en cultivos de maíz.',
              presentations: [
                '../assets/QUIMAGROAPP/PRODUCTOS/Consist Max.png',
              ],
              ingredienteActivo: 'TEBUCONAZOLE TRIFLOXYSTROBIN',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha tecnica_Consist Max.pdf',
                folleto: 'assets/QUIMAGROAPP/FOLLETOS/Folleto_Consist Max.pdf',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Consist Max.pdf ',
              },
            },
          ],
        },
        {
          id: 'herbicidas',
          title: 'Herbicidas',
          img: '../assets/QUIMAGROAPP/leaf-solid.svg',
          detalles: [
            {
              id: 'Defensa',
              title: 'Defensa',
              img: '../assets/QUIMAGROAPP/LOGOS/DEFENSA.png',
              detalles: [],
              productTitle: 'Defensa',
              description: 'Eliminación efectiva de malezas.',
              ventajas: 'Uso seguro en cultivos de maíz.',
              ingredienteActivo: 'PLICORAM',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha tecnica_Defensa.pdf',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_.pdf ',
              },
            },
            {
              id: 'Defensa NF',
              title: 'Defensa NF',
              img: '../assets/QUIMAGROAPP/LOGOS/DEFENSANF.png',
              detalles: [],
              productTitle: 'Defensa NF',
              description: 'Control selectivo de malezas difíciles.',
              ventajas: 'Efectivo en pequeñas dosis.',
              ingredienteActivo: 'AMINOPYRALID',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha Tecnica_Defensa NF.pdf',
                folleto: 'assets/QUIMAGROAPP/FOLLETOS/Folleto_Defensa NF.pdf',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Defensa NF.pdf ',
              },
            },
            {
              id: 'Harness',
              title: 'Harness',
              img: '../assets/QUIMAGROAPP/LOGOS/HARNESS.png',
              detalles: [],
              productTitle: 'Harness',
              description: 'Control selectivo de malezas difíciles.',
              ventajas: 'Efectivo en pequeñas dosis.',
              presentations: [
                '../assets/QUIMAGROAPP/PRODUCTOS/HARNESS Garrafa.png',
              ],
              ingredienteActivo: 'ACETOCLOR',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha tecnica_Harness.pdf',
                folleto: 'assets/QUIMAGROAPP/FOLLETOS/Folleto_Harness.pdf',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Harness.pdf ',
              },
            },
            {
              id: 'Harness Xtra',
              title: 'Harness Xtra',
              img: '../assets/QUIMAGROAPP/LOGOS/HARNESSX.png',
              detalles: [],
              productTitle: 'Harness Xtra',
              description: 'Control selectivo de malezas difíciles.',
              ventajas: 'Efectivo en pequeñas dosis.',
              presentations: [
                '../assets/QUIMAGROAPP/PRODUCTOS/HARNESS XTRA Garrafa.png',
              ],
              ingredienteActivo: 'ACETOCLOR ATRAZINA',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha tecnica_HarnessXtra.pdf',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Harness Xtra.pdf ',
              },
            },
            {
              id: 'Laudis',
              title: 'Laudis',
              img: '../assets/QUIMAGROAPP/LOGOS/LAUDIS.png',
              detalles: [],
              productTitle: 'Laudis',
              description: 'Control selectivo de malezas difíciles.',
              ventajas: 'Efectivo en pequeñas dosis.',
              ingredienteActivo: 'TEMBOTRINOE',
              presentations: ['../assets/QUIMAGROAPP/PRODUCTOS/LAUDIS.png'],
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha técnica_Laudis.pdf',
                folleto: 'assets/QUIMAGROAPP/FOLLETOS/Folleto_Laudis.pdf',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Laudis.pdf ',
              },
            },
          ],
        },
        {
          id: 'insecticidas',
          title: 'Insecticidas',
          img: '../assets/QUIMAGROAPP/bug-slash-solid.svg',
          detalles: [
            {
              id: 'Clavis',
              title: 'Clavis',
              img: '../assets/QUIMAGROAPP/LOGOS/CLAVIS.png',
              detalles: [],
              productTitle: 'Clavis',
              description: 'Control efectivo contra plagas comunes.',
              ventajas: 'No afecta polinizadores.',
              presentations: ['../assets/QUIMAGROAPP/PRODUCTOS/Clavis.png'],
              ingredienteActivo: 'TIODICARB TRIFLUMURON',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha tecnica_Clavis.pdf',
                folleto: 'assets/QUIMAGROAPP/FOLLETOS/Folleto_Clavis.pdf',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Clavis.pdf ',
              },
            },
            {
              id: 'Decis Forte',
              title: 'Decis Forte',
              img: '../assets/QUIMAGROAPP/LOGOS/DECISF.png',
              detalles: [],
              productTitle: 'Decis Forte',
              description: 'Control efectivo contra plagas comunes.',
              ventajas: 'No afecta polinizadores.',
              presentations: ['../assets/QUIMAGROAPP/PRODUCTOS/DecisForte.png'],
              ingredienteActivo: 'DELTAMETRINA',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha tecnica_Decis Forte.pdf',
                folleto: 'assets/QUIMAGROAPP/FOLLETOS/Folleto_Decis Forte.pdf',
                hojaSeguridad:
                  'https://example.com/hojas/seguridad_insecticidaX.pdf',
              },
            },
            {
              id: 'MURALLA MAX',
              title: 'MURALLA M',
              img: '../assets/QUIMAGROAPP/LOGOS/MURALLAM.png',
              detalles: [],
              productTitle: 'MURALLA MAX',
              description: 'Control efectivo contra plagas comunes.',
              ventajas: 'No afecta polinizadores.',
              presentations: [
                '../assets/QUIMAGROAPP/PRODUCTOS/Muralla Max.png',
              ],
              ingredienteActivo: 'IMIDACLOPRID BETACYFLUTRIN',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha tecnica_Muralla Max.pdf',
                folleto: 'assets/QUIMAGROAPP/FOLLETOS/Folleto_Muralla Max.pdf',
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Muralla Max.pdf ',
              },
            },
          ],
        },
        {
          id: 'Foliares',
          title: 'Foliares',
          img: '../assets/QUIMAGROAPP/droplet-solid.svg',
          detalles: [
            {
              id: 'BAYFOLAN F',
              title: 'BAYFOLAN F',
              img: '../assets/QUIMAGROAPP/LOGOS/BYFOLANF.png',
              detalles: [],
              productTitle: 'BAYFOLAN FORTE',
              description: 'Control efectivo contra plagas comunes.',
              ventajas: 'No afecta polinizadores.',
              presentations: [
                '../assets/QUIMAGROAPP/PRODUCTOS/BayfolanForte.png',
              ],
              ingredienteActivo: 'MICROELEMENTOS',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/Ficha tecnica_Bayfolan Forte.pdf',
                hojaSeguridad:
                  'https://example.com/hojas/seguridad_insecticidaX.pdf',
              },
            },
          ],
        },
      ],
    },
    {
      nombre: 'Fertilizantes',
      productos: [
        {
          id: 'fertilizante-a',
          title: 'Fertilizante A',
          img: '../assets/QUIMAGROAPP/flask-solid.svg',
          detalles: [
            {
              id: 'fertilizante-a1',
              title: 'Fertilizante',
              img: '../assets/QUIMAGROAPP/PRODUCTOS/Saco_fertilizante.png',
              detalles: [],
              productTitle: 'Fertilizante',
              description: 'Mejora la absorción de nutrientes.',
              ventajas: 'Ideal para cultivos de alto rendimiento.',
              ingredienteActivo: 'Nitrógeno, Fósforo',
              descargables: {
                fichaTecnica: 'https://example.com/fichas/fertilizanteA1.pdf',
                hojaSeguridad:
                  'https://example.com/hojas/seguridad_fertilizanteA1.pdf',
              },
            },
          ],
        },
        {
          id: 'fertilizante-b',
          title: 'Fertilizante B',
          img: '../assets/QUIMAGROAPP/flask-solid.svg',
          detalles: [
            {
              id: 'fertilizante-b1',
              title: 'Fertilizante',
              img: '../assets/QUIMAGROAPP/PRODUCTOS/Saco-mezclas físicas.png',
              detalles: [],
              productTitle: 'Fertilizante',
              description: 'Equilibra el pH del suelo.',
              ventajas: 'Mejora la retención de agua.',
              ingredienteActivo: 'Calcio',
              descargables: {
                fichaTecnica: 'https://example.com/fichas/fertilizanteB1.pdf',
                hojaSeguridad:
                  'https://example.com/hojas/seguridad_fertilizanteB1.pdf',
              },
            },
          ],
        },
      ],
    },
  ];

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
    private platform: Platform
  ) {}

  ngOnInit(): void {
    console.log('Producto:', this.producto);
  }

  selectTab(tab: 'productos' | 'buscar' | 'categorias') {
    this.selectedTab = tab;
    this.categoriaSeleccionada = null;
    this.productoSeleccionado = null;
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
    const numero = '6682531211'; // O usa this.sucursalActiva.telefono
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

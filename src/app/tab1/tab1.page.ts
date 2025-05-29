import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  row1Products = [
    {
      section: 'Faena',
      image:
        'https://boxagro.com/web/image/product.template/11996/image_1024?unique=e678d8c',
      name: 'Faena Fuerte',
      description:
        'Faena Fuerte es un herbicida sistémico no selectivo formulado con una concentración más alta de glifosato para un control rápido y efectivo de malezas anuales y perennes. Se aplica directamente sobre el follaje, desde donde se traslada a las raíces, eliminando completamente las plantas no deseadas.',
      IngredientesActivos: 'clifosato',
      presentations: [
        'https://boxagro.com/web/image/product.template/11996/image_1024?unique=e678d8c',
        'https://imaisa.com.mx/wp-content/uploads/2020/06/MONSA-001.jpg',
        'https://imaisa.com.mx/wp-content/uploads/2023/01/FAENA-10-LITROS-CON-MARCAEV.png',
      ],
      FichaTecnica: '/assets/pdfs/FichaTecnica/FaenaFuerte.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/FaenaFuerte.pdf',
    },
    {
      section: 'Faena',
      image:
        'https://palhogarshop.com.mx/cdn/shop/files/D_NQ_NP_648093-MLM75989572725_042024-O.webp?v=1729271879',
      name: 'Faena Clásico',
      description:
        'Faena Clásico es un herbicida sistémico no selectivo con glifosato, usado para controlar malezas en cultivos como frutales, maíz, sorgo y algodón tolerante a este herbicida. Se aplica sobre el follaje y se traslada a las raíces, causando la muerte de la planta en pocos días. Se recomienda usar con cuidado para evitar daños en cultivos deseados.',
      IngredientesActivos: 'clifosato',
      presentations: [
        'https://palhogarshop.com.mx/cdn/shop/files/D_NQ_NP_648093-MLM75989572725_042024-O.webp?v=1729271879',
        'https://ppq.mx/wp-content/uploads/2022/07/Faena-1Lto.jpg',
        'https://imaisa.com.mx/wp-content/uploads/2020/06/MONSA-007.jpg',
      ],
      FichaTecnica: '/assets/pdfs/FichaTecnica/FaenaClasico.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/FaenaClasico.pdf',
    },
  ];

  row2Products = [
    {
      section: 'Fungicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-CONSIST-MAX.jpg',
      name: 'Consist Max',
      description:
        'Consist Max es un herbicida sistémico formulado para el control eficaz de malezas difíciles en cultivos agrícolas. Contiene glifosato en alta concentración y se aplica sobre el follaje de las plantas, desde donde se traslada a las raíces para eliminar completamente las malezas. ',
      IngredientesActivos: 'Tebuconazole trifloxystrobin',
      presentations: [
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-CONSIST-MAX.jpg',
      ],
      FichaTecnica: '/assets/pdfs/FichaTecnica/ConsistMax.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/ConsistMax.pdf',
    },
  ];

  row3Products = [
    {
      section: 'Herbicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-DEFENSA.jpg',
      name: 'Defensa',
      description:
        'Defensa es un herbicida sistémico no selectivo formulado para el control efectivo de malezas en diversos cultivos. Contiene glifosato como ingrediente activo, que se absorbe por el follaje y se traslada hasta las raíces, eliminando completamente las plantas indeseadas.4-D',
      IngredientesActivos: 'picloram 2,4-d',
      presentations: [
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-DEFENSA.jpg',
        'https://http2.mlstatic.com/D_621922-MLM71594915652_092023-C.jpg',
        'https://http2.mlstatic.com/D_NQ_NP_766981-MLM31909551601_082019-O-defensa-10l-herbicida-picloran-control-de-maleza-y-arbustos.webp',
      ],
      FichaTecnica: '/assets/pdfs/FichaTecnica/Defensa.pdf',
      HojaSeguridad: '',
    },
    {
      section: 'Herbicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-DEFENSA.jpg',
      name: 'Defensa NF',
      description:
        'Defensa NF es un herbicida sistémico selectivo que combina picloram y 2,4-D para el control efectivo de malezas de hoja ancha, arbustivas y leñosas en pastizales y potreros, sin dañar los pastos establecidos. Se aplica de forma foliar y ayuda a mantener la calidad del pasto, mejorando la disponibilidad de forraje para el ganado.',
      IngredientesActivos: 'aminopyralid 2,4-d',
      presentations: [
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-DEFENSA.jpg',
        'https://http2.mlstatic.com/D_621922-MLM71594915652_092023-C.jpg',
        'https://http2.mlstatic.com/D_NQ_NP_766981-MLM31909551601_082019-O-defensa-10l-herbicida-picloran-control-de-maleza-y-arbustos.webp',
      ],
      FichaTecnica: '/assets/pdfs/FichaTecnica/DefensaNF.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/DefensaNF.pdf',
    },
    {
      section: 'Herbicida',
      image:
        'https://torke.com.mx/cdn/shop/files/Herbicida-Agricola-Harness-1-Litro.jpg?v=1689437720',
      name: 'Harness',
      description:
        'Este producto actúa inhibiendo la germinación de las semillas de malezas al ser absorbido por las raíces en proceso de germinación. Es especialmente efectivo en suelos con humedad, ya que requiere de esta condición para activarse adecuadamente.f',
      IngredientesActivos: 'acetoclor',
      FichaTecnica: '/assets/pdfs/FichaTecnica/Harness.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/Harness.pdf',
    },
    {
      section: 'Herbicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-syngenta-HARNESS-XTRA.jpg',
      name: 'Harness Xtra',
      description:
        'Harness® Xtra es un herbicida preemergente selectivo desarrollado por Bayer para el control de malezas en cultivos de maíz. Su formulación combina dos ingredientes activos: acetoclor (46.3%) y atrazina (18.4%), lo que le permite ofrecer un amplio espectro de control sobre malezas de hoja angosta y ancha, como zacate pitillo, zacate pinto, zacate salado, zacate cola de zorra, quelite, enredadera, gigantón, flor amarilla y hierba del pollo .',
      IngredientesActivos: 'acetoclor atrazina',
      FichaTecnica: '/assets/pdfs/FichaTecnica/HarnessXtra.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/HarnessXtra.pdf',
    },
    {
      section: 'Herbicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-LAUDIS.jpg',
      name: 'Laudis',
      description: 'Ingredientes Activos: TEMBOTRIONE',
      IngredientesActivos: 'tembotrione',
      FichaTecnica: '/assets/pdfs/FichaTecnica/Laudis.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/Laudis.pdf',
    },
  ];

  row4Products = [
    {
      section: 'Insecticida',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_745110-MLM51137055120_082022-O-clavis-1-litro-control-de-gusano-cogollero-4-hectareas.webp',
      name: 'Clavis',
      description:
        'Clavis® es un insecticida desarrollado por Bayer, diseñado específicamente para el control del gusano cogollero (Spodoptera frugiperda) en cultivos de maíz y sorgo. Su formulación combina dos ingredientes activos: tiodicarb (30%) y triflumurón (10%), que actúan de manera sinérgica para ofrecer un control eficaz de esta plaga.te Activo: TIODICARB + TRIFLUMURÓN',
      IngredientesActivos: 'tiodicarb triflumuron',
      FichaTecnica: '/assets/pdfs/FichaTecnica/Clavis.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/Clavis.pdf',
    },
    {
      section: 'Insecticida',
      image:
        'https://torke.com.mx/cdn/shop/files/Decis-Forte-Uso-Agricola-450-Ml-Deltametrina-Plaga-Gusano.jpg?v=1689275238',
      name: 'Decis Forte',
      description:
        'Decis® Forte es un insecticida piretroide formulado con deltametrina al 10% (100 g/L), desarrollado por Bayer para el control efectivo de diversas plagas en cultivos agrícolas. Actúa por contacto e ingestión sobre el sistema nervioso de los insectos, mostrando alta eficacia a dosis bajas y un rápido efecto de volteo.',
      IngredientesActivos: 'deltametrina',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DecisForte.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/DecisForte.pdf',
    },
    {
      section: 'Insecticida',
      image: 'https://imaisa.com.mx/wp-content/uploads/2020/04/BAYAG-005.jpg',
      name: 'Muralla Max',
      description:
        'Muralla Max® es un insecticida de Bayer formulado con imidacloprid (19.6%) y betacyfluthrin (8.4%), presentando una formulación OD (dispersión en aceite) que combina un neonicotinoide y un piretroide sintético. Esta combinación permite un control rápido y prolongado de diversas plagas en una amplia gama de cultivos',
      IngredientesActivos: 'imidacloprid betacyflutrin',
      FichaTecnica: '/assets/pdfs/FichaTecnica/MurallaMax.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/MurallaMax.pdf',
    },
  ];

  row5Products = [
    {
      section: 'Foliares',
      image:
        'https://www.comercialagropecuaria.mx/cdn/shop/products/Bayfolan_Forte.png?v=1565981358',
      name: 'Bayfolan Forte',
      description:
        'Los fertilizantes foliares son soluciones líquidas aplicadas directamente sobre las hojas de las plantas para proporcionar nutrientes esenciales de forma rápida y eficiente. Esta técnica de nutrición complementa la fertilización convencional al suelo, permitiendo una absorción casi inmediata por parte de la planta .',
      IngredientesActivos: 'n,p,k microelementos',
      presentations: [
        'https://www.comercialagropecuaria.mx/cdn/shop/products/Bayfolan_Forte.png?v=1565981358',
        'https://http2.mlstatic.com/D_NQ_NP_702690-MLM51188112466_082022-O.webp',
        'https://torke.com.mx/cdn/shop/files/bayfolan-forte-galon-4-litros-nutriente-foliar-para-plantas.jpg?v=1720544755',
      ],
      FichaTecnica: '/assets/pdfs/FichaTecnica/BayfolanForte.pdf',
      HojaSeguridad: '/assets/pdfs/HojaSeguridad/BayfolanForte.pdf',
    },
  ];

  row6Products = [
    {
      section: 'Semilla de Maíz',
      image:
        'https://static.orbia.ag/products/8a2a7337-6a92-4f00-aa5b-ac5af52872b8.png',
      name: 'DK-4050',
      description: '60,000 SEMILLAS',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DK-4050.pdf',
    },
    {
      section: 'Semilla de Maíz',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0Q2grD56OBfouRaDHteIdZIA5XW668BkMw&s',
      name: 'DK-5021',
      description: '60,000 SEMILLAS',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DK-5021.pdf',
    },
    {
      section: 'Semilla de Maíz',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bYNiHdXo7SM6xaa9BDmuw45dUekX-KwGmA&s',
      name: 'DK-5024',
      description: '60,000 SEMILLAS',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DK-4050.pdf',
    },
    {
      section: 'Semilla de Maíz',
      image: 'https://cosechometro.dekalb.mx/static/media/dk4055.f99017c2.png',
      name: 'DK-4055',
      description: '60,000 SEMILLAS',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DK-4055.pdf',
    },
    {
      section: 'Semilla de Maíz',
      image:
        'https://blob.luznoticias.mx/images/2022/09/09/texto-dk2048slideweb-5737ed18.png',
      name: 'DK-2048',
      description: '60,000 SEMILLAS',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DK-2048.pdf',
    },
    {
      section: 'Semilla de Maíz',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSbM4mcBPuuuBd_z-ZfmskjM_AgkOdt4wtQ&s',
      name: 'DK-501SC',
      description: '60,000 SEMILLAS',
    },
  ];

  row7Products = [
    {
      section: 'Semilla de Sorgo',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrCF4QdRBVwwFFI-cSrH0-woTawcY-4aBMw&s',
      name: 'DKS-40',
      description: 'Cantidad: 20KG',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DKS-40.pdf',
    },
    {
      section: 'Semilla de Sorgo',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kRfsReygpU_nXvxYehb6eKUrKolfV3sUFA&s',
      name: 'DKS-2805',
      description: 'Cantidad: 20KG',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DKS-2805.pdf',
    },
    {
      section: 'Semilla de Sorgo',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYoLq_-JLSFoIxwGHPUNBSbllUg4ZAJhpyw&s',
      name: 'DKS-3607',
      description: 'Cantidad: 20KG',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DKS-3607.pdf',
    },
    {
      section: 'Semilla de Sorgo',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqLHmaoq6oh45WQYEVovRTxn2N-Vw7IBWFg&s',
      name: 'DKS-26',
      description: 'Cantidad: 20KG',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DKS-26.pdf',
    },
    {
      section: 'Semilla de Sorgo',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06PQyA-AgIPlqd8ugQq3fVEdK1VPq992Wrg&s',
      name: 'DKS-820',
      description: 'Cantidad: 20KG',
      FichaTecnica: '/assets/pdfs/FichaTecnica/DKS-820.pdf',
    },
  ];

  filteredRow1Products = [...this.row1Products];
  filteredRow2Products = [...this.row2Products];
  filteredRow3Products = [...this.row3Products];
  filteredRow4Products = [...this.row4Products];
  filteredRow5Products = [...this.row5Products];
  filteredRow6Products = [...this.row6Products];
  filteredRow7Products = [...this.row7Products];

  searchQuery: string = '';

  selectedProduct: any = null;
  currentImage: string = '';
  productoActual: any = null;

  activeIndex: number = 0;
  isClosing = false;

  noProductsFound: boolean = false;

  @ViewChild('scrollContainer', { read: ElementRef })
  scrollContainer?: ElementRef;

  constructor(
    private platform: Platform,
    private http: HttpClient,
    private file: File,
    private fileOpener: FileOpener
  ) {}

  ngOnInit() {}

  removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterProducts() {
    const normalizedQuery = this.removeAccents(
      this.searchQuery.toLowerCase().trim()
    );

    if (!normalizedQuery) {
      this.filteredRow1Products = [...this.row1Products];
      this.filteredRow2Products = [...this.row2Products];
      this.filteredRow3Products = [...this.row3Products];
      this.filteredRow4Products = [...this.row4Products];
      this.filteredRow5Products = [...this.row5Products];
      this.filteredRow6Products = [...this.row6Products];
      this.filteredRow7Products = [...this.row7Products];
      this.noProductsFound = false;
      return;
    }

    const filterRow = (rowProducts: any[]) => {
      return rowProducts.filter(
        (product) =>
          this.removeAccents(product.name.toLowerCase()).includes(
            normalizedQuery
          ) ||
          this.removeAccents(product.section?.toLowerCase() || '').includes(
            normalizedQuery
          ) ||
          this.removeAccents(
            product.IngredientesActivos?.toLowerCase() || ''
          ).includes(normalizedQuery)
      );
    };

    this.filteredRow1Products = filterRow(this.row1Products);
    this.filteredRow2Products = filterRow(this.row2Products);
    this.filteredRow3Products = filterRow(this.row3Products);
    this.filteredRow4Products = filterRow(this.row4Products);
    this.filteredRow5Products = filterRow(this.row5Products);

    const filterRowNoIngred = (rowProducts: any[]) => {
      return rowProducts.filter(
        (product) =>
          this.removeAccents(product.name.toLowerCase()).includes(
            normalizedQuery
          ) ||
          this.removeAccents(product.section?.toLowerCase() || '').includes(
            normalizedQuery
          )
      );
    };

    this.filteredRow6Products = filterRowNoIngred(this.row6Products);
    this.filteredRow7Products = filterRowNoIngred(this.row7Products);

    // Actualizar flag para mostrar mensaje de "no resultados"
    this.noProductsFound =
      this.filteredRow1Products.length === 0 &&
      this.filteredRow2Products.length === 0 &&
      this.filteredRow3Products.length === 0 &&
      this.filteredRow4Products.length === 0 &&
      this.filteredRow5Products.length === 0 &&
      this.filteredRow6Products.length === 0 &&
      this.filteredRow7Products.length === 0;
  }

  selectProduct(product: any) {
    if (product) {
      this.selectedProduct = product;
      this.productoActual = product;
      this.resetPresentations();
    }
  }

  resetPresentations() {
    if (this.selectedProduct?.presentations?.length > 0) {
      this.activeIndex = 0;
      this.currentImage = this.selectedProduct.presentations[0];
    } else {
      this.activeIndex = -1;
      this.currentImage = this.selectedProduct?.image || '';
    }
  }

  changeImage(index: number): void {
    if (!this.selectedProduct?.presentations) return;
    if (index < 0 || index >= this.selectedProduct.presentations.length) return;

    this.activeIndex = index;
    this.currentImage = this.selectedProduct.presentations[index];
  }

  closeProduct() {
    this.isClosing = true;
    setTimeout(() => {
      this.selectedProduct = null;
      this.productoActual = null;
      this.activeIndex = -1;
      this.currentImage = '';
      this.isClosing = false;
    }, 300);
  }

  openFileByType(tipo: 'fichaTecnica' | 'hojaSeguridad') {
    if (!this.productoActual) {
      console.error('No hay producto seleccionado');
      return;
    }

    let url = '';

    switch (tipo) {
      case 'fichaTecnica':
        url = this.productoActual.FichaTecnica;
        break;
      case 'hojaSeguridad':
        url = this.productoActual.HojaSeguridad;
        break;
      default:
        console.error('Tipo de archivo no reconocido');
        return;
    }

    if (!url) {
      console.error('URL no definida para', tipo);
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
                .catch((err) =>
                  console.error('Error al abrir el archivo', err)
                );
            })
            .catch((err) => console.error('Error al escribir el archivo', err));
        },
        (err) => {
          console.error('Error al descargar el archivo', err);
        }
      );
    } else {
      window.open(fileUrl, '_blank');
    }
  }

  ionViewWillEnter() {
    if (this.scrollContainer?.nativeElement) {
      this.scrollContainer.nativeElement.scrollTop = 0;
    }
  }

  abrirWhatsApp() {
    const numero = '6682531211'; // O usa this.sucursalActiva.telefono
    const mensaje = 'Hola, me gustaría más información';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  }
}

import { Component, OnInit } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';

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
      description: 'Ingrediente Activo: CLIFOSATO',
      IngredientesActivos: 'clifosato',
      presentations: [
        'https://boxagro.com/web/image/product.template/11996/image_1024?unique=e678d8c',
        'https://imaisa.com.mx/wp-content/uploads/2020/06/MONSA-001.jpg',
        'https://imaisa.com.mx/wp-content/uploads/2023/01/FAENA-10-LITROS-CON-MARCAEV.png',
      ],
    },
    {
      section: 'Faena',
      image:
        'https://palhogarshop.com.mx/cdn/shop/files/D_NQ_NP_648093-MLM75989572725_042024-O.webp?v=1729271879',
      name: 'Faena Clásico',
      description: 'Ingrediente Activo: CLIFOSATO',
      IngredientesActivos: 'clifosato',
      presentations: [
        'https://palhogarshop.com.mx/cdn/shop/files/D_NQ_NP_648093-MLM75989572725_042024-O.webp?v=1729271879',
        'https://ppq.mx/wp-content/uploads/2022/07/Faena-1Lto.jpg',
        'https://imaisa.com.mx/wp-content/uploads/2020/06/MONSA-007.jpg',
      ],
    },
  ];

  row2Products = [
    {
      section: 'Fungicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-CONSIST-MAX.jpg',
      name: 'Consist Max',
      description: 'Ingrediente Activo: TEBUCONAZOLE + TRIFLOXYSTROBIN',
      IngredientesActivos: 'Tebuconazole trifloxystrobin',
      presentations: [
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-CONSIST-MAX.jpg',
      ],
    },
  ];

  row3Products = [
    {
      section: 'Herbicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-DEFENSA.jpg',
      name: 'Defensa',
      description: 'Ingrediente Activo: PICLORAM + 2,4-D',
      IngredientesActivos: 'picloram 2,4-d',
      presentations: [
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-DEFENSA.jpg',
        'https://http2.mlstatic.com/D_621922-MLM71594915652_092023-C.jpg',
        'https://http2.mlstatic.com/D_NQ_NP_766981-MLM31909551601_082019-O-defensa-10l-herbicida-picloran-control-de-maleza-y-arbustos.webp',
      ],
    },
    {
      section: 'Herbicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-DEFENSA.jpg',
      name: 'Defensa NF',
      description: 'Ingrediente Activo: AMINOPYRALID + 2,4-D',
      IngredientesActivos: 'aminopyralid 2,4-d',
      presentations: [
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-DEFENSA.jpg',
        'https://http2.mlstatic.com/D_621922-MLM71594915652_092023-C.jpg',
        'https://http2.mlstatic.com/D_NQ_NP_766981-MLM31909551601_082019-O-defensa-10l-herbicida-picloran-control-de-maleza-y-arbustos.webp',
      ],
    },
    {
      section: 'Herbicida',
      image:
        'https://torke.com.mx/cdn/shop/files/Herbicida-Agricola-Harness-1-Litro.jpg?v=1689437720',
      name: 'Harness',
      description: 'Ingrediente Activo: ACETOCLOR',
      IngredientesActivos: 'acetoclor',
    },
    {
      section: 'Herbicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-syngenta-HARNESS-XTRA.jpg',
      name: 'Harness Xtra',
      description: 'Ingrediente Activo: ACETOCLOR + ATRAZINA',
      IngredientesActivos: 'acetoclor atrazina',
    },
    {
      section: 'Herbicida',
      image:
        'https://mazorca.mx/wp-content/uploads/2021/11/la-mazorca-bayer-LAUDIS.jpg',
      name: 'Laudis',
      description: 'Ingredientes Activos: TEMBOTRIONE',
      IngredientesActivos: 'tembotrione',
    },
  ];

  row4Products = [
    {
      section: 'Insecticida',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_745110-MLM51137055120_082022-O-clavis-1-litro-control-de-gusano-cogollero-4-hectareas.webp',
      name: 'Clavis',
      description: 'Ingrediente Activo: TIODICARB + TRIFLUMURÓN',
      IngredientesActivos: 'tiodicarb triflumuron',
    },
    {
      section: 'Insecticida',
      image:
        'https://torke.com.mx/cdn/shop/files/Decis-Forte-Uso-Agricola-450-Ml-Deltametrina-Plaga-Gusano.jpg?v=1689275238',
      name: 'Decis Forte',
      description: 'Ingrediente Activo: DELTAMETRINA',
      IngredientesActivos: 'deltametrina',
    },
    {
      section: 'Insecticida',
      image: 'https://imaisa.com.mx/wp-content/uploads/2020/04/BAYAG-005.jpg',
      name: 'Muralla Max',
      description: 'Ingrediente Activo: IMIDACLOPRID + BETACYFLUTRIN',
      IngredientesActivos: 'imidacloprid betacyflutrin',
    },
  ];

  row5Products = [
    {
      section: 'Foliares',
      image:
        'https://www.comercialagropecuaria.mx/cdn/shop/products/Bayfolan_Forte.png?v=1565981358',
      name: 'Bayfolan Forte',
      description: 'Ingrediente Activo: N,P,K + MICROELEMENTOS',
      IngredientesActivos: 'n,p,k microelementos',
      presentations: [
        'https://www.comercialagropecuaria.mx/cdn/shop/products/Bayfolan_Forte.png?v=1565981358',
        'https://http2.mlstatic.com/D_NQ_NP_702690-MLM51188112466_082022-O.webp',
        'https://torke.com.mx/cdn/shop/files/bayfolan-forte-galon-4-litros-nutriente-foliar-para-plantas.jpg?v=1720544755',
      ],
    },
  ];

  row6Products = [
    {
      section: 'Semilla de Maíz',
      image:
        'https://static.orbia.ag/products/8a2a7337-6a92-4f00-aa5b-ac5af52872b8.png',
      name: 'DK-4050',
      description: '60,000 SEMILLAS',
    },
    {
      section: 'Semilla de Maíz',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0Q2grD56OBfouRaDHteIdZIA5XW668BkMw&s',
      name: 'DK-5021',
      description: '60,000 SEMILLAS',
    },
    {
      section: 'Semilla de Maíz',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bYNiHdXo7SM6xaa9BDmuw45dUekX-KwGmA&s',
      name: 'DK-5024',
      description: '60,000 SEMILLAS',
    },
    {
      section: 'Semilla de Maíz',
      image: 'https://cosechometro.dekalb.mx/static/media/dk4055.f99017c2.png',
      name: 'DK-4055',
      description: '60,000 SEMILLAS',
    },
    {
      section: 'Semilla de Maíz',
      image:
        'https://blob.luznoticias.mx/images/2022/09/09/texto-dk2048slideweb-5737ed18.png',
      name: 'DK-2048',
      description: '60,000 SEMILLAS',
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
    },
    {
      section: 'Semilla de Sorgo',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kRfsReygpU_nXvxYehb6eKUrKolfV3sUFA&s',
      name: 'DKS-2805',
      description: 'Cantidad: 20KG',
    },
    {
      section: 'Semilla de Sorgo',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYoLq_-JLSFoIxwGHPUNBSbllUg4ZAJhpyw&s',
      name: 'DKS-3607',
      description: 'Cantidad: 20KG',
    },
    {
      section: 'Semilla de Sorgo',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqLHmaoq6oh45WQYEVovRTxn2N-Vw7IBWFg&s',
      name: 'DKS-26',
      description: 'Cantidad: 20KG',
    },
    {
      section: 'Semilla de Sorgo',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06PQyA-AgIPlqd8ugQq3fVEdK1VPq992Wrg&s',
      name: 'DKS-820',
      description: 'Cantidad: 20KG',
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
  platform: any;
  http: any;
  product: any;
  products: any;
  selectedImage: any;

  constructor() {}

  ngOnInit() {}

  removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterProducts() {
    const normalizedQuery = this.removeAccents(this.searchQuery.toLowerCase());

    this.filteredRow1Products = this.row1Products.filter(
      (product) =>
        this.removeAccents(product.name.toLowerCase()).includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.section?.toLowerCase() || '').includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.IngredientesActivos.toLowerCase()).includes(
          normalizedQuery
        )
    );

    this.filteredRow2Products = this.row2Products.filter(
      (product) =>
        this.removeAccents(product.name.toLowerCase()).includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.section?.toLowerCase() || '').includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.IngredientesActivos.toLowerCase()).includes(
          normalizedQuery
        )
    );

    this.filteredRow3Products = this.row3Products.filter(
      (product) =>
        this.removeAccents(product.name.toLowerCase()).includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.section?.toLowerCase() || '').includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.IngredientesActivos.toLowerCase()).includes(
          normalizedQuery
        )
    );

    this.filteredRow4Products = this.row4Products.filter(
      (product) =>
        this.removeAccents(product.name.toLowerCase()).includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.section?.toLowerCase() || '').includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.IngredientesActivos.toLowerCase()).includes(
          normalizedQuery
        )
    );

    this.filteredRow5Products = this.row5Products.filter(
      (product) =>
        this.removeAccents(product.name.toLowerCase()).includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.section?.toLowerCase() || '').includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.IngredientesActivos.toLowerCase()).includes(
          normalizedQuery
        )
    );

    this.filteredRow6Products = this.row6Products.filter(
      (product) =>
        this.removeAccents(product.name.toLowerCase()).includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.section?.toLowerCase() || '').includes(
          normalizedQuery
        )
    );

    this.filteredRow7Products = this.row7Products.filter(
      (product) =>
        this.removeAccents(product.name.toLowerCase()).includes(
          normalizedQuery
        ) ||
        this.removeAccents(product.section?.toLowerCase() || '').includes(
          normalizedQuery
        )
    );
  }

  selectProduct(product: any) {
    if (product) {
      this.selectedProduct = product;
      this.currentImage = product.image;
    }
  }

  closeProduct() {
    this.selectedProduct = null;
    this.currentImage = '';

    // Espera a que termine la animación de salida antes de ocultar el template
    setTimeout(() => {
      this.selectedProduct = null;
    }, 400); // Duración de la animación de salida
  }

  changeImage(index: number): void {
    const presentations = this.selectedProduct?.presentations;
    if (presentations && presentations.length > index) {
      this.currentImage = presentations[index];
      this.activeIndex = index;
      this.selectedImage = this.selectedProduct.presentations[index];
      this.activeIndex = index;
      this.selectedImage = this.selectedProduct.presentations[index];
    }
  }

  activeIndex: number = 0;

  openFile(fileType: string) {
    const fileUrl = this.selectedProduct[fileType];
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    } else {
      console.error(`Archivo no disponible: ${fileType}`);
    }
  }
}

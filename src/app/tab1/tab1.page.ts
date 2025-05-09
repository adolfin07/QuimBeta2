import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  row1Products = [
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Rabbit_JE3_BE2.png?54089',
      name: 'Rabbit',
      description: 'La carne de conejo en Minecraft...',
      presentations: [
        'https://minecraft.wiki/images/Raw_Rabbit_JE3_BE2.png?54089',
        'https://minecraft.wiki/images/thumb/Baby_Toast_Rabbit_JE2_BE2.png/100px-Baby_Toast_Rabbit_JE2_BE2.png?a987f',
        'https://minecraft.wiki/images/thumb/Toast_Rabbit_JE2_BE2.png/150px-Toast_Rabbit_JE2_BE2.png?ec317',
      ],
    },
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Porkchop_JE3_BE3.png?f1c5f',
      name: 'Porkchop',
      description: 'La chuleta de cerdo en Minecraft...',
    },
    { image: 'assets/Products/products-row1/product1-r1.png', name: 'Sandía' },
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Mutton_JE3_BE2.png?ea808',
      name: 'Mutton',
      description: 'La carne de cordero en Minecraft...',
    },
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Chicken_JE3_BE3.png?549cd',
      name: 'Chicken',
      description: 'La carne de pollo en Minecraft...',
    },
    {
      section: 'populares1',
      image: 'https://minecraft.wiki/images/Raw_Beef_JE4_BE3.png?f3d10',
      name: 'Beef',
      description: 'La carne de vaca en Minecraft...',
    },
  ];

  row2Products = [
    {
      section: 'populares2',
      image: 'https://minecraft.wiki/images/Potato_JE3_BE2.png?27685',
      name: 'Potato',
      description: 'La papa en Minecraft...',
    },
    {
      image: 'https://minecraft.wiki/images/Melon_Slice_JE2_BE2.png?b8c6b',
      name: 'Melon',
      description: 'El melón en Minecraft...',
    },
    {
      image: 'https://minecraft.wiki/images/Apple_JE3_BE3.png?3853a',
      name: 'Apple',
      description: 'La manzana en Minecraft...',
    },
    {
      image: 'https://minecraft.wiki/images/Carrot_JE3_BE2.png?5e9c8',
      name: 'Carrot',
      description: 'La zanahoria en Minecraft...',
    },
    {
      image: 'https://minecraft.wiki/images/Beetroot_JE2_BE2.png?649dc',
      name: 'Beetroot',
      description: 'La remolacha en Minecraft...',
    },
  ];

  row3Products = [
    {
      section: 'populares3',
      image: 'https://minecraft.wiki/images/Cake_JE4.png?009f2',
      name: 'Cake',
      description: 'El pastel en Minecraft...',
    },
    {
      image: 'https://minecraft.wiki/images/Cookie_JE2_BE2.png?a911c',
      name: 'Cookie',
      description: 'La galleta en Minecraft...',
    },
    {
      image:
        'https://minecraft.wiki/images/thumb/Glow_Berries_JE1_BE1.png/150px-Glow_Berries_JE1_BE1.png?7c9cc',
      name: 'Glow Berries',
      description: 'Las bayas brillosas en Minecraft...',
    },
    {
      image: 'https://minecraft.wiki/images/Dried_Kelp_JE1_BE2.png?441be',
      name: 'Kelp',
      description: 'El kelp, o alga en Minecraft...',
    },
    {
      image:
        'https://minecraft.wiki/images/Pufferfish_%28item%29_JE5_BE2.png?c436f',
      name: 'Pufferfish',
      description: 'El pez globo en Minecraft...',
    },
  ];

  filteredRow1Products = [...this.row1Products];
  filteredRow2Products = [...this.row2Products];
  filteredRow3Products = [...this.row3Products];

  searchQuery: string = '';

  selectedProduct: any = null;
  currentImage: string = '';

  constructor() {}

  ngOnInit() {}

  removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  filterProducts() {
    const normalizedQuery = this.removeAccents(this.searchQuery.toLowerCase());

    this.filteredRow1Products = this.row1Products.filter((product) =>
      this.removeAccents(product.name.toLowerCase()).includes(normalizedQuery)
    );

    this.filteredRow2Products = this.row2Products.filter((product) =>
      this.removeAccents(product.name.toLowerCase()).includes(normalizedQuery)
    );

    this.filteredRow3Products = this.row3Products.filter((product) =>
      this.removeAccents(product.name.toLowerCase()).includes(normalizedQuery)
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
  }

  changeImage(index: number): void {
    const presentations = this.selectedProduct?.presentations;
    if (presentations && presentations.length > index) {
      this.currentImage = presentations[index];
    }
  }
}

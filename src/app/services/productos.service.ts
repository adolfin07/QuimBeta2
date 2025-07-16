import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProductoDetalle {
  id: string;
  title: string;
  img: string;
  detalles: ProductoDetalle[];
  productTitle: string;
  description?: string;
  ventajas?: string;
  ingredienteActivo?: string;
  descargables?: any; // Puedes definir un tipo más específico si quieres
  presentations?: any[];
}

export interface Producto {
  id: string;
  title: string;
  img: string;
  detalles: ProductoDetalle[];
}

export interface Categoria {
  nombre: string;
  productos: Producto[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private categoriasIniciales: Categoria[] = [
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
              img: '../assets/QUIMAGROAPP/LOGOS/DK-4050.jpg',
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
              },
            },
            {
              id: 'DK-5021',
              title: 'DK-5021',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-5021.jpg',
              detalles: [],
              productTitle: 'DK-5021',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DK-5021.pdf',
              },
            },
            {
              id: 'DK-5024',
              title: 'DK-5024',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-5024.jpg',
              detalles: [],
              productTitle: 'DK-5024',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {},
            },
            {
              id: 'DK-4055',
              title: 'DK-4055',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-4055.jpg',
              detalles: [],
              productTitle: 'DK-4055',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DK-4055.pdf',
              },
            },
            {
              id: 'DK-2048',
              title: 'DK-2048',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-2048.jpg',
              detalles: [],
              productTitle: 'DK-2048',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {},
            },
            {
              id: 'PRECEON DK-501SC',
              title: 'DK-501SC',
              img: '../assets/QUIMAGROAPP/LOGOS/DK-501.jpg',
              detalles: [],
              productTitle: 'PRECEON DK-501SC',
              description: 'Ideal para suelos secos y alta resistencia.',
              ventajas: 'Germina rápido y tolera sequías.',
              ingredienteActivo: 'N/A',
              descargables: {},
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
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-40.jpg',
              detalles: [],
              productTitle: 'DKS-40',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-40.pdf',
              },
            },
            {
              id: 'DKS-2805',
              title: 'DKS-2805',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-2805.jpg',
              detalles: [],
              productTitle: 'DKS-2805',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-2085.pdf',
              },
            },
            {
              id: 'DKS-3607',
              title: 'DKS-3607',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-3607.jpg',
              detalles: [],
              productTitle: 'DKS-3607',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-3607.pdf',
              },
            },
            {
              id: 'DKS-26',
              title: 'DKS-26',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-26.jpg',
              detalles: [],
              productTitle: 'DKS-26',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-26.pdf',
              },
            },
            {
              id: 'DKS-820',
              title: 'DKS-820',
              img: '../assets/QUIMAGROAPP/LOGOS/DKS-820.jpg',
              detalles: [],
              productTitle: 'DKS-820',
              description: 'Alta resistencia a plagas comunes.',
              ventajas: 'Crecimiento rápido y alto rendimiento.',
              presentations: [],
              ingredienteActivo: 'N/A',
              descargables: {
                fichaTecnica:
                  'assets/QUIMAGROAPP/FICHAS/SEMILLAS/Ficha tecnica_DKS-820.pdf',
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
              img: '../assets/QUIMAGROAPP/LOGOS/FAENA FUERTE.jpg',
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
                hojaSeguridad:
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Faena Fuerte.pdf ',
              },
            },
            {
              id: 'Faena Clásico',
              title: 'Faena Clásico',
              img: '../assets/QUIMAGROAPP/LOGOS/FAENA CLASICO.jpg',
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
              img: '../assets/QUIMAGROAPP/LOGOS/CONSIST MAX.jpg',
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
              id: 'Defensa NF',
              title: 'Defensa NF',
              img: '../assets/QUIMAGROAPP/LOGOS/DEFENSA NF.jpg',
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
              img: '../assets/QUIMAGROAPP/LOGOS/HARNESS.jpg',
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
              img: '../assets/QUIMAGROAPP/LOGOS/HARNESS XTRA.jpg',
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
              img: '../assets/QUIMAGROAPP/LOGOS/LAUDIS.jpg',
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
              img: '../assets/QUIMAGROAPP/LOGOS/CLAVIS.jpg',
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
              img: '../assets/QUIMAGROAPP/LOGOS/DECIS FORTE.jpg',
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
              },
            },
            {
              id: 'MURALLA MAX',
              title: 'MURALLA M',
              img: '../assets/QUIMAGROAPP/LOGOS/MURALLA MAX.jpg',
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
              img: '../assets/QUIMAGROAPP/LOGOS/BAYFOLAN.jpg',
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
                  'assets/QUIMAGROAPP/HOJA DE SEGURIDAD/Hoja de seguridad_Bayfolan Forte.pdf ',
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

  private categoriasSubject = new BehaviorSubject<Categoria[]>(
    this.categoriasIniciales
  );
  categorias$ = this.categoriasSubject.asObservable();

  constructor() {}

  getCategorias(): Categoria[] {
    return this.categoriasSubject.getValue();
  }

  setCategorias(categorias: Categoria[]) {
    this.categoriasSubject.next(categorias);
  }

  agregarCategoria(nombre: string) {
    const categorias = this.getCategorias();
    if (!categorias.find((cat) => cat.nombre === nombre)) {
      const nuevasCategorias = [...categorias, { nombre, productos: [] }];
      this.categoriasSubject.next(nuevasCategorias);
    }
  }

  agregarProducto(nombreCategoria: string, producto: Producto) {
    const categorias = this.getCategorias().map((cat) => {
      if (cat.nombre === nombreCategoria) {
        const existe = cat.productos.find((p) => p.id === producto.id);
        if (!existe) {
          return {
            ...cat,
            productos: [...cat.productos, producto],
          };
        }
      }
      return cat;
    });
    this.categoriasSubject.next(categorias);
  }

  agregarDetalle(
    nombreCategoria: string,
    idProducto: string,
    nuevoDetalle: ProductoDetalle
  ) {
    const categorias = this.getCategorias().map((cat) => {
      if (cat.nombre === nombreCategoria) {
        return {
          ...cat,
          productos: cat.productos.map((prod) => {
            if (prod.id === idProducto) {
              return {
                ...prod,
                detalles: [...prod.detalles, nuevoDetalle],
              };
            }
            return prod;
          }),
        };
      }
      return cat;
    });
    this.categoriasSubject.next(categorias);
  }

  editarDetalle(
    nombreCategoria: string,
    idProducto: string,
    detalleEditado: ProductoDetalle
  ) {
    const categorias = this.getCategorias().map((cat) => {
      if (cat.nombre === nombreCategoria) {
        return {
          ...cat,
          productos: cat.productos.map((prod) => {
            if (prod.id === idProducto) {
              return {
                ...prod,
                detalles: prod.detalles.map((detalle) =>
                  detalle.id === detalleEditado.id ? detalleEditado : detalle
                ),
              };
            }
            return prod;
          }),
        };
      }
      return cat;
    });
    this.categoriasSubject.next(categorias);
  }

  eliminarDetalle(
    nombreCategoria: string,
    idProducto: string,
    idDetalle: string
  ) {
    const categorias = this.getCategorias().map((cat) => {
      if (cat.nombre === nombreCategoria) {
        return {
          ...cat,
          productos: cat.productos.map((prod) => {
            if (prod.id === idProducto) {
              return {
                ...prod,
                detalles: prod.detalles.filter(
                  (detalle) => detalle.id !== idDetalle
                ),
              };
            }
            return prod;
          }),
        };
      }
      return cat;
    });
    this.categoriasSubject.next(categorias);
  }
}

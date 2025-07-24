import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ProductosService,
  Categoria,
  ProductoDetalle,
  Card,
} from '../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {
  categorias: Categoria[] = [];
  detalleSeleccionado: ProductoDetalle | null = null;
  categoriaSeleccionada: string = '';
  productoSeleccionadoId: string = '';
  formEditar: FormGroup;

  cards: Card[] = [];

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService,
    private router: Router
  ) {
    this.formEditar = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      img: [''],
      description: [''],
      ventajas: [''],
      ingredienteActivo: [''],
      presentations: [''],
      hojaSeguridad: [''],
    });
  }

  ngOnInit() {
    // Suscripción a categorías
    this.productosService.categorias$.subscribe((categorias) => {
      this.categorias = categorias;

      if (
        this.categoriaSeleccionada &&
        this.productoSeleccionadoId &&
        this.detalleSeleccionado
      ) {
        const categoria = categorias.find(
          (c) => c.nombre === this.categoriaSeleccionada
        );
        const producto = categoria?.productos.find(
          (p) => p.id === this.productoSeleccionadoId
        );
        const detalle = producto?.detalles.find(
          (d) => d.id === this.detalleSeleccionado!.id
        );

        if (detalle) {
          this.detalleSeleccionado = detalle;
          this.formEditar.patchValue({
            id: detalle.id,
            title: detalle.title,
            img: detalle.img,
            description: detalle.description,
            ventajas: detalle.ventajas,
            ingredienteActivo: detalle.ingredienteActivo,
            presentations: detalle.presentations
              ? detalle.presentations.join(', ')
              : '',
            hojaSeguridad: detalle.descargables?.hojaSeguridad || '',
          });
        }
      }
    });

    // 🔁 Suscripción independiente a cards
    this.productosService.cards$.subscribe((cards) => {
      console.log('Cards actualizados en el componente:', cards);
      this.cards = cards;
    });
  }

  toUserForm() {
    this.router.navigate(['/login']);
  }

  seleccionarDetalle(
    nombreCategoria: string,
    idProducto: string,
    detalle: ProductoDetalle
  ) {
    this.categoriaSeleccionada = nombreCategoria;
    this.productoSeleccionadoId = idProducto;
    this.detalleSeleccionado = detalle;

    this.formEditar.patchValue({
      id: detalle.id,
      title: detalle.title,
      img: detalle.img,
      description: detalle.description,
      ventajas: detalle.ventajas,
      ingredienteActivo: detalle.ingredienteActivo,
      presentations: detalle.presentations
        ? detalle.presentations.join(', ')
        : '',
      hojaSeguridad: detalle.descargables?.hojaSeguridad || '',
    });
  }

  guardarCambios() {
    if (this.formEditar.invalid) {
      alert('Por favor, complete los campos requeridos');
      return;
    }

    if (!this.detalleSeleccionado) {
      alert('No hay detalle seleccionado');
      return;
    }

    const formValue = this.formEditar.value;

    const detalleEditado: ProductoDetalle = {
      ...this.detalleSeleccionado,
      id: formValue.id,
      title: formValue.title,
      img: formValue.img,
      description: formValue.description,
      ventajas: formValue.ventajas,
      ingredienteActivo: formValue.ingredienteActivo,
      presentations: formValue.presentations
        ? formValue.presentations.split(',').map((p: string) => p.trim())
        : [],
      descargables: {
        hojaSeguridad: formValue.hojaSeguridad,
      },
      detalles: this.detalleSeleccionado.detalles || [],
      productTitle: formValue.title,
    };

    this.productosService.editarDetalle(
      this.categoriaSeleccionada,
      this.productoSeleccionadoId,
      detalleEditado
    );

    // Actualizar localmente para reflejar en UI
    this.detalleSeleccionado = detalleEditado;

    this.formEditar.patchValue({
      id: detalleEditado.id,
      title: detalleEditado.title,
      img: detalleEditado.img,
      description: detalleEditado.description,
      ventajas: detalleEditado.ventajas,
      ingredienteActivo: detalleEditado.ingredienteActivo,
      presentations: detalleEditado.presentations
        ? detalleEditado.presentations.join(', ')
        : '',
      hojaSeguridad: detalleEditado.descargables?.hojaSeguridad || '',
    });

    alert('Cambios guardados correctamente');
  }

  saveCard(index: number) {
    console.log('Guardando card', this.cards[index]);
    this.productosService.updateCard(index, this.cards[index]);
    alert('Card guardada correctamente');
  }
}

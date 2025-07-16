import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ProductosService,
  Categoria,
  ProductoDetalle,
} from '../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {
  toUserForm() {
    this.router.navigate(['/login']);
  }

  categorias: Categoria[] = [];
  detalleSeleccionado: ProductoDetalle | null = null;
  categoriaSeleccionada: string = '';
  productoSeleccionadoId: string = '';
  formEditar: FormGroup;

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
    this.productosService.categorias$.subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  seleccionarDetalle(
    nombreCategoria: string,
    idProducto: string,
    detalle: ProductoDetalle
  ) {
    this.categoriaSeleccionada = nombreCategoria;
    this.productoSeleccionadoId = idProducto;
    this.detalleSeleccionado = detalle;

    // Mapear datos al formulario (presentations y hojaSeguridad como string)
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

    // Crear objeto actualizado
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

    alert('Cambios guardados correctamente');
  }
}

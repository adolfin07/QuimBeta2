import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  AdminInterface() {
    this.router.navigate(['../tab4']);
  }
  constructor(private router: Router) {}

  signUp() {
    this.router.navigate(['/sign-up']);
  }

  toUser() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    // Escuchar la apertura del teclado
    Keyboard.addListener('keyboardWillShow', (info) => {
      document.body.style.paddingBottom = `${info.keyboardHeight}px`;
    });

    // Escuchar el cierre del teclado
    Keyboard.addListener('keyboardWillHide', () => {
      document.body.style.paddingBottom = '0px';
    });
  }
}

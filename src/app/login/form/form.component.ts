import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['../../tabs/tab1']);
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.login();
    }
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './adminLogin.page.html',
  styleUrls: ['./adminLogin.page.scss'],
  standalone: false,
})
export class adminLoginPage {
  username: any;
  password: any;
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/tabs']);
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.login();
    }
  }
}

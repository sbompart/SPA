import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor ( private router: Router ){}

  buscar(txt: string){
    this.router.navigate(['search', txt]);
  }

}

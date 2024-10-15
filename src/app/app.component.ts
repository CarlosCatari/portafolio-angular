import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { ContactComponent } from './componentes/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-navbar></app-navbar>
    <app-main></app-main>
    <app-contact></app-contact>
  `,
  imports: [NavbarComponent, MainComponent, ContactComponent],
})
export class AppComponent {
  title = 'portafolio';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-navbar></app-navbar>
    <app-main></app-main>
    <app-aboutme></app-aboutme>
    <app-projects></app-projects>
    <app-contact></app-contact>
    <app-footer></app-footer>

  `,
  imports: [
    NavbarComponent,
    MainComponent,
    AboutmeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
})
export class AppComponent {
  title = 'portafolio';
}

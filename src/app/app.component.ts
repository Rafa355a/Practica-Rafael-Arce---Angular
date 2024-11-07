import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component'; // Importa NavbarComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterModule, // Importa RouterModule para `router-outlet`
    NavbarComponent // Importa NavbarComponent para que Angular reconozca <app-navbar>
  ]
})
export class AppComponent {
  title = 'ikomiPeruApp';
}




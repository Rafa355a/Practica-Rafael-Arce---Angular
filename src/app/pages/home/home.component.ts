import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-home',
  standalone: true,  // Indica que es un componente independiente
  imports: [CommonModule],  // Añade CommonModule aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  // Arreglo de productos
  products = [
    { id: 1, name: 'Disco de Embrague', category: 'clutch', image: 'assets/disco-embrague.jpg' },
    { id: 2, name: 'Corona de Piñón', category: 'gear', image: 'assets/pinoncaja.jpg' },
    { id: 3, name: 'Parte de Caja', category: 'gear', image: 'assets/pinoncaja.jpg' },
    { id: 4, name: 'Pastilla de Freno', category: 'brake', image: 'assets/pastillafreno.jpg' },
    { id: 5, name: 'Piñón', category: 'gear', image: 'assets/pinoncaja.jpg' },
    { id: 6, name: 'Collarín de Embrague', category: 'clutch', image: 'assets/platoembrague.jpg' },
    { id: 7, name: 'Zapata de Freno', category: 'brake', image: 'assets/zapatafreno.jpg' },
    { id: 8, name: 'Producto Nuevo', category: 'new', image: 'assets/imagen-de-fondo.jpg' }
  ];

  // Arreglo para almacenar los productos filtrados
  filteredProducts = this.products;

  constructor() {}

  ngAfterViewInit() {
    const serviceCards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    serviceCards.forEach((card) => {
      observer.observe(card);
    });
  }

  // Función para filtrar productos por categoría
  filterProducts(category: string): void {
    if (category === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }
}

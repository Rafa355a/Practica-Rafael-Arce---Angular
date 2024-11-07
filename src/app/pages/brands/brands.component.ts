import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const marcaCards = document.querySelectorAll('.marca-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.2 }
    );

    marcaCards.forEach((card) => observer.observe(card));
  }
}

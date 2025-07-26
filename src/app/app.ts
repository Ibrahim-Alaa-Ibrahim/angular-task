import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('product-list-app');
  protected products = signal<any[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error('Error fetching products:', err)
    });
  }
}

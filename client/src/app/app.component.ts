import { HttpClient } from '@angular/common/http';
import { AbstractType, Component, OnInit } from '@angular/core';
import { IProduct } from './interfaces/product';
import { IPagination } from './interfaces/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  products: IProduct[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://localhost:44332/api/products').subscribe(
      (response: IPagination) => {
        this.products = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

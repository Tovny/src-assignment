import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from 'src/app/shared/models/api-endpoints.model';
import { BaseApiService } from 'src/app/shared/services/base-api.service';
import { Product } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseApiService<Product> {
  constructor(protected override http: HttpClient) {
    super(http, ApiEndpoints.PRODUCTS, 30);
  }
}

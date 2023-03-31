import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from 'src/app/shared/models/ApiEndpoints.model';
import { BaseApiService } from 'src/app/shared/services/baseApi.service';
import { Cart } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class CartsService extends BaseApiService<Cart> {
  constructor(protected override http: HttpClient) {
    super(http, ApiEndpoints.CARTS);
  }
}
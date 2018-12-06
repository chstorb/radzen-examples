import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from './config.service';
import { ODataClient } from './odata-client';
import * as models from './sample.model';

@Injectable()
export class SampleService {
  odata: ODataClient;
  basePath: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.basePath = config.get('sample');
    this.odata = new ODataClient(this.http, this.basePath, { legacy: false, withCredentials: true });
  }

  getOrders(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/Orders`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createOrder(order: models.Order | null) {
    return this.odata.post(`/Orders`, order);
  }

  deleteOrder(id: number | null) {
    return this.odata.delete(`/Orders(${id})`, item => !(item.Id == id));
  }

  getOrderById(id: number | null) {
    return this.odata.get(`/Orders(${id})`);
  }

  updateOrder(id: number | null, order: models.Order | null) {
    return this.odata.patch(`/Orders(${id})`, order, item => item.Id == id);
  }

  getOrderDetails(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/OrderDetails`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createOrderDetail(orderDetail: models.OrderDetail | null) {
    return this.odata.post(`/OrderDetails`, orderDetail);
  }

  deleteOrderDetail(id: number | null) {
    return this.odata.delete(`/OrderDetails(${id})`, item => !(item.Id == id));
  }

  getOrderDetailById(id: number | null) {
    return this.odata.get(`/OrderDetails(${id})`);
  }

  updateOrderDetail(id: number | null, orderDetail: models.OrderDetail | null) {
    return this.odata.patch(`/OrderDetails(${id})`, orderDetail, item => item.Id == id);
  }

  getProducts(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) {
    return this.odata.get(`/Products`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createProduct(product: models.Product | null) {
    return this.odata.post(`/Products`, product);
  }

  deleteProduct(id: number | null) {
    return this.odata.delete(`/Products(${id})`, item => !(item.Id == id));
  }

  getProductById(id: number | null) {
    return this.odata.get(`/Products(${id})`);
  }

  updateProduct(id: number | null, product: models.Product | null) {
    return this.odata.patch(`/Products(${id})`, product, item => item.Id == id);
  }
}

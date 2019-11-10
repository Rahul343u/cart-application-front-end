import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantData } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http.get(ConstantData.ItemUrl);
  }
}

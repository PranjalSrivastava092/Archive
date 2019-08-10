import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Model} from "../models/Model.model";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {
  }

  getData(): Observable<Model> {
    return this.http.get<Model>('http://localhost:8080/api/getAll')
      .pipe(
        map(res => new Model().deserialize(res))
      );
  }
}
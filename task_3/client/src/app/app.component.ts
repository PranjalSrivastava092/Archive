import { Component, OnInit } from '@angular/core';
import { ApiService } from "./services/api.service";
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";
import { Model } from "./models/Model.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	data: Model[];

	constructor(private apiService: ApiService) {
  	}

  	ngonInit(){
  		interval(10000)
  			.pipe(
  				startwith(0),
  				switchMap(() => this.apiService.getAll()
  			)
  			.subscribe(res => this.data = res.data);
  	}
}

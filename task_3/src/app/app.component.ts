import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
 
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	private loader = false;
	private page = 1;
	private employees : any;
	pollingData: any;
	errors: any; 
	constructor(public http:HttpClient) {
		//this.employees.data = [];
		this.loader = true;
		this.pollingData = Observable.interval(10000)
		.switchMap(() => http.get('https://reqres.in/api/users?page='+this.page))
		.subscribe(
		data => {
		this.employees = data; 
		this.loader = false;
		console.log(data);// see console you get output every 5 sec
		this.page = this.page +1;
		//reset page number
		if(this.page === 4)
		this.page = 1;
		},
		error => {
		this.errors = error;
		}
		);
	}
 
	ngOnDestroy() {
		this.pollingData.unsubscribe();
	}
}
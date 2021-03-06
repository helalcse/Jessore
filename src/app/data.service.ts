import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
    constructor(private http: HttpClient){}

    getNavigationBar(){
        return this.http.get('assets/data/NavigationBar.json');
    }

}
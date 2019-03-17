import { Component } from '@angular/core';
import { NavigationBar } from './model/NavigationBar';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jessore';


  navigationBar:NavigationBar[]=[];
  constructor(private dataService: DataService) {

    this.dataService.getNavigationBar().subscribe(
      res=>{
        this.navigationBar=JSON.parse(JSON.stringify(res));
        console.log(this.navigationBar)
      }
    );
  }
}

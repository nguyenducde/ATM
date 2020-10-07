import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Platform} from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public dataReceive:object;

  constructor(
    public activatedRoute:ActivatedRoute,
    private router: Router,
    public platform: Platform
    ) {
        this.activatedRoute.queryParams.subscribe((data) => {
        this.dataReceive=data;
    })
  }

  async takePhoto(){
    this.router.navigateByUrl('/camera');
  }
  async  detail()
  { 
    this.router.navigate(['detal-user'], {queryParams: this.dataReceive });
  }
  async exit(){
    
  }


}

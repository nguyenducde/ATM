import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-detal-user',
  templateUrl: './detal-user.page.html',
  styleUrls: ['./detal-user.page.scss'],
})
export class DetalUserPage implements OnInit {
  public dataReceive:object;
  constructor(public activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((data) => {
      this.dataReceive=data;
    })
  }

  ngOnInit() {
  }

}

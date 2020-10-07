import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { AlertController, IonList } from "@ionic/angular";
import {  NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string;
public password: string;

  constructor(private dataService: DataService,private alert: AlertController,private router: Router) {
  

   }

  ngOnInit() {
    
  }
  async login(){
    
    let user={username:this.username,
              password:this.password,
              amount:100000
            };
    this.router.navigate(['home'], {queryParams:  user });
  }
  async them()
    { 
      let object={username:this.username,password:this.password};
      this.dataService.get().then((val)=>{
      if(val.username==this.username){
        this.checkThem();
      }
      else{
        this.dataService.set(object);
        this.notifications();
      }
      })   
    }
  async xoa(){
      this.dataService.remove(this.username);
      this.checkXoa();
    }
  async xemtatca()
  { 
    this.dataService.get().then(data =>{
      this.alert.create({
        header: 'Xem tất cả tài khoản',
        message: data.username,
        buttons: ['OK']
      }).then(res => {
        res.present();
      });
    })
   
  }

 public async checkThem(){
  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    header: 'Kết quả',
    subHeader: 'Tài khoản '+this.username+' đã có sẵn',
 
    buttons: ['OK']
  });
  await alert.present();
 }

  public async checkXoa(){
    if(this.username==null)
    {
      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        subHeader: 'Vui lòng nhập tên tài khoản cần xóa',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        header: 'Kết quả',
        subHeader: 'Tài khoản '+this.username+' đã xóa',
        buttons: ['OK']
      });
      await alert.present();
    }
   
  }
  public async notifications(){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Kết quả',
      subHeader: 'Thêm tài khoản '+this.username+' thành công ',
      buttons: ['OK']
    });
    await alert.present();
  }
 
  
}

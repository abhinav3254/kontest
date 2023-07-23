import { Component, OnInit } from '@angular/core';
import { KontestServicesService } from '../app/services/kontest-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myFun(kurl: any) {
    window.open(kurl, '_blank')
    // alert(kurl);
  }
  title = 'kontest';
  kontestArray = new Array<any>();

  constructor(public kontestServicesService: KontestServicesService) { }

  ngOnInit(): void {
    this.kontestServicesService.getKontest().subscribe(res => {
      this.kontestArray = res;
    });
  }

}

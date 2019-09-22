import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'ng2-dropdown';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    latestReports: Array<any> = [
    { id: '1', img: '/assets/images/report1.png', title: 'Citroen C4 I', subtitle: '2007, Санкт-Петербург' },
    { id: '2', img: '/assets/images/report2.png', title: 'Porsche Cayenne 958', subtitle: '2010, Москва' },
    { id: '3', img: '/assets/images/report3.png', title: 'Audi A6 C7', subtitle: '2012, Казань' },
    { id: '4', img: '/assets/images/report4.png', title: 'Daewoo Nexia', subtitle: '2008, Москва' },
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  // latestReports: Array<any> = [
  //   { id: '1', img: '/assets/images/c4.png', title: 'Citroen C4 I', subtitle: '2007, Санкт-Петербург' },
  //   { id: '2', img: '/assets/images/cayenne.jpg', title: 'Porsche Cayenne 958', subtitle: '2010, Москва' },
  //   { id: '3', img: '/assets/images/a6c7.jpg', title: 'Audi A6 C7', subtitle: '2012, Казань' },
  //   { id: '4', img: '/assets/images/nexia.jpg', title: 'Daewoo Nexia', subtitle: '2008, Москва' },
  //   { id: '5', img: '/assets/images/transit.jpg', title: 'Ford Transit VI', subtitle: '2006, Саратов' }
  // ];

  makelist: Array<string> = ['', 'Audi', 'BMW', 'Chery', 'Chevrolet', 'Citroen',
  'Daewoo', 'Datsun', 'Ford', 'Geely', 'Haval', 'Honda', 'Hyundai', 'Infiniti', 'Kia',
  'Lada', 'Land Rover', 'Lexus', 'Lifan', 'Mazda', 'Mercedes-Benz', 'Mitsubishi',
  'Nissan', 'Opel', 'Peugeot', 'Porsche', 'Renault', 'Skoda', 'SsangYong', 'Subaru',
  'Suzuki', 'Toyota', 'Volkswagen', 'Volvo', 'ГАЗ', 'УАЗ']

  constructor() {
   }

  ngOnInit() {
  }

}

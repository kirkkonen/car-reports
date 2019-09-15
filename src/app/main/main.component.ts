import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  reports: Array<any> = []

  makelist: Array<string> = ['', 'Audi', 'BMW', 'Chery', 'Chevrolet', 'Citroen',
  'Daewoo', 'Datsun', 'Ford', 'Geely', 'Haval', 'Honda', 'Hyundai', 'Infiniti', 'Kia',
  'Lada', 'Land Rover', 'Lexus', 'Lifan', 'Mazda', 'Mercedes-Benz', 'Mitsubishi',
  'Nissan', 'Opel', 'Peugeot', 'Porsche', 'Renault', 'Skoda', 'SsangYong', 'Subaru',
  'Suzuki', 'Toyota', 'Volkswagen', 'Volvo', 'ГАЗ', 'УАЗ']

  constructor() {
    this.reports = [
      { name: '/assets/images/c4.png', title: 'Citroen C4 I' },
      { name: '/assets/images/cayenne.jpg', title: 'Porsche Cayenne 958' },
      { name: '/assets/images/a6c7.jpg', title: 'Audi A6 C7' },
      { name: '/assets/images/nexia.jpg', title: 'Daewoo Nexia' },
      { name: '/assets/images/transit.jpg', title: 'Ford Transit VI' },
    ]
   }

  ngOnInit() {
  }

}

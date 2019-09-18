import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})
export class MakeComponent implements OnInit {

  modellist: Array<string> = ['', 'Audi', 'BMW', 'Chery', 'Chevrolet', 'Citroen',
  'Daewoo', 'Datsun', 'Ford', 'Geely', 'Haval', 'Honda', 'Hyundai', 'Infiniti', 'Kia',
  'Lada', 'Land Rover', 'Lexus', 'Lifan', 'Mazda', 'Mercedes-Benz', 'Mitsubishi',
  'Nissan', 'Opel', 'Peugeot', 'Porsche', 'Renault', 'Skoda', 'SsangYong', 'Subaru',
  'Suzuki', 'Toyota', 'Volkswagen', 'Volvo', 'ГАЗ', 'УАЗ']

  constructor() { }

  ngOnInit() {
  }

}

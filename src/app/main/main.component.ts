import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  makelist: Array<any> = [
    { make: '', reports: ''},
    { make: 'Audi', reports: '122'},
    { make: 'BMW', reports: '234'},
    { make: 'Citroen', reports: '365'},
    { make: 'Ford', reports: '1298'},
    { make: 'Honda', reports: '334'},
    { make: 'Hyundai', reports: '287'},
    { make: 'Kia', reports: '398'},
    { make: 'Lada', reports: '417'},
    { make: 'Land Rover', reports: '399'},
    { make: 'Lexus', reports: '323'},
    { make: 'Mazda', reports: '285'},
    { make: 'Mercedes-Benz', reports: '446'},
    { make: 'Mitsubishi', reports: '284'},
    { make: 'Nissan', reports: '255'},
    { make: 'Opel', reports: '386'},
    { make: 'Peugeot', reports: '298'},
    { make: 'Renault', reports: '190'},
    { make: 'Skoda', reports: '337'},
    { make: 'Subaru', reports: '103'},
    { make: 'Suzuki', reports: '179'},
    { make: 'Toyota', reports: '778'},
    { make: 'Volkswagen', reports: '889'},
    { make: 'Volvo', reports: '237'},
  ]

  constructor() {
   }

  ngOnInit() {
  }

}

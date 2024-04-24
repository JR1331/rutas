import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnInit{
  ngOnInit(): void {
    console.log(`id recibido ${this.id}`);
  }
  @Input()
  id:string='';


  realEstates = [
    {
      id:'1',
      nombre: 'House',
      descripcion: 'A beautiful house with a garden.',
      precio: 500000,
      habitaciones: 4
    },
    {
      id:'2',
      nombre: 'Apartment',
      descripcion: 'A cozy apartment in the city center.',
      precio: 300000,
      habitaciones: 2
    },
    {
      id:'3',
      nombre: 'Townhouse',
      descripcion: 'A stylish townhouse with modern design.',
      precio: 400000,
      habitaciones: 3
    }
  ];

}

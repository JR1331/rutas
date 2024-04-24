import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  inmuebles=[
    {id:'1',nombre:'Vivienda vertical',descripcion:'---', ruta:'../../assets/img/vivienda1.jpg'},
    {id:'2',nombre:'Inmueble para oficinas',descripcion:'---', ruta:'../../assets/img/vivienda2.png'},
    {id:'3',nombre:'Vivienda horizontal',descripcion:'---', ruta:'../../assets/img/vivienda3.jpeg'},
  ]

}

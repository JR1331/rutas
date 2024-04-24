import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blogciber',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './blogciber.component.html',
  styleUrl: './blogciber.component.css'
})
export class BlogciberComponent {
  cursos=[
    {id:'1',nombre:'Hacking etico',descripcion:'descripcion1', ruta:'../../assets/img/vivienda1.jpg'},
    {id:'2',nombre:'Legislacion de la Seguridad en Europa',descripcion:'descripcion2', ruta:'../../assets/img/vivienda2.png'},
    {id:'3',nombre:'¿Cómo evitar que te hackeen la cuenta?',descripcion:'descripcion3', ruta:'../../assets/img/vivienda3.jpeg'},
    {id:'4',nombre:'¿Qué es phising?',descripcion:'descripcion4', ruta:'../../assets/img/vivienda3.jpeg'}
  ]

}

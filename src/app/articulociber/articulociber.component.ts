import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-articulociber',
  standalone: true,
  imports: [],
  templateUrl: './articulociber.component.html',
  styleUrl: './articulociber.component.css'
})
export class ArticulociberComponent {

  @Input()
  id:string='';

  cursos=[
    {id:'1',nombre:'Hacking etico',descripcion:'descripcion1', ruta:'../../assets/img/vivienda1.jpg'},
    {id:'2',nombre:'Legislacion de la Seguridad en Europa',descripcion:'descripcion12', ruta:'../../assets/img/vivienda2.png'},
    {id:'3',nombre:'¿Cómo evitar que te hackeen la cuenta?',descripcion:'descripcion13', ruta:'../../assets/img/vivienda3.jpeg'},
    {id:'4',nombre:'¿Qué es phising?',descripcion:'descripcion14', ruta:'../../assets/img/vivienda3.jpeg'}
  ]
}

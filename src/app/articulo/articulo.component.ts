import { Component,Input,OnInit } from '@angular/core';
import { Inmueble } from '../_modelo/inmueble';
import { InmuebleService } from '../_sercicio/inmueble.service';


@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnInit{
  
  @Input()
  id:string='';

  inmueble:Inmueble|undefined = new Inmueble;

  constructor(private inmuebleServicio: InmuebleService){}  
  
  ngOnInit(): void {
    this.inmueble = this.inmuebleServicio.obtenerUno(this.id);
  }
  

}

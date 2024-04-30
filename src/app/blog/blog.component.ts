import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Inmueble } from '../_modelo/inmueble';
import { InmuebleService } from '../_sercicio/inmueble.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  
  inmuebles:Inmueble[]=[];

  constructor(private inmuebleServicio: InmuebleService){}
  
  ngOnInit(): void {
    this.inmuebles = this.inmuebleServicio.obtenerTodos();
  }
  

}

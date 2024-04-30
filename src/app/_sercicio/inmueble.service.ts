import { Injectable } from "@angular/core";
import { Inmueble } from "../_modelo/inmueble";

@Injectable({
    providedIn : 'root'
})

export class InmuebleService {
    obtenerTodos(): Inmueble[] {
      return this.inmuebles
    }
    obtenerUno(id: string): Inmueble | undefined {
        return this.inmuebles.find(inmueble => inmueble.id === id);
    }
    inmuebles:Inmueble[]=[
        {
            id:'1',
            nombre:'Vivienda vertical',
            descripcion:'---', 
            ruta:'../../assets/img/vivienda1.jpg'
        },

        {
            id:'2',
            nombre:'Inmueble para oficinas',
            descripcion:'---', 
            ruta:'../../assets/img/vivienda2.png'
        },

        {
            id:'3',
            nombre:'Vivienda horizontal',
            descripcion:'---', 
            ruta:'../../assets/img/vivienda3.jpeg'
        },
    ]
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { BlogComponent } from './blog/blog.component';
import { BlogciberComponent } from './blogciber/blogciber.component';
import { ArticulociberComponent } from './articulociber/articulociber.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ArticuloComponent,BlogComponent,BlogciberComponent,ArticulociberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rutas';
}

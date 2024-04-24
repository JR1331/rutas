import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { BlogciberComponent } from './blogciber/blogciber.component';
import { ArticulociberComponent } from './articulociber/articulociber.component';

export const routes: Routes = [
    { path: '', title: 'Blog', component: BlogciberComponent },
    //{ path: '', title: 'Blog', component: BlogComponent },
    { path: 'articulo/:id', title: 'Articulo', component: ArticuloComponent },
    { path: 'articulociber/:id', title: 'Articulo Ciber', component:ArticulociberComponent}
];

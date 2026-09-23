import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { PerfilUsuario } from './feats/perfil-usuario/perfil-usuario';

export const routes: Routes = [

    { path: 'home', component: Home },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'perfil', component: PerfilUsuario }

];

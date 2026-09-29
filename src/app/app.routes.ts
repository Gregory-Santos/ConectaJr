import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { PerfilUsuario } from './feats/perfil-usuario/perfil-usuario';
import { ChatUsuario } from './feats/chat-usuario/chat-usuario';
import { Time } from './feats/time/time';

export const routes: Routes = [

    { path: 'time', component: Time },
    { path: 'home', component: Home },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'perfil', component: PerfilUsuario },
    { path: 'chat-usuario', component: ChatUsuario }

];

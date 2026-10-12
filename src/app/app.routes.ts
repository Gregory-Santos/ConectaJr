import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { PerfilUsuario } from './feats/perfil-usuario/perfil-usuario';
import { ChatUsuario } from './feats/chat-usuario/chat-usuario';
import { Time } from './feats/time/time';
import { Dashboard } from './feats/dashboard/dashboard';
import { ProjetoDetalhes } from './feats/home/projeto-detalhes/projeto-detalhes';
import { Busca } from './feats/busca/busca';

export const routes: Routes = [

    { path: 'time', component: Time },
    { path: 'home', component: Home },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'busca', component: Busca },
    { path: 'chat-usuario', component: ChatUsuario },
    { path: 'dashboard', component: Dashboard},
    
    { path: 'projeto/:id', component: ProjetoDetalhes}

];

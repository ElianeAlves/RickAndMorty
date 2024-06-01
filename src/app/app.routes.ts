import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'character-list', loadChildren: () => import('./pages/character-list/character-list.module').then(m => m.CharacterListModule) },
    { path: 'character-details/:id', loadChildren: () => import('./pages/character-details/character-details.module').then(m => m.CharacterDetailsModule) },
];

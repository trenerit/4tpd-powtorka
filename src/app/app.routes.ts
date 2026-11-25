import { Routes } from '@angular/router';
import { Start } from './start/start';
import { Users } from './users/users';
import { Formularz } from './formularz/formularz';

export const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch: 'full'},
    {path: 'start', component: Start},
    {path: 'users', component: Users},
    {path: 'form', component: Formularz},
];

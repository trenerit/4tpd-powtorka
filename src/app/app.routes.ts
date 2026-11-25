import { Routes } from '@angular/router';
import { Start } from './start/start';
import { Users } from './users/users';

export const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch: 'full'},
    {path: 'start', component: Start},
    {path: 'users', component: Users},
];

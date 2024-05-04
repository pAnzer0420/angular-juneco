import { Routes } from '@angular/router';
import { TodoComponent } from './app/todo/todo.component';

export const appRoutes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: '**', redirectTo: '/todo' },
];

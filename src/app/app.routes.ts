import { LangComponent } from './lang/lang.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'lang', pathMatch: 'full' },
  { path: 'lang', component: LangComponent }
];

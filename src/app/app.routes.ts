import { LangComponent } from './lang/lang.component';
import { ObjectComponent } from './object/object.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'lang', pathMatch: 'full' },
  { path: 'lang', component: LangComponent },
  { path: 'object', component: ObjectComponent }
];

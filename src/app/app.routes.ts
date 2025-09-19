import { LangComponent } from './lang/lang.component';
import { ObjectComponent } from './object/object.component';
import { Routes } from '@angular/router';
import { UtilComponent } from './util/util/util.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lang', pathMatch: 'full' },
  { path: 'lang', component: LangComponent },
  { path: 'object', component: ObjectComponent },
  { path: 'util', component: UtilComponent }
];

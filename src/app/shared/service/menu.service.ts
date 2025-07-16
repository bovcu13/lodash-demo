import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
private selectedLabelSubject = new BehaviorSubject<string | null>(null);
  selectedLabel$ = this.selectedLabelSubject.asObservable();

  setSelectedLabel(label: string) {
    this.selectedLabelSubject.next(label);
  }
}

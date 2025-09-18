import { Component } from '@angular/core';
import { MenuService } from '../shared/service/menu.service';

@Component({
  selector: 'app-object',
  standalone: true,
  imports: [],
  templateUrl: './object.component.html',
  styleUrl: './object.component.scss'
})
export class ObjectComponent {

  title = '_.omit';

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.initTitle();
  }

  initTitle() {
    this.menuService.selectedLabel$.subscribe((label) => {
      if (label) {
        this.title = label;
        this.scrollToLabel(label);
      }
    });
  }

  // 滾動到指定 label 的方法
  scrollToLabel(label: string) {
    const el = document.getElementById(label);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

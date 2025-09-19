import { Component } from '@angular/core';
import { MenuService } from '../../shared/service/menu.service';
import _ from 'lodash';

@Component({
  selector: 'app-util',
  standalone: true,
  imports: [],
  templateUrl: './util.component.html',
  styleUrl: './util.component.scss'
})
export class UtilComponent {
  title = '_.method';

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.initTitle();

    const getName = _.property('user.name');

    console.log(getName({ user: { name: 'Alice' } })); // "Alice"
    console.log(getName({ user: { name: 'Bob' } }));   // "Bob"



    const obj = {
      user: {
        greet: (msg: string) => `Hello, ${msg}`,
        bye: (msg: string) => `Goodbye, ${msg}`,
      },
    };

// 建立函式時傳入參數
const callFromObj = _.methodOf(obj, ['Alice']);

console.log(callFromObj('user.bye')); // GoodBye, Alice
console.log(callFromObj('user.greet')); // Hello, Alice
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

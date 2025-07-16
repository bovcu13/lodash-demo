import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MenuService } from '../shared/service/menu.service';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Lang',
        expanded: true,
        routerLink: ['/lang'],
        items: [
          {
            label: '_.castArray',
            command: () => this.labelClick('_.castArray'),
          },
          {
            label: '_.clone',
            command: () => this.labelClick('_.clone'),
          },
          {
            label: '_.cloneDeep',
            command: () => this.labelClick('_.cloneDeep'),
          },
          {
            label: '_.cloneDeepWith',
            command: () => this.labelClick('_.cloneDeepWith'),
          },
          {
            label: '_.cloneWith',
            command: () => this.labelClick('_.cloneWith'),
          },
          {
            label: '_.conformsTo',
            command: () => this.labelClick('_.conformsTo'),
          },
          {
            label: '_.eq',
            command: () => this.labelClick('_.eq'),
          },
          {
            label: '_.gt',
            command: () => this.labelClick('_.gt'),
          },
          {
            label: '_.gte',
            command: () => this.labelClick('_.gte'),
          },
          {
            label: '_.isArguments',
            command: () => this.labelClick('_.isArguments'),
          },
          {
            label: '_.isArray',
            command: () => this.labelClick('_.isArray'),
          },
          {
            label: '_.isArrayBuffer',
            command: () => this.labelClick('_.isArrayBuffer'),
          },
          {
            label: '_.isArrayLike',
            command: () => this.labelClick('_.isArrayLike'),
          },
          {
            label: '_.isArrayLikeObject',
            command: () => this.labelClick('_.isArrayLikeObject'),
          },
          {
            label: '_.isBoolean',
            command: () => this.labelClick('_.isBoolean'),
          }
        ]
      },
    ];
  }

  labelClick(label: string) {
    this.menuService.setSelectedLabel(label);
  }

}

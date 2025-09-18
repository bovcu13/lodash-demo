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
        expanded: false,
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
      {
        label: 'Object',
        expanded: true,
        routerLink: ['/object'],
        items: [
          {
            label: '_.omit',
            command: () => this.labelClick('_.omit'),
          },
          {
            label: '_.omitBy',
            command: () => this.labelClick('_.omitBy'),
          },
          {
            label: '_.pick',
            command: () => this.labelClick('_.pick'),
          },
          {
            label: '_.pickBy',
            command: () => this.labelClick('_.pickBy'),
          },
          {
            label: '_.result',
            command: () => this.labelClick('_.result'),
          },
          {
            label: '_.set',
            command: () => this.labelClick('_.set'),
          },
          {
            label: '_.setWith',
            command: () => this.labelClick('_.setWith'),
          },
          {
            label: '_.toPairs',
            command: () => this.labelClick('_.toPairs'),
          },
          {
            label: '_.toPairsIn',
            command: () => this.labelClick('_.toPairsIn'),
          },
          {
            label: '_.transform',
            command: () => this.labelClick('_.transform'),
          },
          {
            label: '_.unset',
            command: () => this.labelClick('_.unset'),
          },
          {
            label: '_.update',
            command: () => this.labelClick('_.update'),
          },
          {
            label: '_.updateWith',
            command: () => this.labelClick('_.updateWith'),
          },
          {
            label: '_.values',
            command: () => this.labelClick('_.values'),
          },
          {
            label: '_.valuesIn',
            command: () => this.labelClick('_.valuesIn'),
          }]
      }];
  }

  labelClick(label: string) {
    this.menuService.setSelectedLabel(label);
  }

}

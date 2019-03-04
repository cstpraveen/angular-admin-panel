import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'sp-pages',
  styleUrls: ['pages.component.css'],
  template: `
    <sp-sample-layout>
      <sp-menu [items]="menu"></sp-menu>
      <router-outlet></router-outlet>
    </sp-sample-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  selectedTab: any;

  constructor() {}
  activeTab: string = 'tab1';
  refreshKey: number = 0;

  setTab(tab: string) {
    if (this.activeTab === tab) {
      this.refreshKey++; // Fuerza destrucción y recreación
    } else {
      this.activeTab = tab;
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrls: ['./info-dashboard.component.scss'],
})
export class InfoDashboardComponent {
  @Input() cSymbol: string;
  companyInfo;
  noData: boolean;

  constructor(private readonly dashboardService: DashboardService) {}

  async onSubmit() {
    // clean state
    this.companyInfo = null;
    this.noData = false;

    try {
      const cInfo = await this.dashboardService.getInfo(this.cSymbol);
      this.companyInfo = Object.entries(cInfo);
    } catch {
      this.noData = true;
    }
  }
}

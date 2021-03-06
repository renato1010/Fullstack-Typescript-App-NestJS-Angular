import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.css'],
})
export class NewsDashboardComponent {
  @Input() cSymbol: string;
  companyNews;
  noData: boolean;

  constructor(private readonly dashboardService: DashboardService) {}

  async onSubmit() {
    // clean state
    this.companyNews = null;
    this.noData = false;

    try {
      this.companyNews = await this.dashboardService.getNews(this.cSymbol);
    } catch {
      this.noData = true;
    }
  }
}

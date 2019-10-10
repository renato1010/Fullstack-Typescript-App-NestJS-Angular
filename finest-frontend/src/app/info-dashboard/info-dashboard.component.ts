import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrls: ['./info-dashboard.component.scss'],
})
export class InfoDashboardComponent implements OnInit {
  pSymbol: string;
  companyInfo: string;
  @Input()
  set cSymbol(symbol: string) {
    this.pSymbol = symbol;
  }
  get cSymbol(): string {
    return this.pSymbol;
  }

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.companyInfo = `Here is data for ${this.cSymbol}`;
  }
}

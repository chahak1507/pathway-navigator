import { Component } from '@angular/core';

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html'
})
export class TradeListComponent {
  trades = [
    { id: 1, name: "Electrician", sector: "Construction", cost: "Free", jobProspects: "High" },
    { id: 2, name: "Welding", sector: "Manufacturing", cost: "Paid", jobProspects: "Medium" },
    { id: 3, name: "Plumbing", sector: "Construction", cost: "Free", jobProspects: "High" }
  ];
}

import { Component } from '@angular/core';
import {SimpleStatRow} from "../../../shared/simple-stat/simple-stat.component";

@Component({
  selector: 'app-ad-dashboard',
  templateUrl: './ad-dashboard.component.html',
  styleUrls: ['./ad-dashboard.component.scss']
})
export class AdDashboardComponent {
  portfolio: SimpleStatRow[] = [
    {text: "Bitcoin", value: 2.86209},
    {text: "Ethereum", value: 32.45},
    {text: "Total", value: "142\'740$"}
  ];

  trades: SimpleStatRow[] = [
    {text: "Bitcoin", value: 1340},
    {text: "Ethereum", value: 785},
    {text: "Total", value: 2125}
  ];
}

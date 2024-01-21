import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SimpleStatRow {
  text: string,
  value: number | string
}

@Component({
  selector: 'app-simple-stat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-stat.component.html',
  styleUrls: ['./simple-stat.component.scss']
})
export class SimpleStatComponent {
  @Input() header?: string;
  @Input() rows?: SimpleStatRow[];
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-overview-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewCardComponent {
  @Input() title!: string;
  @Input() subtitles!: string[];
  @Input() imageSrc!: string;
  @Input() imageAlt!: string;
}

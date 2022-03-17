import { IVisit } from './shared/visits.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'visits-thumbnail',
  templateUrl: './visit-thumbnail.component.html',
  styleUrls: ['./visit-thumbnail.component.css'

  ]
})
export class VisitsThumbnailComponent {
  @Input()
  visit!: IVisit;
}

import { IVisit } from './shared/visits.model';
import { Component} from '@angular/core';
import { VisitService } from './shared/visits.service';
import { ActivatedRoute } from '@angular/router';
import { visitAll } from '@angular/compiler';



@Component({
  selector: 'visit-details',
  templateUrl: './visit.details.component.html',
  styleUrls: ['./visit.details.component.css']
})
export class VisitDetailsComponent {
  visit!: IVisit;

  visitId = 1





  constructor(private visitService: VisitService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    console.log(this.visitId);
    this.visit = <IVisit>this.visitService.getVisit(+this.route.snapshot.params['id'])

  }






  }




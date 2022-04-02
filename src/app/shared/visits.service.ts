import { IVisit } from "./visits.model";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class VisitService {
  getVisits(): Observable<IVisit[]> {
    let subject = new Subject <IVisit[]>()
    setTimeout(() => {subject.next(VISITS); subject.complete();}, 200)
    return subject
  }

  getVisit(id: number) {
    return VISITS.find(visit => visit.id === id)
  }

}


const VISITS: IVisit[] = [
  {
    id: 1,
    title: 'Visite Classique',
    littleDescription: 'description',
    bigDescription: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat urna vehicula, convallis lorem vitae, accumsan sapien. Fusce in purus in arcu accumsan fringilla. Fusce suscipit odio vitae nisi facilisis, sed dignissim libero iaculis. Maecenas quam sapien, hendrerit eget eros nec, vulputate aliquam ligula. Nulla sed sapien pretium, pretium ex et, finibus leo. ',
    session: [
     {
       date: new Date('7/15/2022'),
       time : '15h00 - 16h30',
       fullPrice: '5 euros',
       halfPrice: '2,50 euros',
       placesAvailable: 15
     },
     {
      date: new Date('7/12/2022'),
      time : '15h00 - 16h30',
      fullPrice: '5 euros',
      halfPrice: '2,50 euros',
      placesAvailable: 15
    },
    {
      date: new Date('7/13/2022'),
      time : '15h00 - 16h30',
      fullPrice: '5 euros',
      halfPrice: '2,50 euros',
      placesAvailable: 15
    },
    ],
    imageUrl: '../assets/church-window-gff159cb2f_1920.jpg'
  },
  {
    id: 2,
    title: 'Atelier adultes',
    littleDescription: 'description',
    bigDescription: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat urna vehicula, convallis lorem vitae, accumsan sapien. Fusce in purus in arcu accumsan fringilla. Fusce suscipit odio vitae nisi facilisis, sed dignissim libero iaculis. Maecenas quam sapien, hendrerit eget eros nec, vulputate aliquam ligula. Nulla sed sapien pretium, pretium ex et, finibus leo. ',
    session: [
      {
        date: new Date('8/15/2022'),
        time : '9h30 - 12h30',
        fullPrice: '50 euros',
        placesAvailable: 3
      },
      {
       date: new Date('8/12/2022'),
       time : '9h30 - 12h30',
       fullPrice: '50 euros',
       placesAvailable: 3
     },
     {
       date: new Date('8/13/2022'),
       time : '9h30 - 12h30',
       fullPrice: '50 euros',
       placesAvailable: 3
     },
     ],
    imageUrl: '../assets/glass-g14fe2552c_1920.jpg'
  },
  {
    id: 1,
    title: 'Atelier Enfants',
    littleDescription: 'description',
    bigDescription: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat urna vehicula, convallis lorem vitae, accumsan sapien. Fusce in purus in arcu accumsan fringilla. Fusce suscipit odio vitae nisi facilisis, sed dignissim libero iaculis. Maecenas quam sapien, hendrerit eget eros nec, vulputate aliquam ligula. Nulla sed sapien pretium, pretium ex et, finibus leo. ',
    session: [
      {
        date: new Date('6/15/2022'),
        time : '15h00 - 16h30',
        fullPrice: '18 euros',
        placesAvailable: 4
      },
      {
       date: new Date('6/12/2022'),
       time : '15h00 - 16h30',
        fullPrice: '18 euros',
       placesAvailable: 4
     },
     {
       date: new Date('6/13/2022'),
       time : '15h00 - 16h30',
       fullPrice: '18 euros',
       placesAvailable: 4
     },
     ],
    imageUrl: '../assets/stained-glass-g2cf2f32b6_1920.jpg'
  },
]

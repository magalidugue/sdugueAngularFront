import { IVisit } from "./visits.model";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import {ISession} from "./visits.model";

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

  getSession() {
    const session = VISITS.find(visitSession => visitSession.session)
    console.log(session);

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
       id: 1,
       date: new Date('7/15/2022'),
       time : '15h00 - 16h30',
       fullPrice: '5 euros',
       halfPrice: '2,50 euros',
       placesAvailable: 15
     },
     {
      id: 2,
      date: new Date('7/12/2022'),
      time : '15h00 - 16h30',
      fullPrice: '5 euros',
      halfPrice: '2,50 euros',
      placesAvailable: 15
    },
    {
      id: 3,
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
        id: 4,
        date: new Date('8/15/2022'),
        time : '9h30 - 12h30',
        fullPrice: '50 euros',
        placesAvailable: 3
      },
      {
       id: 5,
       date: new Date('8/12/2022'),
       time : '9h30 - 12h30',
       fullPrice: '50 euros',
       placesAvailable: 3
     },
     {
       id: 6,
       date: new Date('8/13/2022'),
       time : '9h30 - 12h30',
       fullPrice: '50 euros',
       placesAvailable: 3
     },
     ],
    imageUrl: '../assets/glass-g14fe2552c_1920.jpg'
  },
  {
    id: 3,
    title: 'Atelier Enfants',
    littleDescription: 'description',
    bigDescription: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat urna vehicula, convallis lorem vitae, accumsan sapien. Fusce in purus in arcu accumsan fringilla. Fusce suscipit odio vitae nisi facilisis, sed dignissim libero iaculis. Maecenas quam sapien, hendrerit eget eros nec, vulputate aliquam ligula. Nulla sed sapien pretium, pretium ex et, finibus leo. ',
    session: [
      {
        id: 7,
        date: new Date('6/15/2022'),
        time : '15h00 - 16h30',
        fullPrice: '18 euros',
        placesAvailable: 4
      },
      {
       id: 8,
       date: new Date('6/12/2022'),
       time : '15h00 - 16h30',
        fullPrice: '18 euros',
       placesAvailable: 4
     },
     {
       id: 9,
       date: new Date('6/13/2022'),
       time : '15h00 - 16h30',
       fullPrice: '18 euros',
       placesAvailable: 4
     },
     ],
    imageUrl: '../assets/stained-glass-g2cf2f32b6_1920.jpg'
  },
]

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
    dates: [
      new Date('9/26/2023')
    ],
    time: '15:00',
    price: 10,
    imageUrl: '../assets/church-window-gff159cb2f_1920.jpg'
  },
  {
    id: 2,
    title: 'Atelier adultes',
    littleDescription: 'description',
    bigDescription: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat urna vehicula, convallis lorem vitae, accumsan sapien. Fusce in purus in arcu accumsan fringilla. Fusce suscipit odio vitae nisi facilisis, sed dignissim libero iaculis. Maecenas quam sapien, hendrerit eget eros nec, vulputate aliquam ligula. Nulla sed sapien pretium, pretium ex et, finibus leo. ',
    dates: [
      new Date('9/26/2023')
    ],
    time: '15:00',
    price: 10,
    imageUrl: '../assets/glass-g14fe2552c_1920.jpg'
  },
  {
    id: 1,
    title: 'Atelier Enfants',
    littleDescription: 'description',
    bigDescription: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat urna vehicula, convallis lorem vitae, accumsan sapien. Fusce in purus in arcu accumsan fringilla. Fusce suscipit odio vitae nisi facilisis, sed dignissim libero iaculis. Maecenas quam sapien, hendrerit eget eros nec, vulputate aliquam ligula. Nulla sed sapien pretium, pretium ex et, finibus leo. ',
    dates: [
      new Date('9/26/2023')
    ],
    time: '15:00',
    price: 10,
    imageUrl: '../assets/stained-glass-g2cf2f32b6_1920.jpg'
  },
]

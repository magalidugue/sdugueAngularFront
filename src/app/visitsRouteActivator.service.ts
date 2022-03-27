import { VisitService } from './shared/visits.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";


@Injectable()
export class VisitRouteActivator implements CanActivate {
  constructor(private visitService: VisitService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {

    const visitExists = !!this.visitService.getVisit(+route.params['id'])

    if (!visitExists)
      this.router.navigate(['/404'])
    return visitExists

  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketGuard implements CanActivate {
  constructor(private router: Router){}
  
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('ticketData'))  {
        return true; 
      } else {
        this.router.navigate(['/'])
      }
    return true;
  }
  
}

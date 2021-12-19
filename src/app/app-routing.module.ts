import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './components/home/home.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketGuard } from './shared/guards/ticket.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trips', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'trips/:id', component: ReservationComponent },
  { path: 'trips/:id/ticket', component: TicketComponent, canActivate: [TicketGuard] },
  { path: 'ticket', component: TicketComponent, canActivate: [TicketGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

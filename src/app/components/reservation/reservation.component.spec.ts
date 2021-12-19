import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReservationComponent } from './reservation.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //name

  it('should mark name is invalid when it has no value', () => {
    const control = component.reservationForm.get('name');
    control?.setValue(null);
    fixture.detectChanges();
    expect(control?.invalid).toBeTruthy();
  });

  it('should mark name is valid when it has a value', () => {
    const control = component.reservationForm.get('name');
    control?.setValue('test');
    fixture.detectChanges();
    expect(control?.valid).toBeTruthy();
  });

  //email

  it('should mark email is invalid when it has no value', () => {
    const control = component.reservationForm.get('email');
    control?.setValue(null);
    fixture.detectChanges();
    expect(control?.invalid).toBeTruthy();
  });

  it('should mark email is valid when it has a value', () => {
    const control = component.reservationForm.get('email');
    control?.setValue('test@gmail.com');
    fixture.detectChanges();
    expect(control?.valid).toBeTruthy();
  });

  //phone

  it('should mark phone is invalid when it has no value', () => {
    const control = component.reservationForm.get('phone');
    control?.setValue(null);
    fixture.detectChanges();
    expect(control?.invalid).toBeTruthy();
  });

  it('should mark phone is valid when it has a value', () => {
    const control = component.reservationForm.get('phone');
    control?.setValue('0123456789');
    fixture.detectChanges();
    expect(control?.valid).toBeTruthy();
  });

  //no.Of.Tickets

  it('should mark noTickets is invalid when it has no value', () => {
    const control = component.reservationForm.get('noTickets');
    control?.setValue(null);
    fixture.detectChanges();
    expect(control?.invalid).toBeTruthy();
  });

  it('should mark noTickets is valid when it has a value', () => {
    const control = component.reservationForm.get('noTickets');
    control?.setValue('1');
    fixture.detectChanges();
    expect(control?.valid).toBeTruthy();
  });

  it('should mark noTickets is valid when it be greater then 1', () => {
    const control = component.reservationForm.get('noTickets');
    control?.setValue('2');
    fixture.detectChanges();
    expect(control?.value).toBeGreaterThan(1);
  });

  //form validity

  it('should test form validity', () => {
    const form = component.reservationForm;
    expect(form.valid).toBeFalsy();

    const name = form.controls.name;
    const email = form.controls.email;
    const phone = form.controls.phone;
    const noTickets = form.controls.noTickets;
    name.setValue('John');
    email.setValue('test@gmail.com');
    phone.setValue('0123456789');
    noTickets.setValue('3');

    expect(form.valid).toBeTruthy();
  });

});

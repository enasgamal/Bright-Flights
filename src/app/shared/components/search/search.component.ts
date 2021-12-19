import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input('sources') sources: any;
  @Input('destinations') destinations: any;
  @Output('onSubmitClick') submit = new EventEmitter<any>();
  @Output('getAllTrips') getAll = new EventEmitter<any>();

  filterForm!: FormGroup;
  
  constructor(public fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.filterForm = this.fb.group({
      srcName: ['', [Validators.required]],
      destName: ['', [Validators.required]],
    });
  }

  searchBySource(inputSource: string, inputDestination: string) {
    this.submit.emit({ src: inputSource, dest: inputDestination })
  }

  getAllFlights() {
    console.log("clicked in child works");
    this.getAll.emit();
  }

}

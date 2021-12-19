import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentLang: string;

  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLanguage') || 'ar';
    this.translate.use(this.currentLang);
  }
  ngOnInit(){
  }
  changeCurrentLang(lang: any) {
    console.log(lang.target.value)
    this.translate.use(lang.target.value);
    localStorage.setItem('currentLanguage', lang.target.value);
  }

}

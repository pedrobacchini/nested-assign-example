import {Component, OnInit} from '@angular/core';
import {Person} from './person';
import {PersonService} from './person.service';
import {CompanyService} from './company.service';
import {Company} from './company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nested-assign-example';

  company = new Company();
  companyAssign = new Company();
  paulo = new Person();
  pauloAssign = new Person();

  constructor(private appService: PersonService,
              private companyService: CompanyService
  ) {
  }

  ngOnInit(): void {
    this.appService.getPerson()
      .subscribe(person => {
        this.paulo = person;
      }, (error: any) => alert(error));


    this.appService.getPersonAssign()
      .subscribe(person => {
        this.pauloAssign = person;
      }, (error: any) => alert(error));


    this.companyService.getCompany()
      .subscribe(company => {
        this.company = company;
      }, (error: any) => alert(error));

    this.companyService.getCompanyAssign()
      .subscribe(company => {
        this.companyAssign = company;
      }, (error: any) => alert(error));
  }
}

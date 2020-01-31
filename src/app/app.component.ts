import {Component, OnInit} from '@angular/core';
import {Person} from './person';
import {PersonService} from './person.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nested-assign-example';

  constructor(private appService: PersonService) {}

  paulo = new Person();
  pauloAssign = new Person();

  ngOnInit(): void {
    this.appService.getPerson()
      .subscribe(person => {
        this.paulo = person;
      }, (error: any) => alert(error));


    this.appService.getPersonAssign()
      .subscribe(person => {
        this.pauloAssign = person;
      }, (error: any) => alert(error));
  }
}

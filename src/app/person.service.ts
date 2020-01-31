import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from './person';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPerson(): Observable<Person> {
    return this.http.get<Person>('http://www.mocky.io/v2/5e34618c3000005b00d9646f')
      .pipe(map(response => {
        console.log(response);
        return response;
      }));
  }

  getPersonAssign(): Observable<Person> {
    return this.getPerson()
      .pipe(map(people => {
        console.log(people);
        const assingPeople = Object.assign(new Person(), people);
        console.log(assingPeople);
        return assingPeople;
      }));
  }
}

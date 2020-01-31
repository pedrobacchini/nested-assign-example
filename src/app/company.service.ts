import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Company} from './company';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompany(): Observable<Company> {
    return this.http.get<Company>('http://www.mocky.io/v2/5e3461ef3000008900d96470')
      .pipe(map(response => {
        console.log(response);
        return response;
      }));
  }

  getCompanyAssign(): Observable<Company> {
    return this.http.get<Company>('http://www.mocky.io/v2/5e3461ef3000008900d96470')
      .pipe(map(company => {
        console.log(company);
        const companyAssign = Object.assign(new Company(), company);
        const peopleAssign: Person[] = [];
        for (const person of companyAssign.people) {
          peopleAssign.push(Object.assign(new Person(), person));
        }
        companyAssign.people = peopleAssign;
        console.log(companyAssign);
        return companyAssign;
      }));
  }
}

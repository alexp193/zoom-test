import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from '../interfaces/contact.interface'
import { Details } from 'src/app/interfaces/details.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Array<Contact> = []
  public details: Array<Details> = []

  constructor(private http: Http) { }


  getContacts(): Observable<Contact[]> {
    return this.contacts.length ? new Observable((observer) => {
      observer.next(this.contacts);
      observer.complete();
    }) : this.http.get('../../db/contacts.json').map((response: any) => {
      let data = response.json();
      this.contacts = data;
      return data;
    }).catch(this._handleError);
  }

  getDetails(): Observable<Details[]> {
    return this.details.length ? new Observable((observer) => {
      observer.next(this.details);
      observer.complete();
    }) : this.http.get('../../db/details.json').map((response: any) => {
      let data = response.json();
      this.details = data;
      return data;
    }).catch(this._handleError);
  }

  _handleError(error: any): Observable<Error> {
    return Observable.throw(error);
  }

}

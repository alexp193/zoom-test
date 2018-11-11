import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ContactsService } from 'src/app/services/http.service';
import { Contact } from 'src/app/interfaces/contact.interface';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import {forkJoin} from 'rxjs';



@Injectable()
export class ContactResolver implements Resolve<Observable<any>> {
    constructor(private contacts_srv: ContactsService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return forkJoin([
            this.contacts_srv.getContacts(),
            this.contacts_srv.getDetails()
        ]).map((allResponses) => {
            return {
                contacts: allResponses[0],
                details: allResponses[1],
            };
        })
    }
}
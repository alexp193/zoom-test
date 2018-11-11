import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { ContactResolver } from 'src/app/pages/contacts/contacts.resolver';

const routes: Routes = [

    {
        path: '',
        component: ContactsComponent,
        resolve: { resolve: ContactResolver }
    }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})


export class RoutingModule {

    constructor() {


    }

}
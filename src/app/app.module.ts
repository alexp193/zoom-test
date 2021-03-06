import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { SeperatePipe } from './pipes/seperate.pipe';
import { RoutingModule } from './modules/routing.module';




import { AppComponent } from './app.component';
import { ContactsService } from 'src/app/services/http.service';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ListComponent } from './pages/contacts/components/list/list.component';
import { DetailsComponent } from './pages/contacts/components/details/details.component';
import { ItemComponent } from './pages/contacts/components/list/item/item.component';
import { SortInputComponent } from './pages/contacts/components/list/sort-input/sort-input.component';
import { ContactResolver } from 'src/app/pages/contacts/contacts.resolver';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ListComponent,
    DetailsComponent,
    ItemComponent,
    SortInputComponent,
    SeperatePipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RoutingModule
  ],
  providers: [ContactsService,ContactResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

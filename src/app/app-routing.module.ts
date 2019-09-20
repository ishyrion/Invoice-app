import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { InvoiceComponent } from './invoicing/invoice/invoice.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { NewClientComponent } from './clients/new-client/new-client.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'invoicing', component: InvoiceComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'clients/new-client', component: NewClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClientsComponent, HeroComponent, ContactComponent, NewClientComponent];


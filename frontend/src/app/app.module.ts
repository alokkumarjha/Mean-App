import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpCreateComponent } from './components/emp-create/emp-create.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpCreateComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

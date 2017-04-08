import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TableWrapper }  from './table.wrapper.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { PrismComponent } from 'angular-prism';

@NgModule({
  imports:      [ BrowserModule ,SpinnerComponentModule],
  declarations: [ AppComponent, TableWrapper,PrismComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

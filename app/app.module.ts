import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TableWrapper }  from './table.wrapper.component';
import { Table1Wrapper }  from './table1.wrapper.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { PrismComponent } from 'angular-prism';

@NgModule({
    imports: [BrowserModule, SpinnerComponentModule],
    declarations: [AppComponent, TableWrapper, Table1Wrapper, PrismComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

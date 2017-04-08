import { Component } from '@angular/core';


const appCode : string = `
import { Component } from '@angular/core'

@Component({
    selector : 'my-app',
    template : '<table-compnent [showLoader]="showLoader">' +
'</table-component><button (click)="fetchData()">Fetch</button>'
})

export class AppComponent {
    showLoader : boolean;
    
    fetchData() : void {
        this.showLoader = true;
        //Fetch your async data here
        setTimeout(()=> { this.showLoader = false}, 2000);
    }
}
`;

const tableCode : string = `
import { Component, Input } from '@angular/core';

@Component({
    selector: 'table-component',
    templateUrl: "./template/table.html"
})

export class TableComponent {
    @Input() showLoader : boolean;
}  
`;
const tableHtml : string = `
<!-- NOTE: For the componet to work , you need to wrap your
component tempalate inside relative positioned div -->
<div style="position : relative">
    <spinner-component [spinnerShow]="show"></spinner-component>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>           
            <tr *ngFor="#user of users">
                <td>{{user.id}}
                <td>{{user.firstname}}</td>
                <td>{{user.lastname}}</td>
                <td>{{user.username}}</td>
            </tr>
        </tbody>
    </table>
</div>
`;

@Component({
  selector: 'my-app',
  templateUrl: './template/main.html',
})
export class AppComponent  { name = 'Angular';
showLoader : boolean;
appCode : string;
tableCode : string;    
    tableHtml : string;    
constructor(){
    this.appCode = appCode;
this.tableCode = tableCode;
    this.tableHtml = tableHtml;
}
fetch(): void{
    this.showLoader = true;
    setTimeout(()=>{this.showLoader=false},2000);
    
}
}

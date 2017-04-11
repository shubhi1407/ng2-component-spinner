import { Component } from '@angular/core';


const appCode: string = `
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

const tableCode: string = `
import { Component, Input } from '@angular/core';

@Component({
    selector: 'table-component',
    templateUrl: "./template/table.html"
})

export class TableComponent {
    @Input() showLoader : boolean;
}
`;
const tableHtml: string = `
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
const tableCode1: string = `
import { Component, Input } from '@angular/core';
@Component({
    selector: 'table-component',
    templateUrl: "./template/table.html",
    styles: [.spinner - 2 {
    width: 40px;height: 40px;

position: relative;
margin: auto;
  }

  .double - bounce1, .double - bounce2 {
  width: 100 %;
  height: 100 %;
  border - radius: 50 %;
  background - color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit - animation: sk - bounce 2.0s infinite ease-in-out;
  animation: sk - bounce 2.0s infinite ease-in-out;
}

  .double - bounce2 {
  -webkit - animation - delay: -1.0s;
  animation - delay: -1.0s;
}

@-webkit - keyframes sk- bounce {
  0 %, 100 % { -webkit - transform: scale(0.0)
}
50 % { -webkit - transform: scale(1.0) }
  }

@keyframes sk - bounce {
  0 %, 100 % {
    transform: scale(0.0);
      -webkit - transform: scale(0.0);
} 50 % {
  transform: scale(1.0);
      -webkit - transform: scale(1.0);
    }
  }
],
})
export class TableComponent {
    @Input() showLoader : boolean;
}
`;
const tableHtml1: string = `
<!-- NOTE: For the componet to work , you need to wrap your
component tempalate inside relative positioned div -->
<div style="position : relative">
    <spinner-component [spinnerShow]="show">
    <div class="spinner-2">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
    </spinner-component>
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
export class AppComponent {
    name = 'Angular';
    showLoader: boolean;
    showLoader1: boolean;
    appCode: string;
    tableCode: string;
    tableCode1: string;
    tableHtml: string;
    tableHtml1: string;
    constructor() {
        this.appCode = appCode;
        this.tableCode = tableCode;
        this.tableCode1 = tableCode1;
        this.tableHtml = tableHtml;
        this.tableHtml1 = tableHtml1;
    }
    fetch(): void {
        this.showLoader = true;

        setTimeout(() => { this.showLoader = false }, 2000);
    }
    fetchone(): void {
        this.showLoader1 = true;
        setTimeout(() => { this.showLoader1 = false }, 2000);
    }
}

    }
}

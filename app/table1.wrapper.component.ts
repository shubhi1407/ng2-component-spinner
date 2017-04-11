import { Component, Input } from '@angular/core';

@Component({
    selector: 'table1-component',
    templateUrl: './template/table1.html',
    styles: []
})
export class Table1Wrapper {
    @Input() show: boolean;
    constructor() {

    }
}

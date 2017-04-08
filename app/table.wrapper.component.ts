import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './template/table.html',
})
export class TableWrapper  {
    @Input() show: boolean;
    
}

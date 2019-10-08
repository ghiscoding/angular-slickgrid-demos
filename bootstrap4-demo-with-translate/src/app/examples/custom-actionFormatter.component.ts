import { Component } from '@angular/core';

@Component({
  template: `<div id="myDrop" class="dropdown" style="position:absolute; z-index:12000;">
  <button class="btn btn-outline-secondary btn-xs dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Action
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <a class="dropdown-item pointer" (click)="parent.deleteCell(row)">Delete Row</a>
  </ul></div>`
})
export class CustomActionFormatterComponent {
  parent: any;
  row: number;
}

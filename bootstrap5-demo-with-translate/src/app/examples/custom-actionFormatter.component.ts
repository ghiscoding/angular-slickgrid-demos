import { Component } from '@angular/core';

@Component({
  template: `
  <div id="{{dropdownId}}" class="dropdown" style="position:absolute; z-index:12000;">
    <a class="dropdown-toggle"
       id="{{dropDownToggleId}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Actions
      <span class="caret"></span>
    </a>
    <div class="dropdown-menu padding10">
      <div class="text-primary text-center">{{dataContext.title}}</div>
      <div class="dropdown-divider"></div>
      <a class="pointer">Another action</a>
      <a class="pointer">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="text-danger pointer" (click)="parent.deleteCell(row)">Delete Row</a>
    </div>
  </div>
  `
})
export class CustomActionFormatterComponent {
  parent: any; // parent component context
  row: number;
  dataContext: any;
  dropdownId = 'myDrop';
  dropDownToggleId = 'toggleDrop';
}

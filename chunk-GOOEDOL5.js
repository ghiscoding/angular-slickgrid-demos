import{Da as b,pa as d,ya as h}from"./chunk-IBXCHNN7.js";import{Aa as g,Kb as t,Pa as u,ib as p,jb as i,kb as o,lb as c,vb as s}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";var k=100,x=(()=>{class a{constructor(){this._darkMode=!1,this.columnDefinitions=[],this.hideSubTitle=!1}angularGridReady(e){this.angularGrid=e}ngOnInit(){this.prepareGrid(),this.dataset=this.getData(k)}ngOnDestroy(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}prepareGrid(){this.columnDefinitions=[{id:"selector",name:"",field:"num",width:30}];for(let e=0;e<k;e++)this.columnDefinitions.push({id:e,name:e<26?String.fromCharCode(65+e%26):String.fromCharCode(65+Math.floor(e/26)-1)+String.fromCharCode(65+e%26),field:String(e),minWidth:60,width:60,editor:{model:h.text}});this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,darkMode:this._darkMode,editable:!0,headerRowHeight:35,editorNavigateOnArrows:!0,enableSelection:!0,selectionOptions:{rowSelectColumnIds:["selector"],selectActiveRow:!0,selectionType:"mixed"},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:" "}}}copyDraggedCellRange(e){let l=d.verticalTargetRange(e.prevSelectedRange,e.selectedRange),n=d.horizontalTargetRange(e.prevSelectedRange,e.selectedRange),r=d.cornerTargetRange(e.prevSelectedRange,e.selectedRange);l&&d.copyCellsToTargetRange(e.prevSelectedRange,l,e.grid),n&&d.copyCellsToTargetRange(e.prevSelectedRange,n,e.grid),r&&d.copyCellsToTargetRange(e.prevSelectedRange,r,e.grid)}getData(e){let l=[];for(let n=0;n<e;n++){let r=l[n]={};r.id=n,r.num=n}return l}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let e=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[e]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275cmp=u({type:a,selectors:[["ng-component"]],decls:39,vars:3,consts:[[1,"demo49"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example49.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-theme-light-dark"],[1,"subtitle"],["gridId","grid49",3,"onAngularGridCreated","onDragReplaceCells","columns","options","dataset"]],template:function(l,n){l&1&&(i(0,"div",0),t(1,`
  `),i(2,"h2"),t(3,`
    Example 49: Spreadsheet Drag-Fill
    `),i(4,"span",1),t(5,`
      `),i(6,"a",2),t(7,`
        `),c(8,"span",3),t(9,` code
      `),o(),t(10,`
    `),o(),t(11,`
    `),i(12,"button",4),s("click",function(){return n.toggleSubTitle()}),t(13,`
      `),c(14,"span",5),t(15,`
    `),o(),t(16,`
    `),i(17,"button",6),s("click",function(){return n.toggleDarkMode()}),t(18,`
      `),c(19,"span",7),t(20,`
      `),i(21,"span"),t(22,"Toggle Dark Mode"),o(),t(23,`
    `),o(),t(24,`
  `),o(),t(25,`

  `),i(26,"div",8),t(27,`
    Spreadsheet with drag-fill, hybrid selection model. Type a few values in the grid and then select those cells and use the bottom right
    drag handle spread the selection and auto-fill the values to other cells. Use `),i(28,"code"),t(29,"onDragReplaceCells"),o(),t(30,` event to customize the
    drag-fill behavior. Use `),i(31,"code"),t(32,"{ enableSelection: true, selectionOptions: { selectionType: 'mixed' }}"),o(),t(33,`
    grid option to enable the new Hybrid Selection Model.
  `),o(),t(34,`

  `),i(35,"angular-slickgrid",9),s("onAngularGridCreated",function(m){return n.angularGridReady(m.detail)})("onDragReplaceCells",function(m){return n.copyDraggedCellRange(m.detail.args)}),t(36,`
  `),o(),t(37,`
`),o(),t(38,`
`)),l&2&&(g(35),p("columns",n.columnDefinitions)("options",n.gridOptions)("dataset",n.dataset))},dependencies:[b],styles:[".demo49[_ngcontent-%COMP%]{--slick-border-color: #d4d4d4;--slick-cell-odd-background-color: #fbfbfb;--slick-cell-border-left: 1px solid var(--slick-border-color);--slick-header-menu-display: none;--slick-header-column-height: 20px;--slick-grid-border-color: #d4d4d4;--slick-cell-selected-color: #d4ebfd;--slick-row-selected-color: #d4ebfd;--slick-text-editor-border: 0px;--slick-text-editor-focus-box-shadow: none}.demo49[_ngcontent-%COMP%]   .slick-cell.copied[_ngcontent-%COMP%]{background:#00f;background:#00f3;transition:.5s background}.demo49[_ngcontent-%COMP%]   .slick-dark-mode[_ngcontent-%COMP%]{--slick-border-color: #595959;--slick-cell-border-left: 1px solid #595959;--slick-grid-border-color: #434343;--slick-cell-selected-color: #434343;--slick-row-selected-color: #434343;--slick-cell-selected-editable-color: #333333}"]})}}return a})();export{x as Example49Component};

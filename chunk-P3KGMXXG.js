import{Da as R,wa as f,za as b}from"./chunk-IBXCHNN7.js";import{Aa as C,Kb as e,Pa as y,Pb as k,Qb as E,Rb as D,ia as v,ib as _,jb as t,kb as i,lb as s,vb as d}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";var A=(()=>{class c{constructor(){this.dataset=v([]),this.hideSubTitle=!1}angularGridReady(o){this.angularGrid=o}ngOnInit(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0},{id:"duration",name:"Duration",field:"duration",filterable:!0,sortable:!0},{id:"%",name:"% Complete",field:"percentComplete",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",filterable:!0,sortable:!0,filter:{model:f.compoundDate}},{id:"finish",name:"Finish",field:"finish",filterable:!0,sortable:!0,filter:{model:f.compoundDate}},{id:"effort-driven",name:"Completed",field:"effortDriven",formatter:b.checkmarkMaterial,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:f.singleSelect}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,checkboxSelector:{columnIndexPosition:1,hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},dataView:{syncGridSelection:!0},enableRowMoveManager:!0,rowMoveManager:{singleRowMove:!0,disableRowSelection:!0,cancelEditOnDrag:!0,hideRowMoveShadow:!1,width:30,onBeforeMoveRows:this.onBeforeMoveRows.bind(this),onMoveRows:this.onMoveRows.bind(this),columnIndexPosition:0},showCustomFooter:!0,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}},this.getData()}getData(){let o=[];for(let n=0;n<500;n++)o[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*25)+" days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",effortDriven:n%5===0};this.dataset.set(o)}onBeforeMoveRows(o,n){for(let l of n.rows)if(l===n.insertBefore||l===n.insertBefore-1&&n.insertBefore-1!==this.angularGrid.dataView.getItemCount())return o.stopPropagation(),!1;return!0}onMoveRows(o,n){let l=n.rows,r=n.insertBefore,m=[];this.angularGrid.dataView.sort(void 0,!0);let g=this.angularGrid.dataView.getItems(),M=this.angularGrid.dataView.getFilteredItems(),p=this.angularGrid.dataView.getItem(r),u=p?this.angularGrid.dataView.getIdxById(p.id):this.angularGrid.dataView.getItemCount(),x=[];l.forEach(a=>x.push(M[a]));let h=x.map(a=>this.angularGrid.dataView.getIdxById(a.id)),S=g.slice(0,u),w=g.slice(u,g.length);l.sort((a,F)=>a-F);for(let a of h)a!==void 0&&m.push(g[a]);h.reverse();for(let a of h)a!==void 0&&u!==void 0&&(a<u?S.splice(a,1):w.splice(a-u,1));let G=S.concat(m.concat(w));this.angularGrid.slickGrid?.invalidate(),this.dataset.set(G)}hideDurationColumnDynamically(){this.angularGrid.gridService.hideColumnById("duration")}disableFilters(){this.angularGrid.filterService.disableFilterFunctionality(!0)}disableSorting(){this.angularGrid.sortService.disableSortFunctionality(!0)}addEditDeleteColumns(){if(this.columnDefinitions[0].id!=="change-symbol"){let o=[{id:"change-symbol",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:b.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(l,r)=>{alert(`Technically we should Edit "Task ${r.dataContext.id}"`)}},{id:"delete-symbol",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:b.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(l,r)=>{confirm("Are you sure?")&&this.angularGrid.gridService.deleteItemById(r.dataContext.id)}}],n=this.angularGrid.gridService.getAllColumnDefinitions();n.unshift(o[0],o[1]),this.columnDefinitions=[...n]}}toggleFilter(){this.angularGrid.filterService.toggleFilterFunctionality()}toggleSorting(){this.angularGrid.sortService.toggleSortFunctionality()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275cmp=y({type:c,selectors:[["ng-component"]],decls:102,vars:3,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example16.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row","mb-2"],[1,"col-sm-12"],["data-test","hide-duration-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-eye-off-outline"],["data-test","disable-filters-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","disable-sorting-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","toggle-filtering-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-swap-vertical"],["data-test","toggle-sorting-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","add-crud-columns-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-plus"],[1,"row"],["gridId","grid16",3,"columnsChange","onAngularGridCreated","columns","options","dataset"]],template:function(n,l){n&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 16: Row Move & Checkbox Selector
    `),t(4,"span",1),e(5,`
      `),t(6,"a",2),e(7,`
        `),s(8,"span",3),e(9,` code
      `),i(),e(10,`
    `),i(),e(11,`
    `),t(12,"button",4),d("click",function(){return l.toggleSubTitle()}),e(13,`
      `),s(14,"span",5),e(15,`
    `),i(),e(16,`
  `),i(),e(17,`

  `),t(18,"div",6),e(19,`
    This example demonstrates using the `),t(20,"b"),e(21,"Slick.Plugins.RowMoveManager"),i(),e(22," plugin to easily move a row in the grid."),s(23,"br"),e(24,`
    `),t(25,"ul"),e(26,`
      `),t(27,"li"),e(28,"Click to select, Ctrl+Click to toggle selection, Shift+Click to select a range."),i(),e(29,`
      `),t(30,"li"),e(31,"Drag one or more rows by the handle (icon) to reorder"),i(),e(32,`
      `),t(33,"li"),e(34,'If you plan to use Row Selection + Row Move, then use "singleRowMove: true" and "disableRowSelection: true"'),i(),e(35,`
      `),t(36,"li"),e(37,'You can change "columnIndexPosition" to move the icon position of any extension (RowMove, RowDetail or RowSelector icon)'),i(),e(38,`
      `),t(39,"ul"),e(40,`
        `),t(41,"li"),e(42,'You will also want to enable the DataView "syncGridSelection: true" to keep row selection even after a row move'),i(),e(43,`
      `),i(),e(44,`
      `),t(45,"li"),e(46,`
        If you plan to use only Row Move, then you could keep default values (or omit them completely) of "singleRowMove: false" and
        "disableRowSelection: false"
      `),i(),e(47,`
      `),t(48,"ul"),e(49,`
        `),t(50,"li"),e(51,`
          SingleRowMove has the name suggest will only move 1 row at a time, by default it will move any row(s) that are selected unless you
          disable the flag
        `),i(),e(52,`
      `),i(),e(53,`
    `),i(),e(54,`
  `),i(),e(55,`

  `),t(56,"div",7),e(57,`
    `),t(58,"div",8),e(59,`
      `),t(60,"button",9),d("click",function(){return l.hideDurationColumnDynamically()}),e(61,`
        `),s(62,"i",10),e(63,`
        Dynamically Hide "Duration"
      `),i(),e(64,`
      `),t(65,"button",11),d("click",function(){return l.disableFilters()}),e(66,`
        `),s(67,"i",12),e(68,`
        Disable Filters
      `),i(),e(69,`
      `),t(70,"button",13),d("click",function(){return l.disableSorting()}),e(71,`
        `),s(72,"i",12),e(73,`
        Disable Sorting
      `),i(),e(74,`
      `),t(75,"button",14),d("click",function(){return l.toggleFilter()}),e(76,`
        `),s(77,"i",15),e(78,`
        Toggle Filtering
      `),i(),e(79,`
      `),t(80,"button",16),d("click",function(){return l.toggleSorting()}),e(81,`
        `),s(82,"i",15),e(83,`
        Toggle Sorting
      `),i(),e(84,`
      `),t(85,"button",17),d("click",function(){return l.addEditDeleteColumns()}),e(86,`
        `),s(87,"i",18),e(88,`
        Add Edit/Delete Columns
      `),i(),e(89,`
    `),i(),e(90,`
  `),i(),e(91,`
  `),t(92,"div",19),e(93,`
    `),t(94,"div",8),e(95,`
      `),t(96,"angular-slickgrid",20),D("columnsChange",function(m){return E(l.columnDefinitions,m)||(l.columnDefinitions=m),m}),d("onAngularGridCreated",function(m){return l.angularGridReady(m.detail)}),e(97,`
      `),i(),e(98,`
    `),i(),e(99,`
  `),i(),e(100,`
`),i(),e(101,`
`)),n&2&&(C(96),k("columns",l.columnDefinitions),_("options",l.gridOptions)("dataset",l.dataset()))},dependencies:[R],encapsulation:2})}}return c})();export{A as Example16Component};

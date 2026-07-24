import {A as Ao,e as Tu,X as XN,_ as _I,j as j1,u as ui,q as qE,c as cp,T as Tc,p as pp,J as Rp,W as Wy,P as Ap,a as ap,S as QE}from'./main-MR3B775B.js';var w=(()=>{class m{constructor(){this.dataset=Ao([]),this.hideSubTitle=false;}angularGridReady(o){this.angularGrid=o;}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"title",filterable:true},{id:"duration",name:"Duration",field:"duration",filterable:true,sortable:true},{id:"%",name:"% Complete",field:"percentComplete",filterable:true,sortable:true},{id:"start",name:"Start",field:"start",filterable:true,sortable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",filterable:true,sortable:true,filter:{model:Tu.compoundDate}},{id:"effort-driven",name:"Completed",field:"effortDriven",formatter:XN.checkmarkMaterial,filterable:true,sortable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect}}],this.gridOptions={enableAutoResize:true,autoResize:{container:"#demo-container",rightPadding:10},enableCellNavigation:true,enableFiltering:true,enableCheckboxSelector:true,checkboxSelector:{columnIndexPosition:1,hideInFilterHeaderRow:false,hideInColumnTitleRow:true},enableSelection:true,selectionOptions:{selectActiveRow:false},dataView:{syncGridSelection:true},enableRowMoveManager:true,rowMoveManager:{singleRowMove:true,disableRowSelection:true,cancelEditOnDrag:true,hideRowMoveShadow:false,width:30,onAfterMoveRows:(o,n)=>{this.dataset.set(n.updatedItems);},columnIndexPosition:0},showCustomFooter:true,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}},this.getData();}getData(){let o=[];for(let n=0;n<500;n++)o[n]={id:n,title:"Task "+n,duration:Math.round(Math.random()*25)+" days",percentComplete:Math.round(Math.random()*100),start:"01/01/2009",finish:"01/05/2009",effortDriven:n%5===0};this.dataset.set(o);}hideDurationColumnDynamically(){this.angularGrid.gridService.hideColumnById("duration");}disableFilters(){this.angularGrid.filterService.disableFilterFunctionality(true);}disableSorting(){this.angularGrid.sortService.disableSortFunctionality(true);}addEditDeleteColumns(){if(this.columns[0].id!=="change-symbol"){let o=[{id:"change-symbol",field:"id",excludeFromColumnPicker:true,excludeFromGridMenu:true,excludeFromHeaderMenu:true,formatter:XN.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(l,a)=>{alert(`Technically we should Edit "Task ${a.dataContext.id}"`);}},{id:"delete-symbol",field:"id",excludeFromColumnPicker:true,excludeFromGridMenu:true,excludeFromHeaderMenu:true,formatter:XN.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(l,a)=>{confirm("Are you sure?")&&this.angularGrid.gridService.deleteItemById(a.dataContext.id);}}],n=this.angularGrid.gridService.getAllColumnDefinitions();n.unshift(o[0],o[1]),this.columns=[...n];}}toggleFilter(){this.angularGrid.filterService.toggleFilterFunctionality();}toggleSorting(){this.angularGrid.sortService.toggleSortFunctionality();}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[o]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(n){return new(n||m)};}static{this.\u0275cmp=_I({type:m,selectors:[["ng-component"]],decls:102,vars:3,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example16.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row","mb-2"],[1,"col-sm-12"],["data-test","hide-duration-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-eye-off-outline"],["data-test","disable-filters-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","disable-sorting-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","toggle-filtering-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-swap-vertical"],["data-test","toggle-sorting-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","add-crud-columns-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-plus"],[1,"row"],["gridId","grid16",3,"columnsChange","onAngularGridCreated","columns","options","dataset"]],template:function(n,l){n&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 16: Row Move & Checkbox Selector
    `),ui(4,"span",1),qE(5,`
      `),ui(6,"a",2),qE(7,`
        `),cp(8,"span",3),qE(9,` code
      `),Tc(),qE(10,`
    `),Tc(),qE(11,`
    `),ui(12,"button",4),pp("click",function(){return l.toggleSubTitle()}),qE(13,`
      `),cp(14,"span",5),qE(15,`
    `),Tc(),qE(16,`
  `),Tc(),qE(17,`

  `),ui(18,"div",6),qE(19,`
    This example demonstrates using the `),ui(20,"b"),qE(21,"Slick.Plugins.RowMoveManager"),Tc(),qE(22," plugin to easily move a row in the grid."),cp(23,"br"),qE(24,`
    `),ui(25,"ul"),qE(26,`
      `),ui(27,"li"),qE(28,"Click to select, Ctrl+Click to toggle selection, Shift+Click to select a range."),Tc(),qE(29,`
      `),ui(30,"li"),qE(31,"Drag one or more rows by the handle (icon) to reorder"),Tc(),qE(32,`
      `),ui(33,"li"),qE(34,'If you plan to use Row Selection + Row Move, then use "singleRowMove: true" and "disableRowSelection: true"'),Tc(),qE(35,`
      `),ui(36,"li"),qE(37,'You can change "columnIndexPosition" to move the icon position of any extension (RowMove, RowDetail or RowSelector icon)'),Tc(),qE(38,`
      `),ui(39,"ul"),qE(40,`
        `),ui(41,"li"),qE(42,'You will also want to enable the DataView "syncGridSelection: true" to keep row selection even after a row move'),Tc(),qE(43,`
      `),Tc(),qE(44,`
      `),ui(45,"li"),qE(46,`
        If you plan to use only Row Move, then you could keep default values (or omit them completely) of "singleRowMove: false" and
        "disableRowSelection: false"
      `),Tc(),qE(47,`
      `),ui(48,"ul"),qE(49,`
        `),ui(50,"li"),qE(51,`
          SingleRowMove has the name suggest will only move 1 row at a time, by default it will move any row(s) that are selected unless you
          disable the flag
        `),Tc(),qE(52,`
      `),Tc(),qE(53,`
    `),Tc(),qE(54,`
  `),Tc(),qE(55,`

  `),ui(56,"div",7),qE(57,`
    `),ui(58,"div",8),qE(59,`
      `),ui(60,"button",9),pp("click",function(){return l.hideDurationColumnDynamically()}),qE(61,`
        `),cp(62,"i",10),qE(63,`
        Dynamically Hide "Duration"
      `),Tc(),qE(64,`
      `),ui(65,"button",11),pp("click",function(){return l.disableFilters()}),qE(66,`
        `),cp(67,"i",12),qE(68,`
        Disable Filters
      `),Tc(),qE(69,`
      `),ui(70,"button",13),pp("click",function(){return l.disableSorting()}),qE(71,`
        `),cp(72,"i",12),qE(73,`
        Disable Sorting
      `),Tc(),qE(74,`
      `),ui(75,"button",14),pp("click",function(){return l.toggleFilter()}),qE(76,`
        `),cp(77,"i",15),qE(78,`
        Toggle Filtering
      `),Tc(),qE(79,`
      `),ui(80,"button",16),pp("click",function(){return l.toggleSorting()}),qE(81,`
        `),cp(82,"i",15),qE(83,`
        Toggle Sorting
      `),Tc(),qE(84,`
      `),ui(85,"button",17),pp("click",function(){return l.addEditDeleteColumns()}),qE(86,`
        `),cp(87,"i",18),qE(88,`
        Add Edit/Delete Columns
      `),Tc(),qE(89,`
    `),Tc(),qE(90,`
  `),Tc(),qE(91,`
  `),ui(92,"div",19),qE(93,`
    `),ui(94,"div",8),qE(95,`
      `),ui(96,"angular-slickgrid",20),Rp("columnsChange",function(s){return QE(l.columns,s)||(l.columns=s),s}),pp("onAngularGridCreated",function(s){return l.angularGridReady(s.detail)}),qE(97,`
      `),Tc(),qE(98,`
    `),Tc(),qE(99,`
  `),Tc(),qE(100,`
`),Tc(),qE(101,`
`)),n&2&&(Wy(96),Ap("columns",l.columns),ap("options",l.gridOptions)("dataset",l.dataset()));},dependencies:[j1],encapsulation:2});}}return m})();export{w as Example16Component};
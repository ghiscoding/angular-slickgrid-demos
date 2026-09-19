import{F as Ip,Lt as Wp,O as Gp,Pn as ly,b as Ep,j as Ho,or as uD,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,ht as nk}from"./chunk-DLuyVhQJ.js";var w=(()=>{class m{constructor(){this.dataset=Ho([]),this.hideSubTitle=!1}angularGridReady(a){this.angularGrid=a}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,filterable:!0},{id:`duration`,name:`Duration`,field:`duration`,filterable:!0,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Completed`,field:`effortDriven`,formatter:nk.checkmarkMaterial,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,checkboxSelector:{columnIndexPosition:1,hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},dataView:{syncGridSelection:!0},enableRowMoveManager:!0,rowMoveManager:{singleRowMove:!0,disableRowSelection:!0,cancelEditOnDrag:!0,hideRowMoveShadow:!1,width:35,onAfterMoveRows:(a,n)=>{this.dataset.set(n.updatedItems)},columnIndexPosition:0},showCustomFooter:!0,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}},this.getData()}getData(){let a=[];for(let n=0;n<500;n++)a[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*25)+` days`,percentComplete:Math.round(Math.random()*100),start:`01/01/2009`,finish:`01/05/2009`,effortDriven:n%5===0};this.dataset.set(a)}hideDurationColumnDynamically(){this.angularGrid.gridService.hideColumnById(`duration`)}disableFilters(){this.angularGrid.filterService.disableFilterFunctionality(!0)}disableSorting(){this.angularGrid.sortService.disableSortFunctionality(!0)}addEditDeleteColumns(){if(this.columns[0].id!==`change-symbol`){let a=[{id:`change-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:nk.icon,params:{iconCssClass:`mdi mdi-pencil pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{alert(`Technically we should Edit "Task ${o.dataContext.id}"`)}},{id:`delete-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:nk.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}}],n=this.angularGrid.gridService.getAllColumnDefinitions();this.columns=[...a,...n]}}toggleFilter(){this.angularGrid.filterService.toggleFilterFunctionality()}toggleSorting(){this.angularGrid.sortService.toggleSortFunctionality()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=$E({type:m,selectors:[[`ng-component`]],decls:102,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example16.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`mb-2`],[1,`col-sm-12`],[`data-test`,`hide-duration-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-eye-off-outline`],[`data-test`,`disable-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`disable-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`toggle-filtering-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-swap-vertical`],[`data-test`,`toggle-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`add-crud-columns-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-plus`],[1,`row`],[`gridId`,`grid16`,3,`columnsChange`,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(n,l){n&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 16: Row Move & Checkbox Selector
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return l.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    This example demonstrates using the `),yi(20,`b`),sD(21,`Slick.Plugins.RowMoveManager`),Rc(),sD(22,` plugin to easily move a row in the grid.`),Ip(23,`br`),sD(24,`
    `),yi(25,`ul`),sD(26,`
      `),yi(27,`li`),sD(28,`Click to select, Ctrl+Click to toggle selection, Shift+Click to select a range.`),Rc(),sD(29,`
      `),yi(30,`li`),sD(31,`Drag one or more rows by the handle (icon) to reorder`),Rc(),sD(32,`
      `),yi(33,`li`),sD(34,`If you plan to use Row Selection + Row Move, then use "singleRowMove: true" and "disableRowSelection: true"`),Rc(),sD(35,`
      `),yi(36,`li`),sD(37,`You can change "columnIndexPosition" to move the icon position of any extension (RowMove, RowDetail or RowSelector icon)`),Rc(),sD(38,`
      `),yi(39,`ul`),sD(40,`
        `),yi(41,`li`),sD(42,`You will also want to enable the DataView "syncGridSelection: true" to keep row selection even after a row move`),Rc(),sD(43,`
      `),Rc(),sD(44,`
      `),yi(45,`li`),sD(46,`
        If you plan to use only Row Move, then you could keep default values (or omit them completely) of "singleRowMove: false" and
        "disableRowSelection: false"
      `),Rc(),sD(47,`
      `),yi(48,`ul`),sD(49,`
        `),yi(50,`li`),sD(51,`
          SingleRowMove has the name suggest will only move 1 row at a time, by default it will move any row(s) that are selected unless you
          disable the flag
        `),Rc(),sD(52,`
      `),Rc(),sD(53,`
    `),Rc(),sD(54,`
  `),Rc(),sD(55,`

  `),yi(56,`div`,7),sD(57,`
    `),yi(58,`div`,8),sD(59,`
      `),yi(60,`button`,9),bp(`click`,function(){return l.hideDurationColumnDynamically()}),sD(61,`
        `),Ip(62,`i`,10),sD(63,`
        Dynamically Hide "Duration"
      `),Rc(),sD(64,`
      `),yi(65,`button`,11),bp(`click`,function(){return l.disableFilters()}),sD(66,`
        `),Ip(67,`i`,12),sD(68,`
        Disable Filters
      `),Rc(),sD(69,`
      `),yi(70,`button`,13),bp(`click`,function(){return l.disableSorting()}),sD(71,`
        `),Ip(72,`i`,12),sD(73,`
        Disable Sorting
      `),Rc(),sD(74,`
      `),yi(75,`button`,14),bp(`click`,function(){return l.toggleFilter()}),sD(76,`
        `),Ip(77,`i`,15),sD(78,`
        Toggle Filtering
      `),Rc(),sD(79,`
      `),yi(80,`button`,16),bp(`click`,function(){return l.toggleSorting()}),sD(81,`
        `),Ip(82,`i`,15),sD(83,`
        Toggle Sorting
      `),Rc(),sD(84,`
      `),yi(85,`button`,17),bp(`click`,function(){return l.addEditDeleteColumns()}),sD(86,`
        `),Ip(87,`i`,18),sD(88,`
        Add Edit/Delete Columns
      `),Rc(),sD(89,`
    `),Rc(),sD(90,`
  `),Rc(),sD(91,`
  `),yi(92,`div`,19),sD(93,`
    `),yi(94,`div`,8),sD(95,`
      `),yi(96,`angular-slickgrid`,20),Wp(`columnsChange`,function(s){return uD(l.columns,s)||(l.columns=s),s}),bp(`onAngularGridCreated`,function(s){return l.angularGridReady(s.detail)}),sD(97,`
      `),Rc(),sD(98,`
    `),Rc(),sD(99,`
  `),Rc(),sD(100,`
`),Rc(),sD(101,`
`)),n&2&&(ly(96),Gp(`columns`,l.columns),Ep(`options`,l.gridOptions)(`dataset`,l.dataset()))},dependencies:[_W],encapsulation:2})}}return m})();export{w as Example16Component};
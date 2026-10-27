import{$n as pD,G as Kp,In as lD,M as Ho,U as Jp,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";var w=(()=>{class m{constructor(){this.dataset=Ho([]),this.hideSubTitle=!1}angularGridReady(a){this.angularGrid=a}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,filterable:!0},{id:`duration`,name:`Duration`,field:`duration`,filterable:!0,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,filterable:!0,sortable:!0,filter:{model:uu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,filterable:!0,sortable:!0,filter:{model:uu.compoundDate}},{id:`effort-driven`,name:`Completed`,field:`effortDriven`,formatter:sI.checkmarkMaterial,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:uu.singleSelect}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableCellNavigation:!0,enableSorting:!0,enableFiltering:!0,enableCheckboxSelector:!0,checkboxSelector:{columnIndexPosition:1,hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},dataView:{syncGridSelection:!0},enableRowMoveManager:!0,rowMoveManager:{singleRowMove:!0,disableRowSelection:!0,cancelEditOnDrag:!0,hideRowMoveShadow:!1,width:35,onAfterMoveRows:(a,n)=>{this.dataset.set(n.updatedItems)},columnIndexPosition:0},showCustomFooter:!0,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}},this.getData()}getData(){let a=[];for(let n=0;n<500;n++)a[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*25)+` days`,percentComplete:Math.round(Math.random()*100),start:`01/01/2009`,finish:`01/05/2009`,effortDriven:n%5===0};this.dataset.set(a)}hideDurationColumnDynamically(){this.angularGrid.gridService.hideColumnById(`duration`)}disableFilters(){this.angularGrid.filterService.disableFilterFunctionality(!0)}disableSorting(){this.angularGrid.sortService.disableSortFunctionality(!0)}addEditDeleteColumns(){if(this.columns[0].id!==`change-symbol`){let a=[{id:`change-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:sI.icon,params:{iconCssClass:`mdi mdi-pencil pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{alert(`Technically we should Edit "Task ${o.dataContext.id}"`)}},{id:`delete-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:sI.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}}],n=this.angularGrid.gridService.getAllColumnDefinitions();this.columns=[...a,...n]}}toggleFilter(){this.angularGrid.filterService.toggleFilterFunctionality()}toggleSorting(){this.angularGrid.sortService.toggleSortFunctionality()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=WE({type:m,selectors:[[`ng-component`]],decls:102,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example16.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`mb-2`],[1,`col-sm-12`],[`data-test`,`hide-duration-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-eye-off-outline`],[`data-test`,`disable-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`disable-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`toggle-filtering-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-swap-vertical`],[`data-test`,`toggle-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`add-crud-columns-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-plus`],[1,`row`],[`gridId`,`grid16`,3,`columnsChange`,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(n,l){n&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 16: Row Move & Checkbox Selector
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return l.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    This example demonstrates using the `),vi(20,`b`),lD(21,`Slick.Plugins.RowMoveManager`),Rc(),lD(22,` plugin to easily move a row in the grid.`),_p(23,`br`),lD(24,`
    `),vi(25,`ul`),lD(26,`
      `),vi(27,`li`),lD(28,`Click to select, Ctrl+Click to toggle selection, Shift+Click to select a range.`),Rc(),lD(29,`
      `),vi(30,`li`),lD(31,`Drag one or more rows by the handle (icon) to reorder`),Rc(),lD(32,`
      `),vi(33,`li`),lD(34,`If you plan to use Row Selection + Row Move, then use "singleRowMove: true" and "disableRowSelection: true"`),Rc(),lD(35,`
      `),vi(36,`li`),lD(37,`You can change "columnIndexPosition" to move the icon position of any extension (RowMove, RowDetail or RowSelector icon)`),Rc(),lD(38,`
      `),vi(39,`ul`),lD(40,`
        `),vi(41,`li`),lD(42,`You will also want to enable the DataView "syncGridSelection: true" to keep row selection even after a row move`),Rc(),lD(43,`
      `),Rc(),lD(44,`
      `),vi(45,`li`),lD(46,`
        If you plan to use only Row Move, then you could keep default values (or omit them completely) of "singleRowMove: false" and
        "disableRowSelection: false"
      `),Rc(),lD(47,`
      `),vi(48,`ul`),lD(49,`
        `),vi(50,`li`),lD(51,`
          SingleRowMove has the name suggest will only move 1 row at a time, by default it will move any row(s) that are selected unless you
          disable the flag
        `),Rc(),lD(52,`
      `),Rc(),lD(53,`
    `),Rc(),lD(54,`
  `),Rc(),lD(55,`

  `),vi(56,`div`,7),lD(57,`
    `),vi(58,`div`,8),lD(59,`
      `),vi(60,`button`,9),Ap(`click`,function(){return l.hideDurationColumnDynamically()}),lD(61,`
        `),_p(62,`i`,10),lD(63,`
        Dynamically Hide "Duration"
      `),Rc(),lD(64,`
      `),vi(65,`button`,11),Ap(`click`,function(){return l.disableFilters()}),lD(66,`
        `),_p(67,`i`,12),lD(68,`
        Disable Filters
      `),Rc(),lD(69,`
      `),vi(70,`button`,13),Ap(`click`,function(){return l.disableSorting()}),lD(71,`
        `),_p(72,`i`,12),lD(73,`
        Disable Sorting
      `),Rc(),lD(74,`
      `),vi(75,`button`,14),Ap(`click`,function(){return l.toggleFilter()}),lD(76,`
        `),_p(77,`i`,15),lD(78,`
        Toggle Filtering
      `),Rc(),lD(79,`
      `),vi(80,`button`,16),Ap(`click`,function(){return l.toggleSorting()}),lD(81,`
        `),_p(82,`i`,15),lD(83,`
        Toggle Sorting
      `),Rc(),lD(84,`
      `),vi(85,`button`,17),Ap(`click`,function(){return l.addEditDeleteColumns()}),lD(86,`
        `),_p(87,`i`,18),lD(88,`
        Add Edit/Delete Columns
      `),Rc(),lD(89,`
    `),Rc(),lD(90,`
  `),Rc(),lD(91,`
  `),vi(92,`div`,19),lD(93,`
    `),vi(94,`div`,8),lD(95,`
      `),vi(96,`angular-slickgrid`,20),Jp(`columnsChange`,function(s){return pD(l.columns,s)||(l.columns=s),s}),Ap(`onAngularGridCreated`,function(s){return l.angularGridReady(s.detail)}),lD(97,`
      `),Rc(),lD(98,`
    `),Rc(),lD(99,`
  `),Rc(),lD(100,`
`),Rc(),lD(101,`
`)),n&2&&(dv(96),Kp(`columns`,l.columns),bp(`options`,l.gridOptions)(`dataset`,l.dataset()))},dependencies:[D1],encapsulation:2})}}return m})();export{w as Example16Component};
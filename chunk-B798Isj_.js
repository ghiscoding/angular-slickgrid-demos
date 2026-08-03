import{Fn as mp,Hn as oD,Wt as av,Zt as cD,b as Fo,dn as gi,g as Dp,l as BI,n as $p,pn as gp,u as Bp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1,x as Iu}from"./chunk-C7G4ZLh2.js";var w=(()=>{class m{constructor(){this.dataset=Fo([]),this.hideSubTitle=!1}angularGridReady(a){this.angularGrid=a}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,filterable:!0},{id:`duration`,name:`Duration`,field:`duration`,filterable:!0,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,filterable:!0,sortable:!0,filter:{model:Iu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,filterable:!0,sortable:!0,filter:{model:Iu.compoundDate}},{id:`effort-driven`,name:`Completed`,field:`effortDriven`,formatter:JN.checkmarkMaterial,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:Iu.singleSelect}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,checkboxSelector:{columnIndexPosition:1,hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},dataView:{syncGridSelection:!0},enableRowMoveManager:!0,rowMoveManager:{singleRowMove:!0,disableRowSelection:!0,cancelEditOnDrag:!0,hideRowMoveShadow:!1,width:30,onAfterMoveRows:(a,n)=>{this.dataset.set(n.updatedItems)},columnIndexPosition:0},showCustomFooter:!0,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}},this.getData()}getData(){let a=[];for(let n=0;n<500;n++)a[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*25)+` days`,percentComplete:Math.round(Math.random()*100),start:`01/01/2009`,finish:`01/05/2009`,effortDriven:n%5===0};this.dataset.set(a)}hideDurationColumnDynamically(){this.angularGrid.gridService.hideColumnById(`duration`)}disableFilters(){this.angularGrid.filterService.disableFilterFunctionality(!0)}disableSorting(){this.angularGrid.sortService.disableSortFunctionality(!0)}addEditDeleteColumns(){if(this.columns[0].id!==`change-symbol`){let a=[{id:`change-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:JN.icon,params:{iconCssClass:`mdi mdi-pencil pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{alert(`Technically we should Edit "Task ${o.dataContext.id}"`)}},{id:`delete-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:JN.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}}],n=this.angularGrid.gridService.getAllColumnDefinitions();this.columns=[...a,...n]}}toggleFilter(){this.angularGrid.filterService.toggleFilterFunctionality()}toggleSorting(){this.angularGrid.sortService.toggleSortFunctionality()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=BI({type:m,selectors:[[`ng-component`]],decls:102,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example16.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`mb-2`],[1,`col-sm-12`],[`data-test`,`hide-duration-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-eye-off-outline`],[`data-test`,`disable-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`disable-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`toggle-filtering-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-swap-vertical`],[`data-test`,`toggle-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`add-crud-columns-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-plus`],[1,`row`],[`gridId`,`grid16`,3,`columnsChange`,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(n,l){n&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 16: Row Move & Checkbox Selector
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return l.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    This example demonstrates using the `),gi(20,`b`),oD(21,`Slick.Plugins.RowMoveManager`),xc(),oD(22,` plugin to easily move a row in the grid.`),mp(23,`br`),oD(24,`
    `),gi(25,`ul`),oD(26,`
      `),gi(27,`li`),oD(28,`Click to select, Ctrl+Click to toggle selection, Shift+Click to select a range.`),xc(),oD(29,`
      `),gi(30,`li`),oD(31,`Drag one or more rows by the handle (icon) to reorder`),xc(),oD(32,`
      `),gi(33,`li`),oD(34,`If you plan to use Row Selection + Row Move, then use "singleRowMove: true" and "disableRowSelection: true"`),xc(),oD(35,`
      `),gi(36,`li`),oD(37,`You can change "columnIndexPosition" to move the icon position of any extension (RowMove, RowDetail or RowSelector icon)`),xc(),oD(38,`
      `),gi(39,`ul`),oD(40,`
        `),gi(41,`li`),oD(42,`You will also want to enable the DataView "syncGridSelection: true" to keep row selection even after a row move`),xc(),oD(43,`
      `),xc(),oD(44,`
      `),gi(45,`li`),oD(46,`
        If you plan to use only Row Move, then you could keep default values (or omit them completely) of "singleRowMove: false" and
        "disableRowSelection: false"
      `),xc(),oD(47,`
      `),gi(48,`ul`),oD(49,`
        `),gi(50,`li`),oD(51,`
          SingleRowMove has the name suggest will only move 1 row at a time, by default it will move any row(s) that are selected unless you
          disable the flag
        `),xc(),oD(52,`
      `),xc(),oD(53,`
    `),xc(),oD(54,`
  `),xc(),oD(55,`

  `),gi(56,`div`,7),oD(57,`
    `),gi(58,`div`,8),oD(59,`
      `),gi(60,`button`,9),Dp(`click`,function(){return l.hideDurationColumnDynamically()}),oD(61,`
        `),mp(62,`i`,10),oD(63,`
        Dynamically Hide "Duration"
      `),xc(),oD(64,`
      `),gi(65,`button`,11),Dp(`click`,function(){return l.disableFilters()}),oD(66,`
        `),mp(67,`i`,12),oD(68,`
        Disable Filters
      `),xc(),oD(69,`
      `),gi(70,`button`,13),Dp(`click`,function(){return l.disableSorting()}),oD(71,`
        `),mp(72,`i`,12),oD(73,`
        Disable Sorting
      `),xc(),oD(74,`
      `),gi(75,`button`,14),Dp(`click`,function(){return l.toggleFilter()}),oD(76,`
        `),mp(77,`i`,15),oD(78,`
        Toggle Filtering
      `),xc(),oD(79,`
      `),gi(80,`button`,16),Dp(`click`,function(){return l.toggleSorting()}),oD(81,`
        `),mp(82,`i`,15),oD(83,`
        Toggle Sorting
      `),xc(),oD(84,`
      `),gi(85,`button`,17),Dp(`click`,function(){return l.addEditDeleteColumns()}),oD(86,`
        `),mp(87,`i`,18),oD(88,`
        Add Edit/Delete Columns
      `),xc(),oD(89,`
    `),xc(),oD(90,`
  `),xc(),oD(91,`
  `),gi(92,`div`,19),oD(93,`
    `),gi(94,`div`,8),oD(95,`
      `),gi(96,`angular-slickgrid`,20),$p(`columnsChange`,function(s){return cD(l.columns,s)||(l.columns=s),s}),Dp(`onAngularGridCreated`,function(s){return l.angularGridReady(s.detail)}),oD(97,`
      `),xc(),oD(98,`
    `),xc(),oD(99,`
  `),xc(),oD(100,`
`),xc(),oD(101,`
`)),n&2&&(av(96),Bp(`columns`,l.columns),gp(`options`,l.gridOptions)(`dataset`,l.dataset()))},dependencies:[q1],encapsulation:2})}}return m})();export{w as Example16Component};
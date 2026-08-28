import{Dt as UE,En as iD,Kn as mp,Nn as jo,Rn as lD,Tt as Tp,Wn as mi,hr as vp,kt as Up,ln as cy,o as Ac,r as $p}from"./chunk-06EGdSfW.js";import{H as _W,mt as nk,st as ip}from"./chunk-CAMk6vEo.js";var w=(()=>{class m{constructor(){this.dataset=jo([]),this.hideSubTitle=!1}angularGridReady(a){this.angularGrid=a}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,filterable:!0},{id:`duration`,name:`Duration`,field:`duration`,filterable:!0,sortable:!0},{id:`%`,name:`% Complete`,field:`percentComplete`,filterable:!0,sortable:!0},{id:`start`,name:`Start`,field:`start`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,filterable:!0,sortable:!0,filter:{model:ip.compoundDate}},{id:`effort-driven`,name:`Completed`,field:`effortDriven`,formatter:nk.checkmarkMaterial,filterable:!0,sortable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,checkboxSelector:{columnIndexPosition:1,hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableSelection:!0,selectionOptions:{selectActiveRow:!1},dataView:{syncGridSelection:!0},enableRowMoveManager:!0,rowMoveManager:{singleRowMove:!0,disableRowSelection:!0,cancelEditOnDrag:!0,hideRowMoveShadow:!1,width:35,onAfterMoveRows:(a,n)=>{this.dataset.set(n.updatedItems)},columnIndexPosition:0},showCustomFooter:!0,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}},this.getData()}getData(){let a=[];for(let n=0;n<500;n++)a[n]={id:n,title:`Task `+n,duration:Math.round(Math.random()*25)+` days`,percentComplete:Math.round(Math.random()*100),start:`01/01/2009`,finish:`01/05/2009`,effortDriven:n%5===0};this.dataset.set(a)}hideDurationColumnDynamically(){this.angularGrid.gridService.hideColumnById(`duration`)}disableFilters(){this.angularGrid.filterService.disableFilterFunctionality(!0)}disableSorting(){this.angularGrid.sortService.disableSortFunctionality(!0)}addEditDeleteColumns(){if(this.columns[0].id!==`change-symbol`){let a=[{id:`change-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:nk.icon,params:{iconCssClass:`mdi mdi-pencil pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{alert(`Technically we should Edit "Task ${o.dataContext.id}"`)}},{id:`delete-symbol`,field:`id`,excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:nk.icon,params:{iconCssClass:`mdi mdi-trash-can pointer`},minWidth:30,maxWidth:30,onCellClick:(l,o)=>{confirm(`Are you sure?`)&&this.angularGrid.gridService.deleteItemById(o.dataContext.id)}}],n=this.angularGrid.gridService.getAllColumnDefinitions();this.columns=[...a,...n]}}toggleFilter(){this.angularGrid.filterService.toggleFilterFunctionality()}toggleSorting(){this.angularGrid.sortService.toggleSortFunctionality()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[a](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=UE({type:m,selectors:[[`ng-component`]],decls:102,vars:3,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example16.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`,`mb-2`],[1,`col-sm-12`],[`data-test`,`hide-duration-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-eye-off-outline`],[`data-test`,`disable-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`disable-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`toggle-filtering-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-swap-vertical`],[`data-test`,`toggle-sorting-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`add-crud-columns-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-plus`],[1,`row`],[`gridId`,`grid16`,3,`columnsChange`,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(n,l){n&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 16: Row Move & Checkbox Selector
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return l.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    This example demonstrates using the `),mi(20,`b`),iD(21,`Slick.Plugins.RowMoveManager`),Ac(),iD(22,` plugin to easily move a row in the grid.`),vp(23,`br`),iD(24,`
    `),mi(25,`ul`),iD(26,`
      `),mi(27,`li`),iD(28,`Click to select, Ctrl+Click to toggle selection, Shift+Click to select a range.`),Ac(),iD(29,`
      `),mi(30,`li`),iD(31,`Drag one or more rows by the handle (icon) to reorder`),Ac(),iD(32,`
      `),mi(33,`li`),iD(34,`If you plan to use Row Selection + Row Move, then use "singleRowMove: true" and "disableRowSelection: true"`),Ac(),iD(35,`
      `),mi(36,`li`),iD(37,`You can change "columnIndexPosition" to move the icon position of any extension (RowMove, RowDetail or RowSelector icon)`),Ac(),iD(38,`
      `),mi(39,`ul`),iD(40,`
        `),mi(41,`li`),iD(42,`You will also want to enable the DataView "syncGridSelection: true" to keep row selection even after a row move`),Ac(),iD(43,`
      `),Ac(),iD(44,`
      `),mi(45,`li`),iD(46,`
        If you plan to use only Row Move, then you could keep default values (or omit them completely) of "singleRowMove: false" and
        "disableRowSelection: false"
      `),Ac(),iD(47,`
      `),mi(48,`ul`),iD(49,`
        `),mi(50,`li`),iD(51,`
          SingleRowMove has the name suggest will only move 1 row at a time, by default it will move any row(s) that are selected unless you
          disable the flag
        `),Ac(),iD(52,`
      `),Ac(),iD(53,`
    `),Ac(),iD(54,`
  `),Ac(),iD(55,`

  `),mi(56,`div`,7),iD(57,`
    `),mi(58,`div`,8),iD(59,`
      `),mi(60,`button`,9),Tp(`click`,function(){return l.hideDurationColumnDynamically()}),iD(61,`
        `),vp(62,`i`,10),iD(63,`
        Dynamically Hide "Duration"
      `),Ac(),iD(64,`
      `),mi(65,`button`,11),Tp(`click`,function(){return l.disableFilters()}),iD(66,`
        `),vp(67,`i`,12),iD(68,`
        Disable Filters
      `),Ac(),iD(69,`
      `),mi(70,`button`,13),Tp(`click`,function(){return l.disableSorting()}),iD(71,`
        `),vp(72,`i`,12),iD(73,`
        Disable Sorting
      `),Ac(),iD(74,`
      `),mi(75,`button`,14),Tp(`click`,function(){return l.toggleFilter()}),iD(76,`
        `),vp(77,`i`,15),iD(78,`
        Toggle Filtering
      `),Ac(),iD(79,`
      `),mi(80,`button`,16),Tp(`click`,function(){return l.toggleSorting()}),iD(81,`
        `),vp(82,`i`,15),iD(83,`
        Toggle Sorting
      `),Ac(),iD(84,`
      `),mi(85,`button`,17),Tp(`click`,function(){return l.addEditDeleteColumns()}),iD(86,`
        `),vp(87,`i`,18),iD(88,`
        Add Edit/Delete Columns
      `),Ac(),iD(89,`
    `),Ac(),iD(90,`
  `),Ac(),iD(91,`
  `),mi(92,`div`,19),iD(93,`
    `),mi(94,`div`,8),iD(95,`
      `),mi(96,`angular-slickgrid`,20),$p(`columnsChange`,function(s){return lD(l.columns,s)||(l.columns=s),s}),Tp(`onAngularGridCreated`,function(s){return l.angularGridReady(s.detail)}),iD(97,`
      `),Ac(),iD(98,`
    `),Ac(),iD(99,`
  `),Ac(),iD(100,`
`),Ac(),iD(101,`
`)),n&2&&(cy(96),Up(`columns`,l.columns),mp(`options`,l.gridOptions)(`dataset`,l.dataset()))},dependencies:[_W],encapsulation:2})}}return m})();export{w as Example16Component};
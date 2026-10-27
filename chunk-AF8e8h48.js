import{$n as pD,G as Kp,In as lD,U as Jp,a as Ap,mn as dv,on as bp,pr as tE,sr as rE,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";import{b as zt,c as Dn,d as In,u as Ge,y as qt}from"./main-BEH6XCIK.js";import{t as Qe}from"./chunk-D0qctKwX.js";import{t as a}from"./chunk-CiyLb43o.js";import{t as c}from"./chunk-CGe8-2e6.js";var M=(m,A,n,r,a)=>{if(a.textColor){let l=document.createElement(`span`);return l.className=a.textColor,l.textContent=n,l}return n};var P=(()=>{class m{constructor(){this.datasetHierarchical=[],this.hideSubTitle=!1,this.searchString=``,this.serverApiDelay=1e3}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:`chapterName`,name:`Chapter`,field:`chapterName`,width:150,formatter:sI.tree,filterable:!0,sortable:!0},{id:`label`,name:`Label`,field:`label`,minWidth:90,formatter:M,filterable:!0,sortable:!0},{id:`description`,name:`Description`,field:`description`,minWidth:90,formatter:M,filterable:!0,sortable:!0},{id:`pageNumber`,name:`Page Number`,field:`pageNumber`,minWidth:90,type:`number`,exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:uu.compoundInputNumber}},{id:`dateModified`,name:`Last Date Modified`,field:`dateModified`,formatter:sI.date,params:{dateFormat:`MMM DD, YYYY, h:mm:ss a`},type:`dateUtc`,outputType:`dateTimeIso`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:uu.compoundDate}}],this.gridOptions={autoResize:{autoHeight:!1,container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableCellNavigation:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableCheckboxSelector:!0,enableSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,onRowToggleStart:(n,r)=>console.log(`onBeforeRowToggle`,r),onSelectAllToggleStart:()=>this.angularGrid.treeDataService.toggleTreeDataCollapse(!1,!1)},selectionOptions:{selectActiveRow:!1},externalResources:[new Qe,new c],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,rowHeight:35,showCustomFooter:!0,treeDataOptions:{columnId:`chapterName`,childrenPropName:`chapters`,initiallyCollapsed:!0,lazy:!0,onLazyLoad:(n,r,a$1)=>{setTimeout(()=>{n.label===`lazy fetch will FAIL`?(a$1(),a(`Lazy fetching failed`,`danger`)):r(this.getChaptersByParentNode(n))},this.serverApiDelay)}}}}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid,this.dataViewObj=n.dataView}clearSearch(){this.searchString=``,this.updateFilter()}searchStringChanged(){this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:`label`,searchTerms:[this.searchString]}],!0,!1,!0)}clearFilters(){this.clearSearch(),this.angularGrid.filterService.clearFilters()}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}mockDataset(){return[{id:this.generateGUID(),chapterName:`Chapter 1`,label:`The intro`,chapters:[],description:`it's all about the introduction`,pageNumber:2,dateModified:`2024-03-05T12:44:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 2`,label:`Where it all started`,chapters:[],description:`hometown to the big city`,pageNumber:50,dateModified:`2024-04-23T08:33:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 3`,label:`Here I come...`,chapters:[],description:`here comes a wall`,pageNumber:78,dateModified:`2024-05-05T12:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 4`,label:`Are we there yet?`,chapters:[],description:`soon...`,pageNumber:120,dateModified:`2024-04-29T10:24:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 5`,label:`The finale`,chapters:[],description:`the end is near!`,pageNumber:155,dateModified:`2024-06-21T07:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 6`,label:`End`,pageNumber:156,dateModified:`2024-06-22T07:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter X`,label:`lazy fetch will FAIL`,chapters:[],description:`...demo an API call error!!!`,pageNumber:999,dateModified:`2024-09-28T00:22:00.123Z`,textColor:`color-danger`}]}getChaptersByParentNode(n){let r=this.prefixDots(n.chapterName.length-6);return[{id:this.generateGUID(),chapterName:`${n.chapterName}.1`,label:`${r}${n.chapterName?.toLowerCase()}.1`,chapters:[],pageNumber:n.pageNumber+1},{id:this.generateGUID(),chapterName:`${n.chapterName}.2`,label:`${r}${n.chapterName?.toLowerCase()}.2`,chapters:[],pageNumber:n.pageNumber+2},{id:this.generateGUID(),chapterName:`${n.chapterName}.3`,label:`${r}${n.chapterName?.toLowerCase()}.3`,pageNumber:n.pageNumber+3}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}generateGUID(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,n=>{let r=Math.random()*16|0;return(n===`x`?r:r&3|8).toString(16)})}prefixDots(n){let r=``;for(let a=0;a<n;a++)r+=`.`;return r}static{this.ɵfac=function(r){return new(r||m)}}static{this.ɵcmp=WE({type:m,selectors:[[`ng-component`]],decls:113,vars:5,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example46.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-md-7`],[`data-test`,`clear-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[1,`ml-2`],[`for`,`pinned-rows`],[`type`,`number`,`id`,`server-delay`,`data-test`,`server-delay`,2,`width`,`60px`,3,`ngModelChange`,`ngModel`],[1,`col-md-5`],[1,`input-group`],[`type`,`text`,`data-test`,`search-string`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,`search-string`,3,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-string`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`d-flex`,`align-items-center`,3,`click`],[1,`icon`,`mdi`,`mdi-close-thick`],[`gridId`,`grid46`,3,`onAngularGridCreated`,`columns`,`options`,`datasetHierarchical`]],template:function(r,a){r&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 46: Tree Data with Lazy Loading
    `),vi(4,`small`),_p(5,`span`,1),lD(6,` (from a Hierarchical Dataset -
      `),vi(7,`a`,2),lD(8,`Wiki`),Rc(),lD(9,`)`),Rc(),lD(10,`
    `),vi(11,`span`,3),lD(12,`
      `),vi(13,`a`,4),lD(14,`
        `),_p(15,`span`,5),lD(16,` code
      `),Rc(),lD(17,`
    `),Rc(),lD(18,`
    `),vi(19,`button`,6),Ap(`click`,function(){return a.toggleSubTitle()}),lD(20,`
      `),_p(21,`span`,7),lD(22,`
    `),Rc(),lD(23,`
  `),Rc(),lD(24,`

  `),vi(25,`div`,8),lD(26,`
    `),vi(27,`ul`),lD(28,`
      `),vi(29,`li`),lD(30,`
        Lazy Loading only works with Hierarchical Tree Data, also when creating a Lazy Tree Data grid, you would typically assign the
        `),vi(31,`code`),lD(32,`data`),Rc(),lD(33,` as the root collection but with empty children items.
      `),Rc(),lD(34,`
      `),vi(35,`li`),lD(36,`
        However please note that Parents do require the children arrays to be defined but can be left as empty arrays (e.g.
        `),vi(37,`code`),lD(38,`chapters: []`),Rc(),lD(39,` in our example). Parents without empty children arrays defined `),vi(40,`b`),lD(41,`will not`),Rc(),lD(42,` be detected as parents.
      `),Rc(),lD(43,`
      `),vi(44,`li`),lD(45,`
        Calling the "Expand All" command will `),vi(46,`b`),lD(47,`only`),Rc(),lD(48,` expand the nodes that were already lazily loaded (the other ones will remain as
        collapsed). Aggregators will also be lazily calculated and aggregate only the data that it currently has loaded.
      `),Rc(),lD(49,`
      `),vi(50,`li`),lD(51,`In the example below, clicking on the last `),vi(52,`b`),lD(53,`"Chapter X"`),Rc(),lD(54,` will demo an API call failure`),Rc(),lD(55,`
    `),Rc(),lD(56,`
  `),Rc(),lD(57,`

  `),vi(58,`div`,9),lD(59,`
    `),vi(60,`div`,10),lD(61,`
      `),vi(62,`button`,11),Ap(`click`,function(){return a.clearFilters()}),lD(63,`
        `),_p(64,`span`,12),lD(65,`
        `),vi(66,`span`),lD(67,`Clear Filters`),Rc(),lD(68,`
      `),Rc(),lD(69,`
      `),vi(70,`button`,13),Ap(`click`,function(){return a.collapseAll()}),lD(71,`
        `),_p(72,`span`,14),lD(73,`
        `),vi(74,`span`),lD(75,`Collapse All`),Rc(),lD(76,`
      `),Rc(),lD(77,`
      `),vi(78,`button`,15),Ap(`click`,function(){return a.expandAll()}),lD(79,`
        `),_p(80,`span`,16),lD(81,`
        `),vi(82,`span`),lD(83,`Expand All`),Rc(),lD(84,`
      `),Rc(),lD(85,`
      `),vi(86,`span`,17),lD(87,`
        `),vi(88,`label`,18),lD(89,`Simulated Server Delay (ms): `),Rc(),lD(90,`
        `),vi(91,`input`,19),tE(),Jp(`ngModelChange`,function(o){return pD(a.serverApiDelay,o)||(a.serverApiDelay=o),o}),Rc(),lD(92,`
      `),Rc(),lD(93,`
    `),Rc(),lD(94,`

    `),vi(95,`div`,20),lD(96,`
      `),vi(97,`div`,21),lD(98,`
        `),vi(99,`input`,22),tE(),Jp(`ngModelChange`,function(o){return pD(a.searchString,o)||(a.searchString=o),o}),Ap(`ngModelChange`,function(){return a.searchStringChanged()}),Rc(),lD(100,`
        `),vi(101,`button`,23),Ap(`click`,function(){return a.clearSearch()}),lD(102,`
          `),_p(103,`span`,24),lD(104,`
        `),Rc(),lD(105,`
      `),Rc(),lD(106,`
    `),Rc(),lD(107,`
  `),Rc(),lD(108,`

  `),vi(109,`angular-slickgrid`,25),Ap(`onAngularGridCreated`,function(o){return a.angularGridReady(o.detail)}),lD(110,`
  `),Rc(),lD(111,`
`),Rc(),lD(112,`
`)),r&2&&(dv(91),Kp(`ngModel`,a.serverApiDelay),rE(),dv(8),Kp(`ngModel`,a.searchString),rE(),dv(10),bp(`columns`,a.columns)(`options`,a.gridOptions)(`datasetHierarchical`,a.datasetHierarchical))},dependencies:[D1,In,Ge,zt,Dn,qt],styles:[`.display-inline-block{display:inline-block}
`],encapsulation:2})}}return m})();export{P as Example46Component};
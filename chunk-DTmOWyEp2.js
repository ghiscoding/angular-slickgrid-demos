import{Fn as mp,Hn as oD,P as Kv,Pt as Xv,Wt as av,Zt as cD,dn as gi,g as Dp,l as BI,n as $p,pn as gp,u as Bp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1,x as Iu}from"./chunk-C7G4ZLh2.js";import{_ as je,b as zt,c as Cn,l as En,v as qt}from"./main-4YT7AQ4D.js";import{t as a}from"./chunk-CiyLb43o.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";import{t as c}from"./chunk-NBH_THzt2.js";var M=(m,A,n,r,a)=>{if(a.textColor){let l=document.createElement(`span`);return l.className=a.textColor,l.textContent=n,l}return n};var P=(()=>{class m{constructor(){this.datasetHierarchical=[],this.hideSubTitle=!1,this.searchString=``,this.serverApiDelay=1e3}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:`chapterName`,name:`Chapter`,field:`chapterName`,width:150,formatter:JN.tree,filterable:!0,sortable:!0},{id:`label`,name:`Label`,field:`label`,minWidth:90,formatter:M,filterable:!0,sortable:!0},{id:`description`,name:`Description`,field:`description`,minWidth:90,formatter:M,filterable:!0,sortable:!0},{id:`pageNumber`,name:`Page Number`,field:`pageNumber`,minWidth:90,type:`number`,exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:Iu.compoundInputNumber}},{id:`dateModified`,name:`Last Date Modified`,field:`dateModified`,formatter:JN.date,params:{dateFormat:`MMM DD, YYYY, h:mm:ss a`},type:`dateUtc`,outputType:`dateTimeIso`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:Iu.compoundDate}}],this.gridOptions={autoResize:{autoHeight:!1,container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableCellNavigation:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableCheckboxSelector:!0,enableSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,onRowToggleStart:(n,r)=>console.log(`onBeforeRowToggle`,r),onSelectAllToggleStart:()=>this.angularGrid.treeDataService.toggleTreeDataCollapse(!1,!1)},selectionOptions:{selectActiveRow:!1},externalResources:[new Ze,new c],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,rowHeight:35,showCustomFooter:!0,treeDataOptions:{columnId:`chapterName`,childrenPropName:`chapters`,initiallyCollapsed:!0,lazy:!0,onLazyLoad:(n,r,a$1)=>{setTimeout(()=>{n.label===`lazy fetch will FAIL`?(a$1(),a(`Lazy fetching failed`,`danger`)):r(this.getChaptersByParentNode(n))},this.serverApiDelay)}}}}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid,this.dataViewObj=n.dataView}clearSearch(){this.searchString=``,this.updateFilter()}searchStringChanged(){this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:`label`,searchTerms:[this.searchString]}],!0,!1,!0)}clearFilters(){this.clearSearch(),this.angularGrid.filterService.clearFilters()}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}mockDataset(){return[{id:this.generateGUID(),chapterName:`Chapter 1`,label:`The intro`,chapters:[],description:`it's all about the introduction`,pageNumber:2,dateModified:`2024-03-05T12:44:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 2`,label:`Where it all started`,chapters:[],description:`hometown to the big city`,pageNumber:50,dateModified:`2024-04-23T08:33:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 3`,label:`Here I come...`,chapters:[],description:`here comes a wall`,pageNumber:78,dateModified:`2024-05-05T12:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 4`,label:`Are we there yet?`,chapters:[],description:`soon...`,pageNumber:120,dateModified:`2024-04-29T10:24:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 5`,label:`The finale`,chapters:[],description:`the end is near!`,pageNumber:155,dateModified:`2024-06-21T07:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 6`,label:`End`,pageNumber:156,dateModified:`2024-06-22T07:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter X`,label:`lazy fetch will FAIL`,chapters:[],description:`...demo an API call error!!!`,pageNumber:999,dateModified:`2024-09-28T00:22:00.123Z`,textColor:`color-danger`}]}getChaptersByParentNode(n){let r=this.prefixDots(n.chapterName.length-6);return[{id:this.generateGUID(),chapterName:`${n.chapterName}.1`,label:`${r}${n.chapterName?.toLowerCase()}.1`,chapters:[],pageNumber:n.pageNumber+1},{id:this.generateGUID(),chapterName:`${n.chapterName}.2`,label:`${r}${n.chapterName?.toLowerCase()}.2`,chapters:[],pageNumber:n.pageNumber+2},{id:this.generateGUID(),chapterName:`${n.chapterName}.3`,label:`${r}${n.chapterName?.toLowerCase()}.3`,pageNumber:n.pageNumber+3}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}generateGUID(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,n=>{let r=Math.random()*16|0;return(n===`x`?r:r&3|8).toString(16)})}prefixDots(n){let r=``;for(let a=0;a<n;a++)r+=`.`;return r}static{this.ɵfac=function(r){return new(r||m)}}static{this.ɵcmp=BI({type:m,selectors:[[`ng-component`]],decls:113,vars:5,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example46.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-md-7`],[`data-test`,`clear-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[1,`ml-2`],[`for`,`pinned-rows`],[`type`,`number`,`id`,`server-delay`,`data-test`,`server-delay`,2,`width`,`60px`,3,`ngModelChange`,`ngModel`],[1,`col-md-5`],[1,`input-group`],[`type`,`text`,`data-test`,`search-string`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,`search-string`,3,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-string`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`d-flex`,`align-items-center`,3,`click`],[1,`icon`,`mdi`,`mdi-close-thick`],[`gridId`,`grid46`,3,`onAngularGridCreated`,`columns`,`options`,`datasetHierarchical`]],template:function(r,a){r&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 46: Tree Data with Lazy Loading
    `),gi(4,`small`),mp(5,`span`,1),oD(6,` (from a Hierarchical Dataset -
      `),gi(7,`a`,2),oD(8,`Wiki`),xc(),oD(9,`)`),xc(),oD(10,`
    `),gi(11,`span`,3),oD(12,`
      `),gi(13,`a`,4),oD(14,`
        `),mp(15,`span`,5),oD(16,` code
      `),xc(),oD(17,`
    `),xc(),oD(18,`
    `),gi(19,`button`,6),Dp(`click`,function(){return a.toggleSubTitle()}),oD(20,`
      `),mp(21,`span`,7),oD(22,`
    `),xc(),oD(23,`
  `),xc(),oD(24,`

  `),gi(25,`div`,8),oD(26,`
    `),gi(27,`ul`),oD(28,`
      `),gi(29,`li`),oD(30,`
        Lazy Loading only works with Hierarchical Tree Data, also when creating a Lazy Tree Data grid, you would typically assign the
        `),gi(31,`code`),oD(32,`data`),xc(),oD(33,` as the root collection but with empty children items.
      `),xc(),oD(34,`
      `),gi(35,`li`),oD(36,`
        However please note that Parents do require the children arrays to be defined but can be left as empty arrays (e.g.
        `),gi(37,`code`),oD(38,`chapters: []`),xc(),oD(39,` in our example). Parents without empty children arrays defined `),gi(40,`b`),oD(41,`will not`),xc(),oD(42,` be detected as parents.
      `),xc(),oD(43,`
      `),gi(44,`li`),oD(45,`
        Calling the "Expand All" command will `),gi(46,`b`),oD(47,`only`),xc(),oD(48,` expand the nodes that were already lazily loaded (the other ones will remain as
        collapsed). Aggregators will also be lazily calculated and aggregate only the data that it currently has loaded.
      `),xc(),oD(49,`
      `),gi(50,`li`),oD(51,`In the example below, clicking on the last `),gi(52,`b`),oD(53,`"Chapter X"`),xc(),oD(54,` will demo an API call failure`),xc(),oD(55,`
    `),xc(),oD(56,`
  `),xc(),oD(57,`

  `),gi(58,`div`,9),oD(59,`
    `),gi(60,`div`,10),oD(61,`
      `),gi(62,`button`,11),Dp(`click`,function(){return a.clearFilters()}),oD(63,`
        `),mp(64,`span`,12),oD(65,`
        `),gi(66,`span`),oD(67,`Clear Filters`),xc(),oD(68,`
      `),xc(),oD(69,`
      `),gi(70,`button`,13),Dp(`click`,function(){return a.collapseAll()}),oD(71,`
        `),mp(72,`span`,14),oD(73,`
        `),gi(74,`span`),oD(75,`Collapse All`),xc(),oD(76,`
      `),xc(),oD(77,`
      `),gi(78,`button`,15),Dp(`click`,function(){return a.expandAll()}),oD(79,`
        `),mp(80,`span`,16),oD(81,`
        `),gi(82,`span`),oD(83,`Expand All`),xc(),oD(84,`
      `),xc(),oD(85,`
      `),gi(86,`span`,17),oD(87,`
        `),gi(88,`label`,18),oD(89,`Simulated Server Delay (ms): `),xc(),oD(90,`
        `),gi(91,`input`,19),$p(`ngModelChange`,function(o){return cD(a.serverApiDelay,o)||(a.serverApiDelay=o),o}),xc(),Kv(),oD(92,`
      `),xc(),oD(93,`
    `),xc(),oD(94,`

    `),gi(95,`div`,20),oD(96,`
      `),gi(97,`div`,21),oD(98,`
        `),gi(99,`input`,22),$p(`ngModelChange`,function(o){return cD(a.searchString,o)||(a.searchString=o),o}),Dp(`ngModelChange`,function(){return a.searchStringChanged()}),xc(),Kv(),oD(100,`
        `),gi(101,`button`,23),Dp(`click`,function(){return a.clearSearch()}),oD(102,`
          `),mp(103,`span`,24),oD(104,`
        `),xc(),oD(105,`
      `),xc(),oD(106,`
    `),xc(),oD(107,`
  `),xc(),oD(108,`

  `),gi(109,`angular-slickgrid`,25),Dp(`onAngularGridCreated`,function(o){return a.angularGridReady(o.detail)}),oD(110,`
  `),xc(),oD(111,`
`),xc(),oD(112,`
`)),r&2&&(av(91),Bp(`ngModel`,a.serverApiDelay),Xv(),av(8),Bp(`ngModel`,a.searchString),Xv(),av(10),gp(`columns`,a.columns)(`options`,a.gridOptions)(`datasetHierarchical`,a.datasetHierarchical))},dependencies:[q1,En,je,zt,Cn,qt],styles:[`.display-inline-block{display:inline-block}
`],encapsulation:2})}}return m})();export{P as Example46Component};
import{F as Ip,Lt as Wp,O as Gp,Pn as ly,b as Ep,ir as tE,or as uD,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,zt as Xy}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,ht as nk}from"./chunk-DLuyVhQJ.js";import{_ as Vn,b as zt,d as Fn,g as Te,s as $t}from"./main-CCTR2RMO.js";import{t as a}from"./chunk-CiyLb43o.js";import{t as Ze}from"./chunk-C5onuIZj.js";import{t as c}from"./chunk-xMySoz5s.js";var M=(m,A,n,r,a)=>{if(a.textColor){let l=document.createElement(`span`);return l.className=a.textColor,l.textContent=n,l}return n};var P=(()=>{class m{constructor(){this.datasetHierarchical=[],this.hideSubTitle=!1,this.searchString=``,this.serverApiDelay=1e3}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:`chapterName`,name:`Chapter`,field:`chapterName`,width:150,formatter:nk.tree,filterable:!0,sortable:!0},{id:`label`,name:`Label`,field:`label`,minWidth:90,formatter:M,filterable:!0,sortable:!0},{id:`description`,name:`Description`,field:`description`,minWidth:90,formatter:M,filterable:!0,sortable:!0},{id:`pageNumber`,name:`Page Number`,field:`pageNumber`,minWidth:90,type:`number`,exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:ip.compoundInputNumber}},{id:`dateModified`,name:`Last Date Modified`,field:`dateModified`,formatter:nk.date,params:{dateFormat:`MMM DD, YYYY, h:mm:ss a`},type:`dateUtc`,outputType:`dateTimeIso`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}}],this.gridOptions={autoResize:{autoHeight:!1,container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableCellNavigation:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableCheckboxSelector:!0,enableSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,onRowToggleStart:(n,r)=>console.log(`onBeforeRowToggle`,r),onSelectAllToggleStart:()=>this.angularGrid.treeDataService.toggleTreeDataCollapse(!1,!1)},selectionOptions:{selectActiveRow:!1},externalResources:[new Ze,new c],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,rowHeight:35,showCustomFooter:!0,treeDataOptions:{columnId:`chapterName`,childrenPropName:`chapters`,initiallyCollapsed:!0,lazy:!0,onLazyLoad:(n,r,a$1)=>{setTimeout(()=>{n.label===`lazy fetch will FAIL`?(a$1(),a(`Lazy fetching failed`,`danger`)):r(this.getChaptersByParentNode(n))},this.serverApiDelay)}}}}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid,this.dataViewObj=n.dataView}clearSearch(){this.searchString=``,this.updateFilter()}searchStringChanged(){this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:`label`,searchTerms:[this.searchString]}],!0,!1,!0)}clearFilters(){this.clearSearch(),this.angularGrid.filterService.clearFilters()}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}mockDataset(){return[{id:this.generateGUID(),chapterName:`Chapter 1`,label:`The intro`,chapters:[],description:`it's all about the introduction`,pageNumber:2,dateModified:`2024-03-05T12:44:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 2`,label:`Where it all started`,chapters:[],description:`hometown to the big city`,pageNumber:50,dateModified:`2024-04-23T08:33:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 3`,label:`Here I come...`,chapters:[],description:`here comes a wall`,pageNumber:78,dateModified:`2024-05-05T12:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 4`,label:`Are we there yet?`,chapters:[],description:`soon...`,pageNumber:120,dateModified:`2024-04-29T10:24:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 5`,label:`The finale`,chapters:[],description:`the end is near!`,pageNumber:155,dateModified:`2024-06-21T07:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 6`,label:`End`,pageNumber:156,dateModified:`2024-06-22T07:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter X`,label:`lazy fetch will FAIL`,chapters:[],description:`...demo an API call error!!!`,pageNumber:999,dateModified:`2024-09-28T00:22:00.123Z`,textColor:`color-danger`}]}getChaptersByParentNode(n){let r=this.prefixDots(n.chapterName.length-6);return[{id:this.generateGUID(),chapterName:`${n.chapterName}.1`,label:`${r}${n.chapterName?.toLowerCase()}.1`,chapters:[],pageNumber:n.pageNumber+1},{id:this.generateGUID(),chapterName:`${n.chapterName}.2`,label:`${r}${n.chapterName?.toLowerCase()}.2`,chapters:[],pageNumber:n.pageNumber+2},{id:this.generateGUID(),chapterName:`${n.chapterName}.3`,label:`${r}${n.chapterName?.toLowerCase()}.3`,pageNumber:n.pageNumber+3}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}generateGUID(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,n=>{let r=Math.random()*16|0;return(n===`x`?r:r&3|8).toString(16)})}prefixDots(n){let r=``;for(let a=0;a<n;a++)r+=`.`;return r}static{this.ɵfac=function(r){return new(r||m)}}static{this.ɵcmp=$E({type:m,selectors:[[`ng-component`]],decls:113,vars:5,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example46.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-md-7`],[`data-test`,`clear-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[1,`ml-2`],[`for`,`pinned-rows`],[`type`,`number`,`id`,`server-delay`,`data-test`,`server-delay`,2,`width`,`60px`,3,`ngModelChange`,`ngModel`],[1,`col-md-5`],[1,`input-group`],[`type`,`text`,`data-test`,`search-string`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,`search-string`,3,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-string`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`d-flex`,`align-items-center`,3,`click`],[1,`icon`,`mdi`,`mdi-close-thick`],[`gridId`,`grid46`,3,`onAngularGridCreated`,`columns`,`options`,`datasetHierarchical`]],template:function(r,a){r&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 46: Tree Data with Lazy Loading
    `),yi(4,`small`),Ip(5,`span`,1),sD(6,` (from a Hierarchical Dataset -
      `),yi(7,`a`,2),sD(8,`Wiki`),Rc(),sD(9,`)`),Rc(),sD(10,`
    `),yi(11,`span`,3),sD(12,`
      `),yi(13,`a`,4),sD(14,`
        `),Ip(15,`span`,5),sD(16,` code
      `),Rc(),sD(17,`
    `),Rc(),sD(18,`
    `),yi(19,`button`,6),bp(`click`,function(){return a.toggleSubTitle()}),sD(20,`
      `),Ip(21,`span`,7),sD(22,`
    `),Rc(),sD(23,`
  `),Rc(),sD(24,`

  `),yi(25,`div`,8),sD(26,`
    `),yi(27,`ul`),sD(28,`
      `),yi(29,`li`),sD(30,`
        Lazy Loading only works with Hierarchical Tree Data, also when creating a Lazy Tree Data grid, you would typically assign the
        `),yi(31,`code`),sD(32,`data`),Rc(),sD(33,` as the root collection but with empty children items.
      `),Rc(),sD(34,`
      `),yi(35,`li`),sD(36,`
        However please note that Parents do require the children arrays to be defined but can be left as empty arrays (e.g.
        `),yi(37,`code`),sD(38,`chapters: []`),Rc(),sD(39,` in our example). Parents without empty children arrays defined `),yi(40,`b`),sD(41,`will not`),Rc(),sD(42,` be detected as parents.
      `),Rc(),sD(43,`
      `),yi(44,`li`),sD(45,`
        Calling the "Expand All" command will `),yi(46,`b`),sD(47,`only`),Rc(),sD(48,` expand the nodes that were already lazily loaded (the other ones will remain as
        collapsed). Aggregators will also be lazily calculated and aggregate only the data that it currently has loaded.
      `),Rc(),sD(49,`
      `),yi(50,`li`),sD(51,`In the example below, clicking on the last `),yi(52,`b`),sD(53,`"Chapter X"`),Rc(),sD(54,` will demo an API call failure`),Rc(),sD(55,`
    `),Rc(),sD(56,`
  `),Rc(),sD(57,`

  `),yi(58,`div`,9),sD(59,`
    `),yi(60,`div`,10),sD(61,`
      `),yi(62,`button`,11),bp(`click`,function(){return a.clearFilters()}),sD(63,`
        `),Ip(64,`span`,12),sD(65,`
        `),yi(66,`span`),sD(67,`Clear Filters`),Rc(),sD(68,`
      `),Rc(),sD(69,`
      `),yi(70,`button`,13),bp(`click`,function(){return a.collapseAll()}),sD(71,`
        `),Ip(72,`span`,14),sD(73,`
        `),yi(74,`span`),sD(75,`Collapse All`),Rc(),sD(76,`
      `),Rc(),sD(77,`
      `),yi(78,`button`,15),bp(`click`,function(){return a.expandAll()}),sD(79,`
        `),Ip(80,`span`,16),sD(81,`
        `),yi(82,`span`),sD(83,`Expand All`),Rc(),sD(84,`
      `),Rc(),sD(85,`
      `),yi(86,`span`,17),sD(87,`
        `),yi(88,`label`,18),sD(89,`Simulated Server Delay (ms): `),Rc(),sD(90,`
        `),yi(91,`input`,19),Wp(`ngModelChange`,function(o){return uD(a.serverApiDelay,o)||(a.serverApiDelay=o),o}),Rc(),Xy(),sD(92,`
      `),Rc(),sD(93,`
    `),Rc(),sD(94,`

    `),yi(95,`div`,20),sD(96,`
      `),yi(97,`div`,21),sD(98,`
        `),yi(99,`input`,22),Wp(`ngModelChange`,function(o){return uD(a.searchString,o)||(a.searchString=o),o}),bp(`ngModelChange`,function(){return a.searchStringChanged()}),Rc(),Xy(),sD(100,`
        `),yi(101,`button`,23),bp(`click`,function(){return a.clearSearch()}),sD(102,`
          `),Ip(103,`span`,24),sD(104,`
        `),Rc(),sD(105,`
      `),Rc(),sD(106,`
    `),Rc(),sD(107,`
  `),Rc(),sD(108,`

  `),yi(109,`angular-slickgrid`,25),bp(`onAngularGridCreated`,function(o){return a.angularGridReady(o.detail)}),sD(110,`
  `),Rc(),sD(111,`
`),Rc(),sD(112,`
`)),r&2&&(ly(91),Gp(`ngModel`,a.serverApiDelay),tE(),ly(8),Gp(`ngModel`,a.searchString),tE(),ly(10),Ep(`columns`,a.columns)(`options`,a.gridOptions)(`datasetHierarchical`,a.datasetHierarchical))},dependencies:[_W,Fn,Te,zt,Vn,$t],styles:[`.display-inline-block{display:inline-block}
`],encapsulation:2})}}return m})();export{P as Example46Component};
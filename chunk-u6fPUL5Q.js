import{$ as Mp,Bn as lD,C as Ei,En as iD,K as Ky,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp,kr as zp,qt as Xy,yt as Qp}from"./chunk-CtIlL7jI.js";import{Ot as xz,bt as rp,xt as uP}from"./chunk-C1NeHYCu.js";import{b as zt,c as Dn,d as In,u as Ge,y as qt}from"./main-JBJUR4DQ.js";import{t as Ze}from"./chunk-dI_4WJwX.js";import{t as a}from"./chunk-CiyLb43o.js";import{t as c}from"./chunk-CivDt8Ld.js";var M=(m,A,n,r,a)=>{if(a.textColor){let l=document.createElement(`span`);return l.className=a.textColor,l.textContent=n,l}return n};var P=(()=>{class m{constructor(){this.datasetHierarchical=[],this.hideSubTitle=!1,this.searchString=``,this.serverApiDelay=1e3}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columns=[{id:`chapterName`,name:`Chapter`,field:`chapterName`,width:150,formatter:uP.tree,filterable:!0,sortable:!0},{id:`label`,name:`Label`,field:`label`,minWidth:90,formatter:M,filterable:!0,sortable:!0},{id:`description`,name:`Description`,field:`description`,minWidth:90,formatter:M,filterable:!0,sortable:!0},{id:`pageNumber`,name:`Page Number`,field:`pageNumber`,minWidth:90,type:`number`,exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:rp.compoundInputNumber}},{id:`dateModified`,name:`Last Date Modified`,field:`dateModified`,formatter:uP.date,params:{dateFormat:`MMM DD, YYYY, h:mm:ss a`},type:`dateUtc`,outputType:`dateTimeIso`,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:rp.compoundDate}}],this.gridOptions={autoResize:{autoHeight:!1,container:`#demo-container`,rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableCellNavigation:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableCheckboxSelector:!0,enableSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,onRowToggleStart:(n,r)=>console.log(`onBeforeRowToggle`,r),onSelectAllToggleStart:()=>this.angularGrid.treeDataService.toggleTreeDataCollapse(!1,!1)},selectionOptions:{selectActiveRow:!1},externalResources:[new Ze,new c],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,rowHeight:35,showCustomFooter:!0,treeDataOptions:{columnId:`chapterName`,childrenPropName:`chapters`,initiallyCollapsed:!0,lazy:!0,onLazyLoad:(n,r,a$1)=>{setTimeout(()=>{n.label===`lazy fetch will FAIL`?(a$1(),a(`Lazy fetching failed`,`danger`)):r(this.getChaptersByParentNode(n))},this.serverApiDelay)}}}}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid,this.dataViewObj=n.dataView}clearSearch(){this.searchString=``,this.updateFilter()}searchStringChanged(){this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:`label`,searchTerms:[this.searchString]}],!0,!1,!0)}clearFilters(){this.clearSearch(),this.angularGrid.filterService.clearFilters()}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}mockDataset(){return[{id:this.generateGUID(),chapterName:`Chapter 1`,label:`The intro`,chapters:[],description:`it's all about the introduction`,pageNumber:2,dateModified:`2024-03-05T12:44:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 2`,label:`Where it all started`,chapters:[],description:`hometown to the big city`,pageNumber:50,dateModified:`2024-04-23T08:33:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 3`,label:`Here I come...`,chapters:[],description:`here comes a wall`,pageNumber:78,dateModified:`2024-05-05T12:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 4`,label:`Are we there yet?`,chapters:[],description:`soon...`,pageNumber:120,dateModified:`2024-04-29T10:24:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 5`,label:`The finale`,chapters:[],description:`the end is near!`,pageNumber:155,dateModified:`2024-06-21T07:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter 6`,label:`End`,pageNumber:156,dateModified:`2024-06-22T07:22:00.123Z`},{id:this.generateGUID(),chapterName:`Chapter X`,label:`lazy fetch will FAIL`,chapters:[],description:`...demo an API call error!!!`,pageNumber:999,dateModified:`2024-09-28T00:22:00.123Z`,textColor:`color-danger`}]}getChaptersByParentNode(n){let r=this.prefixDots(n.chapterName.length-6);return[{id:this.generateGUID(),chapterName:`${n.chapterName}.1`,label:`${r}${n.chapterName?.toLowerCase()}.1`,chapters:[],pageNumber:n.pageNumber+1},{id:this.generateGUID(),chapterName:`${n.chapterName}.2`,label:`${r}${n.chapterName?.toLowerCase()}.2`,chapters:[],pageNumber:n.pageNumber+2},{id:this.generateGUID(),chapterName:`${n.chapterName}.3`,label:`${r}${n.chapterName?.toLowerCase()}.3`,pageNumber:n.pageNumber+3}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}generateGUID(){return`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,n=>{let r=Math.random()*16|0;return(n===`x`?r:r&3|8).toString(16)})}prefixDots(n){let r=``;for(let a=0;a<n;a++)r+=`.`;return r}static{this.ɵfac=function(r){return new(r||m)}}static{this.ɵcmp=BE({type:m,selectors:[[`ng-component`]],decls:113,vars:5,consts:[[1,`container-fluid`],[1,`mdi`,`mdi-file-tree`,`font-27px`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid`,`target`,`_blank`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example46.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link`,`mdi-v-align-sub`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`row`],[1,`col-md-7`],[`data-test`,`clear-filters-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`icon`,`mdi`,`mdi-arrow-expand`],[1,`ml-2`],[`for`,`pinned-rows`],[`type`,`number`,`id`,`server-delay`,`data-test`,`server-delay`,2,`width`,`60px`,3,`ngModelChange`,`ngModel`],[1,`col-md-5`],[1,`input-group`],[`type`,`text`,`data-test`,`search-string`,`placeholder`,`search value`,`autocomplete`,`off`,1,`form-control`,`search-string`,3,`ngModelChange`,`ngModel`],[`data-test`,`clear-search-string`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`d-flex`,`align-items-center`,3,`click`],[1,`icon`,`mdi`,`mdi-close-thick`],[`gridId`,`grid46`,3,`onAngularGridCreated`,`columns`,`options`,`datasetHierarchical`]],template:function(r,a){r&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 46: Tree Data with Lazy Loading
    `),Ei(4,`small`),Tp(5,`span`,1),iD(6,` (from a Hierarchical Dataset -
      `),Ei(7,`a`,2),iD(8,`Wiki`),Oc(),iD(9,`)`),Oc(),iD(10,`
    `),Ei(11,`span`,3),iD(12,`
      `),Ei(13,`a`,4),iD(14,`
        `),Tp(15,`span`,5),iD(16,` code
      `),Oc(),iD(17,`
    `),Oc(),iD(18,`
    `),Ei(19,`button`,6),Mp(`click`,function(){return a.toggleSubTitle()}),iD(20,`
      `),Tp(21,`span`,7),iD(22,`
    `),Oc(),iD(23,`
  `),Oc(),iD(24,`

  `),Ei(25,`div`,8),iD(26,`
    `),Ei(27,`ul`),iD(28,`
      `),Ei(29,`li`),iD(30,`
        Lazy Loading only works with Hierarchical Tree Data, also when creating a Lazy Tree Data grid, you would typically assign the
        `),Ei(31,`code`),iD(32,`data`),Oc(),iD(33,` as the root collection but with empty children items.
      `),Oc(),iD(34,`
      `),Ei(35,`li`),iD(36,`
        However please note that Parents do require the children arrays to be defined but can be left as empty arrays (e.g.
        `),Ei(37,`code`),iD(38,`chapters: []`),Oc(),iD(39,` in our example). Parents without empty children arrays defined `),Ei(40,`b`),iD(41,`will not`),Oc(),iD(42,` be detected as parents.
      `),Oc(),iD(43,`
      `),Ei(44,`li`),iD(45,`
        Calling the "Expand All" command will `),Ei(46,`b`),iD(47,`only`),Oc(),iD(48,` expand the nodes that were already lazily loaded (the other ones will remain as
        collapsed). Aggregators will also be lazily calculated and aggregate only the data that it currently has loaded.
      `),Oc(),iD(49,`
      `),Ei(50,`li`),iD(51,`In the example below, clicking on the last `),Ei(52,`b`),iD(53,`"Chapter X"`),Oc(),iD(54,` will demo an API call failure`),Oc(),iD(55,`
    `),Oc(),iD(56,`
  `),Oc(),iD(57,`

  `),Ei(58,`div`,9),iD(59,`
    `),Ei(60,`div`,10),iD(61,`
      `),Ei(62,`button`,11),Mp(`click`,function(){return a.clearFilters()}),iD(63,`
        `),Tp(64,`span`,12),iD(65,`
        `),Ei(66,`span`),iD(67,`Clear Filters`),Oc(),iD(68,`
      `),Oc(),iD(69,`
      `),Ei(70,`button`,13),Mp(`click`,function(){return a.collapseAll()}),iD(71,`
        `),Tp(72,`span`,14),iD(73,`
        `),Ei(74,`span`),iD(75,`Collapse All`),Oc(),iD(76,`
      `),Oc(),iD(77,`
      `),Ei(78,`button`,15),Mp(`click`,function(){return a.expandAll()}),iD(79,`
        `),Tp(80,`span`,16),iD(81,`
        `),Ei(82,`span`),iD(83,`Expand All`),Oc(),iD(84,`
      `),Oc(),iD(85,`
      `),Ei(86,`span`,17),iD(87,`
        `),Ei(88,`label`,18),iD(89,`Simulated Server Delay (ms): `),Oc(),iD(90,`
        `),Ei(91,`input`,19),Ky(),Qp(`ngModelChange`,function(o){return lD(a.serverApiDelay,o)||(a.serverApiDelay=o),o}),Oc(),iD(92,`
      `),Oc(),iD(93,`
    `),Oc(),iD(94,`

    `),Ei(95,`div`,20),iD(96,`
      `),Ei(97,`div`,21),iD(98,`
        `),Ei(99,`input`,22),Ky(),Qp(`ngModelChange`,function(o){return lD(a.searchString,o)||(a.searchString=o),o}),Mp(`ngModelChange`,function(){return a.searchStringChanged()}),Oc(),iD(100,`
        `),Ei(101,`button`,23),Mp(`click`,function(){return a.clearSearch()}),iD(102,`
          `),Tp(103,`span`,24),iD(104,`
        `),Oc(),iD(105,`
      `),Oc(),iD(106,`
    `),Oc(),iD(107,`
  `),Oc(),iD(108,`

  `),Ei(109,`angular-slickgrid`,25),Mp(`onAngularGridCreated`,function(o){return a.angularGridReady(o.detail)}),iD(110,`
  `),Oc(),iD(111,`
`),Oc(),iD(112,`
`)),r&2&&(ay(91),zp(`ngModel`,a.serverApiDelay),Xy(),ay(8),zp(`ngModel`,a.searchString),Xy(),ay(10),Dp(`columns`,a.columns)(`options`,a.gridOptions)(`datasetHierarchical`,a.datasetHierarchical))},dependencies:[xz,In,Ge,zt,Dn,qt],styles:[`.display-inline-block{display:inline-block}
`],encapsulation:2})}}return m})();export{P as Example46Component};
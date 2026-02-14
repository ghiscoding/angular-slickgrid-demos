import{a as N}from"./chunk-L3B3F7LN.js";import{b as S,c as y,f as E,h as C,o as _}from"./chunk-ZTHMMPCT.js";import{b as D}from"./chunk-3ZF7QZND.js";import{b as T}from"./chunk-CDWFOXJG.js";import{Da as w,wa as g,za as x}from"./chunk-IBXCHNN7.js";import{Aa as c,Kb as e,Pa as b,Pb as p,Qb as u,Rb as h,ib as f,jb as t,kb as i,lb as s,vb as d}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";var k=(m,v,n,r,a)=>{if(a.textColor){let l=document.createElement("span");return l.className=a.textColor,l.textContent=n,l}return n},W=(()=>{class m{constructor(){this.datasetHierarchical=[],this.hideSubTitle=!1,this.searchString="",this.serverApiDelay=1e3}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columnDefinitions=[{id:"chapterName",name:"Chapter",field:"chapterName",width:150,formatter:x.tree,filterable:!0,sortable:!0},{id:"label",name:"Label",field:"label",minWidth:90,formatter:k,filterable:!0,sortable:!0},{id:"description",name:"Description",field:"description",minWidth:90,formatter:k,filterable:!0,sortable:!0},{id:"pageNumber",name:"Page Number",field:"pageNumber",minWidth:90,type:"number",exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:g.compoundInputNumber}},{id:"dateModified",name:"Last Date Modified",field:"dateModified",formatter:x.date,params:{dateFormat:"MMM DD, YYYY, h:mm:ss a"},type:"dateUtc",outputType:"dateTimeIso",minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:g.compoundDate}}],this.gridOptions={autoResize:{autoHeight:!1,container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableTextExport:!0,textExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},enableCheckboxSelector:!0,enableSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0,onRowToggleStart:(n,r)=>console.log("onBeforeRowToggle",r),onSelectAllToggleStart:()=>this.angularGrid.treeDataService.toggleTreeDataCollapse(!1,!1)},externalResources:[new T,new N],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,rowHeight:35,showCustomFooter:!0,treeDataOptions:{columnId:"chapterName",childrenPropName:"chapters",initiallyCollapsed:!0,lazy:!0,onLazyLoad:(n,r,a)=>{setTimeout(()=>{n.label==="lazy fetch will FAIL"?(a(),D("Lazy fetching failed","danger")):r(this.getChaptersByParentNode(n))},this.serverApiDelay)}}}}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid,this.dataViewObj=n.dataView}clearSearch(){this.searchString="",this.updateFilter()}searchStringChanged(){this.updateFilter()}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:"label",searchTerms:[this.searchString]}],!0,!1,!0)}clearFilters(){this.clearSearch(),this.angularGrid.filterService.clearFilters()}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(!1)}mockDataset(){return[{id:this.generateGUID(),chapterName:"Chapter 1",label:"The intro",chapters:[],description:"it's all about the introduction",pageNumber:2,dateModified:"2024-03-05T12:44:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 2",label:"Where it all started",chapters:[],description:"hometown to the big city",pageNumber:50,dateModified:"2024-04-23T08:33:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 3",label:"Here I come...",chapters:[],description:"here comes a wall",pageNumber:78,dateModified:"2024-05-05T12:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 4",label:"Are we there yet?",chapters:[],description:"soon...",pageNumber:120,dateModified:"2024-04-29T10:24:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 5",label:"The finale",chapters:[],description:"the end is near!",pageNumber:155,dateModified:"2024-06-21T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 6",label:"End",pageNumber:156,dateModified:"2024-06-22T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter X",label:"lazy fetch will FAIL",chapters:[],description:"...demo an API call error!!!",pageNumber:999,dateModified:"2024-09-28T00:22:00.123Z",textColor:"color-danger"}]}getChaptersByParentNode(n){let r=this.prefixDots(n.chapterName.length-6);return[{id:this.generateGUID(),chapterName:`${n.chapterName}.1`,label:`${r}${n.chapterName?.toLowerCase()}.1`,chapters:[],pageNumber:n.pageNumber+1},{id:this.generateGUID(),chapterName:`${n.chapterName}.2`,label:`${r}${n.chapterName?.toLowerCase()}.2`,chapters:[],pageNumber:n.pageNumber+2},{id:this.generateGUID(),chapterName:`${n.chapterName}.3`,label:`${r}${n.chapterName?.toLowerCase()}.3`,pageNumber:n.pageNumber+3}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}generateGUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let r=Math.random()*16|0;return(n==="x"?r:r&3|8).toString(16)})}prefixDots(n){let r="";for(let a=0;a<n;a++)r+=".";return r}static{this.\u0275fac=function(r){return new(r||m)}}static{this.\u0275cmp=b({type:m,selectors:[["ng-component"]],decls:113,vars:5,consts:[[1,"container-fluid"],[1,"mdi","mdi-file-tree","font-27px"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid","target","_blank"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example46.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row"],[1,"col-md-7"],["data-test","clear-filters-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-expand"],[1,"ml-2"],["for","pinned-rows"],["type","number","id","server-delay","data-test","server-delay",2,"width","60px",3,"ngModelChange","ngModel"],[1,"col-md-5"],[1,"input-group"],["type","text","data-test","search-string","placeholder","search value","autocomplete","off",1,"form-control","search-string",3,"ngModelChange","ngModel"],["data-test","clear-search-string",1,"btn","btn-sm","btn-outline-secondary","d-flex","align-items-center",3,"click"],[1,"icon","mdi","mdi-close-thick"],["gridId","grid46",3,"onAngularGridCreated","columns","options","datasetHierarchical"]],template:function(r,a){r&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 46: Tree Data with Lazy Loading
    `),t(4,"small"),s(5,"span",1),e(6,` (from a Hierarchical Dataset -
      `),t(7,"a",2),e(8,"Wiki"),i(),e(9,")"),i(),e(10,`
    `),t(11,"span",3),e(12,`
      `),t(13,"a",4),e(14,`
        `),s(15,"span",5),e(16,` code
      `),i(),e(17,`
    `),i(),e(18,`
    `),t(19,"button",6),d("click",function(){return a.toggleSubTitle()}),e(20,`
      `),s(21,"span",7),e(22,`
    `),i(),e(23,`
  `),i(),e(24,`

  `),t(25,"div",8),e(26,`
    `),t(27,"ul"),e(28,`
      `),t(29,"li"),e(30,`
        Lazy Loading only works with Hierarchical Tree Data, also when creating a Lazy Tree Data grid, you would typically assign the
        `),t(31,"code"),e(32,"data"),i(),e(33,` as the root collection but with empty children items.
      `),i(),e(34,`
      `),t(35,"li"),e(36,`
        However please note that Parents do require the children arrays to be defined but can be left as empty arrays (e.g.
        `),t(37,"code"),e(38,"chapters: []"),i(),e(39," in our example). Parents without empty children arrays defined "),t(40,"b"),e(41,"will not"),i(),e(42,` be detected as parents.
      `),i(),e(43,`
      `),t(44,"li"),e(45,`
        Calling the "Expand All" command will `),t(46,"b"),e(47,"only"),i(),e(48,` expand the nodes that were already lazily loaded (the other ones will remain as
        collapsed). Aggregators will also be lazily calculated and aggregate only the data that it currently has loaded.
      `),i(),e(49,`
      `),t(50,"li"),e(51,"In the example below, clicking on the last "),t(52,"b"),e(53,'"Chapter X"'),i(),e(54," will demo an API call failure"),i(),e(55,`
    `),i(),e(56,`
  `),i(),e(57,`

  `),t(58,"div",9),e(59,`
    `),t(60,"div",10),e(61,`
      `),t(62,"button",11),d("click",function(){return a.clearFilters()}),e(63,`
        `),s(64,"span",12),e(65,`
        `),t(66,"span"),e(67,"Clear Filters"),i(),e(68,`
      `),i(),e(69,`
      `),t(70,"button",13),d("click",function(){return a.collapseAll()}),e(71,`
        `),s(72,"span",14),e(73,`
        `),t(74,"span"),e(75,"Collapse All"),i(),e(76,`
      `),i(),e(77,`
      `),t(78,"button",15),d("click",function(){return a.expandAll()}),e(79,`
        `),s(80,"span",16),e(81,`
        `),t(82,"span"),e(83,"Expand All"),i(),e(84,`
      `),i(),e(85,`
      `),t(86,"span",17),e(87,`
        `),t(88,"label",18),e(89,"Simulated Server Delay (ms): "),i(),e(90,`
        `),t(91,"input",19),h("ngModelChange",function(o){return u(a.serverApiDelay,o)||(a.serverApiDelay=o),o}),i(),e(92,`
      `),i(),e(93,`
    `),i(),e(94,`

    `),t(95,"div",20),e(96,`
      `),t(97,"div",21),e(98,`
        `),t(99,"input",22),h("ngModelChange",function(o){return u(a.searchString,o)||(a.searchString=o),o}),d("ngModelChange",function(){return a.searchStringChanged()}),i(),e(100,`
        `),t(101,"button",23),d("click",function(){return a.clearSearch()}),e(102,`
          `),s(103,"span",24),e(104,`
        `),i(),e(105,`
      `),i(),e(106,`
    `),i(),e(107,`
  `),i(),e(108,`

  `),t(109,"angular-slickgrid",25),d("onAngularGridCreated",function(o){return a.angularGridReady(o.detail)}),e(110,`
  `),i(),e(111,`
`),i(),e(112,`
`)),r&2&&(c(91),p("ngModel",a.serverApiDelay),c(8),p("ngModel",a.searchString),c(10),f("columns",a.columnDefinitions)("options",a.gridOptions)("datasetHierarchical",a.datasetHierarchical))},dependencies:[w,_,S,C,y,E],styles:[`.display-inline-block{display:inline-block}
`],encapsulation:2})}}return m})();export{W as Example46Component};

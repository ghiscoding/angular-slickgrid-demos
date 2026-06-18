import {c as c$1}from'./chunk-B7lLOQQM.js';import {q as qN,h as Tu,T as TI,U as U1,F as En,I as je,J as zt,K as Cn,O as qt,u as ui,B as BE,a as ap,d as Tc,f as fp,P as Ap,R as Ov,e as Uy,V as xp,W as Lv,g as sp,Y as WE}from'./main-C6PQTYH6.js';import {a as a$1}from'./chunk-B52EFzUa.js';import {Z as Ze}from'./chunk-CP-2FMG8.js';var M=(m,A,n,r,a)=>{if(a.textColor){let l=document.createElement("span");return l.className=a.textColor,l.textContent=n,l}return n},P=(()=>{class m{constructor(){this.datasetHierarchical=[],this.hideSubTitle=false,this.searchString="",this.serverApiDelay=1e3;}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset();}defineGrid(){this.columns=[{id:"chapterName",name:"Chapter",field:"chapterName",width:150,formatter:qN.tree,filterable:true,sortable:true},{id:"label",name:"Label",field:"label",minWidth:90,formatter:M,filterable:true,sortable:true},{id:"description",name:"Description",field:"description",minWidth:90,formatter:M,filterable:true,sortable:true},{id:"pageNumber",name:"Page Number",field:"pageNumber",minWidth:90,type:"number",exportWithFormatter:true,excelExportOptions:{autoDetectCellFormat:false},filterable:true,filter:{model:Tu.compoundInputNumber}},{id:"dateModified",name:"Last Date Modified",field:"dateModified",formatter:qN.date,params:{dateFormat:"MMM DD, YYYY, h:mm:ss a"},type:"dateUtc",outputType:"dateTimeIso",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}}],this.gridOptions={autoResize:{autoHeight:false,container:"#demo-container",rightPadding:10},enableAutoSizeColumns:true,enableAutoResize:true,enableCellNavigation:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:true,sanitizeDataExport:true},enableTextExport:true,textExportOptions:{exportWithFormatter:true,sanitizeDataExport:true},enableCheckboxSelector:true,enableSelection:true,multiSelect:false,checkboxSelector:{hideInFilterHeaderRow:false,hideInColumnTitleRow:true,onRowToggleStart:(n,r)=>console.log("onBeforeRowToggle",r),onSelectAllToggleStart:()=>this.angularGrid.treeDataService.toggleTreeDataCollapse(false,false)},selectionOptions:{selectActiveRow:false},externalResources:[new Ze,new c$1],enableFiltering:true,enableTreeData:true,multiColumnSort:false,rowHeight:35,showCustomFooter:true,treeDataOptions:{columnId:"chapterName",childrenPropName:"chapters",initiallyCollapsed:true,lazy:true,onLazyLoad:(n,r,a)=>{setTimeout(()=>{n.label==="lazy fetch will FAIL"?(a(),a$1("Lazy fetching failed","danger")):r(this.getChaptersByParentNode(n));},this.serverApiDelay);}}};}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid,this.dataViewObj=n.dataView;}clearSearch(){this.searchString="",this.updateFilter();}searchStringChanged(){this.updateFilter();}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:"label",searchTerms:[this.searchString]}],true,false,true);}clearFilters(){this.clearSearch(),this.angularGrid.filterService.clearFilters();}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(true);}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(false);}mockDataset(){return [{id:this.generateGUID(),chapterName:"Chapter 1",label:"The intro",chapters:[],description:"it's all about the introduction",pageNumber:2,dateModified:"2024-03-05T12:44:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 2",label:"Where it all started",chapters:[],description:"hometown to the big city",pageNumber:50,dateModified:"2024-04-23T08:33:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 3",label:"Here I come...",chapters:[],description:"here comes a wall",pageNumber:78,dateModified:"2024-05-05T12:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 4",label:"Are we there yet?",chapters:[],description:"soon...",pageNumber:120,dateModified:"2024-04-29T10:24:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 5",label:"The finale",chapters:[],description:"the end is near!",pageNumber:155,dateModified:"2024-06-21T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 6",label:"End",pageNumber:156,dateModified:"2024-06-22T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter X",label:"lazy fetch will FAIL",chapters:[],description:"...demo an API call error!!!",pageNumber:999,dateModified:"2024-09-28T00:22:00.123Z",textColor:"color-danger"}]}getChaptersByParentNode(n){let r=this.prefixDots(n.chapterName.length-6);return [{id:this.generateGUID(),chapterName:`${n.chapterName}.1`,label:`${r}${n.chapterName?.toLowerCase()}.1`,chapters:[],pageNumber:n.pageNumber+1},{id:this.generateGUID(),chapterName:`${n.chapterName}.2`,label:`${r}${n.chapterName?.toLowerCase()}.2`,chapters:[],pageNumber:n.pageNumber+2},{id:this.generateGUID(),chapterName:`${n.chapterName}.3`,label:`${r}${n.chapterName?.toLowerCase()}.3`,pageNumber:n.pageNumber+3}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}generateGUID(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let r=Math.random()*16|0;return (n==="x"?r:r&3|8).toString(16)})}prefixDots(n){let r="";for(let a=0;a<n;a++)r+=".";return r}static{this.\u0275fac=function(r){return new(r||m)};}static{this.\u0275cmp=TI({type:m,selectors:[["ng-component"]],decls:113,vars:5,consts:[[1,"container-fluid"],[1,"mdi","mdi-file-tree","font-27px"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid","target","_blank"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example46.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row"],[1,"col-md-7"],["data-test","clear-filters-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-expand"],[1,"ml-2"],["for","pinned-rows"],["type","number","id","server-delay","data-test","server-delay",2,"width","60px",3,"ngModelChange","ngModel"],[1,"col-md-5"],[1,"input-group"],["type","text","data-test","search-string","placeholder","search value","autocomplete","off",1,"form-control","search-string",3,"ngModelChange","ngModel"],["data-test","clear-search-string",1,"btn","btn-sm","btn-outline-secondary","d-flex","align-items-center",3,"click"],[1,"icon","mdi","mdi-close-thick"],["gridId","grid46",3,"onAngularGridCreated","columns","options","datasetHierarchical"]],template:function(r,a){r&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 46: Tree Data with Lazy Loading
    `),ui(4,"small"),ap(5,"span",1),BE(6,` (from a Hierarchical Dataset -
      `),ui(7,"a",2),BE(8,"Wiki"),Tc(),BE(9,")"),Tc(),BE(10,`
    `),ui(11,"span",3),BE(12,`
      `),ui(13,"a",4),BE(14,`
        `),ap(15,"span",5),BE(16,` code
      `),Tc(),BE(17,`
    `),Tc(),BE(18,`
    `),ui(19,"button",6),fp("click",function(){return a.toggleSubTitle()}),BE(20,`
      `),ap(21,"span",7),BE(22,`
    `),Tc(),BE(23,`
  `),Tc(),BE(24,`

  `),ui(25,"div",8),BE(26,`
    `),ui(27,"ul"),BE(28,`
      `),ui(29,"li"),BE(30,`
        Lazy Loading only works with Hierarchical Tree Data, also when creating a Lazy Tree Data grid, you would typically assign the
        `),ui(31,"code"),BE(32,"data"),Tc(),BE(33,` as the root collection but with empty children items.
      `),Tc(),BE(34,`
      `),ui(35,"li"),BE(36,`
        However please note that Parents do require the children arrays to be defined but can be left as empty arrays (e.g.
        `),ui(37,"code"),BE(38,"chapters: []"),Tc(),BE(39," in our example). Parents without empty children arrays defined "),ui(40,"b"),BE(41,"will not"),Tc(),BE(42,` be detected as parents.
      `),Tc(),BE(43,`
      `),ui(44,"li"),BE(45,`
        Calling the "Expand All" command will `),ui(46,"b"),BE(47,"only"),Tc(),BE(48,` expand the nodes that were already lazily loaded (the other ones will remain as
        collapsed). Aggregators will also be lazily calculated and aggregate only the data that it currently has loaded.
      `),Tc(),BE(49,`
      `),ui(50,"li"),BE(51,"In the example below, clicking on the last "),ui(52,"b"),BE(53,'"Chapter X"'),Tc(),BE(54," will demo an API call failure"),Tc(),BE(55,`
    `),Tc(),BE(56,`
  `),Tc(),BE(57,`

  `),ui(58,"div",9),BE(59,`
    `),ui(60,"div",10),BE(61,`
      `),ui(62,"button",11),fp("click",function(){return a.clearFilters()}),BE(63,`
        `),ap(64,"span",12),BE(65,`
        `),ui(66,"span"),BE(67,"Clear Filters"),Tc(),BE(68,`
      `),Tc(),BE(69,`
      `),ui(70,"button",13),fp("click",function(){return a.collapseAll()}),BE(71,`
        `),ap(72,"span",14),BE(73,`
        `),ui(74,"span"),BE(75,"Collapse All"),Tc(),BE(76,`
      `),Tc(),BE(77,`
      `),ui(78,"button",15),fp("click",function(){return a.expandAll()}),BE(79,`
        `),ap(80,"span",16),BE(81,`
        `),ui(82,"span"),BE(83,"Expand All"),Tc(),BE(84,`
      `),Tc(),BE(85,`
      `),ui(86,"span",17),BE(87,`
        `),ui(88,"label",18),BE(89,"Simulated Server Delay (ms): "),Tc(),BE(90,`
        `),ui(91,"input",19),Ap("ngModelChange",function(o){return WE(a.serverApiDelay,o)||(a.serverApiDelay=o),o}),Tc(),Ov(),BE(92,`
      `),Tc(),BE(93,`
    `),Tc(),BE(94,`

    `),ui(95,"div",20),BE(96,`
      `),ui(97,"div",21),BE(98,`
        `),ui(99,"input",22),Ap("ngModelChange",function(o){return WE(a.searchString,o)||(a.searchString=o),o}),fp("ngModelChange",function(){return a.searchStringChanged()}),Tc(),Ov(),BE(100,`
        `),ui(101,"button",23),fp("click",function(){return a.clearSearch()}),BE(102,`
          `),ap(103,"span",24),BE(104,`
        `),Tc(),BE(105,`
      `),Tc(),BE(106,`
    `),Tc(),BE(107,`
  `),Tc(),BE(108,`

  `),ui(109,"angular-slickgrid",25),fp("onAngularGridCreated",function(o){return a.angularGridReady(o.detail)}),BE(110,`
  `),Tc(),BE(111,`
`),Tc(),BE(112,`
`)),r&2&&(Uy(91),xp("ngModel",a.serverApiDelay),Lv(),Uy(8),xp("ngModel",a.searchString),Lv(),Uy(10),sp("columns",a.columns)("options",a.gridOptions)("datasetHierarchical",a.datasetHierarchical));},dependencies:[U1,En,je,zt,Cn,qt],styles:[`.display-inline-block{display:inline-block}
`],encapsulation:2});}}return m})();export{P as Example46Component};
import {c as c$1}from'./chunk-D0CqchKx.js';import {X as XN,f as Tu,b as bI,j as j1,F as En,G as je,I as zt,J as Cn,K as qt,u as ui,U as UE,c as cp,T as Tc,p as pp,R as Rp,O as Lv,W as Wy,P as Ap,Q as jv,d as ap,S as zE}from'./main-WTCLCICA.js';import {a as a$1}from'./chunk-B52EFzUa.js';import {Z as Ze}from'./chunk-Df9HDp2d.js';var M=(m,A,n,r,a)=>{if(a.textColor){let l=document.createElement("span");return l.className=a.textColor,l.textContent=n,l}return n},P=(()=>{class m{constructor(){this.datasetHierarchical=[],this.hideSubTitle=false,this.searchString="",this.serverApiDelay=1e3;}ngOnInit(){this.defineGrid(),this.datasetHierarchical=this.mockDataset();}defineGrid(){this.columns=[{id:"chapterName",name:"Chapter",field:"chapterName",width:150,formatter:XN.tree,filterable:true,sortable:true},{id:"label",name:"Label",field:"label",minWidth:90,formatter:M,filterable:true,sortable:true},{id:"description",name:"Description",field:"description",minWidth:90,formatter:M,filterable:true,sortable:true},{id:"pageNumber",name:"Page Number",field:"pageNumber",minWidth:90,type:"number",exportWithFormatter:true,excelExportOptions:{autoDetectCellFormat:false},filterable:true,filter:{model:Tu.compoundInputNumber}},{id:"dateModified",name:"Last Date Modified",field:"dateModified",formatter:XN.date,params:{dateFormat:"MMM DD, YYYY, h:mm:ss a"},type:"dateUtc",outputType:"dateTimeIso",minWidth:90,exportWithFormatter:true,filterable:true,filter:{model:Tu.compoundDate}}],this.gridOptions={autoResize:{autoHeight:false,container:"#demo-container",rightPadding:10},enableAutoSizeColumns:true,enableAutoResize:true,enableCellNavigation:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:true,sanitizeDataExport:true},enableTextExport:true,textExportOptions:{exportWithFormatter:true,sanitizeDataExport:true},enableCheckboxSelector:true,enableSelection:true,multiSelect:false,checkboxSelector:{hideInFilterHeaderRow:false,hideInColumnTitleRow:true,onRowToggleStart:(n,r)=>console.log("onBeforeRowToggle",r),onSelectAllToggleStart:()=>this.angularGrid.treeDataService.toggleTreeDataCollapse(false,false)},selectionOptions:{selectActiveRow:false},externalResources:[new Ze,new c$1],enableFiltering:true,enableTreeData:true,multiColumnSort:false,rowHeight:35,showCustomFooter:true,treeDataOptions:{columnId:"chapterName",childrenPropName:"chapters",initiallyCollapsed:true,lazy:true,onLazyLoad:(n,r,a)=>{setTimeout(()=>{n.label==="lazy fetch will FAIL"?(a(),a$1("Lazy fetching failed","danger")):r(this.getChaptersByParentNode(n));},this.serverApiDelay);}}};}angularGridReady(n){this.angularGrid=n,this.gridObj=n.slickGrid,this.dataViewObj=n.dataView;}clearSearch(){this.searchString="",this.updateFilter();}searchStringChanged(){this.updateFilter();}updateFilter(){this.angularGrid.filterService.updateFilters([{columnId:"label",searchTerms:[this.searchString]}],true,false,true);}clearFilters(){this.clearSearch(),this.angularGrid.filterService.clearFilters();}collapseAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(true);}expandAll(){this.angularGrid.treeDataService.toggleTreeDataCollapse(false);}mockDataset(){return [{id:this.generateGUID(),chapterName:"Chapter 1",label:"The intro",chapters:[],description:"it's all about the introduction",pageNumber:2,dateModified:"2024-03-05T12:44:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 2",label:"Where it all started",chapters:[],description:"hometown to the big city",pageNumber:50,dateModified:"2024-04-23T08:33:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 3",label:"Here I come...",chapters:[],description:"here comes a wall",pageNumber:78,dateModified:"2024-05-05T12:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 4",label:"Are we there yet?",chapters:[],description:"soon...",pageNumber:120,dateModified:"2024-04-29T10:24:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 5",label:"The finale",chapters:[],description:"the end is near!",pageNumber:155,dateModified:"2024-06-21T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter 6",label:"End",pageNumber:156,dateModified:"2024-06-22T07:22:00.123Z"},{id:this.generateGUID(),chapterName:"Chapter X",label:"lazy fetch will FAIL",chapters:[],description:"...demo an API call error!!!",pageNumber:999,dateModified:"2024-09-28T00:22:00.123Z",textColor:"color-danger"}]}getChaptersByParentNode(n){let r=this.prefixDots(n.chapterName.length-6);return [{id:this.generateGUID(),chapterName:`${n.chapterName}.1`,label:`${r}${n.chapterName?.toLowerCase()}.1`,chapters:[],pageNumber:n.pageNumber+1},{id:this.generateGUID(),chapterName:`${n.chapterName}.2`,label:`${r}${n.chapterName?.toLowerCase()}.2`,chapters:[],pageNumber:n.pageNumber+2},{id:this.generateGUID(),chapterName:`${n.chapterName}.3`,label:`${r}${n.chapterName?.toLowerCase()}.3`,pageNumber:n.pageNumber+3}]}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}generateGUID(){return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let r=Math.random()*16|0;return (n==="x"?r:r&3|8).toString(16)})}prefixDots(n){let r="";for(let a=0;a<n;a++)r+=".";return r}static{this.\u0275fac=function(r){return new(r||m)};}static{this.\u0275cmp=bI({type:m,selectors:[["ng-component"]],decls:113,vars:5,consts:[[1,"container-fluid"],[1,"mdi","mdi-file-tree","font-27px"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/tree-data-grid","target","_blank"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example46.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link","mdi-v-align-sub"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],[1,"row"],[1,"col-md-7"],["data-test","clear-filters-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"icon","mdi","mdi-arrow-expand"],[1,"ml-2"],["for","pinned-rows"],["type","number","id","server-delay","data-test","server-delay",2,"width","60px",3,"ngModelChange","ngModel"],[1,"col-md-5"],[1,"input-group"],["type","text","data-test","search-string","placeholder","search value","autocomplete","off",1,"form-control","search-string",3,"ngModelChange","ngModel"],["data-test","clear-search-string",1,"btn","btn-sm","btn-outline-secondary","d-flex","align-items-center",3,"click"],[1,"icon","mdi","mdi-close-thick"],["gridId","grid46",3,"onAngularGridCreated","columns","options","datasetHierarchical"]],template:function(r,a){r&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 46: Tree Data with Lazy Loading
    `),ui(4,"small"),cp(5,"span",1),UE(6,` (from a Hierarchical Dataset -
      `),ui(7,"a",2),UE(8,"Wiki"),Tc(),UE(9,")"),Tc(),UE(10,`
    `),ui(11,"span",3),UE(12,`
      `),ui(13,"a",4),UE(14,`
        `),cp(15,"span",5),UE(16,` code
      `),Tc(),UE(17,`
    `),Tc(),UE(18,`
    `),ui(19,"button",6),pp("click",function(){return a.toggleSubTitle()}),UE(20,`
      `),cp(21,"span",7),UE(22,`
    `),Tc(),UE(23,`
  `),Tc(),UE(24,`

  `),ui(25,"div",8),UE(26,`
    `),ui(27,"ul"),UE(28,`
      `),ui(29,"li"),UE(30,`
        Lazy Loading only works with Hierarchical Tree Data, also when creating a Lazy Tree Data grid, you would typically assign the
        `),ui(31,"code"),UE(32,"data"),Tc(),UE(33,` as the root collection but with empty children items.
      `),Tc(),UE(34,`
      `),ui(35,"li"),UE(36,`
        However please note that Parents do require the children arrays to be defined but can be left as empty arrays (e.g.
        `),ui(37,"code"),UE(38,"chapters: []"),Tc(),UE(39," in our example). Parents without empty children arrays defined "),ui(40,"b"),UE(41,"will not"),Tc(),UE(42,` be detected as parents.
      `),Tc(),UE(43,`
      `),ui(44,"li"),UE(45,`
        Calling the "Expand All" command will `),ui(46,"b"),UE(47,"only"),Tc(),UE(48,` expand the nodes that were already lazily loaded (the other ones will remain as
        collapsed). Aggregators will also be lazily calculated and aggregate only the data that it currently has loaded.
      `),Tc(),UE(49,`
      `),ui(50,"li"),UE(51,"In the example below, clicking on the last "),ui(52,"b"),UE(53,'"Chapter X"'),Tc(),UE(54," will demo an API call failure"),Tc(),UE(55,`
    `),Tc(),UE(56,`
  `),Tc(),UE(57,`

  `),ui(58,"div",9),UE(59,`
    `),ui(60,"div",10),UE(61,`
      `),ui(62,"button",11),pp("click",function(){return a.clearFilters()}),UE(63,`
        `),cp(64,"span",12),UE(65,`
        `),ui(66,"span"),UE(67,"Clear Filters"),Tc(),UE(68,`
      `),Tc(),UE(69,`
      `),ui(70,"button",13),pp("click",function(){return a.collapseAll()}),UE(71,`
        `),cp(72,"span",14),UE(73,`
        `),ui(74,"span"),UE(75,"Collapse All"),Tc(),UE(76,`
      `),Tc(),UE(77,`
      `),ui(78,"button",15),pp("click",function(){return a.expandAll()}),UE(79,`
        `),cp(80,"span",16),UE(81,`
        `),ui(82,"span"),UE(83,"Expand All"),Tc(),UE(84,`
      `),Tc(),UE(85,`
      `),ui(86,"span",17),UE(87,`
        `),ui(88,"label",18),UE(89,"Simulated Server Delay (ms): "),Tc(),UE(90,`
        `),ui(91,"input",19),Rp("ngModelChange",function(o){return zE(a.serverApiDelay,o)||(a.serverApiDelay=o),o}),Tc(),Lv(),UE(92,`
      `),Tc(),UE(93,`
    `),Tc(),UE(94,`

    `),ui(95,"div",20),UE(96,`
      `),ui(97,"div",21),UE(98,`
        `),ui(99,"input",22),Rp("ngModelChange",function(o){return zE(a.searchString,o)||(a.searchString=o),o}),pp("ngModelChange",function(){return a.searchStringChanged()}),Tc(),Lv(),UE(100,`
        `),ui(101,"button",23),pp("click",function(){return a.clearSearch()}),UE(102,`
          `),cp(103,"span",24),UE(104,`
        `),Tc(),UE(105,`
      `),Tc(),UE(106,`
    `),Tc(),UE(107,`
  `),Tc(),UE(108,`

  `),ui(109,"angular-slickgrid",25),pp("onAngularGridCreated",function(o){return a.angularGridReady(o.detail)}),UE(110,`
  `),Tc(),UE(111,`
`),Tc(),UE(112,`
`)),r&2&&(Wy(91),Ap("ngModel",a.serverApiDelay),jv(),Wy(8),Ap("ngModel",a.searchString),jv(),Wy(10),ap("columns",a.columns)("options",a.gridOptions)("datasetHierarchical",a.datasetHierarchical));},dependencies:[j1,En,je,zt,Cn,qt],styles:[`.display-inline-block{display:inline-block}
`],encapsulation:2});}}return m})();export{P as Example46Component};
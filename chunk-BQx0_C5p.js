import {D,aj as hp,f as Tu,X as XN,b as bI,j as j1,F as En,G as je,J as Cn,K as qt,u as ui,U as UE,c as cp,T as Tc,p as pp,R as Rp,O as Lv,W as Wy,P as Ap,Q as jv,d as ap,ak as XE,b9 as dr,C as Cc,a as bc,al as hp$1,l as lp,k as Nc,N as Np,q as AE,bi as tD,S as zE}from'./main-WTCLCICA.js';var S=s=>({disabled:s}),U=(()=>{class s{constructor(){this.elm=D(dr),this._subscriptions=[],this.currentPagination={};}init(n,r,e){this._grid=n,this._paginationService=r,this._pubSubService=e,this.currentPagination=this._paginationService.getFullPagination(),this._subscriptions.push(this._pubSubService.subscribe("onPaginationRefreshed",o=>{this.currentPagination.dataFrom=o.dataFrom,this.currentPagination.dataTo=o.dataTo,this.currentPagination.pageCount=o.pageCount,this.currentPagination.pageNumber=o.pageNumber,this.currentPagination.pageSize=o.pageSize,this.currentPagination.pageSizes=o.pageSizes,this.currentPagination.totalItems=o.totalItems;}));}dispose(){this._pubSubService.unsubscribeAll(this._subscriptions),this.disposeElement();}disposeElement(){this._paginationElement.remove();}renderPagination(n,r="top"){this._gridContainerElm=n,this._paginationElement=this.elm.nativeElement,this._paginationElement.id="pager",this._paginationElement.className=`pagination-container pager ${this._grid.getUID()}`,this._paginationElement.style.width="100%",r==="top"?(this._paginationElement.classList.add("top"),n.prepend(this._paginationElement)):(this._paginationElement.classList.add("bottom"),n.appendChild(this._paginationElement));}onFirstPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToFirstPage(n);}onLastPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToLastPage(n);}onNextPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToNextPage(n);}onPreviousPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToPreviousPage(n);}isLeftPaginationDisabled(){return this.currentPagination.pageNumber===1||this.currentPagination.totalItems===0}isRightPaginationDisabled(){return this.currentPagination.pageNumber===this.currentPagination.pageCount||this.currentPagination.totalItems===0}static{this.\u0275fac=function(r){return new(r||s)};}static{this.\u0275cmp=bI({type:s,selectors:[["ng-component"]],decls:74,vars:21,consts:[[1,"custom-pagination"],[1,"custom-pagination-settings"],[1,"custom-pagination-count"],[1,"page-info-from-to"],["aria-label","Page Item From","data-test","item-from",1,"item-from"],["aria-label","Page Item To","data-test","item-to",1,"item-to"],[1,"page-info-total-items"],["aria-label","Total Items","data-test","total-items",1,"total-items"],[1,"text-items"],[1,"custom-pagination-nav"],["aria-label","Page navigation"],[1,"custom-pagination-ul"],[1,"li","page-item","seek-first"],["aria-label","First Page","role","button",1,"pagination-link","mdi","mdi-page-first","icon-seek-first","font-22px",3,"click"],[1,"li","page-item","seek-prev"],["aria-label","Previous Page","role","button",1,"pagination-link","icon-seek-prev","mdi","mdi-chevron-down","font-22px","mdi-rotate-90",3,"click"],[1,"page-number"],[1,"text-page"],["aria-label","Page Number","data-test","page-number-label",1,"page-number"],["data-test","page-count",1,"page-count"],[1,"li","page-item","seek-next",3,"click"],["aria-label","Next Page","role","button",1,"pagination-link","icon-seek-next","mdi","mdi-chevron-down","font-22px","mdi-rotate-270"],[1,"li","page-item","seek-end"],["aria-label","Last Page","role","button",1,"pagination-link","icon-seek-end","mdi","mdi-page-last","font-22px",3,"click"]],template:function(r,e){r&1&&(Cc(0,"div",0),UE(1,`
  `),Cc(2,"span",1),UE(3,`
    `),Cc(4,"span",2),UE(5,`
      `),Cc(6,"span",3),UE(7,`
        `),Cc(8,"span",4),UE(9),bc(),UE(10,`-
        `),Cc(11,"span",5),UE(12),bc(),UE(13,`
        of
      `),bc(),UE(14,`
      `),Cc(15,"span",6),UE(16,`
        `),Cc(17,"span",7),UE(18),bc(),UE(19,`
        `),Cc(20,"span",8),UE(21," items"),bc(),UE(22,`
      `),bc(),UE(23,`
    `),bc(),UE(24,`
  `),bc(),UE(25,`
  `),Cc(26,"div",9),UE(27,`
    `),Cc(28,"nav",10),UE(29,`
      `),Cc(30,"ul",11),UE(31,`
        `),Cc(32,"li",12),UE(33,`
          `),Cc(34,"a",13),hp$1("click",function(l){return e.onFirstPageClicked(l)}),bc(),UE(35,`
        `),bc(),UE(36,`
        `),Cc(37,"li",14),UE(38,`
          `),Cc(39,"a",15),hp$1("click",function(l){return e.onPreviousPageClicked(l)}),bc(),UE(40,`
        `),bc(),UE(41,`
      `),bc(),UE(42,`
    `),bc(),UE(43,`
    `),Cc(44,"div",16),UE(45,`
      `),Cc(46,"span",17),UE(47,"Page"),bc(),UE(48,`
      `),Cc(49,"span",18),UE(50),bc(),UE(51,`
      of
      `),Cc(52,"span",19),UE(53),bc(),UE(54,`
    `),bc(),UE(55,`
    `),Cc(56,"nav",10),UE(57,`
      `),Cc(58,"ul",11),UE(59,`
        `),Cc(60,"li",20),hp$1("click",function(l){return e.onNextPageClicked(l)}),UE(61,`
          `),lp(62,"a",21),UE(63,`
        `),bc(),UE(64,`
        `),Cc(65,"li",22),UE(66,`
          `),Cc(67,"a",23),hp$1("click",function(l){return e.onLastPageClicked(l)}),bc(),UE(68,`
        `),bc(),UE(69,`
      `),bc(),UE(70,`
    `),bc(),UE(71,`
  `),bc(),UE(72,`
`),bc(),UE(73,`
`)),r&2&&(Wy(9),Nc(" ",e.currentPagination?.dataFrom," "),Wy(3),Nc(`
          `,e.currentPagination?.dataTo,`
        `),Wy(6),Np(e.currentPagination?.totalItems),Wy(14),AE(tD(13,S,e.isLeftPaginationDisabled())),Wy(5),AE(tD(15,S,e.isLeftPaginationDisabled())),Wy(13),Np(e.currentPagination?.pageNumber),Wy(3),Np(e.currentPagination?.pageCount),Wy(7),AE(tD(17,S,e.isRightPaginationDisabled())),Wy(5),AE(tD(19,S,e.isRightPaginationDisabled())));},styles:[".custom-pagination[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:10px;font-size:13px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-settings[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:30px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]{display:flex;align-items:center;list-style-type:none}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{display:flex;width:26px;justify-content:center;margin:0}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#b4b3b3;background-color:#b4b3b3}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{padding:0 5px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;width:20px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;margin:0;padding:0 5px;color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]:hover{color:#408cfd}"]});}}return s})();var V=5e3;function E(s,q){return Math.floor(Math.random()*(q-s+1)+s)}var it=(()=>{class s{constructor(){this.angularUtilService=D(hp),this.columns=[],this.dataset=[],this.hideSubTitle=false,this.pageSize=50,this.paginationPosition="top";}angularGridReady(n){this.angularGrid=n;}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(V);}defineGrid(){this.columns=[{id:"title",name:"Title",field:"id",minWidth:100,sortable:true,filterable:true,formatter:(n,r,e)=>`Task ${e}`,params:{useFormatterOuputToFilter:true}},{id:"description",name:"Description",field:"description",filterable:true,sortable:true,minWidth:80},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,sortable:true,customTooltip:{position:"center"},formatter:XN.progressBar,type:"number",filterable:true,filter:{model:Tu.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:false,min:0,step:5}}},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,sortable:true,minWidth:75,width:100,exportWithFormatter:true,type:"date",filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,sortable:true,minWidth:75,width:120,exportWithFormatter:true,type:"date",filterable:true,filter:{model:Tu.dateRange}},{id:"duration",field:"duration",name:"Duration",maxWidth:90,type:"number",sortable:true,filterable:true,filter:{model:Tu.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",minWidth:85,maxWidth:90,formatter:XN.checkmarkMaterial,exportWithFormatter:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect,options:{autoAdjustDropHeight:true}}}],this.gridOptions={autoResize:{container:"#demo-container",bottomPadding:this.paginationPosition==="top"?-1:38},enableExcelCopyBuffer:true,enableFiltering:true,customPaginationComponent:U,enablePagination:true,pagination:{pageSize:this.pageSize},rowHeight:40};}loadData(n){let r=[];for(let e=0,o=n;e<o;e++){let l=E(0,365),y=E(new Date().getFullYear(),new Date().getFullYear()+1),O=E(0,12),T=E(10,28),v=E(0,100);r.push({id:e,title:"Task "+e,description:e%5?"desc "+e:null,duration:l,percentComplete:v,percentCompleteNumber:v,start:e%4?null:new Date(y,O,T),finish:new Date(y,O,T),completed:v===100});}return r}setPaginationSize(n){this.angularGrid.paginationService?.changeItemPerPage(n);}togglePaginationPosition(){let n=document.querySelector(`#${this.gridOptions.gridContainerId||""}`);this.paginationPosition=this.paginationPosition==="top"?"bottom":"top",this.angularGrid.paginationComponent?.disposeElement(),this.angularGrid.paginationComponent?.renderPagination(n,this.paginationPosition);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(r){return new(r||s)};}static{this.\u0275cmp=bI({type:s,selectors:[["ng-component"]],features:[XE([hp])],decls:44,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example42.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["data-text","toggle-pagination-btn",1,"btn","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-swap-vertical"],[1,"margin-15px"],["type","text","data-test","page-size-input",1,"input","is-small","is-narrow",2,"width","55px",3,"ngModelChange","ngModel"],["gridId","grid42",3,"onAngularGridCreated","columns","options","dataset"]],template:function(r,e){r&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 42: Custom Pagination
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return e.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"div",6),UE(19,`
    You can create a Custom Pagination by passing an Angular Custom Component and it must `),ui(20,"code"),UE(21,"implements BasePaginationComponent"),Tc(),UE(22,`.
    Any of the pagination controls could be moved anywhere on the page (for example we purposely moved the page size away from the rest of
    the pagination elements).
  `),Tc(),UE(23,`

  `),ui(24,"div"),UE(25,`
    `),ui(26,"button",7),pp("click",function(){return e.togglePaginationPosition()}),UE(27,`
      `),cp(28,"span",8),UE(29,`
      `),ui(30,"span"),UE(31,"Toggle Pagination Position"),Tc(),UE(32,`
    `),Tc(),UE(33,`

    `),ui(34,"span",9),UE(35,`
      Page Size
      `),ui(36,"input",10),Rp("ngModelChange",function(l){return zE(e.pageSize,l)||(e.pageSize=l),l}),pp("ngModelChange",function(l){return e.setPaginationSize(l)}),Tc(),Lv(),UE(37,`
    `),Tc(),UE(38,`
  `),Tc(),UE(39,`

  `),ui(40,"angular-slickgrid",11),pp("onAngularGridCreated",function(l){return e.angularGridReady(l.detail)}),UE(41,`
  `),Tc(),UE(42,`
`),Tc(),UE(43,`
`)),r&2&&(Wy(36),Ap("ngModel",e.pageSize),jv(),Wy(4),ap("columns",e.columns)("options",e.gridOptions)("dataset",e.dataset));},dependencies:[j1,En,je,Cn,qt],encapsulation:2});}}return s})();export{it as Example42Component};
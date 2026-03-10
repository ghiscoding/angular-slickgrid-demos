import{b as R,c as W,f as G,o as A}from"./chunk-BBW77BDN.js";import{Ba as k,Da as j,wa as p,za as f}from"./chunk-V3K67AAF.js";import{Ib as h,Jb as t,Kb as C,Lb as M,Oa as x,Ob as I,Pb as z,Qb as L,Tb as N,U as b,Vb as P,hb as F,ib as m,jb as d,kb as _,lb as i,mb as a,nb as w,oa as D,ub as u,vb as c,za as g}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";var S=s=>({disabled:s}),B=(()=>{class s{constructor(){this.elm=b(D),this._subscriptions=[],this.currentPagination={}}init(n,r,e){this._grid=n,this._paginationService=r,this._pubSubService=e,this.currentPagination=this._paginationService.getFullPagination(),this._subscriptions.push(this._pubSubService.subscribe("onPaginationRefreshed",o=>{this.currentPagination.dataFrom=o.dataFrom,this.currentPagination.dataTo=o.dataTo,this.currentPagination.pageCount=o.pageCount,this.currentPagination.pageNumber=o.pageNumber,this.currentPagination.pageSize=o.pageSize,this.currentPagination.pageSizes=o.pageSizes,this.currentPagination.totalItems=o.totalItems}))}dispose(){this._pubSubService.unsubscribeAll(this._subscriptions),this.disposeElement()}disposeElement(){this._paginationElement.remove()}renderPagination(n,r="top"){this._gridContainerElm=n,this._paginationElement=this.elm.nativeElement,this._paginationElement.id="pager",this._paginationElement.className=`pagination-container pager ${this._grid.getUID()}`,this._paginationElement.style.width="100%",r==="top"?(this._paginationElement.classList.add("top"),n.prepend(this._paginationElement)):(this._paginationElement.classList.add("bottom"),n.appendChild(this._paginationElement))}onFirstPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToFirstPage(n)}onLastPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToLastPage(n)}onNextPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToNextPage(n)}onPreviousPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToPreviousPage(n)}isLeftPaginationDisabled(){return this.currentPagination.pageNumber===1||this.currentPagination.totalItems===0}isRightPaginationDisabled(){return this.currentPagination.pageNumber===this.currentPagination.pageCount||this.currentPagination.totalItems===0}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275cmp=x({type:s,selectors:[["ng-component"]],decls:74,vars:21,consts:[[1,"custom-pagination"],[1,"custom-pagination-settings"],[1,"custom-pagination-count"],[1,"page-info-from-to"],["aria-label","Page Item From","data-test","item-from",1,"item-from"],["aria-label","Page Item To","data-test","item-to",1,"item-to"],[1,"page-info-total-items"],["aria-label","Total Items","data-test","total-items",1,"total-items"],[1,"text-items"],[1,"custom-pagination-nav"],["aria-label","Page navigation"],[1,"custom-pagination-ul"],[1,"li","page-item","seek-first"],["aria-label","First Page","role","button",1,"pagination-link","mdi","mdi-page-first","icon-seek-first","font-22px",3,"click"],[1,"li","page-item","seek-prev"],["aria-label","Previous Page","role","button",1,"pagination-link","icon-seek-prev","mdi","mdi-chevron-down","font-22px","mdi-rotate-90",3,"click"],[1,"page-number"],[1,"text-page"],["aria-label","Page Number","data-test","page-number-label",1,"page-number"],["data-test","page-count",1,"page-count"],[1,"li","page-item","seek-next",3,"click"],["aria-label","Next Page","role","button",1,"pagination-link","icon-seek-next","mdi","mdi-chevron-down","font-22px","mdi-rotate-270"],[1,"li","page-item","seek-end"],["aria-label","Last Page","role","button",1,"pagination-link","icon-seek-end","mdi","mdi-page-last","font-22px",3,"click"]],template:function(r,e){r&1&&(i(0,"div",0),t(1,`
  `),i(2,"span",1),t(3,`
    `),i(4,"span",2),t(5,`
      `),i(6,"span",3),t(7,`
        `),i(8,"span",4),t(9),a(),t(10,`-
        `),i(11,"span",5),t(12),a(),t(13,`
        of
      `),a(),t(14,`
      `),i(15,"span",6),t(16,`
        `),i(17,"span",7),t(18),a(),t(19,`
        `),i(20,"span",8),t(21," items"),a(),t(22,`
      `),a(),t(23,`
    `),a(),t(24,`
  `),a(),t(25,`
  `),i(26,"div",9),t(27,`
    `),i(28,"nav",10),t(29,`
      `),i(30,"ul",11),t(31,`
        `),i(32,"li",12),t(33,`
          `),i(34,"a",13),c("click",function(l){return e.onFirstPageClicked(l)}),a(),t(35,`
        `),a(),t(36,`
        `),i(37,"li",14),t(38,`
          `),i(39,"a",15),c("click",function(l){return e.onPreviousPageClicked(l)}),a(),t(40,`
        `),a(),t(41,`
      `),a(),t(42,`
    `),a(),t(43,`
    `),i(44,"div",16),t(45,`
      `),i(46,"span",17),t(47,"Page"),a(),t(48,`
      `),i(49,"span",18),t(50),a(),t(51,`
      of
      `),i(52,"span",19),t(53),a(),t(54,`
    `),a(),t(55,`
    `),i(56,"nav",10),t(57,`
      `),i(58,"ul",11),t(59,`
        `),i(60,"li",20),c("click",function(l){return e.onNextPageClicked(l)}),t(61,`
          `),w(62,"a",21),t(63,`
        `),a(),t(64,`
        `),i(65,"li",22),t(66,`
          `),i(67,"a",23),c("click",function(l){return e.onLastPageClicked(l)}),a(),t(68,`
        `),a(),t(69,`
      `),a(),t(70,`
    `),a(),t(71,`
  `),a(),t(72,`
`),a(),t(73,`
`)),r&2&&(g(9),M(" ",e.currentPagination==null?null:e.currentPagination.dataFrom," "),g(3),M(`
          `,e.currentPagination==null?null:e.currentPagination.dataTo,`
        `),g(6),C(e.currentPagination==null?null:e.currentPagination.totalItems),g(14),h(P(13,S,e.isLeftPaginationDisabled())),g(5),h(P(15,S,e.isLeftPaginationDisabled())),g(13),C(e.currentPagination==null?null:e.currentPagination.pageNumber),g(3),C(e.currentPagination==null?null:e.currentPagination.pageCount),g(7),h(P(17,S,e.isRightPaginationDisabled())),g(5),h(P(19,S,e.isRightPaginationDisabled())))},styles:[".custom-pagination[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:10px;font-size:13px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-settings[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:30px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]{display:flex;align-items:center;list-style-type:none}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{display:flex;width:26px;justify-content:center;margin:0}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#b4b3b3;background-color:#b4b3b3}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{padding:0 5px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;width:20px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;margin:0;padding:0 5px;color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]:hover{color:#408cfd}"]})}}return s})();var q=5e3;function E(s,Y){return Math.floor(Math.random()*(Y-s+1)+s)}var et=(()=>{class s{constructor(){this.angularUtilService=b(k),this.columns=[],this.dataset=[],this.hideSubTitle=!1,this.pageSize=50,this.paginationPosition="top"}angularGridReady(n){this.angularGrid=n}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(q)}defineGrid(){this.columns=[{id:"title",name:"Title",field:"id",minWidth:100,sortable:!0,filterable:!0,formatter:(n,r,e)=>`Task ${e}`,params:{useFormatterOuputToFilter:!0}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:120,sortable:!0,customTooltip:{position:"center"},formatter:f.progressBar,type:"number",filterable:!0,filter:{model:p.sliderRange,maxValue:100,operator:"RangeInclusive",options:{hideSliderNumbers:!1,min:0,step:5}}},{id:"start",name:"Start",field:"start",formatter:f.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:p.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:f.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:"date",filterable:!0,filter:{model:p.dateRange}},{id:"duration",field:"duration",name:"Duration",maxWidth:90,type:"number",sortable:!0,filterable:!0,filter:{model:p.input,operator:"RangeExclusive"}},{id:"completed",name:"Completed",field:"completed",minWidth:85,maxWidth:90,formatter:f.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:p.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:"#demo-container",bottomPadding:this.paginationPosition==="top"?-1:38},enableExcelCopyBuffer:!0,enableFiltering:!0,customPaginationComponent:B,enablePagination:!0,pagination:{pageSize:this.pageSize},rowHeight:40}}loadData(n){let r=[];for(let e=0,o=n;e<o;e++){let l=E(0,365),y=E(new Date().getFullYear(),new Date().getFullYear()+1),O=E(0,12),T=E(10,28),v=E(0,100);r.push({id:e,title:"Task "+e,description:e%5?"desc "+e:null,duration:l,percentComplete:v,percentCompleteNumber:v,start:e%4?null:new Date(y,O,T),finish:new Date(y,O,T),completed:v===100})}return r}setPaginationSize(n){this.angularGrid.paginationService?.changeItemPerPage(n)}togglePaginationPosition(){let n=document.querySelector(`#${this.gridOptions.gridContainerId||""}`);this.paginationPosition=this.paginationPosition==="top"?"bottom":"top",this.angularGrid.paginationComponent?.disposeElement(),this.angularGrid.paginationComponent?.renderPagination(n,this.paginationPosition)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275cmp=x({type:s,selectors:[["ng-component"]],features:[N([k])],decls:44,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example42.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["data-text","toggle-pagination-btn",1,"btn","btn-outline-secondary","btn-icon",3,"click"],[1,"mdi","mdi-swap-vertical"],[1,"margin-15px"],["type","text","data-test","page-size-input",1,"input","is-small","is-narrow",2,"width","55px",3,"ngModelChange","ngModel"],["gridId","grid42",3,"onAngularGridCreated","columns","options","dataset"]],template:function(r,e){r&1&&(m(0,"div",0),t(1,`
  `),m(2,"h2"),t(3,`
    Example 42: Custom Pagination
    `),m(4,"span",1),t(5,`
      `),m(6,"a",2),t(7,`
        `),_(8,"span",3),t(9,` code
      `),d(),t(10,`
    `),d(),t(11,`
    `),m(12,"button",4),u("click",function(){return e.toggleSubTitle()}),t(13,`
      `),_(14,"span",5),t(15,`
    `),d(),t(16,`
  `),d(),t(17,`

  `),m(18,"div",6),t(19,`
    You can create a Custom Pagination by passing an Angular Custom Component and it must `),m(20,"code"),t(21,"implements BasePaginationComponent"),d(),t(22,`.
    Any of the pagination controls could be moved anywhere on the page (for example we purposely moved the page size away from the rest of
    the pagination elements).
  `),d(),t(23,`

  `),m(24,"div"),t(25,`
    `),m(26,"button",7),u("click",function(){return e.togglePaginationPosition()}),t(27,`
      `),_(28,"span",8),t(29,`
      `),m(30,"span"),t(31,"Toggle Pagination Position"),d(),t(32,`
    `),d(),t(33,`

    `),m(34,"span",9),t(35,`
      Page Size
      `),m(36,"input",10),L("ngModelChange",function(l){return z(e.pageSize,l)||(e.pageSize=l),l}),u("ngModelChange",function(l){return e.setPaginationSize(l)}),d(),t(37,`
    `),d(),t(38,`
  `),d(),t(39,`

  `),m(40,"angular-slickgrid",11),u("onAngularGridCreated",function(l){return e.angularGridReady(l.detail)}),t(41,`
  `),d(),t(42,`
`),d(),t(43,`
`)),r&2&&(g(36),I("ngModel",e.pageSize),g(4),F("columns",e.columns)("options",e.gridOptions)("dataset",e.dataset))},dependencies:[j,A,R,W,G],encapsulation:2})}}return s})();export{et as Example42Component};

import{$n as pD,G as Kp,In as lD,Pn as kc,U as Jp,V as JI,Y as Lc,_ as ED,a as Ap,jn as jc,lt as Op,m as DD,mn as dv,nt as Mp,on as bp,p as D,pr as tE,sn as cF,sr as rE,tn as _p,xr as vi,xt as Rc,yt as Qp,z as Ir,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,Et as vp,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";import{c as Dn,d as In,u as Ge,y as qt}from"./main-BEH6XCIK.js";var S=s=>({disabled:s});var q=(()=>{class s{constructor(){this.cd=D(cF),this.elm=D(Ir),this._subscriptions=[],this.currentPagination={}}init(n,r,e){this._grid=n,this._paginationService=r,this._pubSubService=e,this.currentPagination=this._paginationService.getFullPagination(),this._subscriptions.push(this._pubSubService.subscribe(`onPaginationRefreshed`,o=>{this.currentPagination.dataFrom=o.dataFrom,this.currentPagination.dataTo=o.dataTo,this.currentPagination.pageCount=o.pageCount,this.currentPagination.pageNumber=o.pageNumber,this.currentPagination.pageSize=o.pageSize,this.currentPagination.pageSizes=o.pageSizes,this.currentPagination.totalItems=o.totalItems,this.cd.markForCheck()}))}dispose(){this._pubSubService.unsubscribeAll(this._subscriptions),this.disposeElement()}disposeElement(){this._paginationElement.remove()}renderPagination(n,r=`top`){this._gridContainerElm=n,this._paginationElement=this.elm.nativeElement,this._paginationElement.id=`pager`,this._paginationElement.className=`pagination-container pager ${this._grid.getUID()}`,this._paginationElement.style.width=`100%`,r===`top`?(this._paginationElement.classList.add(`top`),n.prepend(this._paginationElement)):(this._paginationElement.classList.add(`bottom`),n.appendChild(this._paginationElement))}onFirstPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToFirstPage(n)}onLastPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToLastPage(n)}onNextPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToNextPage(n)}onPreviousPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToPreviousPage(n)}isLeftPaginationDisabled(){return this.currentPagination.pageNumber===1||this.currentPagination.totalItems===0}isRightPaginationDisabled(){return this.currentPagination.pageNumber===this.currentPagination.pageCount||this.currentPagination.totalItems===0}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=WE({type:s,selectors:[[`ng-component`]],decls:74,vars:21,consts:[[1,`custom-pagination`],[1,`custom-pagination-settings`],[1,`custom-pagination-count`],[1,`page-info-from-to`],[`aria-label`,`Page Item From`,`data-test`,`item-from`,1,`item-from`],[`aria-label`,`Page Item To`,`data-test`,`item-to`,1,`item-to`],[1,`page-info-total-items`],[`aria-label`,`Total Items`,`data-test`,`total-items`,1,`total-items`],[1,`text-items`],[1,`custom-pagination-nav`],[`aria-label`,`Page navigation`],[1,`custom-pagination-ul`],[1,`li`,`page-item`,`seek-first`],[`aria-label`,`First Page`,`role`,`button`,1,`pagination-link`,`mdi`,`mdi-page-first`,`icon-seek-first`,`font-22px`,3,`click`],[1,`li`,`page-item`,`seek-prev`],[`aria-label`,`Previous Page`,`role`,`button`,1,`pagination-link`,`icon-seek-prev`,`mdi`,`mdi-chevron-down`,`font-22px`,`mdi-rotate-90`,3,`click`],[1,`page-number`],[1,`text-page`],[`aria-label`,`Page Number`,`data-test`,`page-number-label`,1,`page-number`],[`data-test`,`page-count`,1,`page-count`],[1,`li`,`page-item`,`seek-next`,3,`click`],[`aria-label`,`Next Page`,`role`,`button`,1,`pagination-link`,`icon-seek-next`,`mdi`,`mdi-chevron-down`,`font-22px`,`mdi-rotate-270`],[1,`li`,`page-item`,`seek-end`],[`aria-label`,`Last Page`,`role`,`button`,1,`pagination-link`,`icon-seek-end`,`mdi`,`mdi-page-last`,`font-22px`,3,`click`]],template:function(r,e){r&1&&(kc(0,`div`,0),lD(1,`
  `),kc(2,`span`,1),lD(3,`
    `),kc(4,`span`,2),lD(5,`
      `),kc(6,`span`,3),lD(7,`
        `),kc(8,`span`,4),lD(9),Lc(),lD(10,`-
        `),kc(11,`span`,5),lD(12),Lc(),lD(13,`
        of
      `),Lc(),lD(14,`
      `),kc(15,`span`,6),lD(16,`
        `),kc(17,`span`,7),lD(18),Lc(),lD(19,`
        `),kc(20,`span`,8),lD(21,` items`),Lc(),lD(22,`
      `),Lc(),lD(23,`
    `),Lc(),lD(24,`
  `),Lc(),lD(25,`
  `),kc(26,`div`,9),lD(27,`
    `),kc(28,`nav`,10),lD(29,`
      `),kc(30,`ul`,11),lD(31,`
        `),kc(32,`li`,12),lD(33,`
          `),kc(34,`a`,13),Op(`click`,function(l){return e.onFirstPageClicked(l)}),Lc(),lD(35,`
        `),Lc(),lD(36,`
        `),kc(37,`li`,14),lD(38,`
          `),kc(39,`a`,15),Op(`click`,function(l){return e.onPreviousPageClicked(l)}),Lc(),lD(40,`
        `),Lc(),lD(41,`
      `),Lc(),lD(42,`
    `),Lc(),lD(43,`
    `),kc(44,`div`,16),lD(45,`
      `),kc(46,`span`,17),lD(47,`Page`),Lc(),lD(48,`
      `),kc(49,`span`,18),lD(50),Lc(),lD(51,`
      of
      `),kc(52,`span`,19),lD(53),Lc(),lD(54,`
    `),Lc(),lD(55,`
    `),kc(56,`nav`,10),lD(57,`
      `),kc(58,`ul`,11),lD(59,`
        `),kc(60,`li`,20),Op(`click`,function(l){return e.onNextPageClicked(l)}),lD(61,`
          `),Mp(62,`a`,21),lD(63,`
        `),Lc(),lD(64,`
        `),kc(65,`li`,22),lD(66,`
          `),kc(67,`a`,23),Op(`click`,function(l){return e.onLastPageClicked(l)}),Lc(),lD(68,`
        `),Lc(),lD(69,`
      `),Lc(),lD(70,`
    `),Lc(),lD(71,`
  `),Lc(),lD(72,`
`),Lc(),lD(73,`
`)),r&2&&(dv(9),jc(` `,e.currentPagination?.dataFrom,` `),dv(3),jc(`
          `,e.currentPagination?.dataTo,`
        `),dv(6),Qp(e.currentPagination?.totalItems),dv(14),JI(DD(13,S,e.isLeftPaginationDisabled())),dv(5),JI(DD(15,S,e.isLeftPaginationDisabled())),dv(13),Qp(e.currentPagination?.pageNumber),dv(3),Qp(e.currentPagination?.pageCount),dv(7),JI(DD(17,S,e.isRightPaginationDisabled())),dv(5),JI(DD(19,S,e.isRightPaginationDisabled())))},styles:[`.custom-pagination[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:10px;font-size:13px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-settings[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:30px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]{display:flex;align-items:center;list-style-type:none}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{display:flex;width:26px;justify-content:center;margin:0}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#b4b3b3;background-color:#b4b3b3}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{padding:0 5px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;width:20px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;margin:0;padding:0 5px;color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]:hover{color:#408cfd}`]})}}return s})();var $=5e3;function b(s,H){return Math.floor(Math.random()*(H-s+1)+s)}var at=(()=>{class s{constructor(){this.angularUtilService=D(vp),this.columns=[],this.dataset=[],this.hideSubTitle=!1,this.pageSize=50,this.paginationPosition=`top`}angularGridReady(n){this.angularGrid=n}ngOnInit(){this.defineGrid(),this.dataset=this.loadData($)}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`id`,minWidth:100,sortable:!0,filterable:!0,formatter:(n,r,e)=>`Task ${e}`,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:sI.progressBar,type:`number`,filterable:!0,filter:{model:uu.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,formatter:sI.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:uu.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:sI.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:uu.dateRange}},{id:`duration`,field:`duration`,name:`Duration`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:uu.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,minWidth:85,maxWidth:90,formatter:sI.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:uu.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,bottomPadding:this.paginationPosition===`top`?-1:38},enableExcelCopyBuffer:!0,enableFiltering:!0,customPaginationComponent:q,enablePagination:!0,pagination:{pageSize:this.pageSize},rowHeight:40}}loadData(n){let r=[];for(let e=0,o=n;e<o;e++){let l=b(0,365),y=b(new Date().getFullYear(),new Date().getFullYear()+1),O=b(0,12),T=b(10,28),v=b(0,100);r.push({id:e,title:`Task `+e,description:e%5?`desc `+e:null,duration:l,percentComplete:v,percentCompleteNumber:v,start:e%4?null:new Date(y,O,T),finish:new Date(y,O,T),completed:v===100})}return r}setPaginationSize(n){this.angularGrid.paginationService?.changeItemPerPage(n)}togglePaginationPosition(){let n=document.querySelector(`#${this.gridOptions.gridContainerId||``}`);this.paginationPosition=this.paginationPosition===`top`?`bottom`:`top`,this.angularGrid.paginationComponent?.disposeElement(),this.angularGrid.paginationComponent?.renderPagination(n,this.paginationPosition)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=WE({type:s,selectors:[[`ng-component`]],features:[ED([vp])],decls:44,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example42.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`data-text`,`toggle-pagination-btn`,1,`btn`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-swap-vertical`],[1,`margin-15px`],[`type`,`text`,`data-test`,`page-size-input`,1,`input`,`is-small`,`is-narrow`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`gridId`,`grid42`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,e){r&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 42: Custom Pagination
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return e.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    You can create a Custom Pagination by passing an Angular Custom Component and it must `),vi(20,`code`),lD(21,`implements BasePaginationComponent`),Rc(),lD(22,`.
    Any of the pagination controls could be moved anywhere on the page (for example we purposely moved the page size away from the rest of
    the pagination elements).
  `),Rc(),lD(23,`

  `),vi(24,`div`),lD(25,`
    `),vi(26,`button`,7),Ap(`click`,function(){return e.togglePaginationPosition()}),lD(27,`
      `),_p(28,`span`,8),lD(29,`
      `),vi(30,`span`),lD(31,`Toggle Pagination Position`),Rc(),lD(32,`
    `),Rc(),lD(33,`

    `),vi(34,`span`,9),lD(35,`
      Page Size
      `),vi(36,`input`,10),tE(),Jp(`ngModelChange`,function(l){return pD(e.pageSize,l)||(e.pageSize=l),l}),Ap(`ngModelChange`,function(l){return e.setPaginationSize(l)}),Rc(),lD(37,`
    `),Rc(),lD(38,`
  `),Rc(),lD(39,`

  `),vi(40,`angular-slickgrid`,11),Ap(`onAngularGridCreated`,function(l){return e.angularGridReady(l.detail)}),lD(41,`
  `),Rc(),lD(42,`
`),Rc(),lD(43,`
`)),r&2&&(dv(36),Kp(`ngModel`,e.pageSize),rE(),dv(4),bp(`columns`,e.columns)(`options`,e.gridOptions)(`dataset`,e.dataset))},dependencies:[D1,In,Ge,Dn,qt],encapsulation:2})}}return s})();export{at as Example42Component};
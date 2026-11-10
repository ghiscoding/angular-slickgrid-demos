import{h as Wt,m as Sn,s as An,y as ke}from"./main-KCATS47T.js";import{C as Hp,Ct as ku,V as R$,rt as ZR}from"./chunk-Lo0QQjTd.js";import{K as Jp,Mt as TD,P as Hc,R as ID,T as Fc,Tn as hD,X as Lc,Y as Kp,Yn as oE,_ as Dr,_t as Pc,dr as uD,en as _p,f as D,in as bp,it as Mp,jr as yF,k as GE,o as Ap,pt as Op,qn as nE,qt as XI,wt as Qp,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var S=s=>({disabled:s});var q=(()=>{class s{constructor(){this.cd=D(yF),this.elm=D(Dr),this._subscriptions=[],this.currentPagination={}}init(n,r,e){this._grid=n,this._paginationService=r,this._pubSubService=e,this.currentPagination=this._paginationService.getFullPagination(),this._subscriptions.push(this._pubSubService.subscribe(`onPaginationRefreshed`,o=>{this.currentPagination.dataFrom=o.dataFrom,this.currentPagination.dataTo=o.dataTo,this.currentPagination.pageCount=o.pageCount,this.currentPagination.pageNumber=o.pageNumber,this.currentPagination.pageSize=o.pageSize,this.currentPagination.pageSizes=o.pageSizes,this.currentPagination.totalItems=o.totalItems,this.cd.markForCheck()}))}dispose(){this._pubSubService.unsubscribeAll(this._subscriptions),this.disposeElement()}disposeElement(){this._paginationElement.remove()}renderPagination(n,r=`top`){this._gridContainerElm=n,this._paginationElement=this.elm.nativeElement,this._paginationElement.id=`pager`,this._paginationElement.className=`pagination-container pager ${this._grid.getUID()}`,this._paginationElement.style.width=`100%`,r===`top`?(this._paginationElement.classList.add(`top`),n.prepend(this._paginationElement)):(this._paginationElement.classList.add(`bottom`),n.appendChild(this._paginationElement))}onFirstPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToFirstPage(n)}onLastPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToLastPage(n)}onNextPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToNextPage(n)}onPreviousPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToPreviousPage(n)}isLeftPaginationDisabled(){return this.currentPagination.pageNumber===1||this.currentPagination.totalItems===0}isRightPaginationDisabled(){return this.currentPagination.pageNumber===this.currentPagination.pageCount||this.currentPagination.totalItems===0}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=GE({type:s,selectors:[[`ng-component`]],decls:74,vars:21,consts:[[1,`custom-pagination`],[1,`custom-pagination-settings`],[1,`custom-pagination-count`],[1,`page-info-from-to`],[`aria-label`,`Page Item From`,`data-test`,`item-from`,1,`item-from`],[`aria-label`,`Page Item To`,`data-test`,`item-to`,1,`item-to`],[1,`page-info-total-items`],[`aria-label`,`Total Items`,`data-test`,`total-items`,1,`total-items`],[1,`text-items`],[1,`custom-pagination-nav`],[`aria-label`,`Page navigation`],[1,`custom-pagination-ul`],[1,`li`,`page-item`,`seek-first`],[`aria-label`,`First Page`,`role`,`button`,1,`pagination-link`,`mdi`,`mdi-page-first`,`icon-seek-first`,`font-22px`,3,`click`],[1,`li`,`page-item`,`seek-prev`],[`aria-label`,`Previous Page`,`role`,`button`,1,`pagination-link`,`icon-seek-prev`,`mdi`,`mdi-chevron-down`,`font-22px`,`mdi-rotate-90`,3,`click`],[1,`page-number`],[1,`text-page`],[`aria-label`,`Page Number`,`data-test`,`page-number-label`,1,`page-number`],[`data-test`,`page-count`,1,`page-count`],[1,`li`,`page-item`,`seek-next`,3,`click`],[`aria-label`,`Next Page`,`role`,`button`,1,`pagination-link`,`icon-seek-next`,`mdi`,`mdi-chevron-down`,`font-22px`,`mdi-rotate-270`],[1,`li`,`page-item`,`seek-end`],[`aria-label`,`Last Page`,`role`,`button`,1,`pagination-link`,`icon-seek-end`,`mdi`,`mdi-page-last`,`font-22px`,3,`click`]],template:function(r,e){r&1&&(Pc(0,`div`,0),uD(1,`
  `),Pc(2,`span`,1),uD(3,`
    `),Pc(4,`span`,2),uD(5,`
      `),Pc(6,`span`,3),uD(7,`
        `),Pc(8,`span`,4),uD(9),Fc(),uD(10,`-
        `),Pc(11,`span`,5),uD(12),Fc(),uD(13,`
        of
      `),Fc(),uD(14,`
      `),Pc(15,`span`,6),uD(16,`
        `),Pc(17,`span`,7),uD(18),Fc(),uD(19,`
        `),Pc(20,`span`,8),uD(21,` items`),Fc(),uD(22,`
      `),Fc(),uD(23,`
    `),Fc(),uD(24,`
  `),Fc(),uD(25,`
  `),Pc(26,`div`,9),uD(27,`
    `),Pc(28,`nav`,10),uD(29,`
      `),Pc(30,`ul`,11),uD(31,`
        `),Pc(32,`li`,12),uD(33,`
          `),Pc(34,`a`,13),Op(`click`,function(l){return e.onFirstPageClicked(l)}),Fc(),uD(35,`
        `),Fc(),uD(36,`
        `),Pc(37,`li`,14),uD(38,`
          `),Pc(39,`a`,15),Op(`click`,function(l){return e.onPreviousPageClicked(l)}),Fc(),uD(40,`
        `),Fc(),uD(41,`
      `),Fc(),uD(42,`
    `),Fc(),uD(43,`
    `),Pc(44,`div`,16),uD(45,`
      `),Pc(46,`span`,17),uD(47,`Page`),Fc(),uD(48,`
      `),Pc(49,`span`,18),uD(50),Fc(),uD(51,`
      of
      `),Pc(52,`span`,19),uD(53),Fc(),uD(54,`
    `),Fc(),uD(55,`
    `),Pc(56,`nav`,10),uD(57,`
      `),Pc(58,`ul`,11),uD(59,`
        `),Pc(60,`li`,20),Op(`click`,function(l){return e.onNextPageClicked(l)}),uD(61,`
          `),Mp(62,`a`,21),uD(63,`
        `),Fc(),uD(64,`
        `),Pc(65,`li`,22),uD(66,`
          `),Pc(67,`a`,23),Op(`click`,function(l){return e.onLastPageClicked(l)}),Fc(),uD(68,`
        `),Fc(),uD(69,`
      `),Fc(),uD(70,`
    `),Fc(),uD(71,`
  `),Fc(),uD(72,`
`),Fc(),uD(73,`
`)),r&2&&(fv(9),Hc(` `,e.currentPagination?.dataFrom,` `),fv(3),Hc(`
          `,e.currentPagination?.dataTo,`
        `),fv(6),Qp(e.currentPagination?.totalItems),fv(14),XI(TD(13,S,e.isLeftPaginationDisabled())),fv(5),XI(TD(15,S,e.isLeftPaginationDisabled())),fv(13),Qp(e.currentPagination?.pageNumber),fv(3),Qp(e.currentPagination?.pageCount),fv(7),XI(TD(17,S,e.isRightPaginationDisabled())),fv(5),XI(TD(19,S,e.isRightPaginationDisabled())))},styles:[`.custom-pagination[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:10px;font-size:13px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-settings[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:30px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]{display:flex;align-items:center;list-style-type:none}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{display:flex;width:26px;justify-content:center;margin:0}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#b4b3b3;background-color:#b4b3b3}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{padding:0 5px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;width:20px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;margin:0;padding:0 5px;color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]:hover{color:#408cfd}`]})}}return s})();var $=5e3;function b(s,H){return Math.floor(Math.random()*(H-s+1)+s)}var at=(()=>{class s{constructor(){this.angularUtilService=D(Hp),this.columns=[],this.dataset=[],this.hideSubTitle=!1,this.pageSize=50,this.paginationPosition=`top`}angularGridReady(n){this.angularGrid=n}ngOnInit(){this.defineGrid(),this.dataset=this.loadData($)}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`id`,minWidth:100,sortable:!0,filterable:!0,formatter:(n,r,e)=>`Task ${e}`,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:ZR.progressBar,type:`number`,filterable:!0,filter:{model:ku.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,formatter:ZR.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ku.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:ZR.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ku.dateRange}},{id:`duration`,field:`duration`,name:`Duration`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:ku.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,minWidth:85,maxWidth:90,formatter:ZR.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ku.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,bottomPadding:this.paginationPosition===`top`?-1:38},enableExcelCopyBuffer:!0,enableFiltering:!0,customPaginationComponent:q,enablePagination:!0,pagination:{pageSize:this.pageSize},rowHeight:40}}loadData(n){let r=[];for(let e=0,o=n;e<o;e++){let l=b(0,365),y=b((/* @__PURE__ */ new Date()).getFullYear(),(/* @__PURE__ */ new Date()).getFullYear()+1),O=b(0,12),T=b(10,28),v=b(0,100);r.push({id:e,title:`Task `+e,description:e%5?`desc `+e:null,duration:l,percentComplete:v,percentCompleteNumber:v,start:e%4?null:new Date(y,O,T),finish:new Date(y,O,T),completed:v===100})}return r}setPaginationSize(n){this.angularGrid.paginationService?.changeItemPerPage(n)}togglePaginationPosition(){let n=document.querySelector(`#${this.gridOptions.gridContainerId||``}`);this.paginationPosition=this.paginationPosition===`top`?`bottom`:`top`,this.angularGrid.paginationComponent?.disposeElement(),this.angularGrid.paginationComponent?.renderPagination(n,this.paginationPosition)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=GE({type:s,selectors:[[`ng-component`]],features:[ID([Hp])],decls:44,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example42.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`data-text`,`toggle-pagination-btn`,1,`btn`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-swap-vertical`],[1,`margin-15px`],[`type`,`text`,`data-test`,`page-size-input`,1,`input`,`is-small`,`is-narrow`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`gridId`,`grid42`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,e){r&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 42: Custom Pagination
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return e.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    You can create a Custom Pagination by passing an Angular Custom Component and it must `),vi(20,`code`),uD(21,`implements BasePaginationComponent`),Lc(),uD(22,`.
    Any of the pagination controls could be moved anywhere on the page (for example we purposely moved the page size away from the rest of
    the pagination elements).
  `),Lc(),uD(23,`

  `),vi(24,`div`),uD(25,`
    `),vi(26,`button`,7),Ap(`click`,function(){return e.togglePaginationPosition()}),uD(27,`
      `),_p(28,`span`,8),uD(29,`
      `),vi(30,`span`),uD(31,`Toggle Pagination Position`),Lc(),uD(32,`
    `),Lc(),uD(33,`

    `),vi(34,`span`,9),uD(35,`
      Page Size
      `),vi(36,`input`,10),nE(),Jp(`ngModelChange`,function(l){return hD(e.pageSize,l)||(e.pageSize=l),l}),Ap(`ngModelChange`,function(l){return e.setPaginationSize(l)}),Lc(),uD(37,`
    `),Lc(),uD(38,`
  `),Lc(),uD(39,`

  `),vi(40,`angular-slickgrid`,11),Ap(`onAngularGridCreated`,function(l){return e.angularGridReady(l.detail)}),uD(41,`
  `),Lc(),uD(42,`
`),Lc(),uD(43,`
`)),r&2&&(fv(36),Kp(`ngModel`,e.pageSize),oE(),fv(4),bp(`columns`,e.columns)(`options`,e.gridOptions)(`dataset`,e.dataset))},dependencies:[R$,Sn,ke,An,Wt],encapsulation:2})}}return s})();export{at as Example42Component};
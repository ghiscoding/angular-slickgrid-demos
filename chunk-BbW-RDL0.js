import{Ct as T,Dt as UE,En as iD,Er as yr,H as Jy,Kn as mp,Nt as Vp,Rn as lD,Sr as wp,Tr as yp,Tt as Tp,Wn as mi,dt as Pc,hr as vp,ht as QI,kt as Up,ln as cy,mr as vD,o as Ac,pn as eE,r as $p,st as Oc,yn as gD,yt as Rc}from"./chunk-06EGdSfW.js";import{H as _W,gt as om,mt as nk,st as ip}from"./chunk-CAMk6vEo.js";import{_ as Vn,d as Fn,g as Te,s as $t}from"./main-T6P2BZBW.js";var S=s=>({disabled:s});var U=(()=>{class s{constructor(){this.elm=T(yr),this._subscriptions=[],this.currentPagination={}}init(n,r,e){this._grid=n,this._paginationService=r,this._pubSubService=e,this.currentPagination=this._paginationService.getFullPagination(),this._subscriptions.push(this._pubSubService.subscribe(`onPaginationRefreshed`,o=>{this.currentPagination.dataFrom=o.dataFrom,this.currentPagination.dataTo=o.dataTo,this.currentPagination.pageCount=o.pageCount,this.currentPagination.pageNumber=o.pageNumber,this.currentPagination.pageSize=o.pageSize,this.currentPagination.pageSizes=o.pageSizes,this.currentPagination.totalItems=o.totalItems}))}dispose(){this._pubSubService.unsubscribeAll(this._subscriptions),this.disposeElement()}disposeElement(){this._paginationElement.remove()}renderPagination(n,r=`top`){this._gridContainerElm=n,this._paginationElement=this.elm.nativeElement,this._paginationElement.id=`pager`,this._paginationElement.className=`pagination-container pager ${this._grid.getUID()}`,this._paginationElement.style.width=`100%`,r===`top`?(this._paginationElement.classList.add(`top`),n.prepend(this._paginationElement)):(this._paginationElement.classList.add(`bottom`),n.appendChild(this._paginationElement))}onFirstPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToFirstPage(n)}onLastPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToLastPage(n)}onNextPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToNextPage(n)}onPreviousPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToPreviousPage(n)}isLeftPaginationDisabled(){return this.currentPagination.pageNumber===1||this.currentPagination.totalItems===0}isRightPaginationDisabled(){return this.currentPagination.pageNumber===this.currentPagination.pageCount||this.currentPagination.totalItems===0}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=UE({type:s,selectors:[[`ng-component`]],decls:74,vars:21,consts:[[1,`custom-pagination`],[1,`custom-pagination-settings`],[1,`custom-pagination-count`],[1,`page-info-from-to`],[`aria-label`,`Page Item From`,`data-test`,`item-from`,1,`item-from`],[`aria-label`,`Page Item To`,`data-test`,`item-to`,1,`item-to`],[1,`page-info-total-items`],[`aria-label`,`Total Items`,`data-test`,`total-items`,1,`total-items`],[1,`text-items`],[1,`custom-pagination-nav`],[`aria-label`,`Page navigation`],[1,`custom-pagination-ul`],[1,`li`,`page-item`,`seek-first`],[`aria-label`,`First Page`,`role`,`button`,1,`pagination-link`,`mdi`,`mdi-page-first`,`icon-seek-first`,`font-22px`,3,`click`],[1,`li`,`page-item`,`seek-prev`],[`aria-label`,`Previous Page`,`role`,`button`,1,`pagination-link`,`icon-seek-prev`,`mdi`,`mdi-chevron-down`,`font-22px`,`mdi-rotate-90`,3,`click`],[1,`page-number`],[1,`text-page`],[`aria-label`,`Page Number`,`data-test`,`page-number-label`,1,`page-number`],[`data-test`,`page-count`,1,`page-count`],[1,`li`,`page-item`,`seek-next`,3,`click`],[`aria-label`,`Next Page`,`role`,`button`,1,`pagination-link`,`icon-seek-next`,`mdi`,`mdi-chevron-down`,`font-22px`,`mdi-rotate-270`],[1,`li`,`page-item`,`seek-end`],[`aria-label`,`Last Page`,`role`,`button`,1,`pagination-link`,`icon-seek-end`,`mdi`,`mdi-page-last`,`font-22px`,3,`click`]],template:function(r,e){r&1&&(Oc(0,`div`,0),iD(1,`
  `),Oc(2,`span`,1),iD(3,`
    `),Oc(4,`span`,2),iD(5,`
      `),Oc(6,`span`,3),iD(7,`
        `),Oc(8,`span`,4),iD(9),Rc(),iD(10,`-
        `),Oc(11,`span`,5),iD(12),Rc(),iD(13,`
        of
      `),Rc(),iD(14,`
      `),Oc(15,`span`,6),iD(16,`
        `),Oc(17,`span`,7),iD(18),Rc(),iD(19,`
        `),Oc(20,`span`,8),iD(21,` items`),Rc(),iD(22,`
      `),Rc(),iD(23,`
    `),Rc(),iD(24,`
  `),Rc(),iD(25,`
  `),Oc(26,`div`,9),iD(27,`
    `),Oc(28,`nav`,10),iD(29,`
      `),Oc(30,`ul`,11),iD(31,`
        `),Oc(32,`li`,12),iD(33,`
          `),Oc(34,`a`,13),wp(`click`,function(l){return e.onFirstPageClicked(l)}),Rc(),iD(35,`
        `),Rc(),iD(36,`
        `),Oc(37,`li`,14),iD(38,`
          `),Oc(39,`a`,15),wp(`click`,function(l){return e.onPreviousPageClicked(l)}),Rc(),iD(40,`
        `),Rc(),iD(41,`
      `),Rc(),iD(42,`
    `),Rc(),iD(43,`
    `),Oc(44,`div`,16),iD(45,`
      `),Oc(46,`span`,17),iD(47,`Page`),Rc(),iD(48,`
      `),Oc(49,`span`,18),iD(50),Rc(),iD(51,`
      of
      `),Oc(52,`span`,19),iD(53),Rc(),iD(54,`
    `),Rc(),iD(55,`
    `),Oc(56,`nav`,10),iD(57,`
      `),Oc(58,`ul`,11),iD(59,`
        `),Oc(60,`li`,20),wp(`click`,function(l){return e.onNextPageClicked(l)}),iD(61,`
          `),yp(62,`a`,21),iD(63,`
        `),Rc(),iD(64,`
        `),Oc(65,`li`,22),iD(66,`
          `),Oc(67,`a`,23),wp(`click`,function(l){return e.onLastPageClicked(l)}),Rc(),iD(68,`
        `),Rc(),iD(69,`
      `),Rc(),iD(70,`
    `),Rc(),iD(71,`
  `),Rc(),iD(72,`
`),Rc(),iD(73,`
`)),r&2&&(cy(9),Pc(` `,e.currentPagination?.dataFrom,` `),cy(3),Pc(`
          `,e.currentPagination?.dataTo,`
        `),cy(6),Vp(e.currentPagination?.totalItems),cy(14),QI(vD(13,S,e.isLeftPaginationDisabled())),cy(5),QI(vD(15,S,e.isLeftPaginationDisabled())),cy(13),Vp(e.currentPagination?.pageNumber),cy(3),Vp(e.currentPagination?.pageCount),cy(7),QI(vD(17,S,e.isRightPaginationDisabled())),cy(5),QI(vD(19,S,e.isRightPaginationDisabled())))},styles:[`.custom-pagination[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:10px;font-size:13px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-settings[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:30px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]{display:flex;align-items:center;list-style-type:none}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{display:flex;width:26px;justify-content:center;margin:0}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#b4b3b3;background-color:#b4b3b3}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{padding:0 5px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;width:20px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;margin:0;padding:0 5px;color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]:hover{color:#408cfd}`]})}}return s})();var V=5e3;function E(s,q){return Math.floor(Math.random()*(q-s+1)+s)}var it=(()=>{class s{constructor(){this.angularUtilService=T(om),this.columns=[],this.dataset=[],this.hideSubTitle=!1,this.pageSize=50,this.paginationPosition=`top`}angularGridReady(n){this.angularGrid=n}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(V)}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`id`,minWidth:100,sortable:!0,filterable:!0,formatter:(n,r,e)=>`Task ${e}`,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:nk.progressBar,type:`number`,filterable:!0,filter:{model:ip.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ip.dateRange}},{id:`duration`,field:`duration`,name:`Duration`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:ip.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,minWidth:85,maxWidth:90,formatter:nk.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,bottomPadding:this.paginationPosition===`top`?-1:38},enableExcelCopyBuffer:!0,enableFiltering:!0,customPaginationComponent:U,enablePagination:!0,pagination:{pageSize:this.pageSize},rowHeight:40}}loadData(n){let r=[];for(let e=0,o=n;e<o;e++){let l=E(0,365),y=E(new Date().getFullYear(),new Date().getFullYear()+1),O=E(0,12),T=E(10,28),v=E(0,100);r.push({id:e,title:`Task `+e,description:e%5?`desc `+e:null,duration:l,percentComplete:v,percentCompleteNumber:v,start:e%4?null:new Date(y,O,T),finish:new Date(y,O,T),completed:v===100})}return r}setPaginationSize(n){this.angularGrid.paginationService?.changeItemPerPage(n)}togglePaginationPosition(){let n=document.querySelector(`#${this.gridOptions.gridContainerId||``}`);this.paginationPosition=this.paginationPosition===`top`?`bottom`:`top`,this.angularGrid.paginationComponent?.disposeElement(),this.angularGrid.paginationComponent?.renderPagination(n,this.paginationPosition)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=UE({type:s,selectors:[[`ng-component`]],features:[gD([om])],decls:44,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example42.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`data-text`,`toggle-pagination-btn`,1,`btn`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-swap-vertical`],[1,`margin-15px`],[`type`,`text`,`data-test`,`page-size-input`,1,`input`,`is-small`,`is-narrow`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`gridId`,`grid42`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,e){r&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 42: Custom Pagination
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return e.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`div`,6),iD(19,`
    You can create a Custom Pagination by passing an Angular Custom Component and it must `),mi(20,`code`),iD(21,`implements BasePaginationComponent`),Ac(),iD(22,`.
    Any of the pagination controls could be moved anywhere on the page (for example we purposely moved the page size away from the rest of
    the pagination elements).
  `),Ac(),iD(23,`

  `),mi(24,`div`),iD(25,`
    `),mi(26,`button`,7),Tp(`click`,function(){return e.togglePaginationPosition()}),iD(27,`
      `),vp(28,`span`,8),iD(29,`
      `),mi(30,`span`),iD(31,`Toggle Pagination Position`),Ac(),iD(32,`
    `),Ac(),iD(33,`

    `),mi(34,`span`,9),iD(35,`
      Page Size
      `),mi(36,`input`,10),$p(`ngModelChange`,function(l){return lD(e.pageSize,l)||(e.pageSize=l),l}),Tp(`ngModelChange`,function(l){return e.setPaginationSize(l)}),Ac(),Jy(),iD(37,`
    `),Ac(),iD(38,`
  `),Ac(),iD(39,`

  `),mi(40,`angular-slickgrid`,11),Tp(`onAngularGridCreated`,function(l){return e.angularGridReady(l.detail)}),iD(41,`
  `),Ac(),iD(42,`
`),Ac(),iD(43,`
`)),r&2&&(cy(36),Up(`ngModel`,e.pageSize),eE(),cy(4),mp(`columns`,e.columns)(`options`,e.gridOptions)(`dataset`,e.dataset))},dependencies:[_W,Fn,Te,Vn,$t],encapsulation:2})}}return s})();export{it as Example42Component};
import{An as kc,En as jc,F as Ip,Fn as mD,I as Ir,Jt as _p,Lt as Wp,O as Gp,Ot as Up,Pn as ly,W as Lc,Wt as ZI,_ as Dp,b as Ep,br as yD,ir as tE,or as uD,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,xt as T,zt as Xy}from"./chunk-Rd4ToC_L.js";import{W as _W,_t as om,ct as ip,ht as nk}from"./chunk-DLuyVhQJ.js";import{_ as Vn,d as Fn,g as Te,s as $t}from"./main-CCTR2RMO.js";var S=s=>({disabled:s});var U=(()=>{class s{constructor(){this.elm=T(Ir),this._subscriptions=[],this.currentPagination={}}init(n,r,e){this._grid=n,this._paginationService=r,this._pubSubService=e,this.currentPagination=this._paginationService.getFullPagination(),this._subscriptions.push(this._pubSubService.subscribe(`onPaginationRefreshed`,o=>{this.currentPagination.dataFrom=o.dataFrom,this.currentPagination.dataTo=o.dataTo,this.currentPagination.pageCount=o.pageCount,this.currentPagination.pageNumber=o.pageNumber,this.currentPagination.pageSize=o.pageSize,this.currentPagination.pageSizes=o.pageSizes,this.currentPagination.totalItems=o.totalItems}))}dispose(){this._pubSubService.unsubscribeAll(this._subscriptions),this.disposeElement()}disposeElement(){this._paginationElement.remove()}renderPagination(n,r=`top`){this._gridContainerElm=n,this._paginationElement=this.elm.nativeElement,this._paginationElement.id=`pager`,this._paginationElement.className=`pagination-container pager ${this._grid.getUID()}`,this._paginationElement.style.width=`100%`,r===`top`?(this._paginationElement.classList.add(`top`),n.prepend(this._paginationElement)):(this._paginationElement.classList.add(`bottom`),n.appendChild(this._paginationElement))}onFirstPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToFirstPage(n)}onLastPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToLastPage(n)}onNextPageClicked(n){this.isRightPaginationDisabled()||this._paginationService.goToNextPage(n)}onPreviousPageClicked(n){this.isLeftPaginationDisabled()||this._paginationService.goToPreviousPage(n)}isLeftPaginationDisabled(){return this.currentPagination.pageNumber===1||this.currentPagination.totalItems===0}isRightPaginationDisabled(){return this.currentPagination.pageNumber===this.currentPagination.pageCount||this.currentPagination.totalItems===0}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=$E({type:s,selectors:[[`ng-component`]],decls:74,vars:21,consts:[[1,`custom-pagination`],[1,`custom-pagination-settings`],[1,`custom-pagination-count`],[1,`page-info-from-to`],[`aria-label`,`Page Item From`,`data-test`,`item-from`,1,`item-from`],[`aria-label`,`Page Item To`,`data-test`,`item-to`,1,`item-to`],[1,`page-info-total-items`],[`aria-label`,`Total Items`,`data-test`,`total-items`,1,`total-items`],[1,`text-items`],[1,`custom-pagination-nav`],[`aria-label`,`Page navigation`],[1,`custom-pagination-ul`],[1,`li`,`page-item`,`seek-first`],[`aria-label`,`First Page`,`role`,`button`,1,`pagination-link`,`mdi`,`mdi-page-first`,`icon-seek-first`,`font-22px`,3,`click`],[1,`li`,`page-item`,`seek-prev`],[`aria-label`,`Previous Page`,`role`,`button`,1,`pagination-link`,`icon-seek-prev`,`mdi`,`mdi-chevron-down`,`font-22px`,`mdi-rotate-90`,3,`click`],[1,`page-number`],[1,`text-page`],[`aria-label`,`Page Number`,`data-test`,`page-number-label`,1,`page-number`],[`data-test`,`page-count`,1,`page-count`],[1,`li`,`page-item`,`seek-next`,3,`click`],[`aria-label`,`Next Page`,`role`,`button`,1,`pagination-link`,`icon-seek-next`,`mdi`,`mdi-chevron-down`,`font-22px`,`mdi-rotate-270`],[1,`li`,`page-item`,`seek-end`],[`aria-label`,`Last Page`,`role`,`button`,1,`pagination-link`,`icon-seek-end`,`mdi`,`mdi-page-last`,`font-22px`,3,`click`]],template:function(r,e){r&1&&(kc(0,`div`,0),sD(1,`
  `),kc(2,`span`,1),sD(3,`
    `),kc(4,`span`,2),sD(5,`
      `),kc(6,`span`,3),sD(7,`
        `),kc(8,`span`,4),sD(9),Lc(),sD(10,`-
        `),kc(11,`span`,5),sD(12),Lc(),sD(13,`
        of
      `),Lc(),sD(14,`
      `),kc(15,`span`,6),sD(16,`
        `),kc(17,`span`,7),sD(18),Lc(),sD(19,`
        `),kc(20,`span`,8),sD(21,` items`),Lc(),sD(22,`
      `),Lc(),sD(23,`
    `),Lc(),sD(24,`
  `),Lc(),sD(25,`
  `),kc(26,`div`,9),sD(27,`
    `),kc(28,`nav`,10),sD(29,`
      `),kc(30,`ul`,11),sD(31,`
        `),kc(32,`li`,12),sD(33,`
          `),kc(34,`a`,13),_p(`click`,function(l){return e.onFirstPageClicked(l)}),Lc(),sD(35,`
        `),Lc(),sD(36,`
        `),kc(37,`li`,14),sD(38,`
          `),kc(39,`a`,15),_p(`click`,function(l){return e.onPreviousPageClicked(l)}),Lc(),sD(40,`
        `),Lc(),sD(41,`
      `),Lc(),sD(42,`
    `),Lc(),sD(43,`
    `),kc(44,`div`,16),sD(45,`
      `),kc(46,`span`,17),sD(47,`Page`),Lc(),sD(48,`
      `),kc(49,`span`,18),sD(50),Lc(),sD(51,`
      of
      `),kc(52,`span`,19),sD(53),Lc(),sD(54,`
    `),Lc(),sD(55,`
    `),kc(56,`nav`,10),sD(57,`
      `),kc(58,`ul`,11),sD(59,`
        `),kc(60,`li`,20),_p(`click`,function(l){return e.onNextPageClicked(l)}),sD(61,`
          `),Dp(62,`a`,21),sD(63,`
        `),Lc(),sD(64,`
        `),kc(65,`li`,22),sD(66,`
          `),kc(67,`a`,23),_p(`click`,function(l){return e.onLastPageClicked(l)}),Lc(),sD(68,`
        `),Lc(),sD(69,`
      `),Lc(),sD(70,`
    `),Lc(),sD(71,`
  `),Lc(),sD(72,`
`),Lc(),sD(73,`
`)),r&2&&(ly(9),jc(` `,e.currentPagination?.dataFrom,` `),ly(3),jc(`
          `,e.currentPagination?.dataTo,`
        `),ly(6),Up(e.currentPagination?.totalItems),ly(14),ZI(yD(13,S,e.isLeftPaginationDisabled())),ly(5),ZI(yD(15,S,e.isLeftPaginationDisabled())),ly(13),Up(e.currentPagination?.pageNumber),ly(3),Up(e.currentPagination?.pageCount),ly(7),ZI(yD(17,S,e.isRightPaginationDisabled())),ly(5),ZI(yD(19,S,e.isRightPaginationDisabled())))},styles:[`.custom-pagination[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:10px;font-size:13px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-settings[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:30px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]{display:flex;align-items:center;list-style-type:none}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{display:flex;width:26px;justify-content:center;margin:0}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#b4b3b3;background-color:#b4b3b3}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{padding:0 5px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;width:20px}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;margin:0;padding:0 5px;color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]{color:#0d6efd}.custom-pagination[_ngcontent-%COMP%]   .custom-pagination-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul.custom-pagination-ul[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%]:hover{color:#408cfd}`]})}}return s})();var V=5e3;function E(s,q){return Math.floor(Math.random()*(q-s+1)+s)}var it=(()=>{class s{constructor(){this.angularUtilService=T(om),this.columns=[],this.dataset=[],this.hideSubTitle=!1,this.pageSize=50,this.paginationPosition=`top`}angularGridReady(n){this.angularGrid=n}ngOnInit(){this.defineGrid(),this.dataset=this.loadData(V)}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`id`,minWidth:100,sortable:!0,filterable:!0,formatter:(n,r,e)=>`Task ${e}`,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:nk.progressBar,type:`number`,filterable:!0,filter:{model:ip.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ip.dateRange}},{id:`duration`,field:`duration`,name:`Duration`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:ip.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,minWidth:85,maxWidth:90,formatter:nk.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,bottomPadding:this.paginationPosition===`top`?-1:38},enableExcelCopyBuffer:!0,enableFiltering:!0,customPaginationComponent:U,enablePagination:!0,pagination:{pageSize:this.pageSize},rowHeight:40}}loadData(n){let r=[];for(let e=0,o=n;e<o;e++){let l=E(0,365),y=E(new Date().getFullYear(),new Date().getFullYear()+1),O=E(0,12),T=E(10,28),v=E(0,100);r.push({id:e,title:`Task `+e,description:e%5?`desc `+e:null,duration:l,percentComplete:v,percentCompleteNumber:v,start:e%4?null:new Date(y,O,T),finish:new Date(y,O,T),completed:v===100})}return r}setPaginationSize(n){this.angularGrid.paginationService?.changeItemPerPage(n)}togglePaginationPosition(){let n=document.querySelector(`#${this.gridOptions.gridContainerId||``}`);this.paginationPosition=this.paginationPosition===`top`?`bottom`:`top`,this.angularGrid.paginationComponent?.disposeElement(),this.angularGrid.paginationComponent?.renderPagination(n,this.paginationPosition)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||s)}}static{this.ɵcmp=$E({type:s,selectors:[[`ng-component`]],features:[mD([om])],decls:44,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example42.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`data-text`,`toggle-pagination-btn`,1,`btn`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-swap-vertical`],[1,`margin-15px`],[`type`,`text`,`data-test`,`page-size-input`,1,`input`,`is-small`,`is-narrow`,2,`width`,`55px`,3,`ngModelChange`,`ngModel`],[`gridId`,`grid42`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,e){r&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 42: Custom Pagination
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return e.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    You can create a Custom Pagination by passing an Angular Custom Component and it must `),yi(20,`code`),sD(21,`implements BasePaginationComponent`),Rc(),sD(22,`.
    Any of the pagination controls could be moved anywhere on the page (for example we purposely moved the page size away from the rest of
    the pagination elements).
  `),Rc(),sD(23,`

  `),yi(24,`div`),sD(25,`
    `),yi(26,`button`,7),bp(`click`,function(){return e.togglePaginationPosition()}),sD(27,`
      `),Ip(28,`span`,8),sD(29,`
      `),yi(30,`span`),sD(31,`Toggle Pagination Position`),Rc(),sD(32,`
    `),Rc(),sD(33,`

    `),yi(34,`span`,9),sD(35,`
      Page Size
      `),yi(36,`input`,10),Wp(`ngModelChange`,function(l){return uD(e.pageSize,l)||(e.pageSize=l),l}),bp(`ngModelChange`,function(l){return e.setPaginationSize(l)}),Rc(),Xy(),sD(37,`
    `),Rc(),sD(38,`
  `),Rc(),sD(39,`

  `),yi(40,`angular-slickgrid`,11),bp(`onAngularGridCreated`,function(l){return e.angularGridReady(l.detail)}),sD(41,`
  `),Rc(),sD(42,`
`),Rc(),sD(43,`
`)),r&2&&(ly(36),Gp(`ngModel`,e.pageSize),tE(),ly(4),Ep(`columns`,e.columns)(`options`,e.gridOptions)(`dataset`,e.dataset))},dependencies:[_W,Fn,Te,Vn,$t],encapsulation:2})}}return s})();export{it as Example42Component};
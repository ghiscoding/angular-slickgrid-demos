import{F as Ip,Kn as pI,Pn as ly,Xn as qp,b as Ep,hr as xI,p as CD,pt as Rc,q as MD,rn as bp,t as $E,tr as sD,vn as hI,xr as yi,xt as T}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,ht as nk,m as Ki,x as Pm}from"./chunk-DLuyVhQJ.js";import{n as ze}from"./main-CCTR2RMO.js";import{t as Ze}from"./chunk-C5onuIZj.js";import{t as r}from"./chunk-D2A9m6Pt2.js";function H(l,S){if(l&1&&(sD(0,`
    `),yi(1,`span`,20),sD(2,`
      `),yi(3,`b`),sD(4,`Metrics:`),Rc(),sD(5),CD(6,`date`),Rc(),sD(7,`
  `)),l&2){let o=xI();ly(5),qp(` `,MD(6,3,o.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,o.metrics.itemCount,` of
      `,o.metrics.totalItemCount,` items
    `)}}function m(l,S){return Math.floor(Math.random()*(S-l+1)+l)}var P=10500;var N=`assets/data/collection_500_numbers.json`;var X=(()=>{class l{constructor(){this.http=T(ze),this.translate=T(Ki),this.columns=[],this.hideSubTitle=!1}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:55,filterable:!0,filter:{model:ip.compoundInputText}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{collectionAsync:this.http.get(N),collectionFilterBy:[{property:`value`,operator:`!=`,value:360},{property:`value`,operator:`!=`,value:365}],collectionSortBy:{property:`value`,sortDesc:!0,fieldType:`number`},customStructure:{value:`value`,label:`label`,optionLabel:`value`,labelSuffix:`text`},collectionOptions:{separatorBetweenTextLabels:` `,filterResultAfterEachPass:`chain`},model:ip.multipleSelect,options:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,minWidth:70,type:`number`,sortable:!0,filterable:!0,filter:{model:ip.compoundInputNumber}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,minWidth:75,type:`date`,filterable:!0,filter:{model:ip.compoundDate}},{id:`usDateShort`,name:`US Date Short`,field:`usDateShort`,sortable:!0,minWidth:70,width:70,type:`dateUsShort`,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`utcDate`,name:`UTC Date`,field:`utcDate`,formatter:nk.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:`dateUtc`,exportWithFormatter:!0,outputType:`dateTimeIsoAmPm`,filterable:!0,filter:{model:ip.compoundDate,options:{displayDateMin:`today`}}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven.isEffort`,minWidth:85,maxWidth:85,type:`boolean`,sortable:!0,exportCustomFormatter:nk.complexObject,formatter:nk.multiple,params:{formatters:[nk.complexObject,nk.checkmarkMaterial]},filterable:!0,filter:{collection:[{isEffort:``,label:``},{isEffort:!0,label:`True`},{isEffort:!1,label:`False`}],customStructure:{value:`isEffort`,label:`label`},model:ip.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,i18n:this.translate,showCustomFooter:!0,presets:{filters:[{columnId:`duration`,searchTerms:[10,98]},{columnId:`usDateShort`,operator:`<`,searchTerms:[`4/20/25`]}],sorters:[{columnId:`duration`,direction:`DESC`},{columnId:`complete`,direction:`ASC`}]},externalResources:[new Ze]},this.dataset=this.mockData(P)}angularGridReady(o){this.angularGrid=o}mockData(o,a=0){let r=[];for(let n=a;n<a+o;n++){let d=Math.round(Math.random()*100),x=m(2e3,2035),O=m(10,35),f=m(1,12),R=f<10?`0${f}`:f,b=m(10,28),_=m(0,100),L=m(10,23),y=m(10,59),U=`${m(1,9)}${m(10,99)}`,C=n%3===0;r.push({id:n,title:`Task `+n,description:n%5?`desc `+n:null,duration:d,percentComplete:_,percentCompleteNumber:_,start:n%4?null:new Date(x,f,b),usDateShort:`${f}/${b}/${O}`,utcDate:`${x}-${R}-${b}T${L}:${y}:${y}.${U}Z`,effortDriven:{isEffort:C,label:C?`Effort`:`NoEffort`}})}return r}gridStateChanged(o){console.log(`Client sample, Grid State changed:: `,o.change)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[2,25,48,50]},{columnId:`complete`,searchTerms:[95],operator:`<`},{columnId:`effort-driven`,searchTerms:[!0]},{columnId:`start`,operator:`>=`,searchTerms:[`2001-02-28`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`duration`,direction:`ASC`},{columnId:`start`,direction:`DESC`}])}refreshMetrics(o,a){a?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:a?.current||0,totalItemCount:this.dataset.length||0}})}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||l)}}static{this.ɵcmp=$E({type:l,selectors:[[`ng-component`]],decls:100,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example04.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/sorting`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/custom-filter`,`target`,`_blank`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid4`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`]],template:function(a,r){a&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 4: Client Side Sort/Filter
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return r.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`
  `),yi(18,`div`,6),sD(19,`
    Sort/Filter on client side only using SlickGrid DataView (`),yi(20,`a`,7),sD(21,`Wiki docs`),Rc(),sD(22,`)
    `),Ip(23,`br`),sD(24,`
    `),yi(25,`ul`,8),sD(26,`
      `),yi(27,`li`),sD(28,`Support multi-sort (by default), hold "Shift" key and click on the next column to sort.`),Rc(),sD(29,`
      `),yi(30,`li`),sD(31,`All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)`),Rc(),sD(32,`
      `),yi(33,`ul`),sD(34,`
        `),yi(35,`li`),sD(36,`Example: >100 ... >=2001-01-01 ... >02/28/17`),Rc(),sD(37,`
        `),yi(38,`li`),sD(39,`
          `),yi(40,`b`),sD(41,`Note:`),Rc(),sD(42,` For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not
          the Formatter)
        `),Rc(),sD(43,`
      `),Rc(),sD(44,`
      `),yi(45,`li`),sD(46,`Date Filters`),Rc(),sD(47,`
      `),yi(48,`ul`),sD(49,`
        `),yi(50,`li`),sD(51,`
          FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily. For
          example, in the "UTC Date" field below, you can type ">02/28/2017", also when dealing with UTC you have to take the time
          difference in consideration.
        `),Rc(),sD(52,`
      `),Rc(),sD(53,`
      `),yi(54,`li`),sD(55,`On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")`),Rc(),sD(56,`
      `),yi(57,`li`),sD(58,`
        Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See
        `),yi(59,`a`,9),sD(60,`Wiki - Custom Filter`),Rc(),sD(61,`
      `),Rc(),sD(62,`
      `),yi(63,`li`),sD(64,`MultipleSelect & SingeSelect Filters can use a regular "collection" or "collectionAsync" to load it asynchronously`),Rc(),sD(65,`
    `),Rc(),sD(66,`
  `),Rc(),sD(67,`

  `),Ip(68,`br`),sD(69,`
  `),pI(70,H,8,6),yi(71,`div`,10),sD(72,`
    `),yi(73,`button`,11),bp(`click`,function(){return r.scrollGridTop()}),sD(74,`
      `),Ip(75,`i`,12),sD(76,`
    `),Rc(),sD(77,`
    `),yi(78,`button`,13),bp(`click`,function(){return r.scrollGridBottom()}),sD(79,`
      `),Ip(80,`i`,14),sD(81,`
    `),Rc(),sD(82,`
  `),Rc(),sD(83,`
  `),yi(84,`button`,15),bp(`click`,function(){return r.angularGrid.filterService.clearFilters()}),sD(85,`
    Clear Filters
  `),Rc(),sD(86,`
  `),yi(87,`button`,16),bp(`click`,function(){return r.angularGrid.sortService.clearSorting()}),sD(88,`
    Clear Sorting
  `),Rc(),sD(89,`
  `),yi(90,`button`,17),bp(`click`,function(){return r.setFiltersDynamically()}),sD(91,`
    Set Filters Dynamically
  `),Rc(),sD(92,`
  `),yi(93,`button`,18),bp(`click`,function(){return r.setSortingDynamically()}),sD(94,`
    Set Sorting Dynamically
  `),Rc(),sD(95,`

  `),yi(96,`angular-slickgrid`,19),bp(`onAngularGridCreated`,function(d){return r.angularGridReady(d.detail)})(`onGridStateChanged`,function(d){return r.gridStateChanged(d.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(d){return r.refreshMetrics(d.detail.eventData,d.detail.args)}),sD(97,`
  `),Rc(),sD(98,`
`),Rc(),sD(99,`
`)),a&2&&(ly(70),hI(r.metrics?70:-1),ly(26),Ep(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[_W,Pm],encapsulation:2})}}return l})();export{X as Example4Component};
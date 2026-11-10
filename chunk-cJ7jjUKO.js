import{n as et}from"./chunk-BzRTDaIv.js";import{t as r}from"./chunk-D2A9m6Pt.js";import{n as ze}from"./main-KCATS47T.js";import{Ct as ku,V as R$,Z as Wi,lt as dm,rt as ZR}from"./chunk-Lo0QQjTd.js";import{Gn as mI,In as kI,Qt as Zp,X as Lc,dr as uD,en as _p,f as D,in as bp,k as GE,o as Ap,ot as ND,r as AD,vr as vI,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";function H(l,S){if(l&1&&(uD(0,`
    `),vi(1,`span`,20),uD(2,`
      `),vi(3,`b`),uD(4,`Metrics:`),Lc(),uD(5),ND(6,`date`),Lc(),uD(7,`
  `)),l&2){let o=kI();fv(5),Zp(` `,AD(6,3,o.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,o.metrics.itemCount,` of
      `,o.metrics.totalItemCount,` items
    `)}}function m(l,S){return Math.floor(Math.random()*(S-l+1)+l)}var P=10500;var N=`assets/data/collection_500_numbers.json`;var X=(()=>{class l{constructor(){this.http=D(ze),this.translate=D(Wi),this.columns=[],this.hideSubTitle=!1}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:55,filterable:!0,filter:{model:ku.compoundInputText}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{collectionAsync:this.http.get(N),collectionFilterBy:[{property:`value`,operator:`!=`,value:360},{property:`value`,operator:`!=`,value:365}],collectionSortBy:{property:`value`,sortDesc:!0,fieldType:`number`},customStructure:{value:`value`,label:`label`,optionLabel:`value`,labelSuffix:`text`},collectionOptions:{separatorBetweenTextLabels:` `,filterResultAfterEachPass:`chain`},model:ku.multipleSelect,options:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:ZR.percentCompleteBar,minWidth:70,type:`number`,sortable:!0,filterable:!0,filter:{model:ku.compoundInputNumber}},{id:`start`,name:`Start`,field:`start`,formatter:ZR.dateIso,sortable:!0,minWidth:75,type:`date`,filterable:!0,filter:{model:ku.compoundDate}},{id:`usDateShort`,name:`US Date Short`,field:`usDateShort`,sortable:!0,minWidth:70,width:70,type:`dateUsShort`,exportWithFormatter:!0,filterable:!0,filter:{model:ku.compoundDate}},{id:`utcDate`,name:`UTC Date`,field:`utcDate`,formatter:ZR.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:`dateUtc`,exportWithFormatter:!0,outputType:`dateTimeIsoAmPm`,filterable:!0,filter:{model:ku.compoundDate,options:{displayDateMin:`today`}}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven.isEffort`,minWidth:85,maxWidth:85,type:`boolean`,sortable:!0,exportCustomFormatter:ZR.complexObject,formatter:ZR.multiple,params:{formatters:[ZR.complexObject,ZR.checkmarkMaterial]},filterable:!0,filter:{collection:[{isEffort:``,label:``},{isEffort:!0,label:`True`},{isEffort:!1,label:`False`}],customStructure:{value:`isEffort`,label:`label`},model:ku.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,i18n:this.translate,showCustomFooter:!0,presets:{filters:[{columnId:`duration`,searchTerms:[10,98]},{columnId:`usDateShort`,operator:`<`,searchTerms:[`4/20/25`]}],sorters:[{columnId:`duration`,direction:`DESC`},{columnId:`complete`,direction:`ASC`}]},externalResources:[new et]},this.dataset=this.mockData(P)}angularGridReady(o){this.angularGrid=o}mockData(o,a=0){let r=[];for(let n=a;n<a+o;n++){let d=Math.round(Math.random()*100),x=m(2e3,2035),O=m(10,35),f=m(1,12),R=f<10?`0${f}`:f,b=m(10,28),_=m(0,100),L=m(10,23),y=m(10,59),U=`${m(1,9)}${m(10,99)}`,C=n%3===0;r.push({id:n,title:`Task `+n,description:n%5?`desc `+n:null,duration:d,percentComplete:_,percentCompleteNumber:_,start:n%4?null:new Date(x,f,b),usDateShort:`${f}/${b}/${O}`,utcDate:`${x}-${R}-${b}T${L}:${y}:${y}.${U}Z`,effortDriven:{isEffort:C,label:C?`Effort`:`NoEffort`}})}return r}gridStateChanged(o){console.log(`Client sample, Grid State changed:: `,o.change)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[2,25,48,50]},{columnId:`complete`,searchTerms:[95],operator:`<`},{columnId:`effort-driven`,searchTerms:[!0]},{columnId:`start`,operator:`>=`,searchTerms:[`2001-02-28`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`duration`,direction:`ASC`},{columnId:`start`,direction:`DESC`}])}refreshMetrics(o,a){a?.current>=0&&setTimeout(()=>{this.metrics={startTime:/* @__PURE__ */ new Date,endTime:/* @__PURE__ */ new Date,itemCount:a?.current||0,totalItemCount:this.dataset.length||0}})}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||l)}}static{this.ɵcmp=GE({type:l,selectors:[[`ng-component`]],decls:100,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example04.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/sorting`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/custom-filter`,`target`,`_blank`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid4`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`]],template:function(a,r){a&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 4: Client Side Sort/Filter
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return r.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`
  `),vi(18,`div`,6),uD(19,`
    Sort/Filter on client side only using SlickGrid DataView (`),vi(20,`a`,7),uD(21,`Wiki docs`),Lc(),uD(22,`)
    `),_p(23,`br`),uD(24,`
    `),vi(25,`ul`,8),uD(26,`
      `),vi(27,`li`),uD(28,`Support multi-sort (by default), hold "Shift" key and click on the next column to sort.`),Lc(),uD(29,`
      `),vi(30,`li`),uD(31,`All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)`),Lc(),uD(32,`
      `),vi(33,`ul`),uD(34,`
        `),vi(35,`li`),uD(36,`Example: >100 ... >=2001-01-01 ... >02/28/17`),Lc(),uD(37,`
        `),vi(38,`li`),uD(39,`
          `),vi(40,`b`),uD(41,`Note:`),Lc(),uD(42,` For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not
          the Formatter)
        `),Lc(),uD(43,`
      `),Lc(),uD(44,`
      `),vi(45,`li`),uD(46,`Date Filters`),Lc(),uD(47,`
      `),vi(48,`ul`),uD(49,`
        `),vi(50,`li`),uD(51,`
          FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily. For
          example, in the "UTC Date" field below, you can type ">02/28/2017", also when dealing with UTC you have to take the time
          difference in consideration.
        `),Lc(),uD(52,`
      `),Lc(),uD(53,`
      `),vi(54,`li`),uD(55,`On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")`),Lc(),uD(56,`
      `),vi(57,`li`),uD(58,`
        Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See
        `),vi(59,`a`,9),uD(60,`Wiki - Custom Filter`),Lc(),uD(61,`
      `),Lc(),uD(62,`
      `),vi(63,`li`),uD(64,`MultipleSelect & SingeSelect Filters can use a regular "collection" or "collectionAsync" to load it asynchronously`),Lc(),uD(65,`
    `),Lc(),uD(66,`
  `),Lc(),uD(67,`

  `),_p(68,`br`),uD(69,`
  `),mI(70,H,8,6),vi(71,`div`,10),uD(72,`
    `),vi(73,`button`,11),Ap(`click`,function(){return r.scrollGridTop()}),uD(74,`
      `),_p(75,`i`,12),uD(76,`
    `),Lc(),uD(77,`
    `),vi(78,`button`,13),Ap(`click`,function(){return r.scrollGridBottom()}),uD(79,`
      `),_p(80,`i`,14),uD(81,`
    `),Lc(),uD(82,`
  `),Lc(),uD(83,`
  `),vi(84,`button`,15),Ap(`click`,function(){return r.angularGrid.filterService.clearFilters()}),uD(85,`
    Clear Filters
  `),Lc(),uD(86,`
  `),vi(87,`button`,16),Ap(`click`,function(){return r.angularGrid.sortService.clearSorting()}),uD(88,`
    Clear Sorting
  `),Lc(),uD(89,`
  `),vi(90,`button`,17),Ap(`click`,function(){return r.setFiltersDynamically()}),uD(91,`
    Set Filters Dynamically
  `),Lc(),uD(92,`
  `),vi(93,`button`,18),Ap(`click`,function(){return r.setSortingDynamically()}),uD(94,`
    Set Sorting Dynamically
  `),Lc(),uD(95,`

  `),vi(96,`angular-slickgrid`,19),Ap(`onAngularGridCreated`,function(d){return r.angularGridReady(d.detail)})(`onGridStateChanged`,function(d){return r.gridStateChanged(d.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(d){return r.refreshMetrics(d.detail.eventData,d.detail.args)}),uD(97,`
  `),Lc(),uD(98,`
`),Lc(),uD(99,`
`)),a&2&&(fv(70),vI(r.metrics?70:-1),fv(26),bp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[R$,dm],encapsulation:2})}}return l})();export{X as Example4Component};
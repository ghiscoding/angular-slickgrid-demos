import{Ct as T,Dt as UE,En as iD,Kn as mp,Qn as pI,Tt as Tp,Wn as mi,_n as fI,bt as SI,f as Bp,hr as vp,ln as cy,o as Ac,qt as _D,yr as wD}from"./chunk-06EGdSfW.js";import{H as _W,b as Pm,m as Ki,mt as nk,st as ip}from"./chunk-CAMk6vEo.js";import{n as ze}from"./main-T6P2BZBW.js";import{t as Ze}from"./chunk-CVoct-s8.js";import{t as r}from"./chunk-D2A9m6Pt.js";function H(l,S){if(l&1&&(iD(0,`
    `),mi(1,`span`,20),iD(2,`
      `),mi(3,`b`),iD(4,`Metrics:`),Ac(),iD(5),wD(6,`date`),Ac(),iD(7,`
  `)),l&2){let o=SI();cy(5),Bp(` `,_D(6,3,o.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,o.metrics.itemCount,` of
      `,o.metrics.totalItemCount,` items
    `)}}function m(l,S){return Math.floor(Math.random()*(S-l+1)+l)}var P=10500;var N=`assets/data/collection_500_numbers.json`;var X=(()=>{class l{constructor(){this.http=T(ze),this.translate=T(Ki),this.columns=[],this.hideSubTitle=!1}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:55,filterable:!0,filter:{model:ip.compoundInputText}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{collectionAsync:this.http.get(N),collectionFilterBy:[{property:`value`,operator:`!=`,value:360},{property:`value`,operator:`!=`,value:365}],collectionSortBy:{property:`value`,sortDesc:!0,fieldType:`number`},customStructure:{value:`value`,label:`label`,optionLabel:`value`,labelSuffix:`text`},collectionOptions:{separatorBetweenTextLabels:` `,filterResultAfterEachPass:`chain`},model:ip.multipleSelect,options:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,minWidth:70,type:`number`,sortable:!0,filterable:!0,filter:{model:ip.compoundInputNumber}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,minWidth:75,type:`date`,filterable:!0,filter:{model:ip.compoundDate}},{id:`usDateShort`,name:`US Date Short`,field:`usDateShort`,sortable:!0,minWidth:70,width:70,type:`dateUsShort`,exportWithFormatter:!0,filterable:!0,filter:{model:ip.compoundDate}},{id:`utcDate`,name:`UTC Date`,field:`utcDate`,formatter:nk.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:`dateUtc`,exportWithFormatter:!0,outputType:`dateTimeIsoAmPm`,filterable:!0,filter:{model:ip.compoundDate,options:{displayDateMin:`today`}}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven.isEffort`,minWidth:85,maxWidth:85,type:`boolean`,sortable:!0,exportCustomFormatter:nk.complexObject,formatter:nk.multiple,params:{formatters:[nk.complexObject,nk.checkmarkMaterial]},filterable:!0,filter:{collection:[{isEffort:``,label:``},{isEffort:!0,label:`True`},{isEffort:!1,label:`False`}],customStructure:{value:`isEffort`,label:`label`},model:ip.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,i18n:this.translate,showCustomFooter:!0,presets:{filters:[{columnId:`duration`,searchTerms:[10,98]},{columnId:`usDateShort`,operator:`<`,searchTerms:[`4/20/25`]}],sorters:[{columnId:`duration`,direction:`DESC`},{columnId:`complete`,direction:`ASC`}]},externalResources:[new Ze]},this.dataset=this.mockData(P)}angularGridReady(o){this.angularGrid=o}mockData(o,a=0){let r=[];for(let n=a;n<a+o;n++){let d=Math.round(Math.random()*100),x=m(2e3,2035),O=m(10,35),f=m(1,12),R=f<10?`0${f}`:f,b=m(10,28),_=m(0,100),L=m(10,23),y=m(10,59),U=`${m(1,9)}${m(10,99)}`,C=n%3===0;r.push({id:n,title:`Task `+n,description:n%5?`desc `+n:null,duration:d,percentComplete:_,percentCompleteNumber:_,start:n%4?null:new Date(x,f,b),usDateShort:`${f}/${b}/${O}`,utcDate:`${x}-${R}-${b}T${L}:${y}:${y}.${U}Z`,effortDriven:{isEffort:C,label:C?`Effort`:`NoEffort`}})}return r}gridStateChanged(o){console.log(`Client sample, Grid State changed:: `,o.change)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[2,25,48,50]},{columnId:`complete`,searchTerms:[95],operator:`<`},{columnId:`effort-driven`,searchTerms:[!0]},{columnId:`start`,operator:`>=`,searchTerms:[`2001-02-28`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`duration`,direction:`ASC`},{columnId:`start`,direction:`DESC`}])}refreshMetrics(o,a){a?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:a?.current||0,totalItemCount:this.dataset.length||0}})}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||l)}}static{this.ɵcmp=UE({type:l,selectors:[[`ng-component`]],decls:100,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example04.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/sorting`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/custom-filter`,`target`,`_blank`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid4`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`]],template:function(a,r){a&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 4: Client Side Sort/Filter
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return r.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`
  `),mi(18,`div`,6),iD(19,`
    Sort/Filter on client side only using SlickGrid DataView (`),mi(20,`a`,7),iD(21,`Wiki docs`),Ac(),iD(22,`)
    `),vp(23,`br`),iD(24,`
    `),mi(25,`ul`,8),iD(26,`
      `),mi(27,`li`),iD(28,`Support multi-sort (by default), hold "Shift" key and click on the next column to sort.`),Ac(),iD(29,`
      `),mi(30,`li`),iD(31,`All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)`),Ac(),iD(32,`
      `),mi(33,`ul`),iD(34,`
        `),mi(35,`li`),iD(36,`Example: >100 ... >=2001-01-01 ... >02/28/17`),Ac(),iD(37,`
        `),mi(38,`li`),iD(39,`
          `),mi(40,`b`),iD(41,`Note:`),Ac(),iD(42,` For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not
          the Formatter)
        `),Ac(),iD(43,`
      `),Ac(),iD(44,`
      `),mi(45,`li`),iD(46,`Date Filters`),Ac(),iD(47,`
      `),mi(48,`ul`),iD(49,`
        `),mi(50,`li`),iD(51,`
          FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily. For
          example, in the "UTC Date" field below, you can type ">02/28/2017", also when dealing with UTC you have to take the time
          difference in consideration.
        `),Ac(),iD(52,`
      `),Ac(),iD(53,`
      `),mi(54,`li`),iD(55,`On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")`),Ac(),iD(56,`
      `),mi(57,`li`),iD(58,`
        Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See
        `),mi(59,`a`,9),iD(60,`Wiki - Custom Filter`),Ac(),iD(61,`
      `),Ac(),iD(62,`
      `),mi(63,`li`),iD(64,`MultipleSelect & SingeSelect Filters can use a regular "collection" or "collectionAsync" to load it asynchronously`),Ac(),iD(65,`
    `),Ac(),iD(66,`
  `),Ac(),iD(67,`

  `),vp(68,`br`),iD(69,`
  `),fI(70,H,8,6),mi(71,`div`,10),iD(72,`
    `),mi(73,`button`,11),Tp(`click`,function(){return r.scrollGridTop()}),iD(74,`
      `),vp(75,`i`,12),iD(76,`
    `),Ac(),iD(77,`
    `),mi(78,`button`,13),Tp(`click`,function(){return r.scrollGridBottom()}),iD(79,`
      `),vp(80,`i`,14),iD(81,`
    `),Ac(),iD(82,`
  `),Ac(),iD(83,`
  `),mi(84,`button`,15),Tp(`click`,function(){return r.angularGrid.filterService.clearFilters()}),iD(85,`
    Clear Filters
  `),Ac(),iD(86,`
  `),mi(87,`button`,16),Tp(`click`,function(){return r.angularGrid.sortService.clearSorting()}),iD(88,`
    Clear Sorting
  `),Ac(),iD(89,`
  `),mi(90,`button`,17),Tp(`click`,function(){return r.setFiltersDynamically()}),iD(91,`
    Set Filters Dynamically
  `),Ac(),iD(92,`
  `),mi(93,`button`,18),Tp(`click`,function(){return r.setSortingDynamically()}),iD(94,`
    Set Sorting Dynamically
  `),Ac(),iD(95,`

  `),mi(96,`angular-slickgrid`,19),Tp(`onAngularGridCreated`,function(d){return r.angularGridReady(d.detail)})(`onGridStateChanged`,function(d){return r.gridStateChanged(d.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(d){return r.refreshMetrics(d.detail.eventData,d.detail.args)}),iD(97,`
  `),Ac(),iD(98,`
`),Ac(),iD(99,`
`)),a&2&&(cy(70),pI(r.metrics?70:-1),cy(26),mp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[_W,Pm],encapsulation:2})}}return l})();export{X as Example4Component};
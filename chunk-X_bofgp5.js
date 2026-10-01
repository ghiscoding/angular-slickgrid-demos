import{$ as Mp,C as Ei,En as iD,Et as SI,N as Gp,_ as D,b as Dp,c as BE,cn as ay,ct as Oc,en as _D,er as pI,hn as dI,jt as Tp,xr as wD}from"./chunk-CtIlL7jI.js";import{Ot as xz,T as Lm,bt as rp,m as Gi,xt as uP}from"./chunk-C1NeHYCu.js";import{n as ze}from"./main-JBJUR4DQ.js";import{t as Ze}from"./chunk-dI_4WJwX.js";import{t as r}from"./chunk-D2A9m6Pt.js";function H(l,S){if(l&1&&(iD(0,`
    `),Ei(1,`span`,20),iD(2,`
      `),Ei(3,`b`),iD(4,`Metrics:`),Oc(),iD(5),wD(6,`date`),Oc(),iD(7,`
  `)),l&2){let o=SI();ay(5),Gp(` `,_D(6,3,o.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,o.metrics.itemCount,` of
      `,o.metrics.totalItemCount,` items
    `)}}function m(l,S){return Math.floor(Math.random()*(S-l+1)+l)}var P=10500;var N=`assets/data/collection_500_numbers.json`;var X=(()=>{class l{constructor(){this.http=D(ze),this.translate=D(Gi),this.columns=[],this.hideSubTitle=!1}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:55,filterable:!0,filter:{model:rp.compoundInputText}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{collectionAsync:this.http.get(N),collectionFilterBy:[{property:`value`,operator:`!=`,value:360},{property:`value`,operator:`!=`,value:365}],collectionSortBy:{property:`value`,sortDesc:!0,fieldType:`number`},customStructure:{value:`value`,label:`label`,optionLabel:`value`,labelSuffix:`text`},collectionOptions:{separatorBetweenTextLabels:` `,filterResultAfterEachPass:`chain`},model:rp.multipleSelect,options:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:uP.percentCompleteBar,minWidth:70,type:`number`,sortable:!0,filterable:!0,filter:{model:rp.compoundInputNumber}},{id:`start`,name:`Start`,field:`start`,formatter:uP.dateIso,sortable:!0,minWidth:75,type:`date`,filterable:!0,filter:{model:rp.compoundDate}},{id:`usDateShort`,name:`US Date Short`,field:`usDateShort`,sortable:!0,minWidth:70,width:70,type:`dateUsShort`,exportWithFormatter:!0,filterable:!0,filter:{model:rp.compoundDate}},{id:`utcDate`,name:`UTC Date`,field:`utcDate`,formatter:uP.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:`dateUtc`,exportWithFormatter:!0,outputType:`dateTimeIsoAmPm`,filterable:!0,filter:{model:rp.compoundDate,options:{displayDateMin:`today`}}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven.isEffort`,minWidth:85,maxWidth:85,type:`boolean`,sortable:!0,exportCustomFormatter:uP.complexObject,formatter:uP.multiple,params:{formatters:[uP.complexObject,uP.checkmarkMaterial]},filterable:!0,filter:{collection:[{isEffort:``,label:``},{isEffort:!0,label:`True`},{isEffort:!1,label:`False`}],customStructure:{value:`isEffort`,label:`label`},model:rp.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,i18n:this.translate,showCustomFooter:!0,presets:{filters:[{columnId:`duration`,searchTerms:[10,98]},{columnId:`usDateShort`,operator:`<`,searchTerms:[`4/20/25`]}],sorters:[{columnId:`duration`,direction:`DESC`},{columnId:`complete`,direction:`ASC`}]},externalResources:[new Ze]},this.dataset=this.mockData(P)}angularGridReady(o){this.angularGrid=o}mockData(o,a=0){let r=[];for(let n=a;n<a+o;n++){let d=Math.round(Math.random()*100),x=m(2e3,2035),O=m(10,35),f=m(1,12),R=f<10?`0${f}`:f,b=m(10,28),_=m(0,100),L=m(10,23),y=m(10,59),U=`${m(1,9)}${m(10,99)}`,C=n%3===0;r.push({id:n,title:`Task `+n,description:n%5?`desc `+n:null,duration:d,percentComplete:_,percentCompleteNumber:_,start:n%4?null:new Date(x,f,b),usDateShort:`${f}/${b}/${O}`,utcDate:`${x}-${R}-${b}T${L}:${y}:${y}.${U}Z`,effortDriven:{isEffort:C,label:C?`Effort`:`NoEffort`}})}return r}gridStateChanged(o){console.log(`Client sample, Grid State changed:: `,o.change)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[2,25,48,50]},{columnId:`complete`,searchTerms:[95],operator:`<`},{columnId:`effort-driven`,searchTerms:[!0]},{columnId:`start`,operator:`>=`,searchTerms:[`2001-02-28`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`duration`,direction:`ASC`},{columnId:`start`,direction:`DESC`}])}refreshMetrics(o,a){a?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:a?.current||0,totalItemCount:this.dataset.length||0}})}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||l)}}static{this.ɵcmp=BE({type:l,selectors:[[`ng-component`]],decls:100,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example04.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/sorting`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/custom-filter`,`target`,`_blank`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid4`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`]],template:function(a,r){a&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 4: Client Side Sort/Filter
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return r.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`
  `),Ei(18,`div`,6),iD(19,`
    Sort/Filter on client side only using SlickGrid DataView (`),Ei(20,`a`,7),iD(21,`Wiki docs`),Oc(),iD(22,`)
    `),Tp(23,`br`),iD(24,`
    `),Ei(25,`ul`,8),iD(26,`
      `),Ei(27,`li`),iD(28,`Support multi-sort (by default), hold "Shift" key and click on the next column to sort.`),Oc(),iD(29,`
      `),Ei(30,`li`),iD(31,`All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)`),Oc(),iD(32,`
      `),Ei(33,`ul`),iD(34,`
        `),Ei(35,`li`),iD(36,`Example: >100 ... >=2001-01-01 ... >02/28/17`),Oc(),iD(37,`
        `),Ei(38,`li`),iD(39,`
          `),Ei(40,`b`),iD(41,`Note:`),Oc(),iD(42,` For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not
          the Formatter)
        `),Oc(),iD(43,`
      `),Oc(),iD(44,`
      `),Ei(45,`li`),iD(46,`Date Filters`),Oc(),iD(47,`
      `),Ei(48,`ul`),iD(49,`
        `),Ei(50,`li`),iD(51,`
          FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily. For
          example, in the "UTC Date" field below, you can type ">02/28/2017", also when dealing with UTC you have to take the time
          difference in consideration.
        `),Oc(),iD(52,`
      `),Oc(),iD(53,`
      `),Ei(54,`li`),iD(55,`On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")`),Oc(),iD(56,`
      `),Ei(57,`li`),iD(58,`
        Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See
        `),Ei(59,`a`,9),iD(60,`Wiki - Custom Filter`),Oc(),iD(61,`
      `),Oc(),iD(62,`
      `),Ei(63,`li`),iD(64,`MultipleSelect & SingeSelect Filters can use a regular "collection" or "collectionAsync" to load it asynchronously`),Oc(),iD(65,`
    `),Oc(),iD(66,`
  `),Oc(),iD(67,`

  `),Tp(68,`br`),iD(69,`
  `),dI(70,H,8,6),Ei(71,`div`,10),iD(72,`
    `),Ei(73,`button`,11),Mp(`click`,function(){return r.scrollGridTop()}),iD(74,`
      `),Tp(75,`i`,12),iD(76,`
    `),Oc(),iD(77,`
    `),Ei(78,`button`,13),Mp(`click`,function(){return r.scrollGridBottom()}),iD(79,`
      `),Tp(80,`i`,14),iD(81,`
    `),Oc(),iD(82,`
  `),Oc(),iD(83,`
  `),Ei(84,`button`,15),Mp(`click`,function(){return r.angularGrid.filterService.clearFilters()}),iD(85,`
    Clear Filters
  `),Oc(),iD(86,`
  `),Ei(87,`button`,16),Mp(`click`,function(){return r.angularGrid.sortService.clearSorting()}),iD(88,`
    Clear Sorting
  `),Oc(),iD(89,`
  `),Ei(90,`button`,17),Mp(`click`,function(){return r.setFiltersDynamically()}),iD(91,`
    Set Filters Dynamically
  `),Oc(),iD(92,`
  `),Ei(93,`button`,18),Mp(`click`,function(){return r.setSortingDynamically()}),iD(94,`
    Set Sorting Dynamically
  `),Oc(),iD(95,`

  `),Ei(96,`angular-slickgrid`,19),Mp(`onAngularGridCreated`,function(d){return r.angularGridReady(d.detail)})(`onGridStateChanged`,function(d){return r.gridStateChanged(d.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(d){return r.refreshMetrics(d.detail.eventData,d.detail.args)}),iD(97,`
  `),Oc(),iD(98,`
`),Oc(),iD(99,`
`)),a&2&&(ay(70),pI(r.metrics?70:-1),ay(26),Dp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[xz,Lm],encapsulation:2})}}return l})();export{X as Example4Component};
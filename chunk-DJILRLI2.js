import{Fn as mp,Gt as bD,Hn as oD,T as Hp,Wt as av,Z as NE,dn as gi,fr as wD,g as Dp,l as BI,m as D,on as fE,pn as gp,tn as dE,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1,kt as zp,ot as ji,x as Iu}from"./chunk-C7G4ZLh2.js";import{t as Xe}from"./main-G4HCM3L6.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";import{t as r}from"./chunk-D2A9m6Pt.js";function H(l,S){if(l&1&&(oD(0,`
    `),gi(1,`span`,20),oD(2,`
      `),gi(3,`b`),oD(4,`Metrics:`),xc(),oD(5),wD(6,`date`),xc(),oD(7,`
  `)),l&2){let o=NE();av(5),Hp(` `,bD(6,3,o.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,o.metrics.itemCount,` of
      `,o.metrics.totalItemCount,` items
    `)}}function m(l,S){return Math.floor(Math.random()*(S-l+1)+l)}var P=10500;var N=`assets/data/collection_500_numbers.json`;var X=(()=>{class l{constructor(){this.http=D(Xe),this.translate=D(ji),this.columns=[],this.hideSubTitle=!1}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:55,filterable:!0,filter:{model:Iu.compoundInputText}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{collectionAsync:this.http.get(N),collectionFilterBy:[{property:`value`,operator:`!=`,value:360},{property:`value`,operator:`!=`,value:365}],collectionSortBy:{property:`value`,sortDesc:!0,fieldType:`number`},customStructure:{value:`value`,label:`label`,optionLabel:`value`,labelSuffix:`text`},collectionOptions:{separatorBetweenTextLabels:` `,filterResultAfterEachPass:`chain`},model:Iu.multipleSelect,options:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:JN.percentCompleteBar,minWidth:70,type:`number`,sortable:!0,filterable:!0,filter:{model:Iu.compoundInputNumber}},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso,sortable:!0,minWidth:75,type:`date`,filterable:!0,filter:{model:Iu.compoundDate}},{id:`usDateShort`,name:`US Date Short`,field:`usDateShort`,sortable:!0,minWidth:70,width:70,type:`dateUsShort`,exportWithFormatter:!0,filterable:!0,filter:{model:Iu.compoundDate}},{id:`utcDate`,name:`UTC Date`,field:`utcDate`,formatter:JN.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:`dateUtc`,exportWithFormatter:!0,outputType:`dateTimeIsoAmPm`,filterable:!0,filter:{model:Iu.compoundDate,options:{displayDateMin:`today`}}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven.isEffort`,minWidth:85,maxWidth:85,type:`boolean`,sortable:!0,exportCustomFormatter:JN.complexObject,formatter:JN.multiple,params:{formatters:[JN.complexObject,JN.checkmarkMaterial]},filterable:!0,filter:{collection:[{isEffort:``,label:``},{isEffort:!0,label:`True`},{isEffort:!1,label:`False`}],customStructure:{value:`isEffort`,label:`label`},model:Iu.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,i18n:this.translate,showCustomFooter:!0,presets:{filters:[{columnId:`duration`,searchTerms:[10,98]},{columnId:`usDateShort`,operator:`<`,searchTerms:[`4/20/25`]}],sorters:[{columnId:`duration`,direction:`DESC`},{columnId:`complete`,direction:`ASC`}]},externalResources:[new Ze]},this.dataset=this.mockData(P)}angularGridReady(o){this.angularGrid=o}mockData(o,a=0){let r=[];for(let n=a;n<a+o;n++){let d=Math.round(Math.random()*100),x=m(2e3,2035),O=m(10,35),f=m(1,12),R=f<10?`0${f}`:f,b=m(10,28),_=m(0,100),L=m(10,23),y=m(10,59),U=`${m(1,9)}${m(10,99)}`,C=n%3===0;r.push({id:n,title:`Task `+n,description:n%5?`desc `+n:null,duration:d,percentComplete:_,percentCompleteNumber:_,start:n%4?null:new Date(x,f,b),usDateShort:`${f}/${b}/${O}`,utcDate:`${x}-${R}-${b}T${L}:${y}:${y}.${U}Z`,effortDriven:{isEffort:C,label:C?`Effort`:`NoEffort`}})}return r}gridStateChanged(o){console.log(`Client sample, Grid State changed:: `,o.change)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[2,25,48,50]},{columnId:`complete`,searchTerms:[95],operator:`<`},{columnId:`effort-driven`,searchTerms:[!0]},{columnId:`start`,operator:`>=`,searchTerms:[`2001-02-28`]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`duration`,direction:`ASC`},{columnId:`start`,direction:`DESC`}])}refreshMetrics(o,a){a?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:a?.current||0,totalItemCount:this.dataset.length||0}})}scrollGridBottom(){this.angularGrid.slickGrid.navigateBottom()}scrollGridTop(){this.angularGrid.slickGrid.navigateTop()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let o=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[o](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||l)}}static{this.ɵcmp=BI({type:l,selectors:[[`ng-component`]],decls:100,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example04.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/sorting`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/custom-filter`,`target`,`_blank`],[`role`,`group`,1,`btn-group`],[`data-test`,`scroll-top-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`,`mdi-rotate-180`],[`data-test`,`scroll-bottom-btn`,1,`btn`,`btn-sm`,`btn-outline-secondary`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-down`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid4`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`]],template:function(a,r){a&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 4: Client Side Sort/Filter
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return r.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`
  `),gi(18,`div`,6),oD(19,`
    Sort/Filter on client side only using SlickGrid DataView (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`)
    `),mp(23,`br`),oD(24,`
    `),gi(25,`ul`,8),oD(26,`
      `),gi(27,`li`),oD(28,`Support multi-sort (by default), hold "Shift" key and click on the next column to sort.`),xc(),oD(29,`
      `),gi(30,`li`),oD(31,`All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)`),xc(),oD(32,`
      `),gi(33,`ul`),oD(34,`
        `),gi(35,`li`),oD(36,`Example: >100 ... >=2001-01-01 ... >02/28/17`),xc(),oD(37,`
        `),gi(38,`li`),oD(39,`
          `),gi(40,`b`),oD(41,`Note:`),xc(),oD(42,` For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not
          the Formatter)
        `),xc(),oD(43,`
      `),xc(),oD(44,`
      `),gi(45,`li`),oD(46,`Date Filters`),xc(),oD(47,`
      `),gi(48,`ul`),oD(49,`
        `),gi(50,`li`),oD(51,`
          FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily. For
          example, in the "UTC Date" field below, you can type ">02/28/2017", also when dealing with UTC you have to take the time
          difference in consideration.
        `),xc(),oD(52,`
      `),xc(),oD(53,`
      `),gi(54,`li`),oD(55,`On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")`),xc(),oD(56,`
      `),gi(57,`li`),oD(58,`
        Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See
        `),gi(59,`a`,9),oD(60,`Wiki - Custom Filter`),xc(),oD(61,`
      `),xc(),oD(62,`
      `),gi(63,`li`),oD(64,`MultipleSelect & SingeSelect Filters can use a regular "collection" or "collectionAsync" to load it asynchronously`),xc(),oD(65,`
    `),xc(),oD(66,`
  `),xc(),oD(67,`

  `),mp(68,`br`),oD(69,`
  `),dE(70,H,8,6),gi(71,`div`,10),oD(72,`
    `),gi(73,`button`,11),Dp(`click`,function(){return r.scrollGridTop()}),oD(74,`
      `),mp(75,`i`,12),oD(76,`
    `),xc(),oD(77,`
    `),gi(78,`button`,13),Dp(`click`,function(){return r.scrollGridBottom()}),oD(79,`
      `),mp(80,`i`,14),oD(81,`
    `),xc(),oD(82,`
  `),xc(),oD(83,`
  `),gi(84,`button`,15),Dp(`click`,function(){return r.angularGrid.filterService.clearFilters()}),oD(85,`
    Clear Filters
  `),xc(),oD(86,`
  `),gi(87,`button`,16),Dp(`click`,function(){return r.angularGrid.sortService.clearSorting()}),oD(88,`
    Clear Sorting
  `),xc(),oD(89,`
  `),gi(90,`button`,17),Dp(`click`,function(){return r.setFiltersDynamically()}),oD(91,`
    Set Filters Dynamically
  `),xc(),oD(92,`
  `),gi(93,`button`,18),Dp(`click`,function(){return r.setSortingDynamically()}),oD(94,`
    Set Sorting Dynamically
  `),xc(),oD(95,`

  `),gi(96,`angular-slickgrid`,19),Dp(`onAngularGridCreated`,function(d){return r.angularGridReady(d.detail)})(`onGridStateChanged`,function(d){return r.gridStateChanged(d.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(d){return r.refreshMetrics(d.detail.eventData,d.detail.args)}),oD(97,`
  `),xc(),oD(98,`
`),xc(),oD(99,`
`)),a&2&&(av(70),fE(r.metrics?70:-1),av(26),gp(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[q1,zp],encapsulation:2})}}return l})();export{X as Example4Component};
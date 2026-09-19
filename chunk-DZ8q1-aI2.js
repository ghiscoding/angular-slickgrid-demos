import{F as Ip,In as mI,Kn as pI,Lt as Wp,O as Gp,Ot as Up,Pn as ly,Xn as qp,b as Ep,gn as gI,hr as xI,ir as tE,j as Ho,lr as vI,or as uD,p as CD,pt as Rc,q as MD,rn as bp,t as $E,tr as sD,vn as hI,xr as yi,xt as T,zt as Xy}from"./chunk-Rd4ToC_L.js";import{At as xe,U as Zn,W as _W,ct as ip,ht as nk,m as Ki,n as CW,x as Pm}from"./chunk-DLuyVhQJ.js";import{_ as Vn,c as An,d as Fn,l as Dn,m as Mn,p as Ht,s as $t,u as En,y as rt}from"./main-CCTR2RMO.js";import{t as Ze}from"./chunk-C5onuIZj.js";import{t as S}from"./chunk-CB5gCqaD.js";import{t as r}from"./chunk-D2A9m6Pt2.js";function ie(s,p){if(s&1&&(sD(0,`
    `),yi(1,`span`,22),sD(2,`
      `),yi(3,`b`),sD(4,`Metrics:`),Rc(),sD(5),CD(6,`date`),Rc(),sD(7,`
  `)),s&2){let i=xI();ly(5),qp(` `,MD(6,3,i.metrics.startTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,i.metrics.itemCount,` of
      `,i.metrics.totalItemCount,` items
    `)}}function re(s,p){if(s&1&&(sD(0,`
          `),yi(1,`option`,23),sD(2),Rc(),sD(3,`
        `)),s&2){let i=p.$implicit;ly(),Ep(`ngValue`,i.value),ly(),Up(i.label)}}var ae=1500;function x(s,p){return Math.floor(Math.random()*(p-s+1)+s)}var le=(s,p,i,l,r,a)=>a.getOptions().i18n.instant(`TASK_X`,{x:i});var Se=(()=>{class s{constructor(){this.translate=T(Ki),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Ho(``),this.filterList=[{value:``,label:``},{value:`currentYearTasks`,label:`Current Year Completed Tasks`},{value:`nextYearTasks`,label:`Next Year Active Tasks`}];let i=`en`;this.translate.use(i),this.selectedLanguage.set(i)}ngOnDestroy(){CW(this.subscriptions)}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:le,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,filter:{model:r,enableTrimWhiteSpace:!0}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:120,sortable:!0,customTooltip:{position:`center`},formatter:nk.progressBar,type:`number`,filterable:!0,filter:{model:ip.sliderRange,maxValue:100,operator:`RangeInclusive`,options:{hideSliderNumbers:!1,min:0,step:5}}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:nk.dateIso,sortable:!0,minWidth:75,width:100,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ip.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:nk.dateIso,sortable:!0,minWidth:75,width:120,exportWithFormatter:!0,type:`date`,filterable:!0,filter:{model:ip.dateRange}},{id:`duration`,field:`duration`,nameKey:`DURATION`,maxWidth:90,type:`number`,sortable:!0,filterable:!0,filter:{model:ip.input,operator:`RangeExclusive`}},{id:`completed`,name:`Completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:90,formatter:nk.checkmarkMaterial,exportWithFormatter:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:ip.singleSelect,options:{autoAdjustDropHeight:!0}}}];let i=xe(Zn(new Date,-2),`YYYY-MM-DD`),l=xe(Zn(new Date,25),`YYYY-MM-DD`);this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableExcelCopyBuffer:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,presets:{filters:[{columnId:`duration`,searchTerms:[`4..88`]},{columnId:`percentComplete`,operator:`RangeInclusive`,searchTerms:[5,80]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}],sorters:[{columnId:`percentComplete`,direction:`DESC`},{columnId:`duration`,direction:`ASC`}]},externalResources:[new S,new Ze]},this.dataset=this.mockData(ae)}angularGridReady(i){this.angularGrid=i}mockData(i,l=0){let r=[];for(let a=l;a<l+i;a++){let o=x(0,365),b=x(new Date().getFullYear(),new Date().getFullYear()+1),E=x(0,12),y=x(10,28),S=x(0,100);r.push({id:a,title:`Task `+a,description:a%5?`desc `+a:null,duration:o,percentComplete:S,percentCompleteNumber:S,start:a%4?null:new Date(b,E,y),finish:new Date(b,E,y),completed:S===100})}return r}clearFilters(){this.selectedPredefinedFilter={value:``,label:``},this.angularGrid.filterService.clearFilters()}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i)}saveCurrentGridState(){console.log(`Client sample, last Grid State:: `,this.angularGrid.gridStateService.getCurrentGridState())}refreshMetrics(i,l){l?.current>=0&&setTimeout(()=>{this.metrics={startTime:new Date,itemCount:l?.current||0,totalItemCount:this.dataset.length||0}})}setFiltersDynamically(){let i=xe(Zn(new Date,-5),`YYYY-MM-DD`),l=xe(Zn(new Date,25),`YYYY-MM-DD`);this.angularGrid.filterService.updateFilters([{columnId:`duration`,searchTerms:[`14..78`],operator:`RangeInclusive`},{columnId:`percentComplete`,operator:`RangeExclusive`,searchTerms:[15,85]},{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[i,l]}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`finish`,direction:`DESC`},{columnId:`percentComplete`,direction:`ASC`}])}usePredefinedFilter(i){let l=[],r=new Date().getFullYear();switch(i){case`currentYearTasks`:l=[{columnId:`finish`,operator:`RangeInclusive`,searchTerms:[`${r}-01-01`,`${r}-12-31`]},{columnId:`completed`,operator:`=`,searchTerms:[!0]}];break;case`nextYearTasks`:l=[{columnId:`start`,operator:`>=`,searchTerms:[`${r+1}-01-01`]}];break}this.angularGrid.filterService.updateFilters(l)}switchLanguage(){let i=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(i).subscribe(()=>{this.selectedLanguage.set(i)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=$E({type:s,selectors:[[`ng-component`]],decls:124,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example23.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/filters/range-filters`,`target`,`_blank`],[1,`small`],[1,`row`,`row-cols-lg-auto`,`g-1`,`align-items-center`],[1,`col`],[`data-test`,`clear-filters`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`clear-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`for`,`selectedFilter`,2,`margin-left`,`10px`],[`name`,`selectedFilter`,`data-test`,`select-dynamic-filter`,1,`form-select`,3,`ngModelChange`,`ngModel`],[1,`row`,`mt-2`],[`data-test`,`language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid23`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`onRowCountChanged`,`columns`,`options`,`dataset`],[2,`margin-right`,`10px`],[3,`ngValue`]],template:function(l,r){l&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 23: Filtering from Range of Search Values
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
    This demo shows how to use Filters with Range of Search Values (`),yi(20,`a`,7),sD(21,`Wiki docs`),Rc(),sD(22,`)
    `),Ip(23,`br`),sD(24,`
    `),yi(25,`ul`,8),sD(26,`
      `),yi(27,`li`),sD(28,`All input filters support the following operators: (>, >=, <, <=, <>, !=, =, ==, *) and now also the (..) for an input range`),Rc(),sD(29,`
      `),yi(30,`li`),sD(31,`
        All filters (which support ranges) can be defined via the 2 dots (..) which represents a range, this also works for dates and slider
        in the "presets"
      `),Rc(),sD(32,`
      `),yi(33,`ul`),sD(34,`
        `),yi(35,`li`),sD(36,`For a numeric range defined in an input filter (must be of type text), you can use 2 dots (..) to represent a range`),Rc(),sD(37,`
        `),yi(38,`li`),sD(39,`example: typing "10..90" will filter values between 10 and 90 (but excluding the number 10 and 90)`),Rc(),sD(40,`
      `),Rc(),sD(41,`
      `),yi(42,`ul`),sD(43,`
        `),yi(44,`li`),sD(45,`note that the examples shown below for the operator, are case sensitive`),Rc(),sD(46,`
        `),yi(47,`li`),sD(48,`
          by default the range is inclusive which would be the same as defining the filter options to "operator: 'RangeInclusive'" or
          "operator: OperatoryType.rangeInclusive"
        `),Rc(),sD(49,`
        `),yi(50,`li`),sD(51,`
          you can also set the inverse (exclusive) by defining the filter options to "operator: 'RangeExclusive'" or "operator:
          OperatoryType.rangeExclusive"
        `),Rc(),sD(52,`
      `),Rc(),sD(53,`
      `),yi(54,`li`),sD(55,`
        Date Range with Vanilla Calendar Date Picker, they will also use the locale, choose a start date then drag or click on the end date
      `),Rc(),sD(56,`
    `),Rc(),sD(57,`
  `),Rc(),sD(58,`

  `),Ip(59,`br`),sD(60,`

  `),pI(61,ie,8,6),yi(62,`form`,9),sD(63,`
    `),yi(64,`div`,10),sD(65,`
      `),yi(66,`button`,11),bp(`click`,function(){return r.clearFilters()}),sD(67,`Clear Filters`),Rc(),sD(68,`
    `),Rc(),sD(69,`
    `),yi(70,`div`,10),sD(71,`
      `),yi(72,`button`,12),bp(`click`,function(){return r.angularGrid.sortService.clearSorting()}),sD(73,`
        Clear Sorting
      `),Rc(),sD(74,`
    `),Rc(),sD(75,`
    `),yi(76,`div`,10),sD(77,`
      `),yi(78,`button`,13),bp(`click`,function(){return r.setFiltersDynamically()}),sD(79,`
        Set Filters Dynamically
      `),Rc(),sD(80,`
    `),Rc(),sD(81,`
    `),yi(82,`div`,10),sD(83,`
      `),yi(84,`button`,14),bp(`click`,function(){return r.setSortingDynamically()}),sD(85,`
        Set Sorting Dynamically
      `),Rc(),sD(86,`
    `),Rc(),sD(87,`
    `),yi(88,`div`,10),sD(89,`
      `),yi(90,`label`,15),sD(91,`Predefined Filters`),Rc(),sD(92,`
    `),Rc(),sD(93,`
    `),yi(94,`div`,10),sD(95,`
      `),yi(96,`select`,16),Wp(`ngModelChange`,function(o){return uD(r.selectedPredefinedFilter,o)||(r.selectedPredefinedFilter=o),o}),bp(`ngModelChange`,function(o){return r.usePredefinedFilter(o)}),sD(97,`
        `),mI(98,re,4,2,null,null,gI),Rc(),Xy(),sD(100,`
    `),Rc(),sD(101,`
  `),Rc(),sD(102,`

  `),yi(103,`div`,17),sD(104,`
    `),yi(105,`div`,10),sD(106,`
      `),yi(107,`button`,18),bp(`click`,function(){return r.switchLanguage()}),sD(108,`
        `),Ip(109,`i`,19),sD(110,`
        Switch Language
      `),Rc(),sD(111,`
      `),yi(112,`b`),sD(113,`Locale:`),Rc(),sD(114,` `),yi(115,`span`,20),sD(116),Rc(),sD(117,`
    `),Rc(),sD(118,`
  `),Rc(),sD(119,`

  `),yi(120,`angular-slickgrid`,21),bp(`onAngularGridCreated`,function(o){return r.angularGridReady(o.detail)})(`onGridStateChanged`,function(o){return r.gridStateChanged(o.detail)})(`onBeforeGridDestroy`,function(){return r.saveCurrentGridState()})(`onRowCountChanged`,function(o){return r.refreshMetrics(o.detail.eventData,o.detail.args)}),sD(121,`
  `),Rc(),sD(122,`
`),Rc(),sD(123,`
`)),l&2&&(ly(61),hI(r.metrics?61:-1),ly(35),Gp(`ngModel`,r.selectedPredefinedFilter),tE(),ly(2),vI(r.filterList),ly(18),Up(r.selectedLanguage()+`.json`),ly(4),Ep(`columns`,r.columns)(`options`,r.gridOptions)(`dataset`,r.dataset))},dependencies:[_W,Fn,An,Mn,En,rt,Vn,Dn,$t,Ht,Pm],encapsulation:2})}}return s})();export{Se as Example23Component};
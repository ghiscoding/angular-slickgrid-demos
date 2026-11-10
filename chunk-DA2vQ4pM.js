import{t as C}from"./chunk-xavlfXQ2.js";import{n as ze}from"./main-KCATS47T.js";import{Ct as ku,V as R$,lt as dm}from"./chunk-Lo0QQjTd.js";import{Gn as mI,I as Ho,In as kI,P as Hc,Qt as Zp,X as Lc,an as by,dr as uD,en as _p,f as D,in as bp,k as GE,o as Ap,ot as ND,qt as XI,r as AD,vr as vI,wt as Qp,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";import{n as s,t as r}from"./chunk-DarCEgGK.js";function X(b,K){if(b&1&&(uD(0,`
        `),vi(1,`div`,47),uD(2,`
          `),vi(3,`em`)(4,`strong`),uD(5,`Backend Error:`),Lc(),uD(6,` `),_p(7,`span`,48),Lc(),uD(8,`
        `),Lc(),uD(9,`
      `)),b&2){let i=kI();fv(7),bp(`innerHTML`,i.errorStatus(),by)}}function ee(b,K){if(b&1&&(uD(0,`
        `),vi(1,`span`),uD(2,`
          `),vi(3,`b`),uD(4,`Metrics:`),Lc(),uD(5),ND(6,`date`),Lc(),uD(7,`
      `)),b&2){let i,s=kI();fv(5),Zp(` `,AD(6,3,(i=s.metrics())==null?null:i.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` |
          `,s.metrics()?.executionTime,`ms | `,s.metrics()?.totalItemCount,` items
        `)}}var U=20;var te=`assets/data`;var Y=`%5E`;var ne=`%25`;var ce=(()=>{class b{constructor(){this.http=D(ze),this.dataset=[],this.hideSubTitle=!1,this.metrics=Ho(void 0),this.paginationOptions=Ho(void 0),this.isCountEnabled=!0,this.isSelectEnabled=!1,this.isExpandEnabled=!1,this.odataVersion=2,this.odataQuery=``,this.processing=Ho(!0),this.errorStatus=Ho(``),this.isPageErrorTest=!1,this.status=Ho({text:`processing...`,class:`alert alert-danger`})}angularGridReady(i){this.angularGrid=i}ngOnInit(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:ku.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:ku.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:U,totalItems:0},presets:{filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`}],sorters:[{columnId:`name`,direction:`asc`}],pagination:{pageNumber:2,pageSize:U}},backendServiceApi:{service:new C,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:i,columnDef:s,columnFilterOperator:a,searchValues:d})=>{if(a===`Custom`&&s?.id===`name`){let c=d[0].replace(/\*/g,`.*`);return c=c.slice(0,1)+Y+c.slice(1),c=c.slice(0,-1)+`$'`,`matchesPattern(${i}, ${c})`}},version:this.odataVersion},onError:i=>{this.errorStatus.set(i.message),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,s){this.processing.set(i),s?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(i?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(i){let s$1=i.totalRecordCount;this.isCountEnabled&&(s$1=this.odataVersion===4?i[`@odata.count`]:i.d.__count),this.metrics()&&this.metrics.set(s(r({},this.metrics()),{totalItemCount:s$1})),this.paginationOptions.set(s(r({},this.gridOptions.pagination),{totalItems:s$1})),this.dataset=this.odataVersion===4?i.value:i.d.results,this.odataQuery=i.query}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`name`,searchTerms:[`A`],operator:`a*`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}getCustomerDataApiMock(i){return new Promise(s=>{let a=i.toLowerCase().split(`&`),d,c=0,w=``,T=100,x={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,/* @__PURE__ */ new Error(`Server timed out trying to retrieve data for the last page`);for(let f of a){if(f.includes(`$top=`)&&(d=+f.substring(5),d===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(c=+f.substring(6)),f.includes(`$orderby=`)&&(w=f.substring(9)),f.includes(`$filter=`)){let l=f.substring(8).replace(`%20`,` `);if(l.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${Y}(.*?)'\\)`,`i`),m=l.match(r)||[],S=m[1].trim();x[S]={type:`matchespattern`,term:`^`+m[2].trim()}}if(l.includes(`contains`)){let r=l.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),m=r[1].trim();x[m]={type:`substring`,term:r[2].trim()}}if(l.includes(`substringof`)){let r=l.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),m=r[2].trim();x[m]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(l.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(l);if(Array.isArray(S)){let u=S[1].trim();x[u]={type:r,term:S[2].trim()}}}if(l.includes(`startswith`)&&l.includes(`endswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],m=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();x[S]={type:`starts+ends`,term:[r[2].trim(),m[2].trim()]}}else if(l.includes(`startswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:`starts`,term:r[2].trim()}}else if(l.includes(`endswith`)){let r=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:`ends`,term:r[2].trim()}}if(l.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(w.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${te}/customers_100.json`).subscribe(f=>{let l=f;if(w?.length>0){let u=w.split(`,`);for(let P of u){let O=P.split(` `),k=O[0],_=E=>E;for(let E of k.split(`/`)){let o=_;_=A=>o(A)[E]}switch((O[1]??`asc`).toLocaleLowerCase()){case`asc`:l=l.sort((E,o)=>_(E).localeCompare(_(o)));break;case`desc`:l=l.sort((E,o)=>_(o).localeCompare(_(E)))}}}let r=c,m=l;if(x){for(let u in x)u in x&&(m=m.filter(P=>{let O=x[u].type,k=x[u].term,_=u;if(u?.indexOf(` `)!==-1){let o=u.split(` `);_=o[o.length-1]}let p,E=P;for(let o of _.split(`/`))p=E[o],E=p;if(p){let[o,A]=Array.isArray(k)?k:[k];switch(O){case`eq`:return p.toLowerCase()===o;case`ne`:return p.toLowerCase()!==o;case`le`:return p.toLowerCase()<=o;case`lt`:return p.toLowerCase()<o;case`gt`:return p.toLowerCase()>o;case`ge`:return p.toLowerCase()>=o;case`ends`:return p.toLowerCase().endsWith(o);case`starts`:return p.toLowerCase().startsWith(o);case`starts+ends`:return p.toLowerCase().startsWith(o)&&p.toLowerCase().endsWith(A);case`substring`:return p.toLowerCase().includes(o);case`matchespattern`:return new RegExp(o.replaceAll(ne,`.*`),`i`).test(p)}}}));T=m.length}r>m.length&&(i=i.replace(`$skip=${r}`,``),r=0);let S=m.slice(r,r+d);setTimeout(()=>{let u={query:i};this.isCountEnabled||(u.totalRecordCount=T),this.odataVersion===4?(u.value=S,this.isCountEnabled&&(u[`@odata.count`]=T)):(u.d={results:S},this.isCountEnabled&&(u.d.__count=T)),s(u)},100)})})}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i.change)}throwPageChangeError(){this.isPageErrorTest=!0,this.angularGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(i){return!0}handleOnBeforeSearchChange(i){return!0}handleOnBeforePaginationChange(i){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(i){return this.odataVersion=i,this.resetOptions({version:this.odataVersion}),!0}resetOptions(i){this.displaySpinner(!0);let s=this.gridOptions.backendServiceApi.service;s.updateOptions(i),s.clearFilters(),this.angularGrid?.filterService.clearFilters()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(s){return new(s||b)}}static{this.ɵcmp=GE({type:b,selectors:[[`ng-component`]],decls:196,vars:16,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example05.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`row`],[1,`col-sm-9`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/odata`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`text-danger`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-4`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`col-sm-8`],[`data-test`,`radioVersion`],[`for`,`radio2`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version2`,`id`,`radio2`,`checked`,``,3,`change`,`value`],[`for`,`radio4`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version4`,`id`,`radio4`,3,`change`,`value`],[`for`,`enableCount`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableCount`,`data-test`,`enable-count`,3,`click`,`checked`],[2,`font-weight`,`bold`],[`for`,`enableSelect`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableSelect`,`data-test`,`enable-select`,3,`click`,`checked`],[`for`,`enableExpand`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableExpand`,`data-test`,`enable-expand`,3,`click`,`checked`],[1,`row`,`mt-2`,`mb-1`],[1,`col-md-12`],[`data-test`,`throw-page-error-btn`,1,`btn`,`btn-outline-danger`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`ms-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[`gridId`,`grid5`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeSort`,`onBeforeSearchChange`,`onBeforePaginationChange`,`columns`,`options`,`paginationOptions`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`]],template:function(s,a){s&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 5: Grid connected to Backend Server with OData
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return a.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`
  `),vi(18,`div`,6),uD(19,`
    `),vi(20,`div`,7),uD(21,`
      `),vi(22,`div`,8),uD(23,`
        Sorting/Paging connected to a Backend OData Service (`),vi(24,`a`,9),uD(25,`Docs`),Lc(),uD(26,`).
        `),_p(27,`br`),uD(28,`
        `),vi(29,`ul`,10),uD(30,`
          `),vi(31,`li`),uD(32,`Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported`),Lc(),uD(33,`
          `),vi(34,`li`),uD(35,`This example also demos the Grid State feature, open the console log to see the changes`),Lc(),uD(36,`
          `),vi(37,`li`),uD(38,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),Lc(),uD(39,`
          `),vi(40,`ul`),uD(41,`
            `),vi(42,`li`),uD(43,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),Lc(),uD(44,`
            `),vi(45,`li`),uD(46,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),Lc(),uD(47,`
          `),Lc(),uD(48,`
          `),vi(49,`li`),uD(50,`OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)`),Lc(),uD(51,`
          `),vi(52,`li`),uD(53,`
            You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
            `),vi(54,`a`,11),uD(55,`Docs - Grid Preset`),Lc(),uD(56,`
          `),Lc(),uD(57,`
          `),vi(58,`li`),uD(59,`
            `),vi(60,`span`,12),uD(61,`NOTE:`),Lc(),uD(62,` For demo purposes, the last column (filter & sort) will always throw an error and its
            only purpose is to demo what would happen when you encounter a backend server error (the UI should rollback to previous state
            before you did the action). Also changing Page Size to 50,000 will also throw which again is for demo purposes.
          `),Lc(),uD(63,`
        `),Lc(),uD(64,`
      `),Lc(),uD(65,`
    `),Lc(),uD(66,`
    `),vi(67,`div`,13),uD(68,`
      `),mI(69,X,10,1),Lc(),uD(70,`
  `),Lc(),uD(71,`

  `),vi(72,`div`,6),uD(73,`
    `),vi(74,`div`,14),uD(75,`
      `),vi(76,`div`,15),uD(77,`
        `),vi(78,`strong`),uD(79,`Status: `),Lc(),uD(80),vi(81,`span`,16),uD(82,`
          `),_p(83,`i`,17),uD(84,`
        `),Lc(),uD(85,`
      `),Lc(),uD(86,`
    `),Lc(),uD(87,`
    `),vi(88,`div`,18),uD(89,`
      `),vi(90,`div`,19),uD(91,`
        `),vi(92,`strong`),uD(93,`OData Query:`),Lc(),uD(94,` `),vi(95,`span`,20),uD(96),Lc(),uD(97,`
      `),Lc(),uD(98,`
    `),Lc(),uD(99,`
  `),Lc(),uD(100,`

  `),vi(101,`div`,6),uD(102,`
    `),vi(103,`div`,21),uD(104,`
      `),vi(105,`button`,22),Ap(`click`,function(){return a.setFiltersDynamically()}),uD(106,`
        Set Filters Dynamically
      `),Lc(),uD(107,`
      `),vi(108,`button`,23),Ap(`click`,function(){return a.setSortingDynamically()}),uD(109,`
        Set Sorting Dynamically
      `),Lc(),uD(110,`
      `),_p(111,`br`),uD(112,`
      `),mI(113,ee,8,6),Lc(),uD(114,`

    `),vi(115,`div`,24),uD(116,`
      `),vi(117,`label`),uD(118,`OData Version: `),Lc(),uD(119,`
      `),vi(120,`span`,25),uD(121,`
        `),vi(122,`label`,26),uD(123,`
          `),vi(124,`input`,27),Ap(`change`,function(){return a.setOdataVersion(2)}),Lc(),uD(125,`
          2
        `),Lc(),uD(126,`
        `),vi(127,`label`,28),uD(128,`
          `),vi(129,`input`,29),Ap(`change`,function(){return a.setOdataVersion(4)}),Lc(),uD(130,` 4
        `),Lc(),uD(131,`
      `),Lc(),uD(132,`
      `),vi(133,`label`,30),uD(134,`
        `),vi(135,`input`,31),Ap(`click`,function(){return a.changeCountEnableFlag()}),Lc(),uD(136,`
        `),vi(137,`span`,32),uD(138,`Enable Count`),Lc(),uD(139,` (add to OData query)
      `),Lc(),uD(140,`
      `),vi(141,`label`,33),uD(142,`
        `),vi(143,`input`,34),Ap(`click`,function(){return a.changeEnableSelectFlag()}),Lc(),uD(144,`
        `),vi(145,`span`,32),uD(146,`Enable Select`),Lc(),uD(147,` (add to OData query)
      `),Lc(),uD(148,`
      `),vi(149,`label`,35),uD(150,`
        `),vi(151,`input`,36),Ap(`click`,function(){return a.changeEnableExpandFlag()}),Lc(),uD(152,`
        `),vi(153,`span`,32),uD(154,`Enable Expand`),Lc(),uD(155,` (add to OData query)
      `),Lc(),uD(156,`
    `),Lc(),uD(157,`
  `),Lc(),uD(158,`
  `),vi(159,`div`,37),uD(160,`
    `),vi(161,`div`,38),uD(162,`
      `),vi(163,`button`,39),Ap(`click`,function(){return a.throwPageChangeError()}),uD(164,`
        `),vi(165,`span`),uD(166,`Throw Error Going to Last Page... `),Lc(),uD(167,`
        `),_p(168,`i`,40),uD(169,`
      `),Lc(),uD(170,`

      `),vi(171,`span`,41),uD(172,`
        `),vi(173,`label`),uD(174,`Programmatically go to first/last page:`),Lc(),uD(175,`
        `),vi(176,`div`,42),uD(177,`
          `),vi(178,`button`,43),Ap(`click`,function(){return a.goToFirstPage()}),uD(179,`
            `),_p(180,`i`,44),uD(181,`
          `),Lc(),uD(182,`
          `),vi(183,`button`,45),Ap(`click`,function(){return a.goToLastPage()}),uD(184,`
            `),_p(185,`i`,40),uD(186,`
          `),Lc(),uD(187,`
        `),Lc(),uD(188,`
      `),Lc(),uD(189,`
    `),Lc(),uD(190,`
  `),Lc(),uD(191,`

  `),vi(192,`angular-slickgrid`,46),Ap(`onAngularGridCreated`,function(c){return a.angularGridReady(c.detail)})(`onGridStateChanged`,function(c){return a.gridStateChanged(c.detail)})(`onBeforeSort`,function(c){return a.handleOnBeforeSort(c)})(`onBeforeSearchChange`,function(c){return a.handleOnBeforeSearchChange(c)})(`onBeforePaginationChange`,function(c){return a.handleOnBeforePaginationChange(c)}),uD(193,`
  `),Lc(),uD(194,`
`),Lc(),uD(195,`
`)),s&2&&(fv(69),vI(a.errorStatus()?69:-1),fv(7),XI(a.status().class),fv(4),Hc(` `,a.status().text,`
        `),fv(),bp(`hidden`,!a.processing()),fv(15),Qp(a.odataQuery),fv(17),vI(a.metrics()?113:-1),fv(11),bp(`value`,2),fv(5),bp(`value`,4),fv(6),bp(`checked`,a.isCountEnabled),fv(8),bp(`checked`,a.isSelectEnabled),fv(8),bp(`checked`,a.isExpandEnabled),fv(41),bp(`columns`,a.columns)(`options`,a.gridOptions)(`paginationOptions`,a.paginationOptions())(`dataset`,a.dataset))},dependencies:[R$,dm],encapsulation:2})}}return b})();export{ce as Example5Component};
import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Ct as T,Dt as UE,En as iD,Kn as mp,Nn as jo,Nt as Vp,Qn as pI,Tt as Tp,Wn as mi,_n as fI,bt as SI,dt as Pc,f as Bp,hr as vp,ht as QI,ln as cy,o as Ac,qt as _D,vr as vv,yr as wD}from"./chunk-06EGdSfW.js";import{H as _W,b as Pm,st as ip}from"./chunk-CAMk6vEo.js";import{n as ze}from"./main-ZP4IXK6Z.js";import{t as C}from"./chunk-BsilNgu2.js";function X(b,K){if(b&1&&(iD(0,`
        `),mi(1,`div`,47),iD(2,`
          `),mi(3,`em`)(4,`strong`),iD(5,`Backend Error:`),Ac(),iD(6,` `),vp(7,`span`,48),Ac(),iD(8,`
        `),Ac(),iD(9,`
      `)),b&2){let i=SI();cy(7),mp(`innerHTML`,i.errorStatus(),vv)}}function ee(b,K){if(b&1&&(iD(0,`
        `),mi(1,`span`),iD(2,`
          `),mi(3,`b`),iD(4,`Metrics:`),Ac(),iD(5),wD(6,`date`),Ac(),iD(7,`
      `)),b&2){let i=SI();cy(5),Bp(` `,_D(6,3,i.metrics()?.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,i.metrics()?.executionTime,`ms |
          `,i.metrics()?.totalItemCount,` items
        `)}}var U=20;var te=`assets/data`;var Y=`%5E`;var ne=`%25`;var ce=(()=>{class b{constructor(){this.http=T(ze),this.dataset=[],this.hideSubTitle=!1,this.metrics=jo(void 0),this.paginationOptions=jo(void 0),this.isCountEnabled=!0,this.isSelectEnabled=!1,this.isExpandEnabled=!1,this.odataVersion=2,this.odataQuery=``,this.processing=jo(!0),this.errorStatus=jo(``),this.isPageErrorTest=!1,this.status=jo({text:`processing...`,class:`alert alert-danger`})}angularGridReady(i){this.angularGrid=i}ngOnInit(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:ip.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:ip.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:U,totalItems:0},presets:{filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`}],sorters:[{columnId:`name`,direction:`asc`}],pagination:{pageNumber:2,pageSize:U}},backendServiceApi:{service:new C,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:i,columnDef:m,columnFilterOperator:a,searchValues:s})=>{if(a===`Custom`&&m?.id===`name`){let d=s[0].replace(/\*/g,`.*`);return d=d.slice(0,1)+Y+d.slice(1),d=d.slice(0,-1)+`$'`,`matchesPattern(${i}, ${d})`}},version:this.odataVersion},onError:i=>{this.errorStatus.set(i.message),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,m){this.processing.set(i),m?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(i?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(i){let m=i.totalRecordCount;this.isCountEnabled&&(m=this.odataVersion===4?i[`@odata.count`]:i.d.__count),this.metrics()&&this.metrics.set(s(r({},this.metrics()),{totalItemCount:m})),this.paginationOptions.set(s(r({},this.gridOptions.pagination),{totalItems:m})),this.dataset=this.odataVersion===4?i.value:i.d.results,this.odataQuery=i.query}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`name`,searchTerms:[`A`],operator:`a*`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}getCustomerDataApiMock(i){return new Promise(m=>{let a=i.toLowerCase().split(`&`),s,d=0,w=``,T=100,x={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of a){if(f.includes(`$top=`)&&(s=+f.substring(5),s===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(d=+f.substring(6)),f.includes(`$orderby=`)&&(w=f.substring(9)),f.includes(`$filter=`)){let l=f.substring(8).replace(`%20`,` `);if(l.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${Y}(.*?)'\\)`,`i`),c=l.match(r)||[],S=c[1].trim();x[S]={type:`matchespattern`,term:`^`+c[2].trim()}}if(l.includes(`contains`)){let r=l.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),c=r[1].trim();x[c]={type:`substring`,term:r[2].trim()}}if(l.includes(`substringof`)){let r=l.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),c=r[2].trim();x[c]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(l.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(l);if(Array.isArray(S)){let u=S[1].trim();x[u]={type:r,term:S[2].trim()}}}if(l.includes(`startswith`)&&l.includes(`endswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],c=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();x[S]={type:`starts+ends`,term:[r[2].trim(),c[2].trim()]}}else if(l.includes(`startswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),c=r[1].trim();x[c]={type:`starts`,term:r[2].trim()}}else if(l.includes(`endswith`)){let r=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),c=r[1].trim();x[c]={type:`ends`,term:r[2].trim()}}if(l.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(w.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${te}/customers_100.json`).subscribe(f=>{let l=f;if(w?.length>0){let u=w.split(`,`);for(let P of u){let O=P.split(` `),k=O[0],_=E=>E;for(let E of k.split(`/`)){let o=_;_=A=>o(A)[E]}switch((O[1]??`asc`).toLocaleLowerCase()){case`asc`:l=l.sort((E,o)=>_(E).localeCompare(_(o)));break;case`desc`:l=l.sort((E,o)=>_(o).localeCompare(_(E)));break}}}let r=d,c=l;if(x){for(let u in x)u in x&&(c=c.filter(P=>{let O=x[u].type,k=x[u].term,_=u;if(u?.indexOf(` `)!==-1){let o=u.split(` `);_=o[o.length-1]}let p,E=P;for(let o of _.split(`/`))p=E[o],E=p;if(p){let[o,A]=Array.isArray(k)?k:[k];switch(O){case`eq`:return p.toLowerCase()===o;case`ne`:return p.toLowerCase()!==o;case`le`:return p.toLowerCase()<=o;case`lt`:return p.toLowerCase()<o;case`gt`:return p.toLowerCase()>o;case`ge`:return p.toLowerCase()>=o;case`ends`:return p.toLowerCase().endsWith(o);case`starts`:return p.toLowerCase().startsWith(o);case`starts+ends`:return p.toLowerCase().startsWith(o)&&p.toLowerCase().endsWith(A);case`substring`:return p.toLowerCase().includes(o);case`matchespattern`:return new RegExp(o.replaceAll(ne,`.*`),`i`).test(p)}}}));T=c.length}r>c.length&&(i=i.replace(`$skip=${r}`,``),r=0);let S=c.slice(r,r+s);setTimeout(()=>{let u={query:i};this.isCountEnabled||(u.totalRecordCount=T),this.odataVersion===4?(u.value=S,this.isCountEnabled&&(u[`@odata.count`]=T)):(u.d={results:S},this.isCountEnabled&&(u.d.__count=T)),m(u)},100)})})}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i.change)}throwPageChangeError(){this.isPageErrorTest=!0,this.angularGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(i){return!0}handleOnBeforeSearchChange(i){return!0}handleOnBeforePaginationChange(i){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(i){return this.odataVersion=i,this.resetOptions({version:this.odataVersion}),!0}resetOptions(i){this.displaySpinner(!0);let m=this.gridOptions.backendServiceApi.service;m.updateOptions(i),m.clearFilters(),this.angularGrid?.filterService.clearFilters()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(m){return new(m||b)}}static{this.ɵcmp=UE({type:b,selectors:[[`ng-component`]],decls:196,vars:16,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example05.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`row`],[1,`col-sm-9`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/odata`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`text-danger`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-4`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`col-sm-8`],[`data-test`,`radioVersion`],[`for`,`radio2`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version2`,`id`,`radio2`,`checked`,``,3,`change`,`value`],[`for`,`radio4`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version4`,`id`,`radio4`,3,`change`,`value`],[`for`,`enableCount`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableCount`,`data-test`,`enable-count`,3,`click`,`checked`],[2,`font-weight`,`bold`],[`for`,`enableSelect`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableSelect`,`data-test`,`enable-select`,3,`click`,`checked`],[`for`,`enableExpand`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableExpand`,`data-test`,`enable-expand`,3,`click`,`checked`],[1,`row`,`mt-2`,`mb-1`],[1,`col-md-12`],[`data-test`,`throw-page-error-btn`,1,`btn`,`btn-outline-danger`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`ms-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[`gridId`,`grid5`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeSort`,`onBeforeSearchChange`,`onBeforePaginationChange`,`columns`,`options`,`paginationOptions`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`]],template:function(m,a){m&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 5: Grid connected to Backend Server with OData
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return a.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`
  `),mi(18,`div`,6),iD(19,`
    `),mi(20,`div`,7),iD(21,`
      `),mi(22,`div`,8),iD(23,`
        Sorting/Paging connected to a Backend OData Service (`),mi(24,`a`,9),iD(25,`Docs`),Ac(),iD(26,`).
        `),vp(27,`br`),iD(28,`
        `),mi(29,`ul`,10),iD(30,`
          `),mi(31,`li`),iD(32,`Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported`),Ac(),iD(33,`
          `),mi(34,`li`),iD(35,`This example also demos the Grid State feature, open the console log to see the changes`),Ac(),iD(36,`
          `),mi(37,`li`),iD(38,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),Ac(),iD(39,`
          `),mi(40,`ul`),iD(41,`
            `),mi(42,`li`),iD(43,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),Ac(),iD(44,`
            `),mi(45,`li`),iD(46,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),Ac(),iD(47,`
          `),Ac(),iD(48,`
          `),mi(49,`li`),iD(50,`OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)`),Ac(),iD(51,`
          `),mi(52,`li`),iD(53,`
            You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
            `),mi(54,`a`,11),iD(55,`Docs - Grid Preset`),Ac(),iD(56,`
          `),Ac(),iD(57,`
          `),mi(58,`li`),iD(59,`
            `),mi(60,`span`,12),iD(61,`NOTE:`),Ac(),iD(62,` For demo purposes, the last column (filter & sort) will always throw an error and its
            only purpose is to demo what would happen when you encounter a backend server error (the UI should rollback to previous state
            before you did the action). Also changing Page Size to 50,000 will also throw which again is for demo purposes.
          `),Ac(),iD(63,`
        `),Ac(),iD(64,`
      `),Ac(),iD(65,`
    `),Ac(),iD(66,`
    `),mi(67,`div`,13),iD(68,`
      `),fI(69,X,10,1),Ac(),iD(70,`
  `),Ac(),iD(71,`

  `),mi(72,`div`,6),iD(73,`
    `),mi(74,`div`,14),iD(75,`
      `),mi(76,`div`,15),iD(77,`
        `),mi(78,`strong`),iD(79,`Status: `),Ac(),iD(80),mi(81,`span`,16),iD(82,`
          `),vp(83,`i`,17),iD(84,`
        `),Ac(),iD(85,`
      `),Ac(),iD(86,`
    `),Ac(),iD(87,`
    `),mi(88,`div`,18),iD(89,`
      `),mi(90,`div`,19),iD(91,`
        `),mi(92,`strong`),iD(93,`OData Query:`),Ac(),iD(94,` `),mi(95,`span`,20),iD(96),Ac(),iD(97,`
      `),Ac(),iD(98,`
    `),Ac(),iD(99,`
  `),Ac(),iD(100,`

  `),mi(101,`div`,6),iD(102,`
    `),mi(103,`div`,21),iD(104,`
      `),mi(105,`button`,22),Tp(`click`,function(){return a.setFiltersDynamically()}),iD(106,`
        Set Filters Dynamically
      `),Ac(),iD(107,`
      `),mi(108,`button`,23),Tp(`click`,function(){return a.setSortingDynamically()}),iD(109,`
        Set Sorting Dynamically
      `),Ac(),iD(110,`
      `),vp(111,`br`),iD(112,`
      `),fI(113,ee,8,6),Ac(),iD(114,`

    `),mi(115,`div`,24),iD(116,`
      `),mi(117,`label`),iD(118,`OData Version: `),Ac(),iD(119,`
      `),mi(120,`span`,25),iD(121,`
        `),mi(122,`label`,26),iD(123,`
          `),mi(124,`input`,27),Tp(`change`,function(){return a.setOdataVersion(2)}),Ac(),iD(125,`
          2
        `),Ac(),iD(126,`
        `),mi(127,`label`,28),iD(128,`
          `),mi(129,`input`,29),Tp(`change`,function(){return a.setOdataVersion(4)}),Ac(),iD(130,` 4
        `),Ac(),iD(131,`
      `),Ac(),iD(132,`
      `),mi(133,`label`,30),iD(134,`
        `),mi(135,`input`,31),Tp(`click`,function(){return a.changeCountEnableFlag()}),Ac(),iD(136,`
        `),mi(137,`span`,32),iD(138,`Enable Count`),Ac(),iD(139,` (add to OData query)
      `),Ac(),iD(140,`
      `),mi(141,`label`,33),iD(142,`
        `),mi(143,`input`,34),Tp(`click`,function(){return a.changeEnableSelectFlag()}),Ac(),iD(144,`
        `),mi(145,`span`,32),iD(146,`Enable Select`),Ac(),iD(147,` (add to OData query)
      `),Ac(),iD(148,`
      `),mi(149,`label`,35),iD(150,`
        `),mi(151,`input`,36),Tp(`click`,function(){return a.changeEnableExpandFlag()}),Ac(),iD(152,`
        `),mi(153,`span`,32),iD(154,`Enable Expand`),Ac(),iD(155,` (add to OData query)
      `),Ac(),iD(156,`
    `),Ac(),iD(157,`
  `),Ac(),iD(158,`
  `),mi(159,`div`,37),iD(160,`
    `),mi(161,`div`,38),iD(162,`
      `),mi(163,`button`,39),Tp(`click`,function(){return a.throwPageChangeError()}),iD(164,`
        `),mi(165,`span`),iD(166,`Throw Error Going to Last Page... `),Ac(),iD(167,`
        `),vp(168,`i`,40),iD(169,`
      `),Ac(),iD(170,`

      `),mi(171,`span`,41),iD(172,`
        `),mi(173,`label`),iD(174,`Programmatically go to first/last page:`),Ac(),iD(175,`
        `),mi(176,`div`,42),iD(177,`
          `),mi(178,`button`,43),Tp(`click`,function(){return a.goToFirstPage()}),iD(179,`
            `),vp(180,`i`,44),iD(181,`
          `),Ac(),iD(182,`
          `),mi(183,`button`,45),Tp(`click`,function(){return a.goToLastPage()}),iD(184,`
            `),vp(185,`i`,40),iD(186,`
          `),Ac(),iD(187,`
        `),Ac(),iD(188,`
      `),Ac(),iD(189,`
    `),Ac(),iD(190,`
  `),Ac(),iD(191,`

  `),mi(192,`angular-slickgrid`,46),Tp(`onAngularGridCreated`,function(d){return a.angularGridReady(d.detail)})(`onGridStateChanged`,function(d){return a.gridStateChanged(d.detail)})(`onBeforeSort`,function(d){return a.handleOnBeforeSort(d)})(`onBeforeSearchChange`,function(d){return a.handleOnBeforeSearchChange(d)})(`onBeforePaginationChange`,function(d){return a.handleOnBeforePaginationChange(d)}),iD(193,`
  `),Ac(),iD(194,`
`),Ac(),iD(195,`
`)),m&2&&(cy(69),pI(a.errorStatus()?69:-1),cy(7),QI(a.status().class),cy(4),Pc(` `,a.status().text,`
        `),cy(),mp(`hidden`,!a.processing()),cy(15),Vp(a.odataQuery),cy(17),pI(a.metrics()?113:-1),cy(11),mp(`value`,2),cy(5),mp(`value`,4),cy(6),mp(`checked`,a.isCountEnabled),cy(8),mp(`checked`,a.isSelectEnabled),cy(8),mp(`checked`,a.isExpandEnabled),cy(41),mp(`columns`,a.columns)(`options`,a.gridOptions)(`paginationOptions`,a.paginationOptions())(`dataset`,a.dataset))},dependencies:[_W,Pm],encapsulation:2})}}return b})();export{ce as Example5Component};
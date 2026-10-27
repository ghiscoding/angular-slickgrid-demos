import{n as s,t as r}from"./chunk-DarCEgGK.js";import{$ as MD,In as lD,M as Ho,Qt as Zp,Tr as xD,V as JI,a as Ap,bt as RI,f as Cy,jn as jc,kr as yI,mn as dv,on as bp,p as D,tn as _p,xn as gI,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,l as D1,ut as jp}from"./chunk-Dk5kBPyv.js";import{n as ze}from"./main-BEH6XCIK.js";import{t as C}from"./chunk-Cdy9uPKG.js";function X(b,K){if(b&1&&(lD(0,`
        `),vi(1,`div`,47),lD(2,`
          `),vi(3,`em`)(4,`strong`),lD(5,`Backend Error:`),Rc(),lD(6,` `),_p(7,`span`,48),Rc(),lD(8,`
        `),Rc(),lD(9,`
      `)),b&2){let i=RI();dv(7),bp(`innerHTML`,i.errorStatus(),Cy)}}function ee(b,K){if(b&1&&(lD(0,`
        `),vi(1,`span`),lD(2,`
          `),vi(3,`b`),lD(4,`Metrics:`),Rc(),lD(5),MD(6,`date`),Rc(),lD(7,`
      `)),b&2){let i,s=RI();dv(5),Zp(` `,xD(6,3,(i=s.metrics())==null?null:i.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` |
          `,s.metrics()?.executionTime,`ms | `,s.metrics()?.totalItemCount,` items
        `)}}var U=20;var te=`assets/data`;var Y=`%5E`;var ne=`%25`;var ce=(()=>{class b{constructor(){this.http=D(ze),this.dataset=[],this.hideSubTitle=!1,this.metrics=Ho(void 0),this.paginationOptions=Ho(void 0),this.isCountEnabled=!0,this.isSelectEnabled=!1,this.isExpandEnabled=!1,this.odataVersion=2,this.odataQuery=``,this.processing=Ho(!0),this.errorStatus=Ho(``),this.isPageErrorTest=!1,this.status=Ho({text:`processing...`,class:`alert alert-danger`})}angularGridReady(i){this.angularGrid=i}ngOnInit(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:uu.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:uu.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:U,totalItems:0},presets:{filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`}],sorters:[{columnId:`name`,direction:`asc`}],pagination:{pageNumber:2,pageSize:U}},backendServiceApi:{service:new C,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:i,columnDef:s,columnFilterOperator:a,searchValues:d})=>{if(a===`Custom`&&s?.id===`name`){let c=d[0].replace(/\*/g,`.*`);return c=c.slice(0,1)+Y+c.slice(1),c=c.slice(0,-1)+`$'`,`matchesPattern(${i}, ${c})`}},version:this.odataVersion},onError:i=>{this.errorStatus.set(i.message),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,s){this.processing.set(i),s?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(i?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(i){let s$1=i.totalRecordCount;this.isCountEnabled&&(s$1=this.odataVersion===4?i[`@odata.count`]:i.d.__count),this.metrics()&&this.metrics.set(s(r({},this.metrics()),{totalItemCount:s$1})),this.paginationOptions.set(s(r({},this.gridOptions.pagination),{totalItems:s$1})),this.dataset=this.odataVersion===4?i.value:i.d.results,this.odataQuery=i.query}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`name`,searchTerms:[`A`],operator:`a*`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}getCustomerDataApiMock(i){return new Promise(s=>{let a=i.toLowerCase().split(`&`),d,c=0,w=``,T=100,x={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of a){if(f.includes(`$top=`)&&(d=+f.substring(5),d===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(c=+f.substring(6)),f.includes(`$orderby=`)&&(w=f.substring(9)),f.includes(`$filter=`)){let l=f.substring(8).replace(`%20`,` `);if(l.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${Y}(.*?)'\\)`,`i`),m=l.match(r)||[],S=m[1].trim();x[S]={type:`matchespattern`,term:`^`+m[2].trim()}}if(l.includes(`contains`)){let r=l.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),m=r[1].trim();x[m]={type:`substring`,term:r[2].trim()}}if(l.includes(`substringof`)){let r=l.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),m=r[2].trim();x[m]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(l.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(l);if(Array.isArray(S)){let u=S[1].trim();x[u]={type:r,term:S[2].trim()}}}if(l.includes(`startswith`)&&l.includes(`endswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],m=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();x[S]={type:`starts+ends`,term:[r[2].trim(),m[2].trim()]}}else if(l.includes(`startswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:`starts`,term:r[2].trim()}}else if(l.includes(`endswith`)){let r=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:`ends`,term:r[2].trim()}}if(l.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(w.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${te}/customers_100.json`).subscribe(f=>{let l=f;if(w?.length>0){let u=w.split(`,`);for(let P of u){let O=P.split(` `),k=O[0],_=E=>E;for(let E of k.split(`/`)){let o=_;_=A=>o(A)[E]}switch((O[1]??`asc`).toLocaleLowerCase()){case`asc`:l=l.sort((E,o)=>_(E).localeCompare(_(o)));break;case`desc`:l=l.sort((E,o)=>_(o).localeCompare(_(E)))}}}let r=c,m=l;if(x){for(let u in x)u in x&&(m=m.filter(P=>{let O=x[u].type,k=x[u].term,_=u;if(u?.indexOf(` `)!==-1){let o=u.split(` `);_=o[o.length-1]}let p,E=P;for(let o of _.split(`/`))p=E[o],E=p;if(p){let[o,A]=Array.isArray(k)?k:[k];switch(O){case`eq`:return p.toLowerCase()===o;case`ne`:return p.toLowerCase()!==o;case`le`:return p.toLowerCase()<=o;case`lt`:return p.toLowerCase()<o;case`gt`:return p.toLowerCase()>o;case`ge`:return p.toLowerCase()>=o;case`ends`:return p.toLowerCase().endsWith(o);case`starts`:return p.toLowerCase().startsWith(o);case`starts+ends`:return p.toLowerCase().startsWith(o)&&p.toLowerCase().endsWith(A);case`substring`:return p.toLowerCase().includes(o);case`matchespattern`:return new RegExp(o.replaceAll(ne,`.*`),`i`).test(p)}}}));T=m.length}r>m.length&&(i=i.replace(`$skip=${r}`,``),r=0);let S=m.slice(r,r+d);setTimeout(()=>{let u={query:i};this.isCountEnabled||(u.totalRecordCount=T),this.odataVersion===4?(u.value=S,this.isCountEnabled&&(u[`@odata.count`]=T)):(u.d={results:S},this.isCountEnabled&&(u.d.__count=T)),s(u)},100)})})}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i.change)}throwPageChangeError(){this.isPageErrorTest=!0,this.angularGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(i){return!0}handleOnBeforeSearchChange(i){return!0}handleOnBeforePaginationChange(i){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(i){return this.odataVersion=i,this.resetOptions({version:this.odataVersion}),!0}resetOptions(i){this.displaySpinner(!0);let s=this.gridOptions.backendServiceApi.service;s.updateOptions(i),s.clearFilters(),this.angularGrid?.filterService.clearFilters()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(s){return new(s||b)}}static{this.ɵcmp=WE({type:b,selectors:[[`ng-component`]],decls:196,vars:16,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example05.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`row`],[1,`col-sm-9`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/odata`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`text-danger`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-4`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`col-sm-8`],[`data-test`,`radioVersion`],[`for`,`radio2`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version2`,`id`,`radio2`,`checked`,``,3,`change`,`value`],[`for`,`radio4`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version4`,`id`,`radio4`,3,`change`,`value`],[`for`,`enableCount`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableCount`,`data-test`,`enable-count`,3,`click`,`checked`],[2,`font-weight`,`bold`],[`for`,`enableSelect`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableSelect`,`data-test`,`enable-select`,3,`click`,`checked`],[`for`,`enableExpand`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableExpand`,`data-test`,`enable-expand`,3,`click`,`checked`],[1,`row`,`mt-2`,`mb-1`],[1,`col-md-12`],[`data-test`,`throw-page-error-btn`,1,`btn`,`btn-outline-danger`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`ms-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[`gridId`,`grid5`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeSort`,`onBeforeSearchChange`,`onBeforePaginationChange`,`columns`,`options`,`paginationOptions`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`]],template:function(s,a){s&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 5: Grid connected to Backend Server with OData
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return a.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`
  `),vi(18,`div`,6),lD(19,`
    `),vi(20,`div`,7),lD(21,`
      `),vi(22,`div`,8),lD(23,`
        Sorting/Paging connected to a Backend OData Service (`),vi(24,`a`,9),lD(25,`Docs`),Rc(),lD(26,`).
        `),_p(27,`br`),lD(28,`
        `),vi(29,`ul`,10),lD(30,`
          `),vi(31,`li`),lD(32,`Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported`),Rc(),lD(33,`
          `),vi(34,`li`),lD(35,`This example also demos the Grid State feature, open the console log to see the changes`),Rc(),lD(36,`
          `),vi(37,`li`),lD(38,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),Rc(),lD(39,`
          `),vi(40,`ul`),lD(41,`
            `),vi(42,`li`),lD(43,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),Rc(),lD(44,`
            `),vi(45,`li`),lD(46,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),Rc(),lD(47,`
          `),Rc(),lD(48,`
          `),vi(49,`li`),lD(50,`OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)`),Rc(),lD(51,`
          `),vi(52,`li`),lD(53,`
            You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
            `),vi(54,`a`,11),lD(55,`Docs - Grid Preset`),Rc(),lD(56,`
          `),Rc(),lD(57,`
          `),vi(58,`li`),lD(59,`
            `),vi(60,`span`,12),lD(61,`NOTE:`),Rc(),lD(62,` For demo purposes, the last column (filter & sort) will always throw an error and its
            only purpose is to demo what would happen when you encounter a backend server error (the UI should rollback to previous state
            before you did the action). Also changing Page Size to 50,000 will also throw which again is for demo purposes.
          `),Rc(),lD(63,`
        `),Rc(),lD(64,`
      `),Rc(),lD(65,`
    `),Rc(),lD(66,`
    `),vi(67,`div`,13),lD(68,`
      `),gI(69,X,10,1),Rc(),lD(70,`
  `),Rc(),lD(71,`

  `),vi(72,`div`,6),lD(73,`
    `),vi(74,`div`,14),lD(75,`
      `),vi(76,`div`,15),lD(77,`
        `),vi(78,`strong`),lD(79,`Status: `),Rc(),lD(80),vi(81,`span`,16),lD(82,`
          `),_p(83,`i`,17),lD(84,`
        `),Rc(),lD(85,`
      `),Rc(),lD(86,`
    `),Rc(),lD(87,`
    `),vi(88,`div`,18),lD(89,`
      `),vi(90,`div`,19),lD(91,`
        `),vi(92,`strong`),lD(93,`OData Query:`),Rc(),lD(94,` `),vi(95,`span`,20),lD(96),Rc(),lD(97,`
      `),Rc(),lD(98,`
    `),Rc(),lD(99,`
  `),Rc(),lD(100,`

  `),vi(101,`div`,6),lD(102,`
    `),vi(103,`div`,21),lD(104,`
      `),vi(105,`button`,22),Ap(`click`,function(){return a.setFiltersDynamically()}),lD(106,`
        Set Filters Dynamically
      `),Rc(),lD(107,`
      `),vi(108,`button`,23),Ap(`click`,function(){return a.setSortingDynamically()}),lD(109,`
        Set Sorting Dynamically
      `),Rc(),lD(110,`
      `),_p(111,`br`),lD(112,`
      `),gI(113,ee,8,6),Rc(),lD(114,`

    `),vi(115,`div`,24),lD(116,`
      `),vi(117,`label`),lD(118,`OData Version: `),Rc(),lD(119,`
      `),vi(120,`span`,25),lD(121,`
        `),vi(122,`label`,26),lD(123,`
          `),vi(124,`input`,27),Ap(`change`,function(){return a.setOdataVersion(2)}),Rc(),lD(125,`
          2
        `),Rc(),lD(126,`
        `),vi(127,`label`,28),lD(128,`
          `),vi(129,`input`,29),Ap(`change`,function(){return a.setOdataVersion(4)}),Rc(),lD(130,` 4
        `),Rc(),lD(131,`
      `),Rc(),lD(132,`
      `),vi(133,`label`,30),lD(134,`
        `),vi(135,`input`,31),Ap(`click`,function(){return a.changeCountEnableFlag()}),Rc(),lD(136,`
        `),vi(137,`span`,32),lD(138,`Enable Count`),Rc(),lD(139,` (add to OData query)
      `),Rc(),lD(140,`
      `),vi(141,`label`,33),lD(142,`
        `),vi(143,`input`,34),Ap(`click`,function(){return a.changeEnableSelectFlag()}),Rc(),lD(144,`
        `),vi(145,`span`,32),lD(146,`Enable Select`),Rc(),lD(147,` (add to OData query)
      `),Rc(),lD(148,`
      `),vi(149,`label`,35),lD(150,`
        `),vi(151,`input`,36),Ap(`click`,function(){return a.changeEnableExpandFlag()}),Rc(),lD(152,`
        `),vi(153,`span`,32),lD(154,`Enable Expand`),Rc(),lD(155,` (add to OData query)
      `),Rc(),lD(156,`
    `),Rc(),lD(157,`
  `),Rc(),lD(158,`
  `),vi(159,`div`,37),lD(160,`
    `),vi(161,`div`,38),lD(162,`
      `),vi(163,`button`,39),Ap(`click`,function(){return a.throwPageChangeError()}),lD(164,`
        `),vi(165,`span`),lD(166,`Throw Error Going to Last Page... `),Rc(),lD(167,`
        `),_p(168,`i`,40),lD(169,`
      `),Rc(),lD(170,`

      `),vi(171,`span`,41),lD(172,`
        `),vi(173,`label`),lD(174,`Programmatically go to first/last page:`),Rc(),lD(175,`
        `),vi(176,`div`,42),lD(177,`
          `),vi(178,`button`,43),Ap(`click`,function(){return a.goToFirstPage()}),lD(179,`
            `),_p(180,`i`,44),lD(181,`
          `),Rc(),lD(182,`
          `),vi(183,`button`,45),Ap(`click`,function(){return a.goToLastPage()}),lD(184,`
            `),_p(185,`i`,40),lD(186,`
          `),Rc(),lD(187,`
        `),Rc(),lD(188,`
      `),Rc(),lD(189,`
    `),Rc(),lD(190,`
  `),Rc(),lD(191,`

  `),vi(192,`angular-slickgrid`,46),Ap(`onAngularGridCreated`,function(c){return a.angularGridReady(c.detail)})(`onGridStateChanged`,function(c){return a.gridStateChanged(c.detail)})(`onBeforeSort`,function(c){return a.handleOnBeforeSort(c)})(`onBeforeSearchChange`,function(c){return a.handleOnBeforeSearchChange(c)})(`onBeforePaginationChange`,function(c){return a.handleOnBeforePaginationChange(c)}),lD(193,`
  `),Rc(),lD(194,`
`),Rc(),lD(195,`
`)),s&2&&(dv(69),yI(a.errorStatus()?69:-1),dv(7),JI(a.status().class),dv(4),jc(` `,a.status().text,`
        `),dv(),bp(`hidden`,!a.processing()),dv(15),Qp(a.odataQuery),dv(17),yI(a.metrics()?113:-1),dv(11),bp(`value`,2),dv(5),bp(`value`,4),dv(6),bp(`checked`,a.isCountEnabled),dv(8),bp(`checked`,a.isSelectEnabled),dv(8),bp(`checked`,a.isExpandEnabled),dv(41),bp(`columns`,a.columns)(`options`,a.gridOptions)(`paginationOptions`,a.paginationOptions())(`dataset`,a.dataset))},dependencies:[D1,jp],encapsulation:2})}}return b})();export{ce as Example5Component};
import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Dn as jp,Er as zE,Fn as mp,Gt as bD,Hn as oD,L as Lc,Rn as my,T as Hp,Wt as av,Z as NE,b as Fo,dn as gi,fr as wD,g as Dp,l as BI,m as D,on as fE,pn as gp,tn as dE,yr as xc}from"./chunk-B0w5H0p9.js";import{gt as q1,kt as zp,x as Iu}from"./chunk-C7G4ZLh2.js";import{t as Xe}from"./main-INAAVGOX.js";import{t as C}from"./chunk-d3NppWaY.js";function X(b,K){if(b&1&&(oD(0,`
        `),gi(1,`div`,47),oD(2,`
          `),gi(3,`em`)(4,`strong`),oD(5,`Backend Error:`),xc(),oD(6,` `),mp(7,`span`,48),xc(),oD(8,`
        `),xc(),oD(9,`
      `)),b&2){let i=NE();av(7),gp(`innerHTML`,i.errorStatus(),my)}}function ee(b,K){if(b&1&&(oD(0,`
        `),gi(1,`span`),oD(2,`
          `),gi(3,`b`),oD(4,`Metrics:`),xc(),oD(5),wD(6,`date`),xc(),oD(7,`
      `)),b&2){let i,s=NE();av(5),Hp(` `,bD(6,3,(i=s.metrics())==null?null:i.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,s.metrics()?.executionTime,`ms |
          `,s.metrics()?.totalItemCount,` items
        `)}}var U=20;var te=`assets/data`;var Y=`%5E`;var ne=`%25`;var ce=(()=>{class b{constructor(){this.http=D(Xe),this.dataset=[],this.hideSubTitle=!1,this.metrics=Fo(void 0),this.paginationOptions=Fo(void 0),this.isCountEnabled=!0,this.isSelectEnabled=!1,this.isExpandEnabled=!1,this.odataVersion=2,this.odataQuery=``,this.processing=Fo(!0),this.errorStatus=Fo(``),this.isPageErrorTest=!1,this.status=Fo({text:`processing...`,class:`alert alert-danger`})}angularGridReady(i){this.angularGrid=i}ngOnInit(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:Iu.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:Iu.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:U,totalItems:0},presets:{filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`}],sorters:[{columnId:`name`,direction:`asc`}],pagination:{pageNumber:2,pageSize:U}},backendServiceApi:{service:new C,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:i,columnDef:s,columnFilterOperator:a,searchValues:d})=>{if(a===`Custom`&&s?.id===`name`){let c=d[0].replace(/\*/g,`.*`);return c=c.slice(0,1)+Y+c.slice(1),c=c.slice(0,-1)+`$'`,`matchesPattern(${i}, ${c})`}},version:this.odataVersion},onError:i=>{this.errorStatus.set(i.message),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,s){this.processing.set(i),s?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(i?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(i){let s$1=i.totalRecordCount;this.isCountEnabled&&(s$1=this.odataVersion===4?i[`@odata.count`]:i.d.__count),this.metrics()&&this.metrics.set(s(r({},this.metrics()),{totalItemCount:s$1})),this.paginationOptions.set(s(r({},this.gridOptions.pagination),{totalItems:s$1})),this.dataset=this.odataVersion===4?i.value:i.d.results,this.odataQuery=i.query}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`name`,searchTerms:[`A`],operator:`a*`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}getCustomerDataApiMock(i){return new Promise(s=>{let a=i.toLowerCase().split(`&`),d,c=0,w=``,T=100,x={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of a){if(f.includes(`$top=`)&&(d=+f.substring(5),d===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(c=+f.substring(6)),f.includes(`$orderby=`)&&(w=f.substring(9)),f.includes(`$filter=`)){let l=f.substring(8).replace(`%20`,` `);if(l.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${Y}(.*?)'\\)`,`i`),m=l.match(r)||[],S=m[1].trim();x[S]={type:`matchespattern`,term:`^`+m[2].trim()}}if(l.includes(`contains`)){let r=l.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),m=r[1].trim();x[m]={type:`substring`,term:r[2].trim()}}if(l.includes(`substringof`)){let r=l.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),m=r[2].trim();x[m]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(l.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(l);if(Array.isArray(S)){let u=S[1].trim();x[u]={type:r,term:S[2].trim()}}}if(l.includes(`startswith`)&&l.includes(`endswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],m=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();x[S]={type:`starts+ends`,term:[r[2].trim(),m[2].trim()]}}else if(l.includes(`startswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:`starts`,term:r[2].trim()}}else if(l.includes(`endswith`)){let r=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),m=r[1].trim();x[m]={type:`ends`,term:r[2].trim()}}if(l.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(w.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${te}/customers_100.json`).subscribe(f=>{let l=f;if(w?.length>0){let u=w.split(`,`);for(let P of u){let O=P.split(` `),k=O[0],_=E=>E;for(let E of k.split(`/`)){let o=_;_=A=>o(A)[E]}switch((O[1]??`asc`).toLocaleLowerCase()){case`asc`:l=l.sort((E,o)=>_(E).localeCompare(_(o)));break;case`desc`:l=l.sort((E,o)=>_(o).localeCompare(_(E)));break}}}let r=c,m=l;if(x){for(let u in x)u in x&&(m=m.filter(P=>{let O=x[u].type,k=x[u].term,_=u;if(u?.indexOf(` `)!==-1){let o=u.split(` `);_=o[o.length-1]}let p,E=P;for(let o of _.split(`/`))p=E[o],E=p;if(p){let[o,A]=Array.isArray(k)?k:[k];switch(O){case`eq`:return p.toLowerCase()===o;case`ne`:return p.toLowerCase()!==o;case`le`:return p.toLowerCase()<=o;case`lt`:return p.toLowerCase()<o;case`gt`:return p.toLowerCase()>o;case`ge`:return p.toLowerCase()>=o;case`ends`:return p.toLowerCase().endsWith(o);case`starts`:return p.toLowerCase().startsWith(o);case`starts+ends`:return p.toLowerCase().startsWith(o)&&p.toLowerCase().endsWith(A);case`substring`:return p.toLowerCase().includes(o);case`matchespattern`:return new RegExp(o.replaceAll(ne,`.*`),`i`).test(p)}}}));T=m.length}r>m.length&&(i=i.replace(`$skip=${r}`,``),r=0);let S=m.slice(r,r+d);setTimeout(()=>{let u={query:i};this.isCountEnabled||(u.totalRecordCount=T),this.odataVersion===4?(u.value=S,this.isCountEnabled&&(u[`@odata.count`]=T)):(u.d={results:S},this.isCountEnabled&&(u.d.__count=T)),s(u)},100)})})}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i.change)}throwPageChangeError(){this.isPageErrorTest=!0,this.angularGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(i){return!0}handleOnBeforeSearchChange(i){return!0}handleOnBeforePaginationChange(i){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(i){return this.odataVersion=i,this.resetOptions({version:this.odataVersion}),!0}resetOptions(i){this.displaySpinner(!0);let s=this.gridOptions.backendServiceApi.service;s.updateOptions(i),s.clearFilters(),this.angularGrid?.filterService.clearFilters()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(s){return new(s||b)}}static{this.ɵcmp=BI({type:b,selectors:[[`ng-component`]],decls:196,vars:16,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example05.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`row`],[1,`col-sm-9`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/odata`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`text-danger`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-4`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`col-sm-8`],[`data-test`,`radioVersion`],[`for`,`radio2`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version2`,`id`,`radio2`,`checked`,``,3,`change`,`value`],[`for`,`radio4`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version4`,`id`,`radio4`,3,`change`,`value`],[`for`,`enableCount`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableCount`,`data-test`,`enable-count`,3,`click`,`checked`],[2,`font-weight`,`bold`],[`for`,`enableSelect`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableSelect`,`data-test`,`enable-select`,3,`click`,`checked`],[`for`,`enableExpand`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableExpand`,`data-test`,`enable-expand`,3,`click`,`checked`],[1,`row`,`mt-2`,`mb-1`],[1,`col-md-12`],[`data-test`,`throw-page-error-btn`,1,`btn`,`btn-outline-danger`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`ms-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[`gridId`,`grid5`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeSort`,`onBeforeSearchChange`,`onBeforePaginationChange`,`columns`,`options`,`paginationOptions`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`]],template:function(s,a){s&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 5: Grid connected to Backend Server with OData
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return a.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`
  `),gi(18,`div`,6),oD(19,`
    `),gi(20,`div`,7),oD(21,`
      `),gi(22,`div`,8),oD(23,`
        Sorting/Paging connected to a Backend OData Service (`),gi(24,`a`,9),oD(25,`Docs`),xc(),oD(26,`).
        `),mp(27,`br`),oD(28,`
        `),gi(29,`ul`,10),oD(30,`
          `),gi(31,`li`),oD(32,`Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported`),xc(),oD(33,`
          `),gi(34,`li`),oD(35,`This example also demos the Grid State feature, open the console log to see the changes`),xc(),oD(36,`
          `),gi(37,`li`),oD(38,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),xc(),oD(39,`
          `),gi(40,`ul`),oD(41,`
            `),gi(42,`li`),oD(43,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),xc(),oD(44,`
            `),gi(45,`li`),oD(46,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),xc(),oD(47,`
          `),xc(),oD(48,`
          `),gi(49,`li`),oD(50,`OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)`),xc(),oD(51,`
          `),gi(52,`li`),oD(53,`
            You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
            `),gi(54,`a`,11),oD(55,`Docs - Grid Preset`),xc(),oD(56,`
          `),xc(),oD(57,`
          `),gi(58,`li`),oD(59,`
            `),gi(60,`span`,12),oD(61,`NOTE:`),xc(),oD(62,` For demo purposes, the last column (filter & sort) will always throw an error and its
            only purpose is to demo what would happen when you encounter a backend server error (the UI should rollback to previous state
            before you did the action). Also changing Page Size to 50,000 will also throw which again is for demo purposes.
          `),xc(),oD(63,`
        `),xc(),oD(64,`
      `),xc(),oD(65,`
    `),xc(),oD(66,`
    `),gi(67,`div`,13),oD(68,`
      `),dE(69,X,10,1),xc(),oD(70,`
  `),xc(),oD(71,`

  `),gi(72,`div`,6),oD(73,`
    `),gi(74,`div`,14),oD(75,`
      `),gi(76,`div`,15),oD(77,`
        `),gi(78,`strong`),oD(79,`Status: `),xc(),oD(80),gi(81,`span`,16),oD(82,`
          `),mp(83,`i`,17),oD(84,`
        `),xc(),oD(85,`
      `),xc(),oD(86,`
    `),xc(),oD(87,`
    `),gi(88,`div`,18),oD(89,`
      `),gi(90,`div`,19),oD(91,`
        `),gi(92,`strong`),oD(93,`OData Query:`),xc(),oD(94,` `),gi(95,`span`,20),oD(96),xc(),oD(97,`
      `),xc(),oD(98,`
    `),xc(),oD(99,`
  `),xc(),oD(100,`

  `),gi(101,`div`,6),oD(102,`
    `),gi(103,`div`,21),oD(104,`
      `),gi(105,`button`,22),Dp(`click`,function(){return a.setFiltersDynamically()}),oD(106,`
        Set Filters Dynamically
      `),xc(),oD(107,`
      `),gi(108,`button`,23),Dp(`click`,function(){return a.setSortingDynamically()}),oD(109,`
        Set Sorting Dynamically
      `),xc(),oD(110,`
      `),mp(111,`br`),oD(112,`
      `),dE(113,ee,8,6),xc(),oD(114,`

    `),gi(115,`div`,24),oD(116,`
      `),gi(117,`label`),oD(118,`OData Version: `),xc(),oD(119,`
      `),gi(120,`span`,25),oD(121,`
        `),gi(122,`label`,26),oD(123,`
          `),gi(124,`input`,27),Dp(`change`,function(){return a.setOdataVersion(2)}),xc(),oD(125,`
          2
        `),xc(),oD(126,`
        `),gi(127,`label`,28),oD(128,`
          `),gi(129,`input`,29),Dp(`change`,function(){return a.setOdataVersion(4)}),xc(),oD(130,` 4
        `),xc(),oD(131,`
      `),xc(),oD(132,`
      `),gi(133,`label`,30),oD(134,`
        `),gi(135,`input`,31),Dp(`click`,function(){return a.changeCountEnableFlag()}),xc(),oD(136,`
        `),gi(137,`span`,32),oD(138,`Enable Count`),xc(),oD(139,` (add to OData query)
      `),xc(),oD(140,`
      `),gi(141,`label`,33),oD(142,`
        `),gi(143,`input`,34),Dp(`click`,function(){return a.changeEnableSelectFlag()}),xc(),oD(144,`
        `),gi(145,`span`,32),oD(146,`Enable Select`),xc(),oD(147,` (add to OData query)
      `),xc(),oD(148,`
      `),gi(149,`label`,35),oD(150,`
        `),gi(151,`input`,36),Dp(`click`,function(){return a.changeEnableExpandFlag()}),xc(),oD(152,`
        `),gi(153,`span`,32),oD(154,`Enable Expand`),xc(),oD(155,` (add to OData query)
      `),xc(),oD(156,`
    `),xc(),oD(157,`
  `),xc(),oD(158,`
  `),gi(159,`div`,37),oD(160,`
    `),gi(161,`div`,38),oD(162,`
      `),gi(163,`button`,39),Dp(`click`,function(){return a.throwPageChangeError()}),oD(164,`
        `),gi(165,`span`),oD(166,`Throw Error Going to Last Page... `),xc(),oD(167,`
        `),mp(168,`i`,40),oD(169,`
      `),xc(),oD(170,`

      `),gi(171,`span`,41),oD(172,`
        `),gi(173,`label`),oD(174,`Programmatically go to first/last page:`),xc(),oD(175,`
        `),gi(176,`div`,42),oD(177,`
          `),gi(178,`button`,43),Dp(`click`,function(){return a.goToFirstPage()}),oD(179,`
            `),mp(180,`i`,44),oD(181,`
          `),xc(),oD(182,`
          `),gi(183,`button`,45),Dp(`click`,function(){return a.goToLastPage()}),oD(184,`
            `),mp(185,`i`,40),oD(186,`
          `),xc(),oD(187,`
        `),xc(),oD(188,`
      `),xc(),oD(189,`
    `),xc(),oD(190,`
  `),xc(),oD(191,`

  `),gi(192,`angular-slickgrid`,46),Dp(`onAngularGridCreated`,function(c){return a.angularGridReady(c.detail)})(`onGridStateChanged`,function(c){return a.gridStateChanged(c.detail)})(`onBeforeSort`,function(c){return a.handleOnBeforeSort(c)})(`onBeforeSearchChange`,function(c){return a.handleOnBeforeSearchChange(c)})(`onBeforePaginationChange`,function(c){return a.handleOnBeforePaginationChange(c)}),oD(193,`
  `),xc(),oD(194,`
`),xc(),oD(195,`
`)),s&2&&(av(69),fE(a.errorStatus()?69:-1),av(7),zE(a.status().class),av(4),Lc(` `,a.status().text,`
        `),av(),gp(`hidden`,!a.processing()),av(15),jp(a.odataQuery),av(17),fE(a.metrics()?113:-1),av(11),gp(`value`,2),av(5),gp(`value`,4),av(6),gp(`checked`,a.isCountEnabled),av(8),gp(`checked`,a.isSelectEnabled),av(8),gp(`checked`,a.isExpandEnabled),av(41),gp(`columns`,a.columns)(`options`,a.gridOptions)(`paginationOptions`,a.paginationOptions())(`dataset`,a.dataset))},dependencies:[q1,zp],encapsulation:2})}}return b})();export{ce as Example5Component};
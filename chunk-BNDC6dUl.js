import{n as s,t as r}from"./chunk-DarCEgGK.js";import{$ as Mp,C as Ei,E as Fc,En as iD,Et as SI,H as Iv,N as Gp,_ as D,_t as QI,b as Dp,c as BE,cn as ay,ct as Oc,en as _D,er as pI,f as Bo,hn as dI,jt as Tp,sr as qp,xr as wD}from"./chunk-CtIlL7jI.js";import{Ot as xz,T as Lm,bt as rp}from"./chunk-C1NeHYCu.js";import{n as ze}from"./main-JBJUR4DQ.js";import{t as C}from"./chunk-DxKazLAv.js";function X(b,K){if(b&1&&(iD(0,`
        `),Ei(1,`div`,47),iD(2,`
          `),Ei(3,`em`)(4,`strong`),iD(5,`Backend Error:`),Oc(),iD(6,` `),Tp(7,`span`,48),Oc(),iD(8,`
        `),Oc(),iD(9,`
      `)),b&2){let i=SI();ay(7),Dp(`innerHTML`,i.errorStatus(),Iv)}}function ee(b,K){if(b&1&&(iD(0,`
        `),Ei(1,`span`),iD(2,`
          `),Ei(3,`b`),iD(4,`Metrics:`),Oc(),iD(5),wD(6,`date`),Oc(),iD(7,`
      `)),b&2){let i=SI();ay(5),Gp(` `,_D(6,3,i.metrics()?.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,i.metrics()?.executionTime,`ms |
          `,i.metrics()?.totalItemCount,` items
        `)}}var U=20;var te=`assets/data`;var Y=`%5E`;var ne=`%25`;var ce=(()=>{class b{constructor(){this.http=D(ze),this.dataset=[],this.hideSubTitle=!1,this.metrics=Bo(void 0),this.paginationOptions=Bo(void 0),this.isCountEnabled=!0,this.isSelectEnabled=!1,this.isExpandEnabled=!1,this.odataVersion=2,this.odataQuery=``,this.processing=Bo(!0),this.errorStatus=Bo(``),this.isPageErrorTest=!1,this.status=Bo({text:`processing...`,class:`alert alert-danger`})}angularGridReady(i){this.angularGrid=i}ngOnInit(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:rp.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:rp.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:U,totalItems:0},presets:{filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`}],sorters:[{columnId:`name`,direction:`asc`}],pagination:{pageNumber:2,pageSize:U}},backendServiceApi:{service:new C,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:i,columnDef:m,columnFilterOperator:a,searchValues:s})=>{if(a===`Custom`&&m?.id===`name`){let d=s[0].replace(/\*/g,`.*`);return d=d.slice(0,1)+Y+d.slice(1),d=d.slice(0,-1)+`$'`,`matchesPattern(${i}, ${d})`}},version:this.odataVersion},onError:i=>{this.errorStatus.set(i.message),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,m){this.processing.set(i),m?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(i?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(i){let m=i.totalRecordCount;this.isCountEnabled&&(m=this.odataVersion===4?i[`@odata.count`]:i.d.__count),this.metrics()&&this.metrics.set(s(r({},this.metrics()),{totalItemCount:m})),this.paginationOptions.set(s(r({},this.gridOptions.pagination),{totalItems:m})),this.dataset=this.odataVersion===4?i.value:i.d.results,this.odataQuery=i.query}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`name`,searchTerms:[`A`],operator:`a*`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}getCustomerDataApiMock(i){return new Promise(m=>{let a=i.toLowerCase().split(`&`),s,d=0,w=``,T=100,x={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of a){if(f.includes(`$top=`)&&(s=+f.substring(5),s===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(d=+f.substring(6)),f.includes(`$orderby=`)&&(w=f.substring(9)),f.includes(`$filter=`)){let l=f.substring(8).replace(`%20`,` `);if(l.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${Y}(.*?)'\\)`,`i`),c=l.match(r)||[],S=c[1].trim();x[S]={type:`matchespattern`,term:`^`+c[2].trim()}}if(l.includes(`contains`)){let r=l.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),c=r[1].trim();x[c]={type:`substring`,term:r[2].trim()}}if(l.includes(`substringof`)){let r=l.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),c=r[2].trim();x[c]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(l.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(l);if(Array.isArray(S)){let u=S[1].trim();x[u]={type:r,term:S[2].trim()}}}if(l.includes(`startswith`)&&l.includes(`endswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],c=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();x[S]={type:`starts+ends`,term:[r[2].trim(),c[2].trim()]}}else if(l.includes(`startswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),c=r[1].trim();x[c]={type:`starts`,term:r[2].trim()}}else if(l.includes(`endswith`)){let r=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),c=r[1].trim();x[c]={type:`ends`,term:r[2].trim()}}if(l.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(w.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${te}/customers_100.json`).subscribe(f=>{let l=f;if(w?.length>0){let u=w.split(`,`);for(let P of u){let O=P.split(` `),k=O[0],_=E=>E;for(let E of k.split(`/`)){let o=_;_=A=>o(A)[E]}switch((O[1]??`asc`).toLocaleLowerCase()){case`asc`:l=l.sort((E,o)=>_(E).localeCompare(_(o)));break;case`desc`:l=l.sort((E,o)=>_(o).localeCompare(_(E)))}}}let r=d,c=l;if(x){for(let u in x)u in x&&(c=c.filter(P=>{let O=x[u].type,k=x[u].term,_=u;if(u?.indexOf(` `)!==-1){let o=u.split(` `);_=o[o.length-1]}let p,E=P;for(let o of _.split(`/`))p=E[o],E=p;if(p){let[o,A]=Array.isArray(k)?k:[k];switch(O){case`eq`:return p.toLowerCase()===o;case`ne`:return p.toLowerCase()!==o;case`le`:return p.toLowerCase()<=o;case`lt`:return p.toLowerCase()<o;case`gt`:return p.toLowerCase()>o;case`ge`:return p.toLowerCase()>=o;case`ends`:return p.toLowerCase().endsWith(o);case`starts`:return p.toLowerCase().startsWith(o);case`starts+ends`:return p.toLowerCase().startsWith(o)&&p.toLowerCase().endsWith(A);case`substring`:return p.toLowerCase().includes(o);case`matchespattern`:return new RegExp(o.replaceAll(ne,`.*`),`i`).test(p)}}}));T=c.length}r>c.length&&(i=i.replace(`$skip=${r}`,``),r=0);let S=c.slice(r,r+s);setTimeout(()=>{let u={query:i};this.isCountEnabled||(u.totalRecordCount=T),this.odataVersion===4?(u.value=S,this.isCountEnabled&&(u[`@odata.count`]=T)):(u.d={results:S},this.isCountEnabled&&(u.d.__count=T)),m(u)},100)})})}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i.change)}throwPageChangeError(){this.isPageErrorTest=!0,this.angularGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(i){return!0}handleOnBeforeSearchChange(i){return!0}handleOnBeforePaginationChange(i){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(i){return this.odataVersion=i,this.resetOptions({version:this.odataVersion}),!0}resetOptions(i){this.displaySpinner(!0);let m=this.gridOptions.backendServiceApi.service;m.updateOptions(i),m.clearFilters(),this.angularGrid?.filterService.clearFilters()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(m){return new(m||b)}}static{this.ɵcmp=BE({type:b,selectors:[[`ng-component`]],decls:196,vars:16,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example05.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`row`],[1,`col-sm-9`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/odata`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`text-danger`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-4`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`col-sm-8`],[`data-test`,`radioVersion`],[`for`,`radio2`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version2`,`id`,`radio2`,`checked`,``,3,`change`,`value`],[`for`,`radio4`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version4`,`id`,`radio4`,3,`change`,`value`],[`for`,`enableCount`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableCount`,`data-test`,`enable-count`,3,`click`,`checked`],[2,`font-weight`,`bold`],[`for`,`enableSelect`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableSelect`,`data-test`,`enable-select`,3,`click`,`checked`],[`for`,`enableExpand`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableExpand`,`data-test`,`enable-expand`,3,`click`,`checked`],[1,`row`,`mt-2`,`mb-1`],[1,`col-md-12`],[`data-test`,`throw-page-error-btn`,1,`btn`,`btn-outline-danger`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`ms-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[`gridId`,`grid5`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeSort`,`onBeforeSearchChange`,`onBeforePaginationChange`,`columns`,`options`,`paginationOptions`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`]],template:function(m,a){m&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 5: Grid connected to Backend Server with OData
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return a.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`
  `),Ei(18,`div`,6),iD(19,`
    `),Ei(20,`div`,7),iD(21,`
      `),Ei(22,`div`,8),iD(23,`
        Sorting/Paging connected to a Backend OData Service (`),Ei(24,`a`,9),iD(25,`Docs`),Oc(),iD(26,`).
        `),Tp(27,`br`),iD(28,`
        `),Ei(29,`ul`,10),iD(30,`
          `),Ei(31,`li`),iD(32,`Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported`),Oc(),iD(33,`
          `),Ei(34,`li`),iD(35,`This example also demos the Grid State feature, open the console log to see the changes`),Oc(),iD(36,`
          `),Ei(37,`li`),iD(38,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),Oc(),iD(39,`
          `),Ei(40,`ul`),iD(41,`
            `),Ei(42,`li`),iD(43,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),Oc(),iD(44,`
            `),Ei(45,`li`),iD(46,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),Oc(),iD(47,`
          `),Oc(),iD(48,`
          `),Ei(49,`li`),iD(50,`OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)`),Oc(),iD(51,`
          `),Ei(52,`li`),iD(53,`
            You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
            `),Ei(54,`a`,11),iD(55,`Docs - Grid Preset`),Oc(),iD(56,`
          `),Oc(),iD(57,`
          `),Ei(58,`li`),iD(59,`
            `),Ei(60,`span`,12),iD(61,`NOTE:`),Oc(),iD(62,` For demo purposes, the last column (filter & sort) will always throw an error and its
            only purpose is to demo what would happen when you encounter a backend server error (the UI should rollback to previous state
            before you did the action). Also changing Page Size to 50,000 will also throw which again is for demo purposes.
          `),Oc(),iD(63,`
        `),Oc(),iD(64,`
      `),Oc(),iD(65,`
    `),Oc(),iD(66,`
    `),Ei(67,`div`,13),iD(68,`
      `),dI(69,X,10,1),Oc(),iD(70,`
  `),Oc(),iD(71,`

  `),Ei(72,`div`,6),iD(73,`
    `),Ei(74,`div`,14),iD(75,`
      `),Ei(76,`div`,15),iD(77,`
        `),Ei(78,`strong`),iD(79,`Status: `),Oc(),iD(80),Ei(81,`span`,16),iD(82,`
          `),Tp(83,`i`,17),iD(84,`
        `),Oc(),iD(85,`
      `),Oc(),iD(86,`
    `),Oc(),iD(87,`
    `),Ei(88,`div`,18),iD(89,`
      `),Ei(90,`div`,19),iD(91,`
        `),Ei(92,`strong`),iD(93,`OData Query:`),Oc(),iD(94,` `),Ei(95,`span`,20),iD(96),Oc(),iD(97,`
      `),Oc(),iD(98,`
    `),Oc(),iD(99,`
  `),Oc(),iD(100,`

  `),Ei(101,`div`,6),iD(102,`
    `),Ei(103,`div`,21),iD(104,`
      `),Ei(105,`button`,22),Mp(`click`,function(){return a.setFiltersDynamically()}),iD(106,`
        Set Filters Dynamically
      `),Oc(),iD(107,`
      `),Ei(108,`button`,23),Mp(`click`,function(){return a.setSortingDynamically()}),iD(109,`
        Set Sorting Dynamically
      `),Oc(),iD(110,`
      `),Tp(111,`br`),iD(112,`
      `),dI(113,ee,8,6),Oc(),iD(114,`

    `),Ei(115,`div`,24),iD(116,`
      `),Ei(117,`label`),iD(118,`OData Version: `),Oc(),iD(119,`
      `),Ei(120,`span`,25),iD(121,`
        `),Ei(122,`label`,26),iD(123,`
          `),Ei(124,`input`,27),Mp(`change`,function(){return a.setOdataVersion(2)}),Oc(),iD(125,`
          2
        `),Oc(),iD(126,`
        `),Ei(127,`label`,28),iD(128,`
          `),Ei(129,`input`,29),Mp(`change`,function(){return a.setOdataVersion(4)}),Oc(),iD(130,` 4
        `),Oc(),iD(131,`
      `),Oc(),iD(132,`
      `),Ei(133,`label`,30),iD(134,`
        `),Ei(135,`input`,31),Mp(`click`,function(){return a.changeCountEnableFlag()}),Oc(),iD(136,`
        `),Ei(137,`span`,32),iD(138,`Enable Count`),Oc(),iD(139,` (add to OData query)
      `),Oc(),iD(140,`
      `),Ei(141,`label`,33),iD(142,`
        `),Ei(143,`input`,34),Mp(`click`,function(){return a.changeEnableSelectFlag()}),Oc(),iD(144,`
        `),Ei(145,`span`,32),iD(146,`Enable Select`),Oc(),iD(147,` (add to OData query)
      `),Oc(),iD(148,`
      `),Ei(149,`label`,35),iD(150,`
        `),Ei(151,`input`,36),Mp(`click`,function(){return a.changeEnableExpandFlag()}),Oc(),iD(152,`
        `),Ei(153,`span`,32),iD(154,`Enable Expand`),Oc(),iD(155,` (add to OData query)
      `),Oc(),iD(156,`
    `),Oc(),iD(157,`
  `),Oc(),iD(158,`
  `),Ei(159,`div`,37),iD(160,`
    `),Ei(161,`div`,38),iD(162,`
      `),Ei(163,`button`,39),Mp(`click`,function(){return a.throwPageChangeError()}),iD(164,`
        `),Ei(165,`span`),iD(166,`Throw Error Going to Last Page... `),Oc(),iD(167,`
        `),Tp(168,`i`,40),iD(169,`
      `),Oc(),iD(170,`

      `),Ei(171,`span`,41),iD(172,`
        `),Ei(173,`label`),iD(174,`Programmatically go to first/last page:`),Oc(),iD(175,`
        `),Ei(176,`div`,42),iD(177,`
          `),Ei(178,`button`,43),Mp(`click`,function(){return a.goToFirstPage()}),iD(179,`
            `),Tp(180,`i`,44),iD(181,`
          `),Oc(),iD(182,`
          `),Ei(183,`button`,45),Mp(`click`,function(){return a.goToLastPage()}),iD(184,`
            `),Tp(185,`i`,40),iD(186,`
          `),Oc(),iD(187,`
        `),Oc(),iD(188,`
      `),Oc(),iD(189,`
    `),Oc(),iD(190,`
  `),Oc(),iD(191,`

  `),Ei(192,`angular-slickgrid`,46),Mp(`onAngularGridCreated`,function(d){return a.angularGridReady(d.detail)})(`onGridStateChanged`,function(d){return a.gridStateChanged(d.detail)})(`onBeforeSort`,function(d){return a.handleOnBeforeSort(d)})(`onBeforeSearchChange`,function(d){return a.handleOnBeforeSearchChange(d)})(`onBeforePaginationChange`,function(d){return a.handleOnBeforePaginationChange(d)}),iD(193,`
  `),Oc(),iD(194,`
`),Oc(),iD(195,`
`)),m&2&&(ay(69),pI(a.errorStatus()?69:-1),ay(7),QI(a.status().class),ay(4),Fc(` `,a.status().text,`
        `),ay(),Dp(`hidden`,!a.processing()),ay(15),qp(a.odataQuery),ay(17),pI(a.metrics()?113:-1),ay(11),Dp(`value`,2),ay(5),Dp(`value`,4),ay(6),Dp(`checked`,a.isCountEnabled),ay(8),Dp(`checked`,a.isSelectEnabled),ay(8),Dp(`checked`,a.isExpandEnabled),ay(41),Dp(`columns`,a.columns)(`options`,a.gridOptions)(`paginationOptions`,a.paginationOptions())(`dataset`,a.dataset))},dependencies:[xz,Lm],encapsulation:2})}}return b})();export{ce as Example5Component};
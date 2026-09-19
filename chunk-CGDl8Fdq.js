import{n as s,t as r}from"./chunk-DarCEgGK.js";import{En as jc,F as Ip,Kn as pI,Ot as Up,Pn as ly,Wt as ZI,Xn as qp,b as Ep,hr as xI,j as Ho,p as CD,pt as Rc,q as MD,rn as bp,t as $E,tr as sD,vn as hI,wr as yv,xr as yi,xt as T}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,x as Pm}from"./chunk-DLuyVhQJ.js";import{n as ze}from"./main-CCTR2RMO.js";import{t as C}from"./chunk-DABGlTfE.js";function X(b,K){if(b&1&&(sD(0,`
        `),yi(1,`div`,47),sD(2,`
          `),yi(3,`em`)(4,`strong`),sD(5,`Backend Error:`),Rc(),sD(6,` `),Ip(7,`span`,48),Rc(),sD(8,`
        `),Rc(),sD(9,`
      `)),b&2){let i=xI();ly(7),Ep(`innerHTML`,i.errorStatus(),yv)}}function ee(b,K){if(b&1&&(sD(0,`
        `),yi(1,`span`),sD(2,`
          `),yi(3,`b`),sD(4,`Metrics:`),Rc(),sD(5),CD(6,`date`),Rc(),sD(7,`
      `)),b&2){let i=xI();ly(5),qp(` `,MD(6,3,i.metrics()?.endTime,`yyyy-MM-dd hh:mm aaaaa'm'`),` | `,i.metrics()?.executionTime,`ms |
          `,i.metrics()?.totalItemCount,` items
        `)}}var U=20;var te=`assets/data`;var Y=`%5E`;var ne=`%25`;var ce=(()=>{class b{constructor(){this.http=T(ze),this.dataset=[],this.hideSubTitle=!1,this.metrics=Ho(void 0),this.paginationOptions=Ho(void 0),this.isCountEnabled=!0,this.isSelectEnabled=!1,this.isExpandEnabled=!1,this.odataVersion=2,this.odataQuery=``,this.processing=Ho(!0),this.errorStatus=Ho(``),this.isPageErrorTest=!1,this.status=Ho({text:`processing...`,class:`alert alert-danger`})}angularGridReady(i){this.angularGrid=i}ngOnInit(){this.columns=[{id:`name`,name:`Name`,field:`name`,sortable:!0,filterable:!0,filter:{model:ip.compoundInput,compoundOperatorList:[{operator:``,desc:`Contains`},{operator:`<>`,desc:`Not Contains`},{operator:`=`,desc:`Equals`},{operator:`!=`,desc:`Not equal to`},{operator:`a*`,desc:`Starts With`},{operator:`Custom`,desc:`SQL Like`}]}},{id:`gender`,name:`Gender`,field:`gender`,filterable:!0,sortable:!0,filter:{model:ip.singleSelect,collection:[{value:``,label:``},{value:`male`,label:`male`},{value:`female`,label:`female`}]}},{id:`company`,name:`Company`,field:`company`,filterable:!0,sortable:!0},{id:`category_name`,name:`Category`,field:`category/name`,filterable:!0,sortable:!0}],this.gridOptions={enableAutoResize:!0,autoResize:{container:`#demo-container`,rightPadding:10},checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},compoundOperatorAltTexts:{text:{Custom:{operatorAlt:`%%`,descAlt:`SQL Like`}}},enableCellNavigation:!0,enableFiltering:!0,enableCheckboxSelector:!0,enableSelection:!0,enablePagination:!0,pagination:{pageSizes:[10,20,50,100,500,5e4],pageSize:U,totalItems:0},presets:{filters:[{columnId:`gender`,searchTerms:[`male`],operator:`=`}],sorters:[{columnId:`name`,direction:`asc`}],pagination:{pageNumber:2,pageSize:U}},backendServiceApi:{service:new C,options:{enableCount:this.isCountEnabled,enableSelect:this.isSelectEnabled,enableExpand:this.isExpandEnabled,filterQueryOverride:({fieldName:i,columnDef:m,columnFilterOperator:a,searchValues:s})=>{if(a===`Custom`&&m?.id===`name`){let d=s[0].replace(/\*/g,`.*`);return d=d.slice(0,1)+Y+d.slice(1),d=d.slice(0,-1)+`$'`,`matchesPattern(${i}, ${d})`}},version:this.odataVersion},onError:i=>{this.errorStatus.set(i.message),this.displaySpinner(!1,!0)},preProcess:()=>{this.errorStatus.set(``),this.displaySpinner(!0)},process:i=>this.getCustomerApiCall(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.getCustomerCallback(i)}}}}displaySpinner(i,m){this.processing.set(i),m?this.status.set({text:`ERROR!!!`,class:`alert alert-danger`}):this.status.set(i?{text:`loading`,class:`alert alert-warning`}:{text:`finished`,class:`alert alert-success`})}getCustomerCallback(i){let m=i.totalRecordCount;this.isCountEnabled&&(m=this.odataVersion===4?i[`@odata.count`]:i.d.__count),this.metrics()&&this.metrics.set(s(r({},this.metrics()),{totalItemCount:m})),this.paginationOptions.set(s(r({},this.gridOptions.pagination),{totalItems:m})),this.dataset=this.odataVersion===4?i.value:i.d.results,this.odataQuery=i.query}getCustomerApiCall(i){return this.getCustomerDataApiMock(i)}goToFirstPage(){this.angularGrid.paginationService.goToFirstPage()}goToLastPage(){this.angularGrid.paginationService.goToLastPage()}setFiltersDynamically(){this.angularGrid.filterService.updateFilters([{columnId:`name`,searchTerms:[`A`],operator:`a*`}])}setSortingDynamically(){this.angularGrid.sortService.updateSorting([{columnId:`name`,direction:`DESC`}])}getCustomerDataApiMock(i){return new Promise(m=>{let a=i.toLowerCase().split(`&`),s,d=0,w=``,T=100,x={};if(this.isPageErrorTest)throw this.isPageErrorTest=!1,new Error(`Server timed out trying to retrieve data for the last page`);for(let f of a){if(f.includes(`$top=`)&&(s=+f.substring(5),s===5e4))throw new Error(`Server timed out retrieving 50,000 rows`);if(f.includes(`$skip=`)&&(d=+f.substring(6)),f.includes(`$orderby=`)&&(w=f.substring(9)),f.includes(`$filter=`)){let l=f.substring(8).replace(`%20`,` `);if(l.includes(`matchespattern`)){let r=new RegExp(`matchespattern\\(([a-zA-Z]+),\\s'${Y}(.*?)'\\)`,`i`),c=l.match(r)||[],S=c[1].trim();x[S]={type:`matchespattern`,term:`^`+c[2].trim()}}if(l.includes(`contains`)){let r=l.match(/contains\(([a-zA-Z/]+),\s?'(.*?)'/),c=r[1].trim();x[c]={type:`substring`,term:r[2].trim()}}if(l.includes(`substringof`)){let r=l.match(/substringof\('(.*?)',\s([a-zA-Z/]+)/),c=r[2].trim();x[c]={type:`substring`,term:r[1].trim()}}for(let r of[`eq`,`ne`,`le`,`lt`,`gt`,`ge`])if(l.includes(r)){let S=new RegExp(`([a-zA-Z ]*) ${r} '(.*?)'`).exec(l);if(Array.isArray(S)){let u=S[1].trim();x[u]={type:r,term:S[2].trim()}}}if(l.includes(`startswith`)&&l.includes(`endswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],c=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/)||[],S=r[1].trim();x[S]={type:`starts+ends`,term:[r[2].trim(),c[2].trim()]}}else if(l.includes(`startswith`)){let r=l.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/),c=r[1].trim();x[c]={type:`starts`,term:r[2].trim()}}else if(l.includes(`endswith`)){let r=l.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/),c=r[1].trim();x[c]={type:`ends`,term:r[2].trim()}}if(l.includes(`company`))throw new Error(`Server could not filter using the field "Company"`)}}if(w.includes(`company`))throw new Error(`Server could not sort using the field "Company"`);this.http.get(`${te}/customers_100.json`).subscribe(f=>{let l=f;if(w?.length>0){let u=w.split(`,`);for(let P of u){let O=P.split(` `),k=O[0],_=E=>E;for(let E of k.split(`/`)){let o=_;_=A=>o(A)[E]}switch((O[1]??`asc`).toLocaleLowerCase()){case`asc`:l=l.sort((E,o)=>_(E).localeCompare(_(o)));break;case`desc`:l=l.sort((E,o)=>_(o).localeCompare(_(E)));break}}}let r=d,c=l;if(x){for(let u in x)u in x&&(c=c.filter(P=>{let O=x[u].type,k=x[u].term,_=u;if(u?.indexOf(` `)!==-1){let o=u.split(` `);_=o[o.length-1]}let p,E=P;for(let o of _.split(`/`))p=E[o],E=p;if(p){let[o,A]=Array.isArray(k)?k:[k];switch(O){case`eq`:return p.toLowerCase()===o;case`ne`:return p.toLowerCase()!==o;case`le`:return p.toLowerCase()<=o;case`lt`:return p.toLowerCase()<o;case`gt`:return p.toLowerCase()>o;case`ge`:return p.toLowerCase()>=o;case`ends`:return p.toLowerCase().endsWith(o);case`starts`:return p.toLowerCase().startsWith(o);case`starts+ends`:return p.toLowerCase().startsWith(o)&&p.toLowerCase().endsWith(A);case`substring`:return p.toLowerCase().includes(o);case`matchespattern`:return new RegExp(o.replaceAll(ne,`.*`),`i`).test(p)}}}));T=c.length}r>c.length&&(i=i.replace(`$skip=${r}`,``),r=0);let S=c.slice(r,r+s);setTimeout(()=>{let u={query:i};this.isCountEnabled||(u.totalRecordCount=T),this.odataVersion===4?(u.value=S,this.isCountEnabled&&(u[`@odata.count`]=T)):(u.d={results:S},this.isCountEnabled&&(u.d.__count=T)),m(u)},100)})})}gridStateChanged(i){console.log(`Client sample, Grid State changed:: `,i.change)}throwPageChangeError(){this.isPageErrorTest=!0,this.angularGrid?.paginationService?.goToLastPage()}handleOnBeforeSort(i){return!0}handleOnBeforeSearchChange(i){return!0}handleOnBeforePaginationChange(i){return!0}changeCountEnableFlag(){return this.isCountEnabled=!this.isCountEnabled,this.resetOptions({enableCount:this.isCountEnabled}),!0}changeEnableSelectFlag(){return this.isSelectEnabled=!this.isSelectEnabled,this.resetOptions({enableSelect:this.isSelectEnabled}),!0}changeEnableExpandFlag(){return this.isExpandEnabled=!this.isExpandEnabled,this.resetOptions({enableExpand:this.isExpandEnabled}),!0}setOdataVersion(i){return this.odataVersion=i,this.resetOptions({version:this.odataVersion}),!0}resetOptions(i){this.displaySpinner(!0);let m=this.gridOptions.backendServiceApi.service;m.updateOptions(i),m.clearFilters(),this.angularGrid?.filterService.clearFilters()}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(m){return new(m||b)}}static{this.ɵcmp=$E({type:b,selectors:[[`ng-component`]],decls:196,vars:16,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example05.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`row`],[1,`col-sm-9`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/odata`,`target`,`_blank`],[1,`small`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`text-danger`],[1,`col-sm-3`],[1,`col-sm-2`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[1,`col-sm-10`],[`data-test`,`alert-odata-query`,1,`alert`,`alert-info`],[`data-test`,`odata-query-result`],[1,`col-sm-4`],[`data-test`,`set-dynamic-filter`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`set-dynamic-sorting`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`col-sm-8`],[`data-test`,`radioVersion`],[`for`,`radio2`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version2`,`id`,`radio2`,`checked`,``,3,`change`,`value`],[`for`,`radio4`,1,`radio-inline`,`control-label`],[`type`,`radio`,`name`,`inlineRadioOptions`,`data-test`,`version4`,`id`,`radio4`,3,`change`,`value`],[`for`,`enableCount`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableCount`,`data-test`,`enable-count`,3,`click`,`checked`],[2,`font-weight`,`bold`],[`for`,`enableSelect`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableSelect`,`data-test`,`enable-select`,3,`click`,`checked`],[`for`,`enableExpand`,1,`checkbox-inline`,`control-label`,2,`margin-left`,`20px`],[`type`,`checkbox`,`id`,`enableExpand`,`data-test`,`enable-expand`,3,`click`,`checked`],[1,`row`,`mt-2`,`mb-1`],[1,`col-md-12`],[`data-test`,`throw-page-error-btn`,1,`btn`,`btn-outline-danger`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-page-last`],[1,`ms-2`],[`role`,`group`,1,`btn-group`],[`data-test`,`goto-first-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[1,`mdi`,`mdi-page-first`],[`data-test`,`goto-last-page`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,`px-2`,3,`click`],[`gridId`,`grid5`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeSort`,`onBeforeSearchChange`,`onBeforePaginationChange`,`columns`,`options`,`paginationOptions`,`dataset`],[`data-test`,`error-status`,1,`alert`,`alert-danger`],[3,`innerHTML`]],template:function(m,a){m&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 5: Grid connected to Backend Server with OData
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return a.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`
  `),yi(18,`div`,6),sD(19,`
    `),yi(20,`div`,7),sD(21,`
      `),yi(22,`div`,8),sD(23,`
        Sorting/Paging connected to a Backend OData Service (`),yi(24,`a`,9),sD(25,`Docs`),Rc(),sD(26,`).
        `),Ip(27,`br`),sD(28,`
        `),yi(29,`ul`,10),sD(30,`
          `),yi(31,`li`),sD(32,`Only "Name" field is sortable for the demo (because we use JSON files), however "multiColumnSort: true" is also supported`),Rc(),sD(33,`
          `),yi(34,`li`),sD(35,`This example also demos the Grid State feature, open the console log to see the changes`),Rc(),sD(36,`
          `),yi(37,`li`),sD(38,`String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)`),Rc(),sD(39,`
          `),yi(40,`ul`),sD(41,`
            `),yi(42,`li`),sD(43,`The (*) can be used as startsWith (ex.: "abc*" => startsWith "abc") / endsWith (ex.: "*xyz" => endsWith "xyz")`),Rc(),sD(44,`
            `),yi(45,`li`),sD(46,`The other operators can be used on column type number for example: ">=100" (bigger or equal than 100)`),Rc(),sD(47,`
          `),Rc(),sD(48,`
          `),yi(49,`li`),sD(50,`OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)`),Rc(),sD(51,`
          `),yi(52,`li`),sD(53,`
            You can also preload a grid with certain "presets" like Filters / Sorters / Pagination
            `),yi(54,`a`,11),sD(55,`Docs - Grid Preset`),Rc(),sD(56,`
          `),Rc(),sD(57,`
          `),yi(58,`li`),sD(59,`
            `),yi(60,`span`,12),sD(61,`NOTE:`),Rc(),sD(62,` For demo purposes, the last column (filter & sort) will always throw an error and its
            only purpose is to demo what would happen when you encounter a backend server error (the UI should rollback to previous state
            before you did the action). Also changing Page Size to 50,000 will also throw which again is for demo purposes.
          `),Rc(),sD(63,`
        `),Rc(),sD(64,`
      `),Rc(),sD(65,`
    `),Rc(),sD(66,`
    `),yi(67,`div`,13),sD(68,`
      `),pI(69,X,10,1),Rc(),sD(70,`
  `),Rc(),sD(71,`

  `),yi(72,`div`,6),sD(73,`
    `),yi(74,`div`,14),sD(75,`
      `),yi(76,`div`,15),sD(77,`
        `),yi(78,`strong`),sD(79,`Status: `),Rc(),sD(80),yi(81,`span`,16),sD(82,`
          `),Ip(83,`i`,17),sD(84,`
        `),Rc(),sD(85,`
      `),Rc(),sD(86,`
    `),Rc(),sD(87,`
    `),yi(88,`div`,18),sD(89,`
      `),yi(90,`div`,19),sD(91,`
        `),yi(92,`strong`),sD(93,`OData Query:`),Rc(),sD(94,` `),yi(95,`span`,20),sD(96),Rc(),sD(97,`
      `),Rc(),sD(98,`
    `),Rc(),sD(99,`
  `),Rc(),sD(100,`

  `),yi(101,`div`,6),sD(102,`
    `),yi(103,`div`,21),sD(104,`
      `),yi(105,`button`,22),bp(`click`,function(){return a.setFiltersDynamically()}),sD(106,`
        Set Filters Dynamically
      `),Rc(),sD(107,`
      `),yi(108,`button`,23),bp(`click`,function(){return a.setSortingDynamically()}),sD(109,`
        Set Sorting Dynamically
      `),Rc(),sD(110,`
      `),Ip(111,`br`),sD(112,`
      `),pI(113,ee,8,6),Rc(),sD(114,`

    `),yi(115,`div`,24),sD(116,`
      `),yi(117,`label`),sD(118,`OData Version: `),Rc(),sD(119,`
      `),yi(120,`span`,25),sD(121,`
        `),yi(122,`label`,26),sD(123,`
          `),yi(124,`input`,27),bp(`change`,function(){return a.setOdataVersion(2)}),Rc(),sD(125,`
          2
        `),Rc(),sD(126,`
        `),yi(127,`label`,28),sD(128,`
          `),yi(129,`input`,29),bp(`change`,function(){return a.setOdataVersion(4)}),Rc(),sD(130,` 4
        `),Rc(),sD(131,`
      `),Rc(),sD(132,`
      `),yi(133,`label`,30),sD(134,`
        `),yi(135,`input`,31),bp(`click`,function(){return a.changeCountEnableFlag()}),Rc(),sD(136,`
        `),yi(137,`span`,32),sD(138,`Enable Count`),Rc(),sD(139,` (add to OData query)
      `),Rc(),sD(140,`
      `),yi(141,`label`,33),sD(142,`
        `),yi(143,`input`,34),bp(`click`,function(){return a.changeEnableSelectFlag()}),Rc(),sD(144,`
        `),yi(145,`span`,32),sD(146,`Enable Select`),Rc(),sD(147,` (add to OData query)
      `),Rc(),sD(148,`
      `),yi(149,`label`,35),sD(150,`
        `),yi(151,`input`,36),bp(`click`,function(){return a.changeEnableExpandFlag()}),Rc(),sD(152,`
        `),yi(153,`span`,32),sD(154,`Enable Expand`),Rc(),sD(155,` (add to OData query)
      `),Rc(),sD(156,`
    `),Rc(),sD(157,`
  `),Rc(),sD(158,`
  `),yi(159,`div`,37),sD(160,`
    `),yi(161,`div`,38),sD(162,`
      `),yi(163,`button`,39),bp(`click`,function(){return a.throwPageChangeError()}),sD(164,`
        `),yi(165,`span`),sD(166,`Throw Error Going to Last Page... `),Rc(),sD(167,`
        `),Ip(168,`i`,40),sD(169,`
      `),Rc(),sD(170,`

      `),yi(171,`span`,41),sD(172,`
        `),yi(173,`label`),sD(174,`Programmatically go to first/last page:`),Rc(),sD(175,`
        `),yi(176,`div`,42),sD(177,`
          `),yi(178,`button`,43),bp(`click`,function(){return a.goToFirstPage()}),sD(179,`
            `),Ip(180,`i`,44),sD(181,`
          `),Rc(),sD(182,`
          `),yi(183,`button`,45),bp(`click`,function(){return a.goToLastPage()}),sD(184,`
            `),Ip(185,`i`,40),sD(186,`
          `),Rc(),sD(187,`
        `),Rc(),sD(188,`
      `),Rc(),sD(189,`
    `),Rc(),sD(190,`
  `),Rc(),sD(191,`

  `),yi(192,`angular-slickgrid`,46),bp(`onAngularGridCreated`,function(d){return a.angularGridReady(d.detail)})(`onGridStateChanged`,function(d){return a.gridStateChanged(d.detail)})(`onBeforeSort`,function(d){return a.handleOnBeforeSort(d)})(`onBeforeSearchChange`,function(d){return a.handleOnBeforeSearchChange(d)})(`onBeforePaginationChange`,function(d){return a.handleOnBeforePaginationChange(d)}),sD(193,`
  `),Rc(),sD(194,`
`),Rc(),sD(195,`
`)),m&2&&(ly(69),hI(a.errorStatus()?69:-1),ly(7),ZI(a.status().class),ly(4),jc(` `,a.status().text,`
        `),ly(),Ep(`hidden`,!a.processing()),ly(15),Up(a.odataQuery),ly(17),hI(a.metrics()?113:-1),ly(11),Ep(`value`,2),ly(5),Ep(`value`,4),ly(6),Ep(`checked`,a.isCountEnabled),ly(8),Ep(`checked`,a.isSelectEnabled),ly(8),Ep(`checked`,a.isExpandEnabled),ly(41),Ep(`columns`,a.columns)(`options`,a.gridOptions)(`paginationOptions`,a.paginationOptions())(`dataset`,a.dataset))},dependencies:[_W,Pm],encapsulation:2})}}return b})();export{ce as Example5Component};
import{En as jc,F as Ip,Pn as ly,Wt as ZI,b as Ep,j as Ho,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,xt as T}from"./chunk-Rd4ToC_L.js";import{W as _W,ct as ip,ht as nk}from"./chunk-DLuyVhQJ.js";import{n as ze}from"./main-CCTR2RMO.js";import{t as A}from"./chunk-BN5KFnF7.js";var p=`https://countries.trevorblades.com/`;var k=(()=>{class s{constructor(){this.http=T(ze),this.dataset=[],this.hideSubTitle=!1,this.metrics=Ho(void 0),this.graphqlQuery=``,this.processing=Ho(!0),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.isDataLoaded=Ho(!1)}ngOnInit(){this.columns=[{id:`countryCode`,field:`code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryName`,field:`name`,name:`Name`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryNative`,field:`native`,name:`Native`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryPhone`,field:`phone`,name:`Phone Area Code`,maxWidth:110,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryCurrency`,field:`currency`,name:`Currency`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryEmoji`,field:`emoji`,name:`Emoji`,maxWidth:90,sortable:!0,columnGroup:`Country`},{id:`languageName`,field:`languages.name`,name:`Names`,width:60,formatter:nk.arrayObjectToCsv,columnGroup:`Language`,params:{propertyNames:[`name`],useFormatterOuputToFilter:!0},filterable:!0,filter:{model:ip.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`name`,value:``,operator:`NE`},{property:`name`,value:null,operator:`NE`}],collectionSortBy:{property:`name`},customStructure:{value:`name`,label:`name`},options:{filter:!0}}},{id:`languageNative`,field:`languages.native`,name:`Native`,width:60,formatter:nk.arrayObjectToCsv,params:{propertyNames:[`native`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0,filter:{model:ip.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`native`,value:``,operator:`NE`},{property:`native`,value:null,operator:`NE`}],collectionSortBy:{property:`native`},customStructure:{value:`native`,label:`native`},options:{filter:!0}}},{id:`languageCode`,field:`languages.code`,name:`Codes`,maxWidth:100,formatter:nk.arrayObjectToCsv,params:{propertyNames:[`code`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0},{id:`continentName`,field:`continent.name`,name:`Name`,width:60,sortable:!0,filterable:!0,formatter:nk.complexObject,columnGroup:`Continent`},{id:`continentCode`,field:`continent.code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,filter:{model:ip.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:`data.continents`,addBlankEntry:!0,separatorBetweenTextLabels:`: `},customStructure:{value:`code`,label:`code`,labelSuffix:`name`}},formatter:nk.complexObject,columnGroup:`Continent`}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,enablePagination:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,datasetIdPropertyName:`code`,showCustomFooter:!0,backendServiceApi:{service:new A,useLocalFiltering:!0,useLocalSorting:!0,options:{datasetName:`countries`},preProcess:()=>this.isDataLoaded()?``:this.displaySpinner(!0),process:i=>this.getCountries(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.isDataLoaded.set(!0)}}}}displaySpinner(i){this.processing.set(i),this.status.set(i?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCountries(i){return this.http.post(p,{query:i})}getContinents(){return this.http.post(p,{query:`query { continents { code, name  }}`})}getLanguages(){return this.http.post(p,{query:`query { languages { code, name, native  }}`})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(u){return new(u||s)}}static{this.ɵcmp=$E({type:s,selectors:[[`ng-component`]],decls:81,vars:7,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example25.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`row`],[1,`col-12`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[`href`,`https://countries.trevorblades.com/`,`target`,`_blank`],[1,`row`],[1,`col-xs-6`,`col-sm-3`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[`gridId`,`grid25`,3,`columns`,`options`,`dataset`]],template:function(u,a){u&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 25: GraphQL Basic API without Pagination
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
      Use basic GraphQL query with any external public APIs (`),yi(22,`a`,8),sD(23,`Wiki docs`),Rc(),sD(24,`).
      `),yi(25,`ul`),sD(26,`
        `),yi(27,`li`),sD(28,`
          This Examples uses a Public GraphQL API that you can find at this link
          `),yi(29,`a`,9),sD(30,`https://countries.trevorblades.com/`),Rc(),sD(31,`
        `),Rc(),sD(32,`
        `),yi(33,`li`),sD(34,`Compare to the regular and default GraphQL implementation, you will find the following differences`),Rc(),sD(35,`
        `),yi(36,`ul`),sD(37,`
          `),yi(38,`li`),sD(39,`
            There are no Pagination and we only use GraphQL `),yi(40,`b`),sD(41,`once`),Rc(),sD(42,` to load the data, then we use the grid as a regular local in-memory
            grid
          `),Rc(),sD(43,`
          `),yi(44,`li`),sD(45,`
            We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
          `),Rc(),sD(46,`
        `),Rc(),sD(47,`
        `),yi(48,`li`),sD(49,`
          NOTE - This Example calls multiple GraphQL queries, this is `),yi(50,`b`),sD(51,`ONLY`),Rc(),sD(52,` for demo purposes, you would typically only call 1 query
          (which is what GraphQL is good at)
        `),Rc(),sD(53,`
        `),yi(54,`li`),sD(55,`
          This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
          with local (in-memory) Filtering/Sorting strategies
        `),Rc(),sD(56,`
      `),Rc(),sD(57,`
    `),Rc(),sD(58,`
  `),Rc(),sD(59,`

  `),yi(60,`div`,10),sD(61,`
    `),yi(62,`div`,11),sD(63,`
      `),yi(64,`div`,12),sD(65,`
        `),yi(66,`strong`),sD(67,`Status: `),Rc(),sD(68),yi(69,`span`,13),sD(70,`
          `),Ip(71,`i`,14),sD(72,`
        `),Rc(),sD(73,`
      `),Rc(),sD(74,`
    `),Rc(),sD(75,`
  `),Rc(),sD(76,`

  `),yi(77,`angular-slickgrid`,15),sD(78,` `),Rc(),sD(79,`
`),Rc(),sD(80,`
`)),u&2&&(ly(64),ZI(a.status()?.class),ly(4),jc(` `,a.status()?.text,`
        `),ly(),Ep(`hidden`,!a.processing()),ly(8),Ep(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[_W],styles:[`.alert{padding:8px}
`],encapsulation:2})}}return s})();export{k as Example25Component};
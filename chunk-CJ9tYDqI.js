import{t as A}from"./chunk-Cwh4hLmS.js";import{n as ze}from"./main-KCATS47T.js";import{Ct as ku,V as R$,rt as ZR}from"./chunk-Lo0QQjTd.js";import{I as Ho,P as Hc,X as Lc,dr as uD,en as _p,f as D,in as bp,k as GE,o as Ap,qt as XI,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var p=`https://countries.trevorblades.com/`;var k=(()=>{class s{constructor(){this.http=D(ze),this.dataset=[],this.hideSubTitle=!1,this.metrics=Ho(void 0),this.graphqlQuery=``,this.processing=Ho(!0),this.status=Ho({text:`processing...`,class:`alert alert-danger`}),this.isDataLoaded=Ho(!1)}ngOnInit(){this.columns=[{id:`countryCode`,field:`code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryName`,field:`name`,name:`Name`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryNative`,field:`native`,name:`Native`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryPhone`,field:`phone`,name:`Phone Area Code`,maxWidth:110,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryCurrency`,field:`currency`,name:`Currency`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryEmoji`,field:`emoji`,name:`Emoji`,maxWidth:90,sortable:!0,columnGroup:`Country`},{id:`languageName`,field:`languages.name`,name:`Names`,width:60,formatter:ZR.arrayObjectToCsv,columnGroup:`Language`,params:{propertyNames:[`name`],useFormatterOuputToFilter:!0},filterable:!0,filter:{model:ku.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`name`,value:``,operator:`NE`},{property:`name`,value:null,operator:`NE`}],collectionSortBy:{property:`name`},customStructure:{value:`name`,label:`name`},options:{filter:!0}}},{id:`languageNative`,field:`languages.native`,name:`Native`,width:60,formatter:ZR.arrayObjectToCsv,params:{propertyNames:[`native`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0,filter:{model:ku.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`native`,value:``,operator:`NE`},{property:`native`,value:null,operator:`NE`}],collectionSortBy:{property:`native`},customStructure:{value:`native`,label:`native`},options:{filter:!0}}},{id:`languageCode`,field:`languages.code`,name:`Codes`,maxWidth:100,formatter:ZR.arrayObjectToCsv,params:{propertyNames:[`code`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0},{id:`continentName`,field:`continent.name`,name:`Name`,width:60,sortable:!0,filterable:!0,formatter:ZR.complexObject,columnGroup:`Continent`},{id:`continentCode`,field:`continent.code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,filter:{model:ku.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:`data.continents`,addBlankEntry:!0,separatorBetweenTextLabels:`: `},customStructure:{value:`code`,label:`code`,labelSuffix:`name`}},formatter:ZR.complexObject,columnGroup:`Continent`}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,enablePagination:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,datasetIdPropertyName:`code`,showCustomFooter:!0,backendServiceApi:{service:new A,useLocalFiltering:!0,useLocalSorting:!0,options:{datasetName:`countries`},preProcess:()=>this.isDataLoaded()?``:this.displaySpinner(!0),process:i=>this.getCountries(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.isDataLoaded.set(!0)}}}}displaySpinner(i){this.processing.set(i),this.status.set(i?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCountries(i){return this.http.post(p,{query:i})}getContinents(){return this.http.post(p,{query:`query { continents { code, name  }}`})}getLanguages(){return this.http.post(p,{query:`query { languages { code, name, native  }}`})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(u){return new(u||s)}}static{this.ɵcmp=GE({type:s,selectors:[[`ng-component`]],decls:81,vars:7,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example25.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`row`],[1,`col-12`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[`href`,`https://countries.trevorblades.com/`,`target`,`_blank`],[1,`row`],[1,`col-xs-6`,`col-sm-3`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[`gridId`,`grid25`,3,`columns`,`options`,`dataset`]],template:function(u,a){u&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 25: GraphQL Basic API without Pagination
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
      Use basic GraphQL query with any external public APIs (`),vi(22,`a`,8),uD(23,`Wiki docs`),Lc(),uD(24,`).
      `),vi(25,`ul`),uD(26,`
        `),vi(27,`li`),uD(28,`
          This Examples uses a Public GraphQL API that you can find at this link
          `),vi(29,`a`,9),uD(30,`https://countries.trevorblades.com/`),Lc(),uD(31,`
        `),Lc(),uD(32,`
        `),vi(33,`li`),uD(34,`Compare to the regular and default GraphQL implementation, you will find the following differences`),Lc(),uD(35,`
        `),vi(36,`ul`),uD(37,`
          `),vi(38,`li`),uD(39,`
            There are no Pagination and we only use GraphQL `),vi(40,`b`),uD(41,`once`),Lc(),uD(42,` to load the data, then we use the grid as a regular local in-memory
            grid
          `),Lc(),uD(43,`
          `),vi(44,`li`),uD(45,`
            We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
          `),Lc(),uD(46,`
        `),Lc(),uD(47,`
        `),vi(48,`li`),uD(49,`
          NOTE - This Example calls multiple GraphQL queries, this is `),vi(50,`b`),uD(51,`ONLY`),Lc(),uD(52,` for demo purposes, you would typically only call 1 query
          (which is what GraphQL is good at)
        `),Lc(),uD(53,`
        `),vi(54,`li`),uD(55,`
          This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
          with local (in-memory) Filtering/Sorting strategies
        `),Lc(),uD(56,`
      `),Lc(),uD(57,`
    `),Lc(),uD(58,`
  `),Lc(),uD(59,`

  `),vi(60,`div`,10),uD(61,`
    `),vi(62,`div`,11),uD(63,`
      `),vi(64,`div`,12),uD(65,`
        `),vi(66,`strong`),uD(67,`Status: `),Lc(),uD(68),vi(69,`span`,13),uD(70,`
          `),_p(71,`i`,14),uD(72,`
        `),Lc(),uD(73,`
      `),Lc(),uD(74,`
    `),Lc(),uD(75,`
  `),Lc(),uD(76,`

  `),vi(77,`angular-slickgrid`,15),uD(78,` `),Lc(),uD(79,`
`),Lc(),uD(80,`
`)),u&2&&(fv(64),XI(a.status()?.class),fv(4),Hc(` `,a.status()?.text,`
        `),fv(),bp(`hidden`,!a.processing()),fv(8),bp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[R$],styles:[`.alert{padding:8px}
`],encapsulation:2})}}return s})();export{k as Example25Component};
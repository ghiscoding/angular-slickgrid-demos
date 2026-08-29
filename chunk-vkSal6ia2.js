import{Ct as T,Dt as UE,En as iD,Kn as mp,Nn as jo,Tt as Tp,Wn as mi,dt as Pc,hr as vp,ht as QI,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{H as _W,mt as nk,st as ip}from"./chunk-CAMk6vEo.js";import{n as ze}from"./main-T6P2BZBW.js";import{t as A}from"./chunk-DCwS4vqO.js";var p=`https://countries.trevorblades.com/`;var k=(()=>{class s{constructor(){this.http=T(ze),this.dataset=[],this.hideSubTitle=!1,this.metrics=jo(void 0),this.graphqlQuery=``,this.processing=jo(!0),this.status=jo({text:`processing...`,class:`alert alert-danger`}),this.isDataLoaded=jo(!1)}ngOnInit(){this.columns=[{id:`countryCode`,field:`code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryName`,field:`name`,name:`Name`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryNative`,field:`native`,name:`Native`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryPhone`,field:`phone`,name:`Phone Area Code`,maxWidth:110,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryCurrency`,field:`currency`,name:`Currency`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryEmoji`,field:`emoji`,name:`Emoji`,maxWidth:90,sortable:!0,columnGroup:`Country`},{id:`languageName`,field:`languages.name`,name:`Names`,width:60,formatter:nk.arrayObjectToCsv,columnGroup:`Language`,params:{propertyNames:[`name`],useFormatterOuputToFilter:!0},filterable:!0,filter:{model:ip.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`name`,value:``,operator:`NE`},{property:`name`,value:null,operator:`NE`}],collectionSortBy:{property:`name`},customStructure:{value:`name`,label:`name`},options:{filter:!0}}},{id:`languageNative`,field:`languages.native`,name:`Native`,width:60,formatter:nk.arrayObjectToCsv,params:{propertyNames:[`native`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0,filter:{model:ip.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`native`,value:``,operator:`NE`},{property:`native`,value:null,operator:`NE`}],collectionSortBy:{property:`native`},customStructure:{value:`native`,label:`native`},options:{filter:!0}}},{id:`languageCode`,field:`languages.code`,name:`Codes`,maxWidth:100,formatter:nk.arrayObjectToCsv,params:{propertyNames:[`code`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0},{id:`continentName`,field:`continent.name`,name:`Name`,width:60,sortable:!0,filterable:!0,formatter:nk.complexObject,columnGroup:`Continent`},{id:`continentCode`,field:`continent.code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,filter:{model:ip.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:`data.continents`,addBlankEntry:!0,separatorBetweenTextLabels:`: `},customStructure:{value:`code`,label:`code`,labelSuffix:`name`}},formatter:nk.complexObject,columnGroup:`Continent`}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,enablePagination:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,datasetIdPropertyName:`code`,showCustomFooter:!0,backendServiceApi:{service:new A,useLocalFiltering:!0,useLocalSorting:!0,options:{datasetName:`countries`},preProcess:()=>this.isDataLoaded()?``:this.displaySpinner(!0),process:i=>this.getCountries(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.isDataLoaded.set(!0)}}}}displaySpinner(i){this.processing.set(i),this.status.set(i?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCountries(i){return this.http.post(p,{query:i})}getContinents(){return this.http.post(p,{query:`query { continents { code, name  }}`})}getLanguages(){return this.http.post(p,{query:`query { languages { code, name, native  }}`})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(u){return new(u||s)}}static{this.ɵcmp=UE({type:s,selectors:[[`ng-component`]],decls:81,vars:7,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example25.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`row`],[1,`col-12`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[`href`,`https://countries.trevorblades.com/`,`target`,`_blank`],[1,`row`],[1,`col-xs-6`,`col-sm-3`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[`gridId`,`grid25`,3,`columns`,`options`,`dataset`]],template:function(u,a){u&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 25: GraphQL Basic API without Pagination
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
      Use basic GraphQL query with any external public APIs (`),mi(22,`a`,8),iD(23,`Wiki docs`),Ac(),iD(24,`).
      `),mi(25,`ul`),iD(26,`
        `),mi(27,`li`),iD(28,`
          This Examples uses a Public GraphQL API that you can find at this link
          `),mi(29,`a`,9),iD(30,`https://countries.trevorblades.com/`),Ac(),iD(31,`
        `),Ac(),iD(32,`
        `),mi(33,`li`),iD(34,`Compare to the regular and default GraphQL implementation, you will find the following differences`),Ac(),iD(35,`
        `),mi(36,`ul`),iD(37,`
          `),mi(38,`li`),iD(39,`
            There are no Pagination and we only use GraphQL `),mi(40,`b`),iD(41,`once`),Ac(),iD(42,` to load the data, then we use the grid as a regular local in-memory
            grid
          `),Ac(),iD(43,`
          `),mi(44,`li`),iD(45,`
            We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
          `),Ac(),iD(46,`
        `),Ac(),iD(47,`
        `),mi(48,`li`),iD(49,`
          NOTE - This Example calls multiple GraphQL queries, this is `),mi(50,`b`),iD(51,`ONLY`),Ac(),iD(52,` for demo purposes, you would typically only call 1 query
          (which is what GraphQL is good at)
        `),Ac(),iD(53,`
        `),mi(54,`li`),iD(55,`
          This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
          with local (in-memory) Filtering/Sorting strategies
        `),Ac(),iD(56,`
      `),Ac(),iD(57,`
    `),Ac(),iD(58,`
  `),Ac(),iD(59,`

  `),mi(60,`div`,10),iD(61,`
    `),mi(62,`div`,11),iD(63,`
      `),mi(64,`div`,12),iD(65,`
        `),mi(66,`strong`),iD(67,`Status: `),Ac(),iD(68),mi(69,`span`,13),iD(70,`
          `),vp(71,`i`,14),iD(72,`
        `),Ac(),iD(73,`
      `),Ac(),iD(74,`
    `),Ac(),iD(75,`
  `),Ac(),iD(76,`

  `),mi(77,`angular-slickgrid`,15),iD(78,` `),Ac(),iD(79,`
`),Ac(),iD(80,`
`)),u&2&&(cy(64),QI(a.status()?.class),cy(4),Pc(` `,a.status()?.text,`
        `),cy(),mp(`hidden`,!a.processing()),cy(8),mp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[_W],styles:[`.alert{padding:8px}
`],encapsulation:2})}}return s})();export{k as Example25Component};
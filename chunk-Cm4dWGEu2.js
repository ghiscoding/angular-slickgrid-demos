import{Er as zE,Fn as mp,Hn as oD,L as Lc,Wt as av,b as Fo,dn as gi,g as Dp,l as BI,m as D,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1,x as Iu}from"./chunk-C7G4ZLh2.js";import{t as Xe}from"./main-OKEWRQDY.js";import{t as A}from"./chunk-DL_xewK9.js";var p=`https://countries.trevorblades.com/`;var k=(()=>{class s{constructor(){this.http=D(Xe),this.dataset=[],this.hideSubTitle=!1,this.metrics=Fo(void 0),this.graphqlQuery=``,this.processing=Fo(!0),this.status=Fo({text:`processing...`,class:`alert alert-danger`}),this.isDataLoaded=Fo(!1)}ngOnInit(){this.columns=[{id:`countryCode`,field:`code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryName`,field:`name`,name:`Name`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryNative`,field:`native`,name:`Native`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryPhone`,field:`phone`,name:`Phone Area Code`,maxWidth:110,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryCurrency`,field:`currency`,name:`Currency`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryEmoji`,field:`emoji`,name:`Emoji`,maxWidth:90,sortable:!0,columnGroup:`Country`},{id:`languageName`,field:`languages.name`,name:`Names`,width:60,formatter:JN.arrayObjectToCsv,columnGroup:`Language`,params:{propertyNames:[`name`],useFormatterOuputToFilter:!0},filterable:!0,filter:{model:Iu.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`name`,value:``,operator:`NE`},{property:`name`,value:null,operator:`NE`}],collectionSortBy:{property:`name`},customStructure:{value:`name`,label:`name`},options:{filter:!0}}},{id:`languageNative`,field:`languages.native`,name:`Native`,width:60,formatter:JN.arrayObjectToCsv,params:{propertyNames:[`native`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0,filter:{model:Iu.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`native`,value:``,operator:`NE`},{property:`native`,value:null,operator:`NE`}],collectionSortBy:{property:`native`},customStructure:{value:`native`,label:`native`},options:{filter:!0}}},{id:`languageCode`,field:`languages.code`,name:`Codes`,maxWidth:100,formatter:JN.arrayObjectToCsv,params:{propertyNames:[`code`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0},{id:`continentName`,field:`continent.name`,name:`Name`,width:60,sortable:!0,filterable:!0,formatter:JN.complexObject,columnGroup:`Continent`},{id:`continentCode`,field:`continent.code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,filter:{model:Iu.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:`data.continents`,addBlankEntry:!0,separatorBetweenTextLabels:`: `},customStructure:{value:`code`,label:`code`,labelSuffix:`name`}},formatter:JN.complexObject,columnGroup:`Continent`}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,enablePagination:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,datasetIdPropertyName:`code`,showCustomFooter:!0,backendServiceApi:{service:new A,useLocalFiltering:!0,useLocalSorting:!0,options:{datasetName:`countries`},preProcess:()=>this.isDataLoaded()?``:this.displaySpinner(!0),process:i=>this.getCountries(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.isDataLoaded.set(!0)}}}}displaySpinner(i){this.processing.set(i),this.status.set(i?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCountries(i){return this.http.post(p,{query:i})}getContinents(){return this.http.post(p,{query:`query { continents { code, name  }}`})}getLanguages(){return this.http.post(p,{query:`query { languages { code, name, native  }}`})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(u){return new(u||s)}}static{this.ɵcmp=BI({type:s,selectors:[[`ng-component`]],decls:81,vars:7,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example25.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`row`],[1,`col-12`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[`href`,`https://countries.trevorblades.com/`,`target`,`_blank`],[1,`row`],[1,`col-xs-6`,`col-sm-3`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[`gridId`,`grid25`,3,`columns`,`options`,`dataset`]],template:function(u,a){u&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 25: GraphQL Basic API without Pagination
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
      Use basic GraphQL query with any external public APIs (`),gi(22,`a`,8),oD(23,`Wiki docs`),xc(),oD(24,`).
      `),gi(25,`ul`),oD(26,`
        `),gi(27,`li`),oD(28,`
          This Examples uses a Public GraphQL API that you can find at this link
          `),gi(29,`a`,9),oD(30,`https://countries.trevorblades.com/`),xc(),oD(31,`
        `),xc(),oD(32,`
        `),gi(33,`li`),oD(34,`Compare to the regular and default GraphQL implementation, you will find the following differences`),xc(),oD(35,`
        `),gi(36,`ul`),oD(37,`
          `),gi(38,`li`),oD(39,`
            There are no Pagination and we only use GraphQL `),gi(40,`b`),oD(41,`once`),xc(),oD(42,` to load the data, then we use the grid as a regular local in-memory
            grid
          `),xc(),oD(43,`
          `),gi(44,`li`),oD(45,`
            We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
          `),xc(),oD(46,`
        `),xc(),oD(47,`
        `),gi(48,`li`),oD(49,`
          NOTE - This Example calls multiple GraphQL queries, this is `),gi(50,`b`),oD(51,`ONLY`),xc(),oD(52,` for demo purposes, you would typically only call 1 query
          (which is what GraphQL is good at)
        `),xc(),oD(53,`
        `),gi(54,`li`),oD(55,`
          This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
          with local (in-memory) Filtering/Sorting strategies
        `),xc(),oD(56,`
      `),xc(),oD(57,`
    `),xc(),oD(58,`
  `),xc(),oD(59,`

  `),gi(60,`div`,10),oD(61,`
    `),gi(62,`div`,11),oD(63,`
      `),gi(64,`div`,12),oD(65,`
        `),gi(66,`strong`),oD(67,`Status: `),xc(),oD(68),gi(69,`span`,13),oD(70,`
          `),mp(71,`i`,14),oD(72,`
        `),xc(),oD(73,`
      `),xc(),oD(74,`
    `),xc(),oD(75,`
  `),xc(),oD(76,`

  `),gi(77,`angular-slickgrid`,15),oD(78,` `),xc(),oD(79,`
`),xc(),oD(80,`
`)),u&2&&(av(64),zE(a.status()?.class),av(4),Lc(` `,a.status()?.text,`
        `),av(),gp(`hidden`,!a.processing()),av(8),gp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[q1],styles:[`.alert{padding:8px}
`],encapsulation:2})}}return s})();export{k as Example25Component};
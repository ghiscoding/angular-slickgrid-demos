import{$ as Mp,C as Ei,E as Fc,En as iD,_ as D,_t as QI,b as Dp,c as BE,cn as ay,ct as Oc,f as Bo,jt as Tp}from"./chunk-CtIlL7jI.js";import{Ot as xz,pt as lp,xt as uP}from"./chunk-o9GGBwbJ.js";import{n as ze}from"./main-G4ADOSVB.js";import{t as A}from"./chunk-B2i20BJf.js";var p=`https://countries.trevorblades.com/`;var k=(()=>{class s{constructor(){this.http=D(ze),this.dataset=[],this.hideSubTitle=!1,this.metrics=Bo(void 0),this.graphqlQuery=``,this.processing=Bo(!0),this.status=Bo({text:`processing...`,class:`alert alert-danger`}),this.isDataLoaded=Bo(!1)}ngOnInit(){this.columns=[{id:`countryCode`,field:`code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryName`,field:`name`,name:`Name`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryNative`,field:`native`,name:`Native`,width:60,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryPhone`,field:`phone`,name:`Phone Area Code`,maxWidth:110,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryCurrency`,field:`currency`,name:`Currency`,maxWidth:90,sortable:!0,filterable:!0,columnGroup:`Country`},{id:`countryEmoji`,field:`emoji`,name:`Emoji`,maxWidth:90,sortable:!0,columnGroup:`Country`},{id:`languageName`,field:`languages.name`,name:`Names`,width:60,formatter:uP.arrayObjectToCsv,columnGroup:`Language`,params:{propertyNames:[`name`],useFormatterOuputToFilter:!0},filterable:!0,filter:{model:lp.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`name`,value:``,operator:`NE`},{property:`name`,value:null,operator:`NE`}],collectionSortBy:{property:`name`},customStructure:{value:`name`,label:`name`},options:{filter:!0}}},{id:`languageNative`,field:`languages.native`,name:`Native`,width:60,formatter:uP.arrayObjectToCsv,params:{propertyNames:[`native`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0,filter:{model:lp.multipleSelect,collectionAsync:this.getLanguages(),operator:`IN_CONTAINS`,collectionOptions:{addBlankEntry:!0,collectionInsideObjectProperty:`data.languages`},collectionFilterBy:[{property:`native`,value:``,operator:`NE`},{property:`native`,value:null,operator:`NE`}],collectionSortBy:{property:`native`},customStructure:{value:`native`,label:`native`},options:{filter:!0}}},{id:`languageCode`,field:`languages.code`,name:`Codes`,maxWidth:100,formatter:uP.arrayObjectToCsv,params:{propertyNames:[`code`],useFormatterOuputToFilter:!0},columnGroup:`Language`,filterable:!0},{id:`continentName`,field:`continent.name`,name:`Name`,width:60,sortable:!0,filterable:!0,formatter:uP.complexObject,columnGroup:`Continent`},{id:`continentCode`,field:`continent.code`,name:`Code`,maxWidth:90,sortable:!0,filterable:!0,filter:{model:lp.singleSelect,collectionAsync:this.getContinents(),collectionOptions:{collectionInsideObjectProperty:`data.continents`,addBlankEntry:!0,separatorBetweenTextLabels:`: `},customStructure:{value:`code`,label:`code`,labelSuffix:`name`}},formatter:uP.complexObject,columnGroup:`Continent`}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!0,enableCellNavigation:!0,enablePagination:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,datasetIdPropertyName:`code`,showCustomFooter:!0,backendServiceApi:{service:new A,useLocalFiltering:!0,useLocalSorting:!0,options:{datasetName:`countries`},preProcess:()=>this.isDataLoaded()?``:this.displaySpinner(!0),process:i=>this.getCountries(i),postProcess:i=>{this.metrics.set(i.metrics),this.displaySpinner(!1),this.isDataLoaded.set(!0)}}}}displaySpinner(i){this.processing.set(i),this.status.set(i?{text:`processing...`,class:`alert alert-danger`}:{text:`finished`,class:`alert alert-success`})}getCountries(i){return this.http.post(p,{query:i})}getContinents(){return this.http.post(p,{query:`query { continents { code, name  }}`})}getLanguages(){return this.http.post(p,{query:`query { languages { code, name, native  }}`})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let i=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[i](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(u){return new(u||s)}}static{this.ɵcmp=BE({type:s,selectors:[[`ng-component`]],decls:81,vars:7,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example25.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`row`],[1,`col-12`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/backend-services/graphql`,`target`,`_blank`],[`href`,`https://countries.trevorblades.com/`,`target`,`_blank`],[1,`row`],[1,`col-xs-6`,`col-sm-3`],[`role`,`alert`,`data-test`,`status`],[3,`hidden`],[1,`mdi`,`mdi-sync`,`mdi-spin-1s`],[`gridId`,`grid25`,3,`columns`,`options`,`dataset`]],template:function(u,a){u&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 25: GraphQL Basic API without Pagination
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
      Use basic GraphQL query with any external public APIs (`),Ei(22,`a`,8),iD(23,`Wiki docs`),Oc(),iD(24,`).
      `),Ei(25,`ul`),iD(26,`
        `),Ei(27,`li`),iD(28,`
          This Examples uses a Public GraphQL API that you can find at this link
          `),Ei(29,`a`,9),iD(30,`https://countries.trevorblades.com/`),Oc(),iD(31,`
        `),Oc(),iD(32,`
        `),Ei(33,`li`),iD(34,`Compare to the regular and default GraphQL implementation, you will find the following differences`),Oc(),iD(35,`
        `),Ei(36,`ul`),iD(37,`
          `),Ei(38,`li`),iD(39,`
            There are no Pagination and we only use GraphQL `),Ei(40,`b`),iD(41,`once`),Oc(),iD(42,` to load the data, then we use the grid as a regular local in-memory
            grid
          `),Oc(),iD(43,`
          `),Ei(44,`li`),iD(45,`
            We enabled the following 2 flags "useLocalFiltering" and "useLocalSorting" to use regular (in memory) DataView filtering/sorting
          `),Oc(),iD(46,`
        `),Oc(),iD(47,`
        `),Ei(48,`li`),iD(49,`
          NOTE - This Example calls multiple GraphQL queries, this is `),Ei(50,`b`),iD(51,`ONLY`),Oc(),iD(52,` for demo purposes, you would typically only call 1 query
          (which is what GraphQL is good at)
        `),Oc(),iD(53,`
        `),Ei(54,`li`),iD(55,`
          This example is mainly to demo the use of GraphqlService to build the query and retrieve the data but also to demo how to mix that
          with local (in-memory) Filtering/Sorting strategies
        `),Oc(),iD(56,`
      `),Oc(),iD(57,`
    `),Oc(),iD(58,`
  `),Oc(),iD(59,`

  `),Ei(60,`div`,10),iD(61,`
    `),Ei(62,`div`,11),iD(63,`
      `),Ei(64,`div`,12),iD(65,`
        `),Ei(66,`strong`),iD(67,`Status: `),Oc(),iD(68),Ei(69,`span`,13),iD(70,`
          `),Tp(71,`i`,14),iD(72,`
        `),Oc(),iD(73,`
      `),Oc(),iD(74,`
    `),Oc(),iD(75,`
  `),Oc(),iD(76,`

  `),Ei(77,`angular-slickgrid`,15),iD(78,` `),Oc(),iD(79,`
`),Oc(),iD(80,`
`)),u&2&&(ay(64),QI(a.status()?.class),ay(4),Fc(` `,a.status()?.text,`
        `),ay(),Dp(`hidden`,!a.processing()),ay(8),Dp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[xz],styles:[`.alert{padding:8px}
`],encapsulation:2})}}return s})();export{k as Example25Component};
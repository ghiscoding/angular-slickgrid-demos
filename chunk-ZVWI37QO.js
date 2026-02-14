import{Ca as k,Da as v,ga as b,u as L,wa as s,za as p}from"./chunk-IBXCHNN7.js";import{Aa as f,Ka as T,Kb as e,Mb as G,Pa as y,ia as E,ib as D,jb as n,kb as r,lb as m,vb as g}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";function d(l,F){return Math.floor(Math.random()*(F-l+1)+l)}var w=25,h="gridState",A=500,z=(()=>{class l{constructor(t){this.translate=t,this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=E(""),this.selectedLanguage.set(this.translate.getFallbackLang()||"en")}angularGridReady(t){this.angularGrid=t}ngOnDestroy(){k(this.subscriptions)}ngOnInit(){let t=JSON.parse(localStorage[h]||null);this.defineGrid(t);let o="en";this.translate.use(o),this.selectedLanguage.set(o)}clearGridStateFromLocalStorage(){this.angularGrid.gridService.resetGrid(this.columnDefinitions),this.angularGrid.paginationService.changeItemPerPage(w),setTimeout(()=>localStorage[h]=null)}defineGrid(t){let o=[];for(let i=0;i<A;i++)o.push({value:i,label:i});this.columnDefinitions=[{id:"title",name:"Title",field:"title",nameKey:"TITLE",filterable:!0,sortable:!0,minWidth:45,width:100,filter:{model:s.compoundInput}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,width:100,filter:{model:s.input,filterShortcuts:[{titleKey:"BLANK_VALUES",searchTerms:["< A"],iconCssClass:"mdi mdi-filter-minus-outline"},{titleKey:"NON_BLANK_VALUES",searchTerms:["> A"],iconCssClass:"mdi mdi-filter-plus-outline"}]}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:"number",exportCsvForceToKeepAsString:!0,minWidth:55,width:100,nameKey:"DURATION",filterable:!0,filter:{collection:o,model:s.multipleSelect,options:{maxHeight:250,width:175}}},{id:"complete",name:"% Complete",field:"percentComplete",nameKey:"PERCENT_COMPLETE",minWidth:70,type:"number",sortable:!0,width:100,formatter:p.percentCompleteBar,filterable:!0,filter:{model:s.slider,operator:">"}},{id:"start",name:"Start",field:"start",nameKey:"START",formatter:p.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:"date",filterable:!0,filter:{model:s.compoundDate,filterShortcuts:[{titleKey:"PAST",searchTerms:[b(new Date,"YYYY-MM-DD")],operator:"<",iconCssClass:"mdi mdi-calendar"},{titleKey:"FUTURE",searchTerms:[b(new Date,"YYYY-MM-DD")],operator:">",iconCssClass:"mdi mdi-calendar-clock"}]}},{id:"completed",field:"completed",nameKey:"COMPLETED",minWidth:85,maxWidth:85,formatter:p.checkmarkMaterial,width:100,type:"boolean",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:s.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0,hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:w}},t&&(this.gridOptions.presets=t),this.dataset=this.getData(A)}getData(t){let o=new Date().getFullYear(),i=[];for(let a=0;a<t;a++){let c=Math.round(Math.random()*100),x=d(o-15,o+8),I=d(10,25),u=d(1,12),M=u<10?`0${u}`:u,S=d(10,28),C=d(0,100),O=d(10,23),_=d(10,59);i[a]={id:a,title:"Task "+a,etc:"Something hidden "+a,description:a%5?"desc "+a:null,duration:c,percentComplete:C,percentCompleteNumber:C,start:new Date(x,u,S),usDateShort:`${u}/${S}/${I}`,utcDate:`${x}-${M}-${S}T${O}:${_}:${_}Z`,completed:a%3===0}}return i}gridStateChanged(t){console.log("Client sample, Grid State changed:: ",t),localStorage[h]=JSON.stringify(t.gridState)}saveCurrentGridState(){let t=this.angularGrid.gridStateService.getCurrentGridState();console.log("Client sample, last Grid State:: ",t),localStorage[h]=JSON.stringify(t)}switchLanguage(){let t=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)}))}useDefaultPresets(){return{columns:[{columnId:"description",width:170},{columnId:"title",width:55},{columnId:"duration"},{columnId:"complete"},{columnId:"start"},{columnId:"usDateShort"},{columnId:"utcDate"}],filters:[{columnId:"duration",searchTerms:[2,22,44]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(o){return new(o||l)(T(L))}}static{this.\u0275cmp=y({type:l,selectors:[["ng-component"]],decls:61,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example15.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset","target","_blank"],[1,"small"],["data-test","reset-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],["gridId","grid15",3,"onAngularGridCreated","onGridStateChanged","onBeforeGridDestroy","columns","options","dataset"]],template:function(o,i){o&1&&(n(0,"div",0),e(1,`
  `),n(2,"h2"),e(3,`
    Example 15: Grid State & Presets using Local Storage
    `),n(4,"span",1),e(5,`
      `),n(6,"a",2),e(7,`
        `),m(8,"span",3),e(9,` code
      `),r(),e(10,`
    `),r(),e(11,`
    `),n(12,"button",4),g("click",function(){return i.toggleSubTitle()}),e(13,`
      `),m(14,"span",5),e(15,`
    `),r(),e(16,`
  `),r(),e(17,`

  `),n(18,"div",6),e(19,`
    Grid State & Preset (`),n(20,"a",7),e(21,"Wiki docs"),r(),e(22,`)
    `),m(23,"br"),e(24,`
    `),n(25,"ul",8),e(26,`
      `),n(27,"li"),e(28,`Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it's previous state`),r(),e(29,`
      `),n(30,"ul"),e(31,`
        `),n(32,"li"),e(33,`
          to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)
        `),r(),e(34,`
      `),r(),e(35,`
      `),n(36,"li"),e(37,"Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)"),r(),e(38,`
    `),r(),e(39,`
  `),r(),e(40,`

  `),n(41,"button",9),g("click",function(){return i.clearGridStateFromLocalStorage()}),e(42,`
    `),m(43,"i",10),e(44,`
    Clear Grid State from Local Storage & Reset Grid
  `),r(),e(45,`

  `),n(46,"button",11),g("click",function(){return i.switchLanguage()}),e(47,`
    `),m(48,"i",12),e(49,`
    Switch Language
  `),r(),e(50,`
  `),n(51,"b"),e(52,"Locale:"),r(),e(53,`
  `),n(54,"span",13),e(55),r(),e(56,`

  `),n(57,"angular-slickgrid",14),g("onAngularGridCreated",function(c){return i.angularGridReady(c.detail)})("onGridStateChanged",function(c){return i.gridStateChanged(c.detail)})("onBeforeGridDestroy",function(){return i.saveCurrentGridState()}),e(58,`
  `),r(),e(59,`
`),r(),e(60,`
`)),o&2&&(f(55),G(`
    `,i.selectedLanguage()+".json",`
  `),f(2),D("columns",i.columnDefinitions)("options",i.gridOptions)("dataset",i.dataset))},dependencies:[v],encapsulation:2})}}return l})();export{z as Example15Component};

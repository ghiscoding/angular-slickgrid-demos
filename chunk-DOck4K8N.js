import{In as lD,M as Ho,a as Ap,jn as jc,mn as dv,on as bp,p as D,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,D as Mi,d as E1,k as Ne,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";function d(l,w){return Math.floor(Math.random()*(w-l+1)+l)}var A=25;var h=`gridState`;var F=500;var R=(()=>{class l{constructor(){this.translate=D(Mi),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Ho(``),this.selectedLanguage.set(this.translate.getFallbackLang()||`en`)}angularGridReady(t){this.angularGrid=t}ngOnDestroy(){E1(this.subscriptions)}ngOnInit(){let t=JSON.parse(localStorage[h]||null);this.defineGrid(t);let o=`en`;this.translate.use(o),this.selectedLanguage.set(o)}clearGridStateFromLocalStorage(){this.angularGrid.gridService.resetGrid(this.columns),this.angularGrid.paginationService.changeItemPerPage(A),setTimeout(()=>{localStorage[h]=null})}defineGrid(t){let o=[];for(let i=0;i<F;i++)o.push({value:i,label:i});this.columns=[{id:`title`,name:`Title`,field:`title`,nameKey:`TITLE`,filterable:!0,sortable:!0,minWidth:45,width:100,filter:{model:uu.compoundInput}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,width:100,filter:{model:uu.input,filterShortcuts:[{titleKey:`BLANK_VALUES`,searchTerms:[`< A`],iconCssClass:`mdi mdi-filter-minus-outline`},{titleKey:`NON_BLANK_VALUES`,searchTerms:[`> A`],iconCssClass:`mdi mdi-filter-plus-outline`}]}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,exportCsvForceToKeepAsString:!0,minWidth:55,width:100,nameKey:`DURATION`,filterable:!0,filter:{collection:o,model:uu.multipleSelect,options:{maxHeight:250,width:175}}},{id:`complete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:70,type:`number`,sortable:!0,width:100,formatter:sI.percentCompleteBar,filterable:!0,filter:{model:uu.slider,operator:`>`}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:sI.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:`date`,filterable:!0,filter:{model:uu.compoundDate,filterShortcuts:[{titleKey:`PAST`,searchTerms:[Ne(new Date,`YYYY-MM-DD`)],operator:`<`,iconCssClass:`mdi mdi-calendar`},{titleKey:`FUTURE`,searchTerms:[Ne(new Date,`YYYY-MM-DD`)],operator:`>`,iconCssClass:`mdi mdi-calendar-clock`}]}},{id:`completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:85,formatter:sI.checkmarkMaterial,width:100,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:uu.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:A},autoFitColumnsOnFirstLoad:!1,enableAutoSizeColumns:!1,autosizeColumnsByCellContentOnFirstLoad:!0,enableAutoResizeColumnsByCellContent:!0},t&&(this.gridOptions.presets=t),this.dataset=this.getData(F)}getData(t){let o=new Date().getFullYear(),i=[];for(let a=0;a<t;a++){let c=Math.round(Math.random()*100),C=d(o-15,o+8),I=d(10,25),u=d(1,12),M=u<10?`0${u}`:u,S=d(10,28),x=d(0,100),O=d(10,23),_=d(10,59);i[a]={id:a,title:`Task `+a,etc:`Something hidden `+a,description:a%5?`desc `+a:null,duration:c,percentComplete:x,percentCompleteNumber:x,start:new Date(C,u,S),usDateShort:`${u}/${S}/${I}`,utcDate:`${C}-${M}-${S}T${O}:${_}:${_}Z`,completed:a%3===0}}return i}gridStateChanged(t){console.log(`Client sample, Grid State changed:: `,t),localStorage[h]=JSON.stringify(t.gridState)}saveCurrentGridState(){let t=this.angularGrid.gridStateService.getCurrentGridState();console.log(`Client sample, last Grid State:: `,t),localStorage[h]=JSON.stringify(t)}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)}))}useDefaultPresets(){return{columns:[{columnId:`description`,width:170},{columnId:`title`,width:55},{columnId:`duration`},{columnId:`complete`},{columnId:`start`},{columnId:`usDateShort`},{columnId:`utcDate`}],filters:[{columnId:`duration`,searchTerms:[2,22,44]},{columnId:`usDateShort`,operator:`<`,searchTerms:[`4/20/25`]}],sorters:[{columnId:`duration`,direction:`DESC`},{columnId:`complete`,direction:`ASC`}]}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||l)}}static{this.ɵcmp=WE({type:l,selectors:[[`ng-component`]],decls:61,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example15.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`small`],[`data-test`,`reset-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid15`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`columns`,`options`,`dataset`]],template:function(o,i){o&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 15: Grid State & Presets using Local Storage
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return i.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    Grid State & Preset (`),vi(20,`a`,7),lD(21,`Wiki docs`),Rc(),lD(22,`)
    `),_p(23,`br`),lD(24,`
    `),vi(25,`ul`,8),lD(26,`
      `),vi(27,`li`),lD(28,`Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it's previous state`),Rc(),lD(29,`
      `),vi(30,`ul`),lD(31,`
        `),vi(32,`li`),lD(33,`
          to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)
        `),Rc(),lD(34,`
      `),Rc(),lD(35,`
      `),vi(36,`li`),lD(37,`Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)`),Rc(),lD(38,`
    `),Rc(),lD(39,`
  `),Rc(),lD(40,`

  `),vi(41,`button`,9),Ap(`click`,function(){return i.clearGridStateFromLocalStorage()}),lD(42,`
    `),_p(43,`i`,10),lD(44,`
    Clear Grid State from Local Storage & Reset Grid
  `),Rc(),lD(45,`

  `),vi(46,`button`,11),Ap(`click`,function(){return i.switchLanguage()}),lD(47,`
    `),_p(48,`i`,12),lD(49,`
    Switch Language
  `),Rc(),lD(50,`
  `),vi(51,`b`),lD(52,`Locale:`),Rc(),lD(53,`
  `),vi(54,`span`,13),lD(55),Rc(),lD(56,`

  `),vi(57,`angular-slickgrid`,14),Ap(`onAngularGridCreated`,function(c){return i.angularGridReady(c.detail)})(`onGridStateChanged`,function(c){return i.gridStateChanged(c.detail)})(`onBeforeGridDestroy`,function(){return i.saveCurrentGridState()}),lD(58,`
  `),Rc(),lD(59,`
`),Rc(),lD(60,`
`)),o&2&&(dv(55),jc(`
    `,i.selectedLanguage()+`.json`,`
  `),dv(2),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[D1],encapsulation:2})}}return l})();export{R as Example15Component};
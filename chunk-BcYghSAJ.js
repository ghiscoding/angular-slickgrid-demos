import{Fn as mp,Hn as oD,L as Lc,Wt as av,b as Fo,dn as gi,g as Dp,l as BI,m as D,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{C as K1,F as Te,S as JN,gt as q1,ot as ji,x as Iu}from"./chunk-C7G4ZLh2.js";function d(l,w){return Math.floor(Math.random()*(w-l+1)+l)}var F=25;var h=`gridState`;var A=500;var R=(()=>{class l{constructor(){this.translate=D(ji),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Fo(``),this.selectedLanguage.set(this.translate.getFallbackLang()||`en`)}angularGridReady(t){this.angularGrid=t}ngOnDestroy(){K1(this.subscriptions)}ngOnInit(){let t=JSON.parse(localStorage[h]||null);this.defineGrid(t);let o=`en`;this.translate.use(o),this.selectedLanguage.set(o)}clearGridStateFromLocalStorage(){this.angularGrid.gridService.resetGrid(this.columns),this.angularGrid.paginationService.changeItemPerPage(F),setTimeout(()=>{localStorage[h]=null})}defineGrid(t){let o=[];for(let n=0;n<A;n++)o.push({value:n,label:n});this.columns=[{id:`title`,name:`Title`,field:`title`,nameKey:`TITLE`,filterable:!0,sortable:!0,minWidth:45,width:100,filter:{model:Iu.compoundInput}},{id:`description`,name:`Description`,field:`description`,filterable:!0,sortable:!0,minWidth:80,width:100,filter:{model:Iu.input,filterShortcuts:[{titleKey:`BLANK_VALUES`,searchTerms:[`< A`],iconCssClass:`mdi mdi-filter-minus-outline`},{titleKey:`NON_BLANK_VALUES`,searchTerms:[`> A`],iconCssClass:`mdi mdi-filter-plus-outline`}]}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,type:`number`,exportCsvForceToKeepAsString:!0,minWidth:55,width:100,nameKey:`DURATION`,filterable:!0,filter:{collection:o,model:Iu.multipleSelect,options:{maxHeight:250,width:175}}},{id:`complete`,name:`% Complete`,field:`percentComplete`,nameKey:`PERCENT_COMPLETE`,minWidth:70,type:`number`,sortable:!0,width:100,formatter:JN.percentCompleteBar,filterable:!0,filter:{model:Iu.slider,operator:`>`}},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,formatter:JN.dateIso,sortable:!0,minWidth:75,exportWithFormatter:!0,width:100,type:`date`,filterable:!0,filter:{model:Iu.compoundDate,filterShortcuts:[{titleKey:`PAST`,searchTerms:[Te(new Date,`YYYY-MM-DD`)],operator:`<`,iconCssClass:`mdi mdi-calendar`},{titleKey:`FUTURE`,searchTerms:[Te(new Date,`YYYY-MM-DD`)],operator:`>`,iconCssClass:`mdi mdi-calendar-clock`}]}},{id:`completed`,field:`completed`,nameKey:`COMPLETED`,minWidth:85,maxWidth:85,formatter:JN.checkmarkMaterial,width:100,type:`boolean`,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,label:`True`},{value:!1,label:`False`}],model:Iu.singleSelect,options:{autoAdjustDropHeight:!0}}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableCheckboxSelector:!0,enableFiltering:!0,enableTranslate:!0,i18n:this.translate,columnPicker:{hideForceFitButton:!0},gridMenu:{hideForceFitButton:!0,hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1},enablePagination:!0,pagination:{pageSizes:[5,10,15,20,25,30,40,50,75,100],pageSize:F},autoFitColumnsOnFirstLoad:!1,enableAutoSizeColumns:!1,autosizeColumnsByCellContentOnFirstLoad:!0,enableAutoResizeColumnsByCellContent:!0},t&&(this.gridOptions.presets=t),this.dataset=this.getData(A)}getData(t){let o=new Date().getFullYear(),n=[];for(let a=0;a<t;a++){let u=Math.round(Math.random()*100),C=d(o-15,o+8),I=d(10,25),c=d(1,12),M=c<10?`0${c}`:c,S=d(10,28),x=d(0,100),O=d(10,23),_=d(10,59);n[a]={id:a,title:`Task `+a,etc:`Something hidden `+a,description:a%5?`desc `+a:null,duration:u,percentComplete:x,percentCompleteNumber:x,start:new Date(C,c,S),usDateShort:`${c}/${S}/${I}`,utcDate:`${C}-${M}-${S}T${O}:${_}:${_}Z`,completed:a%3===0}}return n}gridStateChanged(t){console.log(`Client sample, Grid State changed:: `,t),localStorage[h]=JSON.stringify(t.gridState)}saveCurrentGridState(){let t=this.angularGrid.gridStateService.getCurrentGridState();console.log(`Client sample, last Grid State:: `,t),localStorage[h]=JSON.stringify(t)}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)}))}useDefaultPresets(){return{columns:[{columnId:`description`,width:170},{columnId:`title`,width:55},{columnId:`duration`},{columnId:`complete`},{columnId:`start`},{columnId:`usDateShort`},{columnId:`utcDate`}],filters:[{columnId:`duration`,searchTerms:[2,22,44]},{columnId:`usDateShort`,operator:`<`,searchTerms:[`4/20/25`]}],sorters:[{columnId:`duration`,direction:`DESC`},{columnId:`complete`,direction:`ASC`}]}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(o){return new(o||l)}}static{this.ɵcmp=BI({type:l,selectors:[[`ng-component`]],decls:61,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example15.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/grid-state-and-preset`,`target`,`_blank`],[1,`small`],[`data-test`,`reset-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-close`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[`gridId`,`grid15`,3,`onAngularGridCreated`,`onGridStateChanged`,`onBeforeGridDestroy`,`columns`,`options`,`dataset`]],template:function(o,n){o&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 15: Grid State & Presets using Local Storage
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return n.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    Grid State & Preset (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`)
    `),mp(23,`br`),oD(24,`
    `),gi(25,`ul`,8),oD(26,`
      `),gi(27,`li`),oD(28,`Uses Local Storage to persist the Grid State and uses Grid Options "presets" to put the grid back to it's previous state`),xc(),oD(29,`
      `),gi(30,`ul`),oD(31,`
        `),gi(32,`li`),oD(33,`
          to demo this, simply change any columns (position reorder, visibility, size, filter, sort), then refresh your browser with (F5)
        `),xc(),oD(34,`
      `),xc(),oD(35,`
      `),gi(36,`li`),oD(37,`Local Storage is just one option, you can use whichever is more convenient for you (Local Storage, Session Storage, DB, ...)`),xc(),oD(38,`
    `),xc(),oD(39,`
  `),xc(),oD(40,`

  `),gi(41,`button`,9),Dp(`click`,function(){return n.clearGridStateFromLocalStorage()}),oD(42,`
    `),mp(43,`i`,10),oD(44,`
    Clear Grid State from Local Storage & Reset Grid
  `),xc(),oD(45,`

  `),gi(46,`button`,11),Dp(`click`,function(){return n.switchLanguage()}),oD(47,`
    `),mp(48,`i`,12),oD(49,`
    Switch Language
  `),xc(),oD(50,`
  `),gi(51,`b`),oD(52,`Locale:`),xc(),oD(53,`
  `),gi(54,`span`,13),oD(55),xc(),oD(56,`

  `),gi(57,`angular-slickgrid`,14),Dp(`onAngularGridCreated`,function(u){return n.angularGridReady(u.detail)})(`onGridStateChanged`,function(u){return n.gridStateChanged(u.detail)})(`onBeforeGridDestroy`,function(){return n.saveCurrentGridState()}),oD(58,`
  `),xc(),oD(59,`
`),xc(),oD(60,`
`)),o&2&&(av(55),Lc(`
    `,n.selectedLanguage()+`.json`,`
  `),av(2),gp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[q1],encapsulation:2})}}return l})();export{R as Example15Component};
import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Dn as jp,Er as zE,Fn as mp,Hn as oD,Wt as av,b as Fo,dn as gi,g as Dp,l as BI,m as D,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1,ot as ji,v as HM}from"./chunk-C7G4ZLh2.js";import{t as S}from"./chunk-D1IjchuW.js";var _=20;var W=(()=>{class m{constructor(){this.translate=D(ji),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Fo(``),this.selectedLanguageFile=``,this.fetchResult=Fo(``),this.statusClass=Fo(`alert alert-light`),this.statusStyle=Fo(`display: none`);let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnInit(){this.dataset=this.getData(_),this.defineGrid()}angularGridReady(n){this.angularGrid=n}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100,filterable:!0,editor:{model:HM.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100,filterable:!0,type:`number`,editor:{model:HM.text}},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100,filterable:!0,type:`number`,editor:{model:HM.text}},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:HM.date}},{id:`finish`,name:`Finish`,field:`finish`,formatter:JN.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:HM.date}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100,filterable:!0,type:`boolean`,editor:{model:HM.checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onBeforePasteCell:(n,l)=>l.cell>0},autoEdit:!1,editable:!0,enableCellNavigation:!0,enableRowBasedEdit:!0,enableTranslate:!0,i18n:this.translate,rowBasedEditOptions:{allowMultipleRows:!1,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:n=>{let{effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}=n.dataContext;return c>40?(alert(`Sorry, 40 is the maximum allowed duration.`),Promise.resolve(!1)):M(`your-backend-api/endpoint`,{method:`POST`,body:JSON.stringify({effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}),headers:{"Content-type":`application/json; charset=UTF-8`}}).catch(o=>(console.error(o),!1)).then(o=>{if(o===!1)return this.statusClass.set(`alert alert-danger`),!1;if(typeof o==`object`)return o.json()}).then(o=>(this.statusStyle.set(`display: block`),this.statusClass.set(`alert alert-success`),this.fetchResult.set(o.message),!0))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:`button-style margin-auto btn-icon px-2 me-1`,iconEditButtonClassName:`mdi mdi-pencil`,cancelButtonClassName:`button-style btn-icon px-2`,cancelButtonTitle:`Cancel row`,cancelButtonTitleKey:`RBE_BTN_CANCEL`,iconCancelButtonClassName:`mdi mdi-undo text-danger`,cancelButtonPrompt:`Are you sure you want to cancel your changes?`,updateButtonClassName:`button-style btn-icon px-2 me-1`,updateButtonTitle:`Update row`,updateButtonTitleKey:`RBE_BTN_UPDATE`,iconUpdateButtonClassName:`mdi mdi-check text-success`,updateButtonPrompt:`Save changes?`,deleteButtonClassName:`button-style btn-icon px-2`,deleteButtonTitle:`Delete row`,iconDeleteButtonClassName:`mdi mdi-trash-can text-danger`,deleteButtonPrompt:`Are you sure you want to delete this row?`}},externalResources:[new S]}}getData(n){let l=[];for(let a=0;a<n;a++){let s=2e3+Math.floor(Math.random()*10),u=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),f=Math.round(Math.random()*100);l[a]={id:a,title:`Task `+a,duration:Math.round(Math.random()*40)+``,percentComplete:f,start:new Date(s,u+1,c),finish:new Date(s+1,u+1,c),effortDriven:a%5===0}}return l}clearStatus(){this.statusClass.set(`alert alert-light`),this.statusStyle.set(`display: none`),this.fetchResult.set(``)}toggleSingleMultiRowEdit(){let n=s(r({},this.gridOptions),{rowBasedEditOptions:s(r({},this.gridOptions.rowBasedEditOptions),{allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows})});this.angularGrid.slickGrid.setOptions(n),this.gridOptions=this.angularGrid.slickGrid.getOptions()}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=BI({type:m,selectors:[[`ng-component`]],decls:91,vars:7,consts:[[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example35.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/grid-base-row-editing.component.scss`],[1,`has-text-danger`],[`href`,`#/example30`],[`href`,`https://ghiscoding.github.io/slickgrid-universal/#/example19`],[1,`row`,`mb-4`],[1,`col-sm-8`],[`data-test`,`single-multi-toggle`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`toggle-language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-4`],[`data-test`,`fetch-result`,3,`textContent`],[`gridId`,`grid35`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,a){l&1&&(gi(0,`h2`),oD(1,`
  Example 35: Row Based Editing
  `),gi(2,`span`,0),oD(3,`
    `),gi(4,`a`,1),oD(5,`
      `),mp(6,`span`,2),oD(7,` code
    `),xc(),oD(8,`
  `),xc(),oD(9,`
  `),gi(10,`button`,3),Dp(`click`,function(){return a.toggleSubTitle()}),oD(11,`
    `),mp(12,`span`,4),oD(13,`
  `),xc(),oD(14,`
`),xc(),oD(15,`

`),gi(16,`div`,5),oD(17,`
  `),gi(18,`ul`),oD(19,`
    `),gi(20,`li`),oD(21,`
      The Row Based Edit plugin allows you to edit either a single or multiple specific rows at a time, while disabling the rest of the grid
      rows.
    `),xc(),oD(22,`
    `),gi(23,`li`),oD(24,`
      Editedable rows, as well as modified cells are highlighted with a different color, which you can customize using css variables (see
      `),gi(25,`a`,6),oD(26,`
        grid-base-row-editing.component.scss `),xc(),oD(27,`)
    `),xc(),oD(28,`
    `),gi(29,`li`),oD(30,`Modifications are kept track of and if the cancel button is pressed, all modifications are rolled back.`),xc(),oD(31,`
    `),gi(32,`li`),oD(33,`
      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your
      backend.`),mp(34,`br`),oD(35,`
      The callback needs to return a Promise<boolean> and if the promise resolves to true, then the row will be updated, otherwise it
      will be cancelled and stays in edit mode. You can try out the later by defining a Duration value `),gi(36,`b`),oD(37,`larger than 40`),xc(),oD(38,`.
      `),mp(39,`br`),oD(40,`
      `),gi(41,`small`)(42,`span`,7),oD(43,`NOTE:`),xc(),oD(44,` You can also combine this with e.g. Batch Editing like shown
        `),gi(45,`a`,8),oD(46,`in Example 30`),xc()(),oD(47,`
    `),xc(),oD(48,`
    `),gi(49,`li`),oD(50,`
      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal
      `),gi(51,`a`,9),oD(52,`example 19`),xc(),oD(53,`. The example defines a rule that pastes in the
      first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact that only
      the edited rows are allowed to be pasted into, while still respecting the original rule.
    `),xc(),oD(54,`
  `),xc(),oD(55,`
`),xc(),oD(56,`

`),gi(57,`section`),oD(58,`
  `),gi(59,`div`,10),oD(60,`
    `),gi(61,`div`,11),oD(62,`
      `),gi(63,`button`,12),Dp(`click`,function(){return a.toggleSingleMultiRowEdit()}),oD(64,`
        Toggle Single/Multi Row Edit
      `),xc(),oD(65,`
      `),gi(66,`button`,13),Dp(`click`,function(){return a.switchLanguage()}),oD(67,`
        `),mp(68,`i`,14),oD(69,`
        Switch Language
      `),xc(),oD(70,`
      `),gi(71,`b`),oD(72,`Locale:`),xc(),oD(73,` `),gi(74,`span`,15),oD(75),xc(),oD(76,`
    `),xc(),oD(77,`

    `),gi(78,`div`,16),oD(79,`
      `),gi(80,`strong`),oD(81,`Status: `),xc(),oD(82,`
      `),mp(83,`span`,17),oD(84,`
    `),xc(),oD(85,`
  `),xc(),oD(86,`
`),xc(),oD(87,`

`),gi(88,`angular-slickgrid`,18),Dp(`onAngularGridCreated`,function(u){return a.angularGridReady(u.detail)}),oD(89,`
`),xc(),oD(90,`
`)),l&2&&(av(75),jp(a.selectedLanguage()+`.json`),av(3),zE(a.statusClass()),av(5),gp(`textContent`,a.fetchResult()),av(5),gp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[q1],styles:[`.alert{padding:8px;margin-bottom:10px}.status-container{min-height:50px}
`],encapsulation:2})}}return m})();function M(m,R){return new Promise(n=>{setTimeout(()=>{n(new Response(JSON.stringify({status:200,message:`success`})))},window.Cypress?10:500)})}export{W as Example35Component};
import{n as s,t as r}from"./chunk-DarCEgGK.js";import{In as lD,M as Ho,V as JI,a as Ap,mn as dv,on as bp,p as D,tn as _p,xr as vi,xt as Rc,yt as Qp,zt as WE}from"./chunk-7GbCxW7x.js";import{D as Mi,G as WO,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";import{t as S}from"./chunk-BN8xngTr.js";var _=20;var W=(()=>{class m{constructor(){this.translate=D(Mi),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Ho(``),this.selectedLanguageFile=``,this.fetchResult=Ho(``),this.statusClass=Ho(`alert alert-light`),this.statusStyle=Ho(`display: none`);let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnInit(){this.dataset=this.getData(_),this.defineGrid()}angularGridReady(n){this.angularGrid=n}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100,filterable:!0,editor:{model:WO.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100,filterable:!0,type:`number`,editor:{model:WO.text}},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100,filterable:!0,type:`number`,editor:{model:WO.text}},{id:`start`,name:`Start`,field:`start`,formatter:sI.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:WO.date}},{id:`finish`,name:`Finish`,field:`finish`,formatter:sI.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:WO.date}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100,filterable:!0,type:`boolean`,editor:{model:WO.checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onBeforePasteCell:(n,l)=>l.cell>0},autoEdit:!1,editable:!0,enableCellNavigation:!0,enableRowBasedEdit:!0,enableTranslate:!0,i18n:this.translate,rowBasedEditOptions:{allowMultipleRows:!1,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:n=>{let{effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}=n.dataContext;return c>40?(alert(`Sorry, 40 is the maximum allowed duration.`),Promise.resolve(!1)):M(`your-backend-api/endpoint`,{method:`POST`,body:JSON.stringify({effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}),headers:{"Content-type":`application/json; charset=UTF-8`}}).catch(o=>(console.error(o),!1)).then(o=>{if(o===!1)return this.statusClass.set(`alert alert-danger`),!1;if(typeof o==`object`)return o.json()}).then(o=>(this.statusStyle.set(`display: block`),this.statusClass.set(`alert alert-success`),this.fetchResult.set(o.message),!0))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:`button-style margin-auto btn-icon px-2 me-1`,iconEditButtonClassName:`mdi mdi-pencil`,cancelButtonClassName:`button-style btn-icon px-2`,cancelButtonTitle:`Cancel row`,cancelButtonTitleKey:`RBE_BTN_CANCEL`,iconCancelButtonClassName:`mdi mdi-undo text-danger`,cancelButtonPrompt:`Are you sure you want to cancel your changes?`,updateButtonClassName:`button-style btn-icon px-2 me-1`,updateButtonTitle:`Update row`,updateButtonTitleKey:`RBE_BTN_UPDATE`,iconUpdateButtonClassName:`mdi mdi-check text-success`,updateButtonPrompt:`Save changes?`,deleteButtonClassName:`button-style btn-icon px-2`,deleteButtonTitle:`Delete row`,iconDeleteButtonClassName:`mdi mdi-trash-can text-danger`,deleteButtonPrompt:`Are you sure you want to delete this row?`}},externalResources:[new S]}}getData(n){let l=[];for(let a=0;a<n;a++){let s=2e3+Math.floor(Math.random()*10),u=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),f=Math.round(Math.random()*100);l[a]={id:a,title:`Task `+a,duration:Math.round(Math.random()*40)+``,percentComplete:f,start:new Date(s,u+1,c),finish:new Date(s+1,u+1,c),effortDriven:a%5===0}}return l}clearStatus(){this.statusClass.set(`alert alert-light`),this.statusStyle.set(`display: none`),this.fetchResult.set(``)}toggleSingleMultiRowEdit(){let n=s(r({},this.gridOptions),{rowBasedEditOptions:s(r({},this.gridOptions.rowBasedEditOptions),{allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows})});this.angularGrid.slickGrid.setOptions(n),this.gridOptions=this.angularGrid.slickGrid.getOptions()}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=WE({type:m,selectors:[[`ng-component`]],decls:91,vars:7,consts:[[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example35.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/grid-base-row-editing.component.scss`],[1,`has-text-danger`],[`href`,`#/example30`],[`href`,`https://ghiscoding.github.io/slickgrid-universal/#/example19`],[1,`row`,`mb-4`],[1,`col-sm-8`],[`data-test`,`single-multi-toggle`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`toggle-language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-4`],[`data-test`,`fetch-result`,3,`textContent`],[`gridId`,`grid35`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,a){l&1&&(vi(0,`h2`),lD(1,`
  Example 35: Row Based Editing
  `),vi(2,`span`,0),lD(3,`
    `),vi(4,`a`,1),lD(5,`
      `),_p(6,`span`,2),lD(7,` code
    `),Rc(),lD(8,`
  `),Rc(),lD(9,`
  `),vi(10,`button`,3),Ap(`click`,function(){return a.toggleSubTitle()}),lD(11,`
    `),_p(12,`span`,4),lD(13,`
  `),Rc(),lD(14,`
`),Rc(),lD(15,`

`),vi(16,`div`,5),lD(17,`
  `),vi(18,`ul`),lD(19,`
    `),vi(20,`li`),lD(21,`
      The Row Based Edit plugin allows you to edit either a single or multiple specific rows at a time, while disabling the rest of the grid
      rows.
    `),Rc(),lD(22,`
    `),vi(23,`li`),lD(24,`
      Editedable rows, as well as modified cells are highlighted with a different color, which you can customize using css variables (see
      `),vi(25,`a`,6),lD(26,`
        grid-base-row-editing.component.scss `),Rc(),lD(27,`)
    `),Rc(),lD(28,`
    `),vi(29,`li`),lD(30,`Modifications are kept track of and if the cancel button is pressed, all modifications are rolled back.`),Rc(),lD(31,`
    `),vi(32,`li`),lD(33,`
      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your
      backend.`),_p(34,`br`),lD(35,`
      The callback needs to return a Promise<boolean> and if the promise resolves to true, then the row will be updated, otherwise it
      will be cancelled and stays in edit mode. You can try out the later by defining a Duration value `),vi(36,`b`),lD(37,`larger than 40`),Rc(),lD(38,`.
      `),_p(39,`br`),lD(40,`
      `),vi(41,`small`)(42,`span`,7),lD(43,`NOTE:`),Rc(),lD(44,` You can also combine this with e.g. Batch Editing like shown
        `),vi(45,`a`,8),lD(46,`in Example 30`),Rc()(),lD(47,`
    `),Rc(),lD(48,`
    `),vi(49,`li`),lD(50,`
      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal
      `),vi(51,`a`,9),lD(52,`example 19`),Rc(),lD(53,`. The example defines a rule that pastes in the
      first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact that only
      the edited rows are allowed to be pasted into, while still respecting the original rule.
    `),Rc(),lD(54,`
  `),Rc(),lD(55,`
`),Rc(),lD(56,`

`),vi(57,`section`),lD(58,`
  `),vi(59,`div`,10),lD(60,`
    `),vi(61,`div`,11),lD(62,`
      `),vi(63,`button`,12),Ap(`click`,function(){return a.toggleSingleMultiRowEdit()}),lD(64,`
        Toggle Single/Multi Row Edit
      `),Rc(),lD(65,`
      `),vi(66,`button`,13),Ap(`click`,function(){return a.switchLanguage()}),lD(67,`
        `),_p(68,`i`,14),lD(69,`
        Switch Language
      `),Rc(),lD(70,`
      `),vi(71,`b`),lD(72,`Locale:`),Rc(),lD(73,` `),vi(74,`span`,15),lD(75),Rc(),lD(76,`
    `),Rc(),lD(77,`

    `),vi(78,`div`,16),lD(79,`
      `),vi(80,`strong`),lD(81,`Status: `),Rc(),lD(82,`
      `),_p(83,`span`,17),lD(84,`
    `),Rc(),lD(85,`
  `),Rc(),lD(86,`
`),Rc(),lD(87,`

`),vi(88,`angular-slickgrid`,18),Ap(`onAngularGridCreated`,function(u){return a.angularGridReady(u.detail)}),lD(89,`
`),Rc(),lD(90,`
`)),l&2&&(dv(75),Qp(a.selectedLanguage()+`.json`),dv(3),JI(a.statusClass()),dv(5),bp(`textContent`,a.fetchResult()),dv(5),bp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[D1],styles:[`.alert{padding:8px;margin-bottom:10px}.status-container{min-height:50px}
`],encapsulation:2})}}return m})();function M(m,R){return new Promise(n=>{setTimeout(()=>{n(new Response(JSON.stringify({status:200,message:`success`})))},window.Cypress?10:500)})}export{W as Example35Component};
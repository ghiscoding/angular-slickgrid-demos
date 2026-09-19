import{n as s,t as r}from"./chunk-DarCEgGK.js";import{F as Ip,Ot as Up,Pn as ly,Wt as ZI,b as Ep,j as Ho,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi,xt as T}from"./chunk-Rd4ToC_L.js";import{F as WA,W as _W,ht as nk,m as Ki}from"./chunk-DLuyVhQJ.js";import{t as S}from"./chunk-CB5gCqaD.js";var _=20;var W=(()=>{class m{constructor(){this.translate=T(Ki),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Ho(``),this.selectedLanguageFile=``,this.fetchResult=Ho(``),this.statusClass=Ho(`alert alert-light`),this.statusStyle=Ho(`display: none`);let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnInit(){this.dataset=this.getData(_),this.defineGrid()}angularGridReady(n){this.angularGrid=n}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100,filterable:!0,editor:{model:WA.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100,filterable:!0,type:`number`,editor:{model:WA.text}},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100,filterable:!0,type:`number`,editor:{model:WA.text}},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:WA.date}},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:WA.date}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100,filterable:!0,type:`boolean`,editor:{model:WA.checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onBeforePasteCell:(n,l)=>l.cell>0},autoEdit:!1,editable:!0,enableCellNavigation:!0,enableRowBasedEdit:!0,enableTranslate:!0,i18n:this.translate,rowBasedEditOptions:{allowMultipleRows:!1,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:n=>{let{effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}=n.dataContext;return c>40?(alert(`Sorry, 40 is the maximum allowed duration.`),Promise.resolve(!1)):M(`your-backend-api/endpoint`,{method:`POST`,body:JSON.stringify({effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}),headers:{"Content-type":`application/json; charset=UTF-8`}}).catch(o=>(console.error(o),!1)).then(o=>{if(o===!1)return this.statusClass.set(`alert alert-danger`),!1;if(typeof o==`object`)return o.json()}).then(o=>(this.statusStyle.set(`display: block`),this.statusClass.set(`alert alert-success`),this.fetchResult.set(o.message),!0))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:`button-style margin-auto btn-icon px-2 me-1`,iconEditButtonClassName:`mdi mdi-pencil`,cancelButtonClassName:`button-style btn-icon px-2`,cancelButtonTitle:`Cancel row`,cancelButtonTitleKey:`RBE_BTN_CANCEL`,iconCancelButtonClassName:`mdi mdi-undo text-danger`,cancelButtonPrompt:`Are you sure you want to cancel your changes?`,updateButtonClassName:`button-style btn-icon px-2 me-1`,updateButtonTitle:`Update row`,updateButtonTitleKey:`RBE_BTN_UPDATE`,iconUpdateButtonClassName:`mdi mdi-check text-success`,updateButtonPrompt:`Save changes?`,deleteButtonClassName:`button-style btn-icon px-2`,deleteButtonTitle:`Delete row`,iconDeleteButtonClassName:`mdi mdi-trash-can text-danger`,deleteButtonPrompt:`Are you sure you want to delete this row?`}},externalResources:[new S]}}getData(n){let l=[];for(let a=0;a<n;a++){let s=2e3+Math.floor(Math.random()*10),u=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),f=Math.round(Math.random()*100);l[a]={id:a,title:`Task `+a,duration:Math.round(Math.random()*40)+``,percentComplete:f,start:new Date(s,u+1,c),finish:new Date(s+1,u+1,c),effortDriven:a%5===0}}return l}clearStatus(){this.statusClass.set(`alert alert-light`),this.statusStyle.set(`display: none`),this.fetchResult.set(``)}toggleSingleMultiRowEdit(){let n=s(r({},this.gridOptions),{rowBasedEditOptions:s(r({},this.gridOptions.rowBasedEditOptions),{allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows})});this.angularGrid.slickGrid.setOptions(n),this.gridOptions=this.angularGrid.slickGrid.getOptions()}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=$E({type:m,selectors:[[`ng-component`]],decls:91,vars:7,consts:[[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example35.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/grid-base-row-editing.component.scss`],[1,`has-text-danger`],[`href`,`#/example30`],[`href`,`https://ghiscoding.github.io/slickgrid-universal/#/example19`],[1,`row`,`mb-4`],[1,`col-sm-8`],[`data-test`,`single-multi-toggle`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`toggle-language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-4`],[`data-test`,`fetch-result`,3,`textContent`],[`gridId`,`grid35`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,a){l&1&&(yi(0,`h2`),sD(1,`
  Example 35: Row Based Editing
  `),yi(2,`span`,0),sD(3,`
    `),yi(4,`a`,1),sD(5,`
      `),Ip(6,`span`,2),sD(7,` code
    `),Rc(),sD(8,`
  `),Rc(),sD(9,`
  `),yi(10,`button`,3),bp(`click`,function(){return a.toggleSubTitle()}),sD(11,`
    `),Ip(12,`span`,4),sD(13,`
  `),Rc(),sD(14,`
`),Rc(),sD(15,`

`),yi(16,`div`,5),sD(17,`
  `),yi(18,`ul`),sD(19,`
    `),yi(20,`li`),sD(21,`
      The Row Based Edit plugin allows you to edit either a single or multiple specific rows at a time, while disabling the rest of the grid
      rows.
    `),Rc(),sD(22,`
    `),yi(23,`li`),sD(24,`
      Editedable rows, as well as modified cells are highlighted with a different color, which you can customize using css variables (see
      `),yi(25,`a`,6),sD(26,`
        grid-base-row-editing.component.scss `),Rc(),sD(27,`)
    `),Rc(),sD(28,`
    `),yi(29,`li`),sD(30,`Modifications are kept track of and if the cancel button is pressed, all modifications are rolled back.`),Rc(),sD(31,`
    `),yi(32,`li`),sD(33,`
      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your
      backend.`),Ip(34,`br`),sD(35,`
      The callback needs to return a Promise<boolean> and if the promise resolves to true, then the row will be updated, otherwise it
      will be cancelled and stays in edit mode. You can try out the later by defining a Duration value `),yi(36,`b`),sD(37,`larger than 40`),Rc(),sD(38,`.
      `),Ip(39,`br`),sD(40,`
      `),yi(41,`small`)(42,`span`,7),sD(43,`NOTE:`),Rc(),sD(44,` You can also combine this with e.g. Batch Editing like shown
        `),yi(45,`a`,8),sD(46,`in Example 30`),Rc()(),sD(47,`
    `),Rc(),sD(48,`
    `),yi(49,`li`),sD(50,`
      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal
      `),yi(51,`a`,9),sD(52,`example 19`),Rc(),sD(53,`. The example defines a rule that pastes in the
      first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact that only
      the edited rows are allowed to be pasted into, while still respecting the original rule.
    `),Rc(),sD(54,`
  `),Rc(),sD(55,`
`),Rc(),sD(56,`

`),yi(57,`section`),sD(58,`
  `),yi(59,`div`,10),sD(60,`
    `),yi(61,`div`,11),sD(62,`
      `),yi(63,`button`,12),bp(`click`,function(){return a.toggleSingleMultiRowEdit()}),sD(64,`
        Toggle Single/Multi Row Edit
      `),Rc(),sD(65,`
      `),yi(66,`button`,13),bp(`click`,function(){return a.switchLanguage()}),sD(67,`
        `),Ip(68,`i`,14),sD(69,`
        Switch Language
      `),Rc(),sD(70,`
      `),yi(71,`b`),sD(72,`Locale:`),Rc(),sD(73,` `),yi(74,`span`,15),sD(75),Rc(),sD(76,`
    `),Rc(),sD(77,`

    `),yi(78,`div`,16),sD(79,`
      `),yi(80,`strong`),sD(81,`Status: `),Rc(),sD(82,`
      `),Ip(83,`span`,17),sD(84,`
    `),Rc(),sD(85,`
  `),Rc(),sD(86,`
`),Rc(),sD(87,`

`),yi(88,`angular-slickgrid`,18),bp(`onAngularGridCreated`,function(u){return a.angularGridReady(u.detail)}),sD(89,`
`),Rc(),sD(90,`
`)),l&2&&(ly(75),Up(a.selectedLanguage()+`.json`),ly(3),ZI(a.statusClass()),ly(5),Ep(`textContent`,a.fetchResult()),ly(5),Ep(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[_W],styles:[`.alert{padding:8px;margin-bottom:10px}.status-container{min-height:50px}
`],encapsulation:2})}}return m})();function M(m,R){return new Promise(n=>{setTimeout(()=>{n(new Response(JSON.stringify({status:200,message:`success`})))},window.Cypress?10:500)})}export{W as Example35Component};
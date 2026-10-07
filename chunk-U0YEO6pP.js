import{n as s,t as r}from"./chunk-DarCEgGK.js";import{$ as Mp,C as Ei,En as iD,_ as D,_t as QI,b as Dp,c as BE,cn as ay,ct as Oc,f as Bo,jt as Tp,sr as qp}from"./chunk-CtIlL7jI.js";import{Ot as xz,U as ZI,g as Gi,xt as uP}from"./chunk-o9GGBwbJ.js";import{t as S}from"./chunk-JSXc_pGV.js";var _=20;var W=(()=>{class m{constructor(){this.translate=D(Gi),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Bo(``),this.selectedLanguageFile=``,this.fetchResult=Bo(``),this.statusClass=Bo(`alert alert-light`),this.statusStyle=Bo(`display: none`);let n=`en`;this.translate.use(n),this.selectedLanguage.set(n)}ngOnInit(){this.dataset=this.getData(_),this.defineGrid()}angularGridReady(n){this.angularGrid=n}defineGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,minWidth:100,filterable:!0,editor:{model:ZI.text}},{id:`duration`,name:`Duration (days)`,field:`duration`,sortable:!0,minWidth:100,filterable:!0,type:`number`,editor:{model:ZI.text}},{id:`%`,name:`% Complete`,field:`percentComplete`,sortable:!0,minWidth:100,filterable:!0,type:`number`,editor:{model:ZI.text}},{id:`start`,name:`Start`,field:`start`,formatter:uP.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:ZI.date}},{id:`finish`,name:`Finish`,field:`finish`,formatter:uP.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:ZI.date}},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,sortable:!0,minWidth:100,filterable:!0,type:`boolean`,editor:{model:ZI.checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onBeforePasteCell:(n,l)=>l.cell>0},autoEdit:!1,editable:!0,enableCellNavigation:!0,enableRowBasedEdit:!0,enableTranslate:!0,i18n:this.translate,rowBasedEditOptions:{allowMultipleRows:!1,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:n=>{let{effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}=n.dataContext;return c>40?(alert(`Sorry, 40 is the maximum allowed duration.`),Promise.resolve(!1)):M(`your-backend-api/endpoint`,{method:`POST`,body:JSON.stringify({effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}),headers:{"Content-type":`application/json; charset=UTF-8`}}).catch(o=>(console.error(o),!1)).then(o=>{if(o===!1)return this.statusClass.set(`alert alert-danger`),!1;if(typeof o==`object`)return o.json()}).then(o=>(this.statusStyle.set(`display: block`),this.statusClass.set(`alert alert-success`),this.fetchResult.set(o.message),!0))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:`button-style margin-auto btn-icon px-2 me-1`,iconEditButtonClassName:`mdi mdi-pencil`,cancelButtonClassName:`button-style btn-icon px-2`,cancelButtonTitle:`Cancel row`,cancelButtonTitleKey:`RBE_BTN_CANCEL`,iconCancelButtonClassName:`mdi mdi-undo text-danger`,cancelButtonPrompt:`Are you sure you want to cancel your changes?`,updateButtonClassName:`button-style btn-icon px-2 me-1`,updateButtonTitle:`Update row`,updateButtonTitleKey:`RBE_BTN_UPDATE`,iconUpdateButtonClassName:`mdi mdi-check text-success`,updateButtonPrompt:`Save changes?`,deleteButtonClassName:`button-style btn-icon px-2`,deleteButtonTitle:`Delete row`,iconDeleteButtonClassName:`mdi mdi-trash-can text-danger`,deleteButtonPrompt:`Are you sure you want to delete this row?`}},externalResources:[new S]}}getData(n){let l=[];for(let a=0;a<n;a++){let s=2e3+Math.floor(Math.random()*10),u=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),f=Math.round(Math.random()*100);l[a]={id:a,title:`Task `+a,duration:Math.round(Math.random()*40)+``,percentComplete:f,start:new Date(s,u+1,c),finish:new Date(s+1,u+1,c),effortDriven:a%5===0}}return l}clearStatus(){this.statusClass.set(`alert alert-light`),this.statusStyle.set(`display: none`),this.fetchResult.set(``)}toggleSingleMultiRowEdit(){let n=s(r({},this.gridOptions),{rowBasedEditOptions:s(r({},this.gridOptions.rowBasedEditOptions),{allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows})});this.angularGrid.slickGrid.setOptions(n),this.gridOptions=this.angularGrid.slickGrid.getOptions()}switchLanguage(){let n=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=BE({type:m,selectors:[[`ng-component`]],decls:91,vars:7,consts:[[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example35.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/grid-base-row-editing.component.scss`],[1,`has-text-danger`],[`href`,`#/example30`],[`href`,`https://ghiscoding.github.io/slickgrid-universal/#/example19`],[1,`row`,`mb-4`],[1,`col-sm-8`],[`data-test`,`single-multi-toggle`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`toggle-language`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-4`],[`data-test`,`fetch-result`,3,`textContent`],[`gridId`,`grid35`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,a){l&1&&(Ei(0,`h2`),iD(1,`
  Example 35: Row Based Editing
  `),Ei(2,`span`,0),iD(3,`
    `),Ei(4,`a`,1),iD(5,`
      `),Tp(6,`span`,2),iD(7,` code
    `),Oc(),iD(8,`
  `),Oc(),iD(9,`
  `),Ei(10,`button`,3),Mp(`click`,function(){return a.toggleSubTitle()}),iD(11,`
    `),Tp(12,`span`,4),iD(13,`
  `),Oc(),iD(14,`
`),Oc(),iD(15,`

`),Ei(16,`div`,5),iD(17,`
  `),Ei(18,`ul`),iD(19,`
    `),Ei(20,`li`),iD(21,`
      The Row Based Edit plugin allows you to edit either a single or multiple specific rows at a time, while disabling the rest of the grid
      rows.
    `),Oc(),iD(22,`
    `),Ei(23,`li`),iD(24,`
      Editedable rows, as well as modified cells are highlighted with a different color, which you can customize using css variables (see
      `),Ei(25,`a`,6),iD(26,`
        grid-base-row-editing.component.scss `),Oc(),iD(27,`)
    `),Oc(),iD(28,`
    `),Ei(29,`li`),iD(30,`Modifications are kept track of and if the cancel button is pressed, all modifications are rolled back.`),Oc(),iD(31,`
    `),Ei(32,`li`),iD(33,`
      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your
      backend.`),Tp(34,`br`),iD(35,`
      The callback needs to return a Promise<boolean> and if the promise resolves to true, then the row will be updated, otherwise it
      will be cancelled and stays in edit mode. You can try out the later by defining a Duration value `),Ei(36,`b`),iD(37,`larger than 40`),Oc(),iD(38,`.
      `),Tp(39,`br`),iD(40,`
      `),Ei(41,`small`)(42,`span`,7),iD(43,`NOTE:`),Oc(),iD(44,` You can also combine this with e.g. Batch Editing like shown
        `),Ei(45,`a`,8),iD(46,`in Example 30`),Oc()(),iD(47,`
    `),Oc(),iD(48,`
    `),Ei(49,`li`),iD(50,`
      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal
      `),Ei(51,`a`,9),iD(52,`example 19`),Oc(),iD(53,`. The example defines a rule that pastes in the
      first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact that only
      the edited rows are allowed to be pasted into, while still respecting the original rule.
    `),Oc(),iD(54,`
  `),Oc(),iD(55,`
`),Oc(),iD(56,`

`),Ei(57,`section`),iD(58,`
  `),Ei(59,`div`,10),iD(60,`
    `),Ei(61,`div`,11),iD(62,`
      `),Ei(63,`button`,12),Mp(`click`,function(){return a.toggleSingleMultiRowEdit()}),iD(64,`
        Toggle Single/Multi Row Edit
      `),Oc(),iD(65,`
      `),Ei(66,`button`,13),Mp(`click`,function(){return a.switchLanguage()}),iD(67,`
        `),Tp(68,`i`,14),iD(69,`
        Switch Language
      `),Oc(),iD(70,`
      `),Ei(71,`b`),iD(72,`Locale:`),Oc(),iD(73,` `),Ei(74,`span`,15),iD(75),Oc(),iD(76,`
    `),Oc(),iD(77,`

    `),Ei(78,`div`,16),iD(79,`
      `),Ei(80,`strong`),iD(81,`Status: `),Oc(),iD(82,`
      `),Tp(83,`span`,17),iD(84,`
    `),Oc(),iD(85,`
  `),Oc(),iD(86,`
`),Oc(),iD(87,`

`),Ei(88,`angular-slickgrid`,18),Mp(`onAngularGridCreated`,function(u){return a.angularGridReady(u.detail)}),iD(89,`
`),Oc(),iD(90,`
`)),l&2&&(ay(75),qp(a.selectedLanguage()+`.json`),ay(3),QI(a.statusClass()),ay(5),Dp(`textContent`,a.fetchResult()),ay(5),Dp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[xz],styles:[`.alert{padding:8px;margin-bottom:10px}.status-container{min-height:50px}
`],encapsulation:2})}}return m})();function M(m,R){return new Promise(n=>{setTimeout(()=>{n(new Response(JSON.stringify({status:200,message:`success`})))},window.Cypress?10:500)})}export{W as Example35Component};
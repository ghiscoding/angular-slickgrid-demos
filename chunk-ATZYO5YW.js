import{a as T}from"./chunk-JAJZW54C.js";import{Da as v,u as B,ya as d,za as E}from"./chunk-V3K67AAF.js";import{Ib as C,Jb as e,Kb as k,Oa as S,U as y,hb as w,ia as h,ib as t,jb as i,kb as r,ub as p,za as g}from"./chunk-CCOLL5XZ.js";import{a as b,b as x}from"./chunk-PRARYYF3.js";var _=20,W=(()=>{class m{constructor(){this.translate=y(B),this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=h(""),this.selectedLanguageFile="",this.fetchResult=h(""),this.statusClass=h("alert alert-light"),this.statusStyle=h("display: none");let n="en";this.translate.use(n),this.selectedLanguage.set(n)}ngOnInit(){this.dataset=this.getData(_),this.defineGrid()}angularGridReady(n){this.angularGrid=n}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,minWidth:100,filterable:!0,editor:{model:d.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,minWidth:100,filterable:!0,type:"number",editor:{model:d.text}},{id:"%",name:"% Complete",field:"percentComplete",sortable:!0,minWidth:100,filterable:!0,type:"number",editor:{model:d.text}},{id:"start",name:"Start",field:"start",formatter:E.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:d.date}},{id:"finish",name:"Finish",field:"finish",formatter:E.dateIso,exportWithFormatter:!0,filterable:!0,editor:{model:d.date}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:!0,minWidth:100,filterable:!0,type:"boolean",editor:{model:d.checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onBeforePasteCell:(n,l)=>l.cell>0},autoEdit:!1,editable:!0,enableCellNavigation:!0,enableRowBasedEdit:!0,enableTranslate:!0,i18n:this.translate,rowBasedEditOptions:{allowMultipleRows:!1,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:n=>{let{effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}=n.dataContext;return c>40?(alert("Sorry, 40 is the maximum allowed duration."),Promise.resolve(!1)):M("your-backend-api/endpoint",{method:"POST",body:JSON.stringify({effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}),headers:{"Content-type":"application/json; charset=UTF-8"}}).catch(o=>(console.error(o),!1)).then(o=>{if(o===!1)return this.statusClass.set("alert alert-danger"),!1;if(typeof o=="object")return o.json()}).then(o=>(this.statusStyle.set("display: block"),this.statusClass.set("alert alert-success"),this.fetchResult.set(o.message),!0))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:"button-style margin-auto btn-icon px-2 me-1",iconEditButtonClassName:"mdi mdi-pencil",cancelButtonClassName:"button-style btn-icon px-2",cancelButtonTitle:"Cancel row",cancelButtonTitleKey:"RBE_BTN_CANCEL",iconCancelButtonClassName:"mdi mdi-undo text-danger",cancelButtonPrompt:"Are you sure you want to cancel your changes?",updateButtonClassName:"button-style btn-icon px-2 me-1",updateButtonTitle:"Update row",updateButtonTitleKey:"RBE_BTN_UPDATE",iconUpdateButtonClassName:"mdi mdi-check text-success",updateButtonPrompt:"Save changes?",deleteButtonClassName:"button-style btn-icon px-2",deleteButtonTitle:"Delete row",iconDeleteButtonClassName:"mdi mdi-trash-can text-danger",deleteButtonPrompt:"Are you sure you want to delete this row?"}},externalResources:[new T]}}getData(n){let l=[];for(let a=0;a<n;a++){let s=2e3+Math.floor(Math.random()*10),u=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),f=Math.round(Math.random()*100);l[a]={id:a,title:"Task "+a,duration:Math.round(Math.random()*40)+"",percentComplete:f,start:new Date(s,u+1,c),finish:new Date(s+1,u+1,c),effortDriven:a%5===0}}return l}clearStatus(){this.statusClass.set("alert alert-light"),this.statusStyle.set("display: none"),this.fetchResult.set("")}toggleSingleMultiRowEdit(){let n=x(b({},this.gridOptions),{rowBasedEditOptions:x(b({},this.gridOptions.rowBasedEditOptions),{allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows})});this.angularGrid.slickGrid.setOptions(n),this.gridOptions=this.angularGrid.slickGrid.getOptions()}switchLanguage(){let n=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n)}))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(l){return new(l||m)}}static{this.\u0275cmp=S({type:m,selectors:[["ng-component"]],decls:91,vars:7,consts:[[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example35.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/grid-base-row-editing.component.scss"],[1,"has-text-danger"],["href","#/example30"],["href","https://ghiscoding.github.io/slickgrid-universal/#/example19"],[1,"row","mb-4"],[1,"col-sm-8"],["data-test","single-multi-toggle",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","toggle-language",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[1,"col-sm-4"],["data-test","fetch-result",3,"textContent"],["gridId","grid35",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,a){l&1&&(t(0,"h2"),e(1,`
  Example 35: Row Based Editing
  `),t(2,"span",0),e(3,`
    `),t(4,"a",1),e(5,`
      `),r(6,"span",2),e(7,` code
    `),i(),e(8,`
  `),i(),e(9,`
  `),t(10,"button",3),p("click",function(){return a.toggleSubTitle()}),e(11,`
    `),r(12,"span",4),e(13,`
  `),i(),e(14,`
`),i(),e(15,`

`),t(16,"div",5),e(17,`
  `),t(18,"ul"),e(19,`
    `),t(20,"li"),e(21,`
      The Row Based Edit plugin allows you to edit either a single or multiple specific rows at a time, while disabling the rest of the grid
      rows.
    `),i(),e(22,`
    `),t(23,"li"),e(24,`
      Editedable rows, as well as modified cells are highlighted with a different color, which you can customize using css variables (see
      `),t(25,"a",6),e(26,`
        grid-base-row-editing.component.scss `),i(),e(27,`)
    `),i(),e(28,`
    `),t(29,"li"),e(30,"Modifications are kept track of and if the cancel button is pressed, all modifications are rolled back."),i(),e(31,`
    `),t(32,"li"),e(33,`
      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your
      backend.`),r(34,"br"),e(35,`
      The callback needs to return a Promise<boolean> and if the promise resolves to true, then the row will be updated, otherwise it
      will be cancelled and stays in edit mode. You can try out the later by defining a Duration value `),t(36,"b"),e(37,"larger than 40"),i(),e(38,`.
      `),r(39,"br"),e(40,`
      `),t(41,"small")(42,"span",7),e(43,"NOTE:"),i(),e(44,` You can also combine this with e.g. Batch Editing like shown
        `),t(45,"a",8),e(46,"in Example 30"),i()(),e(47,`
    `),i(),e(48,`
    `),t(49,"li"),e(50,`
      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal
      `),t(51,"a",9),e(52,"example 19"),i(),e(53,`. The example defines a rule that pastes in the
      first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact that only
      the edited rows are allowed to be pasted into, while still respecting the original rule.
    `),i(),e(54,`
  `),i(),e(55,`
`),i(),e(56,`

`),t(57,"section"),e(58,`
  `),t(59,"div",10),e(60,`
    `),t(61,"div",11),e(62,`
      `),t(63,"button",12),p("click",function(){return a.toggleSingleMultiRowEdit()}),e(64,`
        Toggle Single/Multi Row Edit
      `),i(),e(65,`
      `),t(66,"button",13),p("click",function(){return a.switchLanguage()}),e(67,`
        `),r(68,"i",14),e(69,`
        Switch Language
      `),i(),e(70,`
      `),t(71,"b"),e(72,"Locale:"),i(),e(73," "),t(74,"span",15),e(75),i(),e(76,`
    `),i(),e(77,`

    `),t(78,"div",16),e(79,`
      `),t(80,"strong"),e(81,"Status: "),i(),e(82,`
      `),r(83,"span",17),e(84,`
    `),i(),e(85,`
  `),i(),e(86,`
`),i(),e(87,`

`),t(88,"angular-slickgrid",18),p("onAngularGridCreated",function(u){return a.angularGridReady(u.detail)}),e(89,`
`),i(),e(90,`
`)),l&2&&(g(75),k(a.selectedLanguage()+".json"),g(3),C(a.statusClass()),g(5),w("textContent",a.fetchResult()),g(5),w("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset))},dependencies:[v],styles:[`.alert{padding:8px;margin-bottom:10px}.status-container{min-height:50px}
`],encapsulation:2})}}return m})();function M(m,R){return new Promise(n=>{setTimeout(()=>{n(new Response(JSON.stringify({status:200,message:"success"})))},window.Cypress?10:500)})}export{W as Example35Component};

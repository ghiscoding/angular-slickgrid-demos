import {S}from'./chunk-CljjKoz8.js';import {D,j as ji,A as Ao,k as kM,q as qN,s,r as r$1,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,M as Mp,v as SE,g as sp}from'./main-C6PQTYH6.js';var _=20,W=(()=>{class m{constructor(){this.translate=D(ji),this.subscriptions=[],this.hideSubTitle=false,this.selectedLanguage=Ao(""),this.selectedLanguageFile="",this.fetchResult=Ao(""),this.statusClass=Ao("alert alert-light"),this.statusStyle=Ao("display: none");let n="en";this.translate.use(n),this.selectedLanguage.set(n);}ngOnInit(){this.dataset=this.getData(_),this.defineGrid();}angularGridReady(n){this.angularGrid=n;}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,minWidth:100,filterable:true,editor:{model:kM.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,minWidth:100,filterable:true,type:"number",editor:{model:kM.text}},{id:"%",name:"% Complete",field:"percentComplete",sortable:true,minWidth:100,filterable:true,type:"number",editor:{model:kM.text}},{id:"start",name:"Start",field:"start",formatter:qN.dateIso,exportWithFormatter:true,filterable:true,editor:{model:kM.date}},{id:"finish",name:"Finish",field:"finish",formatter:qN.dateIso,exportWithFormatter:true,filterable:true,editor:{model:kM.date}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true,minWidth:100,filterable:true,type:"boolean",editor:{model:kM.checkbox}}],this.gridOptions={enableAutoResize:false,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:true,excelCopyBufferOptions:{onBeforePasteCell:(n,l)=>l.cell>0},autoEdit:false,editable:true,enableCellNavigation:true,enableRowBasedEdit:true,enableTranslate:true,i18n:this.translate,rowBasedEditOptions:{allowMultipleRows:false,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:n=>{let{effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}=n.dataContext;return c>40?(alert("Sorry, 40 is the maximum allowed duration."),Promise.resolve(false)):M("your-backend-api/endpoint",{body:JSON.stringify({effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f})}).catch(o=>(console.error(o),false)).then(o=>{if(o===false)return this.statusClass.set("alert alert-danger"),false;if(typeof o=="object")return o.json()}).then(o=>(this.statusStyle.set("display: block"),this.statusClass.set("alert alert-success"),this.fetchResult.set(o.message),true))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:"button-style margin-auto btn-icon px-2 me-1",iconEditButtonClassName:"mdi mdi-pencil",cancelButtonClassName:"button-style btn-icon px-2",cancelButtonTitle:"Cancel row",cancelButtonTitleKey:"RBE_BTN_CANCEL",iconCancelButtonClassName:"mdi mdi-undo text-danger",cancelButtonPrompt:"Are you sure you want to cancel your changes?",updateButtonClassName:"button-style btn-icon px-2 me-1",updateButtonTitle:"Update row",updateButtonTitleKey:"RBE_BTN_UPDATE",iconUpdateButtonClassName:"mdi mdi-check text-success",updateButtonPrompt:"Save changes?",deleteButtonClassName:"button-style btn-icon px-2",deleteButtonTitle:"Delete row",iconDeleteButtonClassName:"mdi mdi-trash-can text-danger",deleteButtonPrompt:"Are you sure you want to delete this row?"}},externalResources:[new S]};}getData(n){let l=[];for(let a=0;a<n;a++){let s=2e3+Math.floor(Math.random()*10),u=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),f=Math.round(Math.random()*100);l[a]={id:a,title:"Task "+a,duration:Math.round(Math.random()*40)+"",percentComplete:f,start:new Date(s,u+1,c),finish:new Date(s+1,u+1,c),effortDriven:a%5===0};}return l}clearStatus(){this.statusClass.set("alert alert-light"),this.statusStyle.set("display: none"),this.fetchResult.set("");}toggleSingleMultiRowEdit(){let n=s(r$1({},this.gridOptions),{rowBasedEditOptions:s(r$1({},this.gridOptions.rowBasedEditOptions),{allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows})});this.angularGrid.slickGrid.setOptions(n),this.gridOptions=this.angularGrid.slickGrid.getOptions();}switchLanguage(){let n=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n);}));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||m)};}static{this.\u0275cmp=TI({type:m,selectors:[["ng-component"]],decls:91,vars:7,consts:[[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example35.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/grid-base-row-editing.component.scss"],[1,"has-text-danger"],["href","#/example30"],["href","https://ghiscoding.github.io/slickgrid-universal/#/example19"],[1,"row","mb-4"],[1,"col-sm-8"],["data-test","single-multi-toggle",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","toggle-language",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[1,"col-sm-4"],["data-test","fetch-result",3,"textContent"],["gridId","grid35",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,a){l&1&&(ui(0,"h2"),BE(1,`
  Example 35: Row Based Editing
  `),ui(2,"span",0),BE(3,`
    `),ui(4,"a",1),BE(5,`
      `),ap(6,"span",2),BE(7,` code
    `),Tc(),BE(8,`
  `),Tc(),BE(9,`
  `),ui(10,"button",3),fp("click",function(){return a.toggleSubTitle()}),BE(11,`
    `),ap(12,"span",4),BE(13,`
  `),Tc(),BE(14,`
`),Tc(),BE(15,`

`),ui(16,"div",5),BE(17,`
  `),ui(18,"ul"),BE(19,`
    `),ui(20,"li"),BE(21,`
      The Row Based Edit plugin allows you to edit either a single or multiple specific rows at a time, while disabling the rest of the grid
      rows.
    `),Tc(),BE(22,`
    `),ui(23,"li"),BE(24,`
      Editedable rows, as well as modified cells are highlighted with a different color, which you can customize using css variables (see
      `),ui(25,"a",6),BE(26,`
        grid-base-row-editing.component.scss `),Tc(),BE(27,`)
    `),Tc(),BE(28,`
    `),ui(29,"li"),BE(30,"Modifications are kept track of and if the cancel button is pressed, all modifications are rolled back."),Tc(),BE(31,`
    `),ui(32,"li"),BE(33,`
      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your
      backend.`),ap(34,"br"),BE(35,`
      The callback needs to return a Promise<boolean> and if the promise resolves to true, then the row will be updated, otherwise it
      will be cancelled and stays in edit mode. You can try out the later by defining a Duration value `),ui(36,"b"),BE(37,"larger than 40"),Tc(),BE(38,`.
      `),ap(39,"br"),BE(40,`
      `),ui(41,"small")(42,"span",7),BE(43,"NOTE:"),Tc(),BE(44,` You can also combine this with e.g. Batch Editing like shown
        `),ui(45,"a",8),BE(46,"in Example 30"),Tc()(),BE(47,`
    `),Tc(),BE(48,`
    `),ui(49,"li"),BE(50,`
      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal
      `),ui(51,"a",9),BE(52,"example 19"),Tc(),BE(53,`. The example defines a rule that pastes in the
      first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact that only
      the edited rows are allowed to be pasted into, while still respecting the original rule.
    `),Tc(),BE(54,`
  `),Tc(),BE(55,`
`),Tc(),BE(56,`

`),ui(57,"section"),BE(58,`
  `),ui(59,"div",10),BE(60,`
    `),ui(61,"div",11),BE(62,`
      `),ui(63,"button",12),fp("click",function(){return a.toggleSingleMultiRowEdit()}),BE(64,`
        Toggle Single/Multi Row Edit
      `),Tc(),BE(65,`
      `),ui(66,"button",13),fp("click",function(){return a.switchLanguage()}),BE(67,`
        `),ap(68,"i",14),BE(69,`
        Switch Language
      `),Tc(),BE(70,`
      `),ui(71,"b"),BE(72,"Locale:"),Tc(),BE(73," "),ui(74,"span",15),BE(75),Tc(),BE(76,`
    `),Tc(),BE(77,`

    `),ui(78,"div",16),BE(79,`
      `),ui(80,"strong"),BE(81,"Status: "),Tc(),BE(82,`
      `),ap(83,"span",17),BE(84,`
    `),Tc(),BE(85,`
  `),Tc(),BE(86,`
`),Tc(),BE(87,`

`),ui(88,"angular-slickgrid",18),fp("onAngularGridCreated",function(u){return a.angularGridReady(u.detail)}),BE(89,`
`),Tc(),BE(90,`
`)),l&2&&(Uy(75),Mp(a.selectedLanguage()+".json"),Uy(3),SE(a.statusClass()),Uy(5),sp("textContent",a.fetchResult()),Uy(5),sp("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[U1],styles:[`.alert{padding:8px;margin-bottom:10px}.status-container{min-height:50px}
`],encapsulation:2});}}return m})();function M(m,R){return new Promise(n=>{setTimeout(()=>{n(new Response(JSON.stringify({status:200,message:"success"})));},window.Cypress?10:500);})}export{W as Example35Component};
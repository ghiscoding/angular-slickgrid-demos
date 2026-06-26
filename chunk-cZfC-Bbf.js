import {S}from'./chunk-BHP64rgi.js';import {D,e as ji,A as Ao,M as MM,X as XN,s,r as r$1,b as bI,j as j1,u as ui,U as UE,c as cp,T as Tc,p as pp,W as Wy,N as Np,q as AE,d as ap}from'./main-WTCLCICA.js';var _=20,W=(()=>{class m{constructor(){this.translate=D(ji),this.subscriptions=[],this.hideSubTitle=false,this.selectedLanguage=Ao(""),this.selectedLanguageFile="",this.fetchResult=Ao(""),this.statusClass=Ao("alert alert-light"),this.statusStyle=Ao("display: none");let n="en";this.translate.use(n),this.selectedLanguage.set(n);}ngOnInit(){this.dataset=this.getData(_),this.defineGrid();}angularGridReady(n){this.angularGrid=n;}defineGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,minWidth:100,filterable:true,editor:{model:MM.text}},{id:"duration",name:"Duration (days)",field:"duration",sortable:true,minWidth:100,filterable:true,type:"number",editor:{model:MM.text}},{id:"%",name:"% Complete",field:"percentComplete",sortable:true,minWidth:100,filterable:true,type:"number",editor:{model:MM.text}},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,exportWithFormatter:true,filterable:true,editor:{model:MM.date}},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,exportWithFormatter:true,filterable:true,editor:{model:MM.date}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",sortable:true,minWidth:100,filterable:true,type:"boolean",editor:{model:MM.checkbox}}],this.gridOptions={enableAutoResize:false,gridHeight:350,gridWidth:800,rowHeight:33,enableExcelCopyBuffer:true,excelCopyBufferOptions:{onBeforePasteCell:(n,l)=>l.cell>0},autoEdit:false,editable:true,enableCellNavigation:true,enableRowBasedEdit:true,enableTranslate:true,i18n:this.translate,rowBasedEditOptions:{allowMultipleRows:false,onBeforeEditMode:()=>this.clearStatus(),onBeforeRowUpdated:n=>{let{effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f}=n.dataContext;return c>40?(alert("Sorry, 40 is the maximum allowed duration."),Promise.resolve(false)):M("your-backend-api/endpoint",{body:JSON.stringify({effortDriven:l,percentComplete:a,finish:s,start:u,duration:c,title:f})}).catch(o=>(console.error(o),false)).then(o=>{if(o===false)return this.statusClass.set("alert alert-danger"),false;if(typeof o=="object")return o.json()}).then(o=>(this.statusStyle.set("display: block"),this.statusClass.set("alert alert-success"),this.fetchResult.set(o.message),true))},actionColumnConfig:{width:100,minWidth:100,maxWidth:100},actionButtons:{editButtonClassName:"button-style margin-auto btn-icon px-2 me-1",iconEditButtonClassName:"mdi mdi-pencil",cancelButtonClassName:"button-style btn-icon px-2",cancelButtonTitle:"Cancel row",cancelButtonTitleKey:"RBE_BTN_CANCEL",iconCancelButtonClassName:"mdi mdi-undo text-danger",cancelButtonPrompt:"Are you sure you want to cancel your changes?",updateButtonClassName:"button-style btn-icon px-2 me-1",updateButtonTitle:"Update row",updateButtonTitleKey:"RBE_BTN_UPDATE",iconUpdateButtonClassName:"mdi mdi-check text-success",updateButtonPrompt:"Save changes?",deleteButtonClassName:"button-style btn-icon px-2",deleteButtonTitle:"Delete row",iconDeleteButtonClassName:"mdi mdi-trash-can text-danger",deleteButtonPrompt:"Are you sure you want to delete this row?"}},externalResources:[new S]};}getData(n){let l=[];for(let a=0;a<n;a++){let s=2e3+Math.floor(Math.random()*10),u=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),f=Math.round(Math.random()*100);l[a]={id:a,title:"Task "+a,duration:Math.round(Math.random()*40)+"",percentComplete:f,start:new Date(s,u+1,c),finish:new Date(s+1,u+1,c),effortDriven:a%5===0};}return l}clearStatus(){this.statusClass.set("alert alert-light"),this.statusStyle.set("display: none"),this.fetchResult.set("");}toggleSingleMultiRowEdit(){let n=s(r$1({},this.gridOptions),{rowBasedEditOptions:s(r$1({},this.gridOptions.rowBasedEditOptions),{allowMultipleRows:!this.gridOptions.rowBasedEditOptions?.allowMultipleRows})});this.angularGrid.slickGrid.setOptions(n),this.gridOptions=this.angularGrid.slickGrid.getOptions();}switchLanguage(){let n=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(n).subscribe(()=>{this.selectedLanguage.set(n);}));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(l){return new(l||m)};}static{this.\u0275cmp=bI({type:m,selectors:[["ng-component"]],decls:91,vars:7,consts:[[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example35.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/grid-base-row-editing.component.scss"],[1,"has-text-danger"],["href","#/example30"],["href","https://ghiscoding.github.io/slickgrid-universal/#/example19"],[1,"row","mb-4"],[1,"col-sm-8"],["data-test","single-multi-toggle",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","toggle-language",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[1,"col-sm-4"],["data-test","fetch-result",3,"textContent"],["gridId","grid35",3,"onAngularGridCreated","columns","options","dataset"]],template:function(l,a){l&1&&(ui(0,"h2"),UE(1,`
  Example 35: Row Based Editing
  `),ui(2,"span",0),UE(3,`
    `),ui(4,"a",1),UE(5,`
      `),cp(6,"span",2),UE(7,` code
    `),Tc(),UE(8,`
  `),Tc(),UE(9,`
  `),ui(10,"button",3),pp("click",function(){return a.toggleSubTitle()}),UE(11,`
    `),cp(12,"span",4),UE(13,`
  `),Tc(),UE(14,`
`),Tc(),UE(15,`

`),ui(16,"div",5),UE(17,`
  `),ui(18,"ul"),UE(19,`
    `),ui(20,"li"),UE(21,`
      The Row Based Edit plugin allows you to edit either a single or multiple specific rows at a time, while disabling the rest of the grid
      rows.
    `),Tc(),UE(22,`
    `),ui(23,"li"),UE(24,`
      Editedable rows, as well as modified cells are highlighted with a different color, which you can customize using css variables (see
      `),ui(25,"a",6),UE(26,`
        grid-base-row-editing.component.scss `),Tc(),UE(27,`)
    `),Tc(),UE(28,`
    `),ui(29,"li"),UE(30,"Modifications are kept track of and if the cancel button is pressed, all modifications are rolled back."),Tc(),UE(31,`
    `),ui(32,"li"),UE(33,`
      If the save button is pressed, a custom "onBeforeRowUpdated" callback is called, which you can use to save the data with your
      backend.`),cp(34,"br"),UE(35,`
      The callback needs to return a Promise<boolean> and if the promise resolves to true, then the row will be updated, otherwise it
      will be cancelled and stays in edit mode. You can try out the later by defining a Duration value `),ui(36,"b"),UE(37,"larger than 40"),Tc(),UE(38,`.
      `),cp(39,"br"),UE(40,`
      `),ui(41,"small")(42,"span",7),UE(43,"NOTE:"),Tc(),UE(44,` You can also combine this with e.g. Batch Editing like shown
        `),ui(45,"a",8),UE(46,"in Example 30"),Tc()(),UE(47,`
    `),Tc(),UE(48,`
    `),ui(49,"li"),UE(50,`
      This example additionally uses the ExcelCopyBuffer Plugin, which you can see also in Slickgrid-Universal
      `),ui(51,"a",9),UE(52,"example 19"),Tc(),UE(53,`. The example defines a rule that pastes in the
      first column are prohibited. In combination with the Row Based Editing Plugin though, this rule gets enhanced with the fact that only
      the edited rows are allowed to be pasted into, while still respecting the original rule.
    `),Tc(),UE(54,`
  `),Tc(),UE(55,`
`),Tc(),UE(56,`

`),ui(57,"section"),UE(58,`
  `),ui(59,"div",10),UE(60,`
    `),ui(61,"div",11),UE(62,`
      `),ui(63,"button",12),pp("click",function(){return a.toggleSingleMultiRowEdit()}),UE(64,`
        Toggle Single/Multi Row Edit
      `),Tc(),UE(65,`
      `),ui(66,"button",13),pp("click",function(){return a.switchLanguage()}),UE(67,`
        `),cp(68,"i",14),UE(69,`
        Switch Language
      `),Tc(),UE(70,`
      `),ui(71,"b"),UE(72,"Locale:"),Tc(),UE(73," "),ui(74,"span",15),UE(75),Tc(),UE(76,`
    `),Tc(),UE(77,`

    `),ui(78,"div",16),UE(79,`
      `),ui(80,"strong"),UE(81,"Status: "),Tc(),UE(82,`
      `),cp(83,"span",17),UE(84,`
    `),Tc(),UE(85,`
  `),Tc(),UE(86,`
`),Tc(),UE(87,`

`),ui(88,"angular-slickgrid",18),pp("onAngularGridCreated",function(u){return a.angularGridReady(u.detail)}),UE(89,`
`),Tc(),UE(90,`
`)),l&2&&(Wy(75),Np(a.selectedLanguage()+".json"),Wy(3),AE(a.statusClass()),Wy(5),ap("textContent",a.fetchResult()),Wy(5),ap("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[j1],styles:[`.alert{padding:8px;margin-bottom:10px}.status-container{min-height:50px}
`],encapsulation:2});}}return m})();function M(m,R){return new Promise(n=>{setTimeout(()=>{n(new Response(JSON.stringify({status:200,message:"success"})));},window.Cypress?10:500);})}export{W as Example35Component};
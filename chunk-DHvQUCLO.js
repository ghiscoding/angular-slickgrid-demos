import {Z as Ze}from'./chunk-CP-2FMG8.js';import {D,j as ji,A as Ao,G as G1,q as qN,h as Tu,T as TI,U as U1,u as ui,B as BE,f as fp,a as ap,d as Tc,e as Uy,N as Nc,g as sp}from'./main-C6PQTYH6.js';var _=(d,x,t,n,a)=>a.priority===3?'<div class="cell-menu-dropdown-outline">Action<i class="mdi mdi-chevron-down"></i></div>':'<div class="cell-menu-dropdown-outline disabled">Action <i class="mdi mdi-chevron-down"></i></div>',w=(d,x,t)=>{if(!t)return "";let n="",a=+(t>=3?3:t),m=`<i class="mdi mdi-star ${a===3?"red":a===2?"orange":"yellow"}" aria-hidden="true"></i>`;for(let s=1;s<=a;s++)n+=m;return n},T=(d,x,t,n,a,l)=>{if(!t)return "";let s=l.getOptions().i18n,C=+(t>=3?3:t),v=C===3?"HIGH":C===2?"MEDIUM":"LOW";return s&&s.instant&&s.instant(v)},I=(d,x,t,n,a,l)=>{let s=l.getOptions().i18n;return s&&s.instant&&s.instant("TASK_X",{x:t})},R=(()=>{class d{constructor(){this.translate=D(ji),this._darkModeGrid=false,this.subscriptions=[],this.hideSubTitle=false,this.selectedLanguage=Ao("");let t="en";this.translate.use(t),this.selectedLanguage.set(t);}angularGridReady(t){this.angularGrid=t;}get cellMenuInstance(){return this.angularGrid?.extensionService?.getExtensionInstanceByName("cellMenu")}get contextMenuInstance(){return this.angularGrid?.extensionService?.getExtensionInstanceByName("contextMenu")}ngOnInit(){this.prepareGrid(),this.dataset=this.getData(1e3);}ngOnDestroy(){G1(this.subscriptions),document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}prepareGrid(){this.columns=[{id:"id",name:"#",field:"id",maxWidth:45,sortable:true,filterable:true},{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:I,sortable:true,filterable:true,params:{useFormatterOuputToFilter:true}},{id:"percentComplete",nameKey:"PERCENT_COMPLETE",field:"percentComplete",minWidth:100,exportWithFormatter:false,sortable:true,filterable:true,filter:{model:Tu.slider,operator:">="},formatter:qN.percentCompleteBar,type:"number"},{id:"start",name:"Start",field:"start",nameKey:"START",minWidth:100,formatter:qN.dateIso,outputType:"dateIso",type:"date",filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:qN.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:true,filter:{model:Tu.compoundDate}},{id:"priority",nameKey:"PRIORITY",field:"priority",exportCustomFormatter:T,formatter:w,sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:1,labelKey:"LOW"},{value:2,labelKey:"MEDIUM"},{value:3,labelKey:"HIGH"}],model:Tu.singleSelect,enableTranslateLabel:true}},{id:"completed",nameKey:"COMPLETED",field:"completed",exportCustomFormatter:qN.translateBoolean,formatter:qN.checkmarkMaterial,sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,labelKey:"TRUE"},{value:false,labelKey:"FALSE"}],model:Tu.singleSelect,enableTranslateLabel:true}},{id:"action",name:"Action",field:"action",width:100,maxWidth:110,excludeFromExport:true,formatter:_,cellMenu:{hideCloseButton:false,menuUsabilityOverride:t=>t.dataContext.priority===3,commandTitleKey:"COMMANDS",commandItems:[{command:"command2",title:"Command 2",positionOrder:62,action:(t,n)=>{console.log(n.dataContext,n.column);},itemUsabilityOverride:t=>!t.dataContext.completed},{command:"command1",title:"Command 1",cssClass:"orange",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",positionOrder:64,iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",itemVisibilityOverride:t=>!t.dataContext.completed},{divider:true,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:66},{command:"something",titleKey:"DISABLED_COMMAND",disabled:true,positionOrder:67},{command:"",divider:true,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_COMPLETED_FLAG",optionItems:[{option:true,titleKey:"TRUE",iconCssClass:"mdi mdi-check-box-outline"},{option:false,titleKey:"FALSE",iconCssClass:"mdi mdi-checkbox-blank-outline"},{option:null,title:"null",cssClass:"italic",action:(t,n)=>{},itemUsabilityOverride:t=>t.dataContext.priority===3,itemVisibilityOverride:t=>!t.dataContext.completed}]}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkModeGrid,enableCellNavigation:true,enableFiltering:true,enableSorting:true,enableTranslate:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:true,customColumnWidth:15,columnHeaderStyle:{font:{bold:true,italic:true}}},i18n:this.translate,externalResources:[new Ze],enableContextMenu:true,enableCellMenu:true,cellMenu:{onCommand:(t,n)=>this.executeCommand(t,n),onOptionSelected:(t,n)=>{let a=n?.dataContext;a&&"completed"in a&&(a.completed=n.item.option,this.angularGrid.gridService.updateItem(a));},onBeforeMenuShow:(t,n)=>{console.log("Before the Cell Menu is shown",n);},onBeforeMenuClose:(t,n)=>console.log("Cell Menu is closing",n)},contextMenu:this.getContextMenuOptions()};}executeCommand(t,n){let a=n.command,l=n.dataContext;switch(a){case "contact-email":case "contact-chat":case "contact-meeting":alert("Command: "+n?.command);break;case "exports-csv":case "exports-txt":case "exports-xlsx":alert(`Exporting as ${n.item.title}`);break;case "command1":alert("Command 1");break;case "command2":alert("Command 2");break;case "help":alert("Please help!");break;case "delete-row":confirm(`Do you really want to delete row ${n.row+1} with ${this.translate.instant("TASK_X",{x:l.id})}`)&&this.angularGrid.dataView.deleteItem(l.id);break}}getData(t){let n=[];for(let a=0;a<t;a++){let l=2e3+Math.floor(Math.random()*30),m=Math.floor(Math.random()*11),s=Math.floor(Math.random()*29);n[a]={id:a,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(l,m,s),finish:new Date(l,m+1,s),priority:a%3?2:a%5?3:1,completed:a%4===0};}return n}getContextMenuOptions(){return {hideCloseButton:false,menuUsabilityOverride:t=>(t?.dataContext).id<21,commandShownOverColumnIds:["id","title","percentComplete","start","finish","completed"],commandTitleKey:"COMMANDS",commandItems:[{divider:true,command:"",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",positionOrder:62},{divider:true,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:64,action:(t,n)=>{},itemVisibilityOverride:t=>!(t?.dataContext).completed},{command:"something",titleKey:"DISABLED_COMMAND",disabled:true,positionOrder:65},{command:"",divider:true,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_PRIORITY",optionShownOverColumnIds:["priority"],optionItems:[{option:0,title:"n/a",textCssClass:"italic",itemUsabilityOverride:t=>!(t?.dataContext).completed,action:(t,n)=>{}},{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"},"divider",{option:4,title:"Extreme",iconCssClass:"mdi mdi-fire",disabled:true,itemVisibilityOverride:t=>!(t?.dataContext).completed},{option:null,title:"Sub-Options (demo)",subMenuTitleKey:"CHANGE_PRIORITY",optionItems:[{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"}]}],onBeforeMenuShow:(t,n)=>{this.angularGrid.slickGrid.setActiveCell(n.row,n.cell,false),console.log("Before the global Context Menu is shown",n);},onBeforeMenuClose:(t,n)=>console.log("Global Context Menu is closing",n),onCommand:(t,n)=>this.executeCommand(t,n),onOptionSelected:(t,n)=>{let a=n?.dataContext;"priority"in a&&(a.priority=n.item.option,this.angularGrid.gridService.updateItem(a));}}}showContextCommandsAndOptions(t){let n=t?[]:["id","title","complete","start","finish","completed","action"];this.contextMenuInstance?.setOptions({commandShownOverColumnIds:n});}showCellMenuCommandsAndOptions(t){this.cellMenuInstance?.setOptions({hideOptionSection:!t});}switchLanguage(){let t=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t);}));}toggleDarkMode(){this._darkModeGrid=!this._darkModeGrid,this._darkModeGrid?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkModeGrid});}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(n){return new(n||d)};}static{this.\u0275cmp=TI({type:d,selectors:[["ng-component"]],decls:141,vars:4,consts:[[1,"container-fluid"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example24.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/cell-menu","target","_blank"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/context-menu","target","_blank"],[1,"row","mb-1"],[1,"col-12"],[1,"context-menu"],["data-test","context-menu-priority-only-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","context-menu-commands-and-priority-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"cell-menu"],["data-test","cell-menu-commands-and-options-false-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","cell-menu-commands-and-options-true-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"row","locale"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[1,"col-sm-12"],["gridId","grid24",3,"onAngularGridCreated","columns","options","dataset"]],template:function(n,a){n&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 24: Cell Menu & Context Menu Plugins
    `),ui(4,"button",1),fp("click",function(){return a.toggleSubTitle()}),BE(5,`
      `),ap(6,"span",2),BE(7,`
    `),Tc(),BE(8,`
    `),ui(9,"button",3),fp("click",function(){return a.toggleDarkMode()}),BE(10,`
      `),ui(11,"span"),BE(12,"Toggle Dark Mode"),Tc(),BE(13,`
    `),Tc(),BE(14,`
    `),ui(15,"span",4),BE(16,`
      `),ui(17,"a",5),BE(18,`
        `),ap(19,"span",6),BE(20,` code
      `),Tc(),BE(21,`
    `),Tc(),BE(22,`
  `),Tc(),BE(23,`

  `),ui(24,"div",7),BE(25,`
    Add Cell Menu and Context Menu
    `),ui(26,"ul"),BE(27,`
      `),ui(28,"li"),BE(29,"This example demonstrates 2 SlickGrid plugins"),Tc(),BE(30,`
      `),ui(31,"ol"),BE(32,`
        `),ui(33,"li"),BE(34,`
          Using the `),ui(35,"b"),BE(36,"Slick.Plugins.CellMenu"),Tc(),BE(37," plugin, often used for an Action Menu(s), 1 or more per grid ("),ui(38,"a",8),BE(39,"Wiki docs"),Tc(),BE(40,`).
        `),Tc(),BE(41,`
        `),ui(42,"li"),BE(43,`
          Using the `),ui(44,"b"),BE(45,"Slick.Plugins.ContextMenu"),Tc(),BE(46," plugin, shown after a mouse right+click, only 1 per grid. ("),ui(47,"a",9),BE(48,"Wiki docs"),Tc(),BE(49,`).
        `),Tc(),BE(50,`
      `),Tc(),BE(51,`
      `),ui(52,"li"),BE(53,'It will also "autoAdjustDrop" (bottom/top) and "autoAlignSide" (left/right) by default but could be turned off'),Tc(),BE(54,`
      `),ui(55,"li"),BE(56,`
        Both plugins have 2 sections, 1st section can have an array of Options (to change value of a field) and 2nd section an array of
        Commands (execute a command)
      `),Tc(),BE(57,`
      `),ui(58,"li"),BE(59,"There are 2 ways to execute a Command/Option"),Tc(),BE(60,`
      `),ui(61,"ol"),BE(62,`
        `),ui(63,"li"),BE(64,"via onCommand/onOptionSelected (use a switch/case to parse command/option and do something with it)"),Tc(),BE(65,`
        `),ui(66,"li"),BE(67,"via action callback (that can be defined on each command/option)"),Tc(),BE(68,`
      `),Tc(),BE(69,`
      `),ui(70,"li"),BE(71,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),Tc(),BE(72,`
      `),ui(73,"ol"),BE(74,`
        `),ui(75,"li"),BE(76,'These callbacks are: "menuUsabilityOverride", "itemVisibilityOverride", "itemUsabilityOverride"'),Tc(),BE(77,`
        `),ui(78,"li"),BE(79,'... e.g. in the demo, the "Action" Cell Menu is only available when Priority is set to "High" via "menuUsabilityOverride"'),Tc(),BE(80,`
        `),ui(81,"li"),BE(82,'... e.g. in the demo, the Context Menu is only available on the first 20 Tasks via "menuUsabilityOverride"'),Tc(),BE(83,`
      `),Tc(),BE(84,`
    `),Tc(),BE(85,`
  `),Tc(),BE(86,`

  `),ui(87,"div",10),BE(88,`
    `),ui(89,"div",11),BE(90,`
      `),ui(91,"span",12),BE(92,`
        `),ui(93,"strong"),BE(94,"Context Menu:"),Tc(),BE(95,`
        `),ui(96,"button",13),fp("click",function(){return a.showContextCommandsAndOptions(false)}),BE(97,`
          Show Priority Options Only
        `),Tc(),BE(98,`
        `),ui(99,"button",14),fp("click",function(){return a.showContextCommandsAndOptions(true)}),BE(100,`
          Show Commands & Priority Options
        `),Tc(),BE(101,`
      `),Tc(),BE(102,`

      `),ui(103,"span",15),BE(104,`
        `),ui(105,"strong"),BE(106,"Cell Menu:"),Tc(),BE(107,`
        `),ui(108,"button",16),fp("click",function(){return a.showCellMenuCommandsAndOptions(false)}),BE(109,`
          Show Action Commands Only
        `),Tc(),BE(110,`
        `),ui(111,"button",17),fp("click",function(){return a.showCellMenuCommandsAndOptions(true)}),BE(112,`
          Show Actions Commands & Completed Options
        `),Tc(),BE(113,`
      `),Tc(),BE(114,`
    `),Tc(),BE(115,`
  `),Tc(),BE(116,`
  `),ui(117,"div",18),BE(118,`
    `),ui(119,"div",11),BE(120,`
      `),ui(121,"button",19),fp("click",function(){return a.switchLanguage()}),BE(122,`
        `),ap(123,"i",20),BE(124,`
        Switch Language
      `),Tc(),BE(125,`
      `),ui(126,"b"),BE(127,"Locale:"),Tc(),BE(128,`
      `),ui(129,"span",21),BE(130),Tc(),BE(131,`
    `),Tc(),BE(132,`
  `),Tc(),BE(133,`

  `),ui(134,"div",22),BE(135,`
    `),ui(136,"angular-slickgrid",23),fp("onAngularGridCreated",function(m){return a.angularGridReady(m.detail)}),BE(137,`
    `),Tc(),BE(138,`
  `),Tc(),BE(139,`
`),Tc(),BE(140,`
`)),n&2&&(Uy(130),Nc(`
        `,a.selectedLanguage()+".json",`
      `),Uy(6),sp("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[U1],styles:[`.bold{font-weight:700}.italic{font-style:italic}.grey{color:gray}.orange{color:orange}.red{color:red}.yellow{color:#ffeb34}.pointer{cursor:pointer}.cell-menu-dropdown-outline{border:1px solid #a0a0a0;border-radius:4px;width:max-content;padding:2px 14px;cursor:pointer}.cell-menu-dropdown-outline:hover:not(.disabled){background-color:#a3a3a3;color:#fff}.cell-menu-dropdown-outline .mdi-caret-down{margin-left:5px}.disabled{color:#d4d4d4;border:1px solid #d8d8d8}.slick-dark-mode .disabled{border:1px solid #616161;color:#686868}.row.locale{margin-top:5px}span.cell-menu{margin-left:15px}
`],encapsulation:2});}}return d})();export{R as Example24Component};
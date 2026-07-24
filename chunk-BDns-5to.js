import {Z as Ze}from'./chunk-6W1Wahwc.js';import {D,d as ji,A as Ao,U as U1,X as XN,e as Tu,_ as _I,j as j1,u as ui,q as qE,p as pp,c as cp,T as Tc,W as Wy,i as Nc,a as ap}from'./main-MYLFMRPB.js';var _=(d,x,t,n,a)=>a.priority===3?'<div class="cell-menu-dropdown-outline">Action<i class="mdi mdi-chevron-down"></i></div>':'<div class="cell-menu-dropdown-outline disabled">Action <i class="mdi mdi-chevron-down"></i></div>',w=(d,x,t)=>{if(!t)return "";let n="",a=+(t>=3?3:t),m=`<i class="mdi mdi-star ${a===3?"red":a===2?"orange":"yellow"}" aria-hidden="true"></i>`;for(let s=1;s<=a;s++)n+=m;return n},T=(d,x,t,n,a,l)=>{if(!t)return "";let s=l.getOptions().i18n,C=+(t>=3?3:t),v=C===3?"HIGH":C===2?"MEDIUM":"LOW";return s&&s.instant&&s.instant(v)},I=(d,x,t,n,a,l)=>{let s=l.getOptions().i18n;return s&&s.instant&&s.instant("TASK_X",{x:t})},R=(()=>{class d{constructor(){this.translate=D(ji),this._darkModeGrid=false,this.subscriptions=[],this.hideSubTitle=false,this.selectedLanguage=Ao("");let t="en";this.translate.use(t),this.selectedLanguage.set(t);}angularGridReady(t){this.angularGrid=t;}get cellMenuInstance(){return this.angularGrid?.extensionService?.getExtensionInstanceByName("cellMenu")}get contextMenuInstance(){return this.angularGrid?.extensionService?.getExtensionInstanceByName("contextMenu")}ngOnInit(){this.prepareGrid(),this.dataset=this.getData(1e3);}ngOnDestroy(){U1(this.subscriptions),document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light";}prepareGrid(){this.columns=[{id:"id",name:"#",field:"id",maxWidth:45,sortable:true,filterable:true},{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:I,sortable:true,filterable:true,params:{useFormatterOuputToFilter:true}},{id:"percentComplete",nameKey:"PERCENT_COMPLETE",field:"percentComplete",minWidth:100,exportWithFormatter:false,sortable:true,filterable:true,filter:{model:Tu.slider,operator:">="},formatter:XN.percentCompleteBar,type:"number"},{id:"start",name:"Start",field:"start",nameKey:"START",minWidth:100,formatter:XN.dateIso,outputType:"dateIso",type:"date",filterable:true,filter:{model:Tu.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:XN.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:true,filter:{model:Tu.compoundDate}},{id:"priority",nameKey:"PRIORITY",field:"priority",exportCustomFormatter:T,formatter:w,sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:1,labelKey:"LOW"},{value:2,labelKey:"MEDIUM"},{value:3,labelKey:"HIGH"}],model:Tu.singleSelect,enableTranslateLabel:true}},{id:"completed",nameKey:"COMPLETED",field:"completed",exportCustomFormatter:XN.translateBoolean,formatter:XN.checkmarkMaterial,sortable:true,filterable:true,filter:{collection:[{value:"",label:""},{value:true,labelKey:"TRUE"},{value:false,labelKey:"FALSE"}],model:Tu.singleSelect,enableTranslateLabel:true}},{id:"action",name:"Action",field:"action",width:100,maxWidth:110,excludeFromExport:true,formatter:_,cellMenu:{hideCloseButton:false,menuUsabilityOverride:t=>t.dataContext.priority===3,commandTitleKey:"COMMANDS",commandItems:[{command:"command2",title:"Command 2",positionOrder:62,action:(t,n)=>{console.log(n.dataContext,n.column);},itemUsabilityOverride:t=>!t.dataContext.completed},{command:"command1",title:"Command 1",cssClass:"orange",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",positionOrder:64,iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",itemVisibilityOverride:t=>!t.dataContext.completed},{divider:true,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:66},{command:"something",titleKey:"DISABLED_COMMAND",disabled:true,positionOrder:67},{command:"",divider:true,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_COMPLETED_FLAG",optionItems:[{option:true,titleKey:"TRUE",iconCssClass:"mdi mdi-check-box-outline"},{option:false,titleKey:"FALSE",iconCssClass:"mdi mdi-checkbox-blank-outline"},{option:null,title:"null",cssClass:"italic",action:(t,n)=>{},itemUsabilityOverride:t=>t.dataContext.priority===3,itemVisibilityOverride:t=>!t.dataContext.completed}]}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkModeGrid,enableCellNavigation:true,enableFiltering:true,enableSorting:true,enableTranslate:true,enableExcelExport:true,excelExportOptions:{exportWithFormatter:true,customColumnWidth:15,columnHeaderStyle:{font:{bold:true,italic:true}}},i18n:this.translate,externalResources:[new Ze],enableContextMenu:true,enableCellMenu:true,cellMenu:{onCommand:(t,n)=>this.executeCommand(t,n),onOptionSelected:(t,n)=>{let a=n?.dataContext;a&&"completed"in a&&(a.completed=n.item.option,this.angularGrid.gridService.updateItem(a));},onBeforeMenuShow:(t,n)=>{console.log("Before the Cell Menu is shown",n);},onBeforeMenuClose:(t,n)=>console.log("Cell Menu is closing",n)},contextMenu:this.getContextMenuOptions()};}executeCommand(t,n){let a=n.command,l=n.dataContext;switch(a){case "contact-email":case "contact-chat":case "contact-meeting":alert("Command: "+n?.command);break;case "exports-csv":case "exports-txt":case "exports-xlsx":alert(`Exporting as ${n.item.title}`);break;case "command1":alert("Command 1");break;case "command2":alert("Command 2");break;case "help":alert("Please help!");break;case "delete-row":confirm(`Do you really want to delete row ${n.row+1} with ${this.translate.instant("TASK_X",{x:l.id})}`)&&this.angularGrid.dataView.deleteItem(l.id);break}}getData(t){let n=[];for(let a=0;a<t;a++){let l=2e3+Math.floor(Math.random()*30),m=Math.floor(Math.random()*11),s=Math.floor(Math.random()*29);n[a]={id:a,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(l,m,s),finish:new Date(l,m+1,s),priority:a%3?2:a%5?3:1,completed:a%4===0};}return n}getContextMenuOptions(){return {hideCloseButton:false,menuUsabilityOverride:t=>(t?.dataContext).id<21,commandShownOverColumnIds:["id","title","percentComplete","start","finish","completed"],commandTitleKey:"COMMANDS",commandItems:[{divider:true,command:"",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",positionOrder:62},{divider:true,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:64,action:(t,n)=>{},itemVisibilityOverride:t=>!(t?.dataContext).completed},{command:"something",titleKey:"DISABLED_COMMAND",disabled:true,positionOrder:65},{command:"",divider:true,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_PRIORITY",optionShownOverColumnIds:["priority"],optionItems:[{option:0,title:"n/a",textCssClass:"italic",itemUsabilityOverride:t=>!(t?.dataContext).completed,action:(t,n)=>{}},{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"},"divider",{option:4,title:"Extreme",iconCssClass:"mdi mdi-fire",disabled:true,itemVisibilityOverride:t=>!(t?.dataContext).completed},{option:null,title:"Sub-Options (demo)",subMenuTitleKey:"CHANGE_PRIORITY",optionItems:[{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"}]}],onBeforeMenuShow:(t,n)=>{this.angularGrid.slickGrid.setActiveCell(n.row,n.cell,false),console.log("Before the global Context Menu is shown",n);},onBeforeMenuClose:(t,n)=>console.log("Global Context Menu is closing",n),onCommand:(t,n)=>this.executeCommand(t,n),onOptionSelected:(t,n)=>{let a=n?.dataContext;"priority"in a&&(a.priority=n.item.option,this.angularGrid.gridService.updateItem(a));}}}showContextCommandsAndOptions(t){let n=t?[]:["id","title","complete","start","finish","completed","action"];this.contextMenuInstance?.setOptions({commandShownOverColumnIds:n});}showCellMenuCommandsAndOptions(t){this.cellMenuInstance?.setOptions({hideOptionSection:!t});}switchLanguage(){let t=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t);}));}toggleDarkMode(){this._darkModeGrid=!this._darkModeGrid,this._darkModeGrid?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkModeGrid});}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(n){return new(n||d)};}static{this.\u0275cmp=_I({type:d,selectors:[["ng-component"]],decls:141,vars:4,consts:[[1,"container-fluid"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example24.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/cell-menu","target","_blank"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/context-menu","target","_blank"],[1,"row","mb-1"],[1,"col-12"],[1,"context-menu"],["data-test","context-menu-priority-only-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","context-menu-commands-and-priority-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"cell-menu"],["data-test","cell-menu-commands-and-options-false-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","cell-menu-commands-and-options-true-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"row","locale"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[1,"col-sm-12"],["gridId","grid24",3,"onAngularGridCreated","columns","options","dataset"]],template:function(n,a){n&1&&(ui(0,"div",0),qE(1,`
  `),ui(2,"h2"),qE(3,`
    Example 24: Cell Menu & Context Menu Plugins
    `),ui(4,"button",1),pp("click",function(){return a.toggleSubTitle()}),qE(5,`
      `),cp(6,"span",2),qE(7,`
    `),Tc(),qE(8,`
    `),ui(9,"button",3),pp("click",function(){return a.toggleDarkMode()}),qE(10,`
      `),ui(11,"span"),qE(12,"Toggle Dark Mode"),Tc(),qE(13,`
    `),Tc(),qE(14,`
    `),ui(15,"span",4),qE(16,`
      `),ui(17,"a",5),qE(18,`
        `),cp(19,"span",6),qE(20,` code
      `),Tc(),qE(21,`
    `),Tc(),qE(22,`
  `),Tc(),qE(23,`

  `),ui(24,"div",7),qE(25,`
    Add Cell Menu and Context Menu
    `),ui(26,"ul"),qE(27,`
      `),ui(28,"li"),qE(29,"This example demonstrates 2 SlickGrid plugins"),Tc(),qE(30,`
      `),ui(31,"ol"),qE(32,`
        `),ui(33,"li"),qE(34,`
          Using the `),ui(35,"b"),qE(36,"Slick.Plugins.CellMenu"),Tc(),qE(37," plugin, often used for an Action Menu(s), 1 or more per grid ("),ui(38,"a",8),qE(39,"Wiki docs"),Tc(),qE(40,`).
        `),Tc(),qE(41,`
        `),ui(42,"li"),qE(43,`
          Using the `),ui(44,"b"),qE(45,"Slick.Plugins.ContextMenu"),Tc(),qE(46," plugin, shown after a mouse right+click, only 1 per grid. ("),ui(47,"a",9),qE(48,"Wiki docs"),Tc(),qE(49,`).
        `),Tc(),qE(50,`
      `),Tc(),qE(51,`
      `),ui(52,"li"),qE(53,'It will also "autoAdjustDrop" (bottom/top) and "autoAlignSide" (left/right) by default but could be turned off'),Tc(),qE(54,`
      `),ui(55,"li"),qE(56,`
        Both plugins have 2 sections, 1st section can have an array of Options (to change value of a field) and 2nd section an array of
        Commands (execute a command)
      `),Tc(),qE(57,`
      `),ui(58,"li"),qE(59,"There are 2 ways to execute a Command/Option"),Tc(),qE(60,`
      `),ui(61,"ol"),qE(62,`
        `),ui(63,"li"),qE(64,"via onCommand/onOptionSelected (use a switch/case to parse command/option and do something with it)"),Tc(),qE(65,`
        `),ui(66,"li"),qE(67,"via action callback (that can be defined on each command/option)"),Tc(),qE(68,`
      `),Tc(),qE(69,`
      `),ui(70,"li"),qE(71,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),Tc(),qE(72,`
      `),ui(73,"ol"),qE(74,`
        `),ui(75,"li"),qE(76,'These callbacks are: "menuUsabilityOverride", "itemVisibilityOverride", "itemUsabilityOverride"'),Tc(),qE(77,`
        `),ui(78,"li"),qE(79,'... e.g. in the demo, the "Action" Cell Menu is only available when Priority is set to "High" via "menuUsabilityOverride"'),Tc(),qE(80,`
        `),ui(81,"li"),qE(82,'... e.g. in the demo, the Context Menu is only available on the first 20 Tasks via "menuUsabilityOverride"'),Tc(),qE(83,`
      `),Tc(),qE(84,`
    `),Tc(),qE(85,`
  `),Tc(),qE(86,`

  `),ui(87,"div",10),qE(88,`
    `),ui(89,"div",11),qE(90,`
      `),ui(91,"span",12),qE(92,`
        `),ui(93,"strong"),qE(94,"Context Menu:"),Tc(),qE(95,`
        `),ui(96,"button",13),pp("click",function(){return a.showContextCommandsAndOptions(false)}),qE(97,`
          Show Priority Options Only
        `),Tc(),qE(98,`
        `),ui(99,"button",14),pp("click",function(){return a.showContextCommandsAndOptions(true)}),qE(100,`
          Show Commands & Priority Options
        `),Tc(),qE(101,`
      `),Tc(),qE(102,`

      `),ui(103,"span",15),qE(104,`
        `),ui(105,"strong"),qE(106,"Cell Menu:"),Tc(),qE(107,`
        `),ui(108,"button",16),pp("click",function(){return a.showCellMenuCommandsAndOptions(false)}),qE(109,`
          Show Action Commands Only
        `),Tc(),qE(110,`
        `),ui(111,"button",17),pp("click",function(){return a.showCellMenuCommandsAndOptions(true)}),qE(112,`
          Show Actions Commands & Completed Options
        `),Tc(),qE(113,`
      `),Tc(),qE(114,`
    `),Tc(),qE(115,`
  `),Tc(),qE(116,`
  `),ui(117,"div",18),qE(118,`
    `),ui(119,"div",11),qE(120,`
      `),ui(121,"button",19),pp("click",function(){return a.switchLanguage()}),qE(122,`
        `),cp(123,"i",20),qE(124,`
        Switch Language
      `),Tc(),qE(125,`
      `),ui(126,"b"),qE(127,"Locale:"),Tc(),qE(128,`
      `),ui(129,"span",21),qE(130),Tc(),qE(131,`
    `),Tc(),qE(132,`
  `),Tc(),qE(133,`

  `),ui(134,"div",22),qE(135,`
    `),ui(136,"angular-slickgrid",23),pp("onAngularGridCreated",function(m){return a.angularGridReady(m.detail)}),qE(137,`
    `),Tc(),qE(138,`
  `),Tc(),qE(139,`
`),Tc(),qE(140,`
`)),n&2&&(Wy(130),Nc(`
        `,a.selectedLanguage()+".json",`
      `),Wy(6),ap("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[j1],styles:[`.bold{font-weight:700}.italic{font-style:italic}.grey{color:gray}.orange{color:orange}.red{color:red}.yellow{color:#ffeb34}.pointer{cursor:pointer}.cell-menu-dropdown-outline{border:1px solid #a0a0a0;border-radius:4px;width:max-content;padding:2px 14px;cursor:pointer}.cell-menu-dropdown-outline:hover:not(.disabled){background-color:#a3a3a3;color:#fff}.cell-menu-dropdown-outline .mdi-caret-down{margin-left:5px}.disabled{color:#d4d4d4;border:1px solid #d8d8d8}.slick-dark-mode .disabled{border:1px solid #616161;color:#686868}.row.locale{margin-top:5px}span.cell-menu{margin-left:15px}
`],encapsulation:2});}}return d})();export{R as Example24Component};
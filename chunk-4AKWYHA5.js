import{b as k}from"./chunk-BNUP54LE.js";import{Ca as M,Da as O,u as S,wa as c,za as u}from"./chunk-V3K67AAF.js";import{Jb as e,Lb as E,Oa as f,U as h,hb as y,ia as g,ib as i,jb as o,kb as p,ub as r,za as b}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";var _=(d,x,t,n,a)=>a.priority===3?'<div class="cell-menu-dropdown-outline">Action<i class="mdi mdi-chevron-down"></i></div>':'<div class="cell-menu-dropdown-outline disabled">Action <i class="mdi mdi-chevron-down"></i></div>',w=(d,x,t)=>{if(!t)return"";let n="",a=+(t>=3?3:t),m=`<i class="mdi mdi-star ${a===3?"red":a===2?"orange":"yellow"}" aria-hidden="true"></i>`;for(let s=1;s<=a;s++)n+=m;return n},T=(d,x,t,n,a,l)=>{if(!t)return"";let s=l.getOptions().i18n,C=+(t>=3?3:t),v=C===3?"HIGH":C===2?"MEDIUM":"LOW";return s&&s.instant&&s.instant(v)},I=(d,x,t,n,a,l)=>{let s=l.getOptions().i18n;return s&&s.instant&&s.instant("TASK_X",{x:t})},R=(()=>{class d{constructor(){this.translate=h(S),this._darkModeGrid=!1,this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=g("");let t="en";this.translate.use(t),this.selectedLanguage.set(t)}angularGridReady(t){this.angularGrid=t}get cellMenuInstance(){return this.angularGrid?.extensionService?.getExtensionInstanceByName("cellMenu")}get contextMenuInstance(){return this.angularGrid?.extensionService?.getExtensionInstanceByName("contextMenu")}ngOnInit(){this.prepareGrid(),this.dataset=this.getData(1e3)}ngOnDestroy(){M(this.subscriptions),document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}prepareGrid(){this.columns=[{id:"id",name:"#",field:"id",maxWidth:45,sortable:!0,filterable:!0},{id:"title",name:"Title",field:"id",nameKey:"TITLE",minWidth:100,formatter:I,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"percentComplete",nameKey:"PERCENT_COMPLETE",field:"percentComplete",minWidth:100,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:c.slider,operator:">="},formatter:u.percentCompleteBar,type:"number"},{id:"start",name:"Start",field:"start",nameKey:"START",minWidth:100,formatter:u.dateIso,outputType:"dateIso",type:"date",filterable:!0,filter:{model:c.compoundDate}},{id:"finish",name:"Finish",field:"finish",nameKey:"FINISH",formatter:u.dateIso,outputType:"dateIso",type:"date",minWidth:100,filterable:!0,filter:{model:c.compoundDate}},{id:"priority",nameKey:"PRIORITY",field:"priority",exportCustomFormatter:T,formatter:w,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:1,labelKey:"LOW"},{value:2,labelKey:"MEDIUM"},{value:3,labelKey:"HIGH"}],model:c.singleSelect,enableTranslateLabel:!0}},{id:"completed",nameKey:"COMPLETED",field:"completed",exportCustomFormatter:u.translateBoolean,formatter:u.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,labelKey:"TRUE"},{value:!1,labelKey:"FALSE"}],model:c.singleSelect,enableTranslateLabel:!0}},{id:"action",name:"Action",field:"action",width:100,maxWidth:110,excludeFromExport:!0,formatter:_,cellMenu:{hideCloseButton:!1,menuUsabilityOverride:t=>t.dataContext.priority===3,commandTitleKey:"COMMANDS",commandItems:[{command:"command2",title:"Command 2",positionOrder:62,action:(t,n)=>{console.log(n.dataContext,n.column)},itemUsabilityOverride:t=>!t.dataContext.completed},{command:"command1",title:"Command 1",cssClass:"orange",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",positionOrder:64,iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",itemVisibilityOverride:t=>!t.dataContext.completed},{divider:!0,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:66},{command:"something",titleKey:"DISABLED_COMMAND",disabled:!0,positionOrder:67},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_COMPLETED_FLAG",optionItems:[{option:!0,titleKey:"TRUE",iconCssClass:"mdi mdi-check-box-outline"},{option:!1,titleKey:"FALSE",iconCssClass:"mdi mdi-checkbox-blank-outline"},{option:null,title:"null",cssClass:"italic",action:(t,n)=>{},itemUsabilityOverride:t=>t.dataContext.priority===3,itemVisibilityOverride:t=>!t.dataContext.completed}]}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkModeGrid,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableTranslate:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,customColumnWidth:15,columnHeaderStyle:{font:{bold:!0,italic:!0}}},i18n:this.translate,externalResources:[new k],enableContextMenu:!0,enableCellMenu:!0,cellMenu:{onCommand:(t,n)=>this.executeCommand(t,n),onOptionSelected:(t,n)=>{let a=n?.dataContext;a&&"completed"in a&&(a.completed=n.item.option,this.angularGrid.gridService.updateItem(a))},onBeforeMenuShow:(t,n)=>{console.log("Before the Cell Menu is shown",n)},onBeforeMenuClose:(t,n)=>console.log("Cell Menu is closing",n)},contextMenu:this.getContextMenuOptions()}}executeCommand(t,n){let a=n.command,l=n.dataContext;switch(a){case"contact-email":case"contact-chat":case"contact-meeting":alert("Command: "+n?.command);break;case"exports-csv":case"exports-txt":case"exports-xlsx":alert(`Exporting as ${n.item.title}`);break;case"command1":alert("Command 1");break;case"command2":alert("Command 2");break;case"help":alert("Please help!");break;case"delete-row":confirm(`Do you really want to delete row ${n.row+1} with ${this.translate.instant("TASK_X",{x:l.id})}`)&&this.angularGrid.dataView.deleteItem(l.id);break}}getData(t){let n=[];for(let a=0;a<t;a++){let l=2e3+Math.floor(Math.random()*30),m=Math.floor(Math.random()*11),s=Math.floor(Math.random()*29);n[a]={id:a,duration:Math.floor(Math.random()*25)+" days",percentComplete:Math.floor(Math.random()*100),start:new Date(l,m,s),finish:new Date(l,m+1,s),priority:a%3?2:a%5?3:1,completed:a%4===0}}return n}getContextMenuOptions(){return{hideCloseButton:!1,menuUsabilityOverride:t=>(t?.dataContext).id<21,commandShownOverColumnIds:["id","title","percentComplete","start","finish","completed"],commandTitleKey:"COMMANDS",commandItems:[{divider:!0,command:"",positionOrder:61},{command:"delete-row",titleKey:"DELETE_ROW",iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",positionOrder:62},{divider:!0,command:"",positionOrder:63},{command:"help",titleKey:"HELP",iconCssClass:"mdi mdi-help-circle",positionOrder:64,action:(t,n)=>{},itemVisibilityOverride:t=>!(t?.dataContext).completed},{command:"something",titleKey:"DISABLED_COMMAND",disabled:!0,positionOrder:65},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitleKey:"CHANGE_PRIORITY",optionShownOverColumnIds:["priority"],optionItems:[{option:0,title:"n/a",textCssClass:"italic",itemUsabilityOverride:t=>!(t?.dataContext).completed,action:(t,n)=>{}},{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"},"divider",{option:4,title:"Extreme",iconCssClass:"mdi mdi-fire",disabled:!0,itemVisibilityOverride:t=>!(t?.dataContext).completed},{option:null,title:"Sub-Options (demo)",subMenuTitleKey:"CHANGE_PRIORITY",optionItems:[{option:1,iconCssClass:"mdi mdi-star-outline yellow",titleKey:"LOW"},{option:2,iconCssClass:"mdi mdi-star orange",titleKey:"MEDIUM"},{option:3,iconCssClass:"mdi mdi-star red",titleKey:"HIGH"}]}],onBeforeMenuShow:(t,n)=>{this.angularGrid.slickGrid.setActiveCell(n.row,n.cell,!1),console.log("Before the global Context Menu is shown",n)},onBeforeMenuClose:(t,n)=>console.log("Global Context Menu is closing",n),onCommand:(t,n)=>this.executeCommand(t,n),onOptionSelected:(t,n)=>{let a=n?.dataContext;"priority"in a&&(a.priority=n.item.option,this.angularGrid.gridService.updateItem(a))}}}showContextCommandsAndOptions(t){let n=t?[]:["id","title","complete","start","finish","completed","action"];this.contextMenuInstance?.setOptions({commandShownOverColumnIds:n})}showCellMenuCommandsAndOptions(t){this.cellMenuInstance?.setOptions({hideOptionSection:!t})}switchLanguage(){let t=this.selectedLanguage()==="en"?"fr":"en";this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)}))}toggleDarkMode(){this._darkModeGrid=!this._darkModeGrid,this._darkModeGrid?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkModeGrid})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(n){return new(n||d)}}static{this.\u0275cmp=f({type:d,selectors:[["ng-component"]],decls:141,vars:4,consts:[[1,"container-fluid"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],["data-test","toggle-dark-mode",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example24.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/cell-menu","target","_blank"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/context-menu","target","_blank"],[1,"row","mb-1"],[1,"col-12"],[1,"context-menu"],["data-test","context-menu-priority-only-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","context-menu-commands-and-priority-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"cell-menu"],["data-test","cell-menu-commands-and-options-false-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],["data-test","cell-menu-commands-and-options-true-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"row","locale"],["data-test","language-button",1,"btn","btn-outline-secondary","btn-xs","btn-icon",3,"click"],[1,"mdi","mdi-translate"],["data-test","selected-locale",2,"font-style","italic"],[1,"col-sm-12"],["gridId","grid24",3,"onAngularGridCreated","columns","options","dataset"]],template:function(n,a){n&1&&(i(0,"div",0),e(1,`
  `),i(2,"h2"),e(3,`
    Example 24: Cell Menu & Context Menu Plugins
    `),i(4,"button",1),r("click",function(){return a.toggleSubTitle()}),e(5,`
      `),p(6,"span",2),e(7,`
    `),o(),e(8,`
    `),i(9,"button",3),r("click",function(){return a.toggleDarkMode()}),e(10,`
      `),i(11,"span"),e(12,"Toggle Dark Mode"),o(),e(13,`
    `),o(),e(14,`
    `),i(15,"span",4),e(16,`
      `),i(17,"a",5),e(18,`
        `),p(19,"span",6),e(20,` code
      `),o(),e(21,`
    `),o(),e(22,`
  `),o(),e(23,`

  `),i(24,"div",7),e(25,`
    Add Cell Menu and Context Menu
    `),i(26,"ul"),e(27,`
      `),i(28,"li"),e(29,"This example demonstrates 2 SlickGrid plugins"),o(),e(30,`
      `),i(31,"ol"),e(32,`
        `),i(33,"li"),e(34,`
          Using the `),i(35,"b"),e(36,"Slick.Plugins.CellMenu"),o(),e(37," plugin, often used for an Action Menu(s), 1 or more per grid ("),i(38,"a",8),e(39,"Wiki docs"),o(),e(40,`).
        `),o(),e(41,`
        `),i(42,"li"),e(43,`
          Using the `),i(44,"b"),e(45,"Slick.Plugins.ContextMenu"),o(),e(46," plugin, shown after a mouse right+click, only 1 per grid. ("),i(47,"a",9),e(48,"Wiki docs"),o(),e(49,`).
        `),o(),e(50,`
      `),o(),e(51,`
      `),i(52,"li"),e(53,'It will also "autoAdjustDrop" (bottom/top) and "autoAlignSide" (left/right) by default but could be turned off'),o(),e(54,`
      `),i(55,"li"),e(56,`
        Both plugins have 2 sections, 1st section can have an array of Options (to change value of a field) and 2nd section an array of
        Commands (execute a command)
      `),o(),e(57,`
      `),i(58,"li"),e(59,"There are 2 ways to execute a Command/Option"),o(),e(60,`
      `),i(61,"ol"),e(62,`
        `),i(63,"li"),e(64,"via onCommand/onOptionSelected (use a switch/case to parse command/option and do something with it)"),o(),e(65,`
        `),i(66,"li"),e(67,"via action callback (that can be defined on each command/option)"),o(),e(68,`
      `),o(),e(69,`
      `),i(70,"li"),e(71,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),o(),e(72,`
      `),i(73,"ol"),e(74,`
        `),i(75,"li"),e(76,'These callbacks are: "menuUsabilityOverride", "itemVisibilityOverride", "itemUsabilityOverride"'),o(),e(77,`
        `),i(78,"li"),e(79,'... e.g. in the demo, the "Action" Cell Menu is only available when Priority is set to "High" via "menuUsabilityOverride"'),o(),e(80,`
        `),i(81,"li"),e(82,'... e.g. in the demo, the Context Menu is only available on the first 20 Tasks via "menuUsabilityOverride"'),o(),e(83,`
      `),o(),e(84,`
    `),o(),e(85,`
  `),o(),e(86,`

  `),i(87,"div",10),e(88,`
    `),i(89,"div",11),e(90,`
      `),i(91,"span",12),e(92,`
        `),i(93,"strong"),e(94,"Context Menu:"),o(),e(95,`
        `),i(96,"button",13),r("click",function(){return a.showContextCommandsAndOptions(!1)}),e(97,`
          Show Priority Options Only
        `),o(),e(98,`
        `),i(99,"button",14),r("click",function(){return a.showContextCommandsAndOptions(!0)}),e(100,`
          Show Commands & Priority Options
        `),o(),e(101,`
      `),o(),e(102,`

      `),i(103,"span",15),e(104,`
        `),i(105,"strong"),e(106,"Cell Menu:"),o(),e(107,`
        `),i(108,"button",16),r("click",function(){return a.showCellMenuCommandsAndOptions(!1)}),e(109,`
          Show Action Commands Only
        `),o(),e(110,`
        `),i(111,"button",17),r("click",function(){return a.showCellMenuCommandsAndOptions(!0)}),e(112,`
          Show Actions Commands & Completed Options
        `),o(),e(113,`
      `),o(),e(114,`
    `),o(),e(115,`
  `),o(),e(116,`
  `),i(117,"div",18),e(118,`
    `),i(119,"div",11),e(120,`
      `),i(121,"button",19),r("click",function(){return a.switchLanguage()}),e(122,`
        `),p(123,"i",20),e(124,`
        Switch Language
      `),o(),e(125,`
      `),i(126,"b"),e(127,"Locale:"),o(),e(128,`
      `),i(129,"span",21),e(130),o(),e(131,`
    `),o(),e(132,`
  `),o(),e(133,`

  `),i(134,"div",22),e(135,`
    `),i(136,"angular-slickgrid",23),r("onAngularGridCreated",function(m){return a.angularGridReady(m.detail)}),e(137,`
    `),o(),e(138,`
  `),o(),e(139,`
`),o(),e(140,`
`)),n&2&&(b(130),E(`
        `,a.selectedLanguage()+".json",`
      `),b(6),y("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset))},dependencies:[O],styles:[`.bold{font-weight:700}.italic{font-style:italic}.grey{color:gray}.orange{color:orange}.red{color:red}.yellow{color:#ffeb34}.pointer{cursor:pointer}.cell-menu-dropdown-outline{border:1px solid #a0a0a0;border-radius:4px;width:max-content;padding:2px 14px;cursor:pointer}.cell-menu-dropdown-outline:hover:not(.disabled){background-color:#a3a3a3;color:#fff}.cell-menu-dropdown-outline .mdi-caret-down{margin-left:5px}.disabled{color:#d4d4d4;border:1px solid #d8d8d8}.slick-dark-mode .disabled{border:1px solid #616161;color:#686868}.row.locale{margin-top:5px}span.cell-menu{margin-left:15px}
`],encapsulation:2})}}return d})();export{R as Example24Component};

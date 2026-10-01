import{$ as Mp,C as Ei,E as Fc,En as iD,_ as D,b as Dp,c as BE,cn as ay,ct as Oc,f as Bo,jt as Tp}from"./chunk-CtIlL7jI.js";import{Ot as xz,bt as rp,m as Gi,u as Dz,xt as uP}from"./chunk-C1NeHYCu.js";import{t as Ze}from"./chunk-dI_4WJwX.js";var _=(d,x,t,n,a)=>a.priority===3?`<div class="cell-menu-dropdown-outline">Action<i class="mdi mdi-chevron-down"></i></div>`:`<div class="cell-menu-dropdown-outline disabled">Action <i class="mdi mdi-chevron-down"></i></div>`;var w=(d,x,t)=>{if(!t)return``;let n=``,a=+(t>=3?3:t),m=`<i class="mdi mdi-star ${a===3?`red`:a===2?`orange`:`yellow`}" aria-hidden="true"></i>`;for(let s=1;s<=a;s++)n+=m;return n};var T=(d,x,t,n,a,l)=>{if(!t)return``;let s=l.getOptions().i18n,C=+(t>=3?3:t),v=C===3?`HIGH`:C===2?`MEDIUM`:`LOW`;return s&&s.instant&&s.instant(v)};var I=(d,x,t,n,a,l)=>{let s=l.getOptions().i18n;return s&&s.instant&&s.instant(`TASK_X`,{x:t})};var R=(()=>{class d{constructor(){this.translate=D(Gi),this._darkModeGrid=!1,this.subscriptions=[],this.hideSubTitle=!1,this.selectedLanguage=Bo(``);let t=`en`;this.translate.use(t),this.selectedLanguage.set(t)}angularGridReady(t){this.angularGrid=t}get cellMenuInstance(){return this.angularGrid?.extensionService?.getExtensionInstanceByName(`cellMenu`)}get contextMenuInstance(){return this.angularGrid?.extensionService?.getExtensionInstanceByName(`contextMenu`)}ngOnInit(){this.prepareGrid(),this.dataset=this.getData(1e3)}ngOnDestroy(){Dz(this.subscriptions),document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`}prepareGrid(){this.columns=[{id:`id`,name:`#`,field:`id`,maxWidth:45,sortable:!0,filterable:!0},{id:`title`,name:`Title`,field:`id`,nameKey:`TITLE`,minWidth:100,formatter:I,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:`percentComplete`,nameKey:`PERCENT_COMPLETE`,field:`percentComplete`,minWidth:100,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:rp.slider,operator:`>=`},formatter:uP.percentCompleteBar,type:`number`},{id:`start`,name:`Start`,field:`start`,nameKey:`START`,minWidth:100,formatter:uP.dateIso,outputType:`dateIso`,type:`date`,filterable:!0,filter:{model:rp.compoundDate}},{id:`finish`,name:`Finish`,field:`finish`,nameKey:`FINISH`,formatter:uP.dateIso,outputType:`dateIso`,type:`date`,minWidth:100,filterable:!0,filter:{model:rp.compoundDate}},{id:`priority`,nameKey:`PRIORITY`,field:`priority`,exportCustomFormatter:T,formatter:w,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:1,labelKey:`LOW`},{value:2,labelKey:`MEDIUM`},{value:3,labelKey:`HIGH`}],model:rp.singleSelect,enableTranslateLabel:!0}},{id:`completed`,nameKey:`COMPLETED`,field:`completed`,exportCustomFormatter:uP.translateBoolean,formatter:uP.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:``,label:``},{value:!0,labelKey:`TRUE`},{value:!1,labelKey:`FALSE`}],model:rp.singleSelect,enableTranslateLabel:!0}},{id:`action`,name:`Action`,field:`action`,width:100,maxWidth:110,excludeFromExport:!0,formatter:_,cellMenu:{hideCloseButton:!1,menuUsabilityOverride:t=>t.dataContext.priority===3,commandTitleKey:`COMMANDS`,commandItems:[{command:`command2`,title:`Command 2`,positionOrder:62,action:(t,n)=>{console.log(n.dataContext,n.column)},itemUsabilityOverride:t=>!t.dataContext.completed},{command:`command1`,title:`Command 1`,cssClass:`orange`,positionOrder:61},{command:`delete-row`,titleKey:`DELETE_ROW`,positionOrder:64,iconCssClass:`mdi mdi-close`,cssClass:`red`,textCssClass:`bold`,itemVisibilityOverride:t=>!t.dataContext.completed},{divider:!0,command:``,positionOrder:63},{command:`help`,titleKey:`HELP`,iconCssClass:`mdi mdi-help-circle`,positionOrder:66},{command:`something`,titleKey:`DISABLED_COMMAND`,disabled:!0,positionOrder:67},{command:``,divider:!0,positionOrder:98},{command:`export`,title:`Exports`,positionOrder:99,commandItems:[{command:`exports-txt`,title:`Text (tab delimited)`},{command:`sub-menu`,title:`Excel`,cssClass:`green`,subMenuTitle:`available formats`,subMenuTitleCssClass:`text-italic orange`,commandItems:[{command:`exports-csv`,title:`Excel (csv)`},{command:`exports-xlsx`,title:`Excel (xlsx)`}]}]},{command:`feedback`,title:`Feedback`,positionOrder:100,commandItems:[{command:`request-update`,title:`Request update from supplier`,iconCssClass:`mdi mdi-star`,tooltip:`this will automatically send an alert to the shipping team to contact the user for an update`},`divider`,{command:`sub-menu`,title:`Contact Us`,iconCssClass:`mdi mdi-account`,subMenuTitle:`contact us...`,subMenuTitleCssClass:`italic`,commandItems:[{command:`contact-email`,title:`Email us`,iconCssClass:`mdi mdi-pencil-outline`},{command:`contact-chat`,title:`Chat with us`,iconCssClass:`mdi mdi-message-text-outline`},{command:`contact-meeting`,title:`Book an appointment`,iconCssClass:`mdi mdi-coffee`}]}]}],optionTitleKey:`CHANGE_COMPLETED_FLAG`,optionItems:[{option:!0,titleKey:`TRUE`,iconCssClass:`mdi mdi-check-box-outline`},{option:!1,titleKey:`FALSE`,iconCssClass:`mdi mdi-checkbox-blank-outline`},{option:null,title:`null`,cssClass:`italic`,action:(t,n)=>{},itemUsabilityOverride:t=>t.dataContext.priority===3,itemVisibilityOverride:t=>!t.dataContext.completed}]}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},darkMode:this._darkModeGrid,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableTranslate:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,customColumnWidth:15,columnHeaderStyle:{font:{bold:!0,italic:!0}}},i18n:this.translate,externalResources:[new Ze],enableContextMenu:!0,enableCellMenu:!0,cellMenu:{onCommand:(t,n)=>this.executeCommand(t,n),onOptionSelected:(t,n)=>{let a=n?.dataContext;a&&`completed`in a&&(a.completed=n.item.option,this.angularGrid.gridService.updateItem(a))},onBeforeMenuShow:(t,n)=>{console.log(`Before the Cell Menu is shown`,n)},onBeforeMenuClose:(t,n)=>console.log(`Cell Menu is closing`,n)},contextMenu:this.getContextMenuOptions()}}executeCommand(t,n){let a=n.command,l=n.dataContext;switch(a){case`contact-email`:case`contact-chat`:case`contact-meeting`:alert(`Command: `+n?.command);break;case`exports-csv`:case`exports-txt`:case`exports-xlsx`:alert(`Exporting as ${n.item.title}`);break;case`command1`:alert(`Command 1`);break;case`command2`:alert(`Command 2`);break;case`help`:alert(`Please help!`);break;case`delete-row`:confirm(`Do you really want to delete row ${n.row+1} with ${this.translate.instant(`TASK_X`,{x:l.id})}`)&&this.angularGrid.dataView.deleteItem(l.id)}}getData(t){let n=[];for(let a=0;a<t;a++){let l=2e3+Math.floor(Math.random()*30),m=Math.floor(Math.random()*11),s=Math.floor(Math.random()*29);n[a]={id:a,duration:Math.floor(Math.random()*25)+` days`,percentComplete:Math.floor(Math.random()*100),start:new Date(l,m,s),finish:new Date(l,m+1,s),priority:a%3?2:a%5?3:1,completed:a%4===0}}return n}getContextMenuOptions(){return{hideCloseButton:!1,menuUsabilityOverride:t=>(t?.dataContext).id<21,commandShownOverColumnIds:[`id`,`title`,`percentComplete`,`start`,`finish`,`completed`],commandTitleKey:`COMMANDS`,commandItems:[{divider:!0,command:``,positionOrder:61},{command:`delete-row`,titleKey:`DELETE_ROW`,iconCssClass:`mdi mdi-close`,cssClass:`red`,textCssClass:`bold`,positionOrder:62},{divider:!0,command:``,positionOrder:63},{command:`help`,titleKey:`HELP`,iconCssClass:`mdi mdi-help-circle`,positionOrder:64,action:(t,n)=>{},itemVisibilityOverride:t=>!(t?.dataContext).completed},{command:`something`,titleKey:`DISABLED_COMMAND`,disabled:!0,positionOrder:65},{command:``,divider:!0,positionOrder:98},{command:`export`,title:`Exports`,positionOrder:99,commandItems:[{command:`exports-txt`,title:`Text (tab delimited)`},{command:`sub-menu`,title:`Excel`,cssClass:`green`,subMenuTitle:`available formats`,subMenuTitleCssClass:`text-italic orange`,commandItems:[{command:`exports-csv`,title:`Excel (csv)`},{command:`exports-xlsx`,title:`Excel (xlsx)`}]}]},{command:`feedback`,title:`Feedback`,positionOrder:100,commandItems:[{command:`request-update`,title:`Request update from supplier`,iconCssClass:`mdi mdi-star`,tooltip:`this will automatically send an alert to the shipping team to contact the user for an update`},`divider`,{command:`sub-menu`,title:`Contact Us`,iconCssClass:`mdi mdi-account`,subMenuTitle:`contact us...`,subMenuTitleCssClass:`italic`,commandItems:[{command:`contact-email`,title:`Email us`,iconCssClass:`mdi mdi-pencil-outline`},{command:`contact-chat`,title:`Chat with us`,iconCssClass:`mdi mdi-message-text-outline`},{command:`contact-meeting`,title:`Book an appointment`,iconCssClass:`mdi mdi-coffee`}]}]}],optionTitleKey:`CHANGE_PRIORITY`,optionShownOverColumnIds:[`priority`],optionItems:[{option:0,title:`n/a`,textCssClass:`italic`,itemUsabilityOverride:t=>!(t?.dataContext).completed,action:(t,n)=>{}},{option:1,iconCssClass:`mdi mdi-star-outline yellow`,titleKey:`LOW`},{option:2,iconCssClass:`mdi mdi-star orange`,titleKey:`MEDIUM`},{option:3,iconCssClass:`mdi mdi-star red`,titleKey:`HIGH`},`divider`,{option:4,title:`Extreme`,iconCssClass:`mdi mdi-fire`,disabled:!0,itemVisibilityOverride:t=>!(t?.dataContext).completed},{option:null,title:`Sub-Options (demo)`,subMenuTitleKey:`CHANGE_PRIORITY`,optionItems:[{option:1,iconCssClass:`mdi mdi-star-outline yellow`,titleKey:`LOW`},{option:2,iconCssClass:`mdi mdi-star orange`,titleKey:`MEDIUM`},{option:3,iconCssClass:`mdi mdi-star red`,titleKey:`HIGH`}]}],onBeforeMenuShow:(t,n)=>{this.angularGrid.slickGrid.setActiveCell(n.row,n.cell,!1),console.log(`Before the global Context Menu is shown`,n)},onBeforeMenuClose:(t,n)=>console.log(`Global Context Menu is closing`,n),onCommand:(t,n)=>this.executeCommand(t,n),onOptionSelected:(t,n)=>{let a=n?.dataContext;`priority`in a&&(a.priority=n.item.option,this.angularGrid.gridService.updateItem(a))}}}showContextCommandsAndOptions(t){let n=t?[]:[`id`,`title`,`complete`,`start`,`finish`,`completed`,`action`];this.contextMenuInstance?.setOptions({commandShownOverColumnIds:n})}showCellMenuCommandsAndOptions(t){this.cellMenuInstance?.setOptions({hideOptionSection:!t})}switchLanguage(){let t=this.selectedLanguage()===`en`?`fr`:`en`;this.subscriptions.push(this.translate.use(t).subscribe(()=>{this.selectedLanguage.set(t)}))}toggleDarkMode(){this._darkModeGrid=!this._darkModeGrid,this._darkModeGrid?(document.querySelector(`.panel-wm-content`).classList.add(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`dark`):(document.querySelector(`.panel-wm-content`).classList.remove(`dark-mode`),document.querySelector(`#demo-container`).dataset.bsTheme=`light`),this.angularGrid.slickGrid?.setOptions({darkMode:this._darkModeGrid})}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(n){return new(n||d)}}static{this.ɵcmp=BE({type:d,selectors:[[`ng-component`]],decls:141,vars:4,consts:[[1,`container-fluid`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[`data-test`,`toggle-dark-mode`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example24.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/cell-menu`,`target`,`_blank`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/context-menu`,`target`,`_blank`],[1,`row`,`mb-1`],[1,`col-12`],[1,`context-menu`],[`data-test`,`context-menu-priority-only-button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`context-menu-commands-and-priority-button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`cell-menu`],[`data-test`,`cell-menu-commands-and-options-false-button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[`data-test`,`cell-menu-commands-and-options-true-button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`row`,`locale`],[`data-test`,`language-button`,1,`btn`,`btn-outline-secondary`,`btn-xs`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-translate`],[`data-test`,`selected-locale`,2,`font-style`,`italic`],[1,`col-sm-12`],[`gridId`,`grid24`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(n,a){n&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 24: Cell Menu & Context Menu Plugins
    `),Ei(4,`button`,1),Mp(`click`,function(){return a.toggleSubTitle()}),iD(5,`
      `),Tp(6,`span`,2),iD(7,`
    `),Oc(),iD(8,`
    `),Ei(9,`button`,3),Mp(`click`,function(){return a.toggleDarkMode()}),iD(10,`
      `),Ei(11,`span`),iD(12,`Toggle Dark Mode`),Oc(),iD(13,`
    `),Oc(),iD(14,`
    `),Ei(15,`span`,4),iD(16,`
      `),Ei(17,`a`,5),iD(18,`
        `),Tp(19,`span`,6),iD(20,` code
      `),Oc(),iD(21,`
    `),Oc(),iD(22,`
  `),Oc(),iD(23,`

  `),Ei(24,`div`,7),iD(25,`
    Add Cell Menu and Context Menu
    `),Ei(26,`ul`),iD(27,`
      `),Ei(28,`li`),iD(29,`This example demonstrates 2 SlickGrid plugins`),Oc(),iD(30,`
      `),Ei(31,`ol`),iD(32,`
        `),Ei(33,`li`),iD(34,`
          Using the `),Ei(35,`b`),iD(36,`Slick.Plugins.CellMenu`),Oc(),iD(37,` plugin, often used for an Action Menu(s), 1 or more per grid (`),Ei(38,`a`,8),iD(39,`Wiki docs`),Oc(),iD(40,`).
        `),Oc(),iD(41,`
        `),Ei(42,`li`),iD(43,`
          Using the `),Ei(44,`b`),iD(45,`Slick.Plugins.ContextMenu`),Oc(),iD(46,` plugin, shown after a mouse right+click, only 1 per grid. (`),Ei(47,`a`,9),iD(48,`Wiki docs`),Oc(),iD(49,`).
        `),Oc(),iD(50,`
      `),Oc(),iD(51,`
      `),Ei(52,`li`),iD(53,`It will also "autoAdjustDrop" (bottom/top) and "autoAlignSide" (left/right) by default but could be turned off`),Oc(),iD(54,`
      `),Ei(55,`li`),iD(56,`
        Both plugins have 2 sections, 1st section can have an array of Options (to change value of a field) and 2nd section an array of
        Commands (execute a command)
      `),Oc(),iD(57,`
      `),Ei(58,`li`),iD(59,`There are 2 ways to execute a Command/Option`),Oc(),iD(60,`
      `),Ei(61,`ol`),iD(62,`
        `),Ei(63,`li`),iD(64,`via onCommand/onOptionSelected (use a switch/case to parse command/option and do something with it)`),Oc(),iD(65,`
        `),Ei(66,`li`),iD(67,`via action callback (that can be defined on each command/option)`),Oc(),iD(68,`
      `),Oc(),iD(69,`
      `),Ei(70,`li`),iD(71,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),Oc(),iD(72,`
      `),Ei(73,`ol`),iD(74,`
        `),Ei(75,`li`),iD(76,`These callbacks are: "menuUsabilityOverride", "itemVisibilityOverride", "itemUsabilityOverride"`),Oc(),iD(77,`
        `),Ei(78,`li`),iD(79,`... e.g. in the demo, the "Action" Cell Menu is only available when Priority is set to "High" via "menuUsabilityOverride"`),Oc(),iD(80,`
        `),Ei(81,`li`),iD(82,`... e.g. in the demo, the Context Menu is only available on the first 20 Tasks via "menuUsabilityOverride"`),Oc(),iD(83,`
      `),Oc(),iD(84,`
    `),Oc(),iD(85,`
  `),Oc(),iD(86,`

  `),Ei(87,`div`,10),iD(88,`
    `),Ei(89,`div`,11),iD(90,`
      `),Ei(91,`span`,12),iD(92,`
        `),Ei(93,`strong`),iD(94,`Context Menu:`),Oc(),iD(95,`
        `),Ei(96,`button`,13),Mp(`click`,function(){return a.showContextCommandsAndOptions(!1)}),iD(97,`
          Show Priority Options Only
        `),Oc(),iD(98,`
        `),Ei(99,`button`,14),Mp(`click`,function(){return a.showContextCommandsAndOptions(!0)}),iD(100,`
          Show Commands & Priority Options
        `),Oc(),iD(101,`
      `),Oc(),iD(102,`

      `),Ei(103,`span`,15),iD(104,`
        `),Ei(105,`strong`),iD(106,`Cell Menu:`),Oc(),iD(107,`
        `),Ei(108,`button`,16),Mp(`click`,function(){return a.showCellMenuCommandsAndOptions(!1)}),iD(109,`
          Show Action Commands Only
        `),Oc(),iD(110,`
        `),Ei(111,`button`,17),Mp(`click`,function(){return a.showCellMenuCommandsAndOptions(!0)}),iD(112,`
          Show Actions Commands & Completed Options
        `),Oc(),iD(113,`
      `),Oc(),iD(114,`
    `),Oc(),iD(115,`
  `),Oc(),iD(116,`
  `),Ei(117,`div`,18),iD(118,`
    `),Ei(119,`div`,11),iD(120,`
      `),Ei(121,`button`,19),Mp(`click`,function(){return a.switchLanguage()}),iD(122,`
        `),Tp(123,`i`,20),iD(124,`
        Switch Language
      `),Oc(),iD(125,`
      `),Ei(126,`b`),iD(127,`Locale:`),Oc(),iD(128,`
      `),Ei(129,`span`,21),iD(130),Oc(),iD(131,`
    `),Oc(),iD(132,`
  `),Oc(),iD(133,`

  `),Ei(134,`div`,22),iD(135,`
    `),Ei(136,`angular-slickgrid`,23),Mp(`onAngularGridCreated`,function(m){return a.angularGridReady(m.detail)}),iD(137,`
    `),Oc(),iD(138,`
  `),Oc(),iD(139,`
`),Oc(),iD(140,`
`)),n&2&&(ay(130),Fc(`
        `,a.selectedLanguage()+`.json`,`
      `),ay(6),Dp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[xz],styles:[`.bold{font-weight:700}.italic{font-style:italic}.grey{color:gray}.orange{color:orange}.red{color:red}.yellow{color:#ffeb34}.pointer{cursor:pointer}.cell-menu-dropdown-outline{border:1px solid #a0a0a0;border-radius:4px;width:max-content;padding:2px 14px;cursor:pointer}.cell-menu-dropdown-outline:hover:not(.disabled){background-color:#a3a3a3;color:#fff}.cell-menu-dropdown-outline .mdi-caret-down{margin-left:5px}.disabled{color:#d4d4d4;border:1px solid #d8d8d8}.slick-dark-mode .disabled{border:1px solid #616161;color:#686868}.row.locale{margin-top:5px}span.cell-menu{margin-left:15px}
`],encapsulation:2})}}return d})();export{R as Example24Component};
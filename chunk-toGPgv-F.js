import{F as Ip,Ot as Up,Pn as ly,b as Ep,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{W as _W,ht as nk}from"./chunk-DLuyVhQJ.js";var C=(l,x,t)=>t?`<i class="mdi mdi-fire red" aria-hidden="true"></i>`:{text:`<i class="mdi mdi-snowflake" aria-hidden="true"></i>`,addClasses:`lightblue`,toolTip:`Freezing`};var y=(l,x,t)=>`<span style="margin-left: 5px">
      <button class="btn btn-xs btn-default btn-icon">
        <i class="mdi ${t?`mdi-check-circle`:`mdi-circle`}" style="color: ${t?`black`:`lavender`}"></i>
      </button>
    </span>`;var E=(()=>{class l{constructor(){this.columns=[],this.hideSubTitle=!1,this.resizerPaused=!1}angularGridReady(t){this.angularGrid=t}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70},{id:`phone`,name:`Phone Number using mask`,field:`phone`,sortable:!0,type:`number`,minWidth:100,formatter:nk.mask,params:{mask:`(000) 000-0000`}},{id:`duration`,name:`Duration (days)`,field:`duration`,formatter:nk.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:`number`,minWidth:90,exportWithFormatter:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:nk.percentCompleteBar,type:`number`,sortable:!0,minWidth:100},{id:`percent2`,name:`% Complete`,field:`percentComplete2`,formatter:nk.progressBar,type:`number`,sortable:!0,minWidth:100},{id:`start`,name:`Start`,field:`start`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0},{id:`finish`,name:`Finish`,field:`finish`,formatter:nk.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:C,type:`number`,sortable:!0,minWidth:100},{id:`completed`,name:`Completed`,field:`completed`,type:`number`,sortable:!0,minWidth:100,formatter:y,onCellClick:(r,a)=>{this.toggleCompletedProperty(a?.dataContext)}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableCellNavigation:!0,showCustomFooter:!0,customFooterOptions:{leftFooterText:`custom footer text`,hideTotalItemCount:!0,hideLastUpdateTimestamp:!0},enableExcelCopyBuffer:!0};let t=[];for(let r=0;r<500;r++){let a=2e3+Math.floor(Math.random()*10),s=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);t[r]={id:r,title:`Task `+r,phone:this.generatePhoneNumber(),duration:r%33===0?null:Math.random()*100+``,percentComplete:u,percentComplete2:u,percentCompleteNumber:u,start:new Date(a,s,d),finish:new Date(a,s+1,d),effortDriven:r%5===0}}this.dataset=t}disposeGrid(){this.angularGrid.destroy()}generatePhoneNumber(){let t=``;for(let r=0;r<10;r++)t+=Math.round(Math.random()*9)+``;return t}togglePauseResizer(){this.resizerPaused=!this.resizerPaused,this.angularGrid.resizerService.pauseResizer(this.resizerPaused)}toggleCompletedProperty(t){typeof t==`object`&&(t.completed=!t.completed,setTimeout(()=>{this.angularGrid.gridService.updateItemById(t.id,t,{highlightRow:!1})},250))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||l)}}static{this.ɵcmp=$E({type:l,selectors:[[`ng-component`]],decls:55,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example02.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/formatters`,`target`,`_blank`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,a){r&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 2: Grid with Formatters
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return a.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    Grid with Custom and/or included Slickgrid Formatters (`),yi(20,`a`,7),sD(21,`Wiki docs`),Rc(),sD(22,`).
    `),yi(23,`ul`),sD(24,`
      `),yi(25,`li`),sD(26,`The 2 last columns are using Custom Formatters`),Rc(),sD(27,`
      `),yi(28,`ul`),sD(29,`
        `),yi(30,`li`),sD(31,`The "Completed" column uses a the "onCellClick" event and a formatter to simulate a toggle action`),Rc(),sD(32,`
      `),Rc(),sD(33,`
      `),yi(34,`li`),sD(35,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),Rc(),sD(36,`
      `),yi(37,`li`),sD(38,`This example also has auto-resize enabled, and we also demo how you can pause the resizer if you wish to`),Rc(),sD(39,`
    `),Rc(),sD(40,`
  `),Rc(),sD(41,`

  `),yi(42,`button`,8),bp(`click`,function(){return a.togglePauseResizer()}),sD(43,`
    Pause auto-resize: `),yi(44,`b`),sD(45),Rc(),sD(46,`
  `),Rc(),sD(47,`
  `),yi(48,`button`,8),bp(`click`,function(){return a.disposeGrid()}),sD(49,`Dispose Grid`),Rc(),sD(50,`

  `),yi(51,`angular-slickgrid`,9),bp(`onAngularGridCreated`,function(d){return a.angularGridReady(d.detail)}),sD(52,`
  `),Rc(),sD(53,`
`),Rc(),sD(54,`
`)),r&2&&(ly(45),Up(a.resizerPaused),ly(6),Ep(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[_W],encapsulation:2})}}return l})();export{E as Example2Component};
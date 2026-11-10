import{V as R$,rt as ZR}from"./chunk-Lo0QQjTd.js";import{X as Lc,dr as uD,en as _p,in as bp,k as GE,o as Ap,wt as Qp,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";var C=(l,x,t)=>t?`<i class="mdi mdi-fire red" aria-hidden="true"></i>`:{text:`<i class="mdi mdi-snowflake" aria-hidden="true"></i>`,addClasses:`lightblue`,toolTip:`Freezing`};var y=(l,x,t)=>`<span style="margin-left: 5px">
      <button class="btn btn-xs btn-default btn-icon">
        <i class="mdi ${t?`mdi-check-circle`:`mdi-circle`}" style="color: ${t?`black`:`lavender`}"></i>
      </button>
    </span>`;var E=(()=>{class l{constructor(){this.columns=[],this.hideSubTitle=!1,this.resizerPaused=!1}angularGridReady(t){this.angularGrid=t}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70},{id:`phone`,name:`Phone Number using mask`,field:`phone`,sortable:!0,type:`number`,minWidth:100,formatter:ZR.mask,params:{mask:`(000) 000-0000`}},{id:`duration`,name:`Duration (days)`,field:`duration`,formatter:ZR.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:`number`,minWidth:90,exportWithFormatter:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:ZR.percentCompleteBar,type:`number`,sortable:!0,minWidth:100},{id:`percent2`,name:`% Complete`,field:`percentComplete2`,formatter:ZR.progressBar,type:`number`,sortable:!0,minWidth:100},{id:`start`,name:`Start`,field:`start`,formatter:ZR.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0},{id:`finish`,name:`Finish`,field:`finish`,formatter:ZR.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:C,type:`number`,sortable:!0,minWidth:100},{id:`completed`,name:`Completed`,field:`completed`,type:`number`,sortable:!0,minWidth:100,formatter:y,onCellClick:(r,a)=>{this.toggleCompletedProperty(a?.dataContext)}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableCellNavigation:!0,showCustomFooter:!0,customFooterOptions:{leftFooterText:`custom footer text`,hideTotalItemCount:!0,hideLastUpdateTimestamp:!0},enableExcelCopyBuffer:!0};let t=[];for(let r=0;r<500;r++){let a=2e3+Math.floor(Math.random()*10),s=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);t[r]={id:r,title:`Task `+r,phone:this.generatePhoneNumber(),duration:r%33===0?null:Math.random()*100+``,percentComplete:u,percentComplete2:u,percentCompleteNumber:u,start:new Date(a,s,d),finish:new Date(a,s+1,d),effortDriven:r%5===0}}this.dataset=t}disposeGrid(){this.angularGrid.destroy()}generatePhoneNumber(){let t=``;for(let r=0;r<10;r++)t+=Math.round(Math.random()*9)+``;return t}togglePauseResizer(){this.resizerPaused=!this.resizerPaused,this.angularGrid.resizerService.pauseResizer(this.resizerPaused)}toggleCompletedProperty(t){typeof t==`object`&&(t.completed=!t.completed,setTimeout(()=>{this.angularGrid.gridService.updateItemById(t.id,t,{highlightRow:!1})},250))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||l)}}static{this.ɵcmp=GE({type:l,selectors:[[`ng-component`]],decls:55,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example02.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/formatters`,`target`,`_blank`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,a){r&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 2: Grid with Formatters
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return a.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`

  `),vi(18,`div`,6),uD(19,`
    Grid with Custom and/or included Slickgrid Formatters (`),vi(20,`a`,7),uD(21,`Wiki docs`),Lc(),uD(22,`).
    `),vi(23,`ul`),uD(24,`
      `),vi(25,`li`),uD(26,`The 2 last columns are using Custom Formatters`),Lc(),uD(27,`
      `),vi(28,`ul`),uD(29,`
        `),vi(30,`li`),uD(31,`The "Completed" column uses a the "onCellClick" event and a formatter to simulate a toggle action`),Lc(),uD(32,`
      `),Lc(),uD(33,`
      `),vi(34,`li`),uD(35,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),Lc(),uD(36,`
      `),vi(37,`li`),uD(38,`This example also has auto-resize enabled, and we also demo how you can pause the resizer if you wish to`),Lc(),uD(39,`
    `),Lc(),uD(40,`
  `),Lc(),uD(41,`

  `),vi(42,`button`,8),Ap(`click`,function(){return a.togglePauseResizer()}),uD(43,`
    Pause auto-resize: `),vi(44,`b`),uD(45),Lc(),uD(46,`
  `),Lc(),uD(47,`
  `),vi(48,`button`,8),Ap(`click`,function(){return a.disposeGrid()}),uD(49,`Dispose Grid`),Lc(),uD(50,`

  `),vi(51,`angular-slickgrid`,9),Ap(`onAngularGridCreated`,function(d){return a.angularGridReady(d.detail)}),uD(52,`
  `),Lc(),uD(53,`
`),Lc(),uD(54,`
`)),r&2&&(fv(45),Qp(a.resizerPaused),fv(6),bp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[R$],encapsulation:2})}}return l})();export{E as Example2Component};
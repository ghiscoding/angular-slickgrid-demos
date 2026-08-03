import{Dn as jp,Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1}from"./chunk-C7G4ZLh2.js";var C=(l,x,t)=>t?`<i class="mdi mdi-fire red" aria-hidden="true"></i>`:{text:`<i class="mdi mdi-snowflake" aria-hidden="true"></i>`,addClasses:`lightblue`,toolTip:`Freezing`};var y=(l,x,t)=>`<span style="margin-left: 5px">
      <button class="btn btn-xs btn-default btn-icon">
        <i class="mdi ${t?`mdi-check-circle`:`mdi-circle`}" style="color: ${t?`black`:`lavender`}"></i>
      </button>
    </span>`;var E=(()=>{class l{constructor(){this.columns=[],this.hideSubTitle=!1,this.resizerPaused=!1}angularGridReady(t){this.angularGrid=t}ngOnInit(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,width:70},{id:`phone`,name:`Phone Number using mask`,field:`phone`,sortable:!0,type:`number`,minWidth:100,formatter:JN.mask,params:{mask:`(000) 000-0000`}},{id:`duration`,name:`Duration (days)`,field:`duration`,formatter:JN.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:`number`,minWidth:90,exportWithFormatter:!0},{id:`complete`,name:`% Complete`,field:`percentComplete`,formatter:JN.percentCompleteBar,type:`number`,sortable:!0,minWidth:100},{id:`percent2`,name:`% Complete`,field:`percentComplete2`,formatter:JN.progressBar,type:`number`,sortable:!0,minWidth:100},{id:`start`,name:`Start`,field:`start`,formatter:JN.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0},{id:`finish`,name:`Finish`,field:`finish`,formatter:JN.dateIso,sortable:!0,type:`date`,minWidth:90,exportWithFormatter:!0},{id:`effort-driven`,name:`Effort Driven`,field:`effortDriven`,formatter:C,type:`number`,sortable:!0,minWidth:100},{id:`completed`,name:`Completed`,field:`completed`,type:`number`,sortable:!0,minWidth:100,formatter:y,onCellClick:(r,a)=>{this.toggleCompletedProperty(a?.dataContext)}}],this.gridOptions={autoResize:{container:`#demo-container`,rightPadding:10},enableAutoResize:!0,enableCellNavigation:!0,showCustomFooter:!0,customFooterOptions:{leftFooterText:`custom footer text`,hideTotalItemCount:!0,hideLastUpdateTimestamp:!0},enableExcelCopyBuffer:!0};let t=[];for(let r=0;r<500;r++){let a=2e3+Math.floor(Math.random()*10),s=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);t[r]={id:r,title:`Task `+r,phone:this.generatePhoneNumber(),duration:r%33===0?null:Math.random()*100+``,percentComplete:u,percentComplete2:u,percentCompleteNumber:u,start:new Date(a,s,d),finish:new Date(a,s+1,d),effortDriven:r%5===0}}this.dataset=t}disposeGrid(){this.angularGrid.destroy()}generatePhoneNumber(){let t=``;for(let r=0;r<10;r++)t+=Math.round(Math.random()*9)+``;return t}togglePauseResizer(){this.resizerPaused=!this.resizerPaused,this.angularGrid.resizerService.pauseResizer(this.resizerPaused)}toggleCompletedProperty(t){typeof t==`object`&&(t.completed=!t.completed,setTimeout(()=>{this.angularGrid.gridService.updateItemById(t.id,t,{highlightRow:!1})},250))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(r){return new(r||l)}}static{this.ɵcmp=BI({type:l,selectors:[[`ng-component`]],decls:55,vars:4,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example02.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/formatters`,`target`,`_blank`],[1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(r,a){r&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 2: Grid with Formatters
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return a.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    Grid with Custom and/or included Slickgrid Formatters (`),gi(20,`a`,7),oD(21,`Wiki docs`),xc(),oD(22,`).
    `),gi(23,`ul`),oD(24,`
      `),gi(25,`li`),oD(26,`The 2 last columns are using Custom Formatters`),xc(),oD(27,`
      `),gi(28,`ul`),oD(29,`
        `),gi(30,`li`),oD(31,`The "Completed" column uses a the "onCellClick" event and a formatter to simulate a toggle action`),xc(),oD(32,`
      `),xc(),oD(33,`
      `),gi(34,`li`),oD(35,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),xc(),oD(36,`
      `),gi(37,`li`),oD(38,`This example also has auto-resize enabled, and we also demo how you can pause the resizer if you wish to`),xc(),oD(39,`
    `),xc(),oD(40,`
  `),xc(),oD(41,`

  `),gi(42,`button`,8),Dp(`click`,function(){return a.togglePauseResizer()}),oD(43,`
    Pause auto-resize: `),gi(44,`b`),oD(45),xc(),oD(46,`
  `),xc(),oD(47,`
  `),gi(48,`button`,8),Dp(`click`,function(){return a.disposeGrid()}),oD(49,`Dispose Grid`),xc(),oD(50,`

  `),gi(51,`angular-slickgrid`,9),Dp(`onAngularGridCreated`,function(d){return a.angularGridReady(d.detail)}),oD(52,`
  `),xc(),oD(53,`
`),xc(),oD(54,`
`)),r&2&&(av(45),jp(a.resizerPaused),av(6),gp(`columns`,a.columns)(`options`,a.gridOptions)(`dataset`,a.dataset))},dependencies:[q1],encapsulation:2})}}return l})();export{E as Example2Component};
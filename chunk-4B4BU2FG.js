import{Da as b,za as o}from"./chunk-V3K67AAF.js";import{Jb as e,Kb as g,Oa as h,hb as f,ib as i,jb as n,kb as p,ub as m,za as c}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";var C=(l,x,t)=>t?'<i class="mdi mdi-fire red" aria-hidden="true"></i>':{text:'<i class="mdi mdi-snowflake" aria-hidden="true"></i>',addClasses:"lightblue",toolTip:"Freezing"},y=(l,x,t)=>`<span style="margin-left: 5px">
      <button class="btn btn-xs btn-default btn-icon">
        <i class="mdi ${t?"mdi-check-circle":"mdi-circle"}" style="color: ${t?"black":"lavender"}"></i>
      </button>
    </span>`,E=(()=>{class l{constructor(){this.columns=[],this.hideSubTitle=!1,this.resizerPaused=!1}angularGridReady(t){this.angularGrid=t}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"title",sortable:!0,width:70},{id:"phone",name:"Phone Number using mask",field:"phone",sortable:!0,type:"number",minWidth:100,formatter:o.mask,params:{mask:"(000) 000-0000"}},{id:"duration",name:"Duration (days)",field:"duration",formatter:o.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:"number",minWidth:90,exportWithFormatter:!0},{id:"complete",name:"% Complete",field:"percentComplete",formatter:o.percentCompleteBar,type:"number",sortable:!0,minWidth:100},{id:"percent2",name:"% Complete",field:"percentComplete2",formatter:o.progressBar,type:"number",sortable:!0,minWidth:100},{id:"start",name:"Start",field:"start",formatter:o.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0},{id:"finish",name:"Finish",field:"finish",formatter:o.dateIso,sortable:!0,type:"date",minWidth:90,exportWithFormatter:!0},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:C,type:"number",sortable:!0,minWidth:100},{id:"completed",name:"Completed",field:"completed",type:"number",sortable:!0,minWidth:100,formatter:y,onCellClick:(r,a)=>{this.toggleCompletedProperty(a?.dataContext)}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:!0,enableCellNavigation:!0,showCustomFooter:!0,customFooterOptions:{leftFooterText:"custom footer text",hideTotalItemCount:!0,hideLastUpdateTimestamp:!0},enableExcelCopyBuffer:!0};let t=[];for(let r=0;r<500;r++){let a=2e3+Math.floor(Math.random()*10),s=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);t[r]={id:r,title:"Task "+r,phone:this.generatePhoneNumber(),duration:r%33===0?null:Math.random()*100+"",percentComplete:u,percentComplete2:u,percentCompleteNumber:u,start:new Date(a,s,d),finish:new Date(a,s+1,d),effortDriven:r%5===0}}this.dataset=t}disposeGrid(){this.angularGrid.destroy()}generatePhoneNumber(){let t="";for(let r=0;r<10;r++)t+=Math.round(Math.random()*9)+"";return t}togglePauseResizer(){this.resizerPaused=!this.resizerPaused,this.angularGrid.resizerService.pauseResizer(this.resizerPaused)}toggleCompletedProperty(t){typeof t=="object"&&(t.completed=!t.completed,setTimeout(()=>{this.angularGrid.gridService.updateItemById(t.id,t,{highlightRow:!1})},250))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=h({type:l,selectors:[["ng-component"]],decls:55,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example02.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/formatters","target","_blank"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(r,a){r&1&&(i(0,"div",0),e(1,`
  `),i(2,"h2"),e(3,`
    Example 2: Grid with Formatters
    `),i(4,"span",1),e(5,`
      `),i(6,"a",2),e(7,`
        `),p(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),i(12,"button",4),m("click",function(){return a.toggleSubTitle()}),e(13,`
      `),p(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`

  `),i(18,"div",6),e(19,`
    Grid with Custom and/or included Slickgrid Formatters (`),i(20,"a",7),e(21,"Wiki docs"),n(),e(22,`).
    `),i(23,"ul"),e(24,`
      `),i(25,"li"),e(26,"The 2 last columns are using Custom Formatters"),n(),e(27,`
      `),i(28,"ul"),e(29,`
        `),i(30,"li"),e(31,'The "Completed" column uses a the "onCellClick" event and a formatter to simulate a toggle action'),n(),e(32,`
      `),n(),e(33,`
      `),i(34,"li"),e(35,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),n(),e(36,`
      `),i(37,"li"),e(38,"This example also has auto-resize enabled, and we also demo how you can pause the resizer if you wish to"),n(),e(39,`
    `),n(),e(40,`
  `),n(),e(41,`

  `),i(42,"button",8),m("click",function(){return a.togglePauseResizer()}),e(43,`
    Pause auto-resize: `),i(44,"b"),e(45),n(),e(46,`
  `),n(),e(47,`
  `),i(48,"button",8),m("click",function(){return a.disposeGrid()}),e(49,"Dispose Grid"),n(),e(50,`

  `),i(51,"angular-slickgrid",9),m("onAngularGridCreated",function(d){return a.angularGridReady(d.detail)}),e(52,`
  `),n(),e(53,`
`),n(),e(54,`
`)),r&2&&(c(45),g(a.resizerPaused),c(6),f("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset))},dependencies:[b],encapsulation:2})}}return l})();export{E as Example2Component};

import {X as XN,b as bI,j as j1,u as ui,U as UE,c as cp,T as Tc,p as pp,W as Wy,N as Np,d as ap}from'./main-WTCLCICA.js';var C=(l,x,t)=>t?'<i class="mdi mdi-fire red" aria-hidden="true"></i>':{text:'<i class="mdi mdi-snowflake" aria-hidden="true"></i>',addClasses:"lightblue",toolTip:"Freezing"},y=(l,x,t)=>`<span style="margin-left: 5px">
      <button class="btn btn-xs btn-default btn-icon">
        <i class="mdi ${t?"mdi-check-circle":"mdi-circle"}" style="color: ${t?"black":"lavender"}"></i>
      </button>
    </span>`,E=(()=>{class l{constructor(){this.columns=[],this.hideSubTitle=false,this.resizerPaused=false;}angularGridReady(t){this.angularGrid=t;}ngOnInit(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,width:70},{id:"phone",name:"Phone Number using mask",field:"phone",sortable:true,type:"number",minWidth:100,formatter:XN.mask,params:{mask:"(000) 000-0000"}},{id:"duration",name:"Duration (days)",field:"duration",formatter:XN.decimal,params:{minDecimal:1,maxDecimal:2},sortable:true,type:"number",minWidth:90,exportWithFormatter:true},{id:"complete",name:"% Complete",field:"percentComplete",formatter:XN.percentCompleteBar,type:"number",sortable:true,minWidth:100},{id:"percent2",name:"% Complete",field:"percentComplete2",formatter:XN.progressBar,type:"number",sortable:true,minWidth:100},{id:"start",name:"Start",field:"start",formatter:XN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true},{id:"finish",name:"Finish",field:"finish",formatter:XN.dateIso,sortable:true,type:"date",minWidth:90,exportWithFormatter:true},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:C,type:"number",sortable:true,minWidth:100},{id:"completed",name:"Completed",field:"completed",type:"number",sortable:true,minWidth:100,formatter:y,onCellClick:(r,a)=>{this.toggleCompletedProperty(a?.dataContext);}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoResize:true,enableCellNavigation:true,showCustomFooter:true,customFooterOptions:{leftFooterText:"custom footer text",hideTotalItemCount:true,hideLastUpdateTimestamp:true},enableExcelCopyBuffer:true};let t=[];for(let r=0;r<500;r++){let a=2e3+Math.floor(Math.random()*10),s=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),u=Math.round(Math.random()*100);t[r]={id:r,title:"Task "+r,phone:this.generatePhoneNumber(),duration:r%33===0?null:Math.random()*100+"",percentComplete:u,percentComplete2:u,percentCompleteNumber:u,start:new Date(a,s,d),finish:new Date(a,s+1,d),effortDriven:r%5===0};}this.dataset=t;}disposeGrid(){this.angularGrid.destroy();}generatePhoneNumber(){let t="";for(let r=0;r<10;r++)t+=Math.round(Math.random()*9)+"";return t}togglePauseResizer(){this.resizerPaused=!this.resizerPaused,this.angularGrid.resizerService.pauseResizer(this.resizerPaused);}toggleCompletedProperty(t){typeof t=="object"&&(t.completed=!t.completed,setTimeout(()=>{this.angularGrid.gridService.updateItemById(t.id,t,{highlightRow:false});},250));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(r){return new(r||l)};}static{this.\u0275cmp=bI({type:l,selectors:[["ng-component"]],decls:55,vars:4,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example02.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/formatters","target","_blank"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(r,a){r&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 2: Grid with Formatters
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return a.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"div",6),UE(19,`
    Grid with Custom and/or included Slickgrid Formatters (`),ui(20,"a",7),UE(21,"Wiki docs"),Tc(),UE(22,`).
    `),ui(23,"ul"),UE(24,`
      `),ui(25,"li"),UE(26,"The 2 last columns are using Custom Formatters"),Tc(),UE(27,`
      `),ui(28,"ul"),UE(29,`
        `),ui(30,"li"),UE(31,'The "Completed" column uses a the "onCellClick" event and a formatter to simulate a toggle action'),Tc(),UE(32,`
      `),Tc(),UE(33,`
      `),ui(34,"li"),UE(35,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),Tc(),UE(36,`
      `),ui(37,"li"),UE(38,"This example also has auto-resize enabled, and we also demo how you can pause the resizer if you wish to"),Tc(),UE(39,`
    `),Tc(),UE(40,`
  `),Tc(),UE(41,`

  `),ui(42,"button",8),pp("click",function(){return a.togglePauseResizer()}),UE(43,`
    Pause auto-resize: `),ui(44,"b"),UE(45),Tc(),UE(46,`
  `),Tc(),UE(47,`
  `),ui(48,"button",8),pp("click",function(){return a.disposeGrid()}),UE(49,"Dispose Grid"),Tc(),UE(50,`

  `),ui(51,"angular-slickgrid",9),pp("onAngularGridCreated",function(d){return a.angularGridReady(d.detail)}),UE(52,`
  `),Tc(),UE(53,`
`),Tc(),UE(54,`
`)),r&2&&(Wy(45),Np(a.resizerPaused),Wy(6),ap("columns",a.columns)("options",a.gridOptions)("dataset",a.dataset));},dependencies:[j1],encapsulation:2});}}return l})();export{E as Example2Component};
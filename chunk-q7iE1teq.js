import {s,r as r$1,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,g as sp}from'./main-C6PQTYH6.js';var h={},g={},k=(()=>{class m{constructor(){this.columns1=[],this.columns2=[],this.dataset1=[],this.dataset2=[],this.hideSubTitle=false,h={},g={};}ngOnInit(){this.defineGrid(),this.dataset1=this.loadData(200,1),this.dataset2=this.loadData(200,2);}angularGrid1Ready(l){this.angularGrid1=l;}angularGrid2Ready(l){this.angularGrid2=l;}defineGrid(){this.gridOptions1={enableAutoResize:true,enableHeaderButton:true,enableHeaderMenu:false,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:false,enableExcelCopyBuffer:true,excelCopyBufferOptions:{onCopyCells:(l,t)=>console.log("onCopyCells",l,t),onPasteCells:(l,t)=>console.log("onPasteCells",l,t),onCopyCancelled:(l,t)=>console.log("onCopyCancelled",l,t)},enableCellNavigation:true,gridHeight:275,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,1)}},this.gridOptions2=s(r$1({},this.gridOptions1),{enableHeaderMenu:true,enableFiltering:true,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,2)}});}handleOnCommand(l,t,r){let a=t.column,o=t.button;t.command==="toggle-highlight"&&(o.cssClass==="mdi mdi-lightbulb-on text-danger"?(r===1?delete h[a.id]:delete g[a.id],o.cssClass="mdi mdi-lightbulb-outline text-warning faded",o.tooltip="Highlight negative numbers."):(r===1?h[a.id]=true:g[a.id]=true,o.cssClass="mdi mdi-lightbulb-on text-danger",o.tooltip="Remove highlight."),this[`angularGrid${r}`].slickGrid.invalidate());}loadData(l,t){for(let a=0;a<10;a++)this[`columns${t}`].push({id:a,name:"Column "+String.fromCharCode(65+a),field:a+"",width:a===0?70:100,filterable:true,sortable:true,formatter:(o,s,d,f)=>t===1&&h[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:t===2&&g[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:d,header:{buttons:[{cssClass:"mdi mdi-lightbulb-outline text-warning faded",command:"toggle-highlight",tooltip:"Highlight negative numbers.",itemVisibilityOverride:o=>o.column.name!=="Column E",itemUsabilityOverride:o=>o.column.name!=="Column J",action:(o,s)=>{console.log(`execute a callback action to "${s.command}" on ${s.column.name}`);}}]}});this[`columns${t}`][0].name="Resize me!",this[`columns${t}`][0].header={buttons:[{cssClass:"mdi mdi-message-text",handler:()=>{alert("Tag");}},{cssClass:"mdi mdi-forum-outline",handler:()=>{alert("Comment");}},{cssClass:"mdi mdi-information",handler:()=>{alert("Info");}},{cssClass:"mdi mdi-help-circle",handler:()=>{alert("Help");}}]},t===2&&this.columns2[0].header?.buttons?.reverse(),this[`columns${t}`][1].name="Hover me!",this[`columns${t}`][1].header={buttons:[{cssClass:"mdi mdi-help-circle",showOnHover:true,tooltip:"This button only appears on hover.",handler:()=>{alert("Help");}}]};let r=[];for(let a=0;a<l;a++){let o=r[a]={};o.id=a;for(let s=0;s<this[`columns${t}`].length;s++)o[s]=Math.round(Math.random()*10)-5;}return r}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid2.resizerService.resizeGrid(0);}static{this.\u0275fac=function(t){return new(t||m)};}static{this.\u0275cmp=TI({type:m,selectors:[["ng-component"]],decls:71,vars:6,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example07.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/header-menu-and-header-buttons","target","_blank"],["gridId","grid7-1",3,"onAngularGridCreated","columns","options","dataset"],["gridId","grid7-2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(t,r){t&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 7: Header Button Plugin
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return r.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`
  `),ui(18,"div",6),BE(19,`
    This example demonstrates using the `),ui(20,"b"),BE(21,"Slick.Plugins.HeaderButtons"),Tc(),BE(22,` plugin to easily add buttons to colum headers. These buttons can
    be specified directly in the column definition, and are very easy to configure and use. (`),ui(23,"a",7),BE(24,"Wiki docs"),Tc(),BE(25,`)
    `),ui(26,"ul"),BE(27,`
      `),ui(28,"li"),BE(29,"Resize the 1st column to see all icon/command"),Tc(),BE(30,`
      `),ui(31,"li"),BE(32,"Mouse hover the 2nd column to see it's icon/command"),Tc(),BE(33,`
      `),ui(34,"li"),BE(35,"For all the other columns, click on top-right red circle icon to enable highlight of negative numbers."),Tc(),BE(36,`
      `),ui(37,"li"),BE(38,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),Tc(),BE(39,`
      `),ui(40,"ol"),BE(41,`
        `),ui(42,"li"),BE(43,'These callbacks are: "itemVisibilityOverride", "itemUsabilityOverride"'),Tc(),BE(44,`
        `),ui(45,"li"),BE(46,'for example the "Column E" does not show the header button via "itemVisibilityOverride"'),Tc(),BE(47,`
        `),ui(48,"li"),BE(49,'for example the "Column J" header button is displayed but it not usable via "itemUsabilityOverride"'),Tc(),BE(50,`
      `),Tc(),BE(51,`
    `),Tc(),BE(52,`
  `),Tc(),BE(53,`

  `),ui(54,"h5"),BE(55,"Grid 1"),Tc(),BE(56,`
  `),ui(57,"angular-slickgrid",8),fp("onAngularGridCreated",function(o){return r.angularGrid1Ready(o.detail)}),BE(58,`
  `),Tc(),BE(59,`

  `),ap(60,"br"),BE(61,`
  `),ui(62,"h5"),BE(63,"Grid 2 - "),ui(64,"span",6),BE(65,"with both Header Buttons & Menus"),Tc()(),BE(66,`
  `),ui(67,"angular-slickgrid",9),fp("onAngularGridCreated",function(o){return r.angularGrid2Ready(o.detail)}),BE(68,`
  `),Tc(),BE(69,`
`),Tc(),BE(70,`
`)),t&2&&(Uy(57),sp("columns",r.columns1)("options",r.gridOptions1)("dataset",r.dataset1),Uy(10),sp("columns",r.columns2)("options",r.gridOptions2)("dataset",r.dataset2));},dependencies:[U1],styles:[`#grid7-1{--slick-header-button-float: right}#grid7-2{--slick-header-button-margin: 4px 0 50px 0;--slick-header-button-float: left}
`],encapsulation:2});}}return m})();export{k as Example7Component};
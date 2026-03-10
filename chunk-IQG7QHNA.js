import{Da as v}from"./chunk-V3K67AAF.js";import{Jb as e,Oa as y,hb as b,ib as i,jb as n,kb as u,ub as c,za as p}from"./chunk-CCOLL5XZ.js";import{a as x,b as C}from"./chunk-PRARYYF3.js";var h={},g={},k=(()=>{class m{constructor(){this.columns1=[],this.columns2=[],this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,h={},g={}}ngOnInit(){this.defineGrid(),this.dataset1=this.loadData(200,1),this.dataset2=this.loadData(200,2)}angularGrid1Ready(l){this.angularGrid1=l}angularGrid2Ready(l){this.angularGrid2=l}defineGrid(){this.gridOptions1={enableAutoResize:!0,enableHeaderButton:!0,enableHeaderMenu:!1,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!1,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onCopyCells:(l,t)=>console.log("onCopyCells",l,t),onPasteCells:(l,t)=>console.log("onPasteCells",l,t),onCopyCancelled:(l,t)=>console.log("onCopyCancelled",l,t)},enableCellNavigation:!0,gridHeight:275,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,1)}},this.gridOptions2=C(x({},this.gridOptions1),{enableHeaderMenu:!0,enableFiltering:!0,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,2)}})}handleOnCommand(l,t,r){let a=t.column,o=t.button;t.command==="toggle-highlight"&&(o.cssClass==="mdi mdi-lightbulb-on text-danger"?(r===1?delete h[a.id]:delete g[a.id],o.cssClass="mdi mdi-lightbulb-outline text-warning faded",o.tooltip="Highlight negative numbers."):(r===1?h[a.id]=!0:g[a.id]=!0,o.cssClass="mdi mdi-lightbulb-on text-danger",o.tooltip="Remove highlight."),this[`angularGrid${r}`].slickGrid.invalidate())}loadData(l,t){for(let a=0;a<10;a++)this[`columns${t}`].push({id:a,name:"Column "+String.fromCharCode(65+a),field:a+"",width:a===0?70:100,filterable:!0,sortable:!0,formatter:(o,s,d,f)=>t===1&&h[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:t===2&&g[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:d,header:{buttons:[{cssClass:"mdi mdi-lightbulb-outline text-warning faded",command:"toggle-highlight",tooltip:"Highlight negative numbers.",itemVisibilityOverride:o=>o.column.name!=="Column E",itemUsabilityOverride:o=>o.column.name!=="Column J",action:(o,s)=>{console.log(`execute a callback action to "${s.command}" on ${s.column.name}`)}}]}});this[`columns${t}`][0].name="Resize me!",this[`columns${t}`][0].header={buttons:[{cssClass:"mdi mdi-message-text",handler:()=>{alert("Tag")}},{cssClass:"mdi mdi-forum-outline",handler:()=>{alert("Comment")}},{cssClass:"mdi mdi-information",handler:()=>{alert("Info")}},{cssClass:"mdi mdi-help-circle",handler:()=>{alert("Help")}}]},t===2&&this.columns2[0].header?.buttons?.reverse(),this[`columns${t}`][1].name="Hover me!",this[`columns${t}`][1].header={buttons:[{cssClass:"mdi mdi-help-circle",showOnHover:!0,tooltip:"This button only appears on hover.",handler:()=>{alert("Help")}}]};let r=[];for(let a=0;a<l;a++){let o=r[a]={};o.id=a;for(let s=0;s<this[`columns${t}`].length;s++)o[s]=Math.round(Math.random()*10)-5}return r}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid2.resizerService.resizeGrid(0)}static{this.\u0275fac=function(t){return new(t||m)}}static{this.\u0275cmp=y({type:m,selectors:[["ng-component"]],decls:71,vars:6,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example07.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/header-menu-and-header-buttons","target","_blank"],["gridId","grid7-1",3,"onAngularGridCreated","columns","options","dataset"],["gridId","grid7-2",3,"onAngularGridCreated","columns","options","dataset"]],template:function(t,r){t&1&&(i(0,"div",0),e(1,`
  `),i(2,"h2"),e(3,`
    Example 7: Header Button Plugin
    `),i(4,"span",1),e(5,`
      `),i(6,"a",2),e(7,`
        `),u(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),i(12,"button",4),c("click",function(){return r.toggleSubTitle()}),e(13,`
      `),u(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`
  `),i(18,"div",6),e(19,`
    This example demonstrates using the `),i(20,"b"),e(21,"Slick.Plugins.HeaderButtons"),n(),e(22,` plugin to easily add buttons to colum headers. These buttons can
    be specified directly in the column definition, and are very easy to configure and use. (`),i(23,"a",7),e(24,"Wiki docs"),n(),e(25,`)
    `),i(26,"ul"),e(27,`
      `),i(28,"li"),e(29,"Resize the 1st column to see all icon/command"),n(),e(30,`
      `),i(31,"li"),e(32,"Mouse hover the 2nd column to see it's icon/command"),n(),e(33,`
      `),i(34,"li"),e(35,"For all the other columns, click on top-right red circle icon to enable highlight of negative numbers."),n(),e(36,`
      `),i(37,"li"),e(38,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),n(),e(39,`
      `),i(40,"ol"),e(41,`
        `),i(42,"li"),e(43,'These callbacks are: "itemVisibilityOverride", "itemUsabilityOverride"'),n(),e(44,`
        `),i(45,"li"),e(46,'for example the "Column E" does not show the header button via "itemVisibilityOverride"'),n(),e(47,`
        `),i(48,"li"),e(49,'for example the "Column J" header button is displayed but it not usable via "itemUsabilityOverride"'),n(),e(50,`
      `),n(),e(51,`
    `),n(),e(52,`
  `),n(),e(53,`

  `),i(54,"h5"),e(55,"Grid 1"),n(),e(56,`
  `),i(57,"angular-slickgrid",8),c("onAngularGridCreated",function(o){return r.angularGrid1Ready(o.detail)}),e(58,`
  `),n(),e(59,`

  `),u(60,"br"),e(61,`
  `),i(62,"h5"),e(63,"Grid 2 - "),i(64,"span",6),e(65,"with both Header Buttons & Menus"),n()(),e(66,`
  `),i(67,"angular-slickgrid",9),c("onAngularGridCreated",function(o){return r.angularGrid2Ready(o.detail)}),e(68,`
  `),n(),e(69,`
`),n(),e(70,`
`)),t&2&&(p(57),b("columns",r.columns1)("options",r.gridOptions1)("dataset",r.dataset1),p(10),b("columns",r.columns2)("options",r.gridOptions2)("dataset",r.dataset2))},dependencies:[v],styles:[`#grid7-1{--slick-header-button-float: right}#grid7-2{--slick-header-button-margin: 4px 0 50px 0;--slick-header-button-float: left}
`],encapsulation:2})}}return m})();export{k as Example7Component};

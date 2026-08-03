import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{gt as q1}from"./chunk-C7G4ZLh2.js";var h={};var g={};var k=(()=>{class m{constructor(){this.columns1=[],this.columns2=[],this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,h={},g={}}ngOnInit(){this.defineGrid(),this.dataset1=this.loadData(200,1),this.dataset2=this.loadData(200,2)}angularGrid1Ready(l){this.angularGrid1=l}angularGrid2Ready(l){this.angularGrid2=l}defineGrid(){this.gridOptions1={enableAutoResize:!0,enableHeaderButton:!0,enableHeaderMenu:!1,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!1,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onCopyCells:(l,t)=>console.log(`onCopyCells`,l,t),onPasteCells:(l,t)=>console.log(`onPasteCells`,l,t),onCopyCancelled:(l,t)=>console.log(`onCopyCancelled`,l,t)},enableCellNavigation:!0,gridHeight:275,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,1)}},this.gridOptions2=s(r({},this.gridOptions1),{enableHeaderMenu:!0,enableFiltering:!0,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,2)}})}handleOnCommand(l,t,r){let a=t.column,o=t.button;t.command===`toggle-highlight`&&(o.cssClass===`mdi mdi-lightbulb-on text-danger`?(r===1?delete h[a.id]:delete g[a.id],o.cssClass=`mdi mdi-lightbulb-outline text-warning faded`,o.tooltip=`Highlight negative numbers.`):(r===1?h[a.id]=!0:g[a.id]=!0,o.cssClass=`mdi mdi-lightbulb-on text-danger`,o.tooltip=`Remove highlight.`),this[`angularGrid${r}`].slickGrid.invalidate())}loadData(l,t){for(let a=0;a<10;a++)this[`columns${t}`].push({id:a,name:`Column `+String.fromCharCode(65+a),field:a+``,width:a===0?70:100,filterable:!0,sortable:!0,formatter:(o,s,d,f)=>t===1&&h[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:t===2&&g[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:d,header:{buttons:[{cssClass:`mdi mdi-lightbulb-outline text-warning faded`,command:`toggle-highlight`,tooltip:`Highlight negative numbers.`,itemVisibilityOverride:o=>o.column.name!==`Column E`,itemUsabilityOverride:o=>o.column.name!==`Column J`,action:(o,s)=>{console.log(`execute a callback action to "${s.command}" on ${s.column.name}`)}}]}});this[`columns${t}`][0].name=`Resize me!`,this[`columns${t}`][0].header={buttons:[{cssClass:`mdi mdi-message-text`,handler:()=>{alert(`Tag`)}},{cssClass:`mdi mdi-forum-outline`,handler:()=>{alert(`Comment`)}},{cssClass:`mdi mdi-information`,handler:()=>{alert(`Info`)}},{cssClass:`mdi mdi-help-circle`,handler:()=>{alert(`Help`)}}]},t===2&&this.columns2[0].header?.buttons?.reverse(),this[`columns${t}`][1].name=`Hover me!`,this[`columns${t}`][1].header={buttons:[{cssClass:`mdi mdi-help-circle`,showOnHover:!0,tooltip:`This button only appears on hover.`,handler:()=>{alert(`Help`)}}]};let r=[];for(let a=0;a<l;a++){let o=r[a]={};o.id=a;for(let s=0;s<this[`columns${t}`].length;s++)o[s]=Math.round(Math.random()*10)-5}return r}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(t){return new(t||m)}}static{this.ɵcmp=BI({type:m,selectors:[[`ng-component`]],decls:71,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example07.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/header-menu-and-header-buttons`,`target`,`_blank`],[`gridId`,`grid7-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`gridId`,`grid7-2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(t,r){t&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 7: Header Button Plugin
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return r.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`
  `),gi(18,`div`,6),oD(19,`
    This example demonstrates using the `),gi(20,`b`),oD(21,`Slick.Plugins.HeaderButtons`),xc(),oD(22,` plugin to easily add buttons to colum headers. These buttons can
    be specified directly in the column definition, and are very easy to configure and use. (`),gi(23,`a`,7),oD(24,`Wiki docs`),xc(),oD(25,`)
    `),gi(26,`ul`),oD(27,`
      `),gi(28,`li`),oD(29,`Resize the 1st column to see all icon/command`),xc(),oD(30,`
      `),gi(31,`li`),oD(32,`Mouse hover the 2nd column to see it's icon/command`),xc(),oD(33,`
      `),gi(34,`li`),oD(35,`For all the other columns, click on top-right red circle icon to enable highlight of negative numbers.`),xc(),oD(36,`
      `),gi(37,`li`),oD(38,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),xc(),oD(39,`
      `),gi(40,`ol`),oD(41,`
        `),gi(42,`li`),oD(43,`These callbacks are: "itemVisibilityOverride", "itemUsabilityOverride"`),xc(),oD(44,`
        `),gi(45,`li`),oD(46,`for example the "Column E" does not show the header button via "itemVisibilityOverride"`),xc(),oD(47,`
        `),gi(48,`li`),oD(49,`for example the "Column J" header button is displayed but it not usable via "itemUsabilityOverride"`),xc(),oD(50,`
      `),xc(),oD(51,`
    `),xc(),oD(52,`
  `),xc(),oD(53,`

  `),gi(54,`h5`),oD(55,`Grid 1`),xc(),oD(56,`
  `),gi(57,`angular-slickgrid`,8),Dp(`onAngularGridCreated`,function(o){return r.angularGrid1Ready(o.detail)}),oD(58,`
  `),xc(),oD(59,`

  `),mp(60,`br`),oD(61,`
  `),gi(62,`h5`),oD(63,`Grid 2 - `),gi(64,`span`,6),oD(65,`with both Header Buttons & Menus`),xc()(),oD(66,`
  `),gi(67,`angular-slickgrid`,9),Dp(`onAngularGridCreated`,function(o){return r.angularGrid2Ready(o.detail)}),oD(68,`
  `),xc(),oD(69,`
`),xc(),oD(70,`
`)),t&2&&(av(57),gp(`columns`,r.columns1)(`options`,r.gridOptions1)(`dataset`,r.dataset1),av(10),gp(`columns`,r.columns2)(`options`,r.gridOptions2)(`dataset`,r.dataset2))},dependencies:[q1],styles:[`#grid7-1{--%NS%slick-header-button-float: right}#grid7-2{--%NS%slick-header-button-margin: 4px 0 50px 0;--%NS%slick-header-button-float: left}
`],encapsulation:2})}}return m})();export{k as Example7Component};
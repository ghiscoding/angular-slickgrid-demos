import{V as R$}from"./chunk-Lo0QQjTd.js";import{X as Lc,dr as uD,en as _p,in as bp,k as GE,o as Ap,xn as fv,yr as vi}from"./chunk-Cxd1Oem8.js";import{n as s,t as r}from"./chunk-DarCEgGK.js";var h={};var g={};var k=(()=>{class m{constructor(){this.columns1=[],this.columns2=[],this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,h={},g={}}ngOnInit(){this.defineGrid(),this.dataset1=this.loadData(200,1),this.dataset2=this.loadData(200,2)}angularGrid1Ready(l){this.angularGrid1=l}angularGrid2Ready(l){this.angularGrid2=l}defineGrid(){this.gridOptions1={enableAutoResize:!0,enableHeaderButton:!0,enableHeaderMenu:!1,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!1,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onCopyCells:(l,t)=>console.log(`onCopyCells`,l,t),onPasteCells:(l,t)=>console.log(`onPasteCells`,l,t),onCopyCancelled:(l,t)=>console.log(`onCopyCancelled`,l,t)},enableCellNavigation:!0,gridHeight:275,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,1)}},this.gridOptions2=s(r({},this.gridOptions1),{enableHeaderMenu:!0,enableFiltering:!0,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,2)}})}handleOnCommand(l,t,r){let a=t.column,o=t.button;t.command===`toggle-highlight`&&(o.cssClass===`mdi mdi-lightbulb-on text-danger`?(r===1?delete h[a.id]:delete g[a.id],o.cssClass=`mdi mdi-lightbulb-outline text-warning faded`,o.tooltip=`Highlight negative numbers.`):(r===1?h[a.id]=!0:g[a.id]=!0,o.cssClass=`mdi mdi-lightbulb-on text-danger`,o.tooltip=`Remove highlight.`),this[`angularGrid${r}`].slickGrid.invalidate())}loadData(l,t){for(let a=0;a<10;a++)this[`columns${t}`].push({id:a,name:`Column `+String.fromCharCode(65+a),field:a+``,width:a===0?70:100,filterable:!0,sortable:!0,formatter:(o,s,d,f)=>t===1&&h[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:t===2&&g[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:d,header:{buttons:[{cssClass:`mdi mdi-lightbulb-outline text-warning faded`,command:`toggle-highlight`,tooltip:`Highlight negative numbers.`,itemVisibilityOverride:o=>o.column.name!==`Column E`,itemUsabilityOverride:o=>o.column.name!==`Column J`,action:(o,s)=>{console.log(`execute a callback action to "${s.command}" on ${s.column.name}`)}}]}});this[`columns${t}`][0].name=`Resize me!`,this[`columns${t}`][0].header={buttons:[{cssClass:`mdi mdi-message-text`,handler:()=>{alert(`Tag`)}},{cssClass:`mdi mdi-forum-outline`,handler:()=>{alert(`Comment`)}},{cssClass:`mdi mdi-information`,handler:()=>{alert(`Info`)}},{cssClass:`mdi mdi-help-circle`,handler:()=>{alert(`Help`)}}]},t===2&&this.columns2[0].header?.buttons?.reverse(),this[`columns${t}`][1].name=`Hover me!`,this[`columns${t}`][1].header={buttons:[{cssClass:`mdi mdi-help-circle`,showOnHover:!0,tooltip:`This button only appears on hover.`,handler:()=>{alert(`Help`)}}]};let r=[];for(let a=0;a<l;a++){let o=r[a]={};o.id=a;for(let s=0;s<this[`columns${t}`].length;s++)o[s]=Math.round(Math.random()*10)-5}return r}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(t){return new(t||m)}}static{this.ɵcmp=GE({type:m,selectors:[[`ng-component`]],decls:71,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example07.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/header-menu-and-header-buttons`,`target`,`_blank`],[`gridId`,`grid7-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`gridId`,`grid7-2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(t,r){t&1&&(vi(0,`div`,0),uD(1,`
  `),vi(2,`h2`),uD(3,`
    Example 7: Header Button Plugin
    `),vi(4,`span`,1),uD(5,`
      `),vi(6,`a`,2),uD(7,`
        `),_p(8,`span`,3),uD(9,` code
      `),Lc(),uD(10,`
    `),Lc(),uD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return r.toggleSubTitle()}),uD(13,`
      `),_p(14,`span`,5),uD(15,`
    `),Lc(),uD(16,`
  `),Lc(),uD(17,`
  `),vi(18,`div`,6),uD(19,`
    This example demonstrates using the `),vi(20,`b`),uD(21,`SlickHeaderButtons`),Lc(),uD(22,` plugin to easily add buttons to colum headers. These buttons can be
    specified directly in the column definition, and are very easy to configure and use. (`),vi(23,`a`,7),uD(24,`Wiki docs`),Lc(),uD(25,`)
    `),vi(26,`ul`),uD(27,`
      `),vi(28,`li`),uD(29,`Resize the 1st column to see all icon/command`),Lc(),uD(30,`
      `),vi(31,`li`),uD(32,`Mouse hover the 2nd column to see it's icon/command`),Lc(),uD(33,`
      `),vi(34,`li`),uD(35,`For all the other columns, click on top-right red circle icon to enable highlight of negative numbers.`),Lc(),uD(36,`
      `),vi(37,`li`),uD(38,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),Lc(),uD(39,`
      `),vi(40,`ol`),uD(41,`
        `),vi(42,`li`),uD(43,`These callbacks are: "itemVisibilityOverride", "itemUsabilityOverride"`),Lc(),uD(44,`
        `),vi(45,`li`),uD(46,`for example the "Column E" does not show the header button via "itemVisibilityOverride"`),Lc(),uD(47,`
        `),vi(48,`li`),uD(49,`for example the "Column J" header button is displayed but it not usable via "itemUsabilityOverride"`),Lc(),uD(50,`
      `),Lc(),uD(51,`
    `),Lc(),uD(52,`
  `),Lc(),uD(53,`

  `),vi(54,`h5`),uD(55,`Grid 1`),Lc(),uD(56,`
  `),vi(57,`angular-slickgrid`,8),Ap(`onAngularGridCreated`,function(o){return r.angularGrid1Ready(o.detail)}),uD(58,`
  `),Lc(),uD(59,`

  `),_p(60,`br`),uD(61,`
  `),vi(62,`h5`),uD(63,`Grid 2 - `),vi(64,`span`,6),uD(65,`with both Header Buttons & Menus`),Lc()(),uD(66,`
  `),vi(67,`angular-slickgrid`,9),Ap(`onAngularGridCreated`,function(o){return r.angularGrid2Ready(o.detail)}),uD(68,`
  `),Lc(),uD(69,`
`),Lc(),uD(70,`
`)),t&2&&(fv(57),bp(`columns`,r.columns1)(`options`,r.gridOptions1)(`dataset`,r.dataset1),fv(10),bp(`columns`,r.columns2)(`options`,r.gridOptions2)(`dataset`,r.dataset2))},dependencies:[R$],styles:[`#grid7-1{--%NS%slick-header-button-float: right}#grid7-2{--%NS%slick-header-button-margin: 4px 0 50px 0;--%NS%slick-header-button-float: left}
`],encapsulation:2})}}return m})();export{k as Example7Component};
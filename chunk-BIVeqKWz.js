import{n as s,t as r}from"./chunk-DarCEgGK.js";import{In as lD,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{l as D1}from"./chunk-Dk5kBPyv.js";var h={};var g={};var k=(()=>{class m{constructor(){this.columns1=[],this.columns2=[],this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,h={},g={}}ngOnInit(){this.defineGrid(),this.dataset1=this.loadData(200,1),this.dataset2=this.loadData(200,2)}angularGrid1Ready(l){this.angularGrid1=l}angularGrid2Ready(l){this.angularGrid2=l}defineGrid(){this.gridOptions1={enableAutoResize:!0,enableHeaderButton:!0,enableHeaderMenu:!1,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!1,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onCopyCells:(l,t)=>console.log(`onCopyCells`,l,t),onPasteCells:(l,t)=>console.log(`onPasteCells`,l,t),onCopyCancelled:(l,t)=>console.log(`onCopyCancelled`,l,t)},enableCellNavigation:!0,gridHeight:275,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,1)}},this.gridOptions2=s(r({},this.gridOptions1),{enableHeaderMenu:!0,enableFiltering:!0,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,2)}})}handleOnCommand(l,t,r){let a=t.column,o=t.button;t.command===`toggle-highlight`&&(o.cssClass===`mdi mdi-lightbulb-on text-danger`?(r===1?delete h[a.id]:delete g[a.id],o.cssClass=`mdi mdi-lightbulb-outline text-warning faded`,o.tooltip=`Highlight negative numbers.`):(r===1?h[a.id]=!0:g[a.id]=!0,o.cssClass=`mdi mdi-lightbulb-on text-danger`,o.tooltip=`Remove highlight.`),this[`angularGrid${r}`].slickGrid.invalidate())}loadData(l,t){for(let a=0;a<10;a++)this[`columns${t}`].push({id:a,name:`Column `+String.fromCharCode(65+a),field:a+``,width:a===0?70:100,filterable:!0,sortable:!0,formatter:(o,s,d,f)=>t===1&&h[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:t===2&&g[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:d,header:{buttons:[{cssClass:`mdi mdi-lightbulb-outline text-warning faded`,command:`toggle-highlight`,tooltip:`Highlight negative numbers.`,itemVisibilityOverride:o=>o.column.name!==`Column E`,itemUsabilityOverride:o=>o.column.name!==`Column J`,action:(o,s)=>{console.log(`execute a callback action to "${s.command}" on ${s.column.name}`)}}]}});this[`columns${t}`][0].name=`Resize me!`,this[`columns${t}`][0].header={buttons:[{cssClass:`mdi mdi-message-text`,handler:()=>{alert(`Tag`)}},{cssClass:`mdi mdi-forum-outline`,handler:()=>{alert(`Comment`)}},{cssClass:`mdi mdi-information`,handler:()=>{alert(`Info`)}},{cssClass:`mdi mdi-help-circle`,handler:()=>{alert(`Help`)}}]},t===2&&this.columns2[0].header?.buttons?.reverse(),this[`columns${t}`][1].name=`Hover me!`,this[`columns${t}`][1].header={buttons:[{cssClass:`mdi mdi-help-circle`,showOnHover:!0,tooltip:`This button only appears on hover.`,handler:()=>{alert(`Help`)}}]};let r=[];for(let a=0;a<l;a++){let o=r[a]={};o.id=a;for(let s=0;s<this[`columns${t}`].length;s++)o[s]=Math.round(Math.random()*10)-5}return r}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(t){return new(t||m)}}static{this.ɵcmp=WE({type:m,selectors:[[`ng-component`]],decls:71,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example07.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/header-menu-and-header-buttons`,`target`,`_blank`],[`gridId`,`grid7-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`gridId`,`grid7-2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(t,r){t&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 7: Header Button Plugin
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return r.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`
  `),vi(18,`div`,6),lD(19,`
    This example demonstrates using the `),vi(20,`b`),lD(21,`Slick.Plugins.HeaderButtons`),Rc(),lD(22,` plugin to easily add buttons to colum headers. These buttons can
    be specified directly in the column definition, and are very easy to configure and use. (`),vi(23,`a`,7),lD(24,`Wiki docs`),Rc(),lD(25,`)
    `),vi(26,`ul`),lD(27,`
      `),vi(28,`li`),lD(29,`Resize the 1st column to see all icon/command`),Rc(),lD(30,`
      `),vi(31,`li`),lD(32,`Mouse hover the 2nd column to see it's icon/command`),Rc(),lD(33,`
      `),vi(34,`li`),lD(35,`For all the other columns, click on top-right red circle icon to enable highlight of negative numbers.`),Rc(),lD(36,`
      `),vi(37,`li`),lD(38,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),Rc(),lD(39,`
      `),vi(40,`ol`),lD(41,`
        `),vi(42,`li`),lD(43,`These callbacks are: "itemVisibilityOverride", "itemUsabilityOverride"`),Rc(),lD(44,`
        `),vi(45,`li`),lD(46,`for example the "Column E" does not show the header button via "itemVisibilityOverride"`),Rc(),lD(47,`
        `),vi(48,`li`),lD(49,`for example the "Column J" header button is displayed but it not usable via "itemUsabilityOverride"`),Rc(),lD(50,`
      `),Rc(),lD(51,`
    `),Rc(),lD(52,`
  `),Rc(),lD(53,`

  `),vi(54,`h5`),lD(55,`Grid 1`),Rc(),lD(56,`
  `),vi(57,`angular-slickgrid`,8),Ap(`onAngularGridCreated`,function(o){return r.angularGrid1Ready(o.detail)}),lD(58,`
  `),Rc(),lD(59,`

  `),_p(60,`br`),lD(61,`
  `),vi(62,`h5`),lD(63,`Grid 2 - `),vi(64,`span`,6),lD(65,`with both Header Buttons & Menus`),Rc()(),lD(66,`
  `),vi(67,`angular-slickgrid`,9),Ap(`onAngularGridCreated`,function(o){return r.angularGrid2Ready(o.detail)}),lD(68,`
  `),Rc(),lD(69,`
`),Rc(),lD(70,`
`)),t&2&&(dv(57),bp(`columns`,r.columns1)(`options`,r.gridOptions1)(`dataset`,r.dataset1),dv(10),bp(`columns`,r.columns2)(`options`,r.gridOptions2)(`dataset`,r.dataset2))},dependencies:[D1],styles:[`#grid7-1{--%NS%slick-header-button-float: right}#grid7-2{--%NS%slick-header-button-margin: 4px 0 50px 0;--%NS%slick-header-button-float: left}
`],encapsulation:2})}}return m})();export{k as Example7Component};
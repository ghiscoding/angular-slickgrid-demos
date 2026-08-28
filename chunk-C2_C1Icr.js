import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Dt as UE,En as iD,Kn as mp,Tt as Tp,Wn as mi,hr as vp,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{H as _W}from"./chunk-CAMk6vEo.js";var h={};var g={};var k=(()=>{class m{constructor(){this.columns1=[],this.columns2=[],this.dataset1=[],this.dataset2=[],this.hideSubTitle=!1,h={},g={}}ngOnInit(){this.defineGrid(),this.dataset1=this.loadData(200,1),this.dataset2=this.loadData(200,2)}angularGrid1Ready(l){this.angularGrid1=l}angularGrid2Ready(l){this.angularGrid2=l}defineGrid(){this.gridOptions1={enableAutoResize:!0,enableHeaderButton:!0,enableHeaderMenu:!1,autoResize:{container:`#demo-container`,rightPadding:10},enableFiltering:!1,enableExcelCopyBuffer:!0,excelCopyBufferOptions:{onCopyCells:(l,t)=>console.log(`onCopyCells`,l,t),onPasteCells:(l,t)=>console.log(`onPasteCells`,l,t),onCopyCancelled:(l,t)=>console.log(`onCopyCancelled`,l,t)},enableCellNavigation:!0,gridHeight:275,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,1)}},this.gridOptions2=s(r({},this.gridOptions1),{enableHeaderMenu:!0,enableFiltering:!0,headerButton:{onCommand:(l,t)=>this.handleOnCommand(l,t,2)}})}handleOnCommand(l,t,r){let a=t.column,o=t.button;t.command===`toggle-highlight`&&(o.cssClass===`mdi mdi-lightbulb-on text-danger`?(r===1?delete h[a.id]:delete g[a.id],o.cssClass=`mdi mdi-lightbulb-outline text-warning faded`,o.tooltip=`Highlight negative numbers.`):(r===1?h[a.id]=!0:g[a.id]=!0,o.cssClass=`mdi mdi-lightbulb-on text-danger`,o.tooltip=`Remove highlight.`),this[`angularGrid${r}`].slickGrid.invalidate())}loadData(l,t){for(let a=0;a<10;a++)this[`columns${t}`].push({id:a,name:`Column `+String.fromCharCode(65+a),field:a+``,width:a===0?70:100,filterable:!0,sortable:!0,formatter:(o,s,d,f)=>t===1&&h[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:t===2&&g[f.id]&&d<0?`<div style="color:red; font-weight:bold;">${d}</div>`:d,header:{buttons:[{cssClass:`mdi mdi-lightbulb-outline text-warning faded`,command:`toggle-highlight`,tooltip:`Highlight negative numbers.`,itemVisibilityOverride:o=>o.column.name!==`Column E`,itemUsabilityOverride:o=>o.column.name!==`Column J`,action:(o,s)=>{console.log(`execute a callback action to "${s.command}" on ${s.column.name}`)}}]}});this[`columns${t}`][0].name=`Resize me!`,this[`columns${t}`][0].header={buttons:[{cssClass:`mdi mdi-message-text`,handler:()=>{alert(`Tag`)}},{cssClass:`mdi mdi-forum-outline`,handler:()=>{alert(`Comment`)}},{cssClass:`mdi mdi-information`,handler:()=>{alert(`Info`)}},{cssClass:`mdi mdi-help-circle`,handler:()=>{alert(`Help`)}}]},t===2&&this.columns2[0].header?.buttons?.reverse(),this[`columns${t}`][1].name=`Hover me!`,this[`columns${t}`][1].header={buttons:[{cssClass:`mdi mdi-help-circle`,showOnHover:!0,tooltip:`This button only appears on hover.`,handler:()=>{alert(`Help`)}}]};let r=[];for(let a=0;a<l;a++){let o=r[a]={};o.id=a;for(let s=0;s<this[`columns${t}`].length;s++)o[s]=Math.round(Math.random()*10)-5}return r}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`),this.angularGrid2.resizerService.resizeGrid(0)}static{this.ɵfac=function(t){return new(t||m)}}static{this.ɵcmp=UE({type:m,selectors:[[`ng-component`]],decls:71,vars:6,consts:[[`id`,`demo-container`,1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example07.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[`href`,`https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/header-menu-and-header-buttons`,`target`,`_blank`],[`gridId`,`grid7-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`gridId`,`grid7-2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(t,r){t&1&&(mi(0,`div`,0),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 7: Header Button Plugin
    `),mi(4,`span`,1),iD(5,`
      `),mi(6,`a`,2),iD(7,`
        `),vp(8,`span`,3),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,4),Tp(`click`,function(){return r.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,5),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`
  `),mi(18,`div`,6),iD(19,`
    This example demonstrates using the `),mi(20,`b`),iD(21,`Slick.Plugins.HeaderButtons`),Ac(),iD(22,` plugin to easily add buttons to colum headers. These buttons can
    be specified directly in the column definition, and are very easy to configure and use. (`),mi(23,`a`,7),iD(24,`Wiki docs`),Ac(),iD(25,`)
    `),mi(26,`ul`),iD(27,`
      `),mi(28,`li`),iD(29,`Resize the 1st column to see all icon/command`),Ac(),iD(30,`
      `),mi(31,`li`),iD(32,`Mouse hover the 2nd column to see it's icon/command`),Ac(),iD(33,`
      `),mi(34,`li`),iD(35,`For all the other columns, click on top-right red circle icon to enable highlight of negative numbers.`),Ac(),iD(36,`
      `),mi(37,`li`),iD(38,`
        Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list
      `),Ac(),iD(39,`
      `),mi(40,`ol`),iD(41,`
        `),mi(42,`li`),iD(43,`These callbacks are: "itemVisibilityOverride", "itemUsabilityOverride"`),Ac(),iD(44,`
        `),mi(45,`li`),iD(46,`for example the "Column E" does not show the header button via "itemVisibilityOverride"`),Ac(),iD(47,`
        `),mi(48,`li`),iD(49,`for example the "Column J" header button is displayed but it not usable via "itemUsabilityOverride"`),Ac(),iD(50,`
      `),Ac(),iD(51,`
    `),Ac(),iD(52,`
  `),Ac(),iD(53,`

  `),mi(54,`h5`),iD(55,`Grid 1`),Ac(),iD(56,`
  `),mi(57,`angular-slickgrid`,8),Tp(`onAngularGridCreated`,function(o){return r.angularGrid1Ready(o.detail)}),iD(58,`
  `),Ac(),iD(59,`

  `),vp(60,`br`),iD(61,`
  `),mi(62,`h5`),iD(63,`Grid 2 - `),mi(64,`span`,6),iD(65,`with both Header Buttons & Menus`),Ac()(),iD(66,`
  `),mi(67,`angular-slickgrid`,9),Tp(`onAngularGridCreated`,function(o){return r.angularGrid2Ready(o.detail)}),iD(68,`
  `),Ac(),iD(69,`
`),Ac(),iD(70,`
`)),t&2&&(cy(57),mp(`columns`,r.columns1)(`options`,r.gridOptions1)(`dataset`,r.dataset1),cy(10),mp(`columns`,r.columns2)(`options`,r.gridOptions2)(`dataset`,r.dataset2))},dependencies:[_W],styles:[`#grid7-1{--%NS%slick-header-button-float: right}#grid7-2{--%NS%slick-header-button-margin: 4px 0 50px 0;--%NS%slick-header-button-float: left}
`],encapsulation:2})}}return m})();export{k as Example7Component};
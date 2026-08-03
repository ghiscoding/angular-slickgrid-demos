import{n as s,t as r}from"./chunk-DarCEgGK.js";import{Fn as mp,Hn as oD,Wt as av,dn as gi,g as Dp,l as BI,pn as gp,yr as xc}from"./chunk-B0w5H0p9.js";import{S as JN,gt as q1,it as j}from"./chunk-C7G4ZLh2.js";import{t as Ze}from"./chunk-Bd6tCbWM.js";var y=995;var v=(()=>{class m{constructor(){this._eventHandler=new j,this.columns1=[],this.columns2=[],this.hideSubTitle=!1}ngOnInit(){this.defineGrids(),this.dataset1=this.mockData(y),this.dataset2=this.mockData(y)}angularGridReady1(l){this.angularGrid1=l;let o=l.slickGrid.getSelectionModel();this._eventHandler.subscribe(o.onSelectedRangesChanged,(t,a)=>{let r=document.querySelector(`#selectionRange1`);if(r){r.textContent=``;for(let d of a)r.textContent+=JSON.stringify(d)}})}angularGridReady2(l){this.angularGrid2=l;let o=l.slickGrid.getSelectionModel();this._eventHandler.subscribe(o.onSelectedRangesChanged,(t,a)=>{let r=document.querySelector(`#selectionRange2`);if(r){r.textContent=``;for(let d of a)r.textContent+=JSON.stringify(d)}})}defineGrids(){this.columns1=[{id:`id`,name:`#`,field:`id`,width:32,maxWidth:40,excludeFromHeaderMenu:!0},{id:`title`,name:`Title`,field:`title`,width:90,cssClass:`cell-title`},{id:`complete`,name:`% Complete`,field:`percentComplete`,sortable:!0,width:90},{id:`start`,name:`Start`,field:`start`,type:`date`,sortable:!0,formatter:JN.dateUs},{id:`finish`,name:`Finish`,field:`finish`,type:`date`,sortable:!0,formatter:JN.dateUs},{id:`priority`,name:`Priority`,field:`priority`,width:80,resizable:!1,sortable:!0,type:`number`,sortComparer:(l,o,t)=>(t??0)*(l===o?0:l>o?1:-1),formatter:(l,o,t)=>{if(!t)return``;let a=+(t>=3?3:t);return a===3?`High`:a===2?`Medium`:`Low`}},{id:`effortDriven`,name:`Effort Driven`,field:`effortDriven`,cssClass:`text-center`,width:95,maxWidth:120,type:`boolean`,sortable:!0,exportCustomFormatter:(l,o,t)=>t?`Yes`:`No`,formatter:JN.checkmarkMaterial}],this.columns2=[...this.columns1],this.gridOptions1={autoResize:{container:`.demo-container`},gridHeight:250,gridWidth:800,enableCellNavigation:!0,autoEdit:!0,editable:!0,headerRowHeight:35,rowHeight:35,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new Ze],enableSelection:!0,selectionOptions:{rowSelectColumnIds:[`id`],selectionType:`mixed`},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:` `}},this.gridOptions2=s(r({},this.gridOptions1),{enableCheckboxSelector:!0,enableSelection:!0,selectionOptions:{selectActiveRow:!1,selectionType:`row`,dragToSelect:!0}})}mockData(l){let o=[];for(let t=0;t<l;t++){let a=2e3+Math.floor(Math.random()*10),r=Math.floor(Math.random()*11),d=Math.floor(Math.random()*29),C=a+Math.floor(Math.random()*10),k=new Date(C,r+1,d);o[t]={id:t,title:`Task `+t,duration:Math.floor(Math.random()*25)+` days`,percentComplete:Math.floor(Math.random()*100),start:new Date(a,r,d,d),finish:k,priority:t%3?2:t%5?3:1,effortDriven:t%4===0}}return o}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[l](`hidden`)}static{this.ɵfac=function(o){return new(o||m)}}static{this.ɵcmp=BI({type:m,selectors:[[`ng-component`]],decls:82,vars:6,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example48.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`subtitle`,`ms-3`,`text-italic`],[`id`,`selectionRange1`],[1,`grid-container1`],[`gridId`,`grid48-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[`id`,`selectionRange2`],[1,`grid-container`],[`gridId`,`grid48-2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(o,t){o&1&&(gi(0,`div`,0),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 48: Hybrid Selection Model
    `),gi(4,`span`,1),oD(5,`
      `),gi(6,`a`,2),oD(7,`
        `),mp(8,`span`,3),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,4),Dp(`click`,function(){return t.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,5),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`div`,6),oD(19,`
    `),gi(20,`code`),oD(21,`SlickHybridSelectionModel`),xc(),oD(22,` This Selection Model is an hybrid approach that uses a combination of the row or cell selections
    depending on certain conditions.
    `),gi(23,`ul`),oD(24,`
      `),gi(25,`li`),oD(26,`
        1. clicking on the first column (`),gi(27,`code`),oD(28,`id`),xc(),oD(29,`) will use `),gi(30,`code`),oD(31,`RowSelectionModel`),xc(),oD(32,` because of our configuration of
        `),gi(33,`code`),oD(34,`rowSelectColumnIds: ['id']`),xc(),oD(35,` as the columns that will trigger row selection.
      `),xc(),oD(36,`
      `),gi(37,`li`),oD(38,`2. clicking on the any other columns will use `),gi(39,`code`),oD(40,`CellSelectionModel`),xc(),oD(41,` by default`),xc(),oD(42,`
    `),xc(),oD(43,`
  `),xc(),oD(44,`

  `),gi(45,`h3`),oD(46,`
    Grid 1
    `),gi(47,`small`,7),oD(48,`
      `),gi(49,`label`),oD(50,`Range Selection`),xc(),oD(51,`
      `),mp(52,`span`,8),oD(53,`
    `),xc(),oD(54,`
  `),xc(),oD(55,`
  `),gi(56,`div`,9),oD(57,`
    `),gi(58,`angular-slickgrid`,10),Dp(`onAngularGridCreated`,function(r){return t.angularGridReady1(r.detail)}),oD(59,`
    `),xc(),oD(60,`
  `),xc(),oD(61,`

  `),mp(62,`hr`),oD(63,`

  `),gi(64,`h3`),oD(65,`
    Grid 2
    `),gi(66,`small`,7),oD(67,`
      `),gi(68,`label`),oD(69,`Range Selection`),xc(),oD(70,`
      `),mp(71,`span`,11),oD(72,`
    `),xc(),oD(73,`
  `),xc(),oD(74,`
  `),gi(75,`div`,12),oD(76,`
    `),gi(77,`angular-slickgrid`,13),Dp(`onAngularGridCreated`,function(r){return t.angularGridReady2(r.detail)}),oD(78,`
    `),xc(),oD(79,`
  `),xc(),oD(80,`
`),xc(),oD(81,`
`)),o&2&&(av(58),gp(`columns`,t.columns1)(`options`,t.gridOptions1)(`dataset`,t.dataset1),av(19),gp(`columns`,t.columns2)(`options`,t.gridOptions2)(`dataset`,t.dataset2))},dependencies:[q1],encapsulation:2})}}return m})();export{v as Example48Component};
import{n as s,t as r}from"./chunk-DarCEgGK.js";import{In as lD,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{ht as q,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";import{t as Qe}from"./chunk-D0qctKwX.js";var E=995;var w=(()=>{class m{constructor(){this._eventHandler=new q,this.columns1=[],this.columns2=[],this.hideSubTitle=!1,this.enableMultiSelection=!1}ngOnInit(){this.defineGrids(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E)}angularGridReady1(r){this.angularGrid1=r;let l=r.slickGrid.getSelectionModel();this._eventHandler.subscribe(l.onSelectedRangesChanged,(t,a)=>{let o=document.querySelector(`#selectionRange1`);if(o){o.textContent=``;for(let s of a)o.textContent+=JSON.stringify(s)}})}angularGridReady2(r){this.angularGrid2=r;let l=r.slickGrid.getSelectionModel();this._eventHandler.subscribe(l.onSelectedRangesChanged,(t,a)=>{let o=document.querySelector(`#selectionRange2`);if(o){o.textContent=``;for(let s of a)o.textContent+=JSON.stringify(s)}})}defineGrids(){this.columns1=[{id:`id`,name:`#`,field:`id`,width:32,maxWidth:40,excludeFromHeaderMenu:!0},{id:`title`,name:`Title`,field:`title`,width:90,cssClass:`cell-title`},{id:`complete`,name:`% Complete`,field:`percentComplete`,sortable:!0,width:90},{id:`start`,name:`Start`,field:`start`,type:`date`,sortable:!0,formatter:sI.dateUs},{id:`finish`,name:`Finish`,field:`finish`,type:`date`,sortable:!0,formatter:sI.dateUs},{id:`priority`,name:`Priority`,field:`priority`,width:80,resizable:!1,sortable:!0,type:`number`,sortComparer:(r,l,t)=>(t??0)*(r===l?0:r>l?1:-1),formatter:(r,l,t)=>{if(!t)return``;let a=+(t>=3?3:t);return a===3?`High`:a===2?`Medium`:`Low`}},{id:`effortDriven`,name:`Effort Driven`,field:`effortDriven`,cssClass:`text-center`,width:95,maxWidth:120,type:`boolean`,sortable:!0,exportCustomFormatter:(r,l,t)=>t?`Yes`:`No`,formatter:sI.checkmarkMaterial}],this.columns2=[...this.columns1],this.gridOptions1={autoResize:{container:`.demo-container`},gridHeight:250,gridWidth:800,enableCellNavigation:!0,preventDragFromKeys:[],autoEdit:!0,editable:!0,headerRowHeight:35,rowHeight:35,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new Qe],enableSelection:!0,selectionOptions:{rowSelectColumnIds:[`id`],selectionType:`mixed`,enableMultiSelection:!1},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:` `}},this.gridOptions2=s(r({},this.gridOptions1),{enableCheckboxSelector:!0,enableSelection:!0,selectionOptions:{selectActiveRow:!1,selectionType:`row`,dragToSelect:!0,enableMultiSelection:!1}})}toggleMultiSelection(r$1){this.enableMultiSelection=r$1.target.checked;let l=s(r({},this.gridOptions1.selectionOptions),{enableMultiSelection:this.enableMultiSelection}),t=s(r({},this.gridOptions2.selectionOptions),{enableMultiSelection:this.enableMultiSelection});this.gridOptions1.selectionOptions=l,this.gridOptions2.selectionOptions=t,this.angularGrid1?.slickGrid?.setOptions({selectionOptions:l},!0),this.angularGrid2?.slickGrid?.setOptions({selectionOptions:t},!0);let a=this.angularGrid1?.slickGrid?.getSelectionModel(),o=this.angularGrid2?.slickGrid?.getSelectionModel();a&&a.setOptions({enableMultiSelection:this.enableMultiSelection}),o&&o.setOptions({enableMultiSelection:this.enableMultiSelection})}mockData(r){let l=[];for(let t=0;t<r;t++){let a=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),s=Math.floor(Math.random()*29),y=a+Math.floor(Math.random()*10),k=new Date(y,o+1,s);l[t]={id:t,title:`Task `+t,duration:Math.floor(Math.random()*25)+` days`,percentComplete:Math.floor(Math.random()*100),start:new Date(a,o,s,s),finish:k,priority:t%3?2:t%5?3:1,effortDriven:t%4===0}}return l}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`)}static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=WE({type:m,selectors:[[`ng-component`]],decls:88,vars:7,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example48.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`subtitle`,`ms-3`,`text-italic`],[`id`,`selectionRange1`],[1,`grid-container1`],[`gridId`,`grid48-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[1,`checkbox-inline`,`control-label`,`my-3`],[`type`,`checkbox`,`data-test`,`enable-multi-selection`,3,`change`,`checked`],[`id`,`selectionRange2`],[1,`grid-container`],[`gridId`,`grid48-2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,t){l&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 48: Hybrid Selection Model
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return t.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    `),vi(20,`code`),lD(21,`SlickHybridSelectionModel`),Rc(),lD(22,` This Selection Model is an hybrid approach that uses a combination of the row or cell selections
    depending on certain conditions.
    `),vi(23,`ul`),lD(24,`
      `),vi(25,`li`),lD(26,`
        1. clicking on the first column (`),vi(27,`code`),lD(28,`id`),Rc(),lD(29,`) will use `),vi(30,`code`),lD(31,`RowSelectionModel`),Rc(),lD(32,` because of our configuration of
        `),vi(33,`code`),lD(34,`rowSelectColumnIds: ['id']`),Rc(),lD(35,` as the columns that will trigger row selection.
      `),Rc(),lD(36,`
      `),vi(37,`li`),lD(38,`2. clicking on the any other columns will use `),vi(39,`code`),lD(40,`CellSelectionModel`),Rc(),lD(41,` by default`),Rc(),lD(42,`
    `),Rc(),lD(43,`
  `),Rc(),lD(44,`

  `),vi(45,`h3`),lD(46,`
    Grid 1
    `),vi(47,`small`,7),lD(48,`
      `),vi(49,`label`),lD(50,`Range Selection`),Rc(),lD(51,`
      `),_p(52,`span`,8),lD(53,`
    `),Rc(),lD(54,`
  `),Rc(),lD(55,`
  `),vi(56,`div`,9),lD(57,`
    `),vi(58,`angular-slickgrid`,10),Ap(`onAngularGridCreated`,function(o){return t.angularGridReady1(o.detail)}),lD(59,`
    `),Rc(),lD(60,`
  `),Rc(),lD(61,`

  `),vi(62,`label`,11),lD(63,`
    `),vi(64,`input`,12),Ap(`change`,function(o){return t.toggleMultiSelection(o)}),Rc(),lD(65,`
    `),vi(66,`b`),lD(67,`Enable multi-selection`),Rc(),lD(68,` (Ctrl/Cmd-click or drag)
  `),Rc(),lD(69,`

  `),vi(70,`h3`),lD(71,`
    Grid 2
    `),vi(72,`small`,7),lD(73,`
      `),vi(74,`label`),lD(75,`Range Selection`),Rc(),lD(76,`
      `),_p(77,`span`,13),lD(78,`
    `),Rc(),lD(79,`
  `),Rc(),lD(80,`
  `),vi(81,`div`,14),lD(82,`
    `),vi(83,`angular-slickgrid`,15),Ap(`onAngularGridCreated`,function(o){return t.angularGridReady2(o.detail)}),lD(84,`
    `),Rc(),lD(85,`
  `),Rc(),lD(86,`
`),Rc(),lD(87,`
`)),l&2&&(dv(58),bp(`columns`,t.columns1)(`options`,t.gridOptions1)(`dataset`,t.dataset1),dv(6),bp(`checked`,t.enableMultiSelection),dv(19),bp(`columns`,t.columns2)(`options`,t.gridOptions2)(`dataset`,t.dataset2))},dependencies:[D1],encapsulation:2})}}return m})();export{w as Example48Component};
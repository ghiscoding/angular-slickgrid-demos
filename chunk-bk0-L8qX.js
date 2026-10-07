import{n as s,t as r}from"./chunk-DarCEgGK.js";import{$ as Mp,C as Ei,En as iD,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp}from"./chunk-CtIlL7jI.js";import{Ot as xz,P as U,xt as uP}from"./chunk-o9GGBwbJ.js";import{t as Qe}from"./chunk-ZlembOOL.js";var E=995;var w=(()=>{class m{constructor(){this._eventHandler=new U,this.columns1=[],this.columns2=[],this.hideSubTitle=!1,this.enableMultiSelection=!1}ngOnInit(){this.defineGrids(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E)}angularGridReady1(r){this.angularGrid1=r;let l=r.slickGrid.getSelectionModel();this._eventHandler.subscribe(l.onSelectedRangesChanged,(t,a)=>{let o=document.querySelector(`#selectionRange1`);if(o){o.textContent=``;for(let s of a)o.textContent+=JSON.stringify(s)}})}angularGridReady2(r){this.angularGrid2=r;let l=r.slickGrid.getSelectionModel();this._eventHandler.subscribe(l.onSelectedRangesChanged,(t,a)=>{let o=document.querySelector(`#selectionRange2`);if(o){o.textContent=``;for(let s of a)o.textContent+=JSON.stringify(s)}})}defineGrids(){this.columns1=[{id:`id`,name:`#`,field:`id`,width:32,maxWidth:40,excludeFromHeaderMenu:!0},{id:`title`,name:`Title`,field:`title`,width:90,cssClass:`cell-title`},{id:`complete`,name:`% Complete`,field:`percentComplete`,sortable:!0,width:90},{id:`start`,name:`Start`,field:`start`,type:`date`,sortable:!0,formatter:uP.dateUs},{id:`finish`,name:`Finish`,field:`finish`,type:`date`,sortable:!0,formatter:uP.dateUs},{id:`priority`,name:`Priority`,field:`priority`,width:80,resizable:!1,sortable:!0,type:`number`,sortComparer:(r,l,t)=>(t??0)*(r===l?0:r>l?1:-1),formatter:(r,l,t)=>{if(!t)return``;let a=+(t>=3?3:t);return a===3?`High`:a===2?`Medium`:`Low`}},{id:`effortDriven`,name:`Effort Driven`,field:`effortDriven`,cssClass:`text-center`,width:95,maxWidth:120,type:`boolean`,sortable:!0,exportCustomFormatter:(r,l,t)=>t?`Yes`:`No`,formatter:uP.checkmarkMaterial}],this.columns2=[...this.columns1],this.gridOptions1={autoResize:{container:`.demo-container`},gridHeight:250,gridWidth:800,enableCellNavigation:!0,preventDragFromKeys:[],autoEdit:!0,editable:!0,headerRowHeight:35,rowHeight:35,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new Qe],enableSelection:!0,selectionOptions:{rowSelectColumnIds:[`id`],selectionType:`mixed`,enableMultiSelection:!1},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:` `}},this.gridOptions2=s(r({},this.gridOptions1),{enableCheckboxSelector:!0,enableSelection:!0,selectionOptions:{selectActiveRow:!1,selectionType:`row`,dragToSelect:!0,enableMultiSelection:!1}})}toggleMultiSelection(r$1){this.enableMultiSelection=r$1.target.checked;let l=s(r({},this.gridOptions1.selectionOptions),{enableMultiSelection:this.enableMultiSelection}),t=s(r({},this.gridOptions2.selectionOptions),{enableMultiSelection:this.enableMultiSelection});this.gridOptions1.selectionOptions=l,this.gridOptions2.selectionOptions=t,this.angularGrid1?.slickGrid?.setOptions({selectionOptions:l},!0),this.angularGrid2?.slickGrid?.setOptions({selectionOptions:t},!0);let a=this.angularGrid1?.slickGrid?.getSelectionModel(),o=this.angularGrid2?.slickGrid?.getSelectionModel();a&&a.setOptions({enableMultiSelection:this.enableMultiSelection}),o&&o.setOptions({enableMultiSelection:this.enableMultiSelection})}mockData(r){let l=[];for(let t=0;t<r;t++){let a=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),s=Math.floor(Math.random()*29),y=a+Math.floor(Math.random()*10),k=new Date(y,o+1,s);l[t]={id:t,title:`Task `+t,duration:Math.floor(Math.random()*25)+` days`,percentComplete:Math.floor(Math.random()*100),start:new Date(a,o,s,s),finish:k,priority:t%3?2:t%5?3:1,effortDriven:t%4===0}}return l}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`)}static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=BE({type:m,selectors:[[`ng-component`]],decls:88,vars:7,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example48.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`subtitle`,`ms-3`,`text-italic`],[`id`,`selectionRange1`],[1,`grid-container1`],[`gridId`,`grid48-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[1,`checkbox-inline`,`control-label`,`my-3`],[`type`,`checkbox`,`data-test`,`enable-multi-selection`,3,`change`,`checked`],[`id`,`selectionRange2`],[1,`grid-container`],[`gridId`,`grid48-2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,t){l&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 48: Hybrid Selection Model
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return t.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    `),Ei(20,`code`),iD(21,`SlickHybridSelectionModel`),Oc(),iD(22,` This Selection Model is an hybrid approach that uses a combination of the row or cell selections
    depending on certain conditions.
    `),Ei(23,`ul`),iD(24,`
      `),Ei(25,`li`),iD(26,`
        1. clicking on the first column (`),Ei(27,`code`),iD(28,`id`),Oc(),iD(29,`) will use `),Ei(30,`code`),iD(31,`RowSelectionModel`),Oc(),iD(32,` because of our configuration of
        `),Ei(33,`code`),iD(34,`rowSelectColumnIds: ['id']`),Oc(),iD(35,` as the columns that will trigger row selection.
      `),Oc(),iD(36,`
      `),Ei(37,`li`),iD(38,`2. clicking on the any other columns will use `),Ei(39,`code`),iD(40,`CellSelectionModel`),Oc(),iD(41,` by default`),Oc(),iD(42,`
    `),Oc(),iD(43,`
  `),Oc(),iD(44,`

  `),Ei(45,`h3`),iD(46,`
    Grid 1
    `),Ei(47,`small`,7),iD(48,`
      `),Ei(49,`label`),iD(50,`Range Selection`),Oc(),iD(51,`
      `),Tp(52,`span`,8),iD(53,`
    `),Oc(),iD(54,`
  `),Oc(),iD(55,`
  `),Ei(56,`div`,9),iD(57,`
    `),Ei(58,`angular-slickgrid`,10),Mp(`onAngularGridCreated`,function(o){return t.angularGridReady1(o.detail)}),iD(59,`
    `),Oc(),iD(60,`
  `),Oc(),iD(61,`

  `),Ei(62,`label`,11),iD(63,`
    `),Ei(64,`input`,12),Mp(`change`,function(o){return t.toggleMultiSelection(o)}),Oc(),iD(65,`
    `),Ei(66,`b`),iD(67,`Enable multi-selection`),Oc(),iD(68,` (Ctrl/Cmd-click or drag)
  `),Oc(),iD(69,`

  `),Ei(70,`h3`),iD(71,`
    Grid 2
    `),Ei(72,`small`,7),iD(73,`
      `),Ei(74,`label`),iD(75,`Range Selection`),Oc(),iD(76,`
      `),Tp(77,`span`,13),iD(78,`
    `),Oc(),iD(79,`
  `),Oc(),iD(80,`
  `),Ei(81,`div`,14),iD(82,`
    `),Ei(83,`angular-slickgrid`,15),Mp(`onAngularGridCreated`,function(o){return t.angularGridReady2(o.detail)}),iD(84,`
    `),Oc(),iD(85,`
  `),Oc(),iD(86,`
`),Oc(),iD(87,`
`)),l&2&&(ay(58),Dp(`columns`,t.columns1)(`options`,t.gridOptions1)(`dataset`,t.dataset1),ay(6),Dp(`checked`,t.enableMultiSelection),ay(19),Dp(`columns`,t.columns2)(`options`,t.gridOptions2)(`dataset`,t.dataset2))},dependencies:[xz],encapsulation:2})}}return m})();export{w as Example48Component};
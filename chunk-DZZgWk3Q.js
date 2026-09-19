import{n as s,t as r}from"./chunk-DarCEgGK.js";import{F as Ip,Pn as ly,b as Ep,pt as Rc,rn as bp,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{A as U,W as _W,ht as nk}from"./chunk-DLuyVhQJ.js";import{t as Ze}from"./chunk-C5onuIZj.js";var E=995;var w=(()=>{class m{constructor(){this._eventHandler=new U,this.columns1=[],this.columns2=[],this.hideSubTitle=!1,this.enableMultiSelection=!1}ngOnInit(){this.defineGrids(),this.dataset1=this.mockData(E),this.dataset2=this.mockData(E)}angularGridReady1(r){this.angularGrid1=r;let l=r.slickGrid.getSelectionModel();this._eventHandler.subscribe(l.onSelectedRangesChanged,(t,a)=>{let o=document.querySelector(`#selectionRange1`);if(o){o.textContent=``;for(let s of a)o.textContent+=JSON.stringify(s)}})}angularGridReady2(r){this.angularGrid2=r;let l=r.slickGrid.getSelectionModel();this._eventHandler.subscribe(l.onSelectedRangesChanged,(t,a)=>{let o=document.querySelector(`#selectionRange2`);if(o){o.textContent=``;for(let s of a)o.textContent+=JSON.stringify(s)}})}defineGrids(){this.columns1=[{id:`id`,name:`#`,field:`id`,width:32,maxWidth:40,excludeFromHeaderMenu:!0},{id:`title`,name:`Title`,field:`title`,width:90,cssClass:`cell-title`},{id:`complete`,name:`% Complete`,field:`percentComplete`,sortable:!0,width:90},{id:`start`,name:`Start`,field:`start`,type:`date`,sortable:!0,formatter:nk.dateUs},{id:`finish`,name:`Finish`,field:`finish`,type:`date`,sortable:!0,formatter:nk.dateUs},{id:`priority`,name:`Priority`,field:`priority`,width:80,resizable:!1,sortable:!0,type:`number`,sortComparer:(r,l,t)=>(t??0)*(r===l?0:r>l?1:-1),formatter:(r,l,t)=>{if(!t)return``;let a=+(t>=3?3:t);return a===3?`High`:a===2?`Medium`:`Low`}},{id:`effortDriven`,name:`Effort Driven`,field:`effortDriven`,cssClass:`text-center`,width:95,maxWidth:120,type:`boolean`,sortable:!0,exportCustomFormatter:(r,l,t)=>t?`Yes`:`No`,formatter:nk.checkmarkMaterial}],this.columns2=[...this.columns1],this.gridOptions1={autoResize:{container:`.demo-container`},gridHeight:250,gridWidth:800,enableCellNavigation:!0,preventDragFromKeys:[],autoEdit:!0,editable:!0,headerRowHeight:35,rowHeight:35,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0},externalResources:[new Ze],enableSelection:!0,selectionOptions:{rowSelectColumnIds:[`id`],selectionType:`mixed`,enableMultiSelection:!1},enableExcelCopyBuffer:!0,excelCopyBufferOptions:{copyActiveEditorCell:!0,removeDoubleQuotesOnPaste:!0,replaceNewlinesWith:` `}},this.gridOptions2=s(r({},this.gridOptions1),{enableCheckboxSelector:!0,enableSelection:!0,selectionOptions:{selectActiveRow:!1,selectionType:`row`,dragToSelect:!0,enableMultiSelection:!1}})}toggleMultiSelection(r$1){this.enableMultiSelection=r$1.target.checked;let l=s(r({},this.gridOptions1.selectionOptions),{enableMultiSelection:this.enableMultiSelection}),t=s(r({},this.gridOptions2.selectionOptions),{enableMultiSelection:this.enableMultiSelection});this.gridOptions1.selectionOptions=l,this.gridOptions2.selectionOptions=t,this.angularGrid1?.slickGrid?.setOptions({selectionOptions:l},!0),this.angularGrid2?.slickGrid?.setOptions({selectionOptions:t},!0);let a=this.angularGrid1?.slickGrid?.getSelectionModel(),o=this.angularGrid2?.slickGrid?.getSelectionModel();a&&a.setOptions({enableMultiSelection:this.enableMultiSelection}),o&&o.setOptions({enableMultiSelection:this.enableMultiSelection})}mockData(r){let l=[];for(let t=0;t<r;t++){let a=2e3+Math.floor(Math.random()*10),o=Math.floor(Math.random()*11),s=Math.floor(Math.random()*29),y=a+Math.floor(Math.random()*10),k=new Date(y,o+1,s);l[t]={id:t,title:`Task `+t,duration:Math.floor(Math.random()*25)+` days`,percentComplete:Math.floor(Math.random()*100),start:new Date(a,o,s,s),finish:k,priority:t%3?2:t%5?3:1,effortDriven:t%4===0}}return l}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`)}static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=$E({type:m,selectors:[[`ng-component`]],decls:88,vars:7,consts:[[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example48.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`],[1,`subtitle`,`ms-3`,`text-italic`],[`id`,`selectionRange1`],[1,`grid-container1`],[`gridId`,`grid48-1`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`],[1,`checkbox-inline`,`control-label`,`my-3`],[`type`,`checkbox`,`data-test`,`enable-multi-selection`,3,`change`,`checked`],[`id`,`selectionRange2`],[1,`grid-container`],[`gridId`,`grid48-2`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(l,t){l&1&&(yi(0,`div`,0),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 48: Hybrid Selection Model
    `),yi(4,`span`,1),sD(5,`
      `),yi(6,`a`,2),sD(7,`
        `),Ip(8,`span`,3),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,4),bp(`click`,function(){return t.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,5),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`div`,6),sD(19,`
    `),yi(20,`code`),sD(21,`SlickHybridSelectionModel`),Rc(),sD(22,` This Selection Model is an hybrid approach that uses a combination of the row or cell selections
    depending on certain conditions.
    `),yi(23,`ul`),sD(24,`
      `),yi(25,`li`),sD(26,`
        1. clicking on the first column (`),yi(27,`code`),sD(28,`id`),Rc(),sD(29,`) will use `),yi(30,`code`),sD(31,`RowSelectionModel`),Rc(),sD(32,` because of our configuration of
        `),yi(33,`code`),sD(34,`rowSelectColumnIds: ['id']`),Rc(),sD(35,` as the columns that will trigger row selection.
      `),Rc(),sD(36,`
      `),yi(37,`li`),sD(38,`2. clicking on the any other columns will use `),yi(39,`code`),sD(40,`CellSelectionModel`),Rc(),sD(41,` by default`),Rc(),sD(42,`
    `),Rc(),sD(43,`
  `),Rc(),sD(44,`

  `),yi(45,`h3`),sD(46,`
    Grid 1
    `),yi(47,`small`,7),sD(48,`
      `),yi(49,`label`),sD(50,`Range Selection`),Rc(),sD(51,`
      `),Ip(52,`span`,8),sD(53,`
    `),Rc(),sD(54,`
  `),Rc(),sD(55,`
  `),yi(56,`div`,9),sD(57,`
    `),yi(58,`angular-slickgrid`,10),bp(`onAngularGridCreated`,function(o){return t.angularGridReady1(o.detail)}),sD(59,`
    `),Rc(),sD(60,`
  `),Rc(),sD(61,`

  `),yi(62,`label`,11),sD(63,`
    `),yi(64,`input`,12),bp(`change`,function(o){return t.toggleMultiSelection(o)}),Rc(),sD(65,`
    `),yi(66,`b`),sD(67,`Enable multi-selection`),Rc(),sD(68,` (Ctrl/Cmd-click or drag)
  `),Rc(),sD(69,`

  `),yi(70,`h3`),sD(71,`
    Grid 2
    `),yi(72,`small`,7),sD(73,`
      `),yi(74,`label`),sD(75,`Range Selection`),Rc(),sD(76,`
      `),Ip(77,`span`,13),sD(78,`
    `),Rc(),sD(79,`
  `),Rc(),sD(80,`
  `),yi(81,`div`,14),sD(82,`
    `),yi(83,`angular-slickgrid`,15),bp(`onAngularGridCreated`,function(o){return t.angularGridReady2(o.detail)}),sD(84,`
    `),Rc(),sD(85,`
  `),Rc(),sD(86,`
`),Rc(),sD(87,`
`)),l&2&&(ly(58),Ep(`columns`,t.columns1)(`options`,t.gridOptions1)(`dataset`,t.dataset1),ly(6),Ep(`checked`,t.enableMultiSelection),ly(19),Ep(`columns`,t.columns2)(`options`,t.gridOptions2)(`dataset`,t.dataset2))},dependencies:[_W],encapsulation:2})}}return m})();export{w as Example48Component};
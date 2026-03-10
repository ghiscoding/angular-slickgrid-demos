import{b as w,c as _,f as S,h as z,o as k}from"./chunk-BBW77BDN.js";import{Da as T,Z as v,na as y,wa as p,ya as O,za as u}from"./chunk-V3K67AAF.js";import{Jb as e,Lb as E,Oa as x,Ob as f,Pb as h,Qb as g,hb as C,ib as t,jb as n,kb as s,ub as d,za as m}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";var j=(()=>{class c{constructor(){this.frozenColumnCount=2,this.frozenRowCount=3,this.hideSubTitle=!1,this.isFrozenBottom=!1,this.slickEventHandler=new y}ngOnInit(){this.prepareDataGrid()}ngOnDestroy(){this.slickEventHandler.unsubscribeAll()}angularGridReady(l){this.angularGrid=l,this.gridObj=l.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,i=>this.colorizeHoveringRow(i,!0)),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,i=>this.colorizeHoveringRow(i,!1))}colorizeHoveringRow(l,i){let o=this.gridObj.getCellFromEvent(l),a=i?[o?.row??0]:[];this.gridObj.setSelectedRows(a),l.preventDefault()}prepareDataGrid(){this.columns=[{id:"sel",name:"#",field:"id",minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:!0,resizable:!1,unselectable:!0},{id:"title",name:"Title",field:"title",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"percentComplete",name:"% Complete",field:"percentComplete",resizable:!1,minWidth:130,width:140,formatter:u.percentCompleteBar,type:"number",filterable:!0,filter:{model:p.slider,operator:">="},sortable:!0},{id:"start",name:"Start",field:"start",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:u.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:100,width:120,filterable:!0,sortable:!0,formatter:u.dateIso},{id:"cost",name:"Cost | Duration",field:"cost",formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:!0,filter:{model:p.compoundSlider},editor:{model:O.dualInput,params:{leftInput:{field:"cost",type:"float",decimal:2,minValue:0,maxValue:5e4,placeholder:"< 50K",errorMessage:"Cost must be positive and below $50K."},rightInput:{field:"duration",type:"float",minValue:0,maxValue:100,title:"make sure Duration is withing its range of 0 to 100",errorMessage:"Duration must be between 0 and 100."}}}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",minWidth:100,width:120,formatter:u.checkmarkMaterial,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:p.singleSelect},sortable:!0},{id:"title1",name:"Title 1",field:"title1",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title2",name:"Title 2",field:"title2",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title3",name:"Title 3",field:"title3",minWidth:100,width:120,filterable:!0,sortable:!0},{id:"title4",name:"Title 4",field:"title4",minWidth:100,width:120,filterable:!0,sortable:!0}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:!0,enableCellNavigation:!0,editable:!0,autoEdit:!0,asyncEditorLoading:!0,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}},this.dataset=this.getData()}getData(){let l=[];for(let i=0;i<500;i++)l[i]={id:i,title:"Task "+i,cost:i%33===0?null:Math.random()*1e4,duration:i%8?Math.round(Math.random()*100)+"":null,percentComplete:Math.round(Math.random()*100),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:i%5===0,title1:`Some Text ${Math.round(Math.random()*25)}`,title2:`Some Text ${Math.round(Math.random()*25)}`,title3:`Some Text ${Math.round(Math.random()*25)}`,title4:`Some Text ${Math.round(Math.random()*25)}`};return l}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount})}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount})}costDurationFormatter(l,i,o,a,r){let M=this.isNullUndefinedOrEmpty(r.cost)?"n/a":v(r.cost,0,2,!1,"$","",".",","),b="n/a";return!this.isNullUndefinedOrEmpty(r.duration)&&r.duration>=0&&(b=`${r.duration} ${r.duration>1?"days":"day"}`),`<b>${M}</b> | ${b}`}isNullUndefinedOrEmpty(l){return l===""||l===null||l===void 0}onValidationError(l,i){alert(i.validationResults.msg)}setFrozenColumns(l){this.gridObj.setOptions({frozenColumn:l}),this.gridOptions=this.gridObj.getOptions()}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom)}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let l=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[l]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=x({type:c,selectors:[["ng-component"]],decls:108,vars:6,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example20.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/frozen-columns-rows","target","_blank"],[1,"row","gx-2","mb-2","align-items-end"],[1,"col-2"],["for","pinned-rows"],["id","pinned-rows","type","number",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-auto","gr-2"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"col-1"],["for","pinned-columns"],["id","pinned-columns","type","number",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-auto"],[1,"row"],[1,"col-12"],["data-test","remove-frozen-column-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","set-3frozen-columns",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-pin-outline"],[2,"margin-left","15px"],[1,"mdi","mdi-flip-vertical"],[2,"font-weight","bold"],[1,"row","mt-2","mb-2"],["gridId","grid20","gridWidth","875",3,"onValidationError","onAngularGridCreated","columns","options","dataset"]],template:function(i,o){i&1&&(t(0,"div",0),e(1,`
  `),t(2,"h2"),e(3,`
    Example 20: Pinned (frozen) Columns/Rows
    `),t(4,"span",1),e(5,`
      `),t(6,"a",2),e(7,`
        `),s(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),t(12,"button",4),d("click",function(){return o.toggleSubTitle()}),e(13,`
      `),s(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`

  `),t(18,"div",6),e(19,`
    This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (`),t(20,"a",7),e(21,"Wiki docs"),n(),e(22,`)
    `),t(23,"ul"),e(24,`
      `),t(25,"li"),e(26,"Option to pin any number of columns (left only) or rows"),n(),e(27,`
      `),t(28,"li"),e(29,"Option to pin the rows at the bottom instead of the top (default)"),n(),e(30,`
      `),t(31,"li"),e(32,'You can also dynamically any of these options, through SlickGrid "setOptions()"'),n(),e(33,`
      `),t(34,"li"),e(35,"Possibility to change the styling of the line border between pinned columns/rows"),n(),e(36,`
    `),n(),e(37,`
  `),n(),e(38,`

  `),t(39,"div",8),e(40,`
    `),t(41,"div",9),e(42,`
      `),t(43,"label",10),e(44,"Pinned Rows: "),n(),e(45,`
      `),t(46,"input",11),g("ngModelChange",function(r){return h(o.frozenRowCount,r)||(o.frozenRowCount=r),r}),n(),e(47,`
    `),n(),e(48,`
    `),t(49,"div",12),e(50,`
      `),t(51,"button",13),d("click",function(){return o.changeFrozenRowCount()}),e(52,"Set"),n(),e(53,`
    `),n(),e(54,`
    `),s(55,"div",14),e(56,`
    `),t(57,"div",9),e(58,`
      `),t(59,"label",15),e(60,"Pinned Columns: "),n(),e(61,`
      `),t(62,"input",16),g("ngModelChange",function(r){return h(o.frozenColumnCount,r)||(o.frozenColumnCount=r),r}),n(),e(63,`
    `),n(),e(64,`
    `),t(65,"div",17),e(66,`
      `),t(67,"button",13),d("click",function(){return o.changeFrozenColumnCount()}),e(68,"Set"),n(),e(69,`
    `),n(),e(70,`
  `),n(),e(71,`

  `),t(72,"div",18),e(73,`
    `),t(74,"div",19),e(75,`
      `),t(76,"button",20),d("click",function(){return o.setFrozenColumns(-1)}),e(77,`
        `),s(78,"i",21),e(79,` Remove Frozen Columns
      `),n(),e(80,`
      `),t(81,"button",22),d("click",function(){return o.setFrozenColumns(2)}),e(82,`
        `),s(83,"i",23),e(84,` Set 3 Frozen Columns
      `),n(),e(85,`

      `),t(86,"span",24),e(87,`
        `),t(88,"button",13),d("click",function(){return o.toggleFrozenBottomRows()}),e(89,`
          `),s(90,"i",25),e(91,` Toggle Pinned Rows
        `),n(),e(92,`
        `),t(93,"span",26),e(94),n(),e(95,`
      `),n(),e(96,`
    `),n(),e(97,`
  `),n(),e(98,`
  `),t(99,"div",27),e(100,`
    `),s(101,"hr"),e(102,`
  `),n(),e(103,`
  `),t(104,"angular-slickgrid",28),d("onValidationError",function(r){return o.onValidationError(r.detail.eventData,r.detail.args)})("onAngularGridCreated",function(r){return o.angularGridReady(r.detail)}),e(105,`
  `),n(),e(106,`
`),n(),e(107,`
`)),i&2&&(m(46),f("ngModel",o.frozenRowCount),m(16),f("ngModel",o.frozenColumnCount),m(32),E(": ",o.isFrozenBottom?"Bottom":"Top"),m(10),C("columns",o.columns)("options",o.gridOptions)("dataset",o.dataset))},dependencies:[T,k,w,z,_,S],styles:[`.slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696!important}.slick-pane-bottom{border-top:1px solid #969696!important}
`],encapsulation:2})}}return c})();export{j as Example20Component};

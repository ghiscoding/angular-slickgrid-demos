import {af as j,h as Tu,q as qN,k as kM,ag as ce,T as TI,U as U1,F as En,I as je,J as zt,K as Cn,O as qt,u as ui,B as BE,a as ap,d as Tc,f as fp,P as Ap,R as Ov,e as Uy,V as xp,W as Lv,N as Nc,g as sp,Y as WE}from'./main-C6PQTYH6.js';import {a as a$1}from'./chunk-B52EFzUa.js';var I=(()=>{class c{constructor(){this.frozenColumnCount=2,this.frozenRowCount=3,this.hideSubTitle=false,this.isFrozenBottom=false,this.slickEventHandler=new j;}ngOnInit(){this.prepareDataGrid();}ngOnDestroy(){this.slickEventHandler.unsubscribeAll();}angularGridReady(r){this.angularGrid=r,this.gridObj=r.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,i=>this.colorizeHoveringRow(i,true)),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,i=>this.colorizeHoveringRow(i,false));}colorizeHoveringRow(r,i){let o=this.gridObj.getCellFromEvent(r),a=i?[o?.row??0]:[];this.gridObj.setSelectedRows(a),r.preventDefault();}prepareDataGrid(){this.columns=[{id:"sel",name:"#",field:"id",minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:true,resizable:false,unselectable:true},{id:"title",name:"Title",field:"title",minWidth:100,width:120,filterable:true,sortable:true},{id:"percentComplete",name:"% Complete",field:"percentComplete",resizable:false,minWidth:130,width:140,formatter:qN.percentCompleteBar,type:"number",filterable:true,filter:{model:Tu.slider,operator:">="},sortable:true},{id:"start",name:"Start",field:"start",minWidth:100,width:120,filterable:true,sortable:true,formatter:qN.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:100,width:120,filterable:true,sortable:true,formatter:qN.dateIso},{id:"cost",name:"Cost | Duration",field:"cost",formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:true,filter:{model:Tu.compoundSlider},editor:{model:kM.dualInput,params:{leftInput:{field:"cost",type:"float",decimal:2,minValue:0,maxValue:5e4,placeholder:"< 50K",errorMessage:"Cost must be positive and below $50K."},rightInput:{field:"duration",type:"float",minValue:0,maxValue:100,title:"make sure Duration is withing its range of 0 to 100",errorMessage:"Duration must be between 0 and 100."}}}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",minWidth:100,width:120,formatter:qN.checkmarkMaterial,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect},sortable:true},{id:"title1",name:"Title 1",field:"title1",minWidth:100,width:120,filterable:true,sortable:true},{id:"title2",name:"Title 2",field:"title2",minWidth:100,width:120,filterable:true,sortable:true},{id:"title3",name:"Title 3",field:"title3",minWidth:100,width:120,filterable:true,sortable:true},{id:"title4",name:"Title 4",field:"title4",minWidth:100,width:120,filterable:true,sortable:true}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:true,enableCellNavigation:true,editable:true,autoEdit:true,asyncEditorLoading:true,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:false},headerMenu:{hideFreezeColumnsCommand:false}},this.dataset=this.getData();}getData(){let r=[];for(let i=0;i<500;i++)r[i]={id:i,title:"Task "+i,cost:i%33===0?null:Math.random()*1e4,duration:i%8?Math.round(Math.random()*100)+"":null,percentComplete:Math.round(Math.random()*100),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:i%5===0,title1:`Some Text ${Math.round(Math.random()*25)}`,title2:`Some Text ${Math.round(Math.random()*25)}`,title3:`Some Text ${Math.round(Math.random()*25)}`,title4:`Some Text ${Math.round(Math.random()*25)}`};return r}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount});}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount});}costDurationFormatter(r,i,o,a,l){let D=this.isNullUndefinedOrEmpty(l.cost)?"n/a":ce(l.cost,0,2,false,"$","",".",","),C="n/a";return !this.isNullUndefinedOrEmpty(l.duration)&&l.duration>=0&&(C=`${l.duration} ${l.duration>1?"days":"day"}`),`<b>${D}</b> | ${C}`}isNullUndefinedOrEmpty(r){return r===""||r===null||r===void 0}onValidationError(r,i){a$1(i.validationResults.msg,"danger");}setFrozenColumns(r){this.gridObj.setOptions({frozenColumn:r}),this.gridOptions=this.gridObj.getOptions();}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(i){return new(i||c)};}static{this.\u0275cmp=TI({type:c,selectors:[["ng-component"]],decls:108,vars:6,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example20.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/frozen-columns-rows","target","_blank"],[1,"row","gx-2","mb-2","align-items-end"],[1,"col-2"],["for","pinned-rows"],["id","pinned-rows","type","number",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-auto","gr-2"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"col-1"],["for","pinned-columns"],["id","pinned-columns","type","number",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-auto"],[1,"row"],[1,"col-12"],["data-test","remove-frozen-column-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","set-3frozen-columns",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-pin-outline"],[2,"margin-left","15px"],[1,"mdi","mdi-flip-vertical"],[2,"font-weight","bold"],[1,"row","mt-2","mb-2"],["gridId","grid20","gridWidth","875",3,"onValidationError","onAngularGridCreated","columns","options","dataset"]],template:function(i,o){i&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 20: Pinned (frozen) Columns/Rows
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return o.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (`),ui(20,"a",7),BE(21,"Wiki docs"),Tc(),BE(22,`)
    `),ui(23,"ul"),BE(24,`
      `),ui(25,"li"),BE(26,"Option to pin any number of columns (left only) or rows"),Tc(),BE(27,`
      `),ui(28,"li"),BE(29,"Option to pin the rows at the bottom instead of the top (default)"),Tc(),BE(30,`
      `),ui(31,"li"),BE(32,'You can also dynamically any of these options, through SlickGrid "setOptions()"'),Tc(),BE(33,`
      `),ui(34,"li"),BE(35,"Possibility to change the styling of the line border between pinned columns/rows"),Tc(),BE(36,`
    `),Tc(),BE(37,`
  `),Tc(),BE(38,`

  `),ui(39,"div",8),BE(40,`
    `),ui(41,"div",9),BE(42,`
      `),ui(43,"label",10),BE(44,"Pinned Rows: "),Tc(),BE(45,`
      `),ui(46,"input",11),Ap("ngModelChange",function(l){return WE(o.frozenRowCount,l)||(o.frozenRowCount=l),l}),Tc(),Ov(),BE(47,`
    `),Tc(),BE(48,`
    `),ui(49,"div",12),BE(50,`
      `),ui(51,"button",13),fp("click",function(){return o.changeFrozenRowCount()}),BE(52,"Set"),Tc(),BE(53,`
    `),Tc(),BE(54,`
    `),ap(55,"div",14),BE(56,`
    `),ui(57,"div",9),BE(58,`
      `),ui(59,"label",15),BE(60,"Pinned Columns: "),Tc(),BE(61,`
      `),ui(62,"input",16),Ap("ngModelChange",function(l){return WE(o.frozenColumnCount,l)||(o.frozenColumnCount=l),l}),Tc(),Ov(),BE(63,`
    `),Tc(),BE(64,`
    `),ui(65,"div",17),BE(66,`
      `),ui(67,"button",13),fp("click",function(){return o.changeFrozenColumnCount()}),BE(68,"Set"),Tc(),BE(69,`
    `),Tc(),BE(70,`
  `),Tc(),BE(71,`

  `),ui(72,"div",18),BE(73,`
    `),ui(74,"div",19),BE(75,`
      `),ui(76,"button",20),fp("click",function(){return o.setFrozenColumns(-1)}),BE(77,`
        `),ap(78,"i",21),BE(79,` Remove Frozen Columns
      `),Tc(),BE(80,`
      `),ui(81,"button",22),fp("click",function(){return o.setFrozenColumns(2)}),BE(82,`
        `),ap(83,"i",23),BE(84,` Set 3 Frozen Columns
      `),Tc(),BE(85,`

      `),ui(86,"span",24),BE(87,`
        `),ui(88,"button",13),fp("click",function(){return o.toggleFrozenBottomRows()}),BE(89,`
          `),ap(90,"i",25),BE(91,` Toggle Pinned Rows
        `),Tc(),BE(92,`
        `),ui(93,"span",26),BE(94),Tc(),BE(95,`
      `),Tc(),BE(96,`
    `),Tc(),BE(97,`
  `),Tc(),BE(98,`
  `),ui(99,"div",27),BE(100,`
    `),ap(101,"hr"),BE(102,`
  `),Tc(),BE(103,`
  `),ui(104,"angular-slickgrid",28),fp("onValidationError",function(l){return o.onValidationError(l.detail.eventData,l.detail.args)})("onAngularGridCreated",function(l){return o.angularGridReady(l.detail)}),BE(105,`
  `),Tc(),BE(106,`
`),Tc(),BE(107,`
`)),i&2&&(Uy(46),xp("ngModel",o.frozenRowCount),Lv(),Uy(16),xp("ngModel",o.frozenColumnCount),Lv(),Uy(32),Nc(": ",o.isFrozenBottom?"Bottom":"Top"),Uy(10),sp("columns",o.columns)("options",o.gridOptions)("dataset",o.dataset));},dependencies:[U1,En,je,zt,Cn,qt],styles:[`.slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696!important}.slick-pane-bottom{border-top:1px solid #969696!important}
`],encapsulation:2});}}return c})();export{I as Example20Component};
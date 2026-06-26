import {af as j,f as Tu,X as XN,M as MM,ag as ce,b as bI,j as j1,F as En,G as je,I as zt,J as Cn,K as qt,u as ui,U as UE,c as cp,T as Tc,p as pp,R as Rp,O as Lv,W as Wy,P as Ap,Q as jv,k as Nc,d as ap,S as zE}from'./main-WTCLCICA.js';import {a as a$1}from'./chunk-B52EFzUa.js';var I=(()=>{class c{constructor(){this.frozenColumnCount=2,this.frozenRowCount=3,this.hideSubTitle=false,this.isFrozenBottom=false,this.slickEventHandler=new j;}ngOnInit(){this.prepareDataGrid();}ngOnDestroy(){this.slickEventHandler.unsubscribeAll();}angularGridReady(r){this.angularGrid=r,this.gridObj=r.slickGrid,this.slickEventHandler.subscribe(this.gridObj.onMouseEnter,i=>this.colorizeHoveringRow(i,true)),this.slickEventHandler.subscribe(this.gridObj.onMouseLeave,i=>this.colorizeHoveringRow(i,false));}colorizeHoveringRow(r,i){let o=this.gridObj.getCellFromEvent(r),a=i?[o?.row??0]:[];this.gridObj.setSelectedRows(a),r.preventDefault();}prepareDataGrid(){this.columns=[{id:"sel",name:"#",field:"id",minWidth:40,width:40,maxWidth:40,cannotTriggerInsert:true,resizable:false,unselectable:true},{id:"title",name:"Title",field:"title",minWidth:100,width:120,filterable:true,sortable:true},{id:"percentComplete",name:"% Complete",field:"percentComplete",resizable:false,minWidth:130,width:140,formatter:XN.percentCompleteBar,type:"number",filterable:true,filter:{model:Tu.slider,operator:">="},sortable:true},{id:"start",name:"Start",field:"start",minWidth:100,width:120,filterable:true,sortable:true,formatter:XN.dateIso},{id:"finish",name:"Finish",field:"finish",minWidth:100,width:120,filterable:true,sortable:true,formatter:XN.dateIso},{id:"cost",name:"Cost | Duration",field:"cost",formatter:this.costDurationFormatter.bind(this),minWidth:150,width:170,sortable:true,filter:{model:Tu.compoundSlider},editor:{model:MM.dualInput,params:{leftInput:{field:"cost",type:"float",decimal:2,minValue:0,maxValue:5e4,placeholder:"< 50K",errorMessage:"Cost must be positive and below $50K."},rightInput:{field:"duration",type:"float",minValue:0,maxValue:100,title:"make sure Duration is withing its range of 0 to 100",errorMessage:"Duration must be between 0 and 100."}}}},{id:"effortDriven",name:"Effort Driven",field:"effortDriven",minWidth:100,width:120,formatter:XN.checkmarkMaterial,filterable:true,filter:{collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}],model:Tu.singleSelect},sortable:true},{id:"title1",name:"Title 1",field:"title1",minWidth:100,width:120,filterable:true,sortable:true},{id:"title2",name:"Title 2",field:"title2",minWidth:100,width:120,filterable:true,sortable:true},{id:"title3",name:"Title 3",field:"title3",minWidth:100,width:120,filterable:true,sortable:true},{id:"title4",name:"Title 4",field:"title4",minWidth:100,width:120,filterable:true,sortable:true}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelCopyBuffer:true,enableCellNavigation:true,editable:true,autoEdit:true,asyncEditorLoading:true,frozenColumn:this.frozenColumnCount,frozenRow:this.frozenRowCount,gridMenu:{hideClearFrozenColumnsCommand:false},headerMenu:{hideFreezeColumnsCommand:false}},this.dataset=this.getData();}getData(){let r=[];for(let i=0;i<500;i++)r[i]={id:i,title:"Task "+i,cost:i%33===0?null:Math.random()*1e4,duration:i%8?Math.round(Math.random()*100)+"":null,percentComplete:Math.round(Math.random()*100),start:new Date(2009,0,1),finish:new Date(2009,4,5),effortDriven:i%5===0,title1:`Some Text ${Math.round(Math.random()*25)}`,title2:`Some Text ${Math.round(Math.random()*25)}`,title3:`Some Text ${Math.round(Math.random()*25)}`,title4:`Some Text ${Math.round(Math.random()*25)}`};return r}changeFrozenColumnCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenColumn:this.frozenColumnCount});}changeFrozenRowCount(){this.gridObj&&this.gridObj.setOptions&&this.gridObj.setOptions({frozenRow:this.frozenRowCount});}costDurationFormatter(r,i,o,a,l){let D=this.isNullUndefinedOrEmpty(l.cost)?"n/a":ce(l.cost,0,2,false,"$","",".",","),C="n/a";return !this.isNullUndefinedOrEmpty(l.duration)&&l.duration>=0&&(C=`${l.duration} ${l.duration>1?"days":"day"}`),`<b>${D}</b> | ${C}`}isNullUndefinedOrEmpty(r){return r===""||r===null||r===void 0}onValidationError(r,i){a$1(i.validationResults.msg,"danger");}setFrozenColumns(r){this.gridObj.setOptions({frozenColumn:r}),this.gridOptions=this.gridObj.getOptions();}toggleFrozenBottomRows(){this.gridObj&&this.gridObj.setOptions&&(this.gridObj.setOptions({frozenBottom:!this.isFrozenBottom}),this.isFrozenBottom=!this.isFrozenBottom);}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(i){return new(i||c)};}static{this.\u0275cmp=bI({type:c,selectors:[["ng-component"]],decls:108,vars:6,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example20.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/grid-functionalities/frozen-columns-rows","target","_blank"],[1,"row","gx-2","mb-2","align-items-end"],[1,"col-2"],["for","pinned-rows"],["id","pinned-rows","type","number",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-auto","gr-2"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"col-1"],["for","pinned-columns"],["id","pinned-columns","type","number",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-auto"],[1,"row"],[1,"col-12"],["data-test","remove-frozen-column-button",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-close"],["data-test","set-3frozen-columns",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-pin-outline"],[2,"margin-left","15px"],[1,"mdi","mdi-flip-vertical"],[2,"font-weight","bold"],[1,"row","mt-2","mb-2"],["gridId","grid20","gridWidth","875",3,"onValidationError","onAngularGridCreated","columns","options","dataset"]],template:function(i,o){i&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 20: Pinned (frozen) Columns/Rows
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return o.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"div",6),UE(19,`
    This example demonstrates the use of Pinned (aka frozen) Columns and/or Rows (`),ui(20,"a",7),UE(21,"Wiki docs"),Tc(),UE(22,`)
    `),ui(23,"ul"),UE(24,`
      `),ui(25,"li"),UE(26,"Option to pin any number of columns (left only) or rows"),Tc(),UE(27,`
      `),ui(28,"li"),UE(29,"Option to pin the rows at the bottom instead of the top (default)"),Tc(),UE(30,`
      `),ui(31,"li"),UE(32,'You can also dynamically any of these options, through SlickGrid "setOptions()"'),Tc(),UE(33,`
      `),ui(34,"li"),UE(35,"Possibility to change the styling of the line border between pinned columns/rows"),Tc(),UE(36,`
    `),Tc(),UE(37,`
  `),Tc(),UE(38,`

  `),ui(39,"div",8),UE(40,`
    `),ui(41,"div",9),UE(42,`
      `),ui(43,"label",10),UE(44,"Pinned Rows: "),Tc(),UE(45,`
      `),ui(46,"input",11),Rp("ngModelChange",function(l){return zE(o.frozenRowCount,l)||(o.frozenRowCount=l),l}),Tc(),Lv(),UE(47,`
    `),Tc(),UE(48,`
    `),ui(49,"div",12),UE(50,`
      `),ui(51,"button",13),pp("click",function(){return o.changeFrozenRowCount()}),UE(52,"Set"),Tc(),UE(53,`
    `),Tc(),UE(54,`
    `),cp(55,"div",14),UE(56,`
    `),ui(57,"div",9),UE(58,`
      `),ui(59,"label",15),UE(60,"Pinned Columns: "),Tc(),UE(61,`
      `),ui(62,"input",16),Rp("ngModelChange",function(l){return zE(o.frozenColumnCount,l)||(o.frozenColumnCount=l),l}),Tc(),Lv(),UE(63,`
    `),Tc(),UE(64,`
    `),ui(65,"div",17),UE(66,`
      `),ui(67,"button",13),pp("click",function(){return o.changeFrozenColumnCount()}),UE(68,"Set"),Tc(),UE(69,`
    `),Tc(),UE(70,`
  `),Tc(),UE(71,`

  `),ui(72,"div",18),UE(73,`
    `),ui(74,"div",19),UE(75,`
      `),ui(76,"button",20),pp("click",function(){return o.setFrozenColumns(-1)}),UE(77,`
        `),cp(78,"i",21),UE(79,` Remove Frozen Columns
      `),Tc(),UE(80,`
      `),ui(81,"button",22),pp("click",function(){return o.setFrozenColumns(2)}),UE(82,`
        `),cp(83,"i",23),UE(84,` Set 3 Frozen Columns
      `),Tc(),UE(85,`

      `),ui(86,"span",24),UE(87,`
        `),ui(88,"button",13),pp("click",function(){return o.toggleFrozenBottomRows()}),UE(89,`
          `),cp(90,"i",25),UE(91,` Toggle Pinned Rows
        `),Tc(),UE(92,`
        `),ui(93,"span",26),UE(94),Tc(),UE(95,`
      `),Tc(),UE(96,`
    `),Tc(),UE(97,`
  `),Tc(),UE(98,`
  `),ui(99,"div",27),UE(100,`
    `),cp(101,"hr"),UE(102,`
  `),Tc(),UE(103,`
  `),ui(104,"angular-slickgrid",28),pp("onValidationError",function(l){return o.onValidationError(l.detail.eventData,l.detail.args)})("onAngularGridCreated",function(l){return o.angularGridReady(l.detail)}),UE(105,`
  `),Tc(),UE(106,`
`),Tc(),UE(107,`
`)),i&2&&(Wy(46),Ap("ngModel",o.frozenRowCount),jv(),Wy(16),Ap("ngModel",o.frozenColumnCount),jv(),Wy(32),Nc(": ",o.isFrozenBottom?"Bottom":"Top"),Wy(10),ap("columns",o.columns)("options",o.gridOptions)("dataset",o.dataset));},dependencies:[j1,En,je,zt,Cn,qt],styles:[`.slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696!important}.slick-pane-bottom{border-top:1px solid #969696!important}
`],encapsulation:2});}}return c})();export{I as Example20Component};
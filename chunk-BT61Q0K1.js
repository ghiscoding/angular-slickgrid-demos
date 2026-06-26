import {M as MM,X as XN,x as xi,bh as $,b as bI,j as j1,u as ui,U as UE,c as cp,T as Tc,p as pp,ap as Jf,W as Wy,d as ap,au as dD}from'./main-WTCLCICA.js';function v(d,w){d&1&&(UE(0,`
            `),ui(1,"div",13),UE(2,`
              `),ui(3,"label"),UE(4,"Santa's TODO list:"),Tc(),UE(5,`
            `),Tc(),UE(6,`
          `));}var C=(()=>{class d{constructor(){this.dataset=[],this.dragRows=[],this.dragMode="",this.hideSubTitle=false;}ngOnInit(){this.defineGrids(),this.dataset=this.mockData();}angularGridReady(r){this.angularGrid=r;}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??false}defineGrids(){this.columns=[{id:"name",name:"Name",field:"name",width:300,cssClass:"cell-title",editor:{model:MM.text},validator:this.requiredFieldValidator},{id:"complete",name:"Complete",width:60,cssClass:"cell-effort-driven",field:"complete",cannotTriggerInsert:true,formatter:XN.checkmarkMaterial,editor:{model:MM.Checkbox}}],this.gridOptions={enableAutoResize:false,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:true,enableSelection:true,enableRowMoveManager:true,selectionOptions:{selectActiveRow:false,selectionType:"row"},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:true,disableRowSelection:true,hideRowMoveShadow:false,onAfterMoveRows:(r,a)=>{this.dataset=a.updatedItems;}}};}mockData(){return [{id:0,name:"Make a list",complete:true},{id:1,name:"Check it twice",complete:false},{id:2,name:"Find out who's naughty",complete:false},{id:3,name:"Find out who's nice",complete:false}]}handleOnDragInit(r){r.stopImmediatePropagation();}handleOnDragStart(r){let a=this.angularGrid.slickGrid?.getCellFromEvent(r);if(!a||a.cell===0){this.dragMode="";return}let n=a.row;if(!this.dataset[n]||xi.isActive())return;r.stopImmediatePropagation(),this.dragMode="recycle";let l=this.angularGrid.slickGrid?.getSelectedRows()||[];(!l.length||l.findIndex(p=>p===p)===-1)&&(l=[n],this.angularGrid.slickGrid?.setSelectedRows(l)),this.dragRows=l;let o=l.length,s=document.createElement("span");return s.className="drag-message",s.textContent=`Drag to Recycle Bin to delete ${o} selected row(s)`,this.dragHelper=s,document.body.appendChild(s),document.querySelector("#dropzone")?.classList.add("drag-dropzone"),s}handleOnDrag(r,a){if(this.dragMode!=="recycle")return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${r.pageY+5}px`,this.dragHelper.style.left=`${r.pageX+5}px`);let n=document.querySelector("#dropzone");a.target instanceof HTMLElement&&(a.target.id==="dropzone"||a.target===n)?n.classList.add("drag-hover"):n.classList.remove("drag-hover");}handleOnDragEnd(r,a){if(this.dragMode!=="recycle"||(this.dragHelper?.remove(),document.querySelector("#dropzone")?.classList.remove("drag-dropzone","drag-hover"),this.dragMode!=="recycle"||a.target.id!=="dropzone"))return;let n=this.dragRows.sort().reverse();for(let l of n)this.dataset.splice(l,1);this.angularGrid.slickGrid?.invalidate(),this.angularGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset];}requiredFieldValidator(r){return $(r)?{valid:false,msg:"This is a required field"}:{valid:true,msg:null}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(a){return new(a||d)};}static{this.\u0275cmp=bI({type:d,selectors:[["ng-component"]],decls:55,vars:3,consts:[["slickgridHeader",""],[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example41.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","italic"],[1,"row"],[1,"col"],[1,"grid41"],["gridId","grid41",3,"onAngularGridCreated","onDragInit","onDragStart","onDrag","onDragEnd","columns","options","dataset"],["id","dropzone",1,"recycle-bin","mt-4"],[1,"grid-header"]],template:function(a,n){a&1&&(ui(0,"div",1),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 41: Drag & Drop
    `),ui(4,"span",2),UE(5,`
      `),ui(6,"a",3),UE(7,`
        `),cp(8,"span",4),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",5),pp("click",function(){return n.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",6),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`

  `),ui(18,"h6",7),UE(19,`
    `),ui(20,"ul"),UE(21,`
      `),ui(22,"li"),UE(23,"Click to select, Ctrl-click to toggle selection(s)."),Tc(),UE(24,`
      `),ui(25,"li"),UE(26,"Drag one or more rows by the handle icon to reorder."),Tc(),UE(27,`
      `),ui(28,"li"),UE(29,"Drag one or more rows by selection and drag to the recycle bin to delete."),Tc(),UE(30,`
    `),Tc(),UE(31,`
  `),Tc(),UE(32,`

  `),ui(33,"div",8),UE(34,`
    `),ui(35,"div",9),UE(36,`
      `),ui(37,"div",10),UE(38,`
        `),ui(39,"angular-slickgrid",11),pp("onAngularGridCreated",function(o){return n.angularGridReady(o.detail)})("onDragInit",function(o){return n.handleOnDragInit(o.detail.eventData)})("onDragStart",function(o){return n.handleOnDragStart(o.detail.eventData)})("onDrag",function(o){return n.handleOnDrag(o.detail.eventData,o.detail.args)})("onDragEnd",function(o){return n.handleOnDragEnd(o.detail.eventData,o.detail.args)}),UE(40,`
          `),Jf(41,v,7,0,"ng-template",null,0,dD),UE(43,`
        `),Tc(),UE(44,`
      `),Tc(),UE(45,`
    `),Tc(),UE(46,`

    `),ui(47,"div",9),UE(48,`
      `),ui(49,"div",12),UE(50,"Recycle Bin"),Tc(),UE(51,`
    `),Tc(),UE(52,`
  `),Tc(),UE(53,`
`),Tc(),UE(54,`
`)),a&2&&(Wy(39),ap("columns",n.columns)("options",n.gridOptions)("dataset",n.dataset));},dependencies:[j1],styles:[`.drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:700;height:35px;padding-left:8px;width:100%}.recycle-bin{background:transparent;cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:700;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}
`],encapsulation:2});}}return d})();export{C as Example41Component};
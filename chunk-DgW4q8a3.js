import {k as kM,q as qN,x as xi,bh as $,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,ap as Kf,e as Uy,g as sp,au as lD}from'./main-C6PQTYH6.js';function v(d,w){d&1&&(BE(0,`
            `),ui(1,"div",13),BE(2,`
              `),ui(3,"label"),BE(4,"Santa's TODO list:"),Tc(),BE(5,`
            `),Tc(),BE(6,`
          `));}var C=(()=>{class d{constructor(){this.dataset=[],this.dragRows=[],this.dragMode="",this.hideSubTitle=false;}ngOnInit(){this.defineGrids(),this.dataset=this.mockData();}angularGridReady(r){this.angularGrid=r;}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??false}defineGrids(){this.columns=[{id:"name",name:"Name",field:"name",width:300,cssClass:"cell-title",editor:{model:kM.text},validator:this.requiredFieldValidator},{id:"complete",name:"Complete",width:60,cssClass:"cell-effort-driven",field:"complete",cannotTriggerInsert:true,formatter:qN.checkmarkMaterial,editor:{model:kM.Checkbox}}],this.gridOptions={enableAutoResize:false,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:true,enableSelection:true,enableRowMoveManager:true,selectionOptions:{selectActiveRow:false,selectionType:"row"},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:true,disableRowSelection:true,hideRowMoveShadow:false,onAfterMoveRows:(r,a)=>{this.dataset=a.updatedItems;}}};}mockData(){return [{id:0,name:"Make a list",complete:true},{id:1,name:"Check it twice",complete:false},{id:2,name:"Find out who's naughty",complete:false},{id:3,name:"Find out who's nice",complete:false}]}handleOnDragInit(r){r.stopImmediatePropagation();}handleOnDragStart(r){let a=this.angularGrid.slickGrid?.getCellFromEvent(r);if(!a||a.cell===0){this.dragMode="";return}let n=a.row;if(!this.dataset[n]||xi.isActive())return;r.stopImmediatePropagation(),this.dragMode="recycle";let l=this.angularGrid.slickGrid?.getSelectedRows()||[];(!l.length||l.findIndex(p=>p===p)===-1)&&(l=[n],this.angularGrid.slickGrid?.setSelectedRows(l)),this.dragRows=l;let o=l.length,s=document.createElement("span");return s.className="drag-message",s.textContent=`Drag to Recycle Bin to delete ${o} selected row(s)`,this.dragHelper=s,document.body.appendChild(s),document.querySelector("#dropzone")?.classList.add("drag-dropzone"),s}handleOnDrag(r,a){if(this.dragMode!=="recycle")return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${r.pageY+5}px`,this.dragHelper.style.left=`${r.pageX+5}px`);let n=document.querySelector("#dropzone");a.target instanceof HTMLElement&&(a.target.id==="dropzone"||a.target===n)?n.classList.add("drag-hover"):n.classList.remove("drag-hover");}handleOnDragEnd(r,a){if(this.dragMode!=="recycle"||(this.dragHelper?.remove(),document.querySelector("#dropzone")?.classList.remove("drag-dropzone","drag-hover"),this.dragMode!=="recycle"||a.target.id!=="dropzone"))return;let n=this.dragRows.sort().reverse();for(let l of n)this.dataset.splice(l,1);this.angularGrid.slickGrid?.invalidate(),this.angularGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset];}requiredFieldValidator(r){return $(r)?{valid:false,msg:"This is a required field"}:{valid:true,msg:null}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(a){return new(a||d)};}static{this.\u0275cmp=TI({type:d,selectors:[["ng-component"]],decls:55,vars:3,consts:[["slickgridHeader",""],[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example41.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","italic"],[1,"row"],[1,"col"],[1,"grid41"],["gridId","grid41",3,"onAngularGridCreated","onDragInit","onDragStart","onDrag","onDragEnd","columns","options","dataset"],["id","dropzone",1,"recycle-bin","mt-4"],[1,"grid-header"]],template:function(a,n){a&1&&(ui(0,"div",1),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 41: Drag & Drop
    `),ui(4,"span",2),BE(5,`
      `),ui(6,"a",3),BE(7,`
        `),ap(8,"span",4),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",5),fp("click",function(){return n.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",6),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"h6",7),BE(19,`
    `),ui(20,"ul"),BE(21,`
      `),ui(22,"li"),BE(23,"Click to select, Ctrl-click to toggle selection(s)."),Tc(),BE(24,`
      `),ui(25,"li"),BE(26,"Drag one or more rows by the handle icon to reorder."),Tc(),BE(27,`
      `),ui(28,"li"),BE(29,"Drag one or more rows by selection and drag to the recycle bin to delete."),Tc(),BE(30,`
    `),Tc(),BE(31,`
  `),Tc(),BE(32,`

  `),ui(33,"div",8),BE(34,`
    `),ui(35,"div",9),BE(36,`
      `),ui(37,"div",10),BE(38,`
        `),ui(39,"angular-slickgrid",11),fp("onAngularGridCreated",function(o){return n.angularGridReady(o.detail)})("onDragInit",function(o){return n.handleOnDragInit(o.detail.eventData)})("onDragStart",function(o){return n.handleOnDragStart(o.detail.eventData)})("onDrag",function(o){return n.handleOnDrag(o.detail.eventData,o.detail.args)})("onDragEnd",function(o){return n.handleOnDragEnd(o.detail.eventData,o.detail.args)}),BE(40,`
          `),Kf(41,v,7,0,"ng-template",null,0,lD),BE(43,`
        `),Tc(),BE(44,`
      `),Tc(),BE(45,`
    `),Tc(),BE(46,`

    `),ui(47,"div",9),BE(48,`
      `),ui(49,"div",12),BE(50,"Recycle Bin"),Tc(),BE(51,`
    `),Tc(),BE(52,`
  `),Tc(),BE(53,`
`),Tc(),BE(54,`
`)),a&2&&(Uy(39),sp("columns",n.columns)("options",n.gridOptions)("dataset",n.dataset));},dependencies:[U1],styles:[`.drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:700;height:35px;padding-left:8px;width:100%}.recycle-bin{background:transparent;cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:700;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}
`],encapsulation:2});}}return d})();export{C as Example41Component};
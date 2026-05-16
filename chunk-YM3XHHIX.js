import{B as E,Ca as _,pa as S,xa as g,ya as k}from"./chunk-7JICKOKH.js";import{Jb as e,Oa as h,Ta as x,ac as b,hb as f,ib as t,jb as i,kb as c,ub as m,za as u}from"./chunk-KVVXAJ5Y.js";import"./chunk-PRARYYF3.js";function v(d,w){d&1&&(e(0,`
            `),t(1,"div",13),e(2,`
              `),t(3,"label"),e(4,"Santa's TODO list:"),i(),e(5,`
            `),i(),e(6,`
          `))}var C=(()=>{class d{constructor(){this.dataset=[],this.dragRows=[],this.dragMode="",this.hideSubTitle=!1}ngOnInit(){this.defineGrids(),this.dataset=this.mockData()}angularGridReady(r){this.angularGrid=r}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}defineGrids(){this.columns=[{id:"name",name:"Name",field:"name",width:300,cssClass:"cell-title",editor:{model:g.text},validator:this.requiredFieldValidator},{id:"complete",name:"Complete",width:60,cssClass:"cell-effort-driven",field:"complete",cannotTriggerInsert:!0,formatter:k.checkmarkMaterial,editor:{model:g.Checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:!0,enableSelection:!0,enableRowMoveManager:!0,selectionOptions:{selectActiveRow:!1,selectionType:"row"},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:!0,disableRowSelection:!0,hideRowMoveShadow:!1,onAfterMoveRows:(r,a)=>{this.dataset=a.updatedItems}}}}mockData(){return[{id:0,name:"Make a list",complete:!0},{id:1,name:"Check it twice",complete:!1},{id:2,name:"Find out who's naughty",complete:!1},{id:3,name:"Find out who's nice",complete:!1}]}handleOnDragInit(r){r.stopImmediatePropagation()}handleOnDragStart(r){let a=this.angularGrid.slickGrid?.getCellFromEvent(r);if(!a||a.cell===0){this.dragMode="";return}let n=a.row;if(!this.dataset[n]||S.isActive())return;r.stopImmediatePropagation(),this.dragMode="recycle";let l=this.angularGrid.slickGrid?.getSelectedRows()||[];(!l.length||l.findIndex(p=>p===p)===-1)&&(l=[n],this.angularGrid.slickGrid?.setSelectedRows(l)),this.dragRows=l;let o=l.length,s=document.createElement("span");return s.className="drag-message",s.textContent=`Drag to Recycle Bin to delete ${o} selected row(s)`,this.dragHelper=s,document.body.appendChild(s),document.querySelector("#dropzone")?.classList.add("drag-dropzone"),s}handleOnDrag(r,a){if(this.dragMode!=="recycle")return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${r.pageY+5}px`,this.dragHelper.style.left=`${r.pageX+5}px`);let n=document.querySelector("#dropzone");a.target instanceof HTMLElement&&(a.target.id==="dropzone"||a.target===n)?n.classList.add("drag-hover"):n.classList.remove("drag-hover")}handleOnDragEnd(r,a){if(this.dragMode!=="recycle"||(this.dragHelper?.remove(),document.querySelector("#dropzone")?.classList.remove("drag-dropzone","drag-hover"),this.dragMode!=="recycle"||a.target.id!=="dropzone"))return;let n=this.dragRows.sort().reverse();for(let l of n)this.dataset.splice(l,1);this.angularGrid.slickGrid?.invalidate(),this.angularGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset]}requiredFieldValidator(r){return E(r)?{valid:!1,msg:"This is a required field"}:{valid:!0,msg:null}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(a){return new(a||d)}}static{this.\u0275cmp=h({type:d,selectors:[["ng-component"]],decls:55,vars:3,consts:[["slickgridHeader",""],[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example41.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","italic"],[1,"row"],[1,"col"],[1,"grid41"],["gridId","grid41",3,"onAngularGridCreated","onDragInit","onDragStart","onDrag","onDragEnd","columns","options","dataset"],["id","dropzone",1,"recycle-bin","mt-4"],[1,"grid-header"]],template:function(a,n){a&1&&(t(0,"div",1),e(1,`
  `),t(2,"h2"),e(3,`
    Example 41: Drag & Drop
    `),t(4,"span",2),e(5,`
      `),t(6,"a",3),e(7,`
        `),c(8,"span",4),e(9,` code
      `),i(),e(10,`
    `),i(),e(11,`
    `),t(12,"button",5),m("click",function(){return n.toggleSubTitle()}),e(13,`
      `),c(14,"span",6),e(15,`
    `),i(),e(16,`
  `),i(),e(17,`

  `),t(18,"h6",7),e(19,`
    `),t(20,"ul"),e(21,`
      `),t(22,"li"),e(23,"Click to select, Ctrl-click to toggle selection(s)."),i(),e(24,`
      `),t(25,"li"),e(26,"Drag one or more rows by the handle icon to reorder."),i(),e(27,`
      `),t(28,"li"),e(29,"Drag one or more rows by selection and drag to the recycle bin to delete."),i(),e(30,`
    `),i(),e(31,`
  `),i(),e(32,`

  `),t(33,"div",8),e(34,`
    `),t(35,"div",9),e(36,`
      `),t(37,"div",10),e(38,`
        `),t(39,"angular-slickgrid",11),m("onAngularGridCreated",function(o){return n.angularGridReady(o.detail)})("onDragInit",function(o){return n.handleOnDragInit(o.detail.eventData)})("onDragStart",function(o){return n.handleOnDragStart(o.detail.eventData)})("onDrag",function(o){return n.handleOnDrag(o.detail.eventData,o.detail.args)})("onDragEnd",function(o){return n.handleOnDragEnd(o.detail.eventData,o.detail.args)}),e(40,`
          `),x(41,v,7,0,"ng-template",null,0,b),e(43,`
        `),i(),e(44,`
      `),i(),e(45,`
    `),i(),e(46,`

    `),t(47,"div",9),e(48,`
      `),t(49,"div",12),e(50,"Recycle Bin"),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i(),e(54,`
`)),a&2&&(u(39),f("columns",n.columns)("options",n.gridOptions)("dataset",n.dataset))},dependencies:[_],styles:[`.drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:700;height:35px;padding-left:8px;width:100%}.recycle-bin{background:transparent;cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:700;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}
`],encapsulation:2})}}return d})();export{C as Example41Component};

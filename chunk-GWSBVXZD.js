import{C as v,Da as k,qa as E,ya as u,za as S}from"./chunk-V3K67AAF.js";import{Jb as e,Oa as f,Ta as x,ac as w,hb as b,ib as a,jb as o,kb as g,ub as p,za as h}from"./chunk-CCOLL5XZ.js";import"./chunk-PRARYYF3.js";function y(c,C){c&1&&(e(0,`
            `),a(1,"div",13),e(2,`
              `),a(3,"label"),e(4,"Santa's TODO list:"),o(),e(5,`
            `),o(),e(6,`
          `))}var G=(()=>{class c{constructor(){this.dataset=[],this.dragRows=[],this.dragMode="",this.hideSubTitle=!1}ngOnInit(){this.defineGrids(),this.dataset=this.mockData()}angularGridReady(r){this.angularGrid=r}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}defineGrids(){this.columns=[{id:"name",name:"Name",field:"name",width:300,cssClass:"cell-title",editor:{model:u.text},validator:this.requiredFieldValidator},{id:"complete",name:"Complete",width:60,cssClass:"cell-effort-driven",field:"complete",cannotTriggerInsert:!0,formatter:S.checkmarkMaterial,editor:{model:u.Checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:!0,enableSelection:!0,enableRowMoveManager:!0,selectionOptions:{selectActiveRow:!1,selectionType:"row"},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:!0,disableRowSelection:!0,hideRowMoveShadow:!1,onBeforeMoveRows:this.onBeforeMoveRows.bind(this),onMoveRows:this.onMoveRows.bind(this)}}}mockData(){return[{id:0,name:"Make a list",complete:!0},{id:1,name:"Check it twice",complete:!1},{id:2,name:"Find out who's naughty",complete:!1},{id:3,name:"Find out who's nice",complete:!1}]}onBeforeMoveRows(r,i){for(let t of i.rows)if(t===i.insertBefore||t===i.insertBefore-1)return r.stopPropagation(),!1;return!0}onMoveRows(r,i){let t=[],n=i.rows,l=i.insertBefore,d=this.dataset.slice(0,l),m=this.dataset.slice(l,this.dataset.length);n.sort((s,D)=>s-D);for(let s of n)t.push(this.dataset[s]);n.reverse();for(let s of n)s<l?d.splice(s,1):m.splice(s-l,1);this.dataset=d.concat(t.concat(m));let _=[];for(let s=0;s<n.length;s++)_.push(d.length+s);this.angularGrid.slickGrid?.resetActiveCell(),this.dataset=[...this.dataset]}handleOnDragInit(r){r.stopImmediatePropagation()}handleOnDragStart(r){let i=this.angularGrid.slickGrid?.getCellFromEvent(r);if(!i||i.cell===0){this.dragMode="";return}let t=i.row;if(!this.dataset[t]||E.isActive())return;r.stopImmediatePropagation(),this.dragMode="recycle";let n=this.angularGrid.slickGrid?.getSelectedRows()||[];(!n.length||n.findIndex(m=>m===m)===-1)&&(n=[t],this.angularGrid.slickGrid?.setSelectedRows(n)),this.dragRows=n;let l=n.length,d=document.createElement("span");return d.className="drag-message",d.textContent=`Drag to Recycle Bin to delete ${l} selected row(s)`,this.dragHelper=d,document.body.appendChild(d),document.querySelector("#dropzone")?.classList.add("drag-dropzone"),d}handleOnDrag(r,i){if(this.dragMode!=="recycle")return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${r.pageY+5}px`,this.dragHelper.style.left=`${r.pageX+5}px`);let t=document.querySelector("#dropzone");i.target instanceof HTMLElement&&(i.target.id==="dropzone"||i.target===t)?t.classList.add("drag-hover"):t.classList.remove("drag-hover")}handleOnDragEnd(r,i){if(this.dragMode!=="recycle"||(this.dragHelper?.remove(),document.querySelector("#dropzone")?.classList.remove("drag-dropzone","drag-hover"),this.dragMode!=="recycle"||i.target.id!=="dropzone"))return;let t=this.dragRows.sort().reverse();for(let n of t)this.dataset.splice(n,1);this.angularGrid.slickGrid?.invalidate(),this.angularGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset]}requiredFieldValidator(r){return v(r)?{valid:!1,msg:"This is a required field"}:{valid:!0,msg:null}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[r]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=f({type:c,selectors:[["ng-component"]],decls:55,vars:3,consts:[["slickgridHeader",""],[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example41.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","italic"],[1,"row"],[1,"col"],[1,"grid41"],["gridId","grid41",3,"onAngularGridCreated","onDragInit","onDragStart","onDrag","onDragEnd","columns","options","dataset"],["id","dropzone",1,"recycle-bin","mt-4"],[1,"grid-header"]],template:function(i,t){i&1&&(a(0,"div",1),e(1,`
  `),a(2,"h2"),e(3,`
    Example 41: Drag & Drop
    `),a(4,"span",2),e(5,`
      `),a(6,"a",3),e(7,`
        `),g(8,"span",4),e(9,` code
      `),o(),e(10,`
    `),o(),e(11,`
    `),a(12,"button",5),p("click",function(){return t.toggleSubTitle()}),e(13,`
      `),g(14,"span",6),e(15,`
    `),o(),e(16,`
  `),o(),e(17,`

  `),a(18,"h6",7),e(19,`
    `),a(20,"ul"),e(21,`
      `),a(22,"li"),e(23,"Click to select, Ctrl-click to toggle selection(s)."),o(),e(24,`
      `),a(25,"li"),e(26,"Drag one or more rows by the handle icon to reorder."),o(),e(27,`
      `),a(28,"li"),e(29,"Drag one or more rows by selection and drag to the recycle bin to delete."),o(),e(30,`
    `),o(),e(31,`
  `),o(),e(32,`

  `),a(33,"div",8),e(34,`
    `),a(35,"div",9),e(36,`
      `),a(37,"div",10),e(38,`
        `),a(39,"angular-slickgrid",11),p("onAngularGridCreated",function(l){return t.angularGridReady(l.detail)})("onDragInit",function(l){return t.handleOnDragInit(l.detail.eventData)})("onDragStart",function(l){return t.handleOnDragStart(l.detail.eventData)})("onDrag",function(l){return t.handleOnDrag(l.detail.eventData,l.detail.args)})("onDragEnd",function(l){return t.handleOnDragEnd(l.detail.eventData,l.detail.args)}),e(40,`
          `),x(41,y,7,0,"ng-template",null,0,w),e(43,`
        `),o(),e(44,`
      `),o(),e(45,`
    `),o(),e(46,`

    `),a(47,"div",9),e(48,`
      `),a(49,"div",12),e(50,"Recycle Bin"),o(),e(51,`
    `),o(),e(52,`
  `),o(),e(53,`
`),o(),e(54,`
`)),i&2&&(h(39),b("columns",t.columns)("options",t.gridOptions)("dataset",t.dataset))},dependencies:[k],styles:[`.drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:700;height:35px;padding-left:8px;width:100%}.recycle-bin{background:transparent;cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:700;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}
`],encapsulation:2})}}return c})();export{G as Example41Component};

import{C as k,Da as y,qa as _,ya as f,za as D}from"./chunk-IBXCHNN7.js";import{$ as g,Aa as x,Kb as e,Pa as w,Ua as b,_ as c,bc as S,ib as v,jb as o,kb as l,lb as u,sb as E,vb as h}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";function R(m,G){m&1&&(e(0,`
            `),o(1,"div",13),e(2,`
              `),o(3,"label"),e(4,"Santa's TODO list:"),l(),e(5,`
            `),l(),e(6,`
          `))}var V=(()=>{class m{constructor(){this.dataset=[],this.dragRows=[],this.dragMode="",this.hideSubTitle=!1}ngOnInit(){this.defineGrids(),this.dataset=this.mockData()}angularGridReady(a){this.angularGrid=a}isBrowserDarkModeEnabled(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}defineGrids(){this.columnDefinitions=[{id:"name",name:"Name",field:"name",width:300,cssClass:"cell-title",editor:{model:f.text},validator:this.requiredFieldValidator},{id:"complete",name:"Complete",width:60,cssClass:"cell-effort-driven",field:"complete",cannotTriggerInsert:!0,formatter:D.checkmarkMaterial,editor:{model:f.Checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:!0,enableSelection:!0,enableRowMoveManager:!0,selectionOptions:{selectActiveRow:!1,selectionType:"row"},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:!0,disableRowSelection:!0,hideRowMoveShadow:!1,onBeforeMoveRows:this.onBeforeMoveRows.bind(this),onMoveRows:this.onMoveRows.bind(this)}}}mockData(){return[{id:0,name:"Make a list",complete:!0},{id:1,name:"Check it twice",complete:!1},{id:2,name:"Find out who's naughty",complete:!1},{id:3,name:"Find out who's nice",complete:!1}]}onBeforeMoveRows(a,i){for(let t of i.rows)if(t===i.insertBefore||t===i.insertBefore-1)return a.stopPropagation(),!1;return!0}onMoveRows(a,i){let t=[],n=i.rows,s=i.insertBefore,r=this.dataset.slice(0,s),p=this.dataset.slice(s,this.dataset.length);n.sort((d,M)=>d-M);for(let d of n)t.push(this.dataset[d]);n.reverse();for(let d of n)d<s?r.splice(d,1):p.splice(d-s,1);this.dataset=r.concat(t.concat(p));let C=[];for(let d=0;d<n.length;d++)C.push(r.length+d);this.angularGrid.slickGrid?.resetActiveCell(),this.dataset=[...this.dataset]}handleOnDragInit(a){a.stopImmediatePropagation()}handleOnDragStart(a){let i=this.angularGrid.slickGrid?.getCellFromEvent(a);if(!i||i.cell===0){this.dragMode="";return}let t=i.row;if(!this.dataset[t]||_.isActive())return;a.stopImmediatePropagation(),this.dragMode="recycle";let n=this.angularGrid.slickGrid?.getSelectedRows()||[];(!n.length||n.findIndex(p=>p===p)===-1)&&(n=[t],this.angularGrid.slickGrid?.setSelectedRows(n)),this.dragRows=n;let s=n.length,r=document.createElement("span");return r.className="drag-message",r.textContent=`Drag to Recycle Bin to delete ${s} selected row(s)`,this.dragHelper=r,document.body.appendChild(r),document.querySelector("#dropzone")?.classList.add("drag-dropzone"),r}handleOnDrag(a,i){if(this.dragMode!=="recycle")return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${a.pageY+5}px`,this.dragHelper.style.left=`${a.pageX+5}px`);let t=document.querySelector("#dropzone");i.target instanceof HTMLElement&&(i.target.id==="dropzone"||i.target===t)?t.classList.add("drag-hover"):t.classList.remove("drag-hover")}handleOnDragEnd(a,i){if(this.dragMode!=="recycle"||(this.dragHelper?.remove(),document.querySelector("#dropzone")?.classList.remove("drag-dropzone","drag-hover"),this.dragMode!=="recycle"||i.target.id!=="dropzone"))return;let t=this.dragRows.sort().reverse();for(let n of t)this.dataset.splice(n,1);this.angularGrid.slickGrid?.invalidate(),this.angularGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset]}requiredFieldValidator(a){return k(a)?{valid:!1,msg:"This is a required field"}:{valid:!0,msg:null}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let a=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[a]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(i){return new(i||m)}}static{this.\u0275cmp=w({type:m,selectors:[["ng-component"]],decls:55,vars:3,consts:[["slickgridHeader",""],[1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example41.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","italic"],[1,"row"],[1,"col"],[1,"grid41"],["gridId","grid41",3,"onAngularGridCreated","onDragInit","onDragStart","onDrag","onDragEnd","columns","options","dataset"],["id","dropzone",1,"recycle-bin","mt-4"],[1,"grid-header"]],template:function(i,t){if(i&1){let n=E();o(0,"div",1),e(1,`
  `),o(2,"h2"),e(3,`
    Example 41: Drag & Drop
    `),o(4,"span",2),e(5,`
      `),o(6,"a",3),e(7,`
        `),u(8,"span",4),e(9,` code
      `),l(),e(10,`
    `),l(),e(11,`
    `),o(12,"button",5),h("click",function(){return c(n),g(t.toggleSubTitle())}),e(13,`
      `),u(14,"span",6),e(15,`
    `),l(),e(16,`
  `),l(),e(17,`

  `),o(18,"h6",7),e(19,`
    `),o(20,"ul"),e(21,`
      `),o(22,"li"),e(23,"Click to select, Ctrl-click to toggle selection(s)."),l(),e(24,`
      `),o(25,"li"),e(26,"Drag one or more rows by the handle icon to reorder."),l(),e(27,`
      `),o(28,"li"),e(29,"Drag one or more rows by selection and drag to the recycle bin to delete."),l(),e(30,`
    `),l(),e(31,`
  `),l(),e(32,`

  `),o(33,"div",8),e(34,`
    `),o(35,"div",9),e(36,`
      `),o(37,"div",10),e(38,`
        `),o(39,"angular-slickgrid",11),h("onAngularGridCreated",function(r){return c(n),g(t.angularGridReady(r.detail))})("onDragInit",function(r){return c(n),g(t.handleOnDragInit(r.detail.eventData))})("onDragStart",function(r){return c(n),g(t.handleOnDragStart(r.detail.eventData))})("onDrag",function(r){return c(n),g(t.handleOnDrag(r.detail.eventData,r.detail.args))})("onDragEnd",function(r){return c(n),g(t.handleOnDragEnd(r.detail.eventData,r.detail.args))}),e(40,`
          `),b(41,R,7,0,"ng-template",null,0,S),e(43,`
        `),l(),e(44,`
      `),l(),e(45,`
    `),l(),e(46,`

    `),o(47,"div",9),e(48,`
      `),o(49,"div",12),e(50,"Recycle Bin"),l(),e(51,`
    `),l(),e(52,`
  `),l(),e(53,`
`),l(),e(54,`
`)}i&2&&(x(39),v("columns",t.columnDefinitions)("options",t.gridOptions)("dataset",t.dataset))},dependencies:[y],styles:[`.drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:700;height:35px;padding-left:8px;width:100%}.recycle-bin{background:transparent;cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:700;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}
`],encapsulation:2})}}return m})();export{V as Example41Component};

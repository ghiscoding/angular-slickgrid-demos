import{Fn as mp,Hn as oD,Wt as av,dn as gi,er as sp,g as Dp,l as BI,pn as gp,yr as xc,zt as _D}from"./chunk-B0w5H0p9.js";import{I as Ti,S as JN,gt as q1,t as $,v as HM}from"./chunk-C7G4ZLh2.js";function v(d,w){d&1&&(oD(0,`
            `),gi(1,`div`,13),oD(2,`
              `),gi(3,`label`),oD(4,`Santa's TODO list:`),xc(),oD(5,`
            `),xc(),oD(6,`
          `))}var C=(()=>{class d{constructor(){this.dataset=[],this.dragRows=[],this.dragMode=``,this.hideSubTitle=!1}ngOnInit(){this.defineGrids(),this.dataset=this.mockData()}angularGridReady(r){this.angularGrid=r}isBrowserDarkModeEnabled(){return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1}defineGrids(){this.columns=[{id:`name`,name:`Name`,field:`name`,width:300,cssClass:`cell-title`,editor:{model:HM.text},validator:this.requiredFieldValidator},{id:`complete`,name:`Complete`,width:60,cssClass:`cell-effort-driven`,field:`complete`,cannotTriggerInsert:!0,formatter:JN.checkmarkMaterial,editor:{model:HM.Checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:!0,enableSelection:!0,enableRowMoveManager:!0,selectionOptions:{selectActiveRow:!1,selectionType:`row`},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:!0,disableRowSelection:!0,hideRowMoveShadow:!1,onAfterMoveRows:(r,a)=>{this.dataset=a.updatedItems}}}}mockData(){return[{id:0,name:`Make a list`,complete:!0},{id:1,name:`Check it twice`,complete:!1},{id:2,name:`Find out who's naughty`,complete:!1},{id:3,name:`Find out who's nice`,complete:!1}]}handleOnDragInit(r){r.stopImmediatePropagation()}handleOnDragStart(r){let a=this.angularGrid.slickGrid?.getCellFromEvent(r);if(!a||a.cell===0){this.dragMode=``;return}let n=a.row;if(!this.dataset[n]||Ti.isActive())return;r.stopImmediatePropagation(),this.dragMode=`recycle`;let l=this.angularGrid.slickGrid?.getSelectedRows()||[];(!l.length||l.findIndex(p=>p===p)===-1)&&(l=[n],this.angularGrid.slickGrid?.setSelectedRows(l)),this.dragRows=l;let o=l.length,s=document.createElement(`span`);return s.className=`drag-message`,s.textContent=`Drag to Recycle Bin to delete ${o} selected row(s)`,this.dragHelper=s,document.body.appendChild(s),document.querySelector(`#dropzone`)?.classList.add(`drag-dropzone`),s}handleOnDrag(r,a){if(this.dragMode!==`recycle`)return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${r.pageY+5}px`,this.dragHelper.style.left=`${r.pageX+5}px`);let n=document.querySelector(`#dropzone`);a.target instanceof HTMLElement&&(a.target.id===`dropzone`||a.target===n)?n.classList.add(`drag-hover`):n.classList.remove(`drag-hover`)}handleOnDragEnd(r,a){if(this.dragMode!==`recycle`||(this.dragHelper?.remove(),document.querySelector(`#dropzone`)?.classList.remove(`drag-dropzone`,`drag-hover`),this.dragMode!==`recycle`||a.target.id!==`dropzone`))return;let n=this.dragRows.sort().reverse();for(let l of n)this.dataset.splice(l,1);this.angularGrid.slickGrid?.invalidate(),this.angularGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset]}requiredFieldValidator(r){return $(r)?{valid:!1,msg:`This is a required field`}:{valid:!0,msg:null}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||d)}}static{this.ɵcmp=BI({type:d,selectors:[[`ng-component`]],decls:55,vars:3,consts:[[`slickgridHeader`,``],[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example41.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`italic`],[1,`row`],[1,`col`],[1,`grid41`],[`gridId`,`grid41`,3,`onAngularGridCreated`,`onDragInit`,`onDragStart`,`onDrag`,`onDragEnd`,`columns`,`options`,`dataset`],[`id`,`dropzone`,1,`recycle-bin`,`mt-4`],[1,`grid-header`]],template:function(a,n){a&1&&(gi(0,`div`,1),oD(1,`
  `),gi(2,`h2`),oD(3,`
    Example 41: Drag & Drop
    `),gi(4,`span`,2),oD(5,`
      `),gi(6,`a`,3),oD(7,`
        `),mp(8,`span`,4),oD(9,` code
      `),xc(),oD(10,`
    `),xc(),oD(11,`
    `),gi(12,`button`,5),Dp(`click`,function(){return n.toggleSubTitle()}),oD(13,`
      `),mp(14,`span`,6),oD(15,`
    `),xc(),oD(16,`
  `),xc(),oD(17,`

  `),gi(18,`h6`,7),oD(19,`
    `),gi(20,`ul`),oD(21,`
      `),gi(22,`li`),oD(23,`Click to select, Ctrl-click to toggle selection(s).`),xc(),oD(24,`
      `),gi(25,`li`),oD(26,`Drag one or more rows by the handle icon to reorder.`),xc(),oD(27,`
      `),gi(28,`li`),oD(29,`Drag one or more rows by selection and drag to the recycle bin to delete.`),xc(),oD(30,`
    `),xc(),oD(31,`
  `),xc(),oD(32,`

  `),gi(33,`div`,8),oD(34,`
    `),gi(35,`div`,9),oD(36,`
      `),gi(37,`div`,10),oD(38,`
        `),gi(39,`angular-slickgrid`,11),Dp(`onAngularGridCreated`,function(o){return n.angularGridReady(o.detail)})(`onDragInit`,function(o){return n.handleOnDragInit(o.detail.eventData)})(`onDragStart`,function(o){return n.handleOnDragStart(o.detail.eventData)})(`onDrag`,function(o){return n.handleOnDrag(o.detail.eventData,o.detail.args)})(`onDragEnd`,function(o){return n.handleOnDragEnd(o.detail.eventData,o.detail.args)}),oD(40,`
          `),sp(41,v,7,0,`ng-template`,null,0,_D),oD(43,`
        `),xc(),oD(44,`
      `),xc(),oD(45,`
    `),xc(),oD(46,`

    `),gi(47,`div`,9),oD(48,`
      `),gi(49,`div`,12),oD(50,`Recycle Bin`),xc(),oD(51,`
    `),xc(),oD(52,`
  `),xc(),oD(53,`
`),xc(),oD(54,`
`)),a&2&&(av(39),gp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[q1],styles:[`.drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:700;height:35px;padding-left:8px;width:100%}.recycle-bin{background:transparent;cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:700;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}
`],encapsulation:2})}}return d})();export{C as Example41Component};
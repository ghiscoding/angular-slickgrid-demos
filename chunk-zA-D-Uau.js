import{Dt as UE,En as iD,J as MD,Kn as mp,Tt as Tp,Wn as mi,en as ap,hr as vp,ln as cy,o as Ac}from"./chunk-06EGdSfW.js";import{A as V,D as Ti,H as _W,N as WA,mt as nk}from"./chunk-CAMk6vEo.js";function v(d,w){d&1&&(iD(0,`
            `),mi(1,`div`,13),iD(2,`
              `),mi(3,`label`),iD(4,`Santa's TODO list:`),Ac(),iD(5,`
            `),Ac(),iD(6,`
          `))}var C=(()=>{class d{constructor(){this.dataset=[],this.dragRows=[],this.dragMode=``,this.hideSubTitle=!1}ngOnInit(){this.defineGrids(),this.dataset=this.mockData()}angularGridReady(r){this.angularGrid=r}isBrowserDarkModeEnabled(){return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1}defineGrids(){this.columns=[{id:`name`,name:`Name`,field:`name`,width:300,cssClass:`cell-title`,editor:{model:WA.text},validator:this.requiredFieldValidator},{id:`complete`,name:`Complete`,width:60,cssClass:`cell-effort-driven`,field:`complete`,cannotTriggerInsert:!0,formatter:nk.checkmarkMaterial,editor:{model:WA.Checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:!0,enableSelection:!0,enableRowMoveManager:!0,selectionOptions:{selectActiveRow:!1,selectionType:`row`},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:!0,disableRowSelection:!0,hideRowMoveShadow:!1,onAfterMoveRows:(r,a)=>{this.dataset=a.updatedItems}}}}mockData(){return[{id:0,name:`Make a list`,complete:!0},{id:1,name:`Check it twice`,complete:!1},{id:2,name:`Find out who's naughty`,complete:!1},{id:3,name:`Find out who's nice`,complete:!1}]}handleOnDragInit(r){r.stopImmediatePropagation()}handleOnDragStart(r){let a=this.angularGrid.slickGrid?.getCellFromEvent(r);if(!a||a.cell===0){this.dragMode=``;return}let n=a.row;if(!this.dataset[n]||Ti.isActive())return;r.stopImmediatePropagation(),this.dragMode=`recycle`;let l=this.angularGrid.slickGrid?.getSelectedRows()||[];(!l.length||l.findIndex(p=>p===p)===-1)&&(l=[n],this.angularGrid.slickGrid?.setSelectedRows(l)),this.dragRows=l;let o=l.length,s=document.createElement(`span`);return s.className=`drag-message`,s.textContent=`Drag to Recycle Bin to delete ${o} selected row(s)`,this.dragHelper=s,document.body.appendChild(s),document.querySelector(`#dropzone`)?.classList.add(`drag-dropzone`),s}handleOnDrag(r,a){if(this.dragMode!==`recycle`)return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${r.pageY+5}px`,this.dragHelper.style.left=`${r.pageX+5}px`);let n=document.querySelector(`#dropzone`);a.target instanceof HTMLElement&&(a.target.id===`dropzone`||a.target===n)?n.classList.add(`drag-hover`):n.classList.remove(`drag-hover`)}handleOnDragEnd(r,a){if(this.dragMode!==`recycle`||(this.dragHelper?.remove(),document.querySelector(`#dropzone`)?.classList.remove(`drag-dropzone`,`drag-hover`),this.dragMode!==`recycle`||a.target.id!==`dropzone`))return;let n=this.dragRows.sort().reverse();for(let l of n)this.dataset.splice(l,1);this.angularGrid.slickGrid?.invalidate(),this.angularGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset]}requiredFieldValidator(r){return V(r)?{valid:!1,msg:`This is a required field`}:{valid:!0,msg:null}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||d)}}static{this.ɵcmp=UE({type:d,selectors:[[`ng-component`]],decls:55,vars:3,consts:[[`slickgridHeader`,``],[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example41.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`italic`],[1,`row`],[1,`col`],[1,`grid41`],[`gridId`,`grid41`,3,`onAngularGridCreated`,`onDragInit`,`onDragStart`,`onDrag`,`onDragEnd`,`columns`,`options`,`dataset`],[`id`,`dropzone`,1,`recycle-bin`,`mt-4`],[1,`grid-header`]],template:function(a,n){a&1&&(mi(0,`div`,1),iD(1,`
  `),mi(2,`h2`),iD(3,`
    Example 41: Drag & Drop
    `),mi(4,`span`,2),iD(5,`
      `),mi(6,`a`,3),iD(7,`
        `),vp(8,`span`,4),iD(9,` code
      `),Ac(),iD(10,`
    `),Ac(),iD(11,`
    `),mi(12,`button`,5),Tp(`click`,function(){return n.toggleSubTitle()}),iD(13,`
      `),vp(14,`span`,6),iD(15,`
    `),Ac(),iD(16,`
  `),Ac(),iD(17,`

  `),mi(18,`h6`,7),iD(19,`
    `),mi(20,`ul`),iD(21,`
      `),mi(22,`li`),iD(23,`Click to select, Ctrl-click to toggle selection(s).`),Ac(),iD(24,`
      `),mi(25,`li`),iD(26,`Drag one or more rows by the handle icon to reorder.`),Ac(),iD(27,`
      `),mi(28,`li`),iD(29,`Drag one or more rows by selection and drag to the recycle bin to delete.`),Ac(),iD(30,`
    `),Ac(),iD(31,`
  `),Ac(),iD(32,`

  `),mi(33,`div`,8),iD(34,`
    `),mi(35,`div`,9),iD(36,`
      `),mi(37,`div`,10),iD(38,`
        `),mi(39,`angular-slickgrid`,11),Tp(`onAngularGridCreated`,function(o){return n.angularGridReady(o.detail)})(`onDragInit`,function(o){return n.handleOnDragInit(o.detail.eventData)})(`onDragStart`,function(o){return n.handleOnDragStart(o.detail.eventData)})(`onDrag`,function(o){return n.handleOnDrag(o.detail.eventData,o.detail.args)})(`onDragEnd`,function(o){return n.handleOnDragEnd(o.detail.eventData,o.detail.args)}),iD(40,`
          `),ap(41,v,7,0,`ng-template`,null,0,MD),iD(43,`
        `),Ac(),iD(44,`
      `),Ac(),iD(45,`
    `),Ac(),iD(46,`

    `),mi(47,`div`,9),iD(48,`
      `),mi(49,`div`,12),iD(50,`Recycle Bin`),Ac(),iD(51,`
    `),Ac(),iD(52,`
  `),Ac(),iD(53,`
`),Ac(),iD(54,`
`)),a&2&&(cy(39),mp(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W],styles:[`.drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:700;height:35px;padding-left:8px;width:100%}.recycle-bin{background:transparent;cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:700;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}
`],encapsulation:2})}}return d})();export{C as Example41Component};
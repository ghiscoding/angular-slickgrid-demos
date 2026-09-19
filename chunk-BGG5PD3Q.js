import{F as Ip,Pn as ly,b as Ep,gt as SD,pt as Rc,rn as bp,sr as up,t as $E,tr as sD,xr as yi}from"./chunk-Rd4ToC_L.js";import{F as WA,M as V,W as _W,ht as nk,k as Ti}from"./chunk-DLuyVhQJ.js";function v(d,w){d&1&&(sD(0,`
            `),yi(1,`div`,13),sD(2,`
              `),yi(3,`label`),sD(4,`Santa's TODO list:`),Rc(),sD(5,`
            `),Rc(),sD(6,`
          `))}var C=(()=>{class d{constructor(){this.dataset=[],this.dragRows=[],this.dragMode=``,this.hideSubTitle=!1}ngOnInit(){this.defineGrids(),this.dataset=this.mockData()}angularGridReady(r){this.angularGrid=r}isBrowserDarkModeEnabled(){return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1}defineGrids(){this.columns=[{id:`name`,name:`Name`,field:`name`,width:300,cssClass:`cell-title`,editor:{model:WA.text},validator:this.requiredFieldValidator},{id:`complete`,name:`Complete`,width:60,cssClass:`cell-effort-driven`,field:`complete`,cannotTriggerInsert:!0,formatter:nk.checkmarkMaterial,editor:{model:WA.Checkbox}}],this.gridOptions={enableAutoResize:!1,gridHeight:225,gridWidth:800,rowHeight:33,enableCellNavigation:!0,enableSelection:!0,enableRowMoveManager:!0,selectionOptions:{selectActiveRow:!1,selectionType:`row`},rowMoveManager:{columnIndexPosition:0,cancelEditOnDrag:!0,disableRowSelection:!0,hideRowMoveShadow:!1,onAfterMoveRows:(r,a)=>{this.dataset=a.updatedItems}}}}mockData(){return[{id:0,name:`Make a list`,complete:!0},{id:1,name:`Check it twice`,complete:!1},{id:2,name:`Find out who's naughty`,complete:!1},{id:3,name:`Find out who's nice`,complete:!1}]}handleOnDragInit(r){r.stopImmediatePropagation()}handleOnDragStart(r){let a=this.angularGrid.slickGrid?.getCellFromEvent(r);if(!a||a.cell===0){this.dragMode=``;return}let n=a.row;if(!this.dataset[n]||Ti.isActive())return;r.stopImmediatePropagation(),this.dragMode=`recycle`;let l=this.angularGrid.slickGrid?.getSelectedRows()||[];(!l.length||l.findIndex(p=>p===p)===-1)&&(l=[n],this.angularGrid.slickGrid?.setSelectedRows(l)),this.dragRows=l;let o=l.length,s=document.createElement(`span`);return s.className=`drag-message`,s.textContent=`Drag to Recycle Bin to delete ${o} selected row(s)`,this.dragHelper=s,document.body.appendChild(s),document.querySelector(`#dropzone`)?.classList.add(`drag-dropzone`),s}handleOnDrag(r,a){if(this.dragMode!==`recycle`)return;this.dragHelper instanceof HTMLElement&&(this.dragHelper.style.top=`${r.pageY+5}px`,this.dragHelper.style.left=`${r.pageX+5}px`);let n=document.querySelector(`#dropzone`);a.target instanceof HTMLElement&&(a.target.id===`dropzone`||a.target===n)?n.classList.add(`drag-hover`):n.classList.remove(`drag-hover`)}handleOnDragEnd(r,a){if(this.dragMode!==`recycle`||(this.dragHelper?.remove(),document.querySelector(`#dropzone`)?.classList.remove(`drag-dropzone`,`drag-hover`),this.dragMode!==`recycle`||a.target.id!==`dropzone`))return;let n=this.dragRows.sort().reverse();for(let l of n)this.dataset.splice(l,1);this.angularGrid.slickGrid?.invalidate(),this.angularGrid.slickGrid?.setSelectedRows([]),this.dataset=[...this.dataset]}requiredFieldValidator(r){return V(r)?{valid:!1,msg:`This is a required field`}:{valid:!0,msg:null}}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let r=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[r](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(a){return new(a||d)}}static{this.ɵcmp=$E({type:d,selectors:[[`ng-component`]],decls:55,vars:3,consts:[[`slickgridHeader`,``],[1,`container-fluid`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example41.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`italic`],[1,`row`],[1,`col`],[1,`grid41`],[`gridId`,`grid41`,3,`onAngularGridCreated`,`onDragInit`,`onDragStart`,`onDrag`,`onDragEnd`,`columns`,`options`,`dataset`],[`id`,`dropzone`,1,`recycle-bin`,`mt-4`],[1,`grid-header`]],template:function(a,n){a&1&&(yi(0,`div`,1),sD(1,`
  `),yi(2,`h2`),sD(3,`
    Example 41: Drag & Drop
    `),yi(4,`span`,2),sD(5,`
      `),yi(6,`a`,3),sD(7,`
        `),Ip(8,`span`,4),sD(9,` code
      `),Rc(),sD(10,`
    `),Rc(),sD(11,`
    `),yi(12,`button`,5),bp(`click`,function(){return n.toggleSubTitle()}),sD(13,`
      `),Ip(14,`span`,6),sD(15,`
    `),Rc(),sD(16,`
  `),Rc(),sD(17,`

  `),yi(18,`h6`,7),sD(19,`
    `),yi(20,`ul`),sD(21,`
      `),yi(22,`li`),sD(23,`Click to select, Ctrl-click to toggle selection(s).`),Rc(),sD(24,`
      `),yi(25,`li`),sD(26,`Drag one or more rows by the handle icon to reorder.`),Rc(),sD(27,`
      `),yi(28,`li`),sD(29,`Drag one or more rows by selection and drag to the recycle bin to delete.`),Rc(),sD(30,`
    `),Rc(),sD(31,`
  `),Rc(),sD(32,`

  `),yi(33,`div`,8),sD(34,`
    `),yi(35,`div`,9),sD(36,`
      `),yi(37,`div`,10),sD(38,`
        `),yi(39,`angular-slickgrid`,11),bp(`onAngularGridCreated`,function(o){return n.angularGridReady(o.detail)})(`onDragInit`,function(o){return n.handleOnDragInit(o.detail.eventData)})(`onDragStart`,function(o){return n.handleOnDragStart(o.detail.eventData)})(`onDrag`,function(o){return n.handleOnDrag(o.detail.eventData,o.detail.args)})(`onDragEnd`,function(o){return n.handleOnDragEnd(o.detail.eventData,o.detail.args)}),sD(40,`
          `),up(41,v,7,0,`ng-template`,null,0,SD),sD(43,`
        `),Rc(),sD(44,`
      `),Rc(),sD(45,`
    `),Rc(),sD(46,`

    `),yi(47,`div`,9),sD(48,`
      `),yi(49,`div`,12),sD(50,`Recycle Bin`),Rc(),sD(51,`
    `),Rc(),sD(52,`
  `),Rc(),sD(53,`
`),Rc(),sD(54,`
`)),a&2&&(ly(39),Ep(`columns`,n.columns)(`options`,n.gridOptions)(`dataset`,n.dataset))},dependencies:[_W],styles:[`.drag-message{position:absolute;display:inline-block;padding:4px 10px;background:#e0e0e0;border:1px solid gray;z-index:99999;border-radius:8px;box-shadow:2px 2px 6px silver}.grid-header{display:flex;align-items:center;box-sizing:border-box;font-weight:700;height:35px;padding-left:8px;width:100%}.recycle-bin{background:transparent;cursor:default;width:120px;border:2px solid #e4e4e4;background:beige;padding:4px;font-size:12pt;font-weight:700;color:#000;text-align:center;border-radius:10px}.recycle-bin.drag-dropzone{border:2px dashed pink}.recycle-bin.drag-hover{background:pink;cursor:crosshair}
`],encapsulation:2})}}return d})();export{C as Example41Component};
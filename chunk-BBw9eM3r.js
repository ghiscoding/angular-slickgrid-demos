import{In as lD,a as Ap,mn as dv,on as bp,tn as _p,xr as vi,xt as Rc,zt as WE}from"./chunk-7GbCxW7x.js";import{Ct as uu,X as _,bt as se,it as fT,jt as zA,k as Ne,l as D1,yt as sI}from"./chunk-Dk5kBPyv.js";import{t as S}from"./chunk-BN8xngTr.js";var M=4e3;var G=(()=>{class p{constructor(){this.columns=[],this.dataset=[],this.hideSubTitle=!1}angularGridReady(t){this.angularGrid=t}ngOnInit(){this.prepareGrid(),this.dataset=this.loadData(M)}prepareGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:`sort-asc`,title:`Sort Ascending`,slotRenderer:t=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-ascending menu-item-icon"></i>
                    <span class="menu-item-label">${t.title}</span>
                    <kbd class="key-hint">Alt+\u2191</kbd>
                  </div>
                `},{command:`sort-desc`,title:`Sort Descending`,slotRenderer:()=>{let t=_(`div`,{className:`menu-item`}),e=_(`i`,{className:`mdi mdi-sort-descending menu-item-icon`}),i=_(`span`,{className:`menu-item-label`,textContent:`Sort Descending`}),l=_(`kbd`,{className:`key-hint`,textContent:`Alt+↓`});return t.appendChild(e),t.appendChild(i),t.appendChild(l),t}}]}}},{id:`duration`,name:`Duration`,field:`duration`,sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:`sort-asc`,title:`Sort Ascending`,iconCssClass:`mdi mdi-sort-ascending`},{command:`sort-desc`,title:`Sort Descending`,iconCssClass:`mdi mdi-sort-descending`},{divider:!0,command:`divider-2`},{command:`column-resize-by-content`,title:`Resize by Content`,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-arrow-expand-horizontal menu-item-icon"></i>
                    <span class="menu-item-label">Resize by Content</span>
                    <span class="key-hint danger">NEW</span>
                  </div>
                `},{divider:!0,command:`divider-1`},{command:`clear-filter`,iconCssClass:`mdi mdi-filter-remove-outline`,title:`Remove Filter`},{command:`clear-sort`,title:`Remove Sort`,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-variant-off menu-item-icon"></i>
                    <span class="menu-item-label">Remove Sort</span>
                    <span class="round-tag"></span>
                  </div>
                `},{command:`hide-column`,iconCssClass:`mdi mdi-close`,title:`Hide Column`},`divider`,{command:`footer-buttons`,title:`Footer Buttons`,cssClass:`slot-menu-container`,slotRenderer:()=>{let t=_(`div`,{className:`footer-buttons-container`}),e=_(`button`,{className:`footer-btn who-btn btn btn-outline-secondary btn-sm`,textContent:`Who am I?`}),i=_(`button`,{className:`footer-btn update-btn btn btn-outline-secondary btn-sm`,textContent:`Request Update`});return t.appendChild(e),t.appendChild(i),t},action:(t,e)=>{t.target.classList.contains(`who-btn`)?alert(`I am the "${e.column.name}" column`):t.target.classList.contains(`update-btn`)&&alert(`is it done yet?`),t.preventDefault()}}]}}},{id:`start`,name:`Start`,field:`start`,sortable:!0,formatter:sI.dateIso,filterable:!0,filter:{model:uu.compoundDate},minWidth:100},{id:`finish`,name:`Finish`,field:`finish`,sortable:!0,formatter:sI.dateIso,filterable:!0,filter:{model:uu.dateRange},minWidth:100},{id:`cost`,name:`Cost`,field:`cost`,width:90,sortable:!0,filterable:!0,formatter:sI.dollar,header:{menu:{commandListBuilder:t=>{let e=[`custom-action`,`custom-actions-divider`,`filter-column`];return[...t.filter(i=>i!==`divider`&&e.includes(i.command)),...t.filter(i=>i===`divider`||!e.includes(i.command))]},commandItems:[{command:`custom-action`,title:`Advanced Export`,slotRenderer:t=>{let e=_(`div`,{className:`menu-item`}),i=_(`div`,{className:`advanced-export-icon`,textContent:`📊`}),l=_(`span`,{textContent:t.title||``,style:{flex:`1`}}),r=_(`kbd`,{className:`key-hint`,textContent:`Ctrl+E`});return e.appendChild(i),e.appendChild(l),e.appendChild(r),e.addEventListener(`mouseover`,()=>{i.style.transform=`scale(1.15)`,i.style.background=`linear-gradient(135deg, #d8dcef 0%, #ffffff 100%)`,e.parentElement.style.backgroundColor=`#854685`,e.parentElement.title=`\u{1F4C8} Export timestamp: ${Ne(new Date,`YYYY-MM-DD hh:mm:ss a`)}`,e.style.color=`white`,e.querySelector(`.key-hint`).style.color=`black`}),e.addEventListener(`mouseout`,()=>{i.style.transform=`scale(1)`,i.style.background=`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,e.parentElement.style.backgroundColor=`white`,e.style.color=`black`,document.querySelector(`.export-timestamp`)?.remove()}),e},action:()=>{alert(`Custom export action triggered!`)}},{divider:!0,command:`custom-actions-divider`},{command:`filter-column`,title:`Filter Column`,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-filter menu-item-icon"></i>
                    <span class="menu-item-label">Filter Column</span>
                    <span class="key-hint beta">BETA</span>
                  </div>
                `}]}}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,sortable:!0,filterable:!0,type:`number`,filter:{model:uu.slider,operator:`>=`},header:{menu:{commandItems:[{command:`recalc`,title:`Recalculate`,iconCssClass:`mdi mdi-refresh`,slotRenderer:()=>`
                  <div class="menu-item">
                    <div class="recalc-icon">%</div>
                    <span class="menu-item-label">Recalculate</span>
                  </div>
                `}]}}},{id:`action`,name:`Action`,field:`action`,width:70,minWidth:70,maxWidth:70,cssClass:`justify-center flex`,formatter:()=>`<div class="button-style action-btn"><span class="mdi mdi-chevron-down font-22px color-primary"></span></div>`,excludeFromExport:!0,cellMenu:{hideCloseButton:!1,commandTitle:`Cell Actions`,defaultMenuItemRenderer:t=>`
              <div class="menu-item">
                ${t.iconCssClass?`<i class="${t.iconCssClass}" style="margin-right: 10px; font-size: 18px;"></i>`:`<span style="width: 18px; margin-right: 10px;">◦</span>`}
                <span class="menu-item-label">${t.title}</span>
              </div>
            `,commandItems:[{command:`copy-cell`,title:`Copy Cell Value`,iconCssClass:`mdi mdi-content-copy`,action:(t,e)=>{console.log(`Copy cell value:`,e.dataContext[e.column.field]),alert(`Copied: ${e.dataContext[e.column.field]}`)}},`divider`,{command:`export-row`,title:`Export Row`,iconCssClass:`mdi mdi-download`,action:(t,e)=>{console.log(`Export row:`,e.dataContext),alert(`Export row #${e.dataContext.id}`)}},{command:`export`,title:`Export`,iconCssClass:`mdi mdi-download`,commandItems:[{command:`export-excel`,title:`Export as Excel`,iconCssClass:`mdi mdi-file-excel-outline text-success`,action:(t,e)=>{alert(`Export row #${e.dataContext.id} to Excel`)}},{command:`export-csv`,title:`Export as CSV`,iconCssClass:`mdi mdi-file-document-outline`,action:(t,e)=>{alert(`Export row #${e.dataContext.id} to CSV`)}},{command:`export-pdf`,title:`Export as PDF`,iconCssClass:`mdi mdi-file-pdf-outline text-red`,action:(t,e)=>{alert(`Export row #${e.dataContext.id} to PDF`)}}]},{divider:!0,command:``},{command:`edit-row`,title:`Edit Row`,slotRenderer:(t,e)=>`
                <div class="menu-item">
                    <div class="edit-cell-icon">\u270E</div>
                    <span class="menu-item-label">Edit Row #${e.dataContext.id}</span>
                </div>
              `,action:(t,e)=>{console.log(`Edit row:`,e.dataContext),alert(`Edit row #${e.dataContext.id}`)}},{command:`delete-row`,title:`Delete Row`,iconCssClass:`mdi mdi-delete text-danger`,action:(t,e)=>{let i=e.dataContext;confirm(`Do you really want to delete row (${e.row+1}) with "${i.title}"`)&&this.angularGrid?.gridService.deleteItemById(i.id)}}]}}],this.gridOptions={autoResize:{container:`#demo-container`},enableAutoResize:!0,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableGrouping:!0,enableHeaderMenu:!0,headerMenu:{defaultMenuItemRenderer:t=>`
            <div class="menu-item">
              ${t.iconCssClass?`<i class="${t.iconCssClass} menu-item-icon"></i>`:``}
              <span class="menu-item-label">${t.title}</span>
            </div>
          `},enableCellMenu:!0,enableContextMenu:!0,contextMenu:{commandListBuilder:t=>[{command:`edit-cell`,title:`Edit Cell`,slotRenderer:e=>{let i=_(`div`,{className:`menu-item`}),l=_(`div`,{className:`edit-cell-icon`,textContent:`✎`}),r=_(`span`,{textContent:e.title||``,style:{flex:`1`}}),d=_(`kbd`,{className:`edit-cell`,textContent:`F2`});return i.appendChild(l),i.appendChild(r),i.appendChild(d),i.addEventListener(`mouseover`,()=>{l.style.transform=`rotate(15deg) scale(1.1)`,l.style.boxShadow=`0 2px 8px rgba(0,200,83,0.4)`}),i.addEventListener(`mouseout`,()=>{l.style.transform=`rotate(0deg) scale(1)`,l.style.boxShadow=`none`}),i},action:()=>alert(`Edit cell`)},...t,{divider:!0,command:``},{command:`export`,title:`Export`,iconCssClass:`mdi mdi-download`,commandItems:[{command:`export-excel`,title:`Export as Excel`,iconCssClass:`mdi mdi-file-excel-outline text-success`,action:()=>alert(`Export to Excel`)},{command:`export-csv`,title:`Export as CSV`,iconCssClass:`mdi mdi-file-document-outline`,action:()=>alert(`Export to CSV`)},{command:`export-pdf`,title:`Export as PDF`,iconCssClass:`mdi mdi-file-pdf-outline text-danger`,action:()=>alert(`Export to PDF`)}]},{divider:!0,command:``},{command:`delete-row`,title:`Delete Row`,iconCssClass:`mdi mdi-delete text-danger`,action:()=>alert(`Delete row`)},`divider`,{command:`footer-buttons`,title:`Footer Buttons`,cssClass:`slot-menu-container`,slotRenderer:(e,i)=>{let l=_(`div`,{className:`footer-buttons-container`}),r=_(`button`,{className:`footer-btn edit-btn btn btn-outline-secondary btn-sm`,textContent:`Edit`}),d=_(`button`,{className:`footer-btn delete-btn btn btn-outline-secondary btn-sm`,textContent:`Delete`});return r.addEventListener(`click`,c=>{c.stopPropagation(),alert(`Edit action for row #${i.dataContext.id}`)}),d.addEventListener(`click`,c=>{c.stopPropagation(),alert(`Delete action for row #${i.dataContext.id}`)}),l.appendChild(r),l.appendChild(d),l}}],defaultMenuItemRenderer:t=>`
            <div class="menu-item">
              ${t.iconCssClass?`<i class="${t.iconCssClass} menu-item-icon"></i>`:``}
              <span class="menu-item-label">${t.title}</span>
            </div>
          `},enableGridMenu:!0,gridMenu:{defaultMenuItemRenderer:t=>`
            <div class="menu-item">
              ${t.iconCssClass?`<i class="${t.iconCssClass} menu-item-icon"></i>`:``}
              <span class="menu-item-label">${t.title}</span>
            </div>
          `,commandListBuilder:t=>[...t,{divider:!0,command:``},{command:`export-excel`,title:`Export to Excel`,iconCssClass:`mdi mdi-file-excel-outline`,action:()=>alert(`Export to Excel`)},{command:`export-csv`,title:`Export to CSV`,iconCssClass:`mdi mdi-download`,slotRenderer:e=>`
              <div class="menu-item">
                <i class="${e.iconCssClass} menu-item-icon warn"></i>
                <span class="menu-item-label warn">${e.title}</span>
                <span class="key-hint warn">CUSTOM</span>
              </div>
            `,action:()=>alert(`Export to CSV`)},{command:`refresh-data`,title:`Refresh Data`,iconCssClass:`mdi mdi-refresh`,slotRenderer:e=>{let i=_(`div`,{className:`menu-item`}),l=_(`i`,{className:`${e.iconCssClass} menu-item-icon`}),r=_(`span`,{className:`menu-item-label`,textContent:e.title||``}),d=_(`kbd`,{className:`key-hint`,textContent:`F5`});return i.appendChild(l),i.appendChild(r),i.appendChild(d),i},action:()=>alert(`Refresh data`)}]},externalResources:[new S],customTooltip:{observeAllTooltips:!0}}}clearGrouping(){this.angularGrid?.dataView?.setGrouping([])}collapseAllGroups(){this.angularGrid?.dataView?.collapseAllGroups()}expandAllGroups(){this.angularGrid?.dataView?.expandAllGroups()}groupByDuration(){this.angularGrid?.slickGrid?.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.dataView?.setGrouping({getter:`duration`,formatter:t=>`Duration: ${t.value} <span class="text-green">(${t.count} items)</span>`,comparer:(t,e)=>zA.numeric(t.value,e.value,se.asc),aggregators:[new fT.Avg(`percentComplete`),new fT.Sum(`cost`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid?.invalidate()}loadData(t){let e=[];for(let i=0;i<t;i++){let l=Math.round(Math.random()*100),r=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),w=Math.round(Math.random()*100);e[i]={id:i,title:`Task `+i,duration:l,cost:Math.round(Math.random()*1e4)/100,percentComplete:w,start:new Date(r,d,c),finish:new Date(r,d+1,c)}}return e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[t](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(e){return new(e||p)}}static{this.ɵcmp=WE({type:p,selectors:[[`ng-component`]],decls:90,vars:3,consts:[[1,`grid51-container`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example51.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`alert`,`alert-light`],[1,`mb-2`],[1,`mdi`,`mdi-information-outline`],[1,`mt-2`],[1,`row`,`mb-2`],[1,`mb-1`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid51`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(e,i){e&1&&(vi(0,`div`,0),lD(1,`
  `),vi(2,`h2`),lD(3,`
    Example 51: Menus with Slots
    `),vi(4,`span`,1),lD(5,`
      `),vi(6,`a`,2),lD(7,`
        `),_p(8,`span`,3),lD(9,` code
      `),Rc(),lD(10,`
    `),Rc(),lD(11,`
    `),vi(12,`button`,4),Ap(`click`,function(){return i.toggleSubTitle()}),lD(13,`
      `),_p(14,`span`,5),lD(15,`
    `),Rc(),lD(16,`
  `),Rc(),lD(17,`

  `),vi(18,`div`,6),lD(19,`
    `),vi(20,`h5`,7),lD(21,`
      `),_p(22,`span`,8),lD(23,`
      `),vi(24,`strong`),lD(25,`Menu Slots Demo with Custom Renderer`),Rc(),lD(26,`
    `),Rc(),lD(27,`
    `),vi(28,`p`,7),lD(29,`
      Click on the menu buttons to see the new `),vi(30,`strong`),lD(31,`single slot functionality`),Rc(),lD(32,` working across all menu types (Header Menu, Cell
      Menu, Context Menu, Grid Menu):
    `),Rc(),lD(33,`
    `),vi(34,`p`,9),lD(35,`
      `),vi(36,`small`)(37,`strong`),lD(38,`Note:`),Rc(),lD(39,` The demo focuses on the custom rendering capability via `),vi(40,`code`),lD(41,`slotRenderer`),Rc(),lD(42,` and
        `),vi(43,`code`),lD(44,`defaultMenuItemRenderer`),Rc(),lD(45,`, which work across all menu plugins (SlickHeaderMenu, SlickCellMenu, SlickContextMenu,
        SlickGridMenu). Also note that the keyboard shortcuts displayed in the menus (e.g., `),vi(46,`code`),lD(47,`Alt+↑`),Rc(),lD(48,`, `),vi(49,`code`),lD(50,`F5`),Rc(),lD(51,`) are for
        demo purposes only and do not actually trigger any actions.
      `),Rc(),lD(52,`
    `),Rc(),lD(53,`
  `),Rc(),lD(54,`

  `),vi(55,`section`,10),lD(56,`
    `),vi(57,`div`,11),lD(58,`
      `),vi(59,`button`,12),Ap(`click`,function(){return i.clearGrouping()}),lD(60,`
        `),vi(61,`span`),lD(62,`Clear grouping`),Rc(),lD(63,`
      `),Rc(),lD(64,`
      `),vi(65,`button`,13),Ap(`click`,function(){return i.collapseAllGroups()}),lD(66,`
        `),_p(67,`span`,14),lD(68,`
        `),vi(69,`span`),lD(70,`Collapse all groups`),Rc(),lD(71,`
      `),Rc(),lD(72,`
      `),vi(73,`button`,15),Ap(`click`,function(){return i.expandAllGroups()}),lD(74,`
        `),_p(75,`span`,16),lD(76,`
        `),vi(77,`span`),lD(78,`Expand all groups`),Rc(),lD(79,`
      `),Rc(),lD(80,`
      `),vi(81,`button`,17),Ap(`click`,function(){return i.groupByDuration()}),lD(82,`
        Group by Duration
      `),Rc(),lD(83,`
    `),Rc(),lD(84,`
  `),Rc(),lD(85,`

  `),vi(86,`angular-slickgrid`,18),Ap(`onAngularGridCreated`,function(r){return i.angularGridReady(r.detail)}),lD(87,`
  `),Rc(),lD(88,`
`),Rc(),lD(89,`
`)),e&2&&(dv(86),bp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[D1],styles:[`.grid51-container{--%NS%slick-menu-item-height: 30px;--%NS%slick-menu-line-height: 30px;--%NS%slick-column-picker-item-height: 28px;--%NS%slick-column-picker-line-height: 28px;--%NS%slick-menu-item-border-radius: 4px;--%NS%slick-menu-item-hover-border: 1px solid #148dff;--%NS%slick-column-picker-item-hover-color: #fff;--%NS%slick-column-picker-item-border-radius: 4px;--%NS%slick-column-picker-item-hover-border: 1px solid #148dff;--%NS%slick-menu-item-hover-color: #fff;--%NS%slick-tooltip-background-color: #4c4c4c;--%NS%slick-tooltip-color: #fff;--%NS%slick-tooltip-font-size: 14px}.grid51-container .slick-cell-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),.grid51-container .slick-context-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),.grid51-container .slick-grid-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),.grid51-container .slick-header-menu .slick-menu-item:hover:not(.slick-menu-item-disabled){color:#0a34b5}.grid51-container .slick-menu-footer{padding:4px 6px;border-top:1px solid #c0c0c0}body .slick-menu-item.slot-menu-container{--%NS%slick-menu-item-height: 40px;--%NS%slick-menu-item-hover-border: 1px solid transparent;--%NS%slick-menu-item-hover-color: transparent !important}body .slick-menu-item.slot-menu-container .footer-buttons-container{display:flex;justify-content:space-between;width:100%;gap:10px}body .slick-menu-item.slot-menu-container .footer-btn{flex:1;justify-content:center}.key-hint{background:#eee;border:1px solid #ccc;border-radius:2px;padding:2px 4px;font-size:10px;margin-left:10px;white-space:nowrap;display:inline-flex;align-items:center;height:20px}.key-hint.beta,.key-hint.danger,.key-hint.warn{color:#fff;font-size:8px;font-weight:700}.key-hint.beta{background:#44f;border:1px solid #5454ff}.key-hint.danger{background:#f44;border:1px solid #fb5a5a}.key-hint.warn{background:#ff9800;border:1px solid #fba321}kbd{background-color:#eee;color:#202020}.edit-cell{border:1px solid #ccc;border-radius:2px;padding:2px 4px;font-size:10px;margin-left:10px;display:inline-flex;align-items:center;height:18px}.export-timestamp{background-color:#4c4c4c;color:#fff;padding:8px;border-radius:4px;position:absolute;z-index:999999}.advanced-export-icon,.edit-cell-icon,.recalc-icon{width:20px;height:20px;border-radius:3px;display:flex;align-items:center;justify-content:center;margin-right:4px;transition:transform .2s;color:#fff;font-size:10px}.advanced-export-icon{background:linear-gradient(135deg,#667eea,#764ba2)}.edit-cell-icon{background:linear-gradient(135deg,#00c853,#64dd17)}.recalc-icon{background:linear-gradient(135deg,#c800a3,#a31189)}.round-tag{width:6px;height:6px;border-radius:50%;display:inline-block;background:#4f4;box-shadow:0 0 4px #4f4;margin-left:10px}.menu-item{display:flex;align-items:center;flex:1;justify-content:space-between}.menu-item .menu-item-label.warn{flex:1;color:#f09000}.menu-item-icon{margin-right:4px;font-size:18px}.menu-item-icon.warn{color:#ff9800}.menu-item-label{flex:1}
`],encapsulation:2})}}return p})();export{G as Example51Component};
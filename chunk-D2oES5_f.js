import{$ as Mp,C as Ei,En as iD,b as Dp,c as BE,cn as ay,ct as Oc,jt as Tp}from"./chunk-CtIlL7jI.js";import{O as Oe,Ot as xz,bt as rp,f as E0,j as Qk,nt as g,ot as ie,xt as uP}from"./chunk-C1NeHYCu.js";import{t as S}from"./chunk-oom1Gkxp.js";var M=4e3;var G=(()=>{class p{constructor(){this.columns=[],this.dataset=[],this.hideSubTitle=!1}angularGridReady(n){this.angularGrid=n}ngOnInit(){this.prepareGrid(),this.dataset=this.loadData(M)}prepareGrid(){this.columns=[{id:`title`,name:`Title`,field:`title`,sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:`sort-asc`,title:`Sort Ascending`,positionOrder:50,slotRenderer:n=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-ascending menu-item-icon"></i>
                    <span class="menu-item-label">${n.title}</span>
                    <kbd class="key-hint">Alt+\u2191</kbd>
                  </div>
                `},{command:`sort-desc`,title:`Sort Descending`,positionOrder:51,slotRenderer:()=>{let n=g(`div`,{className:`menu-item`}),e=g(`i`,{className:`mdi mdi-sort-descending menu-item-icon`}),i=g(`span`,{className:`menu-item-label`,textContent:`Sort Descending`}),l=g(`kbd`,{className:`key-hint`,textContent:`Alt+↓`});return n.appendChild(e),n.appendChild(i),n.appendChild(l),n}}]}}},{id:`duration`,name:`Duration`,field:`duration`,sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:`column-resize-by-content`,title:`Resize by Content`,positionOrder:47,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-arrow-expand-horizontal menu-item-icon"></i>
                    <span class="menu-item-label">Resize by Content</span>
                    <span class="key-hint danger">NEW</span>
                  </div>
                `},{divider:!0,command:``,positionOrder:48},{command:`sort-asc`,title:`Sort Ascending`,iconCssClass:`mdi mdi-sort-ascending`,positionOrder:50},{command:`sort-desc`,title:`Sort Descending`,iconCssClass:`mdi mdi-sort-descending`,positionOrder:51},{divider:!0,command:``,positionOrder:52},{command:`clear-filter`,iconCssClass:`mdi mdi-filter-remove-outline`,title:`Remove Filter`},{command:`clear-sort`,title:`Remove Sort`,positionOrder:58,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-variant-off menu-item-icon"></i>
                    <span class="menu-item-label">Remove Sort</span>
                    <span class="round-tag"></span>
                  </div>
                `},{command:`hide-column`,iconCssClass:`mdi mdi-close`,title:`Hide Column`},`divider`,{command:`footer-buttons`,title:`Footer Buttons`,cssClass:`slot-menu-container`,slotRenderer:()=>{let n=g(`div`,{className:`footer-buttons-container`}),e=g(`button`,{className:`footer-btn who-btn btn btn-outline-secondary btn-sm`,textContent:`Who am I?`}),i=g(`button`,{className:`footer-btn update-btn btn btn-outline-secondary btn-sm`,textContent:`Request Update`});return n.appendChild(e),n.appendChild(i),n},action:(n,e)=>{n.target.classList.contains(`who-btn`)?alert(`I am the "${e.column.name}" column`):n.target.classList.contains(`update-btn`)&&alert(`is it done yet?`),n.preventDefault()}}]}}},{id:`start`,name:`Start`,field:`start`,sortable:!0,formatter:uP.dateIso,filterable:!0,filter:{model:rp.compoundDate},minWidth:100},{id:`finish`,name:`Finish`,field:`finish`,sortable:!0,formatter:uP.dateIso,filterable:!0,filter:{model:rp.dateRange},minWidth:100},{id:`cost`,name:`Cost`,field:`cost`,width:90,sortable:!0,filterable:!0,formatter:uP.dollar,header:{menu:{commandItems:[{command:`custom-action`,title:`Advanced Export`,slotRenderer:n=>{let e=g(`div`,{className:`menu-item`}),i=g(`div`,{className:`advanced-export-icon`,textContent:`📊`}),l=g(`span`,{textContent:n.title||``,style:{flex:`1`}}),s=g(`kbd`,{className:`key-hint`,textContent:`Ctrl+E`});return e.appendChild(i),e.appendChild(l),e.appendChild(s),e.addEventListener(`mouseover`,()=>{i.style.transform=`scale(1.15)`,i.style.background=`linear-gradient(135deg, #d8dcef 0%, #ffffff 100%)`,e.parentElement.style.backgroundColor=`#854685`,e.parentElement.title=`\u{1F4C8} Export timestamp: ${Oe(new Date,`YYYY-MM-DD hh:mm:ss a`)}`,e.style.color=`white`,e.querySelector(`.key-hint`).style.color=`black`}),e.addEventListener(`mouseout`,()=>{i.style.transform=`scale(1)`,i.style.background=`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,e.parentElement.style.backgroundColor=`white`,e.style.color=`black`,document.querySelector(`.export-timestamp`)?.remove()}),e},action:()=>{alert(`Custom export action triggered!`)}},{divider:!0,command:``},{command:`filter-column`,title:`Filter Column`,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-filter menu-item-icon"></i>
                    <span class="menu-item-label">Filter Column</span>
                    <span class="key-hint beta">BETA</span>
                  </div>
                `}]}}},{id:`percentComplete`,name:`% Complete`,field:`percentComplete`,sortable:!0,filterable:!0,type:`number`,filter:{model:rp.slider,operator:`>=`},header:{menu:{commandItems:[{command:`recalc`,title:`Recalculate`,iconCssClass:`mdi mdi-refresh`,slotRenderer:()=>`
                  <div class="menu-item">
                    <div class="recalc-icon">%</div>
                    <span class="menu-item-label">Recalculate</span>
                  </div>
                `}]}}},{id:`action`,name:`Action`,field:`action`,width:70,minWidth:70,maxWidth:70,cssClass:`justify-center flex`,formatter:()=>`<div class="button-style action-btn"><span class="mdi mdi-chevron-down font-22px color-primary"></span></div>`,excludeFromExport:!0,cellMenu:{hideCloseButton:!1,commandTitle:`Cell Actions`,defaultMenuItemRenderer:n=>`
              <div class="menu-item">
                ${n.iconCssClass?`<i class="${n.iconCssClass}" style="margin-right: 10px; font-size: 18px;"></i>`:`<span style="width: 18px; margin-right: 10px;">◦</span>`}
                <span class="menu-item-label">${n.title}</span>
              </div>
            `,commandItems:[{command:`copy-cell`,title:`Copy Cell Value`,iconCssClass:`mdi mdi-content-copy`,action:(n,e)=>{console.log(`Copy cell value:`,e.dataContext[e.column.field]),alert(`Copied: ${e.dataContext[e.column.field]}`)}},`divider`,{command:`export-row`,title:`Export Row`,iconCssClass:`mdi mdi-download`,action:(n,e)=>{console.log(`Export row:`,e.dataContext),alert(`Export row #${e.dataContext.id}`)}},{command:`export`,title:`Export`,iconCssClass:`mdi mdi-download`,commandItems:[{command:`export-excel`,title:`Export as Excel`,iconCssClass:`mdi mdi-file-excel-outline text-success`,action:(n,e)=>{alert(`Export row #${e.dataContext.id} to Excel`)}},{command:`export-csv`,title:`Export as CSV`,iconCssClass:`mdi mdi-file-document-outline`,action:(n,e)=>{alert(`Export row #${e.dataContext.id} to CSV`)}},{command:`export-pdf`,title:`Export as PDF`,iconCssClass:`mdi mdi-file-pdf-outline text-red`,action:(n,e)=>{alert(`Export row #${e.dataContext.id} to PDF`)}}]},{divider:!0,command:``},{command:`edit-row`,title:`Edit Row`,slotRenderer:(n,e)=>`
                <div class="menu-item">
                    <div class="edit-cell-icon">\u270E</div>
                    <span class="menu-item-label">Edit Row #${e.dataContext.id}</span>
                </div>
              `,action:(n,e)=>{console.log(`Edit row:`,e.dataContext),alert(`Edit row #${e.dataContext.id}`)}},{command:`delete-row`,title:`Delete Row`,iconCssClass:`mdi mdi-delete text-danger`,action:(n,e)=>{let i=e.dataContext;confirm(`Do you really want to delete row (${e.row+1}) with "${i.title}"`)&&this.angularGrid?.gridService.deleteItemById(i.id)}}]}}],this.gridOptions={autoResize:{container:`#demo-container`},enableAutoResize:!0,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableGrouping:!0,enableHeaderMenu:!0,headerMenu:{defaultMenuItemRenderer:n=>`
            <div class="menu-item">
              ${n.iconCssClass?`<i class="${n.iconCssClass} menu-item-icon"></i>`:``}
              <span class="menu-item-label">${n.title}</span>
            </div>
          `},enableCellMenu:!0,enableContextMenu:!0,contextMenu:{commandListBuilder:n=>[{command:`edit-cell`,title:`Edit Cell`,slotRenderer:e=>{let i=g(`div`,{className:`menu-item`}),l=g(`div`,{className:`edit-cell-icon`,textContent:`✎`}),s=g(`span`,{textContent:e.title||``,style:{flex:`1`}}),d=g(`kbd`,{className:`edit-cell`,textContent:`F2`});return i.appendChild(l),i.appendChild(s),i.appendChild(d),i.addEventListener(`mouseover`,()=>{l.style.transform=`rotate(15deg) scale(1.1)`,l.style.boxShadow=`0 2px 8px rgba(0,200,83,0.4)`}),i.addEventListener(`mouseout`,()=>{l.style.transform=`rotate(0deg) scale(1)`,l.style.boxShadow=`none`}),i},action:()=>alert(`Edit cell`)},...n,{divider:!0,command:``},{command:`export`,title:`Export`,iconCssClass:`mdi mdi-download`,commandItems:[{command:`export-excel`,title:`Export as Excel`,iconCssClass:`mdi mdi-file-excel-outline text-success`,action:()=>alert(`Export to Excel`)},{command:`export-csv`,title:`Export as CSV`,iconCssClass:`mdi mdi-file-document-outline`,action:()=>alert(`Export to CSV`)},{command:`export-pdf`,title:`Export as PDF`,iconCssClass:`mdi mdi-file-pdf-outline text-danger`,action:()=>alert(`Export to PDF`)}]},{divider:!0,command:``},{command:`delete-row`,title:`Delete Row`,iconCssClass:`mdi mdi-delete text-danger`,action:()=>alert(`Delete row`)},`divider`,{command:`footer-buttons`,title:`Footer Buttons`,cssClass:`slot-menu-container`,slotRenderer:(e,i)=>{let l=g(`div`,{className:`footer-buttons-container`}),s=g(`button`,{className:`footer-btn edit-btn btn btn-outline-secondary btn-sm`,textContent:`Edit`}),d=g(`button`,{className:`footer-btn delete-btn btn btn-outline-secondary btn-sm`,textContent:`Delete`});return s.addEventListener(`click`,c=>{c.stopPropagation(),alert(`Edit action for row #${i.dataContext.id}`)}),d.addEventListener(`click`,c=>{c.stopPropagation(),alert(`Delete action for row #${i.dataContext.id}`)}),l.appendChild(s),l.appendChild(d),l}}],defaultMenuItemRenderer:n=>`
            <div class="menu-item">
              ${n.iconCssClass?`<i class="${n.iconCssClass} menu-item-icon"></i>`:``}
              <span class="menu-item-label">${n.title}</span>
            </div>
          `},enableGridMenu:!0,gridMenu:{defaultMenuItemRenderer:n=>`
            <div class="menu-item">
              ${n.iconCssClass?`<i class="${n.iconCssClass} menu-item-icon"></i>`:``}
              <span class="menu-item-label">${n.title}</span>
            </div>
          `,commandListBuilder:n=>[...n,{divider:!0,command:``},{command:`export-excel`,title:`Export to Excel`,iconCssClass:`mdi mdi-file-excel-outline`,action:()=>alert(`Export to Excel`)},{command:`export-csv`,title:`Export to CSV`,iconCssClass:`mdi mdi-download`,slotRenderer:e=>`
              <div class="menu-item">
                <i class="${e.iconCssClass} menu-item-icon warn"></i>
                <span class="menu-item-label warn">${e.title}</span>
                <span class="key-hint warn">CUSTOM</span>
              </div>
            `,action:()=>alert(`Export to CSV`)},{command:`refresh-data`,title:`Refresh Data`,iconCssClass:`mdi mdi-refresh`,slotRenderer:e=>{let i=g(`div`,{className:`menu-item`}),l=g(`i`,{className:`${e.iconCssClass} menu-item-icon`}),s=g(`span`,{className:`menu-item-label`,textContent:e.title||``}),d=g(`kbd`,{className:`key-hint`,textContent:`F5`});return i.appendChild(l),i.appendChild(s),i.appendChild(d),i},action:()=>alert(`Refresh data`)}]},externalResources:[new S],customTooltip:{observeAllTooltips:!0}}}clearGrouping(){this.angularGrid?.dataView?.setGrouping([])}collapseAllGroups(){this.angularGrid?.dataView?.collapseAllGroups()}expandAllGroups(){this.angularGrid?.dataView?.expandAllGroups()}groupByDuration(){this.angularGrid?.slickGrid?.setSortColumns([{columnId:`duration`,sortAsc:!0}]),this.angularGrid?.dataView?.setGrouping({getter:`duration`,formatter:n=>`Duration: ${n.value} <span class="text-green">(${n.count} items)</span>`,comparer:(n,e)=>Qk.numeric(n.value,e.value,ie.asc),aggregators:[new E0.Avg(`percentComplete`),new E0.Sum(`cost`)],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid?.invalidate()}loadData(n){let e=[];for(let i=0;i<n;i++){let l=Math.round(Math.random()*100),s=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),w=Math.round(Math.random()*100);e[i]={id:i,title:`Task `+i,duration:l,cost:Math.round(Math.random()*1e4)/100,percentComplete:w,start:new Date(s,d,c),finish:new Date(s,d+1,c)}}return e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?`add`:`remove`;document.querySelector(`.subtitle`)?.classList[n](`hidden`),this.angularGrid.resizerService.resizeGrid(0)}static{this.ɵfac=function(e){return new(e||p)}}static{this.ɵcmp=BE({type:p,selectors:[[`ng-component`]],decls:90,vars:3,consts:[[1,`grid51-container`],[1,`float-end`],[`target`,`_blank`,`href`,`https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example51.component.ts`,2,`font-size`,`18px`],[1,`mdi`,`mdi-link-variant`],[`type`,`button`,`data-test`,`toggle-subtitle`,1,`ms-2`,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`title`,`Toggle example sub-title details`,1,`mdi`,`mdi-information-outline`],[1,`subtitle`,`alert`,`alert-light`],[1,`mb-2`],[1,`mdi`,`mdi-information-outline`],[1,`mt-2`],[1,`row`,`mb-2`],[1,`mb-1`],[`data-test`,`clear-grouping-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`data-test`,`collapse-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-collapse`],[`data-test`,`expand-all-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[1,`mdi`,`mdi-arrow-expand`],[`data-test`,`group-duration-sort-value-btn`,1,`btn`,`btn-outline-secondary`,`btn-sm`,`btn-icon`,3,`click`],[`gridId`,`grid51`,3,`onAngularGridCreated`,`columns`,`options`,`dataset`]],template:function(e,i){e&1&&(Ei(0,`div`,0),iD(1,`
  `),Ei(2,`h2`),iD(3,`
    Example 51: Menus with Slots
    `),Ei(4,`span`,1),iD(5,`
      `),Ei(6,`a`,2),iD(7,`
        `),Tp(8,`span`,3),iD(9,` code
      `),Oc(),iD(10,`
    `),Oc(),iD(11,`
    `),Ei(12,`button`,4),Mp(`click`,function(){return i.toggleSubTitle()}),iD(13,`
      `),Tp(14,`span`,5),iD(15,`
    `),Oc(),iD(16,`
  `),Oc(),iD(17,`

  `),Ei(18,`div`,6),iD(19,`
    `),Ei(20,`h5`,7),iD(21,`
      `),Tp(22,`span`,8),iD(23,`
      `),Ei(24,`strong`),iD(25,`Menu Slots Demo with Custom Renderer`),Oc(),iD(26,`
    `),Oc(),iD(27,`
    `),Ei(28,`p`,7),iD(29,`
      Click on the menu buttons to see the new `),Ei(30,`strong`),iD(31,`single slot functionality`),Oc(),iD(32,` working across all menu types (Header Menu, Cell
      Menu, Context Menu, Grid Menu):
    `),Oc(),iD(33,`
    `),Ei(34,`p`,9),iD(35,`
      `),Ei(36,`small`)(37,`strong`),iD(38,`Note:`),Oc(),iD(39,` The demo focuses on the custom rendering capability via `),Ei(40,`code`),iD(41,`slotRenderer`),Oc(),iD(42,` and
        `),Ei(43,`code`),iD(44,`defaultMenuItemRenderer`),Oc(),iD(45,`, which work across all menu plugins (SlickHeaderMenu, SlickCellMenu, SlickContextMenu,
        SlickGridMenu). Also note that the keyboard shortcuts displayed in the menus (e.g., `),Ei(46,`code`),iD(47,`Alt+↑`),Oc(),iD(48,`, `),Ei(49,`code`),iD(50,`F5`),Oc(),iD(51,`) are for
        demo purposes only and do not actually trigger any actions.
      `),Oc(),iD(52,`
    `),Oc(),iD(53,`
  `),Oc(),iD(54,`

  `),Ei(55,`section`,10),iD(56,`
    `),Ei(57,`div`,11),iD(58,`
      `),Ei(59,`button`,12),Mp(`click`,function(){return i.clearGrouping()}),iD(60,`
        `),Ei(61,`span`),iD(62,`Clear grouping`),Oc(),iD(63,`
      `),Oc(),iD(64,`
      `),Ei(65,`button`,13),Mp(`click`,function(){return i.collapseAllGroups()}),iD(66,`
        `),Tp(67,`span`,14),iD(68,`
        `),Ei(69,`span`),iD(70,`Collapse all groups`),Oc(),iD(71,`
      `),Oc(),iD(72,`
      `),Ei(73,`button`,15),Mp(`click`,function(){return i.expandAllGroups()}),iD(74,`
        `),Tp(75,`span`,16),iD(76,`
        `),Ei(77,`span`),iD(78,`Expand all groups`),Oc(),iD(79,`
      `),Oc(),iD(80,`
      `),Ei(81,`button`,17),Mp(`click`,function(){return i.groupByDuration()}),iD(82,`
        Group by Duration
      `),Oc(),iD(83,`
    `),Oc(),iD(84,`
  `),Oc(),iD(85,`

  `),Ei(86,`angular-slickgrid`,18),Mp(`onAngularGridCreated`,function(s){return i.angularGridReady(s.detail)}),iD(87,`
  `),Oc(),iD(88,`
`),Oc(),iD(89,`
`)),e&2&&(ay(86),Dp(`columns`,i.columns)(`options`,i.gridOptions)(`dataset`,i.dataset))},dependencies:[xz],styles:[`.grid51-container{--%NS%slick-menu-item-height: 30px;--%NS%slick-menu-line-height: 30px;--%NS%slick-column-picker-item-height: 28px;--%NS%slick-column-picker-line-height: 28px;--%NS%slick-menu-item-border-radius: 4px;--%NS%slick-menu-item-hover-border: 1px solid #148dff;--%NS%slick-column-picker-item-hover-color: #fff;--%NS%slick-column-picker-item-border-radius: 4px;--%NS%slick-column-picker-item-hover-border: 1px solid #148dff;--%NS%slick-menu-item-hover-color: #fff;--%NS%slick-tooltip-background-color: #4c4c4c;--%NS%slick-tooltip-color: #fff;--%NS%slick-tooltip-font-size: 14px}.grid51-container .slick-cell-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),.grid51-container .slick-context-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),.grid51-container .slick-grid-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),.grid51-container .slick-header-menu .slick-menu-item:hover:not(.slick-menu-item-disabled){color:#0a34b5}.grid51-container .slick-menu-footer{padding:4px 6px;border-top:1px solid #c0c0c0}body .slick-menu-item.slot-menu-container{--%NS%slick-menu-item-height: 40px;--%NS%slick-menu-item-hover-border: 1px solid transparent;--%NS%slick-menu-item-hover-color: transparent !important}body .slick-menu-item.slot-menu-container .footer-buttons-container{display:flex;justify-content:space-between;width:100%;gap:10px}body .slick-menu-item.slot-menu-container .footer-btn{flex:1;justify-content:center}.key-hint{background:#eee;border:1px solid #ccc;border-radius:2px;padding:2px 4px;font-size:10px;margin-left:10px;white-space:nowrap;display:inline-flex;align-items:center;height:20px}.key-hint.beta,.key-hint.danger,.key-hint.warn{color:#fff;font-size:8px;font-weight:700}.key-hint.beta{background:#44f;border:1px solid #5454ff}.key-hint.danger{background:#f44;border:1px solid #fb5a5a}.key-hint.warn{background:#ff9800;border:1px solid #fba321}kbd{background-color:#eee;color:#202020}.edit-cell{border:1px solid #ccc;border-radius:2px;padding:2px 4px;font-size:10px;margin-left:10px;display:inline-flex;align-items:center;height:18px}.export-timestamp{background-color:#4c4c4c;color:#fff;padding:8px;border-radius:4px;position:absolute;z-index:999999}.advanced-export-icon,.edit-cell-icon,.recalc-icon{width:20px;height:20px;border-radius:3px;display:flex;align-items:center;justify-content:center;margin-right:4px;transition:transform .2s;color:#fff;font-size:10px}.advanced-export-icon{background:linear-gradient(135deg,#667eea,#764ba2)}.edit-cell-icon{background:linear-gradient(135deg,#00c853,#64dd17)}.recalc-icon{background:linear-gradient(135deg,#c800a3,#a31189)}.round-tag{width:6px;height:6px;border-radius:50%;display:inline-block;background:#4f4;box-shadow:0 0 4px #4f4;margin-left:10px}.menu-item{display:flex;align-items:center;flex:1;justify-content:space-between}.menu-item .menu-item-label.warn{flex:1;color:#f09000}.menu-item-icon{margin-right:4px;font-size:18px}.menu-item-icon.warn{color:#ff9800}.menu-item-label{flex:1}
`],encapsulation:2})}}return p})();export{G as Example51Component};
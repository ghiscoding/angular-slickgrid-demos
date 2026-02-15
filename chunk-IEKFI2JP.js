import{a as w}from"./chunk-EJRQICLX.js";import{Da as y,J as r,T as k,ga as v,ja as E,wa as p,xa as b,za as x}from"./chunk-IBXCHNN7.js";import{Aa as g,Kb as e,Pa as h,ib as C,jb as a,kb as o,lb as c,vb as d}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";var M=2e3,$=(()=>{class u{constructor(){this.columnDefinitions=[],this.dataset=[],this.hideSubTitle=!1}angularGridReady(n){this.angularGrid=n}ngOnInit(){this.prepareGrid(),this.dataset=this.loadData(M)}prepareGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:"sort-asc",title:"Sort Ascending",positionOrder:50,slotRenderer:n=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-ascending menu-item-icon"></i>
                    <span class="menu-item-label">${n.title}</span>
                    <kbd class="key-hint">Alt+\u2191</kbd>
                  </div>
                `},{command:"sort-desc",title:"Sort Descending",positionOrder:51,slotRenderer:()=>{let n=r("div",{className:"menu-item"}),t=r("i",{className:"mdi mdi-sort-descending menu-item-icon"}),i=r("span",{className:"menu-item-label",textContent:"Sort Descending"}),l=r("kbd",{className:"key-hint",textContent:"Alt+\u2193"});return n.appendChild(t),n.appendChild(i),n.appendChild(l),n}}]}}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:100,header:{menu:{commandItems:[{command:"column-resize-by-content",title:"Resize by Content",positionOrder:47,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-arrow-expand-horizontal menu-item-icon"></i>
                    <span class="menu-item-label">Resize by Content</span>
                    <span class="key-hint danger">NEW</span>
                  </div>
                `},{divider:!0,command:"",positionOrder:48},{command:"sort-asc",title:"Sort Ascending",iconCssClass:"mdi mdi-sort-ascending",positionOrder:50},{command:"sort-desc",title:"Sort Descending",iconCssClass:"mdi mdi-sort-descending",positionOrder:51},{divider:!0,command:"",positionOrder:52},{command:"clear-sort",title:"Remove Sort",positionOrder:58,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-variant-off menu-item-icon"></i>
                    <span class="menu-item-label">Remove Sort</span>
                    <span class="round-tag"></span>
                  </div>
                `}]}}},{id:"start",name:"Start",field:"start",sortable:!0,formatter:x.dateIso,filterable:!0,filter:{model:p.compoundDate},minWidth:100},{id:"finish",name:"Finish",field:"finish",sortable:!0,formatter:x.dateIso,filterable:!0,filter:{model:p.dateRange},minWidth:100},{id:"cost",name:"Cost",field:"cost",width:90,sortable:!0,filterable:!0,formatter:x.dollar,header:{menu:{commandItems:[{command:"custom-action",title:"Advanced Export",slotRenderer:n=>{let t=r("div",{className:"menu-item"}),i=r("div",{className:"advanced-export-icon",textContent:"\u{1F4CA}"}),l=r("span",{textContent:n.title||"",style:{flex:"1"}}),s=r("kbd",{className:"key-hint",textContent:"Ctrl+E"});return t.appendChild(i),t.appendChild(l),t.appendChild(s),t.addEventListener("mouseover",()=>{i.style.transform="scale(1.15)",i.style.background="linear-gradient(135deg, #d8dcef 0%, #ffffff 100%)",t.parentElement.style.backgroundColor="#854685",t.parentElement.title=`\u{1F4C8} Export timestamp: ${v(new Date,"YYYY-MM-DD hh:mm:ss a")}`,t.style.color="white",t.querySelector(".key-hint").style.color="black"}),t.addEventListener("mouseout",()=>{i.style.transform="scale(1)",i.style.background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)",t.parentElement.style.backgroundColor="white",t.style.color="black",document.querySelector(".export-timestamp")?.remove()}),t},action:()=>{alert("Custom export action triggered!")}},{divider:!0,command:""},{command:"filter-column",title:"Filter Column",slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-filter menu-item-icon"></i>
                    <span class="menu-item-label">Filter Column</span>
                    <span class="key-hint beta">BETA</span>
                  </div>
                `}]}}},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:!0,filterable:!0,type:"number",filter:{model:p.slider,operator:">="},header:{menu:{commandItems:[{command:"recalc",title:"Recalculate",iconCssClass:"mdi mdi-refresh",slotRenderer:()=>`
                  <div class="menu-item">
                    <div class="recalc-icon">%</div>
                    <span class="menu-item-label">Recalculate</span>
                  </div>
                `}]}}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,cssClass:"justify-center flex",formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="mdi mdi-chevron-down text-primary"></span></div>',excludeFromExport:!0,cellMenu:{hideCloseButton:!1,commandTitle:"Cell Actions",defaultMenuItemRenderer:n=>`
              <div class="menu-item">
                ${n.iconCssClass?`<i class="${n.iconCssClass}" style="margin-right: 10px; font-size: 18px;"></i>`:'<span style="width: 18px; margin-right: 10px;">\u25E6</span>'}
                <span class="menu-item-label">${n.title}</span>
              </div>
            `,commandItems:[{command:"copy-cell",title:"Copy Cell Value",iconCssClass:"mdi mdi-content-copy",action:(n,t)=>{console.log("Copy cell value:",t.dataContext[t.column.field]),alert(`Copied: ${t.dataContext[t.column.field]}`)}},"divider",{command:"export-row",title:"Export Row",iconCssClass:"mdi mdi-download",action:(n,t)=>{console.log("Export row:",t.dataContext),alert(`Export row #${t.dataContext.id}`)}},{command:"export",title:"Export",iconCssClass:"mdi mdi-download",commandItems:[{command:"export-excel",title:"Export as Excel",iconCssClass:"mdi mdi-file-excel-outline text-success",action:(n,t)=>{alert(`Export row #${t.dataContext.id} to Excel`)}},{command:"export-csv",title:"Export as CSV",iconCssClass:"mdi mdi-file-document-outline",action:(n,t)=>{alert(`Export row #${t.dataContext.id} to CSV`)}},{command:"export-pdf",title:"Export as PDF",iconCssClass:"mdi mdi-file-pdf-outline text-red",action:(n,t)=>{alert(`Export row #${t.dataContext.id} to PDF`)}}]},{divider:!0,command:""},{command:"edit-row",title:"Edit Row",slotRenderer:(n,t)=>`
                <div class="menu-item">
                    <div class="edit-cell-icon">\u270E</div>
                    <span class="menu-item-label">Edit Row #${t.dataContext.id}</span>
                </div>
              `,action:(n,t)=>{console.log("Edit row:",t.dataContext),alert(`Edit row #${t.dataContext.id}`)}},{command:"delete-row",title:"Delete Row",iconCssClass:"mdi mdi-delete text-danger",action:(n,t)=>{let i=t.dataContext;confirm(`Do you really want to delete row (${t.row+1}) with "${i.title}"`)&&this.angularGrid?.gridService.deleteItemById(i.id)}}]}}],this.gridOptions={autoResize:{container:"#demo-container"},enableAutoResize:!0,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableGrouping:!0,enableHeaderMenu:!0,headerMenu:{defaultMenuItemRenderer:n=>`
            <div class="menu-item">
              ${n.iconCssClass?`<i class="${n.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${n.title}</span>
            </div>
          `},enableCellMenu:!0,enableContextMenu:!0,contextMenu:{commandListBuilder:n=>[{command:"edit-cell",title:"Edit Cell",slotRenderer:t=>{let i=r("div",{className:"menu-item"}),l=r("div",{className:"edit-cell-icon",textContent:"\u270E"}),s=r("span",{textContent:t.title||"",style:{flex:"1"}}),m=r("kbd",{className:"edit-cell",textContent:"F2"});return i.appendChild(l),i.appendChild(s),i.appendChild(m),i.addEventListener("mouseover",()=>{l.style.transform="rotate(15deg) scale(1.1)",l.style.boxShadow="0 2px 8px rgba(0,200,83,0.4)"}),i.addEventListener("mouseout",()=>{l.style.transform="rotate(0deg) scale(1)",l.style.boxShadow="none"}),i},action:()=>alert("Edit cell")},...n,{divider:!0,command:""},{command:"export",title:"Export",iconCssClass:"mdi mdi-download",commandItems:[{command:"export-excel",title:"Export as Excel",iconCssClass:"mdi mdi-file-excel-outline text-success",action:()=>alert("Export to Excel")},{command:"export-csv",title:"Export as CSV",iconCssClass:"mdi mdi-file-document-outline",action:()=>alert("Export to CSV")},{command:"export-pdf",title:"Export as PDF",iconCssClass:"mdi mdi-file-pdf-outline text-danger",action:()=>alert("Export to PDF")}]},{divider:!0,command:""},{command:"delete-row",title:"Delete Row",iconCssClass:"mdi mdi-delete text-danger",action:()=>alert("Delete row")}],defaultMenuItemRenderer:n=>`
            <div class="menu-item">
              ${n.iconCssClass?`<i class="${n.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${n.title}</span>
            </div>
          `},enableGridMenu:!0,gridMenu:{defaultMenuItemRenderer:n=>`
            <div class="menu-item">
              ${n.iconCssClass?`<i class="${n.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${n.title}</span>
            </div>
          `,commandListBuilder:n=>[...n,{divider:!0,command:""},{command:"export-excel",title:"Export to Excel",iconCssClass:"mdi mdi-file-excel-outline",action:()=>alert("Export to Excel")},{command:"export-csv",title:"Export to CSV",iconCssClass:"mdi mdi-download",slotRenderer:t=>`
              <div class="menu-item">
                <i class="${t.iconCssClass} menu-item-icon warn"></i>
                <span class="menu-item-label warn">${t.title}</span>
                <span class="key-hint warn">CUSTOM</span>
              </div>
            `,action:()=>alert("Export to CSV")},{command:"refresh-data",title:"Refresh Data",iconCssClass:"mdi mdi-refresh",slotRenderer:t=>{let i=r("div",{className:"menu-item"}),l=r("i",{className:`${t.iconCssClass} menu-item-icon`}),s=r("span",{className:"menu-item-label",textContent:t.title||""}),m=r("kbd",{className:"key-hint",textContent:"F5"});return i.appendChild(l),i.appendChild(s),i.appendChild(m),i},action:()=>alert("Refresh data")}]},externalResources:[new w],customTooltip:{observeAllTooltips:!0}}}clearGrouping(){this.angularGrid?.dataView?.setGrouping([])}collapseAllGroups(){this.angularGrid?.dataView?.collapseAllGroups()}expandAllGroups(){this.angularGrid?.dataView?.expandAllGroups()}groupByDuration(){this.angularGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:!0}]),this.angularGrid?.dataView?.setGrouping({getter:"duration",formatter:n=>`Duration: ${n.value} <span class="text-green">(${n.count} items)</span>`,comparer:(n,t)=>E.numeric(n.value,t.value,k.asc),aggregators:[new b.Avg("percentComplete"),new b.Sum("cost")],aggregateCollapsed:!1,lazyTotalsCalculation:!0}),this.angularGrid?.slickGrid?.invalidate()}loadData(n){let t=[];for(let i=0;i<n;i++){let l=Math.round(Math.random()*100),s=2e3+Math.floor(Math.random()*10),m=Math.floor(Math.random()*11),f=Math.floor(Math.random()*29),S=Math.round(Math.random()*100);t[i]={id:i,title:"Task "+i,duration:l,cost:Math.round(Math.random()*1e4)/100,percentComplete:S,start:new Date(s,m,f),finish:new Date(s,m+1,f)}}return t}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(t){return new(t||u)}}static{this.\u0275cmp=h({type:u,selectors:[["ng-component"]],decls:87,vars:3,consts:[[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example51.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","alert","alert-light"],[1,"mb-2"],[1,"mdi","mdi-information-outline"],[1,"mt-2"],[1,"row","mb-2"],[1,"mb-1"],["data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid51",3,"onAngularGridCreated","columns","options","dataset"]],template:function(t,i){t&1&&(a(0,"h2"),e(1,`
  Example 51: Menus with Slots
  `),a(2,"span",0),e(3,`
    `),a(4,"a",1),e(5,`
      `),c(6,"span",2),e(7,` code
    `),o(),e(8,`
  `),o(),e(9,`
  `),a(10,"button",3),d("click",function(){return i.toggleSubTitle()}),e(11,`
    `),c(12,"span",4),e(13,`
  `),o(),e(14,`
`),o(),e(15,`

`),a(16,"div",5),e(17,`
  `),a(18,"h5",6),e(19,`
    `),c(20,"span",7),e(21,`
    `),a(22,"strong"),e(23,"Menu Slots Demo with Custom Renderer"),o(),e(24,`
  `),o(),e(25,`
  `),a(26,"p",6),e(27,`
    Click on the menu buttons to see the new `),a(28,"strong"),e(29,"single slot functionality"),o(),e(30,` working across all menu types (Header Menu, Cell
    Menu, Context Menu, Grid Menu):
  `),o(),e(31,`
  `),a(32,"p",8),e(33,`
    `),a(34,"small")(35,"strong"),e(36,"Note:"),o(),e(37," The demo focuses on the custom rendering capability via "),a(38,"code"),e(39,"slotRenderer"),o(),e(40,` and
      `),a(41,"code"),e(42,"defaultMenuItemRenderer"),o(),e(43,`, which work across all menu plugins (SlickHeaderMenu, SlickCellMenu, SlickContextMenu,
      SlickGridMenu). Also note that the keyboard shortcuts displayed in the menus (e.g., `),a(44,"code"),e(45,"Alt+\u2191"),o(),e(46,", "),a(47,"code"),e(48,"F5"),o(),e(49,`) are for demo
      purposes only and do not actually trigger any actions.
    `),o(),e(50,`
  `),o(),e(51,`
`),o(),e(52,`

`),a(53,"section",9),e(54,`
  `),a(55,"div",10),e(56,`
    `),a(57,"button",11),d("click",function(){return i.clearGrouping()}),e(58,`
      `),a(59,"span"),e(60,"Clear grouping"),o(),e(61,`
    `),o(),e(62,`
    `),a(63,"button",12),d("click",function(){return i.collapseAllGroups()}),e(64,`
      `),c(65,"span",13),e(66,`
      `),a(67,"span"),e(68,"Collapse all groups"),o(),e(69,`
    `),o(),e(70,`
    `),a(71,"button",14),d("click",function(){return i.expandAllGroups()}),e(72,`
      `),c(73,"span",15),e(74,`
      `),a(75,"span"),e(76,"Expand all groups"),o(),e(77,`
    `),o(),e(78,`
    `),a(79,"button",16),d("click",function(){return i.groupByDuration()}),e(80,`
      Group by Duration
    `),o(),e(81,`
  `),o(),e(82,`
`),o(),e(83,`

`),a(84,"angular-slickgrid",17),d("onAngularGridCreated",function(s){return i.angularGridReady(s.detail)}),e(85,`
`),o(),e(86,`
`)),t&2&&(g(84),C("columns",i.columnDefinitions)("options",i.gridOptions)("dataset",i.dataset))},dependencies:[y],styles:[`body{--slick-menu-item-height: 30px;--slick-menu-line-height: 30px;--slick-column-picker-item-height: 28px;--slick-column-picker-line-height: 28px;--slick-menu-item-border-radius: 4px;--slick-menu-item-hover-border: 1px solid #148dff;--slick-column-picker-item-hover-color: #fff;--slick-column-picker-item-border-radius: 4px;--slick-column-picker-item-hover-border: 1px solid #148dff;--slick-menu-item-hover-color: #fff;--slick-tooltip-background-color: #4c4c4c;--slick-tooltip-color: #fff;--slick-tooltip-font-size: 14px}body .slick-cell-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),body .slick-context-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),body .slick-grid-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),body .slick-header-menu .slick-menu-item:hover:not(.slick-menu-item-disabled){color:#0a34b5}body .slick-menu-footer{padding:4px 6px;border-top:1px solid #c0c0c0}.key-hint{background:#eee;border:1px solid #ccc;border-radius:2px;padding:2px 4px;font-size:10px;margin-left:10px;white-space:nowrap;display:inline-flex;align-items:center;height:20px}.key-hint.beta,.key-hint.danger,.key-hint.warn{color:#fff;font-size:8px;font-weight:700}.key-hint.beta{background:#44f;border:1px solid #5454ff}.key-hint.danger{background:#f44;border:1px solid #fb5a5a}.key-hint.warn{background:#ff9800;border:1px solid #fba321}kbd{background-color:#eee;color:#202020}.edit-cell{border:1px solid #ccc;border-radius:2px;padding:2px 4px;font-size:10px;margin-left:10px;display:inline-flex;align-items:center;height:18px}.export-timestamp{background-color:#4c4c4c;color:#fff;padding:8px;border-radius:4px;position:absolute;z-index:999999}.advanced-export-icon,.edit-cell-icon,.recalc-icon{width:20px;height:20px;border-radius:3px;display:flex;align-items:center;justify-content:center;margin-right:4px;transition:transform .2s;color:#fff;font-size:10px}.advanced-export-icon{background:linear-gradient(135deg,#667eea,#764ba2)}.edit-cell-icon{background:linear-gradient(135deg,#00c853,#64dd17)}.recalc-icon{background:linear-gradient(135deg,#c800a3,#a31189)}.round-tag{width:6px;height:6px;border-radius:50%;display:inline-block;background:#4f4;box-shadow:0 0 4px #4f4;margin-left:10px}.menu-item{display:flex;align-items:center;flex:1;justify-content:space-between}.menu-item .menu-item-label.warn{flex:1;color:#f09000}.menu-item-icon{margin-right:4px;font-size:18px}.menu-item-icon.warn{color:#ff9800}.menu-item-label{flex:1}
`],encapsulation:2})}}return u})();export{$ as Example51Component};

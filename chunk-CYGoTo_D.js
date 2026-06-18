import {S}from'./chunk-CljjKoz8.js';import {h as Tu,q as qN,aD as f,y as Te,a1 as FP,i as MB,a2 as te,T as TI,U as U1,u as ui,B as BE,a as ap,d as Tc,f as fp,e as Uy,g as sp}from'./main-C6PQTYH6.js';var M=4e3,$=(()=>{class p{constructor(){this.columns=[],this.dataset=[],this.hideSubTitle=false;}angularGridReady(n){this.angularGrid=n;}ngOnInit(){this.prepareGrid(),this.dataset=this.loadData(M);}prepareGrid(){this.columns=[{id:"title",name:"Title",field:"title",sortable:true,filterable:true,minWidth:100,header:{menu:{commandItems:[{command:"sort-asc",title:"Sort Ascending",positionOrder:50,slotRenderer:n=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-ascending menu-item-icon"></i>
                    <span class="menu-item-label">${n.title}</span>
                    <kbd class="key-hint">Alt+\u2191</kbd>
                  </div>
                `},{command:"sort-desc",title:"Sort Descending",positionOrder:51,slotRenderer:()=>{let n=f("div",{className:"menu-item"}),e=f("i",{className:"mdi mdi-sort-descending menu-item-icon"}),i=f("span",{className:"menu-item-label",textContent:"Sort Descending"}),l=f("kbd",{className:"key-hint",textContent:"Alt+\u2193"});return n.appendChild(e),n.appendChild(i),n.appendChild(l),n}}]}}},{id:"duration",name:"Duration",field:"duration",sortable:true,filterable:true,minWidth:100,header:{menu:{commandItems:[{command:"column-resize-by-content",title:"Resize by Content",positionOrder:47,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-arrow-expand-horizontal menu-item-icon"></i>
                    <span class="menu-item-label">Resize by Content</span>
                    <span class="key-hint danger">NEW</span>
                  </div>
                `},{divider:true,command:"",positionOrder:48},{command:"sort-asc",title:"Sort Ascending",iconCssClass:"mdi mdi-sort-ascending",positionOrder:50},{command:"sort-desc",title:"Sort Descending",iconCssClass:"mdi mdi-sort-descending",positionOrder:51},{divider:true,command:"",positionOrder:52},{command:"clear-filter",iconCssClass:"mdi mdi-filter-remove-outline",title:"Remove Filter"},{command:"clear-sort",title:"Remove Sort",positionOrder:58,slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-sort-variant-off menu-item-icon"></i>
                    <span class="menu-item-label">Remove Sort</span>
                    <span class="round-tag"></span>
                  </div>
                `},{command:"hide-column",iconCssClass:"mdi mdi-close",title:"Hide Column"},"divider",{command:"footer-buttons",title:"Footer Buttons",cssClass:"slot-menu-container",slotRenderer:()=>{let n=f("div",{className:"footer-buttons-container"}),e=f("button",{className:"footer-btn who-btn btn btn-outline-secondary btn-sm",textContent:"Who am I?"}),i=f("button",{className:"footer-btn update-btn btn btn-outline-secondary btn-sm",textContent:"Request Update"});return n.appendChild(e),n.appendChild(i),n},action:(n,e)=>{n.target.classList.contains("who-btn")?alert(`I am the "${e.column.name}" column`):n.target.classList.contains("update-btn")&&alert("is it done yet?"),n.preventDefault();}}]}}},{id:"start",name:"Start",field:"start",sortable:true,formatter:qN.dateIso,filterable:true,filter:{model:Tu.compoundDate},minWidth:100},{id:"finish",name:"Finish",field:"finish",sortable:true,formatter:qN.dateIso,filterable:true,filter:{model:Tu.dateRange},minWidth:100},{id:"cost",name:"Cost",field:"cost",width:90,sortable:true,filterable:true,formatter:qN.dollar,header:{menu:{commandItems:[{command:"custom-action",title:"Advanced Export",slotRenderer:n=>{let e=f("div",{className:"menu-item"}),i=f("div",{className:"advanced-export-icon",textContent:"\u{1F4CA}"}),l=f("span",{textContent:n.title||"",style:{flex:"1"}}),s=f("kbd",{className:"key-hint",textContent:"Ctrl+E"});return e.appendChild(i),e.appendChild(l),e.appendChild(s),e.addEventListener("mouseover",()=>{i.style.transform="scale(1.15)",i.style.background="linear-gradient(135deg, #d8dcef 0%, #ffffff 100%)",e.parentElement.style.backgroundColor="#854685",e.parentElement.title=`\u{1F4C8} Export timestamp: ${Te(new Date,"YYYY-MM-DD hh:mm:ss a")}`,e.style.color="white",e.querySelector(".key-hint").style.color="black";}),e.addEventListener("mouseout",()=>{i.style.transform="scale(1)",i.style.background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)",e.parentElement.style.backgroundColor="white",e.style.color="black",document.querySelector(".export-timestamp")?.remove();}),e},action:()=>{alert("Custom export action triggered!");}},{divider:true,command:""},{command:"filter-column",title:"Filter Column",slotRenderer:()=>`
                  <div class="menu-item">
                    <i class="mdi mdi-filter menu-item-icon"></i>
                    <span class="menu-item-label">Filter Column</span>
                    <span class="key-hint beta">BETA</span>
                  </div>
                `}]}}},{id:"percentComplete",name:"% Complete",field:"percentComplete",sortable:true,filterable:true,type:"number",filter:{model:Tu.slider,operator:">="},header:{menu:{commandItems:[{command:"recalc",title:"Recalculate",iconCssClass:"mdi mdi-refresh",slotRenderer:()=>`
                  <div class="menu-item">
                    <div class="recalc-icon">%</div>
                    <span class="menu-item-label">Recalculate</span>
                  </div>
                `}]}}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,cssClass:"justify-center flex",formatter:()=>'<div class="button-style action-btn"><span class="mdi mdi-chevron-down font-22px color-primary"></span></div>',excludeFromExport:true,cellMenu:{hideCloseButton:false,commandTitle:"Cell Actions",defaultMenuItemRenderer:n=>`
              <div class="menu-item">
                ${n.iconCssClass?`<i class="${n.iconCssClass}" style="margin-right: 10px; font-size: 18px;"></i>`:'<span style="width: 18px; margin-right: 10px;">\u25E6</span>'}
                <span class="menu-item-label">${n.title}</span>
              </div>
            `,commandItems:[{command:"copy-cell",title:"Copy Cell Value",iconCssClass:"mdi mdi-content-copy",action:(n,e)=>{console.log("Copy cell value:",e.dataContext[e.column.field]),alert(`Copied: ${e.dataContext[e.column.field]}`);}},"divider",{command:"export-row",title:"Export Row",iconCssClass:"mdi mdi-download",action:(n,e)=>{console.log("Export row:",e.dataContext),alert(`Export row #${e.dataContext.id}`);}},{command:"export",title:"Export",iconCssClass:"mdi mdi-download",commandItems:[{command:"export-excel",title:"Export as Excel",iconCssClass:"mdi mdi-file-excel-outline text-success",action:(n,e)=>{alert(`Export row #${e.dataContext.id} to Excel`);}},{command:"export-csv",title:"Export as CSV",iconCssClass:"mdi mdi-file-document-outline",action:(n,e)=>{alert(`Export row #${e.dataContext.id} to CSV`);}},{command:"export-pdf",title:"Export as PDF",iconCssClass:"mdi mdi-file-pdf-outline text-red",action:(n,e)=>{alert(`Export row #${e.dataContext.id} to PDF`);}}]},{divider:true,command:""},{command:"edit-row",title:"Edit Row",slotRenderer:(n,e)=>`
                <div class="menu-item">
                    <div class="edit-cell-icon">\u270E</div>
                    <span class="menu-item-label">Edit Row #${e.dataContext.id}</span>
                </div>
              `,action:(n,e)=>{console.log("Edit row:",e.dataContext),alert(`Edit row #${e.dataContext.id}`);}},{command:"delete-row",title:"Delete Row",iconCssClass:"mdi mdi-delete text-danger",action:(n,e)=>{let i=e.dataContext;confirm(`Do you really want to delete row (${e.row+1}) with "${i.title}"`)&&this.angularGrid?.gridService.deleteItemById(i.id);}}]}}],this.gridOptions={autoResize:{container:"#demo-container"},enableAutoResize:true,enableCellNavigation:true,enableFiltering:true,enableSorting:true,enableGrouping:true,enableHeaderMenu:true,headerMenu:{defaultMenuItemRenderer:n=>`
            <div class="menu-item">
              ${n.iconCssClass?`<i class="${n.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${n.title}</span>
            </div>
          `},enableCellMenu:true,enableContextMenu:true,contextMenu:{commandListBuilder:n=>[{command:"edit-cell",title:"Edit Cell",slotRenderer:e=>{let i=f("div",{className:"menu-item"}),l=f("div",{className:"edit-cell-icon",textContent:"\u270E"}),s=f("span",{textContent:e.title||"",style:{flex:"1"}}),d=f("kbd",{className:"edit-cell",textContent:"F2"});return i.appendChild(l),i.appendChild(s),i.appendChild(d),i.addEventListener("mouseover",()=>{l.style.transform="rotate(15deg) scale(1.1)",l.style.boxShadow="0 2px 8px rgba(0,200,83,0.4)";}),i.addEventListener("mouseout",()=>{l.style.transform="rotate(0deg) scale(1)",l.style.boxShadow="none";}),i},action:()=>alert("Edit cell")},...n,{divider:true,command:""},{command:"export",title:"Export",iconCssClass:"mdi mdi-download",commandItems:[{command:"export-excel",title:"Export as Excel",iconCssClass:"mdi mdi-file-excel-outline text-success",action:()=>alert("Export to Excel")},{command:"export-csv",title:"Export as CSV",iconCssClass:"mdi mdi-file-document-outline",action:()=>alert("Export to CSV")},{command:"export-pdf",title:"Export as PDF",iconCssClass:"mdi mdi-file-pdf-outline text-danger",action:()=>alert("Export to PDF")}]},{divider:true,command:""},{command:"delete-row",title:"Delete Row",iconCssClass:"mdi mdi-delete text-danger",action:()=>alert("Delete row")},"divider",{command:"footer-buttons",title:"Footer Buttons",cssClass:"slot-menu-container",slotRenderer:(e,i)=>{let l=f("div",{className:"footer-buttons-container"}),s=f("button",{className:"footer-btn edit-btn btn btn-outline-secondary btn-sm",textContent:"Edit"}),d=f("button",{className:"footer-btn delete-btn btn btn-outline-secondary btn-sm",textContent:"Delete"});return s.addEventListener("click",c=>{c.stopPropagation(),alert(`Edit action for row #${i.dataContext.id}`);}),d.addEventListener("click",c=>{c.stopPropagation(),alert(`Delete action for row #${i.dataContext.id}`);}),l.appendChild(s),l.appendChild(d),l}}],defaultMenuItemRenderer:n=>`
            <div class="menu-item">
              ${n.iconCssClass?`<i class="${n.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${n.title}</span>
            </div>
          `},enableGridMenu:true,gridMenu:{defaultMenuItemRenderer:n=>`
            <div class="menu-item">
              ${n.iconCssClass?`<i class="${n.iconCssClass} menu-item-icon"></i>`:""}
              <span class="menu-item-label">${n.title}</span>
            </div>
          `,commandListBuilder:n=>[...n,{divider:true,command:""},{command:"export-excel",title:"Export to Excel",iconCssClass:"mdi mdi-file-excel-outline",action:()=>alert("Export to Excel")},{command:"export-csv",title:"Export to CSV",iconCssClass:"mdi mdi-download",slotRenderer:e=>`
              <div class="menu-item">
                <i class="${e.iconCssClass} menu-item-icon warn"></i>
                <span class="menu-item-label warn">${e.title}</span>
                <span class="key-hint warn">CUSTOM</span>
              </div>
            `,action:()=>alert("Export to CSV")},{command:"refresh-data",title:"Refresh Data",iconCssClass:"mdi mdi-refresh",slotRenderer:e=>{let i=f("div",{className:"menu-item"}),l=f("i",{className:`${e.iconCssClass} menu-item-icon`}),s=f("span",{className:"menu-item-label",textContent:e.title||""}),d=f("kbd",{className:"key-hint",textContent:"F5"});return i.appendChild(l),i.appendChild(s),i.appendChild(d),i},action:()=>alert("Refresh data")}]},externalResources:[new S],customTooltip:{observeAllTooltips:true}};}clearGrouping(){this.angularGrid?.dataView?.setGrouping([]);}collapseAllGroups(){this.angularGrid?.dataView?.collapseAllGroups();}expandAllGroups(){this.angularGrid?.dataView?.expandAllGroups();}groupByDuration(){this.angularGrid?.slickGrid?.setSortColumns([{columnId:"duration",sortAsc:true}]),this.angularGrid?.dataView?.setGrouping({getter:"duration",formatter:n=>`Duration: ${n.value} <span class="text-green">(${n.count} items)</span>`,comparer:(n,e)=>MB.numeric(n.value,e.value,te.asc),aggregators:[new FP.Avg("percentComplete"),new FP.Sum("cost")],aggregateCollapsed:false,lazyTotalsCalculation:true}),this.angularGrid?.slickGrid?.invalidate();}loadData(n){let e=[];for(let i=0;i<n;i++){let l=Math.round(Math.random()*100),s=2e3+Math.floor(Math.random()*10),d=Math.floor(Math.random()*11),c=Math.floor(Math.random()*29),S=Math.round(Math.random()*100);e[i]={id:i,title:"Task "+i,duration:l,cost:Math.round(Math.random()*1e4)/100,percentComplete:S,start:new Date(s,d,c),finish:new Date(s,d+1,c)};}return e}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let n=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[n]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(e){return new(e||p)};}static{this.\u0275cmp=TI({type:p,selectors:[["ng-component"]],decls:90,vars:3,consts:[[1,"grid51-container"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example51.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle","alert","alert-light"],[1,"mb-2"],[1,"mdi","mdi-information-outline"],[1,"mt-2"],[1,"row","mb-2"],[1,"mb-1"],["data-test","clear-grouping-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["data-test","collapse-all-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-collapse"],["data-test","expand-all-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-arrow-expand"],["data-test","group-duration-sort-value-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["gridId","grid51",3,"onAngularGridCreated","columns","options","dataset"]],template:function(e,i){e&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 51: Menus with Slots
    `),ui(4,"span",1),BE(5,`
      `),ui(6,"a",2),BE(7,`
        `),ap(8,"span",3),BE(9,` code
      `),Tc(),BE(10,`
    `),Tc(),BE(11,`
    `),ui(12,"button",4),fp("click",function(){return i.toggleSubTitle()}),BE(13,`
      `),ap(14,"span",5),BE(15,`
    `),Tc(),BE(16,`
  `),Tc(),BE(17,`

  `),ui(18,"div",6),BE(19,`
    `),ui(20,"h5",7),BE(21,`
      `),ap(22,"span",8),BE(23,`
      `),ui(24,"strong"),BE(25,"Menu Slots Demo with Custom Renderer"),Tc(),BE(26,`
    `),Tc(),BE(27,`
    `),ui(28,"p",7),BE(29,`
      Click on the menu buttons to see the new `),ui(30,"strong"),BE(31,"single slot functionality"),Tc(),BE(32,` working across all menu types (Header Menu, Cell
      Menu, Context Menu, Grid Menu):
    `),Tc(),BE(33,`
    `),ui(34,"p",9),BE(35,`
      `),ui(36,"small")(37,"strong"),BE(38,"Note:"),Tc(),BE(39," The demo focuses on the custom rendering capability via "),ui(40,"code"),BE(41,"slotRenderer"),Tc(),BE(42,` and
        `),ui(43,"code"),BE(44,"defaultMenuItemRenderer"),Tc(),BE(45,`, which work across all menu plugins (SlickHeaderMenu, SlickCellMenu, SlickContextMenu,
        SlickGridMenu). Also note that the keyboard shortcuts displayed in the menus (e.g., `),ui(46,"code"),BE(47,"Alt+\u2191"),Tc(),BE(48,", "),ui(49,"code"),BE(50,"F5"),Tc(),BE(51,`) are for
        demo purposes only and do not actually trigger any actions.
      `),Tc(),BE(52,`
    `),Tc(),BE(53,`
  `),Tc(),BE(54,`

  `),ui(55,"section",10),BE(56,`
    `),ui(57,"div",11),BE(58,`
      `),ui(59,"button",12),fp("click",function(){return i.clearGrouping()}),BE(60,`
        `),ui(61,"span"),BE(62,"Clear grouping"),Tc(),BE(63,`
      `),Tc(),BE(64,`
      `),ui(65,"button",13),fp("click",function(){return i.collapseAllGroups()}),BE(66,`
        `),ap(67,"span",14),BE(68,`
        `),ui(69,"span"),BE(70,"Collapse all groups"),Tc(),BE(71,`
      `),Tc(),BE(72,`
      `),ui(73,"button",15),fp("click",function(){return i.expandAllGroups()}),BE(74,`
        `),ap(75,"span",16),BE(76,`
        `),ui(77,"span"),BE(78,"Expand all groups"),Tc(),BE(79,`
      `),Tc(),BE(80,`
      `),ui(81,"button",17),fp("click",function(){return i.groupByDuration()}),BE(82,`
        Group by Duration
      `),Tc(),BE(83,`
    `),Tc(),BE(84,`
  `),Tc(),BE(85,`

  `),ui(86,"angular-slickgrid",18),fp("onAngularGridCreated",function(s){return i.angularGridReady(s.detail)}),BE(87,`
  `),Tc(),BE(88,`
`),Tc(),BE(89,`
`)),e&2&&(Uy(86),sp("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[U1],styles:[`.grid51-container{--slick-menu-item-height: 30px;--slick-menu-line-height: 30px;--slick-column-picker-item-height: 28px;--slick-column-picker-line-height: 28px;--slick-menu-item-border-radius: 4px;--slick-menu-item-hover-border: 1px solid #148dff;--slick-column-picker-item-hover-color: #fff;--slick-column-picker-item-border-radius: 4px;--slick-column-picker-item-hover-border: 1px solid #148dff;--slick-menu-item-hover-color: #fff;--slick-tooltip-background-color: #4c4c4c;--slick-tooltip-color: #fff;--slick-tooltip-font-size: 14px}.grid51-container .slick-cell-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),.grid51-container .slick-context-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),.grid51-container .slick-grid-menu .slick-menu-item:hover:not(.slick-menu-item-disabled),.grid51-container .slick-header-menu .slick-menu-item:hover:not(.slick-menu-item-disabled){color:#0a34b5}.grid51-container .slick-menu-footer{padding:4px 6px;border-top:1px solid #c0c0c0}body .slick-menu-item.slot-menu-container{--slick-menu-item-height: 40px;--slick-menu-item-hover-border: 1px solid transparent;--slick-menu-item-hover-color: transparent !important}body .slick-menu-item.slot-menu-container .footer-buttons-container{display:flex;justify-content:space-between;width:100%;gap:10px}body .slick-menu-item.slot-menu-container .footer-btn{flex:1;justify-content:center}.key-hint{background:#eee;border:1px solid #ccc;border-radius:2px;padding:2px 4px;font-size:10px;margin-left:10px;white-space:nowrap;display:inline-flex;align-items:center;height:20px}.key-hint.beta,.key-hint.danger,.key-hint.warn{color:#fff;font-size:8px;font-weight:700}.key-hint.beta{background:#44f;border:1px solid #5454ff}.key-hint.danger{background:#f44;border:1px solid #fb5a5a}.key-hint.warn{background:#ff9800;border:1px solid #fba321}kbd{background-color:#eee;color:#202020}.edit-cell{border:1px solid #ccc;border-radius:2px;padding:2px 4px;font-size:10px;margin-left:10px;display:inline-flex;align-items:center;height:18px}.export-timestamp{background-color:#4c4c4c;color:#fff;padding:8px;border-radius:4px;position:absolute;z-index:999999}.advanced-export-icon,.edit-cell-icon,.recalc-icon{width:20px;height:20px;border-radius:3px;display:flex;align-items:center;justify-content:center;margin-right:4px;transition:transform .2s;color:#fff;font-size:10px}.advanced-export-icon{background:linear-gradient(135deg,#667eea,#764ba2)}.edit-cell-icon{background:linear-gradient(135deg,#00c853,#64dd17)}.recalc-icon{background:linear-gradient(135deg,#c800a3,#a31189)}.round-tag{width:6px;height:6px;border-radius:50%;display:inline-block;background:#4f4;box-shadow:0 0 4px #4f4;margin-left:10px}.menu-item{display:flex;align-items:center;flex:1;justify-content:space-between}.menu-item .menu-item-label.warn{flex:1;color:#f09000}.menu-item-icon{margin-right:4px;font-size:18px}.menu-item-icon.warn{color:#ff9800}.menu-item-label{flex:1}
`],encapsulation:2});}}return p})();export{$ as Example51Component};
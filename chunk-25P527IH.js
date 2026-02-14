import{a as B}from"./chunk-BASBBGFD.js";import{c as N}from"./chunk-MAV7VLQV.js";import{Da as V,ja as P,o as L,qa as R,u as G,wa as g,ya as u,za as c}from"./chunk-IBXCHNN7.js";import{$b as W,Aa as f,Kb as e,Mb as w,Pa as M,U as k,_b as j,d as _,db as T,eb as O,ib as x,jb as l,kb as n,lb as E,vb as m,xb as A}from"./chunk-XXRVAQWA.js";import"./chunk-PRARYYF3.js";var v=class{constructor(a){this.args=a,this.init()}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get hasAutoCommitEdit(){return this.args.grid.getOptions().autoCommitEdit??!1}get validator(){return this.columnEditor.validator||this.columnDef.validator}init(){let a=this.columnEditor?.placeholder||"",t=this.columnEditor?.title||"";this.inputElm=document.createElement("input"),this.inputElm.type="text",this.inputElm.className="editor-text",this.inputElm.placeholder=a,this.inputElm.title=t,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener("keydown",this.onKeydown.bind(this)),this.hasAutoCommitEdit&&this.inputElm.addEventListener("focusout",this.save.bind(this)),setTimeout(()=>{this.inputElm.focus(),this.inputElm.select()},50)}onKeydown(a){this._lastInputEvent=a,(a.key==="ArrowLeft"||a.key==="ArrowRight")&&a.stopImmediatePropagation()}destroy(){this.inputElm.removeEventListener("keydown",this.onKeydown.bind(this)),this.inputElm.removeEventListener("focusout",this.save.bind(this)),this.inputElm.remove()}focus(){this.inputElm.focus()}getValue(){return this.inputElm.value}setValue(a){this.inputElm.value=a}loadValue(a){this.defaultValue=a[this.args.column.field]||"",this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select()}serializeValue(){return this.inputElm.value}applyValue(a,t){let o=this.validate(t);a[this.args.column.field]=o&&o.valid?t:""}isValueChanged(){let a=this._lastInputEvent?.key;return this.columnEditor?.alwaysSaveOnEnterKey&&a==="Enter"?!0:!(this.inputElm.value===""&&this.defaultValue===null)&&this.inputElm.value!==this.defaultValue}save(){this.validate()?.valid&&(this.hasAutoCommitEdit?this.args.grid.getEditorLock().commitCurrentEdit():this.args.commitChanges())}validate(a){if(this.validator){let t=a!==void 0?a:this.inputElm?.value;return this.validator(t,this.args)}return{valid:!0,msg:null}}};var q={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null},J=()=>`jsonp_${Date.now()}_${Math.ceil(Math.random()*1e5)}`,S=s=>delete window[s],D=s=>{let a=document.getElementById(s);a&&document.getElementsByTagName("head")[0].removeChild(a)};function K(s,a={}){let t=s,o=a.timeout||q.timeout,i=a.jsonpCallback||q.jsonpCallback,r;return new Promise((d,C)=>{let p=a.jsonpCallbackFunction||J(),b=`${i}_${p}`;window[p]=y=>{d({ok:!0,json:()=>Promise.resolve(y)}),r&&clearTimeout(r),D(b),S(p)},t+=t.indexOf("?")===-1?"?":"&";let h=document.createElement("script");h.setAttribute("src",`${t}${i}=${p}`),a.charset&&h.setAttribute("charset",a.charset),a.nonce&&h.setAttribute("nonce",a.nonce),a.referrerPolicy&&h.setAttribute("referrerPolicy",a.referrerPolicy),a.crossorigin&&h.setAttribute("crossorigin","true"),h.id=b,document.getElementsByTagName("head")[0].appendChild(h),r=setTimeout(()=>{C(new Error(`JSONP request to ${s} timed out`)),S(p),D(b),window[p]=()=>{S(p)}},o),h.onerror=()=>{C(new Error(`JSONP request to ${s} failed`)),S(p),D(b),r&&clearTimeout(r)}})}var F=K;function z(s,a){if(s&1&&(e(0,`
        `),l(1,"div",30)(2,"strong"),e(3,"Updated Item:"),n(),e(4),j(5,"json"),n(),e(6,`
      `)),s&2){let t=A();f(4),w(" ",W(5,1,t.updatedObject))}}function Y(s,a){if(s&1&&(e(0,`
        `),l(1,"div",31)(2,"strong"),e(3,"Updated Item:"),n(),e(4),n(),e(5,`
      `)),s&2){let t=A();f(4),w(" ",t.alertWarning)}}var Q=100,$="assets/data/collection_100_numbers.json",U="assets/data/countries.json",H="assets/data/country_names.json",I=(s,a)=>s==null||!s.length?{valid:!1,msg:"This is a required field"}:/^Task\s\d+$/.test(s)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number'},X=(s,a,t)=>{if(t&&Array.isArray(t)){let i=t.map(r=>`Task ${r}`).join(", ");return`<span title="${i}">${i}</span>`}return""},ue=(()=>{class s{constructor(){this.http=k(N),this.translate=k(G),this._commandQueue=[],this.hideSubTitle=!1,this.isAutoEdit=!0,this.selectedLanguage="en",this.duplicateTitleHeaderCount=1}ngOnInit(){this.prepareGrid()}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid}prepareGrid(){this.columnDefinitions=[{id:"edit",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:c.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(t,o)=>{console.log(o),this.alertWarning=`Editing: ${o.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500),this.angularGrid.gridService.setSelectedRow(o.row)}},{id:"delete",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:c.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30},{id:"title",name:"Title",field:"title",minWidth:100,filterable:!0,sortable:!0,editor:{model:u.longText,required:!0,maxLength:12,options:{cols:42,rows:5,buttonTexts:{}},validator:I},onCellChange:(t,o)=>{console.log(o),this.alertWarning=`Updated Title: ${o.dataContext.title}`}},{id:"title2",name:"Title, Custom Editor",field:"title",minWidth:70,filterable:!0,sortable:!0,editor:{model:v,placeholder:"custom",validator:I},filter:{model:B,placeholder:"\u{1F50E}\uFE0E custom"}},{id:"duration",name:"Duration (days)",field:"duration",minWidth:100,filterable:!0,sortable:!0,formatter:c.complexObject,type:"number",exportWithFormatter:!0,filter:{model:g.slider,options:{hideSliderNumber:!1}},editor:{model:u.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",minWidth:100,filterable:!0,formatter:c.multiple,type:"number",editor:{model:u.singleSelect,enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map(t=>({value:t,label:t,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'})),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:"!="},options:{maxHeight:400}},params:{formatters:[c.collectionEditor,c.percentCompleteBar]}},{id:"start",name:"Start",field:"start",minWidth:100,filterable:!0,filter:{model:g.compoundDate},formatter:c.multiple,params:{formatters:[c.complexObject,c.dateIso]},exportWithFormatter:!0,sortable:!0,type:"date",editor:{model:u.date}},{id:"finish",name:"Finish",field:"finish",minWidth:100,filterable:!0,sortable:!0,filter:{model:g.compoundDate},formatter:c.dateIso,exportWithFormatter:!0,type:"date",saveOutputType:"dateUtc",editor:{model:u.date,options:{displayDateMin:"today"}}},{id:"cityOfOrigin",name:"City of Origin",field:"cityOfOrigin",filterable:!0,minWidth:100,editor:{model:u.autocompleter,placeholder:"\u{1F50E}\uFE0E search city",options:{forceUserInput:!0,minLength:3,fetch:(t,o)=>{F(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log("invalid JSONP response",i))}}},filter:{model:g.autocompleter,options:{minLength:3,fetch:(t,o)=>{F(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log("invalid JSONP response",i))}}}},{id:"countryOfOrigin",name:"Country of Origin",field:"countryOfOrigin",formatter:c.complexObject,exportWithFormatter:!0,dataKey:"code",labelKey:"name",type:"object",sortComparer:P.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:u.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.get(U)},filter:{model:g.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.get(U)}},{id:"countryOfOriginName",name:"Country of Origin Name",field:"countryOfOriginName",filterable:!0,sortable:!0,minWidth:100,editor:{model:u.autocompleter,collectionAsync:this.http.get(H)},filter:{model:g.autocompleter,collectionAsync:this.http.get(H)}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:70,filterable:!0,type:"boolean",filter:{model:g.singleSelect,collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}]},formatter:c.checkmarkMaterial,editor:{model:u.checkbox}},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",minWidth:100,filterable:!0,formatter:X,exportWithFormatter:!0,sanitizeDataExport:!0,sortable:!0,editor:{placeholder:"choose option",collectionAsync:this.http.get($),collectionSortBy:{property:"label",sortDesc:!0},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:u.multipleSelect,required:!0},filter:{collectionAsync:this.http.get($),collectionSortBy:{property:"label",sortDesc:!0},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:g.multipleSelect,operator:"IN_CONTAINS"}}],this.gridOptions={asyncEditorLoading:!1,autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableCellNavigation:!0,enableColumnPicker:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,editCommandHandler:(t,o,i)=>{this._commandQueue.push(i),i.execute()},i18n:this.translate},this.dataset=this.mockData(Q)}addItem(){let t=this.dataset.length,o=this.mockData(1,t);setTimeout(()=>{let i=this.columnDefinitions.find(r=>r.id==="prerequisites");if(i){let r=i.filter.collectionAsync,d=i.editor.collection;Array.isArray(d)&&(this.angularGrid.gridService.addItem(o[0]),d.push({value:t,label:t,prefix:"Task"}),r instanceof _&&r.next(d))}},250)}deleteItem(){let t=this.columnDefinitions.find(o=>o.id==="prerequisites");if(t){let o=t.filter.collectionAsync,i=t.filter.collection;if(Array.isArray(i)){let r=this.sortCollectionDescending(i).pop();this.angularGrid.gridService.deleteItemById(r.value),o instanceof _&&o.next(i)}}}sortCollectionDescending(t){return t.sort((o,i)=>o.value-i.value)}mockData(t,o=0){let i=[];for(let r=o;r<o+t;r++){let d=2e3+this.randomBetween(4,15),C=new Date().getFullYear()-3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),b=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),y=new Date(C,p+1,b);i.push({id:r,title:"Task "+r,duration:r%33===0?null:Math.round(Math.random()*100)+"",start:new Date(d,p,b),percentComplete:h,percentCompleteNumber:h,finish:y<new Date?"":y,effortDriven:r%5===0,prerequisites:r%2===0&&r!==0&&r<12?[r,r-1]:[],countryOfOrigin:r%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"},countryOfOriginName:r%2?"Canada":"United States",cityOfOrigin:r%2?"Vancouver, BC, Canada":"Boston, MA, United States"})}return i}randomBetween(t,o){return Math.floor(Math.random()*(o-t+1)+t)}onCellChanged(t,o){this.updatedObject=o.item}onCellClicked(t,o){let i=this.angularGrid.gridService.getColumnFromEventArguments(o);console.log(i),i.columnDef.id==="edit"?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500)):i.columnDef.id==="delete"&&confirm("Are you sure?")&&this.angularGrid.gridService.deleteItemById(i.dataContext.id)}onValidationError(t,o){o.validationResults&&alert(o.validationResults.msg)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.gridObj?.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}dynamicallyAddTitleHeader(){let t={id:`title${this.duplicateTitleHeaderCount++}`,name:"Title",field:"title",editor:{model:u.text,required:!0,validator:I},sortable:!0,minWidth:100,filterable:!0};this.columnDefinitions.push(t),this.columnDefinitions=this.columnDefinitions.slice()}dynamicallyRemoveLastColumn(){this.columnDefinitions.pop(),this.columnDefinitions=this.columnDefinitions.slice()}setAutoEdit(t){return this.isAutoEdit=t,this.gridObj?.setOptions({autoEdit:t}),!0}undo(){let t=this._commandQueue.pop();t&&R.cancelCurrentEdit()&&(t.undo(),this.gridObj?.gotoCell(t.row,t.cell,!1))}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0)}static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275cmp=M({type:s,selectors:[["ng-component"]],decls:141,vars:8,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example03.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/editors","target","_blank"],[1,"row"],[1,"col-sm-6"],["id","radioAutoEdit"],["for","radioTrue",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","id","radioTrue","checked","",3,"change","value"],["for","radioFalse",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","id","radioFalse",3,"change","value"],[1,"row","col-sm-12"],["data-test","undo-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-undo"],["for","autoCommitEdit",1,"checkbox-inline","control-label"],["type","checkbox","id","autoCommitEdit","data-test","auto-commit",3,"click","checked"],[1,"row",2,"margin-top","5px"],[1,"col-sm-12"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Clear Filters & Sorting to see it better",1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["data-test","add-title-column",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-shape-square-plus"],["data-test","remove-title-column",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-minus"],["gridId","grid3",3,"onAngularGridCreated","onCellChange","onClick","onValidationError","columns","options","dataset"],[1,"alert","alert-info"],[1,"alert","alert-warning"]],template:function(o,i){o&1&&(l(0,"div",0),e(1,`
  `),l(2,"h2"),e(3,`
    Example 3: Editors / Delete
    `),l(4,"span",1),e(5,`
      `),l(6,"a",2),e(7,`
        `),E(8,"span",3),e(9,` code
      `),n(),e(10,`
    `),n(),e(11,`
    `),l(12,"button",4),m("click",function(){return i.toggleSubTitle()}),e(13,`
      `),E(14,"span",5),e(15,`
    `),n(),e(16,`
  `),n(),e(17,`
  `),l(18,"div",6),e(19,`
    Grid with Inline Editors and onCellClick actions (`),l(20,"a",7),e(21,"Wiki docs"),n(),e(22,`).
    `),l(23,"ul"),e(24,`
      `),l(25,"li"),e(26,`
        Multiple Editors & Filters are available: AutoComplete, Checkbox, Date, Slider, SingleSelect, MultipleSelect, Float, Text,
        LongText... even Custom Editor
      `),n(),e(27,`
      `),l(28,"li"),e(29,'When using "enableCellNavigation: true", clicking on a cell will automatically make it active & selected.'),n(),e(30,`
      `),l(31,"ul"),e(32,`
        `),l(33,"li"),e(34,`If you don't want this behavior, then you should disable "enableCellNavigation"`),n(),e(35,`
      `),n(),e(36,`
      `),l(37,"li"),e(38,'Inline Editors requires "enableCellNavigation: true" (not sure why though)'),n(),e(39,`
      `),l(40,"li"),e(41,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),n(),e(42,`
      `),l(43,"li"),e(44,'MultipleSelect & SingeSelect Editors & Filters can use a regular "collection" or "collectionAsync" to load it asynchronously'),n(),e(45,`
      `),l(46,"ul"),e(47,`
        `),l(48,"li"),e(49,'Click on "Add Item" and see the Editor/Filter or the "Prerequesites" column change'),n(),e(50,`
        `),l(51,"li"),e(52,'Any Editor/Filter with a "collection" can be changed dynamically later in the future'),n(),e(53,`
      `),n(),e(54,`
    `),n(),e(55,`
  `),n(),e(56,`

  `),l(57,"div",8),e(58,`
    `),l(59,"div",9),e(60,`
      `),l(61,"label"),e(62,"autoEdit setting: "),n(),e(63,`
      `),l(64,"span",10),e(65,`
        `),l(66,"label",11),e(67,`
          `),l(68,"input",12),m("change",function(){return i.setAutoEdit(!0)}),n(),e(69,` ON
          (single-click)
        `),n(),e(70,`
        `),l(71,"label",13),e(72,`
          `),l(73,"input",14),m("change",function(){return i.setAutoEdit(!1)}),n(),e(74,` OFF
          (double-click)
        `),n(),e(75,`
      `),n(),e(76,`
      `),l(77,"div",15),e(78,`
        `),l(79,"span"),e(80,`
          `),l(81,"button",16),m("click",function(){return i.undo()}),e(82,`
            `),E(83,"i",17),e(84,`
            Undo last edit(s)
          `),n(),e(85,`
          `),l(86,"label",18),e(87,`
            `),l(88,"input",19),m("click",function(){return i.changeAutoCommit()}),n(),e(89,`
            Auto Commit Edit
          `),n(),e(90,`
        `),n(),e(91,`
      `),n(),e(92,`
      `),l(93,"div",20),e(94,`
        `),l(95,"div",21),e(96,`
          `),l(97,"button",22),m("click",function(){return i.angularGrid.filterService.clearFilters()}),e(98,`
            Clear Filters
          `),n(),e(99,`
          `),l(100,"button",22),m("click",function(){return i.angularGrid.sortService.clearSorting()}),e(101,"Clear Sorting"),n(),e(102,`
          `),l(103,"button",23),m("click",function(){return i.addItem()}),e(104,`
            Add item
          `),n(),e(105,`
          `),l(106,"button",24),m("click",function(){return i.deleteItem()}),e(107,"Delete item"),n(),e(108,`
        `),n(),e(109,`
      `),n(),e(110,`
      `),l(111,"div",20),e(112,`
        `),l(113,"div",21),e(114,`
          `),l(115,"button",25),m("click",function(){return i.dynamicallyAddTitleHeader()}),e(116,`
            `),E(117,"i",26),e(118,`
            Dynamically Duplicate Title Column
          `),n(),e(119,`
          `),l(120,"button",27),m("click",function(){return i.dynamicallyRemoveLastColumn()}),e(121,`
            `),E(122,"i",28),e(123,`
            Dynamically Remove Last Column
          `),n(),e(124,`
        `),n(),e(125,`
      `),n(),e(126,`
    `),n(),e(127,`

    `),l(128,"div",9),e(129,`
      `),T(130,z,7,3),T(131,Y,6,1),n(),e(132,`
  `),n(),e(133,`

  `),l(134,"div",21),e(135,`
    `),l(136,"angular-slickgrid",29),m("onAngularGridCreated",function(d){return i.angularGridReady(d.detail)})("onCellChange",function(d){return i.onCellChanged(d.detail.eventData,d.detail.args)})("onClick",function(d){return i.onCellClicked(d.detail.eventData,d.detail.args)})("onValidationError",function(d){return i.onValidationError(d.detail.eventData,d.detail.args)}),e(137,`
    `),n(),e(138,`
  `),n(),e(139,`
`),n(),e(140,`
`)),o&2&&(f(68),x("value",i.isAutoEdit),f(5),x("value",i.isAutoEdit),f(15),x("checked",i.gridOptions.autoCommitEdit),f(42),O(i.updatedObject?130:-1),f(),O(i.alertWarning?131:-1),f(5),x("columns",i.columnDefinitions)("options",i.gridOptions)("dataset",i.dataset))},dependencies:[V,L],encapsulation:2})}}return s})();export{ue as Example3Component};

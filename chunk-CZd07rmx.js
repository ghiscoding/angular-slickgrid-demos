import {a as a$1}from'./chunk-B52EFzUa.js';import {r}from'./chunk-DnY-KoaL.js';import {D as D$1,L as Le,j as ji,q as qN,k as kM,h as Tu,i as MB,t as te,x as xi,T as TI,U as U1,l as Bp,u as ui,B as BE,a as ap,d as Tc,f as fp,z as zI,e as Uy,g as sp,Q as QI,m as iD,n as uE,N as Nc,o as aD}from'./main-C6PQTYH6.js';var v=class{constructor(a){this.args=a,this.init();}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get hasAutoCommitEdit(){return this.args.grid.getOptions().autoCommitEdit??false}get validator(){return this.columnEditor.validator||this.columnDef.validator}init(){let a=this.columnEditor?.placeholder||"",t=this.columnEditor?.title||"";this.inputElm=document.createElement("input"),this.inputElm.type="text",this.inputElm.className="editor-text",this.inputElm.placeholder=a,this.inputElm.title=t,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener("keydown",this.onKeydown.bind(this)),this.hasAutoCommitEdit&&this.inputElm.addEventListener("focusout",this.save.bind(this)),setTimeout(()=>{this.inputElm.focus(),this.inputElm.select();},50);}onKeydown(a){this._lastInputEvent=a,(a.key==="ArrowLeft"||a.key==="ArrowRight")&&a.stopImmediatePropagation();}destroy(){this.inputElm.removeEventListener("keydown",this.onKeydown.bind(this)),this.inputElm.removeEventListener("focusout",this.save.bind(this)),this.inputElm.remove();}focus(){this.inputElm.focus();}getValue(){return this.inputElm.value}setValue(a){this.inputElm.value=a;}loadValue(a){this.defaultValue=a[this.args.column.field]||"",this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select();}serializeValue(){return this.inputElm.value}applyValue(a,t){let o=this.validate(t);a[this.args.column.field]=o&&o.valid?t:"";}isValueChanged(){let a=this._lastInputEvent?.key;return this.columnEditor?.alwaysSaveOnEnterKey&&a==="Enter"?true:!(this.inputElm.value===""&&this.defaultValue===null)&&this.inputElm.value!==this.defaultValue}save(){this.validate()?.valid&&(this.hasAutoCommitEdit?this.args.grid.getEditorLock().commitCurrentEdit():this.args.commitChanges());}validate(a){if(this.validator){let t=a!==void 0?a:this.inputElm?.value;return this.validator(t,this.args)}return {valid:true,msg:null}}};var $={timeout:5e3,jsonpCallback:"callback"},K=()=>`jsonp_${Date.now()}_${Math.ceil(Math.random()*1e5)}`,S=s=>delete window[s],F=s=>{let a=document.getElementById(s);a&&document.getElementsByTagName("head")[0].removeChild(a);};function z(s,a={}){let t=s,o=a.timeout||$.timeout,i=a.jsonpCallback||$.jsonpCallback,r;return new Promise((d,C)=>{let p=a.jsonpCallbackFunction||K(),b=`${i}_${p}`;window[p]=y=>{d({ok:true,json:()=>Promise.resolve(y)}),r&&clearTimeout(r),F(b),S(p);},t+=t.indexOf("?")===-1?"?":"&";let h=document.createElement("script");h.setAttribute("src",`${t}${i}=${p}`),a.charset&&h.setAttribute("charset",a.charset),a.nonce&&h.setAttribute("nonce",a.nonce),a.referrerPolicy&&h.setAttribute("referrerPolicy",a.referrerPolicy),a.crossorigin&&h.setAttribute("crossorigin","true"),h.id=b,document.getElementsByTagName("head")[0].appendChild(h),r=setTimeout(()=>{C(new Error(`JSONP request to ${s} timed out`)),S(p),F(b),window[p]=()=>{S(p);};},o),h.onerror=()=>{C(new Error(`JSONP request to ${s} failed`)),S(p),F(b),r&&clearTimeout(r);};})}var D=z;function Y(s,a){if(s&1&&(BE(0,`
        `),ui(1,"div",30)(2,"strong"),BE(3,"Updated Item:"),Tc(),BE(4),iD(5,"json"),Tc(),BE(6,`
      `)),s&2){let t=uE();Uy(4),Nc(" ",aD(5,1,t.updatedObject));}}function Q(s,a){if(s&1&&(BE(0,`
        `),ui(1,"div",31)(2,"strong"),BE(3,"Updated Item:"),Tc(),BE(4),Tc(),BE(5,`
      `)),s&2){let t=uE();Uy(4),Nc(" ",t.alertWarning);}}var X=100,U="assets/data/collection_100_numbers.json",H="assets/data/countries.json",J="assets/data/country_names.json",I=(s,a)=>s==null||!s.length?{valid:false,msg:"This is a required field"}:/^Task\s\d+$/.test(s)?{valid:true,msg:""}:{valid:false,msg:'Your title is invalid, it must start with "Task" followed by a number'},Z=(s,a,t)=>{if(t&&Array.isArray(t)){let i=t.map(r=>`Task ${r}`).join(", ");return `<span title="${i}">${i}</span>`}return ""},he=(()=>{class s{constructor(){this.http=D$1(Le),this.translate=D$1(ji),this._commandQueue=[],this.hideSubTitle=false,this.isAutoEdit=true,this.selectedLanguage="en",this.duplicateTitleHeaderCount=1;}ngOnInit(){this.prepareGrid();}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid;}prepareGrid(){this.columns=[{id:"edit",field:"id",excludeFromColumnPicker:true,excludeFromGridMenu:true,excludeFromHeaderMenu:true,formatter:qN.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(t,o)=>{console.log(o),this.alertWarning=`Editing: ${o.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500),this.angularGrid.gridService.setSelectedRow(o.row);}},{id:"delete",field:"id",excludeFromColumnPicker:true,excludeFromGridMenu:true,excludeFromHeaderMenu:true,formatter:qN.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30},{id:"title",name:"Title",field:"title",minWidth:100,filterable:true,sortable:true,editor:{model:kM.longText,required:true,maxLength:12,options:{cols:42,rows:5,buttonTexts:{}},validator:I},onCellChange:(t,o)=>{console.log(o),this.alertWarning=`Updated Title: ${o.dataContext.title}`;}},{id:"title2",name:"Title, Custom Editor",field:"title",minWidth:70,filterable:true,sortable:true,editor:{model:v,placeholder:"custom",validator:I},filter:{model:r,placeholder:"\u{1F50E}\uFE0E custom"}},{id:"duration",name:"Duration (days)",field:"duration",minWidth:100,filterable:true,sortable:true,formatter:qN.complexObject,type:"number",exportWithFormatter:true,filter:{model:Tu.slider,options:{hideSliderNumber:false}},editor:{model:kM.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",minWidth:100,filterable:true,formatter:qN.multiple,type:"number",editor:{model:kM.singleSelect,enableRenderHtml:true,collection:Array.from(Array(101).keys()).map(t=>({value:t,label:t,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'})),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:true},collectionFilterBy:{property:"value",value:0,operator:"!="},options:{maxHeight:400}},params:{formatters:[qN.collectionEditor,qN.percentCompleteBar]}},{id:"start",name:"Start",field:"start",minWidth:100,filterable:true,filter:{model:Tu.compoundDate},formatter:qN.multiple,params:{formatters:[qN.complexObject,qN.dateIso]},exportWithFormatter:true,sortable:true,type:"date",editor:{model:kM.date}},{id:"finish",name:"Finish",field:"finish",minWidth:100,filterable:true,sortable:true,filter:{model:Tu.compoundDate},formatter:qN.dateIso,exportWithFormatter:true,type:"date",saveOutputType:"dateUtc",editor:{model:kM.date,options:{displayDateMin:"today"}}},{id:"cityOfOrigin",name:"City of Origin",field:"cityOfOrigin",filterable:true,minWidth:100,editor:{model:kM.autocompleter,placeholder:"\u{1F50E}\uFE0E search city",options:{forceUserInput:true,minLength:3,fetch:(t,o)=>{D(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log("invalid JSONP response",i));}}},filter:{model:Tu.autocompleter,options:{minLength:3,fetch:(t,o)=>{D(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log("invalid JSONP response",i));}}}},{id:"countryOfOrigin",name:"Country of Origin",field:"countryOfOrigin",formatter:qN.complexObject,exportWithFormatter:true,dataKey:"code",labelKey:"name",type:"object",sortComparer:MB.objectString,filterable:true,sortable:true,minWidth:100,editor:{model:kM.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.get(H)},filter:{model:Tu.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.get(H)}},{id:"countryOfOriginName",name:"Country of Origin Name",field:"countryOfOriginName",filterable:true,sortable:true,minWidth:100,editor:{model:kM.autocompleter,collectionAsync:this.http.get(J)},filter:{model:Tu.autocompleter,collectionAsync:this.http.get(J)}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:70,filterable:true,type:"boolean",filter:{model:Tu.singleSelect,collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}]},formatter:qN.checkmarkMaterial,editor:{model:kM.checkbox}},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",minWidth:100,filterable:true,formatter:Z,exportWithFormatter:true,sanitizeDataExport:true,sortable:true,editor:{placeholder:"choose option",collectionAsync:this.http.get(U),collectionSortBy:{property:"label",sortDesc:true},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:kM.multipleSelect,required:true},filter:{collectionAsync:this.http.get(U),collectionSortBy:{property:"label",sortDesc:true},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:Tu.multipleSelect,operator:"IN_CONTAINS"}}],this.gridOptions={asyncEditorLoading:false,autoEdit:this.isAutoEdit,autoCommitEdit:false,autoResize:{container:"#demo-container",rightPadding:10},editable:true,enableCellNavigation:true,enableColumnPicker:true,enableExcelCopyBuffer:true,enableFiltering:true,editCommandHandler:(t,o,i)=>{this._commandQueue.push(i),i.execute();},i18n:this.translate},this.dataset=this.mockData(X);}addItem(){let t=this.dataset.length,o=this.mockData(1,t);setTimeout(()=>{let i=this.columns.find(r=>r.id==="prerequisites");if(i){let r=i.filter.collectionAsync,d=i.editor.collection;Array.isArray(d)&&(this.angularGrid.gridService.addItem(o[0]),d.push({value:t,label:t,prefix:"Task"}),r instanceof te&&r.next(d));}},250);}deleteItem(){let t=this.columns.find(o=>o.id==="prerequisites");if(t){let o=t.filter.collectionAsync,i=t.filter.collection;if(Array.isArray(i)){let r=this.sortCollectionDescending(i).pop();this.angularGrid.gridService.deleteItemById(r.value),o instanceof te&&o.next(i);}}}sortCollectionDescending(t){return t.sort((o,i)=>o.value-i.value)}mockData(t,o=0){let i=[];for(let r=o;r<o+t;r++){let d=2e3+this.randomBetween(4,15),C=new Date().getFullYear()-3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),b=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),y=new Date(C,p+1,b);i.push({id:r,title:"Task "+r,duration:r%33===0?null:Math.round(Math.random()*100)+"",start:new Date(d,p,b),percentComplete:h,percentCompleteNumber:h,finish:y<new Date?"":y,effortDriven:r%5===0,prerequisites:r%2===0&&r!==0&&r<12?[r,r-1]:[],countryOfOrigin:r%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"},countryOfOriginName:r%2?"Canada":"United States",cityOfOrigin:r%2?"Vancouver, BC, Canada":"Boston, MA, United States"});}return i}randomBetween(t,o){return Math.floor(Math.random()*(o-t+1)+t)}onCellChanged(t,o){this.updatedObject=o.item;}onCellClicked(t,o){let i=this.angularGrid.gridService.getColumnFromEventArguments(o);console.log(i),i.columnDef.id==="edit"?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500)):i.columnDef.id==="delete"&&confirm("Are you sure?")&&this.angularGrid.gridService.deleteItemById(i.dataContext.id);}onValidationError(t,o){o.validationResults&&a$1(o.validationResults.msg,"danger");}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.gridObj?.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),true}dynamicallyAddTitleHeader(){let t={id:`title${this.duplicateTitleHeaderCount++}`,name:"Title",field:"title",editor:{model:kM.text,required:true,validator:I},sortable:true,minWidth:100,filterable:true};this.columns.push(t),this.columns=this.columns.slice();}dynamicallyRemoveLastColumn(){this.columns.pop(),this.columns=this.columns.slice();}setAutoEdit(t){return this.isAutoEdit=t,this.gridObj?.setOptions({autoEdit:t}),true}undo(){let t=this._commandQueue.pop();t&&xi.cancelCurrentEdit()&&(t.undo(),this.gridObj?.gotoCell(t.row,t.cell,false));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||s)};}static{this.\u0275cmp=TI({type:s,selectors:[["ng-component"]],decls:141,vars:8,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example03.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/editors","target","_blank"],[1,"row"],[1,"col-sm-6"],["id","radioAutoEdit"],["for","radioTrue",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","id","radioTrue","checked","",3,"change","value"],["for","radioFalse",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","id","radioFalse",3,"change","value"],[1,"row","col-sm-12"],["data-test","undo-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-undo"],["for","autoCommitEdit",1,"checkbox-inline","control-label"],["type","checkbox","id","autoCommitEdit","data-test","auto-commit",3,"click","checked"],[1,"row",2,"margin-top","5px"],[1,"col-sm-12"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Clear Filters & Sorting to see it better",1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["data-test","add-title-column",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-shape-square-plus"],["data-test","remove-title-column",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-minus"],["gridId","grid3",3,"onAngularGridCreated","onCellChange","onClick","onValidationError","columns","options","dataset"],[1,"alert","alert-info"],[1,"alert","alert-warning"]],template:function(o,i){o&1&&(ui(0,"div",0),BE(1,`
  `),ui(2,"h2"),BE(3,`
    Example 3: Editors / Delete
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
    Grid with Inline Editors and onCellClick actions (`),ui(20,"a",7),BE(21,"Wiki docs"),Tc(),BE(22,`).
    `),ui(23,"ul"),BE(24,`
      `),ui(25,"li"),BE(26,`
        Multiple Editors & Filters are available: AutoComplete, Checkbox, Date, Slider, SingleSelect, MultipleSelect, Float, Text,
        LongText... even Custom Editor
      `),Tc(),BE(27,`
      `),ui(28,"li"),BE(29,'When using "enableCellNavigation: true", clicking on a cell will automatically make it active & selected.'),Tc(),BE(30,`
      `),ui(31,"ul"),BE(32,`
        `),ui(33,"li"),BE(34,`If you don't want this behavior, then you should disable "enableCellNavigation"`),Tc(),BE(35,`
      `),Tc(),BE(36,`
      `),ui(37,"li"),BE(38,'Inline Editors requires "enableCellNavigation: true" (not sure why though)'),Tc(),BE(39,`
      `),ui(40,"li"),BE(41,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),Tc(),BE(42,`
      `),ui(43,"li"),BE(44,'MultipleSelect & SingeSelect Editors & Filters can use a regular "collection" or "collectionAsync" to load it asynchronously'),Tc(),BE(45,`
      `),ui(46,"ul"),BE(47,`
        `),ui(48,"li"),BE(49,'Click on "Add Item" and see the Editor/Filter or the "Prerequesites" column change'),Tc(),BE(50,`
        `),ui(51,"li"),BE(52,'Any Editor/Filter with a "collection" can be changed dynamically later in the future'),Tc(),BE(53,`
      `),Tc(),BE(54,`
    `),Tc(),BE(55,`
  `),Tc(),BE(56,`

  `),ui(57,"div",8),BE(58,`
    `),ui(59,"div",9),BE(60,`
      `),ui(61,"label"),BE(62,"autoEdit setting: "),Tc(),BE(63,`
      `),ui(64,"span",10),BE(65,`
        `),ui(66,"label",11),BE(67,`
          `),ui(68,"input",12),fp("change",function(){return i.setAutoEdit(true)}),Tc(),BE(69,` ON
          (single-click)
        `),Tc(),BE(70,`
        `),ui(71,"label",13),BE(72,`
          `),ui(73,"input",14),fp("change",function(){return i.setAutoEdit(false)}),Tc(),BE(74,` OFF
          (double-click)
        `),Tc(),BE(75,`
      `),Tc(),BE(76,`
      `),ui(77,"div",15),BE(78,`
        `),ui(79,"span"),BE(80,`
          `),ui(81,"button",16),fp("click",function(){return i.undo()}),BE(82,`
            `),ap(83,"i",17),BE(84,`
            Undo last edit(s)
          `),Tc(),BE(85,`
          `),ui(86,"label",18),BE(87,`
            `),ui(88,"input",19),fp("click",function(){return i.changeAutoCommit()}),Tc(),BE(89,`
            Auto Commit Edit
          `),Tc(),BE(90,`
        `),Tc(),BE(91,`
      `),Tc(),BE(92,`
      `),ui(93,"div",20),BE(94,`
        `),ui(95,"div",21),BE(96,`
          `),ui(97,"button",22),fp("click",function(){return i.angularGrid.filterService.clearFilters()}),BE(98,`
            Clear Filters
          `),Tc(),BE(99,`
          `),ui(100,"button",22),fp("click",function(){return i.angularGrid.sortService.clearSorting()}),BE(101,"Clear Sorting"),Tc(),BE(102,`
          `),ui(103,"button",23),fp("click",function(){return i.addItem()}),BE(104,`
            Add item
          `),Tc(),BE(105,`
          `),ui(106,"button",24),fp("click",function(){return i.deleteItem()}),BE(107,"Delete item"),Tc(),BE(108,`
        `),Tc(),BE(109,`
      `),Tc(),BE(110,`
      `),ui(111,"div",20),BE(112,`
        `),ui(113,"div",21),BE(114,`
          `),ui(115,"button",25),fp("click",function(){return i.dynamicallyAddTitleHeader()}),BE(116,`
            `),ap(117,"i",26),BE(118,`
            Dynamically Duplicate Title Column
          `),Tc(),BE(119,`
          `),ui(120,"button",27),fp("click",function(){return i.dynamicallyRemoveLastColumn()}),BE(121,`
            `),ap(122,"i",28),BE(123,`
            Dynamically Remove Last Column
          `),Tc(),BE(124,`
        `),Tc(),BE(125,`
      `),Tc(),BE(126,`
    `),Tc(),BE(127,`

    `),ui(128,"div",9),BE(129,`
      `),zI(130,Y,7,3),zI(131,Q,6,1),Tc(),BE(132,`
  `),Tc(),BE(133,`

  `),ui(134,"div",21),BE(135,`
    `),ui(136,"angular-slickgrid",29),fp("onAngularGridCreated",function(d){return i.angularGridReady(d.detail)})("onCellChange",function(d){return i.onCellChanged(d.detail.eventData,d.detail.args)})("onClick",function(d){return i.onCellClicked(d.detail.eventData,d.detail.args)})("onValidationError",function(d){return i.onValidationError(d.detail.eventData,d.detail.args)}),BE(137,`
    `),Tc(),BE(138,`
  `),Tc(),BE(139,`
`),Tc(),BE(140,`
`)),o&2&&(Uy(68),sp("value",i.isAutoEdit),Uy(5),sp("value",i.isAutoEdit),Uy(15),sp("checked",i.gridOptions.autoCommitEdit),Uy(42),QI(i.updatedObject?130:-1),Uy(),QI(i.alertWarning?131:-1),Uy(5),sp("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[U1,Bp],encapsulation:2});}}return s})();export{he as Example3Component};
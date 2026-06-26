import {a as a$1}from'./chunk-B52EFzUa.js';import {r}from'./chunk-DnY-KoaL.js';import {D as D$1,L as Le,e as ji,X as XN,M as MM,f as Tu,g as LB,t as te,x as xi,b as bI,j as j1,B as Bp,u as ui,U as UE,c as cp,T as Tc,p as pp,Z as ZI,W as Wy,d as ap,Y as YI,h as aD,i as fE,k as Nc,m as lD}from'./main-WTCLCICA.js';var v=class{constructor(a){this.args=a,this.init();}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get hasAutoCommitEdit(){return this.args.grid.getOptions().autoCommitEdit??false}get validator(){return this.columnEditor.validator||this.columnDef.validator}init(){let a=this.columnEditor?.placeholder||"",t=this.columnEditor?.title||"";this.inputElm=document.createElement("input"),this.inputElm.type="text",this.inputElm.className="editor-text",this.inputElm.placeholder=a,this.inputElm.title=t,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener("keydown",this.onKeydown.bind(this)),this.hasAutoCommitEdit&&this.inputElm.addEventListener("focusout",this.save.bind(this)),setTimeout(()=>{this.inputElm.focus(),this.inputElm.select();},50);}onKeydown(a){this._lastInputEvent=a,(a.key==="ArrowLeft"||a.key==="ArrowRight")&&a.stopImmediatePropagation();}destroy(){this.inputElm.removeEventListener("keydown",this.onKeydown.bind(this)),this.inputElm.removeEventListener("focusout",this.save.bind(this)),this.inputElm.remove();}focus(){this.inputElm.focus();}getValue(){return this.inputElm.value}setValue(a){this.inputElm.value=a;}loadValue(a){this.defaultValue=a[this.args.column.field]||"",this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select();}serializeValue(){return this.inputElm.value}applyValue(a,t){let o=this.validate(t);a[this.args.column.field]=o&&o.valid?t:"";}isValueChanged(){let a=this._lastInputEvent?.key;return this.columnEditor?.alwaysSaveOnEnterKey&&a==="Enter"?true:!(this.inputElm.value===""&&this.defaultValue===null)&&this.inputElm.value!==this.defaultValue}save(){this.validate()?.valid&&(this.hasAutoCommitEdit?this.args.grid.getEditorLock().commitCurrentEdit():this.args.commitChanges());}validate(a){if(this.validator){let t=a!==void 0?a:this.inputElm?.value;return this.validator(t,this.args)}return {valid:true,msg:null}}};var $={timeout:5e3,jsonpCallback:"callback"},K=()=>`jsonp_${Date.now()}_${Math.ceil(Math.random()*1e5)}`,S=s=>delete window[s],F=s=>{let a=document.getElementById(s);a&&document.getElementsByTagName("head")[0].removeChild(a);};function z(s,a={}){let t=s,o=a.timeout||$.timeout,i=a.jsonpCallback||$.jsonpCallback,r;return new Promise((d,C)=>{let p=a.jsonpCallbackFunction||K(),b=`${i}_${p}`;window[p]=y=>{d({ok:true,json:()=>Promise.resolve(y)}),r&&clearTimeout(r),F(b),S(p);},t+=t.indexOf("?")===-1?"?":"&";let h=document.createElement("script");h.setAttribute("src",`${t}${i}=${p}`),a.charset&&h.setAttribute("charset",a.charset),a.nonce&&h.setAttribute("nonce",a.nonce),a.referrerPolicy&&h.setAttribute("referrerPolicy",a.referrerPolicy),a.crossorigin&&h.setAttribute("crossorigin","true"),h.id=b,document.getElementsByTagName("head")[0].appendChild(h),r=setTimeout(()=>{C(new Error(`JSONP request to ${s} timed out`)),S(p),F(b),window[p]=()=>{S(p);};},o),h.onerror=()=>{C(new Error(`JSONP request to ${s} failed`)),S(p),F(b),r&&clearTimeout(r);};})}var D=z;function Y(s,a){if(s&1&&(UE(0,`
        `),ui(1,"div",30)(2,"strong"),UE(3,"Updated Item:"),Tc(),UE(4),aD(5,"json"),Tc(),UE(6,`
      `)),s&2){let t=fE();Wy(4),Nc(" ",lD(5,1,t.updatedObject));}}function Q(s,a){if(s&1&&(UE(0,`
        `),ui(1,"div",31)(2,"strong"),UE(3,"Updated Item:"),Tc(),UE(4),Tc(),UE(5,`
      `)),s&2){let t=fE();Wy(4),Nc(" ",t.alertWarning);}}var X=100,U="assets/data/collection_100_numbers.json",H="assets/data/countries.json",J="assets/data/country_names.json",I=(s,a)=>s==null||!s.length?{valid:false,msg:"This is a required field"}:/^Task\s\d+$/.test(s)?{valid:true,msg:""}:{valid:false,msg:'Your title is invalid, it must start with "Task" followed by a number'},Z=(s,a,t)=>{if(t&&Array.isArray(t)){let i=t.map(r=>`Task ${r}`).join(", ");return `<span title="${i}">${i}</span>`}return ""},he=(()=>{class s{constructor(){this.http=D$1(Le),this.translate=D$1(ji),this._commandQueue=[],this.hideSubTitle=false,this.isAutoEdit=true,this.selectedLanguage="en",this.duplicateTitleHeaderCount=1;}ngOnInit(){this.prepareGrid();}angularGridReady(t){this.angularGrid=t,this.gridObj=t.slickGrid;}prepareGrid(){this.columns=[{id:"edit",field:"id",excludeFromColumnPicker:true,excludeFromGridMenu:true,excludeFromHeaderMenu:true,formatter:XN.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(t,o)=>{console.log(o),this.alertWarning=`Editing: ${o.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500),this.angularGrid.gridService.setSelectedRow(o.row);}},{id:"delete",field:"id",excludeFromColumnPicker:true,excludeFromGridMenu:true,excludeFromHeaderMenu:true,formatter:XN.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30},{id:"title",name:"Title",field:"title",minWidth:100,filterable:true,sortable:true,editor:{model:MM.longText,required:true,maxLength:12,options:{cols:42,rows:5,buttonTexts:{}},validator:I},onCellChange:(t,o)=>{console.log(o),this.alertWarning=`Updated Title: ${o.dataContext.title}`;}},{id:"title2",name:"Title, Custom Editor",field:"title",minWidth:70,filterable:true,sortable:true,editor:{model:v,placeholder:"custom",validator:I},filter:{model:r,placeholder:"\u{1F50E}\uFE0E custom"}},{id:"duration",name:"Duration (days)",field:"duration",minWidth:100,filterable:true,sortable:true,formatter:XN.complexObject,type:"number",exportWithFormatter:true,filter:{model:Tu.slider,options:{hideSliderNumber:false}},editor:{model:MM.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",minWidth:100,filterable:true,formatter:XN.multiple,type:"number",editor:{model:MM.singleSelect,enableRenderHtml:true,collection:Array.from(Array(101).keys()).map(t=>({value:t,label:t,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'})),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:true},collectionFilterBy:{property:"value",value:0,operator:"!="},options:{maxHeight:400}},params:{formatters:[XN.collectionEditor,XN.percentCompleteBar]}},{id:"start",name:"Start",field:"start",minWidth:100,filterable:true,filter:{model:Tu.compoundDate},formatter:XN.multiple,params:{formatters:[XN.complexObject,XN.dateIso]},exportWithFormatter:true,sortable:true,type:"date",editor:{model:MM.date}},{id:"finish",name:"Finish",field:"finish",minWidth:100,filterable:true,sortable:true,filter:{model:Tu.compoundDate},formatter:XN.dateIso,exportWithFormatter:true,type:"date",saveOutputType:"dateUtc",editor:{model:MM.date,options:{displayDateMin:"today"}}},{id:"cityOfOrigin",name:"City of Origin",field:"cityOfOrigin",filterable:true,minWidth:100,editor:{model:MM.autocompleter,placeholder:"\u{1F50E}\uFE0E search city",options:{forceUserInput:true,minLength:3,fetch:(t,o)=>{D(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log("invalid JSONP response",i));}}},filter:{model:Tu.autocompleter,options:{minLength:3,fetch:(t,o)=>{D(`http://gd.geobytes.com/AutoCompleteCity?q=${t}`).then(i=>i.json()).then(i=>o(i)).catch(i=>console.log("invalid JSONP response",i));}}}},{id:"countryOfOrigin",name:"Country of Origin",field:"countryOfOrigin",formatter:XN.complexObject,exportWithFormatter:true,dataKey:"code",labelKey:"name",type:"object",sortComparer:LB.objectString,filterable:true,sortable:true,minWidth:100,editor:{model:MM.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.get(H)},filter:{model:Tu.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.get(H)}},{id:"countryOfOriginName",name:"Country of Origin Name",field:"countryOfOriginName",filterable:true,sortable:true,minWidth:100,editor:{model:MM.autocompleter,collectionAsync:this.http.get(J)},filter:{model:Tu.autocompleter,collectionAsync:this.http.get(J)}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:70,filterable:true,type:"boolean",filter:{model:Tu.singleSelect,collection:[{value:"",label:""},{value:true,label:"True"},{value:false,label:"False"}]},formatter:XN.checkmarkMaterial,editor:{model:MM.checkbox}},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",minWidth:100,filterable:true,formatter:Z,exportWithFormatter:true,sanitizeDataExport:true,sortable:true,editor:{placeholder:"choose option",collectionAsync:this.http.get(U),collectionSortBy:{property:"label",sortDesc:true},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:MM.multipleSelect,required:true},filter:{collectionAsync:this.http.get(U),collectionSortBy:{property:"label",sortDesc:true},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:Tu.multipleSelect,operator:"IN_CONTAINS"}}],this.gridOptions={asyncEditorLoading:false,autoEdit:this.isAutoEdit,autoCommitEdit:false,autoResize:{container:"#demo-container",rightPadding:10},editable:true,enableCellNavigation:true,enableColumnPicker:true,enableExcelCopyBuffer:true,enableFiltering:true,editCommandHandler:(t,o,i)=>{this._commandQueue.push(i),i.execute();},i18n:this.translate},this.dataset=this.mockData(X);}addItem(){let t=this.dataset.length,o=this.mockData(1,t);setTimeout(()=>{let i=this.columns.find(r=>r.id==="prerequisites");if(i){let r=i.filter.collectionAsync,d=i.editor.collection;Array.isArray(d)&&(this.angularGrid.gridService.addItem(o[0]),d.push({value:t,label:t,prefix:"Task"}),r instanceof te&&r.next(d));}},250);}deleteItem(){let t=this.columns.find(o=>o.id==="prerequisites");if(t){let o=t.filter.collectionAsync,i=t.filter.collection;if(Array.isArray(i)){let r=this.sortCollectionDescending(i).pop();this.angularGrid.gridService.deleteItemById(r.value),o instanceof te&&o.next(i);}}}sortCollectionDescending(t){return t.sort((o,i)=>o.value-i.value)}mockData(t,o=0){let i=[];for(let r=o;r<o+t;r++){let d=2e3+this.randomBetween(4,15),C=new Date().getFullYear()-3+Math.floor(Math.random()*10),p=Math.floor(Math.random()*11),b=Math.floor(Math.random()*29),h=Math.round(Math.random()*100),y=new Date(C,p+1,b);i.push({id:r,title:"Task "+r,duration:r%33===0?null:Math.round(Math.random()*100)+"",start:new Date(d,p,b),percentComplete:h,percentCompleteNumber:h,finish:y<new Date?"":y,effortDriven:r%5===0,prerequisites:r%2===0&&r!==0&&r<12?[r,r-1]:[],countryOfOrigin:r%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"},countryOfOriginName:r%2?"Canada":"United States",cityOfOrigin:r%2?"Vancouver, BC, Canada":"Boston, MA, United States"});}return i}randomBetween(t,o){return Math.floor(Math.random()*(o-t+1)+t)}onCellChanged(t,o){this.updatedObject=o.item;}onCellClicked(t,o){let i=this.angularGrid.gridService.getColumnFromEventArguments(o);console.log(i),i.columnDef.id==="edit"?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.angularGrid.gridService.highlightRow(o.row,1500)):i.columnDef.id==="delete"&&confirm("Are you sure?")&&this.angularGrid.gridService.deleteItemById(i.dataContext.id);}onValidationError(t,o){o.validationResults&&a$1(o.validationResults.msg,"danger");}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.gridObj?.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),true}dynamicallyAddTitleHeader(){let t={id:`title${this.duplicateTitleHeaderCount++}`,name:"Title",field:"title",editor:{model:MM.text,required:true,validator:I},sortable:true,minWidth:100,filterable:true};this.columns.push(t),this.columns=this.columns.slice();}dynamicallyRemoveLastColumn(){this.columns.pop(),this.columns=this.columns.slice();}setAutoEdit(t){return this.isAutoEdit=t,this.gridObj?.setOptions({autoEdit:t}),true}undo(){let t=this._commandQueue.pop();t&&xi.cancelCurrentEdit()&&(t.undo(),this.gridObj?.gotoCell(t.row,t.cell,false));}toggleSubTitle(){this.hideSubTitle=!this.hideSubTitle;let t=this.hideSubTitle?"add":"remove";document.querySelector(".subtitle")?.classList[t]("hidden"),this.angularGrid.resizerService.resizeGrid(0);}static{this.\u0275fac=function(o){return new(o||s)};}static{this.\u0275cmp=bI({type:s,selectors:[["ng-component"]],decls:141,vars:8,consts:[["id","demo-container",1,"container-fluid"],[1,"float-end"],["target","_blank","href","https://github.com/ghiscoding/slickgrid-universal/blob/master/frameworks/angular-slickgrid/src/demos/examples/example03.component.ts",2,"font-size","18px"],[1,"mdi","mdi-link-variant"],["type","button","data-test","toggle-subtitle",1,"ms-2","btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Toggle example sub-title details",1,"mdi","mdi-information-outline"],[1,"subtitle"],["href","https://ghiscoding.gitbook.io/angular-slickgrid/column-functionalities/editors","target","_blank"],[1,"row"],[1,"col-sm-6"],["id","radioAutoEdit"],["for","radioTrue",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","id","radioTrue","checked","",3,"change","value"],["for","radioFalse",1,"radio-inline","control-label"],["type","radio","name","inlineRadioOptions","id","radioFalse",3,"change","value"],[1,"row","col-sm-12"],["data-test","undo-btn",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-undo"],["for","autoCommitEdit",1,"checkbox-inline","control-label"],["type","checkbox","id","autoCommitEdit","data-test","auto-commit",3,"click","checked"],[1,"row",2,"margin-top","5px"],[1,"col-sm-12"],[1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],["title","Clear Filters & Sorting to see it better",1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],["data-test","add-title-column",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-shape-square-plus"],["data-test","remove-title-column",1,"btn","btn-outline-secondary","btn-sm","btn-icon",3,"click"],[1,"mdi","mdi-minus"],["gridId","grid3",3,"onAngularGridCreated","onCellChange","onClick","onValidationError","columns","options","dataset"],[1,"alert","alert-info"],[1,"alert","alert-warning"]],template:function(o,i){o&1&&(ui(0,"div",0),UE(1,`
  `),ui(2,"h2"),UE(3,`
    Example 3: Editors / Delete
    `),ui(4,"span",1),UE(5,`
      `),ui(6,"a",2),UE(7,`
        `),cp(8,"span",3),UE(9,` code
      `),Tc(),UE(10,`
    `),Tc(),UE(11,`
    `),ui(12,"button",4),pp("click",function(){return i.toggleSubTitle()}),UE(13,`
      `),cp(14,"span",5),UE(15,`
    `),Tc(),UE(16,`
  `),Tc(),UE(17,`
  `),ui(18,"div",6),UE(19,`
    Grid with Inline Editors and onCellClick actions (`),ui(20,"a",7),UE(21,"Wiki docs"),Tc(),UE(22,`).
    `),ui(23,"ul"),UE(24,`
      `),ui(25,"li"),UE(26,`
        Multiple Editors & Filters are available: AutoComplete, Checkbox, Date, Slider, SingleSelect, MultipleSelect, Float, Text,
        LongText... even Custom Editor
      `),Tc(),UE(27,`
      `),ui(28,"li"),UE(29,'When using "enableCellNavigation: true", clicking on a cell will automatically make it active & selected.'),Tc(),UE(30,`
      `),ui(31,"ul"),UE(32,`
        `),ui(33,"li"),UE(34,`If you don't want this behavior, then you should disable "enableCellNavigation"`),Tc(),UE(35,`
      `),Tc(),UE(36,`
      `),ui(37,"li"),UE(38,'Inline Editors requires "enableCellNavigation: true" (not sure why though)'),Tc(),UE(39,`
      `),ui(40,"li"),UE(41,`
        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag. Note that
        it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExportOptions" or the column definition)
      `),Tc(),UE(42,`
      `),ui(43,"li"),UE(44,'MultipleSelect & SingeSelect Editors & Filters can use a regular "collection" or "collectionAsync" to load it asynchronously'),Tc(),UE(45,`
      `),ui(46,"ul"),UE(47,`
        `),ui(48,"li"),UE(49,'Click on "Add Item" and see the Editor/Filter or the "Prerequesites" column change'),Tc(),UE(50,`
        `),ui(51,"li"),UE(52,'Any Editor/Filter with a "collection" can be changed dynamically later in the future'),Tc(),UE(53,`
      `),Tc(),UE(54,`
    `),Tc(),UE(55,`
  `),Tc(),UE(56,`

  `),ui(57,"div",8),UE(58,`
    `),ui(59,"div",9),UE(60,`
      `),ui(61,"label"),UE(62,"autoEdit setting: "),Tc(),UE(63,`
      `),ui(64,"span",10),UE(65,`
        `),ui(66,"label",11),UE(67,`
          `),ui(68,"input",12),pp("change",function(){return i.setAutoEdit(true)}),Tc(),UE(69,` ON
          (single-click)
        `),Tc(),UE(70,`
        `),ui(71,"label",13),UE(72,`
          `),ui(73,"input",14),pp("change",function(){return i.setAutoEdit(false)}),Tc(),UE(74,` OFF
          (double-click)
        `),Tc(),UE(75,`
      `),Tc(),UE(76,`
      `),ui(77,"div",15),UE(78,`
        `),ui(79,"span"),UE(80,`
          `),ui(81,"button",16),pp("click",function(){return i.undo()}),UE(82,`
            `),cp(83,"i",17),UE(84,`
            Undo last edit(s)
          `),Tc(),UE(85,`
          `),ui(86,"label",18),UE(87,`
            `),ui(88,"input",19),pp("click",function(){return i.changeAutoCommit()}),Tc(),UE(89,`
            Auto Commit Edit
          `),Tc(),UE(90,`
        `),Tc(),UE(91,`
      `),Tc(),UE(92,`
      `),ui(93,"div",20),UE(94,`
        `),ui(95,"div",21),UE(96,`
          `),ui(97,"button",22),pp("click",function(){return i.angularGrid.filterService.clearFilters()}),UE(98,`
            Clear Filters
          `),Tc(),UE(99,`
          `),ui(100,"button",22),pp("click",function(){return i.angularGrid.sortService.clearSorting()}),UE(101,"Clear Sorting"),Tc(),UE(102,`
          `),ui(103,"button",23),pp("click",function(){return i.addItem()}),UE(104,`
            Add item
          `),Tc(),UE(105,`
          `),ui(106,"button",24),pp("click",function(){return i.deleteItem()}),UE(107,"Delete item"),Tc(),UE(108,`
        `),Tc(),UE(109,`
      `),Tc(),UE(110,`
      `),ui(111,"div",20),UE(112,`
        `),ui(113,"div",21),UE(114,`
          `),ui(115,"button",25),pp("click",function(){return i.dynamicallyAddTitleHeader()}),UE(116,`
            `),cp(117,"i",26),UE(118,`
            Dynamically Duplicate Title Column
          `),Tc(),UE(119,`
          `),ui(120,"button",27),pp("click",function(){return i.dynamicallyRemoveLastColumn()}),UE(121,`
            `),cp(122,"i",28),UE(123,`
            Dynamically Remove Last Column
          `),Tc(),UE(124,`
        `),Tc(),UE(125,`
      `),Tc(),UE(126,`
    `),Tc(),UE(127,`

    `),ui(128,"div",9),UE(129,`
      `),ZI(130,Y,7,3),ZI(131,Q,6,1),Tc(),UE(132,`
  `),Tc(),UE(133,`

  `),ui(134,"div",21),UE(135,`
    `),ui(136,"angular-slickgrid",29),pp("onAngularGridCreated",function(d){return i.angularGridReady(d.detail)})("onCellChange",function(d){return i.onCellChanged(d.detail.eventData,d.detail.args)})("onClick",function(d){return i.onCellClicked(d.detail.eventData,d.detail.args)})("onValidationError",function(d){return i.onValidationError(d.detail.eventData,d.detail.args)}),UE(137,`
    `),Tc(),UE(138,`
  `),Tc(),UE(139,`
`),Tc(),UE(140,`
`)),o&2&&(Wy(68),ap("value",i.isAutoEdit),Wy(5),ap("value",i.isAutoEdit),Wy(15),ap("checked",i.gridOptions.autoCommitEdit),Wy(42),YI(i.updatedObject?130:-1),Wy(),YI(i.alertWarning?131:-1),Wy(5),ap("columns",i.columns)("options",i.gridOptions)("dataset",i.dataset));},dependencies:[j1,Bp],encapsulation:2});}}return s})();export{he as Example3Component};
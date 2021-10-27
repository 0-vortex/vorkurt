"use strict";(self.webpackChunkvorkurt=self.webpackChunkvorkurt||[]).push([[133],{6133:(Ce,T,c)=>{c.r(T),c.d(T,{NewRepoModule:()=>Ae});var k=c(8583),Z=c(4419),e=c(7716),h=c(9765),S=c(6782);let p=(()=>{class n{constructor(){this._templateData=new h.xQ,this._templateUserName=new h.xQ,this._templateRepositoryName=new h.xQ,this._templateDescription=new h.xQ,this._templateRepository=new h.xQ,this.templateData$=this._templateData.asObservable(),this.templateUserName$=this._templateUserName.asObservable(),this.templateRepositoryName$=this._templateRepositoryName.asObservable(),this.templateDescription$=this._templateDescription.asObservable(),this.templateRepositoryAvailable$=this._templateRepository.asObservable()}sendDataOnObservable(t){this._templateData.next(t)}sendUserNameOnObservable(t){this._templateUserName.next(t)}sendRepositoryNameOnObservable(t){this._templateRepositoryName.next(t)}sendDescriptionNameOnObservable(t){this._templateDescription.next(t)}sendRepositoryAvailableOnObservable(t){this._templateRepository.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var D=c(6215);let A=(()=>{class n{constructor(){this._newRepo=new D.X([]),this.newRepo$=this._newRepo.asObservable()}newRepoRetriveData(t){this._newRepo.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var _=c(531),f=c(281),C=c(8753),v=c(5384),g=c(6627);function G(n,a){1&n&&e._UZ(0,"mat-icon",9),2&n&&e.Q6J("svgIcon","fa_solid:check")}function F(n,a){if(1&n&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",t.icon,e.LSH)}}function E(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().onClick(r)}),e.TgZ(1,"div",4),e.YNc(2,G,1,1,"mat-icon",5),e.qZA(),e.YNc(3,F,2,1,"div",6),e.TgZ(4,"div",7),e.TgZ(5,"button",8),e._uU(6),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=a.$implicit;e.xp6(2),e.Q6J("ngIf",t.check),e.xp6(1),e.Q6J("ngIf",t),e.xp6(3),e.Oqu(t.template)}}let V=(()=>{class n{constructor(t,o,i,r){this._sendTemplate=t,this._newRepository=o,this._overlayService=i,this._dbCon=r,this.unSubscribe=new h.xQ}ngOnInit(){this._newRepository.newRepo$.pipe((0,S.R)(this.unSubscribe)).subscribe(t=>{this.dataTemplate=t})}onClick(t){t.check=!0,this._dbCon.updateData(t).then(o=>{o&&(this._sendTemplate.sendDataOnObservable(t.template),this._overlayService.closeOverlay())})}ngOnDestroy(){this.unSubscribe.next(),this.unSubscribe.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p),e.Y36(A),e.Y36(_.F),e.Y36(f.M))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-template-repository"]],decls:3,vars:2,consts:[[1,"mt-2","flex","vorkurt__container-template",3,"type"],[1,""],["class","flex items-start flex cursor-pointer p-0.5 items-stretch hover:w-96",3,"click",4,"ngFor","ngForOf"],[1,"flex","items-start","flex","cursor-pointer","p-0.5","items-stretch","hover:w-96",3,"click"],[1,"w-10","flex","items-center"],[3,"svgIcon",4,"ngIf"],["class","w-6 flex items-center",4,"ngIf"],[1,"flex","items-center"],["mat-menu-item","",1,"vorkurt__color-text","font-bold"],[3,"svgIcon"],[1,"w-6","flex","items-center"],[3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"elix-jumbotron",0),e.TgZ(1,"div",1),e.YNc(2,E,7,3,"div",2),e.qZA(),e.qZA()),2&t&&(e.Q6J("type","template"),e.xp6(2),e.Q6J("ngForOf",o.dataTemplate))},directives:[C.w,k.sg,k.O5,v.OP,g.Hw],styles:[".vorkurt__container-template[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background:#316dca}.vorkurt__container-template[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{color:#adbac7}.vorkurt__container-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}"]}),n})();var x=c(1095);const Q=["button"];let J=(()=>{class n{constructor(t,o){this._overlayAll=t,this._dataSendedTemplate=o}ngOnInit(){this._dataSendedTemplate.templateData$.subscribe(t=>this.dataTemplate=t)}openService(t){this._overlayAll.display(this.button,V)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.F),e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-header-new-repo"]],viewQuery:function(t,o){if(1&t&&e.Gf(Q,5),2&t){let i;e.iGM(i=e.CRH())&&(o.button=i.first)}},decls:29,vars:2,consts:[[1,"pt-12","vorkurt__color-text","font-normal"],[1,"pb-5","vorkurt__border-bottom","mb-6"],[1,"text-2xl","font-normal"],[1,"md:block","xl:flex"],[1,"vorkurt__header__width-container"],[1,"leading-4","racking-widest","vorkurt__color-text-line","vorkurt__text-size-secondary","w-44","xl:w-full"],[1,"xs:bg-blue-700","xl:w-1/12","text-blue-500","underline","cursor-pointer","racking-widest","leading-4"],[1,"vorkurt__border-bottom","pb-5","mb-6","vorkurt__border-bottom"],[1,"flex","flex-col"],[1,"text-base","m-0"],[1,"vorkurt__color-text-line"],[1,"pt-6"],[1,"w-36"],["button",""],["mat-raised-button","",1,"w-max","flex","vorkurt__color-background","vorkurt__color-text","text-base","font-normal","vorkurt__border-color","vorkurt__header-newRepo-header",2,"padding-left","2px",3,"click"],[1,"flex","mx-2"],[1,"flex","fixed",3,"svgIcon"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"p"),e._uU(5," Create New Repository "),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"div",4),e.TgZ(8,"p",5),e._uU(9," A repository contains all project files, including the revision history. Already have a project repository elsewhere? "),e.qZA(),e.qZA(),e.TgZ(10,"div",6),e.TgZ(11,"p"),e._uU(12," Import a repository "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",7),e.TgZ(14,"div"),e.TgZ(15,"div",8),e.TgZ(16,"span",9),e._uU(17,"Repository template"),e.qZA(),e.TgZ(18,"span",10),e._uU(19,"Start your repository with a template repository's contents."),e.qZA(),e.qZA(),e.TgZ(20,"div",11),e.TgZ(21,"div",12,13),e.TgZ(23,"button",14),e.NdJ("click",function(r){return o.openService(r)}),e.TgZ(24,"div",15),e.TgZ(25,"div"),e._uU(26),e.qZA(),e.TgZ(27,"div"),e._UZ(28,"mat-icon",16),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(26),e.hij(" ",o.dataTemplate?o.dataTemplate:"No template"," "),e.xp6(2),e.Q6J("svgIcon","fa_solid:sort-down"))},directives:[x.lW,g.Hw],styles:[".vorkurt__header__width-container[_ngcontent-%COMP%]{width:35.333333rem}.vorkurt__header-newRepo-header[_ngcontent-%COMP%]   mat-button-wrapper[_ngcontent-%COMP%]{display:flex;background:red}"]}),n})();var Y=c(8382);function L(n,a){1&n&&e._UZ(0,"div",9)}function j(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"elix-jumbotron",1),e.TgZ(1,"div",2),e.TgZ(2,"div",3),e.NdJ("click",function(){return e.CHM(t),e.oxw().onClick()}),e.TgZ(3,"div",4),e._UZ(4,"mat-icon",5),e.qZA(),e.YNc(5,L,1,0,"div",6),e.TgZ(6,"div",7),e.TgZ(7,"button",8),e._uU(8),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("type","template"),e.xp6(4),e.Q6J("svgIcon","fa_solid:check"),e.xp6(4),e.Oqu(t.usersName.user.email)}}let P=(()=>{class n{constructor(t,o,i){this._templateRepository=t,this._localStoarage=o,this._overlayGlobal=i}ngOnInit(){this.usersName=JSON.parse(this._localStoarage.getResource("user"))}onClick(){this._templateRepository.sendUserNameOnObservable(this.usersName.user.email),this._overlayGlobal.closeOverlay()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p),e.Y36(Y._),e.Y36(_.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-user-name-repository"]],decls:1,vars:1,consts:[["class","mt-2 flex vorkurt__container-template",3,"type",4,"ngIf"],[1,"mt-2","flex","vorkurt__container-template",3,"type"],[1,""],[1,"flex","items-start","flex","cursor-pointer","p-0.5","items-stretch","hover:w-96",3,"click"],[1,"w-10","flex","items-center"],[3,"svgIcon"],["class","w-6 flex items-center",4,"ngIf"],[1,"flex","items-center"],["mat-menu-item","",1,"vorkurt__color-text","font-bold"],[1,"w-6","flex","items-center"]],template:function(t,o){1&t&&e.YNc(0,j,9,3,"elix-jumbotron",0),2&t&&e.Q6J("ngIf",o.usersName)},directives:[k.O5,C.w,g.Hw,v.OP],styles:[""]}),n})();var d=c(9490),b=c(3679),s=c(2458),H=c(6237),R=c(8553),M=c(9238);const z=["input"],$=function(n){return{enterDuration:n}},X=["*"],K=new e.OlP("mat-checkbox-default-options",{providedIn:"root",factory:w});function w(){return{color:"accent",clickAction:"check-indeterminate"}}let W=0;const q=w(),ee={provide:b.JU,useExisting:(0,e.Gpc)(()=>y),multi:!0};class te{}const oe=(0,s.sb)((0,s.pj)((0,s.Kr)((0,s.Id)(class{constructor(n){this._elementRef=n}}))));let y=(()=>{class n extends oe{constructor(t,o,i,r,l,m,u){super(t),this._changeDetectorRef=o,this._focusMonitor=i,this._ngZone=r,this._animationMode=m,this._options=u,this.ariaLabel="",this.ariaLabelledby=null,this._uniqueId="mat-checkbox-"+ ++W,this.id=this._uniqueId,this.labelPosition="after",this.name=null,this.change=new e.vpe,this.indeterminateChange=new e.vpe,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||q,this.color=this.defaultColor=this._options.color||q.color,this.tabIndex=parseInt(l)||0}get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(t){this._required=(0,d.Ig)(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t||Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}),this._syncIndeterminate(this._indeterminate)}ngAfterViewChecked(){}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}get checked(){return this._checked}set checked(t){t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){const o=(0,d.Ig)(t);o!==this.disabled&&(this._disabled=o,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(t){const o=t!=this._indeterminate;this._indeterminate=(0,d.Ig)(t),o&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(t){let o=this._currentCheckState,i=this._elementRef.nativeElement;if(o!==t&&(this._currentAnimationClass.length>0&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(o,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);const r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r)},1e3)})}}_emitChangeEvent(){const t=new te;t.source=this,t.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(t),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked}_onInputClick(t){var o;const i=null===(o=this._options)||void 0===o?void 0:o.clickAction;t.stopPropagation(),this.disabled||"noop"===i?!this.disabled&&"noop"===i&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==i&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this.toggle(),this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}focus(t,o){t?this._focusMonitor.focusVia(this._inputElement,t,o):this._inputElement.nativeElement.focus(o)}_onInteractionEvent(t){t.stopPropagation()}_getAnimationClassForCheckStateTransition(t,o){if("NoopAnimations"===this._animationMode)return"";let i="";switch(t){case 0:if(1===o)i="unchecked-checked";else{if(3!=o)return"";i="unchecked-indeterminate"}break;case 2:i=1===o?"unchecked-checked":"unchecked-indeterminate";break;case 1:i=2===o?"checked-unchecked":"checked-indeterminate";break;case 3:i=1===o?"indeterminate-checked":"indeterminate-unchecked"}return`mat-checkbox-anim-${i}`}_syncIndeterminate(t){const o=this._inputElement;o&&(o.nativeElement.indeterminate=t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(M.tE),e.Y36(e.R0b),e.$8M("tabindex"),e.Y36(H.Qb,8),e.Y36(K,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,o){if(1&t&&(e.Gf(z,5),e.Gf(s.wG,5)),2&t){let i;e.iGM(i=e.CRH())&&(o._inputElement=i.first),e.iGM(i=e.CRH())&&(o.ripple=i.first)}},hostAttrs:[1,"mat-checkbox"],hostVars:12,hostBindings:function(t,o){2&t&&(e.Ikx("id",o.id),e.uIk("tabindex",null),e.ekj("mat-checkbox-indeterminate",o.indeterminate)("mat-checkbox-checked",o.checked)("mat-checkbox-disabled",o.disabled)("mat-checkbox-label-before","before"==o.labelPosition)("_mat-animation-noopable","NoopAnimations"===o._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],id:"id",labelPosition:"labelPosition",name:"name",required:"required",checked:"checked",disabled:"disabled",indeterminate:"indeterminate",ariaDescribedby:["aria-describedby","ariaDescribedby"],value:"value"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[e._Bn([ee]),e.qOj],ngContentSelectors:X,decls:17,vars:21,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24",0,"xml","space","preserve","aria-hidden","true",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(t,o){if(1&t&&(e.F$t(),e.TgZ(0,"label",0,1),e.TgZ(2,"span",2),e.TgZ(3,"input",3,4),e.NdJ("change",function(r){return o._onInteractionEvent(r)})("click",function(r){return o._onInputClick(r)}),e.qZA(),e.TgZ(5,"span",5),e._UZ(6,"span",6),e.qZA(),e._UZ(7,"span",7),e.TgZ(8,"span",8),e.O4$(),e.TgZ(9,"svg",9),e._UZ(10,"path",10),e.qZA(),e.kcU(),e._UZ(11,"span",11),e.qZA(),e.qZA(),e.TgZ(12,"span",12,13),e.NdJ("cdkObserveContent",function(){return o._onLabelTextChange()}),e.TgZ(14,"span",14),e._uU(15,"\xa0"),e.qZA(),e.Hsn(16),e.qZA(),e.qZA()),2&t){const i=e.MAs(1),r=e.MAs(13);e.uIk("for",o.inputId),e.xp6(2),e.ekj("mat-checkbox-inner-container-no-side-margin",!r.textContent||!r.textContent.trim()),e.xp6(1),e.Q6J("id",o.inputId)("required",o.required)("checked",o.checked)("disabled",o.disabled)("tabIndex",o.tabIndex),e.uIk("value",o.value)("name",o.name)("aria-label",o.ariaLabel||null)("aria-labelledby",o.ariaLabelledby)("aria-checked",o._getAriaChecked())("aria-describedby",o.ariaDescribedby),e.xp6(2),e.Q6J("matRippleTrigger",i)("matRippleDisabled",o._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",e.VKq(19,$,"NoopAnimations"===o._animationMode?0:150))}},directives:[s.wG,R.wD],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-ripple{outline:solid 3px}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}\n"],encapsulation:2,changeDetection:0}),n})(),O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})(),ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.si,s.BQ,R.Q8,O],s.BQ,O]}),n})();const re=["userName"];let ce=(()=>{class n{constructor(t,o){this._overlayAll=t,this._templateRepository=o}ngOnInit(){this._templateRepository.templateUserName$.subscribe(t=>this.user=t)}openServices(t){this._overlayAll.display(this.middle,P)}setDescription(t){var o;this._templateRepository.sendDescriptionNameOnObservable(null!==(o=t.target.value)&&void 0!==o?o:"")}setRepositoryName(t){this._templateRepository.sendRepositoryNameOnObservable(t.target.value)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.F),e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-middle"]],viewQuery:function(t,o){if(1&t&&e.Gf(re,5),2&t){let i;e.iGM(i=e.CRH())&&(o.middle=i.first)}},decls:55,vars:4,consts:[[1,"vorkurt__border-bottom","pb-5","mb-6"],[1,"flex"],[1,"w-44"],[1,"text-red-600"],[1,"flex","pt-1","mb-2"],["userName",""],["mat-raised-button","",1,"w-max","flex","vorkurt__color-background","vorkurt__color-text","text-base","font-normal","vorkurt__border-color","vorkurt__header-newRepo-header",2,"padding-left","2px",3,"click"],[1,"flex","mx-2"],[1,"flex","fixed",3,"svgIcon"],[1,"flex","items-center","mx-2","text-3xl","mr-4"],[1,"h-8","-ml-2","pr-2","w-72"],["type","text","name","price","id","repo",1,"focus:vorkurt__border-input","h-9","vorkurt__background-primary","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","pl-4","pr-12","sm:text-sm","border-gray-300","rounded-md",3,"change"],[1,"mb-2"],[1,"mt-5"],[1,"text-base","font-normal"],["type","text","name","price","id","description",1,"focus:vorkurt__border-input","h-9","vorkurt__background-primary","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","pl-4","pr-12","sm:text-sm","border-gray-300","rounded-md",3,"change"],[1,"flex","vorkurt__border-bottom","pb-5","mb-6"],[1,"flex","flex-col"],[1,"example-margin"],[1,"flex","justify-center","items-center","mr-2"],[1,"text-white","vorkurt__size-icon","text-xl",3,"svgIcon"],[1,"h-3","text-base"],[1,"example-margin","my-3"],[1,"text-white","vorkurt__size-icon",3,"svgIcon"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"span"),e._uU(4," Owner "),e.TgZ(5,"span",3),e._uU(6," * "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div"),e.TgZ(8,"span"),e._uU(9," Repository Name "),e.TgZ(10,"span",3),e._uU(11," * "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",4),e.TgZ(13,"div",null,5),e.TgZ(15,"button",6),e.NdJ("click",function(r){return o.openServices(r)}),e.TgZ(16,"div",7),e.TgZ(17,"div"),e._uU(18),e.qZA(),e.TgZ(19,"div"),e._UZ(20,"mat-icon",8),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",9),e.TgZ(22,"span"),e._uU(23," / "),e.qZA(),e.qZA(),e.TgZ(24,"div",1),e.TgZ(25,"div",10),e.TgZ(26,"input",11),e.NdJ("change",function(r){return o.setRepositoryName(r)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"div",12),e._uU(28," Great repository names are short an memorable. Need inspiration? How about musical-umbrella? "),e.qZA(),e.TgZ(29,"div",13),e.TgZ(30,"div",14),e.TgZ(31,"span"),e._uU(32,"Description (optional)"),e.qZA(),e.qZA(),e.TgZ(33,"input",15),e.NdJ("change",function(r){return o.setDescription(r)}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",16),e.TgZ(35,"div"),e.TgZ(36,"section",17),e.TgZ(37,"mat-checkbox",18),e.TgZ(38,"div",1),e.TgZ(39,"div",19),e._UZ(40,"mat-icon",20),e.qZA(),e.TgZ(41,"div",17),e.TgZ(42,"span",21),e._uU(43," Public "),e.qZA(),e.TgZ(44,"span"),e._uU(45," Anyone on the internet can see this repository. You choose who can commit. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(46,"mat-checkbox",22),e.TgZ(47,"div",1),e.TgZ(48,"div",19),e._UZ(49,"mat-icon",23),e.qZA(),e.TgZ(50,"div",17),e.TgZ(51,"span",21),e._uU(52," Private "),e.qZA(),e.TgZ(53,"span"),e._uU(54," You choose who can see and commit to this repository "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(18),e.hij(" ",o.user?o.user:"User Name"," "),e.xp6(2),e.Q6J("svgIcon","fa_solid:sort-down"),e.xp6(20),e.Q6J("svgIcon","fa_solid:book"),e.xp6(9),e.Q6J("svgIcon","fa_solid:lock"))},directives:[x.lW,g.Hw,y],styles:[""]}),n})(),se=(()=>{class n{constructor(t,o){this._templateRepository=t,this._connectionServiceFirebase=o}ngOnInit(){this._templateRepository.templateUserName$.subscribe(t=>this.owner=t),this._templateRepository.templateData$.subscribe(t=>this.template=t),this._templateRepository.templateRepositoryName$.subscribe(t=>this.repositoryName=t),this._templateRepository.templateDescription$.subscribe(t=>this.description=t),this._templateRepository.templateRepositoryAvailable$.subscribe(t=>this.available=t)}onSubmit(){var t,o,i,r,l;let m={template:null!==(t=this.template)&&void 0!==t?t:"",owner:null!==(o=this.owner)&&void 0!==o?o:"",repositoryName:null!==(i=this.repositoryName)&&void 0!==i?i:"",description:null!==(r=this.description)&&void 0!==r?r:"",available:null!==(l=this.available)&&void 0!==l&&l};this._connectionServiceFirebase.createRepository(m).then(u=>console.log(u))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p),e.Y36(f.M))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-bottom"]],decls:41,vars:0,consts:[[1,"text-base","vorkurt__border-bottom","mb-6"],[1,"font-bold","flex","flex-col"],[1,"text-sm","vorkurt__color-text-line"],[1,"example-margin","my-3"],[1,"flex"],[1,"flex","flex-col"],[1,"h-3","text-base","mb-2"],[1,"mb-6","flex","h-7","items-center","justify-center","vorkurt__background-button","w-1/4","rounded-lg","ml-2","mr-2","cursor-pointer"],[1,"flex","justify-center","vorkurt__background-button"],[1,"ml-2",3,"click"],[1,"font-normal","text-base"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e.TgZ(3,"span"),e._uU(4,"Initialize this repository with:"),e.qZA(),e.qZA(),e.TgZ(5,"div",2),e.TgZ(6,"span"),e._uU(7,"Skip this step if you\u2019re importing an existing repository."),e.qZA(),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"mat-checkbox",3),e.TgZ(10,"div",4),e.TgZ(11,"div",5),e.TgZ(12,"span",6),e._uU(13," Add a README file "),e.qZA(),e.TgZ(14,"span"),e._uU(15," This is where you can write a long description for your project. Learn more. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div"),e.TgZ(17,"mat-checkbox",3),e.TgZ(18,"div",4),e.TgZ(19,"div",5),e.TgZ(20,"span",6),e._uU(21," Add .gitignore "),e.qZA(),e.TgZ(22,"span"),e._uU(23," Choose which files not to track from a list of templates. Learn more. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"div"),e.TgZ(25,"mat-checkbox",3),e.TgZ(26,"div",4),e.TgZ(27,"div",5),e.TgZ(28,"span",6),e._uU(29," Choose a license "),e.qZA(),e.TgZ(30,"span"),e._uU(31," A license tells others what they can and can't do with your code. Learn more. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"div"),e.TgZ(33,"div"),e.TgZ(34,"span"),e._uU(35," This will set main as the default branch. Change the default name in your settings. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div",7),e.TgZ(37,"button",8),e.TgZ(38,"div",9),e.NdJ("click",function(){return o.onSubmit()}),e.TgZ(39,"span",10),e._uU(40,"Create Repository"),e.qZA(),e.qZA(),e.qZA(),e.qZA())},directives:[y],styles:[""]}),n})(),le=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-new-repo"]],decls:6,vars:0,consts:[[1,"vorkurt__height-account","vorkurt__color-text","font-normal"],[1,"flex","justify-center","h-full"],[1,"w-1/3"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"elix-header-new-repo"),e._UZ(4,"elix-middle"),e._UZ(5,"elix-bottom"),e.qZA(),e.qZA(),e.qZA())},directives:[J,ce,se],styles:[""]}),n})();var de=c(8002);const me=[{path:"",component:le,resolve:{newRepo:(()=>{class n{constructor(t,o){this._firebase=t,this._newRepository=o,this._firebase.setUrl("/template")}resolve(t,o){this._firebase.setUrl("hhhhh/khjhjhjhtemplate"),this._firebase.data.snapshotChanges().pipe((0,de.U)(i=>i.map(r=>{let l=r.payload.doc.data();return{template:l.template,id:r.payload.doc.id,check:l.check,icon:l.icon}}))).subscribe(i=>this._newRepository.newRepoRetriveData(i))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f.M),e.LFG(A))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let ue=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[Z.Bz.forChild(me)],Z.Bz]}),n})();var he=c(9983),pe=c(8295),ge=c(4466),be=c(3461);c(8345);let Ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.BQ,s.si],s.BQ]}),n})(),Ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[k.ez,ue,x.ot,g.Ps,he.c,pe.lN,ae,ge.m,be._t,Ze,v.Tx,b.u5]]}),n})()}}]);
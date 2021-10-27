"use strict";(self.webpackChunkvorkurt=self.webpackChunkvorkurt||[]).push([[983],{9983:(P,R,r)=>{r.d(R,{Nt:()=>D,c:()=>N});var u=r(521),s=r(7716),d=r(9490),T=r(9193),_=r(9765);r(2759),r(628),r(6782),r(8583);const y=(0,u.i$)({passive:!0});let M=(()=>{class i{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return T.E;const t=(0,d.fI)(e),n=this._monitoredElements.get(t);if(n)return n.subject;const a=new _.xQ,l="cdk-text-field-autofilled",h=c=>{"cdk-text-field-autofill-start"!==c.animationName||t.classList.contains(l)?"cdk-text-field-autofill-end"===c.animationName&&t.classList.contains(l)&&(t.classList.remove(l),this._ngZone.run(()=>a.next({target:c.target,isAutofilled:!1}))):(t.classList.add(l),this._ngZone.run(()=>a.next({target:c.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",h,y),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:a,unlisten:()=>{t.removeEventListener("animationstart",h,y)}}),a}stopMonitoring(e){const t=(0,d.fI)(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return i.\u0275fac=function(e){return new(e||i)(s.LFG(u.t4),s.LFG(s.R0b))},i.\u0275prov=s.Yz7({factory:function(){return new i(s.LFG(u.t4),s.LFG(s.R0b))},token:i,providedIn:"root"}),i})(),A=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({imports:[[u.ud]]}),i})();var m=r(2458),p=r(8295),g=r(3679);const k=new s.OlP("MAT_INPUT_VALUE_ACCESSOR"),F=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let L=0;const B=(0,m.FD)(class{constructor(i,o,e,t){this._defaultErrorStateMatcher=i,this._parentForm=o,this._parentFormGroup=e,this.ngControl=t}});let D=(()=>{class i extends B{constructor(e,t,n,a,l,h,c,S,O,E){super(h,a,l,n),this._elementRef=e,this._platform=t,this._autofillMonitor=S,this._formField=E,this._uid="mat-input-"+L++,this.focused=!1,this.stateChanges=new _.xQ,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(x=>(0,u.qK)().has(x));const v=this._elementRef.nativeElement,w=v.nodeName.toLowerCase();this._inputValueAccessor=c||v,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&O.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",x=>{const f=x.target;!f.value&&0===f.selectionStart&&0===f.selectionEnd&&(f.setSelectionRange(1,1),f.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===w,this._isTextarea="textarea"===w,this._isInFormField=!!E,this._isNativeSelect&&(this.controlType=v.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=(0,d.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required}set required(e){this._required=(0,d.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,u.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,d.Ig)(e)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var e,t;const n=(null===(t=null===(e=this._formField)||void 0===e?void 0:e._hideControlPlaceholder)||void 0===t?void 0:t.call(e))?null:this.placeholder;if(n!==this._previousPlaceholder){const a=this._elementRef.nativeElement;this._previousPlaceholder=n,n?a.setAttribute("placeholder",n):a.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_validateType(){F.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}}return i.\u0275fac=function(e){return new(e||i)(s.Y36(s.SBq),s.Y36(u.t4),s.Y36(g.a5,10),s.Y36(g.F,8),s.Y36(g.sg,8),s.Y36(m.rD),s.Y36(k,10),s.Y36(M),s.Y36(s.R0b),s.Y36(p.G_,8))},i.\u0275dir=s.lG2({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(e,t){1&e&&s.NdJ("focus",function(){return t._focusChanged(!0)})("blur",function(){return t._focusChanged(!1)})("input",function(){return t._onInput()}),2&e&&(s.Ikx("disabled",t.disabled)("required",t.required),s.uIk("id",t.id)("data-placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-invalid",t.empty&&t.required?null:t.errorState)("aria-required",t.required),s.ekj("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[s._Bn([{provide:p.Eo,useExisting:i}]),s.qOj,s.TTD]}),i})(),N=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({providers:[m.rD],imports:[[A,p.lN,m.BQ],A,p.lN]}),i})()}}]);
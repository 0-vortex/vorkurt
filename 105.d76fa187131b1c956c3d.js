"use strict";(self.webpackChunkvorkurt=self.webpackChunkvorkurt||[]).push([[105],{7105:(ue,y,s)=>{s.r(y),s.d(y,{NewRepoModule:()=>ce});var b=s(8583),x=s(4419),e=s(7716),c=s(9765),N=s(6782);let u=(()=>{class n{constructor(){this._templateData=new c.xQ,this._templateUserName=new c.xQ,this._templateRepositoryName=new c.xQ,this._templateDescription=new c.xQ,this._templateRepository=new c.xQ,this.templateData$=this._templateData.asObservable(),this.templateUserName$=this._templateUserName.asObservable(),this.templateRepositoryName$=this._templateRepositoryName.asObservable(),this.templateDescription$=this._templateDescription.asObservable(),this.templateRepositoryAvailable$=this._templateRepository.asObservable()}sendDataOnObservable(t){this._templateData.next(t)}sendUserNameOnObservable(t){this._templateUserName.next(t)}sendRepositoryNameOnObservable(t){this._templateRepositoryName.next(t)}sendDescriptionNameOnObservable(t){this._templateDescription.next(t)}sendRepositoryAvailableOnObservable(t){this._templateRepository.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var O=s(6215);let A=(()=>{class n{constructor(){this._newRepo=new O.X([]),this.newRepo$=this._newRepo.asObservable()}newRepoRetriveData(t){this._newRepo.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=s(531),_=s(7118),k=s(8753),f=s(5384),p=s(6627);function U(n,i){1&n&&e._UZ(0,"mat-icon",9),2&n&&e.Q6J("svgIcon","fa_solid:check")}function B(n,i){if(1&n&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",t.icon,e.LSH)}}function S(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().onClick(r)}),e.TgZ(1,"div",4),e.YNc(2,U,1,1,"mat-icon",5),e._uU(3," TEst "),e.qZA(),e.YNc(4,B,2,1,"div",6),e.TgZ(5,"div",7),e.TgZ(6,"button",8),e._uU(7),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=i.$implicit;e.xp6(2),e.Q6J("ngIf",t.check),e.xp6(2),e.Q6J("ngIf",t),e.xp6(3),e.Oqu(t.template)}}let I=(()=>{class n{constructor(t,o,a,r){this._sendTemplate=t,this._newRepository=o,this._overlayService=a,this._dbCon=r,this.unSubscribe=new c.xQ}ngOnInit(){this._newRepository.newRepo$.pipe((0,N.R)(this.unSubscribe)).subscribe(t=>{this.dataTemplate=t})}onClick(t){t.check=!0,this._dbCon.updateData(t).then(o=>{o&&(this._sendTemplate.sendDataOnObservable(t.template),this._overlayService.closeOverlay())})}ngOnDestroy(){this.unSubscribe.next(),this.unSubscribe.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(A),e.Y36(v.F),e.Y36(_.M))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-template-repository"]],decls:3,vars:2,consts:[[1,"mt-2","flex","vorkurt__container-template",3,"type"],[1,""],["class","flex items-start flex cursor-pointer p-0.5 items-stretch hover:w-96",3,"click",4,"ngFor","ngForOf"],[1,"flex","items-start","flex","cursor-pointer","p-0.5","items-stretch","hover:w-96",3,"click"],[1,"w-10","flex","items-center"],[3,"svgIcon",4,"ngIf"],["class","w-6 flex items-center",4,"ngIf"],[1,"flex","items-center"],["mat-menu-item","",1,"vorkurt__color-text","font-bold"],[3,"svgIcon"],[1,"w-6","flex","items-center"],[3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"elix-jumbotron",0),e.TgZ(1,"div",1),e.YNc(2,S,8,3,"div",2),e.qZA(),e.qZA()),2&t&&(e.Q6J("type","template"),e.xp6(2),e.Q6J("ngForOf",o.dataTemplate))},directives:[k.w,b.sg,b.O5,f.OP,p.Hw],styles:[".vorkurt__container-template[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background:#316dca}.vorkurt__container-template[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{color:#adbac7}.vorkurt__container-template[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}"]}),n})();var T=s(1095);const G=["button"];let D=(()=>{class n{constructor(t,o){this._overlayAll=t,this._dataSendedTemplate=o}ngOnInit(){this._dataSendedTemplate.templateData$.subscribe(t=>this.dataTemplate=t)}openService(t){this._overlayAll.display(this.button,I)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.F),e.Y36(u))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-header-new-repo"]],viewQuery:function(t,o){if(1&t&&e.Gf(G,5),2&t){let a;e.iGM(a=e.CRH())&&(o.button=a.first)}},decls:29,vars:2,consts:[[1,"pt-12","vorkurt__color-text","font-normal"],[1,"pb-5","vorkurt__border-bottom","mb-6"],[1,"text-2xl","font-normal"],[1,"md:block","xl:flex"],[1,"vorkurt__header__width-container"],[1,"leading-4","racking-widest","vorkurt__color-text-line","vorkurt__text-size-secondary","w-44","xl:w-full"],[1,"xs:bg-blue-700","xl:w-1/12","text-blue-500","underline","cursor-pointer","racking-widest","leading-4"],[1,"vorkurt__border-bottom","pb-5","mb-6","vorkurt__border-bottom"],[1,"flex","flex-col"],[1,"text-base","m-0"],[1,"vorkurt__color-text-line"],[1,"pt-6"],[1,"w-36"],["button",""],["mat-raised-button","",1,"w-max","flex","vorkurt__color-background","vorkurt__color-text","text-base","font-normal","vorkurt__border-color","vorkurt__header-newRepo-header",2,"padding-left","2px",3,"click"],[1,"flex","mx-2"],[1,"flex","fixed",3,"svgIcon"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"p"),e._uU(5," Create New Repository "),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"div",4),e.TgZ(8,"p",5),e._uU(9," A repository contains all project files, including the revision history. Already have a project repository elsewhere? "),e.qZA(),e.qZA(),e.TgZ(10,"div",6),e.TgZ(11,"p"),e._uU(12," Import a repository "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",7),e.TgZ(14,"div"),e.TgZ(15,"div",8),e.TgZ(16,"span",9),e._uU(17,"Repository template"),e.qZA(),e.TgZ(18,"span",10),e._uU(19,"Start your repository with a template repository's contents."),e.qZA(),e.qZA(),e.TgZ(20,"div",11),e.TgZ(21,"div",12,13),e.TgZ(23,"button",14),e.NdJ("click",function(r){return o.openService(r)}),e.TgZ(24,"div",15),e.TgZ(25,"div"),e._uU(26),e.qZA(),e.TgZ(27,"div"),e._UZ(28,"mat-icon",16),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(26),e.hij(" ",o.dataTemplate?o.dataTemplate:"No template"," "),e.xp6(2),e.Q6J("svgIcon","fa_solid:sort-down"))},directives:[T.lW,p.Hw],styles:[".vorkurt__header__width-container[_ngcontent-%COMP%]{width:35.333333rem}.vorkurt__header-newRepo-header[_ngcontent-%COMP%]   mat-button-wrapper[_ngcontent-%COMP%]{display:flex;background:red}"]}),n})();var F=s(8382);function Q(n,i){1&n&&e._UZ(0,"div",9)}function J(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"elix-jumbotron",1),e.TgZ(1,"div",2),e.TgZ(2,"div",3),e.NdJ("click",function(){return e.CHM(t),e.oxw().onClick()}),e.TgZ(3,"div",4),e._UZ(4,"mat-icon",5),e.qZA(),e.YNc(5,Q,1,0,"div",6),e.TgZ(6,"div",7),e.TgZ(7,"button",8),e._uU(8),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("type","template"),e.xp6(4),e.Q6J("svgIcon","fa_solid:check"),e.xp6(4),e.Oqu(t.usersName.user.email)}}let Y=(()=>{class n{constructor(t,o,a){this._templateRepository=t,this._localStoarage=o,this._overlayGlobal=a}ngOnInit(){this.usersName=JSON.parse(this._localStoarage.getResource("user"))}onClick(){this._templateRepository.sendUserNameOnObservable(this.usersName.user.email),this._overlayGlobal.closeOverlay()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(F._),e.Y36(v.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-user-name-repository"]],decls:1,vars:1,consts:[["class","mt-2 flex vorkurt__container-template",3,"type",4,"ngIf"],[1,"mt-2","flex","vorkurt__container-template",3,"type"],[1,""],[1,"flex","items-start","flex","cursor-pointer","p-0.5","items-stretch","hover:w-96",3,"click"],[1,"w-10","flex","items-center"],[3,"svgIcon"],["class","w-6 flex items-center",4,"ngIf"],[1,"flex","items-center"],["mat-menu-item","",1,"vorkurt__color-text","font-bold"],[1,"w-6","flex","items-center"]],template:function(t,o){1&t&&e.YNc(0,J,9,3,"elix-jumbotron",0),2&t&&e.Q6J("ngIf",o.usersName)},directives:[b.O5,k.w,p.Hw,f.OP],styles:[""]}),n})();var Z=s(7539);const P=["userName"];let E=(()=>{class n{constructor(t,o){this._overlayAll=t,this._templateRepository=o}ngOnInit(){this._templateRepository.templateUserName$.subscribe(t=>this.user=t)}openServices(t){this._overlayAll.display(this.middle,Y)}setDescription(t){var o;this._templateRepository.sendDescriptionNameOnObservable(null!==(o=t.target.value)&&void 0!==o?o:"")}setRepositoryName(t){this._templateRepository.sendRepositoryNameOnObservable(t.target.value)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.F),e.Y36(u))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-middle"]],viewQuery:function(t,o){if(1&t&&e.Gf(P,5),2&t){let a;e.iGM(a=e.CRH())&&(o.middle=a.first)}},decls:55,vars:4,consts:[[1,"vorkurt__border-bottom","pb-5","mb-6"],[1,"flex"],[1,"w-44"],[1,"text-red-600"],[1,"flex","pt-1","mb-2"],["userName",""],["mat-raised-button","",1,"w-max","flex","vorkurt__color-background","vorkurt__color-text","text-base","font-normal","vorkurt__border-color","vorkurt__header-newRepo-header",2,"padding-left","2px",3,"click"],[1,"flex","mx-2"],[1,"flex","fixed",3,"svgIcon"],[1,"flex","items-center","mx-2","text-3xl","mr-4"],[1,"h-8","-ml-2","pr-2","w-72"],["type","text","name","price","id","repo",1,"focus:vorkurt__border-input","h-9","vorkurt__background-primary","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","pl-4","pr-12","sm:text-sm","border-gray-300","rounded-md",3,"change"],[1,"mb-2"],[1,"mt-5"],[1,"text-base","font-normal"],["type","text","name","price","id","description",1,"focus:vorkurt__border-input","h-9","vorkurt__background-primary","focus:ring-indigo-500","focus:border-indigo-500","block","w-full","pl-4","pr-12","sm:text-sm","border-gray-300","rounded-md",3,"change"],[1,"flex","vorkurt__border-bottom","pb-5","mb-6"],[1,"flex","flex-col"],[1,"example-margin"],[1,"flex","justify-center","items-center","mr-2"],[1,"text-white","vorkurt__size-icon","text-xl",3,"svgIcon"],[1,"h-3","text-base"],[1,"example-margin","my-3"],[1,"text-white","vorkurt__size-icon",3,"svgIcon"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"span"),e._uU(4," Owner "),e.TgZ(5,"span",3),e._uU(6," * "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div"),e.TgZ(8,"span"),e._uU(9," Repository Name "),e.TgZ(10,"span",3),e._uU(11," * "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",4),e.TgZ(13,"div",null,5),e.TgZ(15,"button",6),e.NdJ("click",function(r){return o.openServices(r)}),e.TgZ(16,"div",7),e.TgZ(17,"div"),e._uU(18),e.qZA(),e.TgZ(19,"div"),e._UZ(20,"mat-icon",8),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",9),e.TgZ(22,"span"),e._uU(23," / "),e.qZA(),e.qZA(),e.TgZ(24,"div",1),e.TgZ(25,"div",10),e.TgZ(26,"input",11),e.NdJ("change",function(r){return o.setRepositoryName(r)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"div",12),e._uU(28," Great repository names are short an memorable. Need inspiration? How about musical-umbrella? "),e.qZA(),e.TgZ(29,"div",13),e.TgZ(30,"div",14),e.TgZ(31,"span"),e._uU(32,"Description (optional)"),e.qZA(),e.qZA(),e.TgZ(33,"input",15),e.NdJ("change",function(r){return o.setDescription(r)}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",16),e.TgZ(35,"div"),e.TgZ(36,"section",17),e.TgZ(37,"mat-checkbox",18),e.TgZ(38,"div",1),e.TgZ(39,"div",19),e._UZ(40,"mat-icon",20),e.qZA(),e.TgZ(41,"div",17),e.TgZ(42,"span",21),e._uU(43," Public "),e.qZA(),e.TgZ(44,"span"),e._uU(45," Anyone on the internet can see this repository. You choose who can commit. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(46,"mat-checkbox",22),e.TgZ(47,"div",1),e.TgZ(48,"div",19),e._UZ(49,"mat-icon",23),e.qZA(),e.TgZ(50,"div",17),e.TgZ(51,"span",21),e._uU(52," Private "),e.qZA(),e.TgZ(53,"span"),e._uU(54," You choose who can see and commit to this repository "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(18),e.hij(" ",o.user?o.user:"User Name"," "),e.xp6(2),e.Q6J("svgIcon","fa_solid:sort-down"),e.xp6(20),e.Q6J("svgIcon","fa_solid:book"),e.xp6(9),e.Q6J("svgIcon","fa_solid:lock"))},directives:[T.lW,p.Hw,Z.oG],styles:[""]}),n})(),j=(()=>{class n{constructor(t,o){this._templateRepository=t,this._connectionServiceFirebase=o}ngOnInit(){this._templateRepository.templateUserName$.subscribe(t=>this.owner=t),this._templateRepository.templateData$.subscribe(t=>this.template=t),this._templateRepository.templateRepositoryName$.subscribe(t=>this.repositoryName=t),this._templateRepository.templateDescription$.subscribe(t=>this.description=t),this._templateRepository.templateRepositoryAvailable$.subscribe(t=>this.available=t)}onSubmit(){var t,o,a,r,l;let m={template:null!==(t=this.template)&&void 0!==t?t:"",owner:null!==(o=this.owner)&&void 0!==o?o:"",repositoryName:null!==(a=this.repositoryName)&&void 0!==a?a:"",description:null!==(r=this.description)&&void 0!==r?r:"",available:null!==(l=this.available)&&void 0!==l&&l};this._connectionServiceFirebase.createRepository(m).then(h=>console.log(h))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u),e.Y36(_.M))},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-bottom"]],decls:41,vars:0,consts:[[1,"text-base","vorkurt__border-bottom","mb-6"],[1,"font-bold","flex","flex-col"],[1,"text-sm","vorkurt__color-text-line"],[1,"example-margin","my-3"],[1,"flex"],[1,"flex","flex-col"],[1,"h-3","text-base","mb-2"],[1,"mb-6","flex","h-7","items-center","justify-center","vorkurt__background-button","w-1/4","rounded-lg","ml-2","mr-2","cursor-pointer"],[1,"flex","justify-center","vorkurt__background-button"],[1,"ml-2",3,"click"],[1,"font-normal","text-base"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e.TgZ(3,"span"),e._uU(4,"Initialize this repository with:"),e.qZA(),e.qZA(),e.TgZ(5,"div",2),e.TgZ(6,"span"),e._uU(7,"Skip this step if you\u2019re importing an existing repository."),e.qZA(),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"mat-checkbox",3),e.TgZ(10,"div",4),e.TgZ(11,"div",5),e.TgZ(12,"span",6),e._uU(13," Add a README file "),e.qZA(),e.TgZ(14,"span"),e._uU(15," This is where you can write a long description for your project. Learn more. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div"),e.TgZ(17,"mat-checkbox",3),e.TgZ(18,"div",4),e.TgZ(19,"div",5),e.TgZ(20,"span",6),e._uU(21," Add .gitignore "),e.qZA(),e.TgZ(22,"span"),e._uU(23," Choose which files not to track from a list of templates. Learn more. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"div"),e.TgZ(25,"mat-checkbox",3),e.TgZ(26,"div",4),e.TgZ(27,"div",5),e.TgZ(28,"span",6),e._uU(29," Choose a license "),e.qZA(),e.TgZ(30,"span"),e._uU(31," A license tells others what they can and can't do with your code. Learn more. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"div"),e.TgZ(33,"div"),e.TgZ(34,"span"),e._uU(35," This will set main as the default branch. Change the default name in your settings. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div",7),e.TgZ(37,"button",8),e.TgZ(38,"div",9),e.NdJ("click",function(){return o.onSubmit()}),e.TgZ(39,"span",10),e._uU(40,"Create Repository"),e.qZA(),e.qZA(),e.qZA(),e.qZA())},directives:[Z.oG],styles:[""]}),n})(),H=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["elix-new-repo"]],decls:6,vars:0,consts:[[1,"vorkurt__height-account","vorkurt__color-text","font-normal"],[1,"flex","justify-center","h-full"],[1,"w-1/3"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"elix-header-new-repo"),e._UZ(4,"elix-middle"),e._UZ(5,"elix-bottom"),e.qZA(),e.qZA(),e.qZA())},directives:[D,E,j],styles:[""]}),n})();var V=s(8002);const $=[{path:"",component:H,resolve:{newRepo:(()=>{class n{constructor(t,o){this._firebase=t,this._newRepository=o,this._firebase.setUrl("/template")}resolve(t,o){this._firebase.setUrl("/template"),this._firebase.data.snapshotChanges().pipe((0,V.U)(a=>a.map(r=>{let l=r.payload.doc.data();return{template:l.template,id:r.payload.doc.id,check:l.check,icon:l.icon}}))).subscribe(a=>this._newRepository.newRepoRetriveData(a))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.M),e.LFG(A))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[x.Bz.forChild($)],x.Bz]}),n})();var z=s(9983),X=s(8295),W=s(4466),K=s(3461),w=(s(9490),s(8345),s(3679)),g=s(2458);s(9238);let le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.BQ,g.si],g.BQ]}),n})(),ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[b.ez,L,T.ot,p.Ps,z.c,X.lN,Z.p9,W.m,K._t,le,f.Tx,w.u5]]}),n})()}}]);
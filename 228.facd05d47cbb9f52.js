"use strict";(self.webpackChunkrest=self.webpackChunkrest||[]).push([[228],{4228:(R,g,n)=>{n.r(g),n.d(g,{OrderModule:()=>q,OrderRoutingModule:()=>y});var s=n(7211),l=n(7253),m=n(4185),p=n(655),v=n(9838);new l.Yd("DetailViewModel");class D{}class a{constructor(){this.orderedAt=new Date,this.ordered_at=null,this.orderedBy=null,this.printable=null}onMapping(){var r,i;this.orderedAt=new Date(new Date(null!==(r=this.ordered_at)&&void 0!==r?r:0).toLocaleString()+" UTC");let o=JSON.parse(null!==(i=this.printable)&&void 0!==i?i:"");this.printableEnJson=o.en,this.printableCnJson=o.cn}}(0,p.gn)([(0,v.z)("ordered_at")],a.prototype,"ordered_at",void 0),(0,p.gn)([(0,v.z)("ordered_by")],a.prototype,"orderedBy",void 0),(0,p.gn)([(0,v.z)("printable")],a.prototype,"printable",void 0);var e=n(7587);new l.Yd("DetailInteractor");let f=(()=>{class t{constructor(i){this.route=i,this.presenter=new D,this.subscriptions=[]}loadData(){}subscribeChanges(){this.subscriptions.push(this.route.data.subscribe(i=>{var o=i.data.order;this.presenter.orderDetail=new m.y(a).map(o)},i=>{}))}submit(i){}unsubscribeChanges(){this.subscriptions.length&&this.subscriptions.forEach(i=>i.unsubscribe())}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(s.gz))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var d=n(9808);const b=["*"];let Z=(()=>{class t{constructor(){this.layout="horizontal",this.type="solid"}containerClass(){return{"p-divider p-component":!0,"p-divider-horizontal":"horizontal"===this.layout,"p-divider-vertical":"vertical"===this.layout,"p-divider-solid":"solid"===this.type,"p-divider-dashed":"dashed"===this.type,"p-divider-dotted":"dotted"===this.type,"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align),"p-divider-center":"horizontal"===this.layout&&"center"===this.align||"vertical"===this.layout&&(!this.align||"center"===this.align),"p-divider-right":"horizontal"===this.layout&&"right"===this.align,"p-divider-top":"vertical"===this.layout&&"top"===this.align,"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-divider"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",layout:"layout",type:"type",align:"align"},ngContentSelectors:b,decls:3,vars:4,consts:[["role","separator",3,"ngClass","ngStyle"],[1,"p-divider-content"]],template:function(i,o){1&i&&(e.F$t(),e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.Hsn(2),e.qZA(),e.qZA()),2&i&&(e.Tol(o.styleClass),e.Q6J("ngClass",o.containerClass())("ngStyle",o.style))},directives:[d.mk,d.PC],styles:['.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted}\n'],encapsulation:2,changeDetection:0}),t})(),T=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez]]}),t})();function M(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1," Pre-Order "),e.qZA())}function A(t,r){if(1&t&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.hij(" When: ",i.viewModel.orderDetail.printableEnJson.deliverOption.when," ")}}function w(t,r){if(1&t&&(e.TgZ(0,"div",4),e.TgZ(1,"div",6),e._uU(2),e.qZA(),e.TgZ(3,"div",6),e._uU(4),e.qZA(),e.qZA()),2&t){const i=r.$implicit;e.xp6(2),e.lnq(" ",i.quantity," x ",i.name," - ",i.comment," "),e.xp6(2),e.hij(" ",i.price," ")}}function J(t,r){1&t&&(e.TgZ(0,"div",6),e._uU(1," Delivery: "),e.qZA())}function C(t,r){if(1&t&&(e.TgZ(0,"div",6),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.hij(" ",i.viewModel.orderDetail.printableEnJson.Delivery," ")}}new l.Yd("DetailInteractor");let z=(()=>{class t{constructor(i){this.interactor=i}ngOnInit(){this.interactor.loadData(),this.viewModel=this.interactor.presenter,this.interactor.subscribeChanges()}submit(i){}ngOnDestroy(){this.interactor.unsubscribeChanges()}print(){window.print()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-detail"]],features:[e._Bn([f])],decls:34,vars:13,consts:[[1,"container"],["id","invoice-content"],[4,"ngIf"],["class","grid",4,"ngFor","ngForOf"],[1,"grid"],["class","col-6",4,"ngIf"],[1,"col-6"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h5"),e._uU(3),e.qZA(),e.TgZ(4,"div"),e._uU(5),e.qZA(),e.YNc(6,M,2,0,"div",2),e.YNc(7,A,2,1,"div",2),e.TgZ(8,"div"),e._uU(9),e.qZA(),e.TgZ(10,"div"),e._uU(11),e.qZA(),e._UZ(12,"p-divider"),e.YNc(13,w,5,4,"div",3),e._UZ(14,"p-divider"),e.TgZ(15,"div",4),e.YNc(16,J,2,0,"div",5),e.YNc(17,C,2,1,"div",5),e.TgZ(18,"div",6),e._uU(19," Subtotal: "),e.qZA(),e.TgZ(20,"div",6),e._uU(21),e.qZA(),e.TgZ(22,"div",6),e._uU(23," Tax: "),e.qZA(),e.TgZ(24,"div",6),e._uU(25),e.qZA(),e.TgZ(26,"div",6),e._uU(27," Tip: "),e.qZA(),e.TgZ(28,"div",6),e._uU(29),e.qZA(),e.TgZ(30,"div",6),e._uU(31," Total: "),e.qZA(),e.TgZ(32,"div",6),e._uU(33),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(3),e.hij(" ",o.viewModel.orderDetail.printableEnJson.deliverOption.method," "),e.xp6(2),e.hij(" Order at: ",o.viewModel.orderDetail.printableEnJson.time," "),e.xp6(1),e.Q6J("ngIf",o.viewModel.orderDetail.printableEnJson.deliverOption.isPreOrder),e.xp6(1),e.Q6J("ngIf",o.viewModel.orderDetail.printableEnJson.deliverOption.isPreOrder),e.xp6(2),e.hij(" Pay by: ",o.viewModel.orderDetail.printableEnJson.paymentInformation.method," "),e.xp6(2),e.hij(" ",o.viewModel.orderDetail.printableEnJson.paymentInformation.status," "),e.xp6(2),e.Q6J("ngForOf",o.viewModel.orderDetail.printableEnJson.services),e.xp6(3),e.Q6J("ngIf",o.viewModel.orderDetail.printableEnJson.Delivery),e.xp6(1),e.Q6J("ngIf",o.viewModel.orderDetail.printableEnJson.Delivery),e.xp6(4),e.hij(" ",o.viewModel.orderDetail.printableEnJson.Subtotal," "),e.xp6(4),e.hij(" ",o.viewModel.orderDetail.printableEnJson.tax," "),e.xp6(4),e.hij(" ",o.viewModel.orderDetail.printableEnJson.tip," "),e.xp6(4),e.hij(" ",o.viewModel.orderDetail.printableEnJson.total," "))},directives:[d.O5,Z,d.sg],styles:[""]}),t})();var O=n(515),U=n(262),x=n(4004),j=n(9928);const E=new l.Yd("DetailResolverService"),S=[{path:"detail/:id",component:z,resolve:{data:(()=>{class t{constructor(i){this.orderService=i}resolve(i,o){var c,u;let Y=+(null!==(u=null===(c=i.paramMap)||void 0===c?void 0:c.get("id"))&&void 0!==u?u:0);return this.orderService.getOrder(Y).pipe((0,U.K)(h=>(E.error(h),(0,O.c)()))).pipe((0,x.U)(h=>({order:h.order})))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(j.p))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(S)],s.Bz]}),t})();var I=n(3495),F=n(845);let q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,y,T,F.hJ,I.U$]]}),t})()}}]);
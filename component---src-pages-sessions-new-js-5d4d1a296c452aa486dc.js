"use strict";(self.webpackChunkdungeon_world_manager=self.webpackChunkdungeon_world_manager||[]).push([[841],{6613:function(e,n,a){a.d(n,{Z:function(){return E}});var t=a(7462),r=a(5505),l=a(7294),c=a(9347),i=a(2219),o=a(1924),s=a(3483),m=a(8595),u=a(5026),d=a(8157);function h(e){var n=e.children,a=e.className,c=e.content,m=(0,r.Z)("sub header",a),u=(0,i.Z)(h,e),d=(0,o.Z)(h,e);return l.createElement(d,(0,t.Z)({},u,{className:m}),s.kK(n)?c:n)}h.handledProps=["as","children","className","content"],h.create=(0,d.u5)(h,(function(e){return{content:e}}));var Z=h;function b(e){var n=e.children,a=e.className,c=e.content,m=(0,r.Z)("content",a),u=(0,i.Z)(b,e),d=(0,o.Z)(b,e);return l.createElement(d,(0,t.Z)({},u,{className:m}),s.kK(n)?c:n)}b.handledProps=["as","children","className","content"];var g=b;function p(e){var n=e.attached,a=e.block,d=e.children,h=e.className,b=e.color,E=e.content,v=e.disabled,f=e.dividing,N=e.floated,y=e.icon,C=e.image,D=e.inverted,G=e.size,k=e.sub,T=e.subheader,w=e.textAlign,P=(0,r.Z)("ui",b,G,(0,c.lG)(a,"block"),(0,c.lG)(v,"disabled"),(0,c.lG)(f,"dividing"),(0,c.cD)(N,"floated"),(0,c.lG)(!0===y,"icon"),(0,c.lG)(!0===C,"image"),(0,c.lG)(D,"inverted"),(0,c.lG)(k,"sub"),(0,c.sU)(n,"attached"),(0,c.X4)(w),"header",h),S=(0,i.Z)(p,e),I=(0,o.Z)(p,e);if(!s.kK(d))return l.createElement(I,(0,t.Z)({},S,{className:P}),d);var K=m.Z.create(y,{autoGenerateKey:!1}),M=u.Z.create(C,{autoGenerateKey:!1}),x=Z.create(T,{autoGenerateKey:!1});return K||M?l.createElement(I,(0,t.Z)({},S,{className:P}),K||M,(E||x)&&l.createElement(g,null,E,x)):l.createElement(I,(0,t.Z)({},S,{className:P}),E,x)}p.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],p.Content=g,p.Subheader=Z;var E=p},1555:function(e,n,a){a.r(n);var t=a(7294),r=a(7861),l=a(6613),c=a(6341),i=a(8642),o=a(7365),s=a(9515);n.default=function(e){var n=e.closeNewSession,a=t.useContext(o.Z),m=a.auth,u=a.sessions;console.log(u);var d=(0,t.useState)({createTime:"",creatorName:"",description:"",meetingDay:"",meetingTime:"",members:"",numbPlayers:"",sessionDuration:""}),h=d[0],Z=d[1];function b(e,n){var a=n.name,t=n.value,r=Object.assign({},h);r[a]=t,Z(r)}return t.createElement(t.Fragment,null,t.createElement(r.Z,{piled:!0},t.createElement(l.Z,{as:"h1"},"New Session"),t.createElement(c.Z,null,t.createElement(c.Z.Group,{widths:"equal"},t.createElement(c.Z.Input,{type:"date",label:"Creation Date",placeholder:"Enter Creation Date...",name:"createTime",value:h.createTime,onChange:b})),t.createElement(c.Z.Group,{widths:"equal"},t.createElement(c.Z.TextArea,{value:h.description,label:"Session Description",placeholder:"Enter Description...",name:"description",onChange:b})),t.createElement(c.Z.Group,{widths:"equal"},t.createElement(c.Z.Input,{type:"time",label:"Meeting Time",placeholder:"Enter Meeting Time...",name:"meetingTime",value:h.meetingTime,onChange:b}),t.createElement(c.Z.Input,{label:"Meeting Days",placeholder:"Enter Meeting Days...",name:"meetingDay",value:h.meetingDay,onChange:b}),t.createElement(c.Z.Input,{label:"Duration of Session",placeholder:"Enter Session Duration...",name:"sessionDuration",value:h.sessionDuration,onChange:b}),t.createElement(c.Z.Input,{type:"number",min:"0",max:"6",label:"Number of Players",placeholder:"Enter Number of Players...",name:"numbPlayers",value:h.numbPlayers,onChange:b})),t.createElement(c.Z.Group,{widths:"equal"},t.createElement(c.Z.Input,{label:"Members",placeholder:"Enter Members...",name:"members",value:h.members,onChange:b})),t.createElement(i.Z.Group,{fluid:!0},t.createElement(i.Z,{color:"red",onClick:n},"Cancel"),t.createElement(i.Z.Or,null),t.createElement(i.Z,{color:"green",onClick:function(){h.userId=m.user.id,(0,s.TN)(h),console.log(s.TN)}},"Save")))))}}}]);
//# sourceMappingURL=component---src-pages-sessions-new-js-5d4d1a296c452aa486dc.js.map
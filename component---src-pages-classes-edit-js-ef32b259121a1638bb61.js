"use strict";(self.webpackChunkdungeon_world_manager=self.webpackChunkdungeon_world_manager||[]).push([[457],{7328:function(e,a,n){n.r(a),n.d(a,{default:function(){return i}});var t=n(7294),l=n(9515),c=n(7365),r=n(6341),s=n(8642),u=n(5444),m=function(e){var a=e.classEdit,n=e.getData;return t.createElement(t.Fragment,null,t.createElement(r.Z,null,t.createElement(r.Z.Group,{widths:"equal"},t.createElement(r.Z.Input,{label:"Class name:",id:"classname",name:"name",value:n.name}),t.createElement(r.Z.TextArea,{label:"Class Description:",id:"classDescription",name:"description",value:n.description})),t.createElement(r.Z.Group,{widths:"equal"},t.createElement(r.Z.Input,{label:"Race name:",id:"racename",name:"name",value:n.name}),t.createElement(r.Z.TextArea,{label:"Race Description:",id:"raceDescription",name:"description",value:n.description})),t.createElement(r.Z.Field,null,t.createElement(s.Z,null,"Add Race")),t.createElement(r.Z.Group,{widths:"equal"},t.createElement(r.Z.Select,{label:"Select Race:",options:n.raceOptions,name:"race",value:n.race}),t.createElement(r.Z.Input,{label:"Name:",name:"name",value:n.name})),t.createElement(r.Z.Field,null,t.createElement(s.Z,null,"Add Recommended name")),t.createElement(r.Z.Group,{widths:"equal"},t.createElement(r.Z.Input,{type:"number",label:"Base HP",name:"baseHp",value:n.baseHp}),t.createElement(r.Z.Input,{type:"number",label:"Base Damage",name:"baseDamage",value:n.baseDamage})),t.createElement(r.Z.Group,{widths:"equal"},t.createElement(r.Z.Field,null,t.createElement(s.Z,{color:"green",icon:"plus",content:"Edit Class",fluid:!0,as:u.Link,to:"/classes",onClick:a})),t.createElement(r.Z.Field,null,t.createElement(s.Z,{type:"button",as:u.Link,to:"/classes",content:"Cancel",fluid:!0})))))},i=function(e){var a,n=e.location.hash,r=t.useState(!1),s=(r[0],r[1],t.useContext(c.Z).classes),u=n.replace("#","");console.log(u);var i=null!==(a=s.publicClasses.find((function(e){return e.id===u})))&&void 0!==a?a:{};return console.log(i),t.createElement(t.Fragment,null,t.createElement(m,{classEdit:function(e){e.update=(0,l.mb)(e),console.log(e)},getData:i}))}}}]);
//# sourceMappingURL=component---src-pages-classes-edit-js-ef32b259121a1638bb61.js.map
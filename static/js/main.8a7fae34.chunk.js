(this.webpackJsonpconcode=this.webpackJsonpconcode||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(26),r=n.n(a),i=(n(73),n(98),n(45)),o=n(78),h=n(84),l=n(83),d=n(131),j=n(132),u=n(133),b=n(134),g=n(129),f=n(130),O=(n(99),n(43)),p=n.n(O),x=n(68),m=n(79),v=n.n(m),y=n(69),k=n(80),w=n.n(k),L=new function e(){var t=this;Object(i.a)(this,e),this.ee=new v.a,this.getSystemLang=function(){var e=navigator.language||navigator.userLanguage,t=e.indexOf("-");return t>0&&(e=e.substr(0,t)),e},this.load=function(){t.sb=new Map;for(var e=0;e<y.length;e++){var n=y[e];t.sb.set(n.key.toLowerCase(),n)}},this.changeLang=function(e){t._setLang(e),t.ee.emit("updated")},this._setLang=function(e){"ko"===e?(t.lang=e,t.language="\ud55c\uad6d\uc5b4"):(t.lang="en",t.language="English"),localStorage.setItem("lang",t.lang)},this.addEventHandler=function(){var e=Object(x.a)(p.a.mark((function e(n,s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.ee.on(n,s);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.removeEventHandler=function(){var e=Object(x.a)(p.a.mark((function e(n,s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.ee.off(n,s);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.get=function(e){if(null==e)return"";e=e.toLowerCase();var n=t.sb.get(e);if(void 0===n||null==n)return e;var s=t.getWithLang(e,t.lang);return void 0!==s&&null!=s&&""!==s||void 0!==(s=t.getWithLang(e,"en"))&&null!=s?s=s.replace("\n"," "):e},this.format=function(e){var n=t.get(e);if(null==n)return e;for(var s=arguments.length,c=new Array(s>1?s-1:0),a=1;a<s;a++)c[a-1]=arguments[a];return w()(n,c)},this.getWithLang=function(e,n){var s=t.sb.get(e);if(null!=s){if("en"===n)return s.en;if("ko"===n)return s.ko}return""},this.load();var n=localStorage.getItem("lang");null!==n&&void 0!==n?this._setLang(n):(this._setLang("en"),this._setLang(this.getSystemLang()))},z=n(2),C=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(d.a,{src:"/banner.png",centered:!0}),Object(z.jsxs)(j.a,{container:!0,stackable:!0,children:[Object(z.jsx)(j.a.Row,{children:Object(z.jsxs)(u.a,{basic:!0,children:[Object(z.jsx)(d.a,{src:"/LogoB.png",size:"medium"}),Object(z.jsx)(b.a,{as:"h1",size:"huge",children:Object(z.jsx)(b.a.Subheader,{children:"Puzzle Action Adventure"})})]})}),Object(z.jsxs)(j.a.Row,{children:[Object(z.jsx)(j.a.Column,{width:4,floated:"left",children:Object(z.jsxs)(u.a,{secondary:!0,children:[Object(z.jsxs)(b.a,{as:"h4",children:[Object(z.jsx)(b.a.Content,{children:"Release Date:"}),Object(z.jsx)(b.a.Subheader,{children:"2025"})]}),Object(z.jsxs)(b.a,{as:"h4",children:[Object(z.jsx)(b.a.Content,{children:"Platforms:"}),Object(z.jsx)(b.a.Subheader,{children:Object(z.jsx)("a",{href:"https://store.steampowered.com/app/2888960/Graytail/",children:"Steam"})})]})]})}),Object(z.jsxs)(j.a.Column,{width:11,children:[Object(z.jsx)("p",{children:L.get("desc")}),Object(z.jsx)(b.a,{as:"h3",size:"medium",children:L.get("interaction.key")}),Object(z.jsx)("p",{children:L.get("interaction.desc")}),Object(z.jsx)(b.a,{as:"h3",size:"medium",children:L.get("story.key")}),Object(z.jsx)("p",{children:L.get("story.desc")}),Object(z.jsx)(b.a,{as:"h3",size:"medium",children:"Videos"}),Object(z.jsx)("p",{children:Object(z.jsx)(g.a,{id:"gWe-pbaj8rY",placeholder:"/Video.png",source:"youtube"})}),Object(z.jsx)(b.a,{as:"h3",size:"medium",children:"Images"}),Object(z.jsxs)(d.a.Group,{size:"medium",children:[Object(z.jsx)(d.a,{src:"/screenshots/2.png"}),Object(z.jsx)(d.a,{src:"/screenshots/9.png"}),Object(z.jsx)(d.a,{src:"/screenshots/4.png"}),Object(z.jsx)(d.a,{src:"/screenshots/1.png"}),Object(z.jsx)(d.a,{src:"/screenshots/3.png"}),Object(z.jsx)(d.a,{src:"/screenshots/5.png"}),Object(z.jsx)(d.a,{src:"/screenshots/6.png"}),Object(z.jsx)(d.a,{src:"/screenshots/7.png"}),Object(z.jsx)(d.a,{src:"/screenshots/8.png"}),Object(z.jsx)(d.a,{src:"/screenshots/10.png"})]}),Object(z.jsx)(b.a,{as:"h3",size:"medium",children:"Icon"}),Object(z.jsx)("p",{children:Object(z.jsx)(d.a,{src:"/Icon512.png",size:"small"})}),Object(z.jsx)(b.a,{as:"h3",size:"medium",children:"Contact"}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(b.a,{as:"h4",size:"small",children:[Object(z.jsx)(b.a.Content,{children:"Inquiries"}),Object(z.jsx)(b.a.Subheader,{children:Object(z.jsx)("a",{href:"mailto:dev@concode.co",children:"dev@concode.co"})})]}),Object(z.jsxs)(b.a,{as:"h4",size:"small",children:[Object(z.jsx)(b.a.Content,{children:"Twitter"}),Object(z.jsx)(b.a.Subheader,{children:Object(z.jsx)("a",{href:"https://twitter.com/teamconcode",children:"https://twitter.com/teamconcode"})})]})]})]})]})]}),Object(z.jsx)(u.a,{secondary:!0,as:"footer",className:"footer",children:Object(z.jsxs)(f.a,{textAlign:"center",children:[Object(z.jsxs)("p",{children:["Copyright"," ",Object(z.jsx)("a",{href:"https://concode.co",children:"@CONCODE"})]}),Object(z.jsxs)("p",{children:[Object(z.jsx)("a",{href:"",onClick:function(){return L.changeLang("ko")},children:"KO"})," | ",Object(z.jsx)("a",{href:"",onClick:function(){return L.changeLang("en")},children:"EN"})]})]})})]})}}]),n}(s.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(C,{})}),document.getElementById("root")),S()},69:function(e){e.exports=JSON.parse('[{"key":"desc","ko":"Graytail\uc740 \ud0dc\ud3c9\uc591\uc758 \uc791\uc740 \uc12c\uc744 \ubc30\uacbd\uc73c\ub85c \ud3bc\uccd0\uc9c0\ub294, \uc0c1\ud638\uc791\uc6a9\uc73c\ub85c \uac00\ub4dd\ud55c \ud37c\uc990\uacfc \uc804\ud22c\uac00 \uc788\ub294 \uc824\ub2e4 \ub77c\uc774\ud06c \uc561\uc158 \uc5b4\ub4dc\ubca4\ucc98 \uac8c\uc784\uc785\ub2c8\ub2e4. \uc2e4\uc885\ub41c \ucd5c\uace0\uc758 \uc5ec \uc870\uc885\uc0ac\uc758 \ud754\uc801\uc744 \ucc3e\uace0 \uc12c\uc5d0 \uc228\uaca8\uc9c4 \ube44\ubc00\uc744 \ubc1d\ud600\ub0b4\uc138\uc694.","en":"Graytail is a Zelda-like action-adventure game with interactive puzzles and combat set on a small island in the Pacific. Find the missing best female pilot and uncover the secrets hidden on the island."},{"key":"interaction.key","ko":"\u201c\uc0c1\ud638\uc791\uc6a9\u201d\uc744 \uc774\uc6a9\ud55c \ud37c\uc990 \ud574\uacb0","en":"Interaction and Puzzles"},{"key":"interaction.desc","ko":"\uc0c1\uc790\uc5d0 \ubd88\uc744 \ubd99\uc774\uace0, \ubd88\uc774 \ubd99\uc740 \uc0c1\uc790\ub97c \uc9d1\uc5b4 \ub358\uc838 \ud480 \uc232\uc5d0 \ubd88\uc744 \ubc88\uc9c0\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc7a1\uace0, \ub358\uc9c0\uace0, \ubd88\uc744 \ubd99\uc774\uace0, \uc810\ud504\ub97c \ud558\uace0, \ubb3c\uccb4\ub97c \ud295\uaca8\ub0b4\uace0 \ub4f1\ub4f1\uc758 \ub2e4\uc591\ud55c \uc0c1\ud638\uc791\uc6a9\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uac01\uac01\uc758 \uc0c1\ud638\uc791\uc6a9\uc774 \uc11c\ub85c \uc5f0\uacc4\ub418\uc5b4 \ub2e4\uc591\ud55c \ud6a8\uacfc\ub97c \ub9cc\ub4e4\uc5b4 \ub0c5\ub2c8\ub2e4. \ubb38\uc81c\ub97c \ud478\ub294 \ubc29\ubc95\uc740 \uc5ec\ub7ec\uac00\uc9c0\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc0dd\uac01\ud55c\ub300\ub85c \ubb38\uc81c\ub97c \ud574\uacb0\ud574\ubcf4\uc138\uc694.","en":"You can light a box on fire, pick it up and throw it to spread the fire in the grass. There are a variety of interactions such as grabbing, throwing, lighting fires, jumping, deflecting objects, and more. Each interaction is linked to each other to create various effects. There can be many ways to solve a problem. Solve problems the way you think."},{"key":"story.key","ko":"\uc2e4\uc885\ub41c \uc870\uc885\uc0ac\uc640 \uc12c\uc758 \ube44\ubc00","en":"The missing pilot and the secret of the island"},{"key":"story.desc","ko":"\ucd5c\uace0\uc758 \uc5ec \uc870\uc885\uc0ac\uac00 \ube44\ud589 \uc911 \uc2e4\uc885\ub429\ub2c8\ub2e4. \uc5ec\ub7ec \ud0d0\uc0ac\ub300\uac00 \uadf8\ub140\ub97c \ucc3e\uc9c0\ub9cc \uacc4\uc18d \uc2e4\ud328\ud569\ub2c8\ub2e4. \uc2dc\uac04\uc774 \uc9c0\ub098\uace0 \uc0ac\uac74\uc740 \uc810\uc810 \uc78a\ud600\uc838 \uac00\uace0 \uacb0\uad6d \ubc14\ub2e4\uc5d0 \ucd94\ub77d\uc73c\ub85c \uc885\uacb0 \ucc98\ub9ac\ub429\ub2c8\ub2e4. 10\ub144 \ud6c4 \ub0a8\uaca8\uc9c4 \ub538\uc774 \uc5c4\ub9c8\ub97c \ucc3e\uae30 \uc704\ud574 \ucf00\ube48\uc758 \uc0ac\ubb34\uc18c\ub85c \ucc3e\uc544\uc635\ub2c8\ub2e4. \ub458\uc740 \uc5c4\ub9c8\ub97c \ucc3e\uc544 \ud0dc\ud3c9\uc591\uc758 \uc791\uc740 \uc12c\uc73c\ub85c \ub4e4\uc5b4\uc624\uace0 \uc12c\uc758 \ube44\ubc00\uacfc \ub9c8\uc8fc\ud569\ub2c8\ub2e4.","en":"The best female pilot goes missing mid-flight. Several expeditions search for her, but expeditions continue to fail. As time passes, the incident is forgotten and ultimately ends with a crash into the sea. Ten years later, her left behind daughter comes to Kevin\'s office looking for her mother. The two come to a small island in the Pacific in search of her mother and encounter the island\'s secrets."}]')},98:function(e,t,n){},99:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.8a7fae34.chunk.js.map
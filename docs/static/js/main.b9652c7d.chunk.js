(this["webpackJsonpludanin.github.io"]=this["webpackJsonpludanin.github.io"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={header:"styles_header__aDHnj",avatar:"styles_avatar__3eDCD",personal:"styles_personal__2R3Wt",personalName:"styles_personalName__3ZI52",personalJob:"styles_personalJob__1hNUo",content:"styles_content__1lPZQ",contactRow:"styles_contactRow__1cgfT",skills:"styles_skills__vBjaD",frontEnd:"styles_frontEnd__2y5XP",backEnd:"styles_backEnd__2r-Oq",misc:"styles_misc__1Eo8g",lastItem:"styles_lastItem__2FvSb",credits:"styles_credits__1A3Bw"}},,function(e,a,t){e.exports={showBorder:"styles_showBorder__3OYXb",language:"styles_language__68DPm",languageCircle:"styles_languageCircle__2FEqD",languageFlag:"styles_languageFlag__3es2t",pager:"styles_pager__22y2x",storyTitle:"styles_storyTitle__WeEnb",sidebar:"styles_sidebar__2Ngxl",sidebarButton:"styles_sidebarButton__31-Yd",activeSidebar:"styles_activeSidebar__jxClo"}},,,function(e,a,t){e.exports={wrapper:"styles_wrapper__137Ii",onlyLandscape:"styles_onlyLandscape__3-TDr",prevNext:"styles_prevNext__3nQXL",pageCounter:"styles_pageCounter__6-31F",storyChooser:"styles_storyChooser__1athS"}},,,,,,,,,,,function(e,a,t){e.exports={localized:"styles_localized__1TDSa",animated:"styles_animated__1eIlr",transition:"styles_transition__273Hk",translating:"styles_translating__2v64P"}},function(e,a,t){e.exports={centerSpin:"spin_centerSpin__3PjBa",center:"spin_center__3SISO",icon:"spin_icon__FZbAI",description:"spin_description__3KYcZ",blink:"spin_blink__deM7D"}},,,,,,,function(e,a,t){e.exports=t(51)},,,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"SET_ORIENTATION",(function(){return m})),t.d(n,"SET_SCROLLBAR",(function(){return p})),t.d(n,"LNG_CHANGE",(function(){return E})),t.d(n,"SDB_TOGGLE",(function(){return b})),t.d(n,"STRY_REPLACE",(function(){return h})),t.d(n,"STRY_PAGE_TURN",(function(){return v})),t.d(n,"STRY_SET_PAGES",(function(){return g})),t.d(n,"NOTF_NEW",(function(){return f})),t.d(n,"NOTF_DELETE",(function(){return _})),t.d(n,"NOTF_DISMISS",(function(){return y}));var r=t(0),o=t.n(r),s=t(14),i=t.n(s),l=t(8),c=t(10),u=t(30),d={get SET_ORIENTATION(){return"SET_ORIENTATION"},get SET_SCROLLBAR(){return"SET_SCROLLBAR"},get SDB_TOGGLE(){return"SDB_TOGGLE"},get LNG_CHANGE(){return"LNG_CHANGE"},get STRY_REPLACE(){return"STRY_REPLACE"},get STRY_PAGE_TURN(){return"STRY_PAGE_TURN"},get STRY_SET_PAGES(){return"STRY_SET_PAGES"},get NOTF_NEW(){return"NOTF_NEW"},get NOTF_DELETE(){return"NOTF_DELETE"},get NOTF_DISMISS(){return"NOTF_DISMISS"}},m=function(e){return{type:d.SET_ORIENTATION,value:e}},p=function(e){return{type:d.SET_SCROLLBAR,value:e}},E=function(){return{type:d.LNG_CHANGE}},b=function(){return{type:d.SDB_TOGGLE}},h=function(e){return{type:d.STRY_REPLACE,value:e}},v=function(e){return{type:d.STRY_PAGE_TURN,bool:null!==e&&void 0!==e&&e}},g=function(e){return{type:d.STRY_SET_PAGES,value:e}},f=function(e){var a,t,n,r,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:d.NOTF_NEW,boolean:o,object:{id:null!==(a=null===e||void 0===e?void 0:e.id)&&void 0!==a?a:"",message:null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:"",title:null!==(n=null===e||void 0===e?void 0:e.title)&&void 0!==n?n:"",mood:null!==(r=null===e||void 0===e?void 0:e.mood)&&void 0!==r?r:"neutral",state:o?"visible":"hidden"}}},_=function(e){return{type:d.NOTF_DELETE,value:e}},y=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return{type:d.NOTF_DISMISS,object:null!==a&&void 0!==a?a:[]}},S=t(23),R=t.n(S),O=function(e){var a,t=null===(a=e.animate)||void 0===a||a,n=e.className,r=e.en,s=e.pt,i=Object(l.d)((function(e){return e.Redux})).language,c="en"!==i&&"pt"!==i,u="".concat(R.a.localized," ").concat(t?R.a.animated:""," ").concat(c?R.a.transition:""," ").concat(null!==n&&void 0!==n?n:"");return o.a.createElement("span",{className:u},(t?"en"===i||"en>pt"===i:"en"===i||"pt>en"===i)?r:s)},N=t(16),k=t(17),w=t(11),T=t(19),x=t(21),j=t(12),C=t.n(j),P=function(e){Object(x.a)(t,e);var a=Object(T.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).state={storyChooserVisibility:"hidden"},n.toggleStoryChooser=n.toggleStoryChooser.bind(Object(w.a)(n)),n.chooseStory=n.chooseStory.bind(Object(w.a)(n)),n.turnThePage=n.turnThePage.bind(Object(w.a)(n)),n}return Object(k.a)(t,[{key:"toggleStoryChooser",value:function(){var e=this,a=this.state.storyChooserVisibility;"active"===a?this.setState({storyChooserVisibility:"hiding"},(function(){setTimeout((function(){e.setState({storyChooserVisibility:"hidden"})}),150)})):"hidden"===a&&this.setState({storyChooserVisibility:"active"})}},{key:"chooseStory",value:function(e){var a=this.props.Redux.stories,t=a.current,n=t!==a.nextStory,r=e.currentTarget.dataset.target;r!==t&&!1===n&&this.props.STRY_REPLACE(r)}},{key:"turnThePage",value:function(e){this.props.STRY_PAGE_TURN(void 0!==e.currentTarget.dataset.forward)}},{key:"render",value:function(){var e=this,a=this.state.storyChooserVisibility,t=this.props.Redux,n=t.stories,r=t.orientation,s=n.page,i=n.maxPage,l=n.current,c=this.props.onlyLandscape;if(c&&"portrait"===r)return null;var u=function(){return o.a.createElement("div",{className:C.a.wrapper},o.a.createElement("button",{className:C.a.prevNext,disabled:1===s,onClick:e.turnThePage},o.a.createElement("i",{className:"mdi mdi-chevron-left"})),o.a.createElement("div",{className:"".concat(C.a.pageCounter," ").concat(a),onClick:e.toggleStoryChooser},o.a.createElement("i",{className:"mdi mdi-book-open-page-variant"}),o.a.createElement("span",null,s," / ",i),o.a.createElement("div",{className:C.a.storyChooser},"/home"!==l?o.a.createElement("button",{onClick:e.chooseStory,"data-target":"/home"},o.a.createElement(O,{animate:!1,en:"Home",pt:"In\xedcio"})):void 0,"/resume"!==l?o.a.createElement("button",{onClick:e.chooseStory,"data-target":"/resume"},o.a.createElement(O,{animate:!1,en:"Resume",pt:"Curr\xedculo"})):void 0,"/marborges"!==l?o.a.createElement("button",{onClick:e.chooseStory,"data-target":"/marborges"},"Marborges"):void 0,"/bgado"!==l?o.a.createElement("button",{onClick:e.chooseStory,"data-target":"/bgado"},"bGado"):void 0,"/project_e"!==l?o.a.createElement("button",{onClick:e.chooseStory,"data-target":"/project_e"},o.a.createElement(O,{animate:!1,en:"Project E",pt:"Projeto E"})):void 0)),o.a.createElement("button",{className:C.a.prevNext,disabled:s===i,"data-forward":"true",onClick:e.turnThePage},o.a.createElement("i",{className:"mdi mdi-chevron-right"})))};return c&&"landscape"===r?"/"===l?null:o.a.createElement("div",{className:C.a.onlyLandscape},u()):u()}}]),t}(o.a.Component),A=Object(l.b)((function(e){return{Redux:e.Redux}}),n)(P),L=t(9),I=t.n(L),G=Object(l.b)((function(e){return{Redux:e.Redux}}),n)((function(e){var a=e.Redux,t=e.LNG_CHANGE,n=e.SDB_TOGGLE,r=a.orientation,s=a.stories,i=a.sidebar;if("/"===s.current)return null;var l="hidden"===i?I.a.showBorder:"",c="visible"===i?I.a.activeSidebar:"";return o.a.createElement("div",{className:"NAVBAR ".concat(l)},o.a.createElement("div",{className:I.a.language},o.a.createElement("div",{className:I.a.languageCircle},o.a.createElement(O,{className:I.a.languageFlag,en:o.a.createElement("img",{alt:"Portugu\xeas Brasil",onClick:t,src:"https://lipis.github.io/flag-icon-css/flags/1x1/br.svg"}),pt:o.a.createElement("img",{alt:"English",onClick:t,src:"https://lipis.github.io/flag-icon-css/flags/1x1/gb.svg"})}))),o.a.createElement("div",{className:I.a.pager},"portrait"===r?o.a.createElement(A,null):o.a.createElement("div",{className:I.a.storyTitle},function(){if("portrait"===r)return null;switch(s.current){case"/home":return o.a.createElement(O,{animate:!1,en:"H\nO\nM\nE",pt:"I\nN\n\xcd\nC\nI\nO"});case"/bgado":return"b\nG\nA\nD\nO\n";case"/marborges":return"M\nA\nR\nB\nO\nR\nG\nE\nS";case"/project_e":return o.a.createElement(O,{animate:!1,en:"P\nR\nO\nJ\nE\nC\nT\n\nE",pt:"P\nR\nO\nJ\nE\nT\nO\n\nE"});case"/resume":return o.a.createElement(O,{animate:!1,en:"R\nE\nS\nU\nM\nE",pt:"C\nU\nR\nR\n\xcd\nC\nU\nL\nO"});default:return null}}())),o.a.createElement("div",{className:I.a.sidebar},o.a.createElement("button",{className:"".concat(I.a.sidebarButton," ").concat(c),onClick:n},""!==c?o.a.createElement("i",{className:"mdi mdi-keyboard-backspace"}):o.a.createElement("i",{className:"mdi mdi-menu"}))))})),D=t(7),B=t.n(D),F=Object(l.b)((function(e){return{Redux:e.Redux}}))((function(e){var a=e.Redux;return o.a.createElement("div",{className:"SIDEBAR ".concat(a.sidebar)},o.a.createElement("div",{className:B.a.header},o.a.createElement("div",{className:B.a.avatar},o.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/31702297?s=192&v=4",alt:"Avatar taken from GitHub"})),o.a.createElement("div",{className:B.a.personal},o.a.createElement("div",{className:B.a.personalName},"Lukas Danin"),o.a.createElement(O,{en:"Fullstack Developer",pt:"Desenvolvedor Fullstack",className:B.a.personalJob}))),o.a.createElement("div",{className:"".concat(B.a.content," scrollable")},o.a.createElement("h1",null,o.a.createElement(O,{en:"Contact me",pt:"Contate-me"})),o.a.createElement("div",null,o.a.createElement("div",{className:B.a.contactRow},o.a.createElement("i",{className:"mdi mdi-at"}),o.a.createElement("span",null,o.a.createElement("a",{href:"mailto:lukas.danin@gmail.com"},"lukas.danin@gmail.com"))),o.a.createElement("div",{className:B.a.contactRow},o.a.createElement("i",{className:"mdi mdi-phone"}),o.a.createElement("span",null,o.a.createElement("a",{href:"tel:+5591984491719"},"+55 91 98449 1719"))),o.a.createElement("div",{className:B.a.contactRow},o.a.createElement("i",{className:"mdi mdi-github-circle"}),o.a.createElement("span",null,o.a.createElement("a",{href:"https://github.com/ludanin"},"ludanin")))),o.a.createElement("h1",null,o.a.createElement(O,{en:"Skills",pt:"Habilidades"})),o.a.createElement("ul",{className:"".concat(B.a.skills," ").concat(B.a.frontEnd)},o.a.createElement("span",null,"Front-End"),o.a.createElement("li",null,o.a.createElement(O,{en:"Always toying with the latest JavaScript trends & versions",pt:"Sempre experimentando as \xfaltimas trends e vers\xf5es do JavaScript"})),o.a.createElement("li",null,o.a.createElement(O,{en:"Loves",pt:"Ama"})," TypeScript"),o.a.createElement("li",null,"ReactJS"),o.a.createElement("li",null,"Redux & Redux Sagas"),o.a.createElement("li",null,"React-Native"),o.a.createElement("li",null,"Flutter (Dart)"),o.a.createElement("li",null,o.a.createElement(O,{en:"Obviously all that HTML5 + CSS (and Sass) stuff",pt:"Obviamente toda aquela bagagem de HTML5 + CSS (e Sass)"}))),o.a.createElement("ul",{className:"".concat(B.a.skills," ").concat(B.a.backEnd)},o.a.createElement("span",null,"Back-End"),o.a.createElement("li",null,"Golang"),o.a.createElement("li",null,"SQL (",o.a.createElement(O,{en:"Loves",pt:"Ama"})," PostgreSQL)"),o.a.createElement("li",null,"MongoDB"),o.a.createElement("li",null,"NodeJS (Express, Koa, etc.)")),o.a.createElement("ul",{className:"".concat(B.a.skills," ").concat(B.a.lastItem," ").concat(B.a.misc)},o.a.createElement("span",null,o.a.createElement(O,{en:"Misc.",pt:"Outros"})),o.a.createElement("li",null,o.a.createElement(O,{en:"Loves to work with",pt:"Ama trabalhar com"})," Linux"),o.a.createElement("li",null,o.a.createElement(O,{en:"Graduated from StartupSchool 2019",pt:"Graduou na StartupSchool 2019"})),o.a.createElement("li",null,o.a.createElement(O,{en:"\n                Experience with systems like Arduino and developing\n                applications targetting low-resources CPUs, e.g. Raspberry Pi\n              ",pt:"\n                Experi\xeancia com sistemas como o Arduino e em desenvolvimento\n                de aplica\xe7\xf5es que almejam CPUs com poucos recursos, ex.:\n                Raspberry Pi\n              "})),o.a.createElement("li",null,o.a.createElement(O,{en:"\n                Would love to have the opportunity to work in something\n                related to arts or with topics associated to social work\n              ",pt:"\n                Iria amar ter a oportunidade de trabalhar com algo mais\n                art\xedstico ou com t\xf3picos relacionados \xe0 trablhos sociais\n              "})),o.a.createElement("li",{className:B.a.lastItem},o.a.createElement(O,{en:"\n                Knows how to draw, and handle most design softwares, very\n                handy if you need some last minute mock ups or concept arts\n              ",pt:"\n                Sabe desenhar, e utilizar a maioria dos softwares de design,\n                muito \xfatil para quando voc\xea precisa de umas mock-ups ou\n                concept arts\n              "}))),o.a.createElement("h1",null,o.a.createElement(O,{en:"Credits",pt:"Cr\xe9ditos"})),o.a.createElement("div",{className:B.a.credits},o.a.createElement(O,{en:["This website was developed using ReactJS (with Redux & ","Redux-Sagas) you can check its source code ",o.a.createElement("a",{href:"https://github.com/ludanin/ludanin.github.io",key:"SIDEBAR/en:source"},"here"),".",o.a.createElement("br",{key:"SIDEBAR/en:br1"}),o.a.createElement("br",{key:"SIDEBAR/en:br2"}),"Some of the icons rendered on the content published here ","were acquired from the ",o.a.createElement("a",{href:"https://icons8.com",key:"SIDEBAR/en:icons8"},"Icons8")," library. If you can, do check these guys out, they're amazing!"],pt:["Este website foi desenvolvido utilizando ReactJS (com Redux ","& Redux-Sagas) voc\xea pode checar o c\xf3digo fonte deste projeto ",o.a.createElement("a",{href:"https://github.com/ludanin/ludanin.github.io",key:"SIDEBAR/pt:source"},"aqui"),".",o.a.createElement("br",{key:"SIDEBAR/pt:br1"}),o.a.createElement("br",{key:"SIDEBAR/en:br2"}),"Alguns dos \xedcones utilizados nos conte\xfados publicados aqui foram ","adquiridos da biblioteca ",o.a.createElement("a",{href:"https://icons8.com",key:"SIDEBAR/pt:icons8"},"Icons8"),". Se puder, cheque o trabalho desta equipe, eles s\xe3o incr\xedveis!"]}))))})),z=t(18),M=t(4),q={version:"1.0.0",stories:Object(M.a)({},{current:"/",nextStory:"/",changingPages:"",page:1,maxPage:1}),language:"en",notifications:Object(M.a)({},{visible:!1,transition:!1,apprisals:{}}),orientation:"portrait",scrollbar:12,sidebar:"hidden"},Y=Object(c.c)({Redux:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(M.a)({},q),a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d.SET_ORIENTATION:return Object(M.a)({},e,{orientation:a.value});case d.SET_SCROLLBAR:var t,n=a.value;return document.documentElement.style.setProperty("--scrollbar","".concat(null!==n&&void 0!==n?n:12,"px")),Object(M.a)({},e,{scrollbar:null!==(t=a.value)&&void 0!==t?t:12});case d.LNG_CHANGE:return void 0===a.payload?e:Object(M.a)({},e,{language:a.value});case d.SDB_TOGGLE:var r=e.sidebar,o="hidden"===r;return o?(window.matchMedia("(min-width: 621px)").matches&&(document.documentElement.style.setProperty("--NAVIGATORwidth","calc(100vw - var(--NAVBARwidth) - var(--SIDEBARwidth))"),document.documentElement.style.setProperty("--CONTENThorizontalPadding","7.5vw")),Object(M.a)({},e,{sidebar:"visible"})):!1===o?("visible"===r&&"landscape"===e.orientation&&(document.documentElement.style.setProperty("--NAVIGATORwidth","calc(100vw - var(--NAVBARwidth))"),document.documentElement.style.setProperty("--CONTENThorizontalPadding","17.5vw")),Object(M.a)({},e,{sidebar:"hidden"===a.value?"hidden":"hiding"})):e;case d.STRY_REPLACE:var s=e.stories,i=s.current,l=s.nextStory;if("/"!==i)if(i!==l){if(void 0===a.payload)return e}else if(void 0===a.payload)return Object(M.a)({},e,{stories:Object(M.a)({},e.stories,{nextStory:a.value})});return Object(M.a)({},e,{stories:Object(M.a)({},e.stories,{current:a.value,nextStory:a.value,page:1,maxPage:1})});case d.STRY_PAGE_TURN:var c=e.stories;if(c.changingPages&&void 0===a.payload)return e;if(a.bool){if(c.page===c.maxPage)return e}else if(1===c.page)return e;return void 0===a.payload?Object(M.a)({},e,{stories:Object(M.a)({},c,{changingPages:a.bool?"forward":"backward"})}):Object(M.a)({},e,{stories:Object(M.a)({},c,{changingPages:"",page:a.bool?c.page+1:c.page-1})});case d.STRY_SET_PAGES:return Object(M.a)({},e,{stories:Object(M.a)({},e.stories,{maxPage:a.value})});case d.NOTF_NEW:var u=e.notifications.apprisals;return u[a.object.id]=a.object,Object(M.a)({},e,{notifications:Object(M.a)({},e.notifications,{apprisals:u})});case d.NOTF_DISMISS:var m,p,E=e.notifications.apprisals,b=null!==(m=a.object)&&void 0!==m?m:[],h=Object(z.a)(b);try{for(h.s();!(p=h.n()).done;){var v=p.value;void 0!==E[v]&&(E[v].state="dismiss")}}catch(_){h.e(_)}finally{h.f()}return Object(M.a)({},e,{notifications:Object(M.a)({},e.notifications,{apprisals:E})});case d.NOTF_DELETE:var g,f=e.notifications.apprisals;return"dismiss"===(null===(g=f[a.value])||void 0===g?void 0:g.state)&&delete f[a.value],Object(M.a)({},e,{notifications:Object(M.a)({},e.notifications,{apprisals:f})});default:return e}}}),H=t(20),J=function(){var e=Object(l.c)(),a=function(){e(h("/resume"))};return o.a.createElement("div",{className:"content scrollable"},o.a.createElement("div",{className:"header"},"Lukas Danin"),o.a.createElement("h1",null,o.a.createElement(O,{en:"About me",pt:"Sobre mim"})),o.a.createElement(O,{en:"Hello! I'm Lukas Danin and I'm a Brazilian software developer\n          currently based in Bel\xe9m, state of Par\xe1, Brazil (GMT -3).",pt:"Ol\xe1! Me chamo Lukas Danin e sou um desenvolvedor de softwares\n          brasileiro atualmente morando em Bel\xe9m do Par\xe1."}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(O,{en:"I'm specialized in web-development (both front-end and back-end),\n          additionally I'm also proficient with mobile technologies such\n          as Flutter and React-Native.",pt:"Sou especializado em desenvolvimento web (tanto front-end\n          quanto back-end), al\xe9m disso tenho profici\xeancia em tecnologias\n          mobile, como Flutter e React-Native."}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h1",null,o.a.createElement(O,{en:"How to use this site",pt:"Como usar este site"})),o.a.createElement("h2",null,o.a.createElement(O,{en:"How to change the current content",pt:"Como mudar o conte\xfado atual"})),o.a.createElement("div",{className:"center"},o.a.createElement("video",{src:"./videos/story_chooser.mp4",autoPlay:!0,controls:!0,loop:!0,muted:!0})),o.a.createElement(O,{en:["You can change the current story/page by clicking on the book icon (",o.a.createElement("i",{className:"mdi mdi-book-open-page-variant",key:"HOME/en:1"}),") below. If you want to get a brief overview of my career I'd suggest\n          you to select the story ",o.a.createElement("a",{href:"#resume",key:"HOME/en:resume",onClick:a},"Resume"),", however, if you have some\n          time to spare, and want to know more about my recent works, feel\n          free to read all the stories available here."],pt:["Voc\xea pode mudar a p\xe1gina/hist\xf3ria atual ao clicar no \xedcone do\n          livro (",o.a.createElement("i",{className:"mdi mdi-book-open-page-variant",key:"HOME/pt:1"}),") abaixo. Se estiver interessado em obter um breve resumo da\n          minha carreira profissional eu sugiro que voc\xea selecione a hist\xf3ria ",o.a.createElement("a",{href:"#resume",key:"HOME/pt:resume",onClick:a},"Curr\xedculo"),", contudo, se estiver com um pouco de tempo livre, e deseja conhecer\n          mais sobre meus \xfaltimos trabalhos, sinta-se livre para ler todas\n          as outras hist\xf3rias dispon\xedveis aqui."]}),o.a.createElement("h2",null,o.a.createElement(O,{en:"How to switch pages of a story",pt:"Como mudar as p\xe1ginas de uma hist\xf3ria"})),o.a.createElement("div",{className:"center"},o.a.createElement("video",{src:"./videos/turn_pages.mp4",autoPlay:!0,controls:!0,loop:!0,muted:!0,style:{paddingRight:2}})),o.a.createElement(O,{en:"Just click on the arrows close to the story chooser!",pt:"Apenas clique nas setas perto do seletor de hist\xf3rias!"}))},W=function(e,a){return[o.a.createElement("div",{className:"header",key:"PROJECT_E/en:header"},"Project E"),o.a.createElement("div",{className:"notes",key:"PROJECT_E/en:notes1"},"These are some footages of Project E, it\u2019s good to mention that the true identity of the startup and some functionalities of the application are being omitted. For example, things like branding, administrative pages, as well as features other than energy measurement are not yet being shown to a broader public.",o.a.createElement("br",null),o.a.createElement("br",null),"If you're curious about this project, I'd suggest you to come here after a few months, I'll probably update this page as our progress and readiness for the public grows."),o.a.createElement("h1",{key:"PROJECT_E/en:video_title"},"Footage of Project E"),o.a.createElement("div",{className:"center",key:"PROJECT_E/en:videoweb"},o.a.createElement("video",{src:e?"./videos/project_e_mobile.mp4":"./videos/project_e_web.mp4",autoPlay:!0,controls:!0,loop:!0,muted:!0})),o.a.createElement("div",{className:"notes",key:"PROJECT_E/en:toggle_video",style:{backgroundColor:"transparent",flexDirection:"row"}},o.a.createElement("button",{onClick:a,disabled:!1===e,style:{border:e?"1px solid var(--base90)":void 0,borderTopLeftRadius:"var(--radius)",borderBottomLeftRadius:"var(--radius)",color:e?"var(--base90)":"var(--base00)",backgroundColor:e?"var(--base00)":"var(--base90)"}},"Web"),o.a.createElement("button",{onClick:a,disabled:e,style:{border:e?void 0:"1px solid var(--base90)",borderTopRightRadius:"var(--radius)",borderBottomRightRadius:"var(--radius)",color:e?"var(--base00)":"var(--base90)",backgroundColor:e?"var(--base90)":"var(--base00)"}},"Mobile")),o.a.createElement("div",{className:"notes",key:"PROJECT_E/en:sorry_only_pt"},"For the time being, Project E is only available in Brazilian Portuguese. Sorry for not being able to showcase you a English version of our product"),"This is our web dashboard, presenting information about a user's\n      household energy consumption.",o.a.createElement("h2",{key:"PROJECT_E/pt:video_sub_title"},"What you're seeing"),o.a.createElement("ul",{key:"PROJECT_E/en:ul1"},o.a.createElement("li",null,"Peak consumption and where it happened."),o.a.createElement("li",null,"Always-On consumption, i.e. stuff that are always on (like fridges, etc.)."),o.a.createElement("li",null,"Most used week-day, as well as the least used one."),o.a.createElement("li",null,"Most used period of the day, as well as the least used one."),o.a.createElement("li",null,"Select periods to analyze them, or even compare months to understand your consumption tendencies."))]},V=function(e,a){return[o.a.createElement("div",{className:"header",key:"PROJECT_E/pt:header"},"Projeto E"),o.a.createElement("div",{className:"notes",key:"PROJECT_E/pt:notes1"},"Estas s\xe3o algumas filmagens do Projeto E, \xe9 bom lembrar que a verdadeira identidade da startup e algumas funcionalidades do sistema est\xe3o sendo omitidas. Por exemplo, a marca, p\xe1ginas administrativas, e outras caracter\xedsticas al\xe9m da mensura\xe7\xe3o de energia ainda n\xe3o est\xe3o sendo divulgadas abertamente para um p\xfablico maior.",o.a.createElement("br",null),o.a.createElement("br",null),"Se voc\xea est\xe1 curioso sobre este projeto, recomendo que volte aqui depois de alguns meses, provavelmente irei atualizar esta p\xe1gina de acordo com o crescimento de nosso progresso e prontid\xe3o para o p\xfablico."),o.a.createElement("h1",{key:"PROJECT_E/pt:video_title"},"Filmagens do Projeto E"),o.a.createElement("div",{className:"center",key:"PROJECT_E/pt:videoweb"},o.a.createElement("video",{src:e?"./videos/project_e_mobile.mp4":"./videos/project_e_web.mp4",autoPlay:!0,controls:!0,loop:!0,muted:!0})),o.a.createElement("div",{className:"notes",key:"PROJECT_E/en:toggle_video",style:{backgroundColor:"transparent",flexDirection:"row"}},o.a.createElement("button",{onClick:a,disabled:!1===e,style:{border:e?"1px solid var(--base90)":void 0,borderTopLeftRadius:"var(--radius)",borderBottomLeftRadius:"var(--radius)",color:e?"var(--base90)":"var(--base00)",backgroundColor:e?"var(--base00)":"var(--base90)"}},"Web"),o.a.createElement("button",{onClick:a,disabled:e,style:{border:e?void 0:"1px solid var(--base90)",borderTopRightRadius:"var(--radius)",borderBottomRightRadius:"var(--radius)",color:e?"var(--base00)":"var(--base90)",backgroundColor:e?"var(--base90)":"var(--base00)"}},"Mobile")),"Esta \xe9 nossa dashboard web, atualmente voc\xea est\xe1 vendo a apresenta\xe7\xe3o de informa\xe7\xf5es do consumo de energia da resid\xeancia de um usu\xe1rio.",o.a.createElement("h2",{key:"PROJECT_E/pt:video_sub_title"},"O que voc\xea est\xe1 vendo"),o.a.createElement("ul",{key:"PROJECT_E/pt:ul1"},o.a.createElement("li",null,"Pico de consumo e quando isso ocorreu."),o.a.createElement("li",null,"Consumo sempre ligado, isto \xe9: aparelhos que permanecem ligados 24/7 (como geladeiras, etc.)."),o.a.createElement("li",null,"O dia da semana mais utilizado, assim como o menos utilizado."),o.a.createElement("li",null,"O per\xedodo do dia mais utilizado, assim como o menos utilizado."),o.a.createElement("li",null,"Sele\xe7\xf5es de per\xedodos para an\xe1lises, usu\xe1rios podem at\xe9 mesmo compararem seus consumos atuais com per\xedodos anteriores para melhor entender suas tend\xeancias."))]},U=function(){var e=Object(r.useState)(!1),a=Object(H.a)(e,2),t=a[0],n=a[1],s=function(){n(!t)};return o.a.createElement("div",{className:"content scrollable"},o.a.createElement(O,{en:W(t,s),pt:V(t,s)}))},Q=Object(l.b)((function(e){return{Redux:e.Redux}}),n)((function(e){var a=e.Redux,t=e.STRY_REPLACE,n=function(e){var a,n=null!==(a=e.currentTarget.dataset.target)&&void 0!==a?a:"/home";t(n)};return o.a.createElement("div",{className:"content scrollable"},o.a.createElement("div",{className:"header"},o.a.createElement(O,{en:"landscape"===a.orientation?"Recent Works":"Resume",pt:"landscape"===a.orientation?"Trabalhos Recentes":"Curr\xedculo"})),o.a.createElement("div",{className:"notes"},o.a.createElement(O,{en:"\n            Tip: ".concat("landscape"===a.orientation?"Click":"Touch","\n            on the section title to see more details about the selected work\n          "),pt:"\n            Dica: ".concat("landscape"===a.orientation?"Clique":"Toque","\n            nos t\xedtulos das se\xe7\xf5es para ver mais detalhes sobre o trabalho\n            selecionado\n          ")}),o.a.createElement(O,{en:o.a.createElement("span",null,"landscape"===a.orientation?"Click ":"Touch ",o.a.createElement("a",{href:"https://ludanin.github.io/docs/assets/cv.pdf"},"here")," ","for the .PDF version of this page."),pt:o.a.createElement("span",null,"landscape"===a.orientation?"Clique ":"Toque ",o.a.createElement("a",{href:"https://ludanin.github.io/docs/assets/cv.pdf"},"aqui")," ","para a vers\xe3o .PDF desta p\xe1gina.")})),o.a.createElement("h1",null,o.a.createElement("a",{href:"#project_e",onClick:n,"data-target":"/project_e"},o.a.createElement(O,{en:"Project E",pt:"Projeto E"})),o.a.createElement("span",{className:"subtitle"},"2019-2020")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(O,{en:" Project that aims to digitalize how society sees energy consumption, reeducating our habits by helping people become aware of any unsustainable behavior. ",pt:" Projeto que almeja digitalizar o modo que a sociedade v\xea o seu consumo de energia, reeducando nossos h\xe1bitos ao ajudar as pessoas a se conscientizarem de qualquer comportamento n\xe3o sustent\xe1vel. "})),o.a.createElement("li",null,o.a.createElement(O,{en:"\n              Due to a NDA further details of the Start-up cannot be\n              described/discussed. You can, however, check some screens & videos of\n              the project by clicking".concat(" ","\n            "),pt:'\n              "Devido a um acordo de confidencialidade, detalhes adicionais\n              sobre a Start-Up ainda n\xe3o podem ser discutidos. Voc\xea\n              pode, contudo, checar algumas fotos & v\xeddeos do projeto\n              ao clicar'.concat(" ","\n            ")}),o.a.createElement(O,{en:o.a.createElement("a",{href:"#project_e",onClick:n,"data-target":"/project_e"},"here"),pt:o.a.createElement("a",{href:"#project_e",onClick:n,"data-target":"/project_e"},"aqui")}),".",o.a.createElement("br",null),o.a.createElement(O,{en:" The content available on this link is taken from the final stage of our MVP. ",pt:" O conte\xfado dispon\xedvel neste link foi tirado do est\xe1gio final de nosso MVP. "})),o.a.createElement("li",null,o.a.createElement(O,{en:" I did the entire design, back-end, and front-end (web & mobile) aspects of the MVP. ",pt:" Fiz todo o design, back-end e front-end (web & mobile) do MVP. "}))),o.a.createElement("h1",null,o.a.createElement("a",{href:"#bgado",onClick:n,"data-target":"/bgado"},"bGado"),o.a.createElement("span",{className:"subtitle"},"2019")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(O,{en:" Livestock Management Software built with modern tech, tailored for the Brazilian market. ",pt:" Software de controle de pecu\xe1ria constru\xeddo com tecnologia moderna, lapidado para o mercado brasileiro. "})),o.a.createElement("li",null,o.a.createElement(O,{en:" Can work offline with the help of a Raspberry Pi installed near the client\u2019s ranch, synchronizing data with the cloud network whenever possible. ",pt:" Pode trabalhar off-line com a ajuda de computadores ARM instalados pr\xf3ximos dos ranchos das fazendas, sincronizando informa\xe7\xf5es entre a nuvem cloud e inst\xe2ncias locais assim quando poss\xedvel. "})),o.a.createElement("li",null,o.a.createElement(O,{en:" Grants a detailed overview of the animals, expenses, personnel, stock\u2014food, medicines, etc. ",pt:" Disponibiliza uma vis\xe3o geral detalhada dos animais, despesas, m\xe3o de obra,  ra\xe7\xe3o, medicinas, etc. "})),o.a.createElement("li",{className:"bullet"},o.a.createElement(O,{en:"Front-End (mobile): Flutter, using the BLOC architecture.",pt:"Front-End (mobile): Flutter, utilizando a arquitetura BLOC"})),o.a.createElement("li",{className:"bullet"},"Front-End (web): React (TypeScript) + Redux & Redux-Saga."),o.a.createElement("li",{className:"bullet"},o.a.createElement(O,{en:"Back-End: Coded in Go, uses PostgreSQL as DB.",pt:"Back-End: Programado em Go, utilizando o banco de dados PostgreSQL."}))),o.a.createElement("h1",null,o.a.createElement("a",{href:"#marborges",onClick:n,"data-target":"/marborges"},o.a.createElement(O,{en:"For ",pt:"Para a "}),"Marborges"),o.a.createElement("span",{className:"subtitle"},"2017-2018")),o.a.createElement("div",{className:"notes"},o.a.createElement(O,{en:" I did a series of works for Marborges (as a freelancer) that digitilized traditional workflows, these works also allowed them to acquire reports and automate routines (such as generating spreadsheets, etc.) in a faster way. ",pt:" Realizei uma s\xe9rie de trabalhos para a Marborges (como freelancer) que digitalizaram m\xe9todos de trabalhos tradicionais, e que tamb\xe9m permitiram os mesmos a adquirirem relat\xf3rios e automatizar rotinas (como gerar planilhas, etc.) de um modo bem mais r\xe1pido. "})),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(O,{en:" The company worked arduously transcribing and analyzing data harvest through traditional methods, e.g. ink and paper. I digitalized this process, reducing paper usage by more than ten thousand sheets every month. ",pt:" A empresa utilizava bastante esfor\xe7os para transcrever e analisar informa\xe7\xf5es coletadas por m\xe9todos tradicionais, ex.: caneta e papel. Digitalizei este processo por meio do desenvolvimento de softwares, reduzindo a quantidade de papel utilizada pela empresa em mais de dez mil folhas mensais. "})),o.a.createElement("li",null,o.a.createElement(O,{en:" The project synchronizes data from around 50 handheld devices. It\u2019s optimized to negate conflicts, such as repeated information. ",pt:" O projeto sincroniza informa\xe7\xf5es de cerca de 50 computadores de m\xe3o. Al\xe9m de ser otimizado para negar conflitos, como por exemplo, informa\xe7\xf5es repetidas. "})),o.a.createElement("li",{className:"bullet"},"Front-end (web): React + MaterializeCSS."),o.a.createElement("li",{className:"bullet"},o.a.createElement(O,{en:"Front-End (mobile): React-Native with Flow + Redux.",pt:"Front-End (mobile): React-Native com Flow + Redux.",animate:!1})),o.a.createElement("li",{className:"bullet"},"Back-end: Node.js")),o.a.createElement("ul",null))})),Z=t(24),K=t.n(Z),X=(t(42),function(e){Object(x.a)(t,e);var a=Object(T.a)(t);function t(e){var n;return Object(N.a)(this,t),(n=a.call(this,e)).getScrollbarWidth=n.getScrollbarWidth.bind(Object(w.a)(n)),n}return Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMobileVH(),window.innerWidth<=620?this.props.SET_ORIENTATION("portrait"):this.props.SET_ORIENTATION("landscape"),this.getScrollbarWidth(),setTimeout((function(){var a=window.location.href;"landscape"===e.props.Redux.orientation&&e.props.SDB_TOGGLE(),a.includes("resume")?e.props.STRY_REPLACE("/resume"):a.includes("project_e")?e.props.STRY_REPLACE("/project_e"):e.props.STRY_REPLACE("/home")}),1e3)}},{key:"getMobileVH",value:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}},{key:"getScrollbarWidth",value:function(){var e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);var a=document.createElement("div");e.appendChild(a);var t=e.offsetWidth-a.offsetWidth;return e.parentNode.removeChild(e),this.props.SET_SCROLLBAR(null!==t&&void 0!==t?t:12),null!==t&&void 0!==t?t:12}},{key:"render",value:function(){return o.a.createElement("div",{className:"SPLASH"},o.a.createElement("div",{className:K.a.centerSpin},o.a.createElement("div",{className:K.a.icon},o.a.createElement("i",{className:"mdi mdi-spin mdi-loading"})),o.a.createElement(O,{className:K.a.description,en:"Loading...",pt:"Carregando..."})))}}]),t}(o.a.Component)),$=Object(l.b)((function(e){return{Redux:e.Redux}}),n)(X),ee=(t(43),function(){var e=Object(l.d)((function(e){return e.Redux.stories})),a=e.current,t=e.nextStory,n=e.changingPages,s=Object(r.useState)("forward"),i=Object(H.a)(s,2),c=i[0],u=i[1];a!==t&&"forward"!==c&&u("forward");var d=a!==t?"transition":"",m="/"===a?"expanded":"";return o.a.createElement("div",{className:"NAVIGATOR ".concat(d," ").concat(m," ").concat(""===n?"":("forward"===n?"forward"!==c&&u("forward"):"backward"!==c&&u("backward"),"forward"===n?"nextPage":"previousPage")," ").concat(c)},function(e){switch(e){case"/home":return o.a.createElement(J,null);case"/resume":return o.a.createElement(Q,null);case"/project_e":return o.a.createElement(U,null);case"/":default:return o.a.createElement($,null)}}(a))}),ae=t(6),te=t.n(ae),ne=t(5),re=te.a.mark(be),oe=te.a.mark(he),se=te.a.mark(ve),ie=te.a.mark(ge),le=te.a.mark(fe),ce=te.a.mark(_e),ue=te.a.mark(ye),de=te.a.mark(Se),me=te.a.mark(Re),pe=te.a.mark(Oe),Ee=te.a.mark(Ne);function be(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.e)(d.LNG_CHANGE,he);case 2:case"end":return e.stop()}}),re)}function he(e){var a,t,n;return te.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(ne.d)((function(e){return e.Redux.language}));case 2:if(a=r.sent,t="en"!==a&&"pt"!==a,n=void 0!==e.payload,!1!==t||!1!==n){r.next=8;break}return r.next=8,Object(ne.c)({type:d.LNG_CHANGE,value:"en"===a?"en>pt":"pt>en",payload:"fromSaga"});case 8:if(!t||!n){r.next=13;break}return r.next=11,Object(ne.b)(400);case 11:return r.next=13,Object(ne.c)({type:d.LNG_CHANGE,value:"en>pt"===a?"pt":"en",payload:"fromSaga"});case 13:case"end":return r.stop()}}),oe)}function ve(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.e)(d.NOTF_DISMISS,ge);case 2:case"end":return e.stop()}}),se)}function ge(e){var a,t,n,r,o;return te.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(ne.b)(400);case 2:t=null!==(a=e.object)&&void 0!==a?a:[],n=Object(z.a)(t),s.prev=4,n.s();case 6:if((r=n.n()).done){s.next=12;break}return o=r.value,s.next=10,Object(ne.c)({type:d.NOTF_DELETE,value:o});case 10:s.next=6;break;case 12:s.next=17;break;case 14:s.prev=14,s.t0=s.catch(4),n.e(s.t0);case 17:return s.prev=17,n.f(),s.finish(17);case 20:case"end":return s.stop()}}),ie,null,[[4,14,17,20]])}function fe(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.e)(d.STRY_REPLACE,_e);case 2:case"end":return e.stop()}}),le)}function _e(e){var a,t,n,r,o;return te.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(ne.d)((function(e){return e.Redux.stories}));case 2:return a=s.sent,t=a.current,s.next=6,Object(ne.d)((function(e){return e.Redux}));case 6:if(n=s.sent,r=n.orientation,o=n.sidebar,"/"===t){s.next=18;break}if(void 0!==e.payload){s.next=18;break}if("visible"!==o||"portrait"!==r){s.next=14;break}return s.next=14,Object(ne.c)({type:d.SDB_TOGGLE});case 14:return s.next=16,Object(ne.b)(400);case 16:return s.next=18,Object(ne.c)({type:d.STRY_REPLACE,value:e.value,payload:e.value});case 18:case"end":return s.stop()}}),ce)}function ye(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.e)(d.STRY_PAGE_TURN,Se);case 2:case"end":return e.stop()}}),ue)}function Se(e){var a,t,n,r;return te.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(ne.d)((function(e){return e.Redux.stories}));case 2:return a=o.sent,o.next=5,Object(ne.d)((function(e){return e.Redux}));case 5:if(t=o.sent,n=t.orientation,r=t.sidebar,!a.changingPages){o.next=16;break}if("portrait"!==n||"visible"!==r){o.next=12;break}return o.next=12,Object(ne.c)({type:d.SDB_TOGGLE});case 12:return o.next=14,Object(ne.b)(300);case 14:return o.next=16,Object(ne.c)({type:d.STRY_PAGE_TURN,bool:e.bool,payload:"fromSaga"});case 16:case"end":return o.stop()}}),de)}function Re(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.e)(d.SDB_TOGGLE,Oe);case 2:case"end":return e.stop()}}),me)}function Oe(e){var a;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ne.d)((function(e){return e.Redux.sidebar}));case 2:return a=t.sent,t.next=5,"hiding"===a;case 5:if(!t.sent){t.next=10;break}return t.next=8,Object(ne.b)(300);case 8:return t.next=10,Object(ne.c)({type:d.SDB_TOGGLE,bool:e.bool,value:"hidden"});case 10:case"end":return t.stop()}}),pe)}function Ne(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)([be(),ve(),fe(),ye(),Re()]);case 2:case"end":return e.stop()}}),Ee)}t(45),t(46),t(47),t(48),t(49),t(50);var ke=Object(u.a)(),we=Object(c.e)(Y,Object(c.a)(ke));ke.run(Ne);var Te=function(){return o.a.createElement(l.a,{store:we},o.a.createElement(ee,null),o.a.createElement(A,{onlyLandscape:!0}),o.a.createElement(F,null),o.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.b9652c7d.chunk.js.map
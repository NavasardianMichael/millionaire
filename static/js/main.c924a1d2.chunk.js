(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.f1a49803.svg"},27:function(e,t,a){e.exports=a.p+"static/media/preloader.d08e2137.svg"},30:function(e,t,a){e.exports=a(49)},39:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/final_answer.b0092313.mp3"},45:function(e,t,a){e.exports=a.p+"static/media/correct_answer.d7a6e880.mp3"},46:function(e,t,a){e.exports=a.p+"static/media/wrong_answer.e55862ad.mp3"},47:function(e,t,a){e.exports=a.p+"static/media/fiftyFifty.c0276851.mp3"},48:function(e,t,a){e.exports=a.p+"static/media/resign.a5d66bba.mp3"},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),u=a(12),l=a(4),o=a(25),i=a(10),d=a(1),m={gameProcStatus:"start",currentLanguage:"en",currentDifficultyLevel:"easy",currentRoundIndex:0,answerProcStatus:"unchecked",currentAnswer:"",currentAnswerStatus:null,answersDisabledStatus:!1,en:[],ru:[],am:[{question:"\u0535\u055e\u0580\u0562 \u0567 \u057f\u0565\u0572\u056b \u0578\u0582\u0576\u0565\u0581\u0565\u056c \u0561\u057e\u0561\u0580\u0561\u0575\u0580\u056b \u0573\u0561\u056f\u0561\u057f\u0561\u0574\u0561\u0580\u057f\u0568\u0589",correct_answer:"451\u0569\u2024",variants:["451\u0569\u2024","481\u0569\u2024","371\u0569\u2024","551\u0569\u2024"]},{question:"\u0546\u0577\u057e\u0561\u056e\u0576\u0565\u0580\u056b\u0581 \u0578\u055e\u057e \u0540\u0540 \u0561\u0566\u0563\u0561\u0575\u056b\u0576 \u0570\u0565\u0580\u0578\u057d \u0579\u0567\u0589",correct_answer:"\u054f\u056b\u0563\u0580\u0561\u0576 \u054a\u0565\u057f\u0580\u0578\u057d\u0575\u0561\u0576",variants:["\u0547\u0561\u057c\u056c \u0531\u0566\u0576\u0561\u057e\u0578\u0582\u0580","\u0539\u0561\u0569\u0578\u0582\u056c \u053f\u0580\u057a\u0565\u0575\u0561\u0576","\u054f\u056b\u0563\u0580\u0561\u0576 \u054a\u0565\u057f\u0580\u0578\u057d\u0575\u0561\u0576","\u053f\u0561\u0580\u0565\u0576 \u0534\u0565\u0574\u056b\u0580\u0573\u0575\u0561\u0576"]}],currentSoundProps:{},audienceHelpPercents:[],helpItemsUsedStatus:{},helpItemShownStatus:{},currentHelpItemData:null};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA/SET_ROUNDS":return Object(d.a)(Object(d.a)({},e),{},Object(i.a)({},e.currentLanguage,t.rounds));case"GAME/SET_CURRENT_ROUND_INDEX":return Object(d.a)(Object(d.a)({},e),{},{currentRoundIndex:t.index});case"DATA/SET_ANSWER_PROC_STATUS":return Object(d.a)(Object(d.a)({},e),{},{answerProcStatus:t.status});case"DATA/SET_CURRENT_ANSWER":return Object(d.a)(Object(d.a)({},e),{},{currentAnswer:t.answer});case"DATA/SET_NEXT_ROUND":return Object(d.a)(Object(d.a)({},e),{},{currentRoundIndex:e.currentRoundIndex+1});case"GAME/SET_GAME_PROC_STATUS":return t.status||e.currentAnswerStatus?Object(d.a)(Object(d.a)({},e),{},{gameProcStatus:t.status}):Object(d.a)(Object(d.a)({},e),{},{gameProcStatus:"lost"});case"GAME/HIGHLIGHT_TRUE_ANSWER":return t.currentAnswer===e[e.currentLanguage][e.currentRoundIndex].correct_answer?Object(d.a)(Object(d.a)({},e),{},{currentAnswerStatus:!0}):Object(d.a)(Object(d.a)({},e),{},{currentAnswerStatus:!1});case"SOUNDS/SET_CURRENT_SOUND_PROPS":var a=t.url,n=t.playFromPosition,r=t.playStatus,c=t.autoLoad,s=t.autoPlay;return Object(d.a)(Object(d.a)({},e),{},{currentSoundProps:{url:a,playFromPosition:n,playStatus:r,autoLoad:c,autoPlay:s}});case"GAME/SET_ANSWERS_DISABLED_STATUS":return Object(d.a)(Object(d.a)({},e),{},{answersDisabledStatus:t.status});case"SOUNDS/SET_CURRENT_SOUND_PROPS_AFTER_COMPARE":var u=e.currentAnswerStatus?t.rightAnswerSoundUrl:t.wrongAnswerSoundUrl;return Object(d.a)(Object(d.a)({},e),{},{currentSoundProps:Object(d.a)(Object(d.a)({},e.currentSoundProps),{},{url:u})});case"GAME/SET_HELP_ITEM_USED_STATUS":return Object(d.a)(Object(d.a)({},e),{},{helpItemsUsedStatus:Object(d.a)(Object(d.a)({},e.helpItemsUsedStatus),{},Object(i.a)({},t.helpItem,t.status))});case"GAME/SET_HELP_ITEM_SHOWN_STATUS":return Object(d.a)(Object(d.a)({},e),{},{helpItemShownStatus:t.helpItem?Object(i.a)({},t.helpItem,t.status):{}});case"GAME/SET_CURRENT_HELP_ITEM_DATA":return t.helpItem&&"changeQuestion"===t.helpItem?Object(d.a)(Object(d.a)({},e),{},Object(i.a)({currentHelpItemData:t.helpItemData},e.currentLanguage,e[e.currentLanguage].map((function(a,n){return n===e.currentRoundIndex?t.helpItemData:Object(d.a)({},a)})))):t.helpItem&&"fiftyFifty"===t.helpItem?Object(d.a)(Object(d.a)({},e),{},Object(i.a)({currentHelpItemData:t.helpItemData},e.currentLanguage,e[e.currentLanguage].map((function(a,n){return n!==e.currentRoundIndex?a:Object(d.a)(Object(d.a)({},a),{},{variants:e[e.currentLanguage][e.currentRoundIndex].variants.filter((function(e,a){return null===t.helpItemData[a]?e:""}))})})))):Object(d.a)(Object(d.a)({},e),{},{currentHelpItemData:t.helpItemData});default:return e}},h=Object(u.c)({data:p}),S=a(13),f=a(3),E=(a(39),a(26)),w=a.n(E);var b=function(){return r.a.createElement("div",{id:"logo"},r.a.createElement("img",{src:w.a,alt:"logo",title:"logo"}))};var g=Object(l.b)((function(e){return{helpItemShownStatus:e.data.helpItemShownStatus,currentHelpItemData:e.data.currentHelpItemData}}),null)((function(e){var t=Math.max.apply(null,e.currentHelpItemData),a=e.helpItemShownStatus.audienceHelp&&e.currentHelpItemData.map((function(e,a){return r.a.createElement("div",{className:"d-flex",key:"audienceHelpVariant".concat(a)},r.a.createElement("div",null,String.fromCharCode(65+a),":"),r.a.createElement("div",{className:"audience-help-percent",style:{width:"".concat(100*e/t,"%")}}),r.a.createElement("div",null,"".concat(e,"%")))}));return r.a.createElement("div",{id:"audienceHelp",className:e.helpItemShownStatus.audienceHelp?"d-block":"d-none"},a)})),v=a(27),I=a.n(v);var A=function(){return r.a.createElement("img",{src:I.a,className:"w-25",alt:"preloader",title:"preloader"})};var O=Object(l.b)((function(e){return{helpItemShownStatus:e.data.helpItemShownStatus,currentHelpItemData:e.data.currentHelpItemData}}),null)((function(e){return null!==e.currentHelpItemData&&e.helpItemShownStatus.callFriend?r.a.createElement("div",{id:"callFriendHelp",className:e.helpItemShownStatus.callFriend?"d-block":"d-none"},r.a.createElement("h4",null,e.currentHelpItemData.fullName),r.a.createElement("img",{className:"w-75",src:e.currentHelpItemData.pictureUrl,alt:"call to ".concat(e.currentHelpItemData.fullName),title:"call to ".concat(e.currentHelpItemData.fullName)}),r.a.createElement("p",{className:"friend-text"},"I think the right answer is ",String.fromCharCode(65+e.currentHelpItemData.variant)," ")):r.a.createElement("div",{className:e.helpItemShownStatus.callFriend?"d-block":"d-none"},r.a.createElement(A,null))}));var y=Object(l.b)((function(e){return{helpItemShownStatus:e.data.helpItemShownStatus}}),null)((function(e){var t=!!e.helpItemShownStatus.audienceHelp,a=!!e.helpItemShownStatus.callFriend;return console.log(a,t),r.a.createElement("div",{id:"header"},r.a.createElement(b,{className:t||a?"d-block":"d-none"}),r.a.createElement(g,{className:t?"d-block":"d-none"}),r.a.createElement(O,{className:a?"d-block":"d-none"}))})),_=a(9),T=a.n(_),N=a(15);function D(e){return{type:"DATA/SET_CURRENT_ANSWER",answer:e}}function j(e){return{type:"DATA/SET_ANSWER_PROC_STATUS",status:e}}function R(e){return{type:"GAME/SET_GAME_PROC_STATUS",status:e}}function P(e){return{type:"GAME/SET_ANSWERS_DISABLED_STATUS",status:e}}function U(e){return new Promise((function(t){return setTimeout(t,e)}))}function x(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"PLAYING";return{type:"SOUNDS/SET_CURRENT_SOUND_PROPS",url:e,playFromPosition:t,playStatus:r,autoLoad:a,autoPlay:n}}function k(e,t){return{type:"SOUNDS/SET_CURRENT_SOUND_PROPS_AFTER_COMPARE",rightAnswerSoundUrl:e,wrongAnswerSoundUrl:t}}function M(e,t){return{type:"GAME/SET_HELP_ITEM_USED_STATUS",helpItem:e,status:t}}function H(e,t){return{type:"GAME/SET_HELP_ITEM_SHOWN_STATUS",helpItem:e,status:t}}function L(e,t){return{type:"GAME/SET_CURRENT_HELP_ITEM_DATA",helpItem:t,helpItemData:e}}function C(e,t){return function(){var a=Object(N.a)(T.a.mark((function a(n){var r,c,s,u,l;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e,a.next="fiftyFifty"===a.t0?3:"audienceHelp"===a.t0?11:"callFriend"===a.t0?19:"changeQuestion"===a.t0?25:27;break;case 3:for((r=[0,1,2,3]).splice(t,1,null),c=Math.round(3*Math.random());c===t;)c=Math.round(3*Math.random());return r.splice(c,1,null),n(L(r,e)),a.abrupt("break",28);case 11:return s=Math.round(40+40*Math.random()),u=Math.round(Math.random()*(100-s)),l=Math.round(Math.random()*(100-(u+s))),(r=[u,l,100-(s+u+l)]).splice(t,0,s),n(L(r,e)),a.abrupt("break",28);case 19:return a.t1=fetch("https://randomuser.me/api/?inc=name,picture").then((function(e){return e.json()})),a.next=22,function(a){(r={}).fullName=a.results[0].name.first+" "+a.results[0].name.last,r.pictureUrl=a.results[0].picture.large;var c=Math.round(3*Math.random());r.variant=c>0?t:c,n(L(r,e))};case 22:return a.t2=a.sent,a.t1.then.call(a.t1,a.t2),a.abrupt("break",28);case 25:return fetch("https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple").then((function(e){return e.json()})).then((function(t){var a=t.results[0];a.variants=a.incorrect_answers;var r=Math.floor(3*Math.random());a.rightAnswerIndex=r,a.variants.splice(r,0,a.correct_answer),delete a.incorrect_answers,n(L(a,e))})),a.abrupt("break",28);case 27:console.log("something went wrong");case 28:case 29:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}var F=function(){var e=Object(l.c)();return r.a.createElement("div",{id:"mainCommands"},r.a.createElement(S.b,{to:"/game",className:"btn btn-outline-light my-2 py-2",onClick:function(){e(R("start")),e({type:"GAME/SET_CURRENT_ROUND_INDEX",index:0}),e(L(null))}},"Start game"),r.a.createElement(S.b,{to:"/rules",className:"btn btn-outline-light my-2 py-2"},"Rules"))};var G=function(){return r.a.createElement("div",{className:"lost-page"},r.a.createElement(y,null),r.a.createElement("h4",null,"You lost"),r.a.createElement(F,null))};var W=function(){return r.a.createElement("div",{id:"rules"},r.a.createElement("p",{className:"pt-5 pr-1"},"Who Wants to Be a Millionaire? (abbreviated WWTBAM and informally known as simply Millionaire) is an international television game show franchise of British origin, created by David Briggs, Mike Whitehill and Steven Knight. In its format, currently owned and licensed by Sony Pictures Television, contestants tackle a series of multiple-choice questions to win large cash prizes in a format that twists on many game show genre conventions \u2013 only one contestant plays at a time, similar to radio quizzes; contestants are given the question before attempting an answer, and have no time limit to answer questions; and the amount offered increases as they tackle questions that become increasingly difficult. The maximum cash prize offered in most versions of the format is one million of the local currency. The original British version debuted on 4 September 1998 on the ITV network and was aired until its final episode on 11 February 2014. A revived series of seven episodes to commemorate its 20th anniversary aired from 5 to 11 May 2018. The revival received mostly positive reviews from critics and fans, as well as high viewing figures, leading ITV to renew the show for another series. Since its debut, international variants of the game show have been aired in around 160 countries worldwide."))};function q(e){for(var t=[["amp","&"],["apos","'"],["#x27","'"],["#x2F","/"],["#39","'"],["#47","/"],["lt","<"],["gt",">"],["nbsp"," "],["quot",'"']],a=0,n=t.length;a<n;++a)e=e.replace(new RegExp("&"+t[a][0]+";","g"),t[a][1]);return e}var B=a(28),Q=a.n(B);var V=function(e){return r.a.createElement("div",{className:"question"},r.a.createElement("h5",null,q(e.question)))};var z=function(e){var t=Object(l.c)(),n=e.currentAnswer===e.answer&&"checking"===e.answerProcStatus?"orange":"checked"===e.answerProcStatus&&e.currentAnswer===e.answer&&e.currentAnswer===e.correctAnswer||"checked"===e.answerProcStatus&&e.currentAnswer!==e.answer&&e.answer===e.correctAnswer?"lightgreen":"checked"===e.answerProcStatus&&e.currentAnswer===e.answer&&e.currentAnswer!==e.correctAnswer?"red":"";return r.a.createElement("div",{className:"col-md-6 answer-item"},r.a.createElement("button",{to:"game",className:"btn btn-outline-light text-left w-100 my-2 py-2",onClick:function(n){var r,c,s,u;t((r=e.answer,function(){var e=Object(N.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j("checking")),t(P(!0)),t(D(r)),e.next=5,U(3e3);case 5:return t(j("checked")),t({type:"GAME/HIGHLIGHT_TRUE_ANSWER",currentAnswer:r}),k(),e.next=10,U(4e3);case 10:t(j("roundFinal")),t(R()),t(P(!1)),t({type:"DATA/SET_NEXT_ROUND"});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t((c=a(44),s=a(45),u=a(46),function(){var e=Object(N.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(c)),e.next=3,U(3e3);case 3:t(k(s,u));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},style:{backgroundColor:n},disabled:e.answersDisabledStatus},r.a.createElement("span",{className:"answer-variant-char"},e.answerVariantChar,":"),r.a.createElement("span",{className:"asnwer-text"},e.answer)))},X=a(29);var J=Object(l.b)((function(e){return{currentLanguage:e.data.currentLanguage,currentRoundIndex:e.data.currentRoundIndex,rounds:e.data,answersDisabledStatus:e.data.answersDisabledStatus,helpItemsUsedStatus:e.data.helpItemsUsedStatus}}),null)((function(e){var t=Object(l.c)(),n=document.styleSheets[0];n.insertRule("@-webkit-keyframes scaling {\n        50% {-webkit-transform:scale(1.05)} \n        90% {-webkit-transform:scale(1.0)}\n    }",n.cssRules.length);var c={animationName:"scaling",animationDuration:"1.5s",animationIterationCount:"infinite",animationFillMode:"forwards"};function s(n){var r=n.currentTarget.name,c=e.rounds[e.currentLanguage][e.currentRoundIndex].rightAnswerIndex;t(function(e,t,a){return function(){var n=Object(N.a)(T.a.mark((function n(r){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(e,"selecting")),r(x(a)),n.next=4,U(700);case 4:r(M(e,!0)),r(C(e,t)),r(H(e,!0));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(r,c,a(47)))}return r.a.createElement("div",{id:"help"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-light",name:"fiftyFifty",disabled:e.answersDisabledStatus||e.helpItemsUsedStatus.fiftyFifty||Object.values(e.helpItemsUsedStatus).includes("selecting"),style:e.helpItemsUsedStatus.fiftyFifty?{}:c,onClick:s},r.a.createElement("span",{className:"help-icon font-weight-bold"},"50/50"))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-light",name:"callFriend",disabled:e.answersDisabledStatus||e.helpItemsUsedStatus.callFriend||Object.values(e.helpItemsUsedStatus).includes("selecting"),style:e.helpItemsUsedStatus.callFriend?{}:c,onClick:s},r.a.createElement("i",{className:"help-icon fas fa-phone-alt"}))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-light",name:"audienceHelp",disabled:e.answersDisabledStatus||e.helpItemsUsedStatus.audienceHelp||Object.values(e.helpItemsUsedStatus).includes("selecting"),style:e.helpItemsUsedStatus.audienceHelp?{}:c,onClick:s},r.a.createElement("i",{className:"help-icon fas fa-users"}))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-light",name:"changeQuestion",disabled:e.answersDisabledStatus||e.helpItemsUsedStatus.changeQuestion||Object.values(e.helpItemsUsedStatus).includes("selecting"),style:e.helpItemsUsedStatus.changeQuestion?{}:c,onClick:s},r.a.createElement("i",{className:"help-icon fas fa-sync-alt"})))))}));var Y=Object(l.b)((function(e){return{currentLanguage:e.data.currentLanguage,currentRoundIndex:e.data.currentRoundIndex}}),null)((function(e){for(var t=[],a=15;a>=1;a--)t.push(r.a.createElement("div",{key:"roundRow".concat(a+1),className:a===e.currentRoundIndex+1?"highlightedRound":""},"".concat(a,": ").concat(1e3*a,"$")));return r.a.createElement("div",{id:"rounds"},t)}));var $=function(e){var t=Object(n.useState)(!(window.outerWidth<=768)),a=Object(X.a)(t,2),c=a[0],s=a[1];return r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",{className:"menu ".concat(c?"":"closed")},r.a.createElement(J,null),r.a.createElement(Y,null)),r.a.createElement("button",{className:"menu-toggler btn",onClick:function(){s((function(e){return!e}))}},r.a.createElement("i",{className:"fas fa-bars text-light"})))};var K=Object(l.b)((function(e){return{currentLanguage:e.data.currentLanguage,currentRoundIndex:e.data.currentRoundIndex,rounds:e.data,answerProcStatus:e.data.answerProcStatus,currentAnswer:e.data.currentAnswer,currentAnswerStatus:e.data.currentAnswerStatus,gameProcStatus:e.data.gameProcStatus,currentSoundProps:e.data.currentSoundProps,answersDisabledStatus:e.data.answersDisabledStatus,currentDifficultyLevel:e.data.currentDifficultyLevel,audienceHelpPercents:e.data.audienceHelpPercents,currentHelpItemData:e.data.currentHelpItemData,helpItemShownStatus:e.data.helpItemShownStatus}}),null)((function(e){var t=Object(l.c)();if(Object(n.useEffect)((function(){var n;"en"===e.currentLanguage&&t((n="easy",function(e){fetch("https://opentdb.com/api.php?amount=15&difficulty=".concat(n,"&type=multiple")).then((function(e){return e.json()})).then((function(t){t.results.forEach((function(e){e.variants=e.incorrect_answers;var t=Math.floor(3*Math.random());e.rightAnswerIndex=t,e.variants.splice(t,0,e.correct_answer),delete e.incorrect_answers})),e(function(e,t){return{type:"DATA/SET_ROUNDS",difficulty:e,rounds:t}}(n,t.results))}))})),t(x(a(48)))}),[e.currentLanguage,t]),Object(n.useEffect)((function(){t(L(null)),t(H(null))}),[e.currentRoundIndex,t]),"lost"===e.gameProcStatus&&!e.currentAnswerStatus&&"boolean"===typeof e.currentAnswerStatus)return r.a.createElement(f.a,{to:"/game/lostPage"});if(0===e.rounds[e.currentLanguage].length)return r.a.createElement(A,null);var c=e.rounds[e.currentLanguage][e.currentRoundIndex].variants.map((function(t,a){return r.a.createElement(z,{answer:q(t),answerVariantChar:String.fromCharCode(65+a),answersDisabledStatus:e.answersDisabledStatus,answerProcStatus:e.answerProcStatus,currentAnswer:e.currentAnswer,key:t,currentAnswerStatus:e.currentAnswerStatus,correctAnswer:e.rounds[e.currentLanguage][e.currentRoundIndex].correct_answer})}));return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{id:"game"},r.a.createElement(y,null),r.a.createElement(Q.a,{url:e.currentSoundProps.url||"",playFromPosition:e.currentSoundProps.playFromPosition,autoLoad:e.currentSoundProps.autoLoad,autoPlay:e.currentSoundProps.autoPlay,playStatus:e.currentSoundProps.playStatus||"STOPPED"}),r.a.createElement(V,{question:q(e.rounds[e.currentLanguage][e.currentRoundIndex].question)}),r.a.createElement("div",{className:"row answers"},c,r.a.createElement("span",{className:"changing-question-arrows ".concat(e.helpItemShownStatus.changeQuestion?"d-inline":"d-none")},r.a.createElement("i",{className:"fas fa-sync-alt"})))),r.a.createElement($,null))}));var Z=function(){return r.a.createElement(S.a,null,r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"container-fluid pr-0 text-center"},r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,component:y})),r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/game/lostPage",exact:!0,component:G}),r.a.createElement(f.b,{path:"/rules",component:W}),r.a.createElement(f.b,{path:"/game",component:K}),r.a.createElement(f.b,{path:"/",exact:!0,component:F})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=Object(u.d)(h,Object(u.a)(o.a)),te=r.a.createElement(l.a,{store:ee},r.a.createElement(Z,null));window.store=ee,s.a.render(te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c924a1d2.chunk.js.map
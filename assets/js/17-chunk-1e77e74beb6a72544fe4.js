(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"5/dT":function(n,t,i){},qDcA:function(n,t,i){"use strict";i.r(t);var s=i("8VmE"),e=i.n(s),o=i("lOrp"),a={name:"Question3",components:{},data:function(){return{began:!1,actived:!1,routing:!1}},computed:e()({},Object(o.c)("images",{text:"questions/9/text",mountain:"questions/9/mountain",canyon:"questions/9/canyon",bird:"questions/9/bird"}),{objectClasses:function(){return{"is-twinkling":this.actived,"is-ending":this.routing}}}),mounted:function(){var n=this;this.began=!1,this.loadImamges("questions/9").then((function(){n.wait(1e3).then((function(){n.began=!0}))}))},methods:e()({},Object(o.b)(["setLoading"]),Object(o.b)("images",{loadImamges:"load"}),Object(o.b)("game",{answer:"setAnswer",toQuestion:"toRandomQuestion"}),{onAnimationEnd:function(n){var t=n.target===this.$refs.canyon,i="entering-left"===n.animationName;t&&i&&(this.actived=!0)},onClick:function(n){if(!this.actived)return!1;this.routing=!0,this.actived=!1;var t=this.$route.params.order,i={mountain:0,canyon:1}[n];return this.answer({index:t,answer:i}),this.wait(100).then(this.nextQuestion),!0},nextQuestion:function(){this.toQuestion(this.$router)}})},r=(i("uXf4"),i("psIG")),c=Object(r.a)(a,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",n._g({staticClass:"d-flex flex-column align-items-center question-9"},{webkitAnimationEnd:n.onAnimationEnd,animationEnd:n.onAnimationEnd}),[n.began?[i("div",{ref:"mountain",staticClass:"frame mountain",class:n.objectClasses,on:{click:function(t){return n.onClick("mountain")}}},[i("img",{staticClass:"bird",attrs:{src:n.bird.src},on:{error:function(n){n.target.style.display="none"}}}),i("img",{staticClass:"mountain",attrs:{src:n.mountain.src},on:{error:function(n){n.target.style.display="none"}}})]),i("div",{ref:"canyon",staticClass:"frame canyon",class:n.objectClasses,on:{click:function(t){return n.onClick("canyon")}}},[i("img",{staticClass:"canyon",attrs:{src:n.canyon.src},on:{error:function(n){n.target.style.display="none"}}})])]:n._e(),i("img",{staticClass:"text",attrs:{src:n.text.src},on:{error:function(n){n.target.style.display="none"}}})],2)}),[],!1,null,null,null);t.default=c.exports},uXf4:function(n,t,i){"use strict";i("5/dT")}}]);
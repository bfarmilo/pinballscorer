webpackJsonp([1],{"+EVY":function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=t("KM04"),r=(t.n(e),t("ZAL5")),c=t.n(r),s=this;o.default=function(n){return Object(e.h)("div",{class:c.a.home},Object(e.h)("div",{class:c.a.controlArea},Object(e.h)("div",{class:n.newScore?c.a.newScore:c.a.score},n.score),Object(e.h)("div",{class:c.a.buttonArea,style:{gridTemplateColumns:n.config.scoreConfig.map(function(){return"1fr"}).join(" ")}},n.config.scoreConfig.map(function(o){return Object(e.h)("div",{class:c.a.pointButton,key:o,onClick:function(t){return n.addToScore(t,o,s.audio)}},o)})),Object(e.h)("div",{class:c.a.bonusArea,style:{gridTemplateColumns:Array.from(n.config.bonusConfig).map(function(){return"1fr"}).join(" ")}},Array.from(n.config.bonusConfig).map(function(o){return Object(e.h)("div",{class:n.bonus.has(o)?c.a.highlight:c.a.bonusButton,key:o,onClick:function(t){return n.setBonus(t,o,s.audio)}},o)})),Object(e.h)("div",{class:c.a.resetButton,onClick:function(o){return n.resetScore(o,s.audio)}},"Reset")))}},ZAL5:function(n){n.exports={home:"home__2Q5nZ",newScore:"newScore__GKKxw",score:"score__1ta9Y",controlArea:"controlArea__1QwF6",bonusArea:"bonusArea__1nXn1",buttonArea:"buttonArea__2fQgl",highlight:"highlight__1rY8f",pointButton:"pointButton__1gKfb",bonusButton:"bonusButton__1GPus",resetButton:"resetButton__1SGXG"}}});
//# sourceMappingURL=route-home.chunk.7d44b.js.map
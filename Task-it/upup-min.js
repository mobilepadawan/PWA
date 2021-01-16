//! UpUp
//! version : 1.1.0
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://github.com/TalAter/UpUp
(function(t){"use strict";var n=navigator.serviceWorker;if(!n)return this.UpUp=null,t;var e={"service-worker-url":"upup.sw.min.js","registration-options":{}};this.UpUp={start:function(t){this.addSettings(t),n.register(e["service-worker-url"],e["registration-options"]).then((function(t){(t.installing||n.controller||t.active).postMessage({action:"set-settings",settings:e})})).catch((function(t){}))},addSettings:function(n){"string"==typeof(n=n||{})&&(n={content:n}),["content","content-url","assets","service-worker-url","cache-version"].forEach((function(i){n[i]!==t&&(e[i]=n[i])})),n.scope!==t&&(e["registration-options"].scope=n.scope)},debug:function(t){!(arguments.length>0)||!!t}}}).call(this);
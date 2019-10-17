(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{48:function(t,e,n){t.exports=n(78)},53:function(t,e,n){},58:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},59:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(23),o=n.n(i),l=(n(53),n(8)),s=n(6),c=n(10),u=n(9),m=n(11),h=n(18),p=function(t){function e(t){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).call(this,t))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navigationMenu","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navigationMenu"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/modulesMap"},"Containers map ",r.a.createElement("span",{class:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/modulesList"},"Containers list")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/truckTracking"},"Truck tracking"))))))}}]),e}(r.a.Component),d=(n(58),n(59),n(21)),f=n(2),v=n(15),g=n(26),k=n.n(g),b=function(){return function(t,e){k.a.get("http://localhost:5555/trucks/getMeasurements").then(function(e){t({type:"GET_TRUCK_PATH_SUCCESS",payload:e.data})}).catch(function(e){t({type:"GET_TRUCK_PATH_ERROR",payload:e})})}},y=function(t){return function(e,n){e({type:"ANIMATION_STATE_CHANGE",payload:t})}},E=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).loadTruckPath=n.loadTruckPath.bind(Object(f.a)(n)),n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"loadTruckPath",value:function(){this.props.loadPath(),this.props.changeAnimationState("reset")}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"pt-1"},r.a.createElement("button",{onClick:function(){return t.loadTruckPath()},className:"btn-sm btn btn-secondary"},"Load truck path")),r.a.createElement("div",{className:"pt-1"},r.a.createElement("div",{className:"d-inline-block"},r.a.createElement("button",{onClick:function(){return t.props.changeAnimationState("play")},className:"btn-sm btn btn-secondary"},r.a.createElement("i",{class:"fas fa-play"}))),r.a.createElement("div",{className:"d-inline-block pl-1"},r.a.createElement("button",{onClick:function(){return t.props.changeAnimationState("pause")},className:"btn-sm btn btn-secondary"},r.a.createElement("i",{class:"fas fa-stop"}))),r.a.createElement("div",{className:"d-inline-block pl-1"},r.a.createElement("button",{onClick:function(){return t.props.changeAnimationState("reset")},className:"btn-sm btn btn-secondary"},r.a.createElement("i",{class:"fas fa-undo"})))))}}]),e}(r.a.Component),_=Object(v.b)(null,function(t){return{loadPath:function(){return t(b())},changeAnimationState:function(e){return t(y(e))}}})(E),M=n(81),O=n(79),S=n(80),L=n(82),j=n(83),w=n(84),P=function(t){return t>=0&&t<=40?"/green-bin.png":t>40&&t<=65?"/yellow-bin.png":"/orange-bin.png"},T=n(1),A=n.n(T),C=function(t){function e(t){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).call(this,t))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"generateLayerControl",value:function(t,e,n){return r.a.createElement(M.a.BaseLayer,{name:e,checked:n},r.a.createElement(O.a,null,t.map(function(t,e){var n=new A.a.icon({iconUrl:""+P(t.volume)});return r.a.createElement(S.a,{key:t._id,position:[t.location.lat,t.location.lng],icon:n},r.a.createElement(L.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("div",null,"Id: ",t._id),r.a.createElement("div",null,"Type: ",t.type),r.a.createElement("div",null,"Temperature: ",t.temperature," C"),r.a.createElement("div",null,"Volume: ",t.volume,"%"),r.a.createElement("div",null,"Description: ",t.description),r.a.createElement("div",null,"Latitude: ",t.location.lat),r.a.createElement("div",null,"Longitude: ",t.location.lng))))})))}},{key:"render",value:function(){var t=null;if("/modulesList"===this.props.currentPath)t=r.a.createElement(j.a,{center:this.props.center,zoom:this.props.zoom,style:{height:"75%",width:"100%"}},r.a.createElement(w.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),this.props.modules.map(function(t,e){var n=new A.a.icon({iconUrl:""+P(t.volume)});return r.a.createElement(S.a,{key:t._id,position:[t.location.lat,t.location.lng],icon:n},r.a.createElement(L.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("div",null,"Id: ",t._id),r.a.createElement("div",null,"Type: ",t.type),r.a.createElement("div",null,"Temperature: ",t.temperature," C"),r.a.createElement("div",null,"Volume: ",t.volume,"%"),r.a.createElement("div",null,"Description: ",t.description),r.a.createElement("div",null,"Latitude: ",t.location.lat),r.a.createElement("div",null,"Longitude: ",t.location.lng))))}));else{var e=[],n=[],a=[],i=[],o=[],l=!0,s=!1,c=void 0;try{for(var u,m=this.props.modules[Symbol.iterator]();!(l=(u=m.next()).done);l=!0){var h=u.value;h.volume>=0&&h.volume<=40?e.push(h):h.volume>40&&h.volume<=65?n.push(h):h.volume>65&&h.volume<=85?a.push(h):i.push(h),o.push(h)}}catch(p){s=!0,c=p}finally{try{l||null==m.return||m.return()}finally{if(s)throw c}}t=r.a.createElement(j.a,{center:this.props.center,zoom:this.props.zoom,style:{height:"100%",width:"100%"}},r.a.createElement(w.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(M.a,{position:"topleft",collapsed:!1},this.generateLayerControl(e,"0% - 40%",!1),this.generateLayerControl(n,"40% - 65%",!1),this.generateLayerControl(a,"65% - 85%",!1),this.generateLayerControl(i,"85% - 100%",!1),this.generateLayerControl(o,"all",!0)))}return r.a.createElement("div",{className:"w-100 h-100"},t)}}]),e}(r.a.Component),N=function(){return function(t,e){k.a.get("http://localhost:5555/modules/getAll").then(function(e){t({type:"GET_MODULES_SUCCESS",payload:e.data.modules})}).catch(function(e){t({type:"GET_MODULES_ERROR",payload:e})})}},D=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).map={mapLatLng:[42.68826,23.325639],mapZoom:14},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.loadModules()}},{key:"componentDidUpdate",value:function(){console.log(this.props.modules)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-main"},r.a.createElement(C,{center:this.map.mapLatLng,zoom:this.map.mapZoom,modules:this.props.modules,currentPath:this.props.location.pathname}))}}]),e}(r.a.Component),R=Object(v.b)(function(t){return{modules:t.modules.modules}},function(t){return{loadModules:function(){return t(N())}}})(D),x=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).map={mapLatLng:[42.68826,23.325639],mapZoom:12},n.selectedModule=null,n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.loadModules()}},{key:"filterByVolume",value:function(t){this.props.filterModules(t)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"half-side float-left"},r.a.createElement("div",{className:"pr-2 pl-2 pt-2"},r.a.createElement("table",{className:"table table-bordered table-hover text-center text-xs"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,r.a.createElement("div",{class:"dropdown d-inline-block pointer-hover",id:"fillRateDropdown","data-toggle":"dropdown"},"Volume ",r.a.createElement("i",{class:"fas fa-sort-down dropdown-toggle"})),r.a.createElement("div",{class:"dropdown-menu w-15"},r.a.createElement("div",{onClick:function(){return t.filterByVolume("lowest")},class:"w-100 pointer-hover btn btn-success"},"0% - 40%"),r.a.createElement("div",{onClick:function(){return t.filterByVolume("low")},class:"w-100 pointer-hover btn btn-warning btn-yellow"},"40% - 65%"),r.a.createElement("div",{onClick:function(){return t.filterByVolume("avg")},class:"w-100 pointer-hover btn btn-warning"},"65% - 85%"),r.a.createElement("div",{onClick:function(){return t.filterByVolume("high")},class:"w-100 pointer-hover btn btn-danger"},"85% - 100%"),r.a.createElement("div",{onClick:function(){return t.filterByVolume("all")},class:"w-100 pointer-hover btn btn-secondary"},"All"))),r.a.createElement("th",null,"Temperature"),r.a.createElement("th",null,"Location"),r.a.createElement("th",null,"Type"))),r.a.createElement("tbody",null,this.props.filteredModules.map(function(t,e){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,e+1),r.a.createElement("td",null,t._id),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.volume,"%"),r.a.createElement("td",null,t.temperature," C"),r.a.createElement("td",null,"Lat: ",t.location.lat,"; Lng: ",t.location.lng),r.a.createElement("td",null,t.type))}))))),r.a.createElement("div",{className:"container-main half-side float-left pr-2 pl-2 pt-2"},r.a.createElement(C,{center:this.map.mapLatLng,zoom:this.map.mapZoom,modules:this.props.filteredModules,currentPath:this.props.location.pathname})))}}]),e}(r.a.Component),U=Object(v.b)(function(t){return{modules:t.modules.modules,filteredModules:t.modules.filteredModules}},function(t){return{loadModules:function(){return t(N())},filterModules:function(e){return t(function(t){return function(e,n){var a=n().modules.modules;"lowest"===t?a=a.filter(function(t){return t.volume>=0&&t.volume<=40}):"low"===t?a=a.filter(function(t){return t.volume>40&&t.volume<=65}):"avg"===t?a=a.filter(function(t){return t.volume>65&&t.volume<=85}):"high"===t&&(a=a.filter(function(t){return t.volume>85&&t.volume<=100})),e({type:"FILTER_MODULES",payload:a})}}(e))}}})(x);A.a.interpolatePosition=function(t,e,n,a){var r=a/n;return r=(r=r>0?r:0)>1?1:r,A.a.latLng(t.lat+r*(e.lat-t.lat),t.lng+r*(e.lng-t.lng))},A.a.Marker.MovingMarker=A.a.Marker.extend({statics:{notStartedState:0,endedState:1,pausedState:2,runState:3},options:{autostart:!1,loop:!1},initialize:function(t,e,n){A.a.Marker.prototype.initialize.call(this,t[0],n),this._latlngs=t.map(function(t,e){return A.a.latLng(t)}),e instanceof Array?this._durations=e:this._durations=this._createDurations(this._latlngs,e),this._currentDuration=0,this._currentIndex=0,this._state=A.a.Marker.MovingMarker.notStartedState,this._startTime=0,this._startTimeStamp=0,this._pauseStartTime=0,this._animId=0,this._animRequested=!1,this._currentLine=[],this._stations={}},isRunning:function(){return this._state===A.a.Marker.MovingMarker.runState},isEnded:function(){return this._state===A.a.Marker.MovingMarker.endedState},isStarted:function(){return this._state!==A.a.Marker.MovingMarker.notStartedState},isPaused:function(){return this._state===A.a.Marker.MovingMarker.pausedState},start:function(){this.isRunning()||(this.isPaused()?this.resume():(this._loadLine(0),this._startAnimation(),this.fire("start")))},resume:function(){this.isPaused()&&(this._currentLine[0]=this.getLatLng(),this._currentDuration-=this._pauseStartTime-this._startTime,this._startAnimation())},pause:function(){this.isRunning()&&(this._pauseStartTime=Date.now(),this._state=A.a.Marker.MovingMarker.pausedState,this._stopAnimation(),this._updatePosition())},stop:function(t){this.isEnded()||(this._stopAnimation(),"undefined"===typeof t&&(t=0,this._updatePosition()),this._state=A.a.Marker.MovingMarker.endedState,this.fire("end",{elapsedTime:t}))},addLatLng:function(t,e){this._latlngs.push(A.a.latLng(t)),this._durations.push(e)},moveTo:function(t,e){this._stopAnimation(),this._latlngs=[this.getLatLng(),A.a.latLng(t)],this._durations=[e],this._state=A.a.Marker.MovingMarker.notStartedState,this.start(),this.options.loop=!1},addStation:function(t,e){t>this._latlngs.length-2||t<1||(this._stations[t]=e)},onAdd:function(t){A.a.Marker.prototype.onAdd.call(this,t),!this.options.autostart||this.isStarted()?this.isRunning()&&this._resumeAnimation():this.start()},onRemove:function(t){A.a.Marker.prototype.onRemove.call(this,t),this._stopAnimation()},_createDurations:function(t,e){for(var n=t.length-1,a=[],r=0,i=0,o=0;o<n;o++)i=t[o+1].distanceTo(t[o]),a.push(i),r+=i;var l=e/r,s=[];for(o=0;o<a.length;o++)s.push(a[o]*l);return s},_startAnimation:function(){this._state=A.a.Marker.MovingMarker.runState,this._animId=A.a.Util.requestAnimFrame(function(t){this._startTime=Date.now(),this._startTimeStamp=t,this._animate(t)},this,!0),this._animRequested=!0},_resumeAnimation:function(){this._animRequested||(this._animRequested=!0,this._animId=A.a.Util.requestAnimFrame(function(t){this._animate(t)},this,!0))},_stopAnimation:function(){this._animRequested&&(A.a.Util.cancelAnimFrame(this._animId),this._animRequested=!1)},_updatePosition:function(){var t=Date.now()-this._startTime;this._animate(this._startTimeStamp+t,!0)},_loadLine:function(t){this._currentIndex=t,this._currentDuration=this._durations[t],this._currentLine=this._latlngs.slice(t,t+2)},_updateLine:function(t){var e=t-this._startTimeStamp;if(e<=this._currentDuration)return e;for(var n,a=this._currentIndex,r=this._currentDuration;e>r;){if(e-=r,void 0!==(n=this._stations[a+1])){if(e<n)return this.setLatLng(this._latlngs[a+1]),null;e-=n}if(++a>=this._latlngs.length-1){if(!this.options.loop)return this.setLatLng(this._latlngs[this._latlngs.length-1]),this.stop(e),null;a=0,this.fire("loop",{elapsedTime:e})}r=this._durations[a]}return this._loadLine(a),this._startTimeStamp=t-e,this._startTime=Date.now()-e,e},_animate:function(t,e){this._animRequested=!1;var n=this._updateLine(t);if(!this.isEnded()){if(null!=n){var a=A.a.interpolatePosition(this._currentLine[0],this._currentLine[1],this._currentDuration,n);this.setLatLng(a)}e||(this._animId=A.a.Util.requestAnimFrame(this._animate,this,!1),this._animRequested=!0)}}}),A.a.Marker.movingMarker=function(t,e,n){return new A.a.Marker.MovingMarker(t,e,n)};var I=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).initializeAnimation=n.initializeAnimation.bind(Object(f.a)(n)),n.generateCoordinates=n.generateCoordinates.bind(Object(f.a)(n)),n.updateSnakePoyline=n.updateSnakePoyline.bind(Object(f.a)(n)),n.resetAnimation=n.resetAnimation.bind(Object(f.a)(n)),n.endAnimation=n.endAnimation.bind(Object(f.a)(n)),n.map=null,n.containerMarkers=null,n.durations=3e3,n.truckMarker=null,n.snakePolyline=null,n.stationIndexes=null,n.prevMovement={lat:null,lng:null},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.map=A.a.map("truck-tracking-map",{center:this.props.center,zoom:this.props.zoom}),A.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map)}},{key:"componentDidUpdate",value:function(){this.props.truckPath&&!this.truckMarker&&this.initializeAnimation(this.props.truckPath.measurements),"play"===this.props.animationState?this.truckMarker&&!this.truckMarker.isRunning()?(this.truckMarker.isEnded()&&(this.resetAnimation(),this.initializeAnimation(this.props.truckPath.measurements)),this.truckMarker.start()):this.truckMarker&&this.truckMarker.isPaused()&&this.truckMarker.resume():"pause"===this.props.animationState?this.truckMarker&&this.truckMarker.isRunning()&&this.truckMarker.pause():"reset"===this.props.animationState&&(this.resetAnimation(),this.initializeAnimation(this.props.truckPath.measurements))}},{key:"generateCoordinates",value:function(t){var e=[],n=!0,a=!1,r=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;e.push([l.location.lat,l.location.lng])}}catch(s){a=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return e}},{key:"updateSnakePoyline",value:function(t){var e=t.target.getLatLng();this.snakePolyline.addLatLng(e);var n=this.truckMarker.getLatLng(),a=this.map;if(n.lat===this.prevMovement.lat&&n.lng===this.prevMovement.lng){var r=this.containerMarkers.filter(function(t){return t._latlng.lat===n.lat&&t._latlng.lng===n.lng});if(r.length>0){var i=!0,o=!1,l=void 0;try{for(var s,c=function(){var t=s.value;setTimeout(function(){a.removeLayer(t)},1e3)},u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0)c()}catch(m){o=!0,l=m}finally{try{i||null==u.return||u.return()}finally{if(o)throw l}}}this.containerMarkers=this.containerMarkers.filter(function(t){return t._latlng.lat!==n.lat&&t._latlng.lng!==n.lng})}this.prevMovement={lat:n.lat,lng:n.lng}}},{key:"resetAnimation",value:function(){this.map.removeLayer(this.snakePolyline),this.map.removeLayer(this.truckMarker);var t=!0,e=!1,n=void 0;try{for(var a,r=this.containerMarkers[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var i=a.value;this.map.removeLayer(i)}}catch(o){e=!0,n=o}finally{try{t||null==r.return||r.return()}finally{if(e)throw n}}this.containerMarkers=[]}},{key:"endAnimation",value:function(){this.props.finishAnimation()}},{key:"initializeAnimation",value:function(t){this.stationIndexes=[],this.snakePolyline=A.a.polyline([],{color:"#51BBE1"}),this.snakePolyline.addTo(this.map),this.containerMarkers=[];for(var e=0;e<t.length;e++){var n=t[e];if("collect"===n.type){var a=A.a.icon({iconUrl:P(n.value)}),r=A.a.marker([n.location.lat,n.location.lng],{icon:a});this.stationIndexes.push(e),this.containerMarkers.push(r),r.addTo(this.map)}}var i=A.a.icon({iconUrl:"/truck.png"}),o=this.generateCoordinates(t);this.truckMarker=A.a.Marker.movingMarker(o,this.durations,{autostart:!1,icon:i});var l=!0,s=!1,c=void 0;try{for(var u,m=this.stationIndexes[Symbol.iterator]();!(l=(u=m.next()).done);l=!0){var h=u.value;this.truckMarker.addStation(h,1e3)}}catch(p){s=!0,c=p}finally{try{l||null==m.return||m.return()}finally{if(s)throw c}}this.truckMarker.on("move",this.updateSnakePoyline),this.truckMarker.on("end",this.endAnimation),this.truckMarker.addTo(this.map)}},{key:"render",value:function(){return r.a.createElement("div",{id:"truck-tracking-map",className:"w-100 h-100"})}}]),e}(r.a.Component),z=Object(v.b)(function(t){return{truckPosition:t.trucks.truckPosition,animationState:t.trucks.animationState}},function(t){return{finishAnimation:function(){return t(y("stop"))}}})(I),q=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).map={mapLatLng:[42.68826,23.325639],mapZoom:12},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.loadTruckPath()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-main"},r.a.createElement("div",{className:"sidebar-container"},r.a.createElement(_,null)),r.a.createElement("div",{className:"map-container"},r.a.createElement(z,{center:this.map.mapLatLng,zoom:this.map.mapZoom,truckPath:this.props.truckPath})))}}]),e}(r.a.Component),B=Object(v.b)(function(t){return{truckPath:t.trucks.truckPath}},function(t){return{loadTruckPath:function(){return t(b())}}})(q),V=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:R}),r.a.createElement(d.a,{path:"/modulesMap",exact:!0,component:R}),r.a.createElement(d.a,{path:"/modulesList",exact:!0,component:U}),r.a.createElement(d.a,{path:"/truckTracking",exact:!0,component:B}))}}]),e}(r.a.Component);var G=function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",null,r.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(20),Z=n(46),H=n(5);function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(n,!0).forEach(function(e){Object(H.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var W={modules:[],filteredModules:[]},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_MODULES_SUCCESS":return J({},t,{modules:e.payload,filteredModules:e.payload});case"GET_MODULES_ERROR":return J({},t);case"FILTER_MODULES":return J({},t,{filteredModules:e.payload});default:return t}};function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(n,!0).forEach(function(e){Object(H.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Y={trucks:[],truckPosition:null,animationState:"reset"},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TRUCK_PATH_SUCCESS":return Q({},t,{truckPath:e.payload,truckPosition:e.payload.measurements[0].location});case"UPDATE_TRUCK_POSITION":return Q({},t,{truckPosition:e.payload});case"ANIMATION_STATE_CHANGE":return Q({},t,{animationState:e.payload});default:return t}},et=Object(F.c)({modules:X,trucks:tt}),nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,at=Object(F.e)(et,nt(Object(F.a)(Z.a)));o.a.render(r.a.createElement(h.a,null,r.a.createElement(v.a,{store:at},r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.eb0fb053.chunk.js.map
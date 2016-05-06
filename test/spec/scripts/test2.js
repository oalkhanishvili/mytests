(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var test = require('./test');
console.log(test);
},{"./test":2}],2:[function(require,module,exports){
var Car = function(options){
    this.color = options.color || 'Red';
    this.doors = options.doors || 4;
    this.condition = options.condition || 'Used';
    // console.log(options);
    options.events.forEach(function(x){
      var el = document.querySelectorAll(x.target)[0];
      el.addEventListener(x.event, function(){
        alert('test');
      });
    });

};

var Truck = function(options){
    this.color = options.color || 'Blue';
    this.doors = options.doors || 6;
    this.condition = options.condition || 'New';
};

var factory = function(){
    factory.prototype.vehicleClass = Car;

    factory.prototype.createState = function(options){
        if ( options.vehicleType == 'car' ){
            this.vehicleClass = Car;
        } else {
            this.vehicleClass = Truck;
        }
     return new this.vehicleClass(options);
    };
};

var carFactory = new factory();

var car = carFactory.createState({
    vehicleType: 'car',
    events: [
      {event: 'click', target: '.click'},
    ]
});
module.exports = function(){
    return carFactory;
}();
// console.log(carFactory);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vdHVyYS9ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3R1cmEvZ3VscC90ZXN0L3NjcmlwdHMvZmFrZV9lMTk5NGM4NS5qcyIsIi9Vc2Vycy9vdHVyYS9ndWxwL3Rlc3Qvc2NyaXB0cy90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVzdCA9IHJlcXVpcmUoJy4vdGVzdCcpO1xuY29uc29sZS5sb2codGVzdCk7IiwidmFyIENhciA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJ1JlZCc7XHJcbiAgICB0aGlzLmRvb3JzID0gb3B0aW9ucy5kb29ycyB8fCA0O1xyXG4gICAgdGhpcy5jb25kaXRpb24gPSBvcHRpb25zLmNvbmRpdGlvbiB8fCAnVXNlZCc7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgIG9wdGlvbnMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24oeCl7XHJcbiAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoeC50YXJnZXQpWzBdO1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHguZXZlbnQsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYWxlcnQoJ3Rlc3QnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG52YXIgVHJ1Y2sgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yIHx8ICdCbHVlJztcclxuICAgIHRoaXMuZG9vcnMgPSBvcHRpb25zLmRvb3JzIHx8IDY7XHJcbiAgICB0aGlzLmNvbmRpdGlvbiA9IG9wdGlvbnMuY29uZGl0aW9uIHx8ICdOZXcnO1xyXG59O1xyXG5cclxudmFyIGZhY3RvcnkgPSBmdW5jdGlvbigpe1xyXG4gICAgZmFjdG9yeS5wcm90b3R5cGUudmVoaWNsZUNsYXNzID0gQ2FyO1xyXG5cclxuICAgIGZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZVN0YXRlID0gZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICAgICAgaWYgKCBvcHRpb25zLnZlaGljbGVUeXBlID09ICdjYXInICl7XHJcbiAgICAgICAgICAgIHRoaXMudmVoaWNsZUNsYXNzID0gQ2FyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVoaWNsZUNsYXNzID0gVHJ1Y2s7XHJcbiAgICAgICAgfVxyXG4gICAgIHJldHVybiBuZXcgdGhpcy52ZWhpY2xlQ2xhc3Mob3B0aW9ucyk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxudmFyIGNhckZhY3RvcnkgPSBuZXcgZmFjdG9yeSgpO1xyXG5cclxudmFyIGNhciA9IGNhckZhY3RvcnkuY3JlYXRlU3RhdGUoe1xyXG4gICAgdmVoaWNsZVR5cGU6ICdjYXInLFxyXG4gICAgZXZlbnRzOiBbXHJcbiAgICAgIHtldmVudDogJ2NsaWNrJywgdGFyZ2V0OiAnLmNsaWNrJ30sXHJcbiAgICBdXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gY2FyRmFjdG9yeTtcclxufSgpO1xyXG4vLyBjb25zb2xlLmxvZyhjYXJGYWN0b3J5KTtcclxuIl19

//# sourceMappingURL=test2.js.map

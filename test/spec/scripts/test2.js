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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYXN0ZXIvRG9jdW1lbnRzL215dGVzdHMvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9NYXN0ZXIvRG9jdW1lbnRzL215dGVzdHMvdGVzdC9zY3JpcHRzL2Zha2VfODZjMzk5Y2EuanMiLCIvVXNlcnMvTWFzdGVyL0RvY3VtZW50cy9teXRlc3RzL3Rlc3Qvc2NyaXB0cy90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVzdCA9IHJlcXVpcmUoJy4vdGVzdCcpO1xuY29uc29sZS5sb2codGVzdCk7IiwidmFyIENhciA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yIHx8ICdSZWQnO1xuICAgIHRoaXMuZG9vcnMgPSBvcHRpb25zLmRvb3JzIHx8IDQ7XG4gICAgdGhpcy5jb25kaXRpb24gPSBvcHRpb25zLmNvbmRpdGlvbiB8fCAnVXNlZCc7XG4gICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgb3B0aW9ucy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbih4KXtcbiAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoeC50YXJnZXQpWzBdO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih4LmV2ZW50LCBmdW5jdGlvbigpe1xuICAgICAgICBhbGVydCgndGVzdCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbn07XG5cbnZhciBUcnVjayA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yIHx8ICdCbHVlJztcbiAgICB0aGlzLmRvb3JzID0gb3B0aW9ucy5kb29ycyB8fCA2O1xuICAgIHRoaXMuY29uZGl0aW9uID0gb3B0aW9ucy5jb25kaXRpb24gfHwgJ05ldyc7XG59O1xuXG52YXIgZmFjdG9yeSA9IGZ1bmN0aW9uKCl7XG4gICAgZmFjdG9yeS5wcm90b3R5cGUudmVoaWNsZUNsYXNzID0gQ2FyO1xuXG4gICAgZmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlU3RhdGUgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICAgICAgaWYgKCBvcHRpb25zLnZlaGljbGVUeXBlID09ICdjYXInICl7XG4gICAgICAgICAgICB0aGlzLnZlaGljbGVDbGFzcyA9IENhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVoaWNsZUNsYXNzID0gVHJ1Y2s7XG4gICAgICAgIH1cbiAgICAgcmV0dXJuIG5ldyB0aGlzLnZlaGljbGVDbGFzcyhvcHRpb25zKTtcbiAgICB9O1xufTtcblxudmFyIGNhckZhY3RvcnkgPSBuZXcgZmFjdG9yeSgpO1xuXG52YXIgY2FyID0gY2FyRmFjdG9yeS5jcmVhdGVTdGF0ZSh7XG4gICAgdmVoaWNsZVR5cGU6ICdjYXInLFxuICAgIGV2ZW50czogW1xuICAgICAge2V2ZW50OiAnY2xpY2snLCB0YXJnZXQ6ICcuY2xpY2snfSxcbiAgICBdXG59KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gY2FyRmFjdG9yeTtcbn0oKTtcbi8vIGNvbnNvbGUubG9nKGNhckZhY3RvcnkpO1xuIl19

//# sourceMappingURL=test2.js.map

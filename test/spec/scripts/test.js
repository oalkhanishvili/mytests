(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Car = function Car(options) {
    this.color = options.color || 'Red';
    this.doors = options.doors || 4;
    this.condition = options.condition || 'Used';
    // console.log(options);
    options.events.forEach(function (x) {
        var el = document.querySelectorAll(x.target)[0];
        el.addEventListener(x.event, function () {
            alert('test');
        });
    });
};

var Truck = function Truck(options) {
    this.color = options.color || 'Blue';
    this.doors = options.doors || 6;
    this.condition = options.condition || 'New';
};

var factory = function factory() {
    factory.prototype.vehicleClass = Car;

    factory.prototype.createState = function (options) {
        if (options.vehicleType == 'car') {
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
    events: [{ event: 'click', target: '.click' }]
});
module.exports = function () {
    return carFactory;
}();
// console.log(carFactory);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vdHVyYS9ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3R1cmEvZ3VscC90ZXN0L3NjcmlwdHMvZmFrZV9hMjk0MDA1OS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FyID0gZnVuY3Rpb24gQ2FyKG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvciB8fCAnUmVkJztcbiAgICB0aGlzLmRvb3JzID0gb3B0aW9ucy5kb29ycyB8fCA0O1xuICAgIHRoaXMuY29uZGl0aW9uID0gb3B0aW9ucy5jb25kaXRpb24gfHwgJ1VzZWQnO1xuICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIG9wdGlvbnMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh4LnRhcmdldClbMF07XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoeC5ldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxlcnQoJ3Rlc3QnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG52YXIgVHJ1Y2sgPSBmdW5jdGlvbiBUcnVjayhvcHRpb25zKSB7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJ0JsdWUnO1xuICAgIHRoaXMuZG9vcnMgPSBvcHRpb25zLmRvb3JzIHx8IDY7XG4gICAgdGhpcy5jb25kaXRpb24gPSBvcHRpb25zLmNvbmRpdGlvbiB8fCAnTmV3Jztcbn07XG5cbnZhciBmYWN0b3J5ID0gZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgICBmYWN0b3J5LnByb3RvdHlwZS52ZWhpY2xlQ2xhc3MgPSBDYXI7XG5cbiAgICBmYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnZlaGljbGVUeXBlID09ICdjYXInKSB7XG4gICAgICAgICAgICB0aGlzLnZlaGljbGVDbGFzcyA9IENhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVoaWNsZUNsYXNzID0gVHJ1Y2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLnZlaGljbGVDbGFzcyhvcHRpb25zKTtcbiAgICB9O1xufTtcblxudmFyIGNhckZhY3RvcnkgPSBuZXcgZmFjdG9yeSgpO1xuXG52YXIgY2FyID0gY2FyRmFjdG9yeS5jcmVhdGVTdGF0ZSh7XG4gICAgdmVoaWNsZVR5cGU6ICdjYXInLFxuICAgIGV2ZW50czogW3sgZXZlbnQ6ICdjbGljaycsIHRhcmdldDogJy5jbGljaycgfV1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhckZhY3Rvcnk7XG59KCk7XG4vLyBjb25zb2xlLmxvZyhjYXJGYWN0b3J5KTsiXX0=

//# sourceMappingURL=test.js.map

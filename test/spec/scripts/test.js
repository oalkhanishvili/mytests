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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYXN0ZXIvRG9jdW1lbnRzL215dGVzdHMvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9NYXN0ZXIvRG9jdW1lbnRzL215dGVzdHMvdGVzdC9zY3JpcHRzL2Zha2VfMTIzMmY3NjcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhciA9IGZ1bmN0aW9uIENhcihvcHRpb25zKSB7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJ1JlZCc7XG4gICAgdGhpcy5kb29ycyA9IG9wdGlvbnMuZG9vcnMgfHwgNDtcbiAgICB0aGlzLmNvbmRpdGlvbiA9IG9wdGlvbnMuY29uZGl0aW9uIHx8ICdVc2VkJztcbiAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICBvcHRpb25zLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoeC50YXJnZXQpWzBdO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHguZXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFsZXJ0KCd0ZXN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxudmFyIFRydWNrID0gZnVuY3Rpb24gVHJ1Y2sob3B0aW9ucykge1xuICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yIHx8ICdCbHVlJztcbiAgICB0aGlzLmRvb3JzID0gb3B0aW9ucy5kb29ycyB8fCA2O1xuICAgIHRoaXMuY29uZGl0aW9uID0gb3B0aW9ucy5jb25kaXRpb24gfHwgJ05ldyc7XG59O1xuXG52YXIgZmFjdG9yeSA9IGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4gICAgZmFjdG9yeS5wcm90b3R5cGUudmVoaWNsZUNsYXNzID0gQ2FyO1xuXG4gICAgZmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlU3RhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy52ZWhpY2xlVHlwZSA9PSAnY2FyJykge1xuICAgICAgICAgICAgdGhpcy52ZWhpY2xlQ2xhc3MgPSBDYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZlaGljbGVDbGFzcyA9IFRydWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy52ZWhpY2xlQ2xhc3Mob3B0aW9ucyk7XG4gICAgfTtcbn07XG5cbnZhciBjYXJGYWN0b3J5ID0gbmV3IGZhY3RvcnkoKTtcblxudmFyIGNhciA9IGNhckZhY3RvcnkuY3JlYXRlU3RhdGUoe1xuICAgIHZlaGljbGVUeXBlOiAnY2FyJyxcbiAgICBldmVudHM6IFt7IGV2ZW50OiAnY2xpY2snLCB0YXJnZXQ6ICcuY2xpY2snIH1dXG59KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYXJGYWN0b3J5O1xufSgpO1xuLy8gY29uc29sZS5sb2coY2FyRmFjdG9yeSk7Il19

//# sourceMappingURL=test.js.map

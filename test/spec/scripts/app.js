(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Vue.component('tasks', {
  props: ['list'],
  template: '#myComponent',

  data: function data() {
    return {
      title: '',
      description: '',
      success: false
    };
  },
  methods: {
    change: function change(tasks) {
      tasks.display = !tasks.display;
    },
    remove: function remove(task) {
      this.list.$remove(task);
    },
    clearAll: function clearAll() {
      this.$root.$data.tasks = this.list.filter(this.inProgress);
      console.log(this.list);
    },
    isCompleted: function isCompleted(task) {
      return task.display;
    },

    inProgress: function inProgress(task) {
      return !this.isCompleted(task);
    },
    reset: function reset() {
      this.list = this.list.filter(this.isCompleted);
    },
    addTask: function addTask() {
      this.list.push({ body: this.title, display: false });

      this.title = '';
      this.description = '';
      this.success = true;
      setTimeout(function () {
        this.success = false;
      }.bind(this), 2000);
    }
  },

  computed: {
    remaining: function remaining() {
      return this.list.filter(this.inProgress).length;
    },
    progressBar: function progressBar() {
      return this.list.filter(this.isCompleted).length / this.list.length * 100;
    },
    validation: function validation() {
      return {
        title: !!this.title,
        description: !!this.description
      };
    },
    isValid: function isValid() {
      var validation = this.validation;
      return Object.keys(validation).every(function (key) {
        return validation[key];
      });
    }
  }

});
new Vue({
  el: '#app',
  data: {
    popup: false,
    tasks: [{ body: 'first task', display: true }, { body: 'second task', display: false }, { body: 'third task', display: false }]
  }
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vdHVyYS9ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3R1cmEvZ3VscC90ZXN0L3NjcmlwdHMvZmFrZV9kMGI0MjNkZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cblZ1ZS5jb21wb25lbnQoJ3Rhc2tzJywge1xuICBwcm9wczogWydsaXN0J10sXG4gIHRlbXBsYXRlOiAnI215Q29tcG9uZW50JyxcblxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBzdWNjZXNzOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZSh0YXNrcykge1xuICAgICAgdGFza3MuZGlzcGxheSA9ICF0YXNrcy5kaXNwbGF5O1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUodGFzaykge1xuICAgICAgdGhpcy5saXN0LiRyZW1vdmUodGFzayk7XG4gICAgfSxcbiAgICBjbGVhckFsbDogZnVuY3Rpb24gY2xlYXJBbGwoKSB7XG4gICAgICB0aGlzLiRyb290LiRkYXRhLnRhc2tzID0gdGhpcy5saXN0LmZpbHRlcih0aGlzLmluUHJvZ3Jlc3MpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcbiAgICB9LFxuICAgIGlzQ29tcGxldGVkOiBmdW5jdGlvbiBpc0NvbXBsZXRlZCh0YXNrKSB7XG4gICAgICByZXR1cm4gdGFzay5kaXNwbGF5O1xuICAgIH0sXG5cbiAgICBpblByb2dyZXNzOiBmdW5jdGlvbiBpblByb2dyZXNzKHRhc2spIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc0NvbXBsZXRlZCh0YXNrKTtcbiAgICB9LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIodGhpcy5pc0NvbXBsZXRlZCk7XG4gICAgfSxcbiAgICBhZGRUYXNrOiBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgICAgdGhpcy5saXN0LnB1c2goeyBib2R5OiB0aGlzLnRpdGxlLCBkaXNwbGF5OiBmYWxzZSB9KTtcblxuICAgICAgdGhpcy50aXRsZSA9ICcnO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIH0uYmluZCh0aGlzKSwgMjAwMCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgcmVtYWluaW5nOiBmdW5jdGlvbiByZW1haW5pbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcih0aGlzLmluUHJvZ3Jlc3MpLmxlbmd0aDtcbiAgICB9LFxuICAgIHByb2dyZXNzQmFyOiBmdW5jdGlvbiBwcm9ncmVzc0JhcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3QuZmlsdGVyKHRoaXMuaXNDb21wbGV0ZWQpLmxlbmd0aCAvIHRoaXMubGlzdC5sZW5ndGggKiAxMDA7XG4gICAgfSxcbiAgICB2YWxpZGF0aW9uOiBmdW5jdGlvbiB2YWxpZGF0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICEhdGhpcy50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246ICEhdGhpcy5kZXNjcmlwdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIGlzVmFsaWQ6IGZ1bmN0aW9uIGlzVmFsaWQoKSB7XG4gICAgICB2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGlvbjtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWxpZGF0aW9uKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufSk7XG5uZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgZGF0YToge1xuICAgIHBvcHVwOiBmYWxzZSxcbiAgICB0YXNrczogW3sgYm9keTogJ2ZpcnN0IHRhc2snLCBkaXNwbGF5OiB0cnVlIH0sIHsgYm9keTogJ3NlY29uZCB0YXNrJywgZGlzcGxheTogZmFsc2UgfSwgeyBib2R5OiAndGhpcmQgdGFzaycsIGRpc3BsYXk6IGZhbHNlIH1dXG4gIH1cbn0pOyJdfQ==

//# sourceMappingURL=app.js.map

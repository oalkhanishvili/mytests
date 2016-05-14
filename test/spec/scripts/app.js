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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYXN0ZXIvRG9jdW1lbnRzL215dGVzdHMvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9NYXN0ZXIvRG9jdW1lbnRzL215dGVzdHMvdGVzdC9zY3JpcHRzL2Zha2VfZTNmOTUxMDUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5WdWUuY29tcG9uZW50KCd0YXNrcycsIHtcbiAgcHJvcHM6IFsnbGlzdCddLFxuICB0ZW1wbGF0ZTogJyNteUNvbXBvbmVudCcsXG5cbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgc3VjY2VzczogZmFsc2VcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2UodGFza3MpIHtcbiAgICAgIHRhc2tzLmRpc3BsYXkgPSAhdGFza3MuZGlzcGxheTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKHRhc2spIHtcbiAgICAgIHRoaXMubGlzdC4kcmVtb3ZlKHRhc2spO1xuICAgIH0sXG4gICAgY2xlYXJBbGw6IGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICAgICAgdGhpcy4kcm9vdC4kZGF0YS50YXNrcyA9IHRoaXMubGlzdC5maWx0ZXIodGhpcy5pblByb2dyZXNzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gICAgfSxcbiAgICBpc0NvbXBsZXRlZDogZnVuY3Rpb24gaXNDb21wbGV0ZWQodGFzaykge1xuICAgICAgcmV0dXJuIHRhc2suZGlzcGxheTtcbiAgICB9LFxuXG4gICAgaW5Qcm9ncmVzczogZnVuY3Rpb24gaW5Qcm9ncmVzcyh0YXNrKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNDb21wbGV0ZWQodGFzayk7XG4gICAgfSxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKHRoaXMuaXNDb21wbGV0ZWQpO1xuICAgIH0sXG4gICAgYWRkVGFzazogZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICAgIHRoaXMubGlzdC5wdXNoKHsgYm9keTogdGhpcy50aXRsZSwgZGlzcGxheTogZmFsc2UgfSk7XG5cbiAgICAgIHRoaXMudGl0bGUgPSAnJztcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSAnJztcbiAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgICB9LmJpbmQodGhpcyksIDIwMDApO1xuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHJlbWFpbmluZzogZnVuY3Rpb24gcmVtYWluaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdC5maWx0ZXIodGhpcy5pblByb2dyZXNzKS5sZW5ndGg7XG4gICAgfSxcbiAgICBwcm9ncmVzc0JhcjogZnVuY3Rpb24gcHJvZ3Jlc3NCYXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcih0aGlzLmlzQ29tcGxldGVkKS5sZW5ndGggLyB0aGlzLmxpc3QubGVuZ3RoICogMTAwO1xuICAgIH0sXG4gICAgdmFsaWRhdGlvbjogZnVuY3Rpb24gdmFsaWRhdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAhIXRoaXMudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAhIXRoaXMuZGVzY3JpcHRpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBpc1ZhbGlkOiBmdW5jdGlvbiBpc1ZhbGlkKCkge1xuICAgICAgdmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb247XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsaWRhdGlvbikuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbltrZXldO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn0pO1xubmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIGRhdGE6IHtcbiAgICBwb3B1cDogZmFsc2UsXG4gICAgdGFza3M6IFt7IGJvZHk6ICdmaXJzdCB0YXNrJywgZGlzcGxheTogdHJ1ZSB9LCB7IGJvZHk6ICdzZWNvbmQgdGFzaycsIGRpc3BsYXk6IGZhbHNlIH0sIHsgYm9keTogJ3RoaXJkIHRhc2snLCBkaXNwbGF5OiBmYWxzZSB9XVxuICB9XG59KTsiXX0=

//# sourceMappingURL=app.js.map

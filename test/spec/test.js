Vue.component('tasks',{
  props: ['list'],

  template: '#tasks-template',

  computed: {
    remaining: function(){
      var vm = this;

      return this.list.filter(this.inProgress).length;
    }
  },

  methods: {
    isCompleted: function(task){
      return task.completed;
    },

    inProgress: function(task){
      return ! this.isCompleted(task);
    },

    deleteTask: function(task){
      this.list.$remove(task);
    },

    clearCompleted: function(){
      this.list = this.list.filter(this.inProgress);
    }
  }
});

new Vue({
  el: '#app',

  data: {
    tasks: [
      { body: 'go to store', completed: false},
      { body: 'got to doctor', completed: false},
      { body: 'got to bank', completed: true}
    ]
  }
});

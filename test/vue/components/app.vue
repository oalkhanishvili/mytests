<style>
  .red {
    color: #f00;
  }
  /* always present */
  .expand-transition {
    transition: all .3s ease;
    transform: translateX(0);
    overflow: hidden;
  }
  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .expand-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .expand-leave{
    transform: translateX(100%);
    opacity: 0;
  }
</style>

<template>
  <header-component></header-component>

  <div class="row">
    <div class="col-md-6">
        <button @click="effect = !effect">agasg</button>
        <div class="notification" v-if="effect" transition="expand">
          some text
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>

        <button type="submit" class="btn btn-default" >Submit</button>
    </div>
  </div>
  <h1 class="red">{{msg}}</h1>
  <h2>title helper text</h2>
</template>

<script>
  import HeaderComponent from '/Users/otura/gulp/test/vue/components/header.vue';

  export default {

  data () {
    return {
      effect: false,
      msg: 'Hello world!',
      descroption: 'Test demplate for do'
    }
  },
  components: {
    HeaderComponent
  },
  ready(){
    console.log('compiled');
  }
}
</script>
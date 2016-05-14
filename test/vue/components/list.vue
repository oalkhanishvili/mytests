<style>
    body{
    }
</style>
<template>
    <div class="media" v-for="n in 5">
        <div class="media-left">
            <a href="#">
                <img class="media-object" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150" alt="...">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">Media heading</h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis deserunt dignissimos ducimus eum explicabo ipsa maiores modi non odio porro possimus quia quos reprehenderit rerum, sapiente totam ullam unde!
        </div>
    </div>
    <!--<other-component/>-->
</template>

<script>

    // import HeaderComponent from '/Users/Master/Documents/mytests/test/vue/components/header.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>

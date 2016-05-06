<template>
    <div class="jumbotron">
        <h1>Hello, world!</h1>
        <p>...</p>
    </div>
    <h1>Test Page</h1>

        <h1>Hello App!</h1>
        <p>
            <!-- use v-link directive for navigation. -->
            <a v-link="{ path: '/' }"><button class="btn-default">Home</button></a>
            <a v-link="{ path: '/foo' }"><button class="btn-hot">Foo</button></a>
            <a v-link="{ path: '/bar' }"><button class="btn-cool">Bar</button></a>
        </p>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
//        components:{
//            'other-component':OtherComponent,
//            HeaderComponent,
//        }
    }
</script>
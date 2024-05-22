<template>
    <div class="container">
        <NavbarComponent/>
    </div>

</template>


<script>

    import NavbarComponent from "../NavbarComponent.vue";

    export default {
        components:{
            NavbarComponent,
        },

        data() {
            return {

            }
        }
    }
</script>


<style>
    .container {
        width: 100vw;
        min-height: 100vh;
        background: rgb(9,16,29);
        background: linear-gradient(0deg, rgba(9,16,29,1) 3%, rgba(7,13,23,1) 31%, rgba(7,13,23,1) 50%, rgba(7,13,23,1) 71%, rgba(9,16,29,1) 97%);    
    }
</style>
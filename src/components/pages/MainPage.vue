<template>
    <div class="container">
        <NavbarComponent />
        <div class="pages">
            <HomeComponent />
            <ServicesComponent />
        </div>

    </div>

</template>


<script>

    import NavbarComponent from "../NavbarComponent.vue";
    import HomeComponent from "@/components/HomeComponent.vue";
    import ServicesComponent from "@/components/ServicesComponent.vue";

    export default {
        components:{
            NavbarComponent,
            HomeComponent,
            ServicesComponent,
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
    .pages {
        display: flex;
        flex-direction: column;
    }
}

</style>
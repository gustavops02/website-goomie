<template>
    <div class="container">
        <NavbarComponent />
        <div class="pages">
            <HomeComponent />
            <ServicesComponent />
            <AboutComponent />
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import NavbarComponent from "../NavbarComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    components:{
        NavbarComponent,
        HomeComponent,
        ServicesComponent,
        AboutComponent,
        FooterComponent,
    },
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.pages {
    flex: 1;
}
</style>

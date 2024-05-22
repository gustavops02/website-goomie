<template>
    <div class="navbar-container">
        <div class="goomie-logo">
            <span class="logo-title">Goomie</span>

        </div>
        
        <div class="navbar-nav">
            <a class="home" href="#">Home</a>
            <a class="services" href="#">Serviços</a>
            <a class="about_us" href="#">Sobre</a>
            <a class="contact" href="#">Contato</a>

        </div>

        <div class="menu-icon-container">
            <fa-icon class="menu-icon" :icon="['fas', 'bars']" style="color: #fff;" />
        </div>

    </div>
</template>


<script>

export default {
    name: 'NavbarComponent',
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
    }
}

</script>


<style scoped>
.navbar-container {
    height: 64px;
    display: flex;
    align-items: center;
    border-bottom: 0.1px solid #171E27;
    justify-content: space-between;
    padding: 0px 30px 0px 30px;
    
}

.goomie-logo .logo-title {
    color: #fff;
    font-family: var(--var-font-league-spartan);
    font-size: 28px;

}
.menu-icon {
    font-size: 19px;
}

.navbar-nav {
    font-family: var(--var-font-roboto);
}

.navbar-nav a {
    color: #fff;
    text-decoration: none;
}

</style>
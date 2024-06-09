<template>
    <div class="navbar-container">
        <div class="goomie-logo">
            <span class="logo-title">Goomie</span>

        </div>
        
        <div class="navbar-nav">
            <a class="home" href="#">home</a>
            <a class="services" href="#">serviços</a>
            <a class="about_us" href="#">sobre</a>
            <a class="contact" href="#">contato</a>

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
}

</script>


<style scoped>
.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px 0 50px;
    height: 64px;
    border-bottom: 0.1px solid #171E27;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(9, 16, 29, 0.5);
    backdrop-filter: blur(5px);
    transition: background-color 0.3s ease-out, backdrop-filter 0.3s ease-out;
}

.goomie-logo .logo-title {
    font-family: var(--var-font-league-spartan);
    font-size: 30px;

}
.menu-icon {
    font-size: 22px;
}


.navbar-nav a {
    text-decoration: none;
    padding: 0 10px;
}

</style>
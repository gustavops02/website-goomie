<template>
    <div class="footer-container">
        <footer class="footer">
            <div class="left-section">

                <a href="https://www.instagram.com/goomiesolutions" class="instagram-logo">
                    <img src="@/assets/img/instagram.svg" alt="instagram" class="social-icon">
                </a>

                <a href="https://www.linkedin.com/company/goomie/" class="linkedin-logo">
                    <img src="@/assets/img/linkedin.svg" alt="linkedin" class="social-icon">
                </a>

                <a href="https://wa.me/5521967445952?text=Olá,%20Gustavo!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20serviços%20da%20Goomie." class="whatsapp-logo">
                    <img src="@/assets/img/whatsapp.svg" alt="whatsapp" class="social-icon">
                </a>

                <a href="mailto:tech@goomie.com.br?subject=Quero Conhecer os Serviços da Goomie" class="mail-logo">
                    <img src="@/assets/img/mail.png" alt="mail" class="social-icon">
                </a>

                <a href="https://github.com/goomie-solutions" class="github-logo">
                    <img src="@/assets/img/github.svg" alt="github" class="social-icon">
                </a>

            </div>
            <div class="vertical-line"></div>
            <div class="right-section">
                <h1 class="logo">Goomie</h1>
                <p class="description-company">
                    CNPJ: 51.518.096/0001-15 - Niterói, Rio de Janeiro
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
.footer-container {
    margin-top: 250px;
    width: 100%;
}

.footer {
    height: 200px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.left-section,
.right-section {
    flex: 1;
    padding: 0 70px;
}

.left-section {
    text-align: center;
}

.left-section a {
    padding: 30px;
}

.left-section .social-icon {
    width: 30px;
    height: 30px;
}

.left-section .social-icon:hover {
    width: 40px;
    height: 40px;
    transition: 0.1s;
}

.right-section .logo {
    font-family: var(--var-font-league-spartan);
    font-size: 40px;
    color: var(--var-cor-principal-font);
    cursor: default;
}

.right-section .description-company {
    font-size: 16px;
    cursor: default;
}

.vertical-line {
    height: 40%;
    width: 1px;
    background-color: var(--var-cor-principal-font);
    position: absolute;
    left: 50%;
    top: 25%;
}
</style>

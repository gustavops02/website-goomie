<template>
    <div class="footer-container">
        <footer class="footer">
            <div class="left-section">
                <p>Left Section</p>
            </div>
            <div class="vertical-line"></div>
            <div class="right-section">
                <h1 class="logo">Goomie</h1>
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
    width: 100%;
}

.footer {
    height: 400px;
    margin-top: 150px;
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

.right-section .logo {
    text-align: center;
    font-family: var(--var-font-league-spartan);
    font-size: 70px;
    color: var(--var-cor-principal-font);
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

<template>
    <div id="home" class="home-content">
        <div class="first-sec">
            <h1 class="logo">Goomie</h1>

            <h1 class="catchphrase">
                <span v-for="(char, index) in catchphrase" :key="index" class="char" :class="{ 'highlight': highlightWords.includes(index) }">{{ char === ' ' ? '\u00A0' : char }}</span>
            </h1>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeComponent',
    data() {
        return {
            catchphrase: 'sua visão, nosso código: juntos construímos o futuro.'.split(''),
            highlightWords: [] // Para armazenar os índices das letras que devem ser destacadas
        };
    },
    mounted() {
        const chars = this.$el.querySelectorAll('.char');
        chars.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.03}s`;
        });

        // Marcar os índices das letras para "código" e "futuro"
        const phrase = this.catchphrase.join('');
        const highlight = ["código", "futuro"];
        highlight.forEach(word => {
            let startIndex = phrase.indexOf(word);
            while (startIndex !== -1) {
                for (let i = startIndex; i < startIndex + word.length; i++) {
                    this.highlightWords.push(i);
                }
                startIndex = phrase.indexOf(word, startIndex + word.length);
            }
        });
    }
}
</script>

<style scoped>
.home-content {
    padding: 50px;
    height: calc(100vh - 55px);
    display: flex;
    justify-content: center;
    margin-top: 70px;
}

.home-content .first-sec {
    display: flex;
    flex-direction: column;
    gap: 30px;

}

.home-content .logo {
    font-family: var(--var-font-league-spartan);
    color: var(--var-cor-principal-font);
    text-align: center;
    font-size: 60px;
}

.home-content .catchphrase {
    color: white;
    font-size: 20px;
    text-align: center;
}

.home-content .char {
    opacity: 0;
    animation: fadeIn 1s forwards;
}

.home-content .char.highlight {
    color: var(--var-cor-principal-font);
}

@keyframes fadeIn {
    to {opacity: 1;}
}

</style>
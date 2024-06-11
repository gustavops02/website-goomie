<template>
    <div id="about-us" class="container">
        <div class="content">
            <div class="about">
                <h2 class="title">quem somos</h2>
                <p>na Goomie, somos apaixonados por transformar ideias em realidade digital. como uma software house especializada no desenvolvimento de sites, sistemas desktop, landing pages e soluções personalizadas, nossa missão é entregar produtos de alta qualidade que atendam às necessidades específicas de cada cliente.</p>
            </div>
            <div class="vision">
                <h2 class="title">nossa visão</h2>
                <p>acreditamos que a tecnologia pode transformar negócios e facilitar a vida das pessoas. nossa visão é ser reconhecida como uma empresa inovadora, capaz de criar soluções digitais que não apenas atendam, mas superem as expectativas dos nossos clientes, ajudando-os a alcançar seus objetivos de forma eficiente e eficaz.</p>
            </div>
            <div class="team">
                <h2 class="title">time</h2>
                <div class="image" v-for="(i, index) in team" :key="index">
                    <img :src="getImage(i.src)" alt="team">
                    <h3 class="team-name">{{ i.name }}</h3>
                    <p class="team-description">{{ i.description }}</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent',
    data(){
        return {
            team: [
                {src: "guilherme", name: 'Guilherme Silva', description: 'Sócio / Desenvolvedor Front-end'},
                {src: "gustavo", name: 'Gustavo Silva', description: 'Sócio / Desenvolvedor back-end'},
                {src: "daniel", name: 'Daniel Macedo',  description: 'Sócio / Desenvolvedor back-end'}
            ]
        }
    },
    methods: {
        getImage(img){
            return require('../assets/img/' + img + '.jpg');
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 150px;
    text-align: center;
}

.content .team .image img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
}

.title {
    font-size: 30px;
}
</style>

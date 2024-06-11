<template>
    <div id="about-us" class="container">
        <div class="content">

            <div class="about">
                <h2 class="title">quem somos</h2>
                <p>na Goomie, somos apaixonados por transformar ideias em realidade digital. como uma software house especializada no desenvolvimento de sites, sistemas desktop, landing pages e soluções personalizadas, nossa missão é entregar produtos de alta qualidade que atendam às necessidades específicas de cada cliente.</p>
            </div>

            <div class="vision">
                <h2 class="title" >nossa visão</h2>
                <div class="items">
                    <div class="item" v-for="(i, index) in visions" :key="index">
                        <h3 class="subtitle">{{ i.subtitle }}</h3>
                        <p class="description">{{ i.description }}</p>
                    </div>
                </div>
            </div>

            <div class="team">
                <h2 class="title">time</h2>
                <div class="team-content">
                    <div class="image" v-for="(i, index) in team" :key="index">
                        <div class="items">
                            <img :src="getImage(i.src)" alt="team">
                            <h3 class="team-name">{{ i.name }}</h3>
                            <p class="team-description">{{ i.description }}</p>
                        </div>
                    </div>
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
                {src: "guilherme", name: 'Guilherme Silva', description: 'Sócio | Desenvolvedor front-end'},
                {src: "gustavo", name: 'Gustavo Silva', description: 'Sócio | Desenvolvedor back-end'},
                {src: "daniel", name: 'Daniel Macedo',  description: 'Sócio | Desenvolvedor back-end'}
            ],
            visions: [
                {subtitle: 'transformar negócios com tecnologia',description: 'acreditamos que a tecnologia tem o poder de transformar negócios, simplificando processos e aumentando a eficiência.'},
                {subtitle: 'superar expectativas', description: 'nosso objetivo é criar soluções digitais que não apenas atendam, mas superem as expectativas dos nossos clientes, impulsionando seu sucesso.'},
                {subtitle: 'parceria para o futuro', description: 'trabalhamos em parceria com nossos clientes para construir um futuro onde a inovação tecnológica esteja no centro de todas as operações.'},
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
    gap: 190px;
    text-align: center;
}

.vision {
    display: flex;
    flex-direction: column;
    gap: 50px
}

.vision .items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 55px;
    padding: 0 70px;
}

.vision .item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 20px;
    cursor: default;
}

.vision .item:hover{
    border: 0.1px solid var(--var-cor-principal-font);
    transition: 0.2s ease-in;
}
.vision .item:hover .subtitle {
    color: var(--var-cor-principal-font);
    transition: 0.2s ease-in;
}

.content .about{
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 0 70px;
}

.content .team {
    display: flex;
    flex-direction: column;
    gap: 65px
}

.team .team-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 70px;
    gap: 55px;

}

.content .team .team-content .items {
    border-radius: 20px;
    padding: 20px
}

.content .team .team-content .items:hover {
    border: 0.1px solid var(--var-cor-principal-font);
    transition: 0.2s ease-in;
}

.content .team .team-content .items:hover .team-name{
    color: var(--var-cor-principal-font);
    transition: 0.2s ease-in;
}

.content .team .image img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
}

.content .team .image .items .team-description {
    color: #bcbcbc;
}


.title {
    font-size: 30px;
    color: var(--var-cor-principal-font)
}
</style>
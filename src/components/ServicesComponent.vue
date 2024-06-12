<template>
    <div id="services" class="container">
        <div class="services-content">
            <h2 class="title">nossos serviços</h2>

            <div class="services">
                <div class="card" :class="{'card-right': service.align === 'right'}" v-for="(service, index) in services" :key="index">
                    <div class="service-text">
                        <h3 class="card-title">{{ service.title }}</h3>
                        <p class="card-description">{{ service.description }}</p>
                        <a href="https://wa.me/5521967445952?text=Olá,%20Gustavo!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20serviços%20da%20Goomie.">
                            <button class="call-to-action-home">
                                Fale conosco
                            </button>
                        </a>
                    </div>
                    <div class="service-image">
                        <img :src="getServiceImage(service.img)" alt="services image">
                        <a href="https://storyset.com/people" class="copyright-images">People illustrations by Storyset</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesComponent',
    data (){
        return {
            services: [
                {title: 'website', description: 'sites modernos e responsivos para o seu negócio', img: 'service1'},
                {title: 'landing pages', description: 'páginas otimizadas para conversão de leads', align: 'right', img: 'service2'},
                {title: 'desenvolvimento de sistemas', description: 'soluções completas para o seu negócio', img: 'service3'},
                {title: 'manutenção de softwares', description: 'garantimos que seus sistemas estejam sempre atualizados e funcionando perfeitamente, com suporte contínuo e melhorias constantes', align: 'right', img: 'service4'},
            ]
        }
    },
    methods: {
        getServiceImage(img) {
            return require('../assets/img/' + img + '.svg');
        }
    }
}
</script>

<style scoped>
    .container .services-content .title {
        text-align: center;
        font-size: 30px;
        color: var(--var-cor-principal-font);
    }

    .services-content .services {
        margin-top: 50px;
    }

    .services .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 70px 0 70px;
        margin-bottom: 150px;
    }

    .services .card button {
        font-family: var(--var-font-montserrat);
        font-size: 16px;
        padding: 13px 25px 13px 25px;
        margin-top: 40px;
        background-color: var(--var-cor-principal-font);
        border-radius: 15px;
        border-style: none;
        font-weight: bold;
        cursor: pointer;
        color: black;
    }

    .services .card .service-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 35px;
    }

    .services .card-right .service-text  {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 35px;
    }

    .card-right .service-text .card-title {
        align-items: flex-end;
        justify-content: flex-end;
    }

    .card-right .service-text .card-description {
        text-align: end;
    }

    .card .service-text .card-title {
        color: var(--var-cor-principal-font);
        font-size: 30px
    }

    .service-text .card-description {
        font-size: 20px;
    }

    .services .card .service-image {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .services .card-right{
        display: flex;
        flex-direction: row-reverse;

    }

    .service-image img {
        width: 300px;
    }

    .card .copyright-images {
        font-size: 10px;
        text-decoration: none;
    }
</style>

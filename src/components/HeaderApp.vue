<script>

export default {
    name: 'HeaderApp',

}
</script>

<template>
    <div class="main-container">
        <div class="header-contacts">
            <div class="container d-flex justify-content-between">
                <div class="contact-numbers">
                    <font-awesome-icon class="pe-3" icon="fa-solid fa-phone" />
                    <span>(001) 88451234</span>
                    <span>88455438</span>
                </div>
                <div class="social-links d-flex align-items-center gap-4">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <font-awesome-icon icon="fa-brands fa-pinterest-p" />
                </div>
            </div>
        </div>
        <div class="header-content">
            <div class="container py-2 d-flex justify-content-between align-items-center">
                <div class="logo">
                    <router-link class="nav-link" :to="{ name: 'home' }">
                        <img draggable="false" src="../assets/img/logo.png" alt="">
                    </router-link>
                </div>
                <div class="sections d-flex align-items-center">
                    <router-link activeClass="fw-bold" class="link" :to="{ name: 'home' }">
                        <span>HOME</span>
                    </router-link>
                    <router-link activeClass="fw-bold" class="link" :to="{ name: 'products' }">
                        <span>PRODOTTI</span>
                    </router-link>
                    <router-link activeClass="fw-bold" class="link" :to="{ name: 'contacts' }">
                        <span>CONTATTI</span>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/_variables.scss' as *;

* {
    user-select: none;
}

.logo {
    img {
        height: 80px;
    }
}

.main-container {
    background-color: white;
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
}

.header-contacts {
    background-color: $secondary-color;
    color: white;
    padding: 10px 37px;

    span {
        margin-right: 15px;
    }

    .social-links {
        color: white;
        cursor: pointer;
    }
}

.header-content {
    // SFUMATURA AL DI SOTTO DELL HEADER
    -webkit-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);

    .clickable {
        cursor: pointer;
    }
}

.sections {
    // HO USATO QUESTO STILE PER CENTRARE PERFETTAMENTE LA SEZIONE CENTRALE AL CENTRO DEL PADRE A PRESCINDERE DELLA GRANDEZZA DEGLI ALTRI DUE ELEMENTI
    font-size: small;

    .link {
        text-decoration: none;
        color: #3D3D3D;
        font-size: 1.3em;
        margin-left: 60px;

        &:hover {
            color: $secondary-text-color !important;
        }
    }

}
</style>
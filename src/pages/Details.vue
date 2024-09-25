<script>
import OurProducts from '../components/OurProducts.vue';
import Separator from '../components/Separator.vue';
import TitlePage from '../components/TitlePage.vue';

import { store } from '../store.js'

export default {
    data() {
        return {
            store,
            currentItem: store.items[store.selectedItem]
        }
    },
    components: {
        TitlePage,
        Separator,
        OurProducts
    },

    created() {

    }
}


</script>

<template>
    <TitlePage :titlePage="'Scheda Tecnica'"></TitlePage>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="item d-flex flex-column align-items-center">
                    <h2>{{ currentItem.name }}</h2>
                    <p>{{ currentItem.dimension }}</p>
                </div>
            </div>
            <div class="col-7">
                <div class="description">
                    descrizione
                    <p>
                        {{ currentItem.gsm }} gsm
                    </p>
                </div>
            </div>
            <div class="col-5">
                <div class="image d-flex justify-content-center">
                    <img src="../../src/assets/img/items/ZGC-70_40_50/zaino-passanti-blu.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
.item {
    margin-top: 30px;
}

.description {
    background-color: yellow;
}

.image {
    background-color: cadetblue;

    img {
        max-width: 60%;

    }
}
</style>
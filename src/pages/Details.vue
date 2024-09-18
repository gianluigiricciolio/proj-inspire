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

    <h1>{{ currentItem.name }}</h1>
    <p>{{ currentItem.dimension }}</p>
</template>

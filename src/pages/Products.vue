<script>
import OurProducts from '../components/OurProducts.vue';
import Separator from '../components/Separator.vue';
import TitlePage from '../components/TitlePage.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        TitlePage,
        Separator,
        OurProducts
    }
}


</script>

<template>
    <TitlePage :titlePage="'Prodotti'"></TitlePage>
    <OurProducts></OurProducts>
</template>

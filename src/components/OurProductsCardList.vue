<script>
import OurProductsCard from './OurProductsCard.vue';

import { store } from '../store.js'

export default {
    name: 'OurProductsCardList',
    data() {
        return {
            store
        }
    },
    components: {
        OurProductsCard
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-2 g-3">
            <div class="col" v-for="card in store.cardInfo">
                <OurProductsCard :card="card"></OurProductsCard>
            </div>
        </div>
    </div>
</template>

<style></style>
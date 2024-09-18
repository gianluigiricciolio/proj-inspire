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
        <div class="row row-cols-4 g-3">
            <div class="col" v-for="item in store.items">
                <router-link :to="{ name: 'dettagli' }">
                    <OurProductsCard :item="item"></OurProductsCard>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style></style>
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
            <div class="col" v-for="(item, i)  in store.items">
                <router-link :to="{ name: 'dettagli', params: { id: item.id } }">
                    <OurProductsCard @click="store.selectedItem = i" :item="item"></OurProductsCard>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style></style>
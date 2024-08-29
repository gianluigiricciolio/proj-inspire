<script>

import ExampleCard from './ExampleCard.vue';
import { store } from '../store';

export default {
    name: "Home Projects Examples",

    data() {

        return {
            store,
        };

    },

    components: {
        ExampleCard,
    },
};

</script>

<template>
    <div class="container-fluid">

        <div class="row g-1">

            <div class="col-3" v-for="(card, index) in store.projects" :key="index">

                <ExampleCard :image="card.imageUrl" :name="card.name" :paragraph="card.paragraph" />

            </div>

        </div>

    </div>
</template>
<script>
import Separator from './Separator.vue';
import OurProductsCardList from './OurProductsCardList.vue'

export default {
    name: 'OurProducts',
    components: {
        Separator,
        OurProductsCardList,
    }
}
</script>

<template>
    <div class="main-container">
        <div class="container d-flex flex-column gap-5 align-items-center">
            <OurProductsCardList></OurProductsCardList>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    background-color: white;
    padding: 200px 0;
}
</style>
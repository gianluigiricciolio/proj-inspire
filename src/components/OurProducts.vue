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
    <div class="main-container d-flex align-items-center">
        <div class="container d-flex flex-column gap-5">
            <OurProductsCardList></OurProductsCardList>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    background-color: white;
    height: 100%;
}
</style>
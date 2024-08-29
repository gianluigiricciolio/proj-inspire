<script>
import Separator from '../components/Separator.vue';
import TitlePage from '../components/TitlePage.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        TitlePage,
        Separator
    }
}


</script>

<template>
    <TitlePage :titlePage="'About Page'"></TitlePage>
</template>

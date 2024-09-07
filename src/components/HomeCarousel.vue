<script>

import { store } from '../store';
import Separator from './Separator.vue';

export default {
    name: "Home Carousel",

    components: {
        Separator,
    },

    data() {
        return {
            store,
            currentSlide: 0,
        }
    },

    methods: {

        scrollCarouselNext(countCarousel, array) {

            countCarousel++;
            if (countCarousel === array.length) {
                countCarousel = 0;
            }
            this.currentSlide = countCarousel;
            return this.currentSlide;

        },

        scrollCarouselPrev(countCarousel, array) {

            countCarousel--;
            if (countCarousel === -1) {
                countCarousel = array.length - 1;
            }
            this.currentSlide = countCarousel;
            return this.currentSlide;

        },

    }

};

</script>

<template>
    <div class="container h-100 pb-5" v-for="(slide, index) in store.carouselInfo" v-show="currentSlide === index">
        <div class="row ps-5 pb-5">
            <div class="col-1">
                <button class="border-0 circle left-button"
                    @click="scrollCarouselPrev(index, store.carouselInfo)"><font-awesome-icon class="fs-4 m-2"
                        icon="fa-solid fa-caret-left" />
                </button>
            </div>
            <div class="col-5">
                <div class="content mt-5">
                    <h1 class="mb-5">
                        {{ slide.title }}
                    </h1>
                    <Separator class="mb-5" />
                    <p class="mb-5">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live
                        the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                        large
                        language ocean.Separated they live in Bookmarksgrove.
                    </p>
                </div>
            </div>
            <div class="col-5">
                <div class="content">
                    <img class="mt-3" :src="slide.imageUrl" :alt="slide.title">
                </div>

            </div>
            <div class="col-1">
                <button class="border-0 circle right-button"
                    @click="scrollCarouselNext(index, store.carouselInfo)"><font-awesome-icon class="fs-4 m-2"
                        icon="fa-solid fa-caret-right" />
                </button>
            </div>

        </div>

    </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;


.col-1 {
    display: flex;
    align-items: center;

    button:hover {
        background-color: $secondary-color;
        color: white;
    }
}

.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.content {
    h1 {
        font-weight: 900;
        font-size: 4rem;
    }

    p:last-of-type {
        width: 80%;
    }
}

img {
    border: 65px solid #D4D4D4;
    width: 100%;
    border-radius: 50%;
}
</style>

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
    <div class="bg-color-section">
        <div class="container pb-5" v-for="(slide, index) in store.carouselInfo" v-show="currentSlide === index">

            <div class="row ps-5 pb-5">

                <div class="col position-relative ms-2">
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
                <div class="col me-2">
                    <div class="content position-relative">
                        <img class="mt-3" :src="slide.imageUrl" :alt="slide.title">
                        <button class="border-0 circle left-button"
                            @click="scrollCarouselPrev(index, store.carouselInfo)"><font-awesome-icon class="fs-4 m-2"
                                icon="fa-solid fa-caret-left" />
                        </button>
                        <button class="border-0 circle right-button"
                            @click="scrollCarouselNext(index, store.carouselInfo)"><font-awesome-icon class="fs-4 m-2"
                                icon="fa-solid fa-caret-right" />
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;

.bg-color-section {
    overflow: hidden;
}

.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
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

    button:hover {
        background-color: $secondary-color;
    }

}

img {
    position: absolute;
    right: 20px;
    border: 65px solid #D4D4D4;
    width: 100%;
    border-radius: 50%;
}

.left-button {
    position: absolute;
    top: 300px;
    left: -700px;
}

.right-button {
    position: absolute;
    top: 300px;
    left: 600px;
}
</style>

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

                <div class="col position-relative">
                    <div class="content mt-5">

                        <p class="secondary-color">17 YEARS OF EXPERIENCE</p>
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
                        <div class="black-button">READ MORE</div>
                        <ul class="list-group list-group-horizontal position-relative bottom-0 mb-3 mt-5">
                            <li class="list-group-item"><a
                                    class="link-dark link-offset-2 link-underline link-underline-opacity-0 fw-semibold"
                                    href="#">Facebook</a></li>
                            <li class="list-group-item"><a
                                    class="link-dark link-offset-2 link-underline link-underline-opacity-0 fw-semibold"
                                    href="#">Instagram</a></li>
                            <li class="list-group-item"><a
                                    class="link-dark link-offset-2 link-underline link-underline-opacity-0 fw-semibold"
                                    href="#">Twitter</a></li>
                            <li class="list-group-item"><a
                                    class="link-dark link-offset-2 link-underline link-underline-opacity-0 fw-semibold"
                                    href="#">Youtube</a></li>
                        </ul>

                        <div class="scroll-buttons d-flex gap-3 position-absolute bottom-0 end-0 mb-3">

                            <button class="border-0 circle"
                                @click="scrollCarouselPrev(index, store.carouselInfo)"><font-awesome-icon class="fs-4 m-2"
                                    icon="fa-solid fa-caret-left" /></button>
                            <button class="border-0 circle"
                                @click="scrollCarouselNext(index, store.carouselInfo)"><font-awesome-icon class="fs-4 m-2"
                                    icon="fa-solid fa-caret-right" /></button>

                        </div>

                    </div>

                </div>
                <div class="col">
                    <div class="content position-relative">
                        <img class="mt-5" :src="slide.imageUrl" :alt="slide.title">
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

    p:first-of-type {
        margin-top: 10rem;
    }

    h1 {
        font-weight: 900;
        font-size: 5rem;
    }

    p:last-of-type {
        width: 80%;
    }

    ul {
        position: absolute;
        bottom: 50px;
    }

    button:hover {
        background-color: $secondary-color;
    }

}

img {
    position: absolute;
    right: -230px;
    border: 65px solid #D4D4D4;
    width: 130%;
    border-radius: 50%;
}
</style>

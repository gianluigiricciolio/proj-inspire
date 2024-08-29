<script>

import HomeProjectsExamples from './HomeProjectsExamples.vue';
import Separator from './Separator.vue';

export default {
    name: "Home Past Projects",

    components: {
        Separator,
        HomeProjectsExamples
    },

};

</script>

<template>
    <div class="container-fluid my-5">

        <div class="row">
            <div class="col-6">
                <Separator />
                <h2 class="my-5 h2">
                    Our recent <span class="secondary-color">web designs</span> &
                    some examples of
                    past <span class="secondary-color">projects</span>
                </h2>
                <Separator />
            </div>
            <div class="col-6 align-self-end">
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                    blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                </p>
            </div>
        </div>

    </div>
    <HomeProjectsExamples></HomeProjectsExamples>
</template>
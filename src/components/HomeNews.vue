<script>

import Separator from './Separator.vue';

export default {
    name: "Home News",
    components: {
        Separator,
    },
};

</script>

<template>
    <div class="container-fluid text-center mt-5">
        <h2 class="h2">Latest News & Our <span class="secondary-color">Blog</span></h2>
        <Separator class="my-5 justify-content-center" />
        <div class="row mb-5">
            <div class="col position-relative">
                <div class="card border-0 shadows">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024x768.jpg"
                        class="card-img-top rounded" alt="..." />
                    <div
                        class="card-body position-absolute top-100 start-50 translate-middle bg-white w-75 rounded shadows p-4">
                        <p class="card-text">May 24, 2018 - by Alex</p>
                        <div class="fs-5 fw-bold">Marketing Ideas</div>
                    </div>
                </div>
            </div>
            <div class="col position-relative">
                <div class="card border-0 shadows">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/Businessman-at-the-desk-in-his-office-resting.-1024x768.jpg"
                        class="card-img-top" alt="..." />
                    <div
                        class="card-body position-absolute top-100 start-50 translate-middle bg-white w-75 rounded shadows p-4">
                        <p class="card-text">May 24, 2018 - by Alex</p>
                        <div class="fs-5 fw-bold">Rest During Working Hours</div>
                    </div>
                </div>
            </div>
            <div class="col position-relative">
                <div class="card border-0 shadows">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg"
                        class="card-img-top" alt="..." />
                    <div
                        class="card-body position-absolute top-100 start-50 translate-middle bg-white w-75 rounded shadows p-4">
                        <p class="card-text">May 24, 2018 - by Alex</p>
                        <div class="fs-5 fw-bold">Develop Your Startup Idea</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="black-button mt-5">VIEW ALL POSTS</div>
    </div>
</template>

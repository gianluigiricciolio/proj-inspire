<script>

export default {

    name: "Example Card",
    props: ['name', 'image', 'paragraph'],

};

</script>

<template>
    <div class="card text-bg-dark border-0">
        <img :src="image" class="card-img" :alt="name" />
        <div class="card-img-overlay d-flex flex-column justify-content-end p-5">
            <h5 class="card-title fs-4 fw-semibold">{{ name }}</h5>
            <div class="paragraph">
                <span class="card-text me-3" v-for="element in this.paragraph">{{ element }}</span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'OurProductsCard',

    props: ['item'],

    computed: {
        setBgImg() {
            return {
                '--background-image': `url(${this.item.img_src})`
            }
        }
    }


}

</script>

<template>
    <div class="card-image" :style="setBgImg">
        <div class="card-content">
            <div class="h3">{{ item.name }}</div>
            <p>{{ item.dimension }} cm</p>
            <p>{{ item.gsm }} gsm</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Conson, there live the blind
                texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...
            </p>
            <hr>
            <div class="social-links d-flex align-items-center gap-4">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-pinterest-p" />
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.card-image {
    width: 100%;
    padding-top: 100%;
    position: relative;
    background-image: var(--background-image);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &:hover .card-content {
        display: block;
        background: rgb(16, 92, 147);
        background: linear-gradient(225deg, rgba(16, 92, 147, 0.9) 0%, rgba(83, 140, 162, 0.9) 100%);
    }

    .card-content {
        cursor: pointer;
        display: none;
        padding: 30px;
        border-radius: 10px;
        color: white;
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;


    }
}
</style>

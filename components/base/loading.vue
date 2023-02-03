<template>
    <div class="vl-parent">
        <loading :active="loading"
                :is-full-page="fullPage"
                loader = "dots"
                :width= "64"
                color="#00b4d8"
                />
    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState('loading', ['loading', 'fullPage']),
        },
        props: {
            load:{
                type:Boolean,
                default:true
            }
        },
        data() {
            return {
                isLoading: true,
            }
        },
        components: {
            Loading
        },
    }
</script>
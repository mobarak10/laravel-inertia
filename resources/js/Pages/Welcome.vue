<template>
    <div>
        <App>
            <div class="container">
                <p class="text-danger fw-bold">welcome</p>
            </div>
        </App>
    </div>
</template>

<script setup>
    import {usePiniaStore} from "../store/index.js";
    import App from "../Components/Layouts/App.vue";
    import {usePage} from "@inertiajs/vue3";
    import {onMounted} from "vue";

    const store = usePiniaStore()
    const page = usePage()

    onMounted(() => {
        console.log(page.props)
    })
</script>

<style scoped>

</style>

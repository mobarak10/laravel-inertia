<template>
    <div>
        <Head />
        <Aside />
        <!-- Start main-bar ================================================ -->
        <!--
          If you want to keep sidebar always hidden then follow below 2 process
          1. use .hide-always class in aside tag
          2. use .main-bar-expand class in main tag
         -->
        <main class="main-bar" id="main-bar">
            <div class="container-fluid">
                <slot />
            </div>
        </main>
        <!-- End main-bar ================================================ -->
    </div>
</template>

<script setup>
    import Head from "./Head.vue";
    import Aside from "./Aside.vue";
</script>

<style scoped>

</style>

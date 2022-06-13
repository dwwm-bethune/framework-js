<template>
    <h1>Hello {{ $route.params.name }}</h1>
</template>

<script>
export default {
    mounted() {
        console.log('AJAX');
    },
    watch: {
        $route(to, from) {
            console.log(from, to);
        }
    }
}
</script>
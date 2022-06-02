<template>
    <div>
        <!-- ...[1, 2, 3] devient 1, 2, 3 -->
        {{ Math.max(...numbers) }}
    </div>
</template>

<script>
export default {
    props: ['numbers'],
}
</script>

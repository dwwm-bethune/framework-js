<template>
    <div>
        <p><strong>{{ term.term }} :</strong> {{ term.definition }}.</p>
    </div>
</template>

<script>
export default {
    props: ['term'],
}
</script>

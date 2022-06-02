<template>
    <div>
        {{ average }} OU
        {{ Math.round(numbers.reduce((a, b) => a + b) / numbers.length * 10) / 10 }}
    </div>
</template>

<script>
export default {
    props: ['numbers'],
    data() {
        return { average: 0 };
    },
    mounted() {
        let somme = 0;
        for (let number of this.numbers) {
            somme += number;
        }
        this.average = Math.round(somme / this.numbers.length * 10) / 10;
    }
}
</script>

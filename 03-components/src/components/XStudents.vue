<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nom</td>
                    <td>Note</td>
                    <td>Moyenne</td>
                    <td>Note max</td>
                    <td>Groupe</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(eleve, index) in tableau" v-show="filter == 'all' || eleve.groupe == filter" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ eleve.nom }}</td>
                    <td>
                        <span v-for="(note, index) in eleve.notes" :key="index">
                            {{ note }}<span v-if="index <= eleve.notes.length - 2">, </span>
                        </span>
                    </td>
                    <td>
                        <XAverage :numbers="eleve.notes" />
                    </td>
                    <td>
                        <XMax :numbers="eleve.notes" />
                    </td>
                    <td>{{ eleve.groupe }}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
import XAverage from './XAverage.vue';
import XMax from './XMax.vue';

export default {
    props: ['tableau', 'filter'],
    components: {
        XAverage,
        XMax
    }
}
</script>

<style>
table {
    margin: auto;
}

thead {
    background-color: red;
}
</style>

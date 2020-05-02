<template>
    <img src="../logo.png">
    <h1>Hello Vue 3!</h1>
    <div>{{state.number}}</div>
    <div>{{state.doubled}}</div>
    <div>{{name}}</div>
    <button @click="incrementNumber">Click!</button>
</template>

<script lang="ts">
import {defineComponent, reactive, computed, Ref} from 'vue';

export default defineComponent({
    props: {
        name: {
            type: String,
            default: 'Test'
        }
    },
    setup(props) {
        const state: {number: number, doubled: number} = reactive({
            number: 0,
            doubled: computed(() => state.number * 2)
        });
        const incrementNumber = () => state.number += 1;

        return {
            state,
            incrementNumber
        }
    }
})
</script>

<style scoped>
img {
    width: 200px;
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
}
</style>

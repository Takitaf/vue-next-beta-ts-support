<template>
    <img src="../logo.png">
    <h1>Hello Vue 3!</h1>
    <div>{{doubled}}</div>
    <button @click="incrementNumber">Click!</button>
</template>

<script lang="ts">
import {defineComponent, reactive, computed} from 'vue';

export default defineComponent({
    setup() {
        const state = reactive({
            number: 0
        });

        const doubled = computed(() => state.number * 2);

        const incrementNumber = () => state.number += 1;

        return {
            ...state,
            doubled,
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

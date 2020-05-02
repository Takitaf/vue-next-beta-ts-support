<template>
    <img src="../logo.png" alt="Logo">
    <h1>Hello Vue 3!</h1>

    <input type="email" v-model="form.email" v-bind="form.bind('email')"/>
    <br/>
    <input type="password" v-model="form.password" v-bind="form.bind('password')"/>

    <br/>
    Current state:
    <pre>{{form.getFieldValueObject()}}</pre>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, onUnmounted, reactive, ref, Ref} from 'vue';
import Form from "~/Form/Form";
import Input from "~/Form/Input";

export default defineComponent({
    props: {
        name: {
            type: String,
            default: 'Test'
        }
    },
    setup() {
        const {x, y} = useMousePosition();

        const form = createForm();

        return {
            x, y,
            form,
        }
    }
});

interface UserForm extends Form {
    email: Ref;
    password: Ref;
}

function createForm (): UserForm {
    return new Form([
        new Input({name: 'email'}),
        new Input({name: 'password'})
    ]) as UserForm;
}

function useMousePosition(): {x: Ref, y: Ref} {
    const x = ref(0);
    const y = ref(0);

    function update(event: MouseEvent) {
        x.value = event.pageX;
        y.value = event.pageY;
    }

    onMounted(() => {
        window.addEventListener('mousemove', update);
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', update);
    });

    return {x, y};
}
</script>

<style scoped>
img {
    width: 200px;
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
}
</style>

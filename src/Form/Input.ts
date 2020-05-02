import {ref, Ref} from 'vue';

export default class Input {
    name: string;
    value: Ref = ref('');

    constructor({name}: { name: string; }) {
        this.name = name;
    }

    bind (): any {
        return {};
    }

    get () {
        return this.value;
    }

    set (value: any) {
        this.value = value;
    }
}

import Input from "~/Form/Input";

export default class Form {
    inputs: Input[];

    constructor(inputs: Input[]) {
        this.inputs = inputs;
        this.inputs.forEach((input: Input) => {
            Object.defineProperty(this, input.name, {
                get: () => input.get(),
                set: (value: any) => input.set(value),
            })
        })
    }

    bind (fieldName: string) {
        const input = this.inputs.find(input => input.name === fieldName);
        return input ? input.bind() : {};
    }

    getFieldValueObject (): any {
        const result: any = {};
        this.inputs.forEach((input) => result[input.name] = input.get());
        return result;
    }
}

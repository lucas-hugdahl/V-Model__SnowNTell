<template>
    <div class="base-input my-3">
        <label for="" class="base-input__label px-2">{{label}}</label>
        <span class="base-input__count px-2">{{maxLength - local_value.length}}</span>
        <input class="base-input__input py-2 w-100" type="text" :maxlength="maxLength" v-model="local_value"/>
    </div>
</template>

<script>
export default {
    name: "BaseInput",
    props: {
        value:{
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: "Label"
        },
        maxLength: {
            type: Number,
            default: 10
        }   
	},
	data() {
        return {
             local_value: this.value
        }
    },
    watch: {
        local_value: {
            handler(val) {
                this.$emit('input', val);
            }
        }
    }
}
</script>
<style lang="scss">
    .base-input {
        position: relative;
        &__label {
            position: absolute;
            top: 0;
            left: 10px;
            background: white;
            transform: translateY(-50%);
            text-transform: uppercase;
            font-size: .7rem;
        }
        &__count {
            position: absolute;
            bottom: 0;
            right: 10px;
            background: white;
            transform: translateY(50%);
            text-transform: uppercase;
            font-size: .7rem;
        }
    }
</style>


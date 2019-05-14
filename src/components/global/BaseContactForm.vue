<template>
    <form>
        <b-row>
            <b-col cols="12">
                <BaseInput label="First Name"  v-model="local_value.firstName"/>
            </b-col>
            <b-col cols="12">
                <BaseInput label="Last Name"  v-model="local_value.lastName"/>
            </b-col>
            <b-col cols="12">
                <BaseInput label="Email"  v-model="local_value.email"/>
            </b-col>
            <b-col cols="6">
                <BaseInput label="City"  v-model="local_value.city"/>
            </b-col>
            <b-col cols="6">
                <BaseInput label="State" v-model="local_value.state"/>
            </b-col>
        </b-row>
    </form>
</template>

<script>
export default {
    name: "BaseContactForm",
    props: {
        value: {
            type: Object,
            default: {}
        }
    },
    watch: {
        local_value: {
            handler(val) {
                this.$emit('input', val)
            },
            deep: true
        }
    },
    data() {
        return {
			//make sure you make a copy like this.
			//doing just `local_value: this.value` will bind
			//the local value to the prop and that's bad.
            local_value: {...this.value}
        }
    }

}
</script>


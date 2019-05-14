<template>
    <div>
        <b-row class="mb-5">
            <b-col>
                <h4>Modified Input</h4>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p>Name: {{name}}</p>
            </b-col>
            <b-col>
                <BaseInput
                    v-model="name"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        }
    }
}
</script>
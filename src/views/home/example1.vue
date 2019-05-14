<template>
    <div>
        <b-row class="mb-5">
            <b-col>
                <h4>Normal Input</h4>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p>Name: {{name}}</p>
            </b-col>
            <b-col>
                <input type="text" v-model="name"/>
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

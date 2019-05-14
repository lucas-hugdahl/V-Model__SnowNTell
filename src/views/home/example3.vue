<template>
    <div>
        <b-row class="mb-5">
            <b-col>
                <h4>Modified Contact Form</h4>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <pre class="text-left">
                    {{formData}}
                </pre>
            </b-col>
            <b-col>
                <BaseContactForm
					v-model="formData"
                />
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {}
        }
    }
}
</script>
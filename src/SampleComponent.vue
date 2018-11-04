<template>
    <div>
        <span class="message" v-html="message"/>
    </div>
</template>

<script>
export default {

    name: 'sample-component',

    props: {
        message: {
            type: String,
            required: true
        }
    }

};
</script>

<style lang="scss">
.sample-component {
    background: rgb(200, 200, 200);

    .message {
        font-size: 1rem;
    }

    .test {
        background: yellow;
    }

    .a {
        background: red;
    }

    .b {
        background: blue;
    }

    .c {
        background: white;
    }
}
</style>

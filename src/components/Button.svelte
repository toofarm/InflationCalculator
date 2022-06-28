<script lang="ts">
export let text:string;
export let handler:any;
</script>

<button on:click={handler}>
    {text}
</button>

<style lang="scss">
    @import '../styles/constants';

    button {
        background-color: $color-link;
        color: white;
        font-size: 1.45rem;
        font-weight: bold;
        padding: 0.5em 1em;
        border: none;
        border-radius: 8px;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }

        &:active {
            opacity: 1;
        }
    }
</style>
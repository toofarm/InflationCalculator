<script lang="ts">
    export let label:string;
    export let val:number;
</script>

<label>
    {label}
    <input type="number" on:change bind:value={val} />
</label>

<style lang="scss">
    label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-weight: bold;
        font-size: 2rem;
        margin: 0 0 1rem 0;

        input {
            margin: 1rem 0 0 0;
            padding: 0.5rem;
            font-size: 1.15rem;
            border-left: none;
            border-top: none;
            border-right: none;
            border-bottom: 1px solid black;
        }
    }

</style>
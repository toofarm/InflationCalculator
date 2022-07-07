<script lang="ts">
    export let label:string;
    export let val:number;
</script>

<label>
    {label}
    <input type="number" on:change bind:value={val} />
</label>

<style lang="scss">
    @import '../styles/mixins';

    label {
        @include labelAndInput();
    }

</style>
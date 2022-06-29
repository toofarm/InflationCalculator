<script lang="ts">
    import formatDollarAmount from "../lib/formatDollarAmount";

    export let singleUnit:number;
    export let total:number;
    export let date:number;
</script>

<div class='hold'>
    <p class='result'>
       {formatDollarAmount(total)}
    </p>
    <p>
        <span class='highlight'>$1</span> in {date} would have the purchasing power of approximately <span class="highlight">{formatDollarAmount(singleUnit)}</span> in contemporary US dollars
    </p>
</div>

<style lang="scss">
    @import '../styles/constants';

    .result {
        font-weight: bold;
        font-size: 2.5rem;
    }

    .highlight {
        font-weight: bold;
    }
</style>
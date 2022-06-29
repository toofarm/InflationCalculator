<script lang="ts">
    import { loading } from '../stores/loading'
    import NumericInput from "./NumericInput.svelte";
    import Button from "./Button.svelte";
    import Response from "./Response.svelte";
    import makeYearslist from '../lib/makeYearsList';
    import getInflationPrice from "../lib/getInflationPrice";
    import { fade } from 'svelte/transition';

    let val = 0;
    let selection:number;
    const years = makeYearslist();
    let result;

    $: valid = selection && val > 0;

    const handleSubmit = async () => {
        console.log('We have submitted a form')
        loading.set(true)

        result = await getInflationPrice({ 
            amount: val,
            comparisonYear: selection
        })
        
        loading.set(false)
    }

    const handleOnChange = (e) => {
        val = Number((e.target as HTMLInputElement).value)
    }
</script>

<div class='hold'>

    <div class='input_wrap'>
        <NumericInput 
            val={val} 
            label='Contemporary US dollars' 
            on:change={(e) => handleOnChange(e)}/>
    </div>

    <div class='input_wrap'>
        <label>
            Comparison year
            <select bind:value={selection}>
                {#each years as year (year)}
                    <option value={year}>
                        {year}
                    </option>
                {/each}
            </select>
        </label>
    </div>

    {#if valid}
        <div class='input_wrap' transition:fade>
            <Button text='Submit' handler={handleSubmit} />
        </div>
    {/if}

    {#if result}
        <Response 
            singleUnit={Number(result.singleUnitConverted)}
            total={result.totalAdjustedAmount}
            date={selection} />
    {/if}
</div>

<style lang="scss">
    .hold {
        display: flex;
        flex-direction: column;
        max-width: 1170px;
        margin: 3rem auto;
        
        label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            font-weight: bold;
            font-size: 2rem;
            margin: 0 0 1rem 0;

            select {
                margin: 1rem 0 0 0;
                padding: 0.5rem;
                font-size: 1.15rem;
                min-width: 8rem;
                border-left: none;
                border-top: none;
                border-right: none;
                border-bottom: 1px solid black;
                min-width: 207px;
            }
        }
    }

    .input_wrap {
        margin: 1.5rem 0;
    }
</style>
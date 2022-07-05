<script lang="ts">
    import { countries } from '../lib/constants';
    import { loading } from '../stores/loading'
    import NumericInput from "./NumericInput.svelte";
    import Button from "./Button.svelte";
    import Response from "./Response.svelte";
    import makeYearslist from '../lib/makeYearsList';
    import getInflationPrice from "../lib/getInflationPrice";
    import { fade } from 'svelte/transition';
    import { each } from 'svelte/internal';

    let val = 0;
    let selection:number;
    let country = 'united-states';
    let result;
    const years = makeYearslist();

    $: valid = selection && val > 0;

    const handleSubmit = async () => {
        loading.set(true)

        result = await getInflationPrice({ 
            amount: val,
            comparisonYear: selection,
            country
        })

        loading.set(false)

    };

    const handleOnChange = (e) => {
        val = Number((e.target as HTMLInputElement).value)
    };
</script>

<div class='hold'>

    <div class='input_wrap'>
        <label>
            Currency
            <select
                bind:value={country}>
                {#each countries as country (country.value)}
                    <option 
                        value={country.value}>
                        {country.country}
                    </option>
                {/each}
            </select>
        </label>
    </div>

    <div class='input_wrap'>
        <NumericInput 
            val={val} 
            label='Amount in contemporary currency' 
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
            font-size: 1rem;
            margin: 0 0 1rem 0;
            color: #888;

            select {
                margin: 1rem 0 0 0;
                padding: 0.5rem;
                font-size: 1.75rem;
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
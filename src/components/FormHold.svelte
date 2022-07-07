<script lang="ts">
    import { countries } from '../lib/constants';
    import { loading } from '../stores/loading'
    import NumericInput from "./NumericInput.svelte";
    import Button from "./Button.svelte";
    import Response from "./Response.svelte";
    import Error from './Error.svelte';
    import makeYearslist from '../lib/makeYearsList';
    import getInflationPrice from "../lib/getInflationPrice";
    import { fade } from 'svelte/transition';

    let val = 0;
    let selection:number;
    let error = false;
    let country = 'united-states';
    let result;
    const years = makeYearslist();

    $: valid = selection && val > 0;

    const handleSubmit = async () => {
        loading.set(true)

        try {
            result = await getInflationPrice({ 
                amount: val,
                comparisonYear: selection,
                country
            })
            error = false
        } catch (err) {
            console.log('hitting error block')
            error = true
        }

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

    {#if error}
        <Error />
    {/if}
</div>

<style lang="scss">
    @import '../styles/mixins';
    .hold {
        display: flex;
        flex-direction: column;
        max-width: 1170px;
        margin: 3rem auto;
        
    }

    label {
            @include labelAndInput();
        }

    .input_wrap {
        margin: 1.5rem 0;
    }
</style>
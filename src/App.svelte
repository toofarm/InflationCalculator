<script lang="ts">
  import { loading } from './stores/loading';
  import FormHold from './components/FormHold.svelte';
  import Footer from './components/Footer.svelte';
  import Loader from './components/Loader.svelte';
</script>

<main>

  {#if $loading}
    <Loader />
  {/if}

  <h1>Inflation Calculator</h1>
  
  <p>
    Enter an amount in contemporary currency, then pick a year for comparison 
  </p>

  <FormHold />

  <Footer />

</main>

<style lang="scss">
  @import './styles/constants';

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    max-width: 1170px;
    padding: 1em;
    margin: 0 auto;
    background-color: white;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem 0;
  }

  p {
    max-width: none;
    margin: 1rem auto;
    line-height: 1.35;
    font-size: 1.2rem;
  }

  @media (max-width: $tablet) {
    h1 {
      font-size: 3rem;
      max-width: 14rem;
    }

    p {
      max-width: none;
    }
  }
</style>

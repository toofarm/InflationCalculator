<script lang="ts">
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from 'fontawesome-svelte';
</script>

<div>
    <FontAwesomeIcon icon={faCircleNotch} class="icon" />
</div>

<style lang="scss">
    div {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #ddd;
        opacity: 0.3;
        top: 0;
        left: 0;
        color: red;
    }
</style>
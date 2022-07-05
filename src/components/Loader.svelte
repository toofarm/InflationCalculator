<script lang="ts">
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from 'fontawesome-svelte';

    library.add(faCircleNotch)
</script>

<div>
    <FontAwesomeIcon icon={['fas', 'circle-notch']} spin={true} />
</div>

<style lang="scss">
    @import '../styles/constants';

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        top: 0;
        left: 0;
        color: #666;
        font-size: 6rem;
        pointer-events: none;
    }
</style>
<script lang="ts">
	let { children } = $props();
</script>

<div class="layout">
	{@render children()}
</div>

<style>
    .layout {
        background: black;
        color: white;
        line-height: 2em;
        padding: 20px;
        border-radius: 10px;
        font-family: Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 20px;
    }

</style>
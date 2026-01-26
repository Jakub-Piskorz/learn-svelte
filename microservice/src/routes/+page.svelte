<div>
	<h1>Microservice served from port: 2137</h1>
	<p>This is remote microservice. That's how it works:</p>
	<ol>
		<li><code>+page.svelte:</code> takes URL param: <code>{'/service/{serviceName}'}</code></li>
		<li><code>serviceName</code> is mapped to port (in this case: 2137), creating <code>newUrl.</code></li>
		<li>fetched data is then rendered on a page as <code>{'{@html data.mfeHtml}'}</code> inside the <code>&lt;main&gt;</code> tag</li>
	</ol>
</div>

<style>
    code {
        background: #222;
        font-family: Consolas, Menlo, Monaco, Consolas, "Courier New", monospace;
        border-radius: 3px;
        padding: 2px 4px;
    }
</style>
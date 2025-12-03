<script lang="ts">
	let selected = $state('tiny');
</script>

<select bind:value={selected} class="mx-auto mb-4 block">
	<option value="tiny">Tiny</option>
	<option value="small">Small (sm)</option>
	<option value="medium">Medium (md)</option>
	<option value="large">Large (lg)</option>
	<option value="extraLarge">Extra Large (xl)</option>
	<option value="extraExtraLarge">Extra Extra Large (2xl)</option>
</select>

<iframe
	src="/"
	title=""
	class={[
		'mx-auto rounded-lg border',
		selected === 'tiny' && 'aspect-9/19 w-100',
		selected === 'small' && 'aspect-3/4 w-160',
		selected === 'medium' && 'aspect-4/3 w-200',
		selected === 'large' && 'aspect-4/3 w-260',
		selected === 'extraLarge' && 'aspect-video w-7xl',
		selected === 'extraExtraLarge' && 'aspect-video w-390'
	]}
></iframe>

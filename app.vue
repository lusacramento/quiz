<template>
	<div>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
	const title = ref('Quizz')

	useSeoMeta({
		title,
		description: () => `description: ${title.value}`,
	})
</script>

<template>
	<div class="result">
		<div class="title">{{ hit }} hits. {{ result.title }}</div>
		<div class="desc">{{ result.description }}</div>
	</div>
</template>

<script lang="ts" setup>
	const hit = useQuestions().hit
	const result = useQuestions().result
</script>

<style>
	.result {
		width: 100%;
	}

	.title {
		width: 100%;
		padding: 20px;
		font-size: 32px;
		font-weight: bold;
		text-align: center;
		background-color: #12cbc4;
		color: #fff;
		box-sizing: border-box;
	}

	.desc {
		border: 1px solid #8e959f;
		padding: 20px;
		font-size: 18px;
		width: 100%;
		background-color: #fff;
		transition: 0.4s linear all;
		text-align: center;
	}
</style>

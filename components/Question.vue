<template>
	<div class="single-question">
		<div class="question">{{ question.number }}) {{ question.q }}</div>
		<Answers :answers="question.answers" />
	</div>
</template>

<script lang="ts" setup>
	const data = defineProps({
		question: {
			type: Object,
			required: true,
		},
	})

	const question = data.question
</script>

<style>
	.single-question {
		position: relative;
		width: 100%;
	}

	.question {
		width: 100%;
		padding: 20px;
		font-size: 32px;
		font-weight: bold;
		text-align: center;
		background-color: #00ca8c;
		color: #fff;
		box-sizing: border-box;
	}
</style>

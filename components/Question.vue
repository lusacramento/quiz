<template>
	<div class="single-question">
		<div class="question">
			{{ currentQuestion.number }})
			{{ currentQuestion.q }}
		</div>
		<Answers />
	</div>
</template>

<script lang="ts" setup>
	const currentQuestion = useQuestions().currentQuestion
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

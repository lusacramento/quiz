<template>
	<div class="answers" v-for="answer in currentQuestion.answers">
		<div
			class="answer"
			@click.prevent="useQuestions().nextStep(answer.isCorrect)"
		>
			{{ answer.option }}) {{ answer.text }}
		</div>
	</div>
</template>

<script lang="ts" setup>
	const currentQuestion = useQuestions().currentQuestion
</script>

<style>
	.answer {
		border: 1px solid #8e959f;
		padding: 20px;
		font-size: 18px;
		width: 100%;
		background-color: #fff;
		transition: 0.2s linear all;
	}
	.answer span {
		display: inline-block;
		margin-left: 5px;
		font-size: 0.75em;
		font-style: italic;
	}

	.answer:not(.is-answered) {
		cursor: pointer;
	}
	.answer:not(.is-answered):hover {
		background-color: #8ce200;
		border-color: #8ce200;
		color: #fff;
	}
</style>

<template>
	<div class="ctr">
		<div class="questions-ctr">
			<Progress
				:questionsAnswered="questionsAnswered"
				:totalQuestions="totalQuestions"
			/>
			<Question />
		</div>
		<Result />
		<Button />
	</div>
</template>

<script lang="ts" setup>
	const questions = useQuestions().questions
	const totalQuestions = questions.length

	let questionsAnswered = 0
	const currentQuestion = questions[questionsAnswered]
</script>

<style>
	* {
		box-sizing: border-box;
	}
	body {
		font-size: 20px;
		font-family: sans-serif;
		padding-top: 20px;
		background: #e6ecf1;
	}

	.ctr {
		margin: 0 auto;
		max-width: 600px;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}
	.questions-ctr {
		position: relative;
		width: 100%;
	}

	.fade-enter-from {
		opacity: 0;
	}
	.fade-enter-active {
		transition: all 0.3s linear;
	}
	.fade-leave-active {
		transition: all 0.3s linear;
		opacity: 0;
		position: absolute;
	}
	.fade-leave-to {
		opacity: 0;
	}
</style>

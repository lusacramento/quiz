<template>
	<div class="ctr">
		<div class="questions-ctr">
			<Progress />
			<Question v-show="!isFinished" />
		</div>
		<Result v-show="isFinished" />
		<Button />
	</div>
</template>

<script lang="ts" setup>
	const isFinished = useQuestions().isFinished
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

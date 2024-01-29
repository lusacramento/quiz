<template>
	<div class="progress">
		<div class="bar"></div>
		<div class="status">
			{{ progress }} out of {{ questionsNumber }} questions answered
		</div>
	</div>
</template>

<script lang="ts" setup>
	const progress = useQuestions().progress
	const questionsNumber = useQuestions().questionsNumber
</script>

<style>
	.progress {
		height: 50px;
		margin-top: 10px;
		background-color: #ddd;
		position: relative;
	}
	.bar {
		height: 50px;
		background-color: #ff6372;
		transition: all 0.3s linear;
	}
	.status {
		position: absolute;
		top: 15px;
		left: 0;
		text-align: center;
		color: #fff;
		width: 100%;
	}
</style>

<template>
	<button type="button" class="reset-btn" @click.prevent="reset">Reset</button>
</template>

<script lang="ts" setup>
	const reset = useQuestions().reset
</script>

<style>
	.reset-btn {
		background-color: #ff6372;
		border: 0;
		font-size: 22px;
		color: #fff;
		padding: 10px 25px;
		margin: 10px auto;
		display: block;
	}

	.reset-btn:active,
	.reset-btn:focus,
	.reset-btn:hover {
		border: 0;
		outline: 0;
	}

	.reset-btn:hover {
		background-color: #ee4d5a;
	}
</style>

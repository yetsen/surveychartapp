<template>
    <div class="survey-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="progress w-75 mx-auto">
                        <div class="progress-bar w-50 color-palette progress-bar-striped progress-bar-animated"
                             role="progressbar"
                             aria-valuenow="50"
                             aria-valuemin="0"
                             aria-valuemax="100">50%</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <survey :survey='$data.survey'></survey>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./survey-card.component.ts">
</script>
<style scoped>
.survey-page {
    height: 75vh;
    min-height: 500px;
}
</style>

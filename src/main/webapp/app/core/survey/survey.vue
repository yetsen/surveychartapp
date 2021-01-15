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
                    <surveyVue :survey='$data.surveyData'></surveyVue>
                    <div id="surveyResult"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./survey.component.ts">
</script>
<script lang="scss" src="./survey.scss">
</script>

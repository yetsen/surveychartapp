<template>
    <div class="survey-page">
        <div class="card jh-card">
            <div class="container">
                <div v-if="!isCompletionPage" class="progress center-block mx-auto mb-4">
                    <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" :style="{width: progress}">
                        <span id="progressbar">{{ pageNumber }}</span>
                    </div>
                </div>
                <survey :survey='survey'></survey>
                <div v-if="!isCompletionPage" class="panel-footer card-footer">
                    <input v-if="!survey.isFirstPage" type="button" @click="survey.prevPage()" value="Previous" class="btn sv_prev_btn float-left" >
                    <input type="button" @click="prepareClearAndExitModal()" value="Clear & Exit" class="btn sv_clear_btn float-left" >
                    <input v-if="!survey.isLastPage" type="button" @click="survey.nextPage()" value="Next" class="btn sv_next_btn float-right">
                    <input v-if="survey.isLastPage" type="button" @click="survey.completeLastPage()" value="Complete" class="btn sv_complete_btn float-right" >
                </div>
            </div>
            <b-modal ref="clearAndExitModal" id="clearAndExitModal" title="Confirm Clear & Exit" v-bind:title="$t('global.modal.survey.clearAndExit.title')">
                <div class="modal-body">
                    <p id="jhi-delete-user-heading" v-text="$t('global.modal.survey.clearAndExit.question')">Are you sure you want to clear and exit the survey?</p>
                </div>
                <div slot="modal-footer">
                    <button type="button" class="btn btn-secondary" v-text="$t('global.modal.survey.clearAndExit.no')" @click="closeDialog()">No</button>
                    <button type="button" class="btn btn-primary" v-text="$t('global.modal.survey.clearAndExit.yes')" @click="clearAndGoToHomePage()">Yes</button>
                </div>
            </b-modal>
        </div>
    </div>
</template>

<script lang="ts" src="./survey-card.component.ts">
</script>
<style lang="scss" src="./survey-card.scss">
</style>

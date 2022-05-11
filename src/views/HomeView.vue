<template>
	<div 
		class="home-view-component"
	>
		<!-- TITRE -->
		<h1
			v-if="pagesTitle"
			v-html="pagesTitle"
		/>

		<!-- CONTENU DE LA PAGES -->
		<div
			v-if="pagesContent"
			v-html="pagesContent"
		/>

		<!-- VIDEO YOUTUBE -->
		<YouTube 
		v-if="videoId"
        :src="`https://www.youtube.com/watch?v=${videoId}`"
        @ready="onReady"
        ref="youtube" />
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */
	
		export default {
			name: 'HomeView',

			
			components: { 

			},
			
			computed: {

			},
			
				data(){
					return {
						pagesContent: undefined,
						pagesTitle: undefined,
						videoId: undefined,
						
					}
				},
			
                methods: {
					// Sert à play la vidéo
					onReady() {
						this.$refs.youtube.playVideo()
					},
				},
            //

			/*
				[VUE] Hooks => https://vuejs.org/api/options-lifecycle.html
				Called after the instance has finished processing all state-related options.
			*/
				created: function(){
					// Subscribe to state mutation
					this.$store.subscribe( (mutation) => {
						if( mutation.type === 'userinfos' ){
							if( this.$store.getters.userinfos !== null ){
								this.cmpUserinfo = this.$store.getters.userinfos
							}
							else{
								this.cmpUserinfo = undefined
							}
						}
					})
				},
			//

			/*
				[VUE] Hooks => https://vuejs.org/api/options-lifecycle.html
				Called after the component has been mounted.
			*/
				mounted: function(){
					fetch( `http://homies.v-info.info/wp-json/wp/v2/pages/8`, {
                    method: 'GET'
					})
					.then( apiResponse => {
						if( apiResponse.ok ){ return apiResponse.json() }
						else{ throw apiResponse } 
					})
					.then( jsonResponse => {
						console.log(jsonResponse)
						this.pagesContent = jsonResponse.content.rendered
						this.pagesTitle = jsonResponse.title.rendered
						this.videoId = jsonResponse.acf.videoyoutube
					})
					.catch( apiError => {
						console.log('apiError', apiError)
					});
				},
			//
		}
	//
</script>

<style scoped>
</style>
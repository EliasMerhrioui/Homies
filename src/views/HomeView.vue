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
			class="youtubeVideoHomeView"
			v-if="videoId"
			:src="`https://www.youtube.com/watch?v=${videoId}`"
			@ready="onReady"
			ref="youtube" 
		/>	
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
					// Paramètre pour API
					pagesContent: undefined,
					pagesTitle: undefined,
					videoId: undefined,
				}
			},
		
			methods: {
				//Sert à mettre en lecture la vidéo dès le chargement de la page
				onReady() {
					this.$refs.youtube.playVideo()
				},
			},
		
			created: function(){
				
			},
	
			mounted: function(){
				//Récupérer le contenu stocker dans la pages numéro 8 de l'api de wordpress 
				//lien de l'api + récupération en GET
				fetch( `http://homies.v-info.info/wp-json/wp/v2/pages/8`, {
				method: 'GET'
				})
				.then( apiResponse => {
					if( apiResponse.ok ){ return apiResponse.json() }
					else{ throw apiResponse } 
				})
				.then( jsonResponse => {
					console.log(jsonResponse)
					// On récupere ici les propriété de l'objet "content" pour récupérer le contenu "rendered"   
					this.pagesContent = jsonResponse.content.rendered
					this.pagesTitle = jsonResponse.title.rendered
					this.videoId = jsonResponse.acf.videoyoutube
				})
				.catch( apiError => {
					console.log('apiError', apiError)
				});
			},
	}
</script>

<style scoped>
</style>
<template>
	<div 
		class="location-view-component"
	>
		<!-- Titre (COMMENT VENIR ?) + Contenu (PAGE 16) -->
		<div
			v-if="article['16']"
		>
			<div class="title" v-html="article['16'].title.rendered"/>
			<div class="contentHowToCome" v-html="article['16'].content.rendered"/>
		</div>
		
		<!-- Gestions de toutes les colonne avec bulma -->
		<div class="columns has-text-centered">
			<!-- Columns (ADRESSE) -->
			<div 
				class="column is-one-third" 
				v-if="article['50']" 
			>
				<div class="box">
					<h2 class="subtitle" v-html="article['50'].title.rendered"/>
					<div v-html="article['50'].content.rendered"/>
				</div>
			</div>	
			<!-- Columns (ACCÈS TRANSPORTS EN COMMUN) -->
			<div 
				class="column is-one-third" 
				v-if="article['48']" 
			>
				<div class="box">
					<h2 class="subtitle"  v-html="article['48'].title.rendered"/>
					<div v-html="article['48'].content.rendered"/>
				</div>
			</div>	
			<!-- Columns (ACCÈS VOITURE) -->
			<div 
				class="column is-one-third" 
				v-if="article['46']" 
			>
				<div class="box">
					<h2 class="subtitle"  v-html="article['46'].title.rendered"/>
					<div v-html="article['46'].content.rendered"/>
				</div>
			</div>			
		</div>
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */

	export default {
		name: 'LocationView',
		components: {  },
		computed: {},
	
		data(){
			return {
				article: { // Paramètre pour API
					50: undefined, //ADRESSE
					48: undefined, //ACCÈS TRANSPORTS EN COMMUN
					46: undefined, //ACCÈS VOITURE
					16: undefined, //Titre (COMMENT VENIR ?) + Contenu (PAGE 16)
				}	
			}
		},

		methods: {
			//La methods "fetchMethod" permet de GET plusieurs lien d'une API 
			fetchMethod:function(path, id){
				fetch(path, {
				method: 'GET'
				})
				.then( apiResponse => {
					if( apiResponse.ok ){ return apiResponse.json() }
					else{ throw apiResponse } 
				})
				.then( jsonResponse => {
					this.article[id] = jsonResponse
					console.log(this.article);
				})
				.catch( apiError => {
					console.log('apiError', apiError)
				});
			}
		},
	
		created: function(){},
		
		//Lien des API pour la methode fetchMethod
		mounted: function(){
			//Récupérer le contenu stocker dans les posts numéro 50,48,46 et la page 16 de l'api de wordpress 
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/50`, 50)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/48`, 48)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/46`, 46)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/pages/16`, 16)
		},
	}
</script>

<style scoped></style>
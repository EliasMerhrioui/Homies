<template>
	<div 
		class="schedule-view-component"
	>
		<div class="content">
			<!-- Titre (LES HORAIRES) + Contenu (PAGE 20) -->
			<div
				v-if="article['20']"
			>
				<div class="title" v-html="article['20'].title.rendered"/>
				<div class="contentHowToCome" v-html="article['20'].content.rendered"/>
			</div>
			
			<!-- Horaires du FLAG -->
			<div class="columns has-text-centered">
				<div 
					class="column is-one-third" 
					v-if="article['38']" 
				>
					<div class="box">
						<h2 class="subtitle" v-html="article['38'].title.rendered"/>
						<div v-html="article['38'].content.rendered"/>
					</div>
				</div>	

				<!-- Horaires des JUNIOR & CADET -->
				<div 
					class="column is-one-third" 
					v-if="article['35']" 
				>
					<div class="box">
						<h2 class="subtitle" v-html="article['35'].title.rendered"/>
						<div v-html="article['35'].content.rendered"/>
					</div>
				</div>	

				<!-- Horaires des SENIOR -->
				<div 
					class="column is-one-third" 
					v-if="article['32']" 
				>
					<div class="box">
						<h2 class="subtitle" v-html="article['32'].title.rendered"/>
						<div v-html="article['32'].content.rendered"/>
					</div>
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
		name: 'ScheduleView',
		computed: {},
	
		data(){
			return {
				article: { // Paramètre pour API
					38: undefined, //Horaires du FLAG
					35: undefined, //Horaires des JUNIOR & CADET
					32: undefined, //Horaires des SENIOR
					20: undefined, //Titre (LES HORAIRES) + Contenu 
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
			//Récupérer le contenu stocker dans les posts numéro 38,32,35 et la page 20 de l'api de wordpress 
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/38`, 38)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/32`, 32)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/35`, 35)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/pages/20`, 20)
		},
	}
</script>

<style scoped></style>
<template>
	<div 
		class="history-view-component"
	>
		<div class="columns has-text-centered is-vcentered">
			<!-- Première colomns (LE NOM DU CLUB, LA CRÉATION À MONTREUIL) -->
			<div 
				class="column is-half" 
				v-if="article['60']" 
			>
				<div v-html="article['60'].content.rendered"/>
			</div>
			<div 
				class="column is-half " 
				v-if="article['57']" 
			>
				<!-- LE NOM DU CLUB -->
				<h2 class="title is-size-6" v-html="article['57'].title.rendered"/>
				<div v-html="article['57'].content.rendered"/>

				<!-- LA CRÉATION À MONTREUIL -->
				<h2 class="title is-size-6" v-html="article['64'].title.rendered"/>
				<div v-html="article['64'].content.rendered"/>

			</div>
		</div>

		<div class="columns has-text-centered is-vcentered">
			<!-- Deuxième columns (ROSNY TERRE PROMISE) -->
			<div 
				class="column is-half" 
				v-if="article['60']" 
			>
				<div v-html="article['60'].content.rendered"/>
			</div>
			<div 
				class="column is-half " 
				v-if="article['66']" 
			>	
				<h2 class="title is-size-6" v-html="article['66'].title.rendered"/>
				<div v-html="article['66'].content.rendered"/>
			</div>
		</div>
		
		<div class="columns has-text-centered is-vcentered">
			<!-- Troisième columns (NOS OBJECTIFS) -->
			<div 
				class="column" 
				v-if="article['68']" 
			>
				<h2 class="title is-size-6" v-html="article['68'].title.rendered"/>
				<div v-html="article['68'].content.rendered"/>
			</div>
		</div>				
		
		
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */
	export default {	
		name: 'HistoryView',
		components: { 
			
		},
	
		computed: {},
	
		data(){
			return {
				article: {
					// Paramètre pour API
					60: undefined, //Images, LE NOM DU CLUB
					57: undefined, //LE NOM DU CLUB
					64: undefined, //LA CRÉATION À MONTREUIL
					66: undefined, //ROSNY, TERRE PROMISE 
					68: undefined, //NOS OBJECTIFS	
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
			//Récupérer le contenu stocker dans les posts numéro 68,66,64,60,57 de l'api de wordpress 
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/68`, 68)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/66`, 66)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/64`, 64)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/60`, 60)
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/57`, 57)
		
		},
		
	}
</script>

<style scoped></style>
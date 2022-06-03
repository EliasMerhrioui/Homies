<template>
	<div 
		class="news-view-component"
	>
		<!-- 
		Catégories :
		-1 : MATCH SENIOR
		-11 : Information
		-8 : ENTRAINEMENT
		- 
		-->
		<div
				v-if="article['1']"
			>
				<div class="title" v-html="article['1'].title.rendered"/>
				<div class="contentHowToCome" v-html="article['1'].content.rendered"/>
			</div>



		<div
			v-if="article['1']"
		>
			<div class="title" v-html="article['1'].title.rendered"/>
			<div class="contentHowToCome" v-html="article['1'].content.rendered"/>
		</div>
		
			
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */
	
	export default {
		name: 'NewsView',
		components: {},
		computed: {},
	
		data(){
			return {
				article: { // Paramètre pour lien de l'API
					149: undefined,
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
			//Récupérer le contenu stocker dans les posts numéro 149 de l'api de wordpress 
			this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/?categories_exclude=3`, 149)
		},
	}
</script>

<style scoped></style>
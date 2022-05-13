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
				<!-- LE NOM DU CLUB -->
				<h2 class="title is-size-6" v-html="article['66'].title.rendered"/>
				<div v-html="article['66'].content.rendered"/>
			</div>
		</div>
		
		<div class="columns has-text-centered is-vcentered">
			<!-- Troisième columns (OBJECTIFS) -->
			
			<div 
				class="column" 
				v-if="article['68']" 
			>
				<!-- LE NOM DU CLUB -->
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
			// [VUE] Component name
			name: 'HistoryView',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: { 
					
				},
			//

			/*
				[VUE] Computed => https://vuejs.org/guide/essentials/computed.html
				Used to define simple in-template expression, 
				the expression below bind values from Store getters
			*/
				computed: {},
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data(){
					return {
						article: {
							60: undefined, //Images, LE NOM DU CLUB
							57: undefined, //LE NOM DU CLUB
							64: undefined, //LA CRÉATION À MONTREUIL
							66: undefined, //ROSNY, TERRE PROMISE 
							68: undefined, //NOS OBJECTIFS
							
							
							
							
						}
					}
				},
			
                methods: {
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
			
				mounted: function(){
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/68`, 68)
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/66`, 66)
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/64`, 64)
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/60`, 60)
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/57`, 57)
				
				},
			//
		}
	//
</script>

<style scoped>
</style>
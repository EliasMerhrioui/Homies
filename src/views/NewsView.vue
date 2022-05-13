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
		
			
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */
	
		export default {
			// [VUE] Component name
			name: 'NewsView',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: {  },
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
							1: undefined,
							
						}	
					}
				},
			//

			/*
				[VUE] Methods => https://bit.ly/3GdqmXg
				Used to add methods in Vue.js component
			*/
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
            //

			/*
				[VUE] Hooks => https://vuejs.org/api/options-lifecycle.html
				Called after the instance has finished processing all state-related options.
			*/
				created: function(){},
			//

			/*
				[VUE] Hooks => https://vuejs.org/api/options-lifecycle.html
				Called after the component has been mounted.
			*/
				mounted: function(){
					this.fetchMethod(`homies.v-info.info/wp-json/wp/v2/posts/?categories_exclude=3`, 1)
				},
			//
		}
	
</script>

<style scoped>
</style>
<template>
	<div 
		class="news-view-component"
	>
		<div class="content">
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
		</div>
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */
	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
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
						pagesContent: undefined,
						pagesTitle: undefined,
					}
				},
			//

			/*
				[VUE] Methods => https://bit.ly/3GdqmXg
				Used to add methods in Vue.js component
			*/
                methods: {},
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
					fetch( `homies.v-info.info/wp-json/wp/v2/posts/32`, {
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
					})
					.catch( apiError => {
						console.log('apiError', apiError)
					});
				},
			//
		}
	
</script>

<style scoped>
</style>
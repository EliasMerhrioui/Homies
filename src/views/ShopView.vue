<template>
	<div 
		class="shop-view-component"
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

	
    	import ImageBase from '../components/base/ImageBase.vue';
		import FormBase from "../components/base/FormBase.vue";
	
		export default {
			
			name: 'ShopView',

			
				components: {  },
			
				computed: {},
			
				data(){
					return {
						pagesTitle: undefined,
						pagesContent: undefined,
					}
				},
			
                methods: {},
            
				created: function(){},
				
			mounted: function(){
				fetch( `http://homies.local/wp-json/wp/v2/pages/973`, {
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
		}
</script>

<style scoped>
</style>
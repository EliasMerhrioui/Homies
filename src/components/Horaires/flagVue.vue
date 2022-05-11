<template>
	<div 
		class="image-base-component"
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

        <flagVue/>
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */
		
        
        export default {
			
			name: 'flagVue',

				components: {},
		
				computed: {},
	
				data(){
					return {
                        pagesContent: undefined,
						pagesTitle: undefined,
                    }
				},
			
                methods: {},
         
				created: function(){},
	
				mounted: function(){
                    // fetch( `https://homies.v-info.info/wp-json/wp/v2/posts/38`, {
                    // method: 'GET'
					// })
					// .then( apiResponse => {
					// 	if( apiResponse.ok ){ return apiResponse.json() }
					// 	else{ throw apiResponse } 
					// })
					// .then( jsonResponse => {
					// 	console.log(jsonResponse)
					// 	this.pagesContent = jsonResponse.content.rendered
					// 	this.pagesTitle = jsonResponse.title.rendered
					// 	})
					// .catch( apiError => {
					// 	console.log('apiError', apiError)
					// });
                },
		}

</script>

<style scoped>
</style>
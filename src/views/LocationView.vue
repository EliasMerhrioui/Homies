<template>
	<div 
		class="location-view-component"
	>
		<div
			class="column is-one-third" 
			v-if="article['16']"
		>
			<div class="text-align-center" v-html="article['16'].title.rendered"/>
			<div v-html="article['16'].content.rendered"/>
		</div>
		<div class="columns has-text-centered">
			<div 
				class="column is-one-third" 
				v-if="article['50']" 
			>
				<div class="box">
					<h2 class="title is-size-6" v-html="article['50'].title.rendered"/>
					<div v-html="article['50'].content.rendered"/>
				</div>
			</div>	
			<div 
				class="column is-one-third" 
				v-if="article['48']" 
			>
				<div class="box">
					<h2 v-html="article['48'].title.rendered"/>
					<div v-html="article['48'].content.rendered"/>
				</div>
			</div>	
			<div 
				class="column is-one-third" 
				v-if="article['46']" 
			>
				<div class="box">
					<h2 v-html="article['46'].title.rendered"/>
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
						article: {
							50: undefined,
							48: undefined,
							46: undefined,
							16: undefined,
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
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/50`, 50)
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/48`, 48)
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/46`, 46)
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/pages/16`, 16)
				},
			
		}
</script>

<style scoped>
</style>
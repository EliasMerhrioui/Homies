<template>
	<div 
		class="schedule-view-component"
	>
		<div class="columns has-text-centered">
			<div 
				class="column is-one-third" 
				v-if="article['38']" 
			>
				<div class="box">
					<h2 class="title is-size-6" v-html="article['38'].title.rendered"/>
					<div v-html="article['38'].content.rendered"/>
				</div>
			</div>	
			<div 
				class="column is-one-third" 
				v-if="article['35']" 
			>
				<div class="box">
					<h2 v-html="article['35'].title.rendered"/>
					<div v-html="article['35'].content.rendered"/>
				</div>
			</div>	
			<div 
				class="column is-one-third" 
				v-if="article['32']" 
			>
				<div class="box">
					<h2 v-html="article['32'].title.rendered"/>
					<div v-html="article['32'].content.rendered"/>
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
			// [VUE] Component name
			name: 'ScheduleView',

		
				computed: {},
			
				data(){
					return {
						article: {
							38: undefined,
							35: undefined,
							32: undefined,
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
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/38`, 38)
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/32`, 32)
					this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/35`, 35)
				},
			//
		}
	//
</script>

<style scoped>
</style>
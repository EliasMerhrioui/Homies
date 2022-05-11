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
		<!-- <flag-vue/>
		<senior-vue/> -->
	</div>
</template>

<script>
// import SeniorVue from '@/components/Horaires/seniorVue.vue';
// import FlagVue from '../components/Horaires/flagVue.vue';
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */

	
	/* 
		[VUE] Main imports
		Define main imports to create the application
	*/
 

	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'ScheduleView',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				// components: {FlagVue, SeniorVue },
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
					//  fetch(`https://homies.v-info.info/wp-json/wp/v2/posts`, {
                    //  method: 'GET'
					//  })
					//  .then( apiResponse => {
					//  	if( apiResponse.ok ){ return apiResponse.json() }
					//  	else{ throw apiResponse } 
					//  })
					//  .then( jsonResponse => {
					//  	console.log(jsonResponse)
		
					//  		this.pagesContent = jsonResponse.content.rendered
					//  		this.pagesTitle = jsonResponse.title.rendered
				
						
					//  	})
					//  .catch( apiError => {
					//  	console.log('apiError', apiError)
					//  });
					
					
				},
			//
		}
	//
</script>

<style scoped>
</style>
<template>
	<div 
		class="teams-view-component"
	>
		<div class="content">
			<!-- Première columns (SENIOR) -->
			<div class="columns has-text-centered is-vcentered">
				<!-- team senior image -->
				<div class="column is-half">
					<div
						v-if="article['162']"
					>
						<div v-html="article['162'].content.rendered"/>
					</div>
				</div>
				<!-- team senior -->
				<div class="column is-half">
					<div
						v-if="article['156']"
					>
						<div v-html="article['156'].title.rendered"/>
						<div v-html="article['156'].content.rendered"/>
						
						<div class="columns is-mobile">
							<div class="column is-half">
								<div v-html="article['172'].content.rendered"/>
							</div>
							<div class="column is-half">
								<div v-html="article['176'].content.rendered"/>
							</div>
						</div>
						
					
					
					</div>
				</div>
			</div>

			<!-- Deuxième columns (JUNIOR & CADET ) -->
			<div class="columns has-text-centered is-vcentered">
				<!-- team junior & cadet -->
				<div class="column is-half">
					<div
						v-if="article['158']"
					>
						<div v-html="article['158'].title.rendered"/>
						<div v-html="article['158'].content.rendered"/>

						<div class="columns is-mobile">
							<div class="column is-half">
								<div v-html="article['172'].content.rendered"/>
							</div>
							<div class="column is-half">
								<div v-html="article['174'].content.rendered"/>
							</div>
						</div>
					</div>
				</div>
				<!-- team junior & cadet image -->
				<div class="column is-half">
					<div
						v-if="article['166']"
					>
						<div v-html="article['166'].content.rendered"/>
					</div>
				</div>
			</div>
			
			<!-- Troisième columns (FLAG) -->
			<div class="columns has-text-centered is-vcentered">
				<!-- team flag cadet -->
				<div class="column is-half">
					<div
						v-if="article['160']"
					>
						<div v-html="article['160'].title.rendered"/>
						<div v-html="article['160'].content.rendered"/>

						<div class="columns is-mobile">
							<div class="column is-half">
								<div v-html="article['172'].content.rendered"/>
							</div>
							<div class="column is-half">
								<div v-html="article['178'].content.rendered"/>
							</div>
						</div>
					</div>
				</div>
				<!-- team flag image -->
				<div class="column is-half">
					<div
						v-if="article['168']"
					>
						<div v-html="article['168'].content.rendered"/>
					</div>
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
			name: 'TeamsView',

			components: {
			
			},

			computed: {},
			
			data(){
				return {
					article: {
						168: undefined, // team flag image
						166: undefined, // team junior/cadet image
						162: undefined, // team senior image
						160: undefined, // FLAG MIXTE
						158: undefined, // JUNIOR & CADET
						156: undefined, // SENIOR
						172: undefined, // NOUS REJOINDRE
						174: undefined, // CALENDRIER JEUNE
						178: undefined, // CALENDRIER FLAG
						176: undefined, // CALENDRIER SENIOR
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
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/168`, 168)
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/166`, 166)
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/162`, 162)
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/160`, 160)
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/158`, 158)
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/156`, 156)
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/172`, 172)
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/174`, 174)
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/176`, 176)
				this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/178`, 178)
			},
		}
</script>

<style scoped>
</style>





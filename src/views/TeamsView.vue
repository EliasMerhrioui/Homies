<template>
	<div 
		class="teams-view-component"
	>
		<div 
			v-if="isLoaded"
			class="content"
		>
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
								<div 
									v-if="article['172']"
									v-html="article['172'].content.rendered"
								/>
							</div>
							<div class="column is-half">
								<div 
									v-if="article['176']"
									v-html="article['176'].content.rendered"
								/>
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
								<div 
									v-if="article['172']"
									v-html="article['172'].content.rendered"
								/>
							</div>
							<div class="column is-half">
								<div 
									v-if="article['174']"
									v-html="article['174'].content.rendered"
								/>
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
								<div 
									v-if="article['172']"
									v-html="article['172'].content.rendered"
								/>
							</div>
							<div class="column is-half">
								<div 
									v-if="article['178']"
									v-html="article['178'].content.rendered"
								/>
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
		components: {},
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
					176: undefined, // CALENDRIER SENIOR*
				},
				
				isLoaded: false
			}
		},
		
		methods: {
			fetchMethods:function(path, id){
				return new Promise((resolve, reject) => {
					fetch("https://homies.v-info.info/wp-json/wp/v2/"+path+"/"+id, {
					method: 'GET'
					})
					.then( apiResponse => {
						if( apiResponse.ok ){ return apiResponse.json() }
						else{ throw apiResponse } 
					})
					.then( jsonResponse => {
						return resolve(jsonResponse)
					})
					.catch( apiError => {
						return reject(apiError)
					});
				});
			},
		},
		
		created: function(){


		},
		
		mounted: async function(){
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/168`, 168)
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/166`, 166)
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/162`, 162)
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/160`, 160)
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/158`, 158)
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/156`, 156)
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/172`, 172)
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/174`, 174)
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/176`, 176)
			// this.fetchMethod(`https://homies.v-info.info/wp-json/wp/v2/posts/178`, 178)
			
			this.article[168] = await this.fetchMethods(`posts`, 168);
			this.article[166] = await this.fetchMethods(`posts`, 166);
			this.article[162] = await this.fetchMethods(`posts`, 162);
			this.article[160] = await this.fetchMethods(`posts`, 160);
			this.article[158] = await this.fetchMethods(`posts`, 158);
			this.article[156] = await this.fetchMethods(`posts`, 156);
			this.article[172] = await this.fetchMethods(`posts`, 172);
			this.article[174] = await this.fetchMethods(`posts`, 174);
			this.article[176] = await this.fetchMethods(`posts`, 176);
			this.article[178] = await this.fetchMethods(`posts`, 178);
			this.isLoaded = true;
			
			
			console.log(this.article)
			
		
		},
	}
</script>

<style scoped></style>





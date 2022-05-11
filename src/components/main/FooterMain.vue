<template>
	
	<footer class="footer">
		<div>
			
		</div>
	</footer>	
		
		
		
		
		
</template>

<script>
	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'FooterMain',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: {},
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
						cmpUserinfo: this.$store.getters.userinfos,
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
				created: function(){
					// Subscribe to state mutation
					this.$store.subscribe( (mutation) => {
						if( mutation.type === 'USERINFOS' ){
							if( this.$store.getters.userinfos !== null ){
								this.cmpUserinfo = this.$store.getters.userinfos
							}
							else{
								this.cmpUserinfo = undefined
							}
						}
					})
				},
			//
		}
	//
</script>

<style scoped>
</style>
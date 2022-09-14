<template>
	<header 
		class="header-main-component"
	>

	<!-- Navigation gérer par bulma -->
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a role="button" class="navbar-burger" :class ="{ 'is-active' : isActive }" aria-label="menu" aria-expanded="false" data-target="navbarHomies" @click ="isActive = !isActive">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		
		<div id="navbarHomies" class="navbar-menu" :class=" {'is-active': isActive}">
		<div class="navbar-start">
			<div class="navbar-item has-dropdown is-hoverable">
				<router-link to="/" class="navbar-link">LES HOMIES</router-link>
				
			<div class="navbar-dropdown">
				<router-link to="/history" class="navbar-item">NOTRE HISTOIRE</router-link>
				<router-link to="/schedule" class="navbar-item">LES HORAIRES</router-link>
				<router-link to="/how-to-come" class="navbar-item">COMMENT VENIR ?</router-link>
			</div>
			</div>
			
			<router-link to="/news" class="navbar-item">ACTUS</router-link>

			<div class="navbar-item has-dropdown is-hoverable">
				<router-link to="/teams" class="navbar-link">TEAMS</router-link>
			
			<div class="navbar-dropdown">
				<!-- <router-link to="/teams/senior" class="navbar-item">SENIOR</router-link>
				<router-link to="/teams/junior" class="navbar-item">JUNIOR</router-link>
				<router-link to="/teams/flag-mixte" class="navbar-item">FLAG MIXTE</router-link>  -->
			</div>
			</div>
			
			<router-link to="/" class="navbar-item"><img src="@/assets/logo-homies.png" alt=""></router-link>
			
			<div class="navbar-end">
				<router-link to="/how-to-sign" class="navbar-item">DOSSIER D'INSCRIPTION</router-link>
				<router-link to="/shop" class="navbar-item">BOUTIQUE</router-link>
				<router-link to="/contact-us" class="navbar-item">CONTACT</router-link>
			</div>
		</div>
	</div>
	</nav>

	</header>
</template>

<script>
	
	
	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'HeaderMain',

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
						isActive: this.$store.getters.themeclass
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
		}
</script>

<style scoped>
</style>
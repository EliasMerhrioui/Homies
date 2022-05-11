<template>
	<div 
		class="teams-view-component"
	>
		<div class="content">
			<!-- TITRE : "NOS TEAMS" -->
			<h2 class="title">NOS TEAMS</h2>
			
			<!-- SENIOR -->
			<div class="columns is-vcentered">
				<div class="column">
					<img src="@/assets/history1.png" alt="">
				</div>
				
				<div class="column">
					<h3 class="columns is-centered">SENIOR</h3>
					<p>L’équipe sénior évolue dans le championnat régional Île-de-France, finaliste malheureux en 2018, l’équipe a soif de victoire.
						Construit autour d’un coaching staff de qualité le groupe sénior est doté d’un fort potentiel.
						L’objectif est très simple, décrocher le titre régionale et accéder à la Division 3 du championnat de France.
					</p>
					<div class="columns is-centered">
						<div class="column"><button>NOUS REJOINDRE</button></div>
						<div class="column"><button>CALENDRIER SENIOR</button></div>
					</div>
				</div>
			
			</div>

			<!-- JUNIOR & CADET -->
			<div class="columns is-vcentered">
				
				<!-- CONTENU -->
				<div class="column">
					<h3 class="">JUNIOR & CADET</h3>
					
					<h2>DE 2003 À 2005 POUR LES JUNIORS (U19).</h2>
					<p>La section junior des Homies est destinée aux jeunes de 17 à 19 ans (nés après 2002).
						Avec possibilité de surclassement pour les 2006.
						Elle est encadrée par des coachs diplômés qui vous feront découvrir ce sport de contact, de stratégie et de précision au sein du championnat régional à 9 qui permet d’acquérir de l’expérience, même pour les néophytes.
					</p>

					<h2>DE 2006 À 2007 POUR LES CADETS (U16).</h2>
					<p>La section cadet des Homies est destinée aux jeunes de 14 à 16 ans.
						Avec possibilité de surclassement pour les 2008.
						Elle permet une première approche de notre sport en mettant l’emphase sur le développement de la technique, la rigueur et la persévérance. Ce qui leur permettra de s’illustrer lors des différents plateaux.
					</p>
					<div class="columns">
						<div class="column"><button>NOUS REJOINDRE</button></div>
						<div class="column"><button>CALENDRIER JEUNE</button></div>
					</div>	
				</div>

				<!-- IMAGE -->
				<div class="column">
					<img src="@/assets/history1.png" alt="">
				</div>
			</div>

			<!-- FLAG MIXTE -->
			<div class="columns">
				<!-- IMAGE -->
				<div class="column">
					<img src="@/assets/history1.png" alt="">
				</div>
				<div class="column">
					<h3 class="columns is-centered">FLAG MIXTE</h3>
					
					<h2>LE FLAG FOOTBALL UN SPORT MIXTE (+16 ANS).</h2>
					<p>Le flag est une forme du football américain. C’est un sport d’opposition sans contact. Les placages sont remplacés par l’arrachage d’un flag (drapeau en anglais) accroché à la ceinture des joueurs. Accessible à tous (homme, femme, enfant), sa facilité d’apprentissage, sa convivialité et sa mixité sont les points forts de ce sport. Le tout accompagné par de la stratégie, du dynamisme et du spectaculaire !
					
					Le FLAG accueil les personnes nées en 2005 et avant, Il est possible de faire un sur-classement pour les 2006.
					</p>

					<h2>LES PRINCIPES DE BASE</h2>
					<ul>
						<li>• Les principes sont les mêmes qu’au football américain : c’est un jeu de gagne terrain qui se joue à 5 contre 5.</li>
						<li>• Chaque équipe comprend une escouade d’attaque (5 joueurs) et une escouade de défense (5 joueurs).</li>
						<li>• L’escouade d’attaque doit progresser à l’aide de passe vers l’avant et de course en direction de la zone-d’en-but adverse pour y pénétrer et marquer un essai (ou touchdown).</li>
						<li>• L’escouade de défense doit empêcher la progression en déflagant le porteur de balle ou en interceptant la balle.</li>
					</ul>
					
					<div class="columns">
						<div class="column"><button>NOUS REJOINDRE</button></div>
						<div class="column"><button>CALENDRIER FLAG</button></div>
					</div>
				</div>
				<hr class="navbar-divider">
				<div class="columns is-centered"><button>N’HÉSITEZ PAS À NOUS CONTACTER POUR TOUTES INFORMATIONS COMPLÉMENTAIRES</button></div>
			</div>
		</div>
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */

	/* 
		[VUE] Main imports
		Define main imports to create the application
	*/
    	
	//

	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'TeamsView',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: {

				 },
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
					return {}
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
				mounted: function(){},
			//
		}
	//
</script>

<style scoped>
</style>
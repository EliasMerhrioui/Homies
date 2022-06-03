/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

export default{
    /* 
        Définir les états privés des magasins
    */
        state: {
            userinfos: JSON.parse(window.localStorage.getItem('userinfos')) || null,
        },
    //

    /* 
        Définir des méthodes pour exporter la valeur de l’état
    */
        getters: {
            userinfos: (state) => state.userinfos
        },
    //

    /* 
        Définir les setters pour mettre à jour la valeur d’état
    */
        mutations: {
            userinfos( state, payload ){ state.userinfos = payload.data }
        },
    //

    /* 
        Définir les répartiteurs pour appeler les mutations d’état
    */
        actions: {
            setUiSate( { dispatch, commit, state }, data ){
                commit( data.mutation, { data: data.value } )
            }
        }
}
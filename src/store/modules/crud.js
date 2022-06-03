/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

export default{
    /* 
        Définir les états privés des magasins
    */
        state: {
            fetchresponse: undefined,
        },
    //

    /* 
        Définir des méthodes pour exporter la valeur de l’état
    */
        getters: {
            fetchresponse: (state) => state.fetchresponse,
        },
    //

    /* 
        Définir les setters pour mettre à jour la valeur d’état
    */
        mutations: {
            fetchresponse( state, payload ){ state.fetchresponse = payload.data },
        },
    /* 
        [STORE] Actions => https://bit.ly/3ua8avj
        Définir les répartiteurs pour appeler les mutations d’état
    */
        actions: {
            getOperator( { dispatch, commit, state }, id ){
                fetch( `http://homies-football.com/wp-json/wp/v2/${id}`, {
                    method: 'GET'
                })
                .then( apiResponse => {
                    if( apiResponse.ok ){ return apiResponse.json() }
                    else{ throw apiResponse } 
                })
                .then( jsonResponse => {
                    console.log(jsonResponse)
                    // Mettre à jour l'état de 'fetchresponse' 
                    commit( 'fetchresponse', { data: {
                        ok: true,
                        from: 'getOperator',
                        data: jsonResponse
                    }})
                    
                })
                .catch( apiError => {
                    console.log('apiError', apiError)
                });
            }
        }
}
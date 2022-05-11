/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

export default{
    /* 
        [STORE] State => https://bit.ly/3ua8avj
        Define store private states
    */
        state: {
            fetchresponse: undefined,
        },
    //

    /* 
        [STORE] Getters => https://bit.ly/3ua8avj
        Define methods to export state value
    */
        getters: {
            fetchresponse: (state) => state.fetchresponse,
        },
    //

    /* 
        [STORE] Muttation => https://bit.ly/3ua8avj
        Define setters to update state value
    */
        mutations: {
            fetchresponse( state, payload ){ state.fetchresponse = payload.data },
        },
    //

    /* 
        [STORE] Actions => https://bit.ly/3ua8avj
        Define dispatchers to call state mutations
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
                    // Update 'fetchresponse' state
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
    //
}
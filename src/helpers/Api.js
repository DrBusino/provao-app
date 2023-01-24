const DisneyContext = {
  DisneyEndpoint: () =>Api.baseUrl,
  DisneyLista : () => `${DisneyContext.DisneyEndpoint()}/characters`
};



export const Api = {
    baseUrl : 'https://api.disneyapi.dev',
    ...DisneyContext
}



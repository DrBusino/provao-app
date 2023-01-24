import { Api } from "../helpers/Api";


const parseResponse = (response) => response.json();



export const DisneyService = {
  getLista: () =>
    fetch(Api.DisneyLista(), { method: "GET" }).then(parseResponse),
};
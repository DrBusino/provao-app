import { DisneyService } from "../services/DisneyService";


 
export const charList = [

];


const getLista = async () => {
  const response = await DisneyService.getLista();
  charList.push(response)
};

getLista()


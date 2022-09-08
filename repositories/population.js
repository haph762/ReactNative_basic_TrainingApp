import axios from 'axios';

//https://datausa.io/api/data?drilldowns=Nation&measures=Population
const SERVER_NAME = `datausa.io`;
async function getPopulation({drilldowns, measures}) {
  const urlGetPopulation = `https://${SERVER_NAME}/api/data?drilldowns=${drilldowns}&measures=${measures}`;
  try {
    let results = [];
    let responData = await axios.get(urlGetPopulation);

    responData.data.data.forEach(item => {
      let myObj = {};
      myObj.nationId = item['ID Nation'];
      myObj.nationName = item['Nation'];
      myObj.year = item['Year'];
      myObj.population = item['Population'];
      results.push(myObj);
    });
    return results.slice(0, 4);
  } catch (error) {
    throw error;
  }
}
export default {
  getPopulation,
};

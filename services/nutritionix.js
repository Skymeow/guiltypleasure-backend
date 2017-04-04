const fetch = require('node-fetch');
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

let FoodService = {};


FoodService.getFoodinfoByName = (name) => {
  // console.log('***&*&*&*name: ', name)
  return fetch(` https://trackapi.nutritionix.com/v2/search/instant?query=${name}`, {
    method: 'get',
    headers: {
      'x-app-id': `${APP_ID}`,
      'x-app-key': `${APP_KEY}`
    }

  })

}

FoodService.getCaloriesByexercise = (yoga_min,ran_miles,ran_hours,walk_miles,walk_hours,spin_min,gender,weight_kg,height_cm,age) => {
 return fetch('https://trackapi.nutritionix.com/v2/natural/exercise', {
    method: 'post',
    headers: {
      'Content-Type': "application/json",
      'x-app-id': `${APP_ID}`,
      'x-app-key': `${APP_KEY}`
    },
    body: JSON.stringify({
      query: `did  ${yoga_min} min yoga and ran ${ran_miles} miles in ${ran_hours} hours and walked ${walk_miles} miles in ${walk_hours} hours and ${spin_min} min spinning`,
      gender: `${gender}`,
      weight_kg: parseInt(`${weight_kg}`),
      height_cm: parseInt(`${height_cm}`),
      age: parseInt(`${age}`)
    })
  })
};
// query: `ran ${ran_miles} miles in ${ran_hours} hour`
module.exports = FoodService;


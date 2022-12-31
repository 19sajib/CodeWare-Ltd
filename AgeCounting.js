// 1. Age counting
// Stack :  javascript

// GET request to find those keys as array where age's value is equal to 30 from the API below
// https://coderbyte.com/api/challenges/json/age-counting


function result(data) {
  var keyModel = data.data.split(',')
  return keyModel.map((x,i)=>{if(x.trim()=='age=30'){return [i-1];}})
                 .filter(x=>x!=undefined)
                 .map(x=>{return keyModel[x].split('=')[1]})
}
fetch('https://coderbyte.com/api/challenges/json/age-counting')
  .then((response) => response.json())
  .then((data) => {
    var keyArray = result(data)
    console.log(keyArray)
});
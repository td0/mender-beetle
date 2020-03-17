// JSON source: https://pokeapi.co/api/v2/pokemon
module.exports = obj => {
  let resultObj = obj.results.map(el => {
    el = {[el.name]: el.url}
    return el
  })
  return resultObj
}
module.exports = obj => {
  let resultObj = {}
  obj.master.forEach(el => {
    const id = el.fieldId
    if (!Array.isArray(resultObj[id])) resultObj[id] = []
    delete el.fieldId
    resultObj[id].push(el)
  })
  return resultObj
}
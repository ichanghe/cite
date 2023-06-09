async function readBody(stream){
  return new Promise((resolve,reject)=>{
    let res = ''
    stream.on('data',data=>{
      res+=data
    })
    stream.on('end',data=>{
      resolve(res)
    })
  })
}
exports.readBody = readBody;
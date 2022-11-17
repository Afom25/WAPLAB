const fullname = 'Hidri Abraham'

const obj = { pet: 'Theo'}

function getData(){
    return { fullname, pet:obj.pet}
}


// module.exports ={getData}

exports.getData =getData

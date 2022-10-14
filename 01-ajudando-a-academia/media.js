function media(...nums){
    let total = nums.reduce((acc, cur) => acc + cur)
    return total / nums.length
}

module.exports = media
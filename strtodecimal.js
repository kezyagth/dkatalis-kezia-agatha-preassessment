var convertToDecimal = function convertToDecimal(arg) {
	var result = []
	 arg.forEach((input)=>{
    result.push(parseFloat(input)/100)
  })
	return result
}
console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]))
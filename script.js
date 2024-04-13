/* -------------------------------------------------------------------- */

const rangeValuePrice = document.querySelector("#rangeValuePrice")
const rangeValuePriceText = document.querySelector("#rangeValuePriceText")
const valueH2Price = document.querySelector("#valueH2Price")
const initialValue = 30000

rangeValuePrice.oninput = function(){
    const value = initialValue + (this.value - 1) * 30000
    valueH2Price.textContent = "$" + value.toLocaleString()
    rangeValuePriceText.textContent = this.value
}

const rangeValueProspects = document.querySelector("#rangeValueProspects")
const rangeValueProspectsText = document.querySelector("#rangeValueProspText")
const valueH2Prosps = document.querySelector("#valueH2Prospects")
const initialValueProsp = 1

rangeValueProspects.oninput = function() {
    const value = initialValueProsp + (this.value - 1) * 1
    valueH2Prosps.textContent = value.toLocaleString()
    rangeValueProspectsText.textContent = this.value
}

const rangeValueCloseRation = document.querySelector("#rangeValueCloseRation")
const rangeValueCloseRationText = document.querySelector("#rangeValueCloseRationText")
const valueH2CloseRatio = document.querySelector("#valueH2CloseRatio")
const initialValueCloseRatio = 10

rangeValueCloseRation.oninput = function() {
    const value = initialValueCloseRatio + (this.value - 1) * 2
    valueH2CloseRatio.textContent = value + "%"
    rangeValueCloseRationText.textContent = this.value
}
import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList'
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets'
export default class CurrencyConverterApp extends LightningElement {
  currencyImage = currencyConverterAssets +'/currencyConverterAssets/currency.svg'
  countryList = countryCodeList
  countryFrom = "USD"
  countryTo = "PHP"
  amount =''
  result
  error 
  handleChange(event){
    const {name, value} = event.target
    console.log("name", name)
    console.log("value", value)
    this[name] = value
    this.result=''
    this.error =''
  }
  submitHandler(event){
    event.preventDefault()
    this.convert()
  }
  
  // This was the old code with the expired API that doesn't work anymore
  /*async convert(){
    const API_URL = `https://api.exchangerate.host/convert?from=${this.countryFrom}&to=${this.countryTo}`
    try{
      const data = await fetch(API_URL)
      const jsonData = await data.json()
      this.result = (Number(this.amount) * jsonData.result).toFixed(2)
      console.log(this.result)
    } catch(error){
      console.log(error)
      this.error="An error occurred. Please try again..."
    }
  }*/

  async convert(){
    // const API_URL = `https://api.exchangerate.host/convert?access_key=${AUTH_KEY}&from=${this.countryFrom}&to=${this.countryTo}`
    const API_KEY = '2903e01d3e832b9895b61783'
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`
    try{
      const data = await fetch(API_URL)
      const jsonData = await data.json()
      debugger;
      // this.result = (Number(this.amount) * jsonData.result).toFixed(2)
      this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2)
      console.log(this.result)
    } catch(error){
      console.log(error)
      this.error="An error occurred. Please try again..."
    }
}
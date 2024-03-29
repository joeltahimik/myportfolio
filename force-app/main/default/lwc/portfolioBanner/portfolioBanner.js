import { LightningElement, wire, api } from 'lwc';
import PortAssets from '@salesforce/resourceUrl/PortAssets'
import {getRecord, getFieldValue} from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'


export default class PortfolioBanner extends LightningElement {
    @api recordId //= 'a015g00000nfoqYAAQ'
    @api linkedinUrl //= 'https://www.linkedin.com/in/nikhilkarkra'
    @api twitterUrl //= 'https://twitter.com/karkra_nikhil'
    @api githubUrl //= 'https://github.com/karkranikhil'
    @api youtubeUrl //= 'https://youtube.com/salesforcetroop'
    @api trailheadUrl //= 'https://trailblazer.me/id/bkarkra'
    @api blogUrl //= 'https://www.salesforcetroop.com/'


    userPic = `${PortAssets}/PortAssets/userPic.jpg`
    linkedin = `${PortAssets}/PortAssets/Social/linkedin.svg`
    youtube = `${PortAssets}/PortAssets/Social/youtube.svg`
    github = `${PortAssets}/PortAssets/Social/github.svg`
    twitter = `${PortAssets}/PortAssets/Social/twitter.svg`
    trailhead = `${PortAssets}/PortAssets/Social/trailhead1.svg`
    blog = `${PortAssets}/PortAssets/Social/blogger.svg`

    
    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME,COMPANY_LOCATION,COMPANY_NAME,DESIGNATION]})
    portfolioData
    // portfolioHandler({data, error}){
    //     if(data){
    //         console.log("record Data", JSON.stringify(data))
    //     }
    //     if(error){
    //         console.error("error", error)
    //     }
    // }

    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION)
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    }
    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }

}
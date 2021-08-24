import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Phone from '@salesforce/schema/Lead.Phone';
import Industry from '@salesforce/schema/Lead.Industry';
import Email from '@salesforce/schema/Lead.Email';
import object_ApiName from '@salesforce/schema/Lead';

export default class FirstLWC extends LightningElement {
    @api recordId;
    objectApiName = object_ApiName;
     // Expose a field to make it available in the template
    fields = [Phone, Industry, Email];
    
    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title: "Lead creado wiii",
            message: "Excelentetete",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('recordId: ' + this.recordId);
        const fields = event.detail.fields; //obtengo los campos
        fields.Email = 'xdxd@xd.com';
        this.template.querySelector("lightning-record-form").submit(fields);
    }
}
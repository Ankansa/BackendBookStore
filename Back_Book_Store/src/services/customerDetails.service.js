import Customer_Details from '../models/customer_details.model';

// Add customer details ######################

export const customerDetails= async(body)=>{
    const details= await Customer_Details.create(body);
    if(details){
        console.log(details);
        return details;
    }
}

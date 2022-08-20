import Customer_Details from '../models/customer_details.model';

// Add customer details ######################

export const customerDetails= async(body)=>{
    const details= await Customer_Details.create(body);
        // console.log(details);
        return details;
    
}

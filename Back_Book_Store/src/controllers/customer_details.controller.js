import HttpStatus from 'http-status-codes';
import * as CustomerService from '../services/customerDetails.service'

// Add customer details ######################

export const customerDetails = async (req, res, next) => {
  try {
    req.body.userId = req.body.Email
    const data = await CustomerService.customerDetails(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: "The customer details is added"
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
}
using { customer.db as my } from '../db/model';
service AdminService {

    
entity customer as projection on my.customer;
}
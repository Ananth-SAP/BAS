using { customer.db as my } from '../db/model';



service AdminService {

    
entity customer as projection on my.customer

actions { action submitforApproval() };
}

service workflowservice {
entity customer as projection on my.customer;
entity v1_workflow_instances as projection on my.workflow;


}
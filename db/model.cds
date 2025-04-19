namespace customer.db;

entity customer  {

    key id :String(10);
    name :String(40);
    street:String(40);
    approvalinstance:String(255);

    
}

entity workflow  {

    key id :UUID;
    definitionId :String(500);
    subject:String(500);
    status:String(500);

    
}


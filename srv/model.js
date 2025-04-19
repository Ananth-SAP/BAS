const cds = require('@sap/cds');

class workflowservice extends cds.ApplicationService {
  init() {

    const { customer ,v1_workflow_instances } = this.entities;
    this.on("READ",v1_workflow_instances,async req=>{
        const buildprocesssrv = await cds.connect.to("Workflow");
//        const d = await buildprocesssrv.tx(req).get("/v1/workflow-instances");
const builddata = await buildprocesssrv.get("/v1/workflow-instances");


var result = [];
builddata.forEach(data => {
  result.push({
    id : data.id,
    definitionId :data.definitionId,
    subject:data.subject,
    status:data.status
  })
});
       return result;


      })

          // Add base class's handlers. Handlers registered above go first.
    return super.init()
  }
}

class AdminService extends cds.ApplicationService {
  init() {

    const { customer } = this.entities;
    this.on("submitforApproval",customer,async req=>{
        const buildprocesssrv = await cds.connect.to("Trigger.Process.via.API.Trigger");
        const d = await buildprocesssrv.send("workflow_rest_v1_workflow_instances_post",{
            definitionId:"us10.30dcd714trial.i0010kbworkflowcustomercreatetocap.i0010_customer_create_to_cap",
            context:{ 
                customerNo:"6",
                _name:"Test2",
                street:"Chennai"
              }     
        });
      if("rootInstanceId" in d){
        await UPDATE (customer,req.params[0].customer_id) .with ({approvalinstance:d.rootInstanceId});
      }

      })

          // Add base class's handlers. Handlers registered above go first.
    return super.init()
  }
}


module.exports = { workflowservice ,AdminService}
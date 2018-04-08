public class ApprovalsHelper{
     /**
    ** This method initiates an approval process for the given object
    */
    @future
    public static void approvalInit(String objType, String id, String comment){
        sObject obj;
        Schema.SObjectType targetType = Schema.getGlobalDescribe().get(objType);
        if (targetType == null) {
            // throw an exception
        }else{
            obj = Database.query(getQuery(targetType.newSObject(), null) + ' WHERE Id = \'' + id + '\'');
        }
        Approval.ProcessSubmitRequest req = new Approval.ProcessSubmitRequest();
        req.setComments(comment);
        req.setObjectId(obj.Id);
        Approval.ProcessResult result;
        try{
            // submit the approval request for processing
            result = Approval.process(req);
        }catch(Exception e){
            // display if the reqeust was successful
            System.debug('No approval process has been setup yet.');
        }
    }
    
    public static String getQuery(sObject obj, String mergedFields){
       
        Map<String, Schema.SObjectField> fldObjMap = obj.getSObjectType().getDescribe().fields.getMap();
        //The values from the map of fields
        List<Schema.SObjectField> fldObjMapValues = fldObjMap.values();
        String query = '';
        String restricted = 'BillingLongitude,PersonOtherLongitude,ShippingLongitude,BillingLatitude,PersonOtherLatitude,'+
            'ShippingLatitude,PersonMailingLatitude,PersonMailingLongitude,MailingLatitude,MailingLongitude,OtherLatitude,OtherLongitude,'+
            'LastReferencedDate,';
        //Add field names to string
        for(Schema.SObjectField s : fldObjMapValues){
            String fn = s.getDescribe().getName();
            if(restricted.indexOf(fn) == -1){
                query += fn+',';
            }
        }
        System.debug('======================================= query: ' + query);
        if(mergedFields != null){
            query = 'SELECT ' + query + mergedFields + ' FROM ' + obj.getSObjectType().getDescribe().getName() + ' ';
        }else{
            query = 'SELECT ' + query.substring(0,query.lastIndexOf(',')) + ' FROM ' + obj.getSObjectType().getDescribe().getName() + ' ';
        }
        return query;
    }
}
// 
// Appirio - A Wipro Company
// Name      : InlineFieldController
// Description  : Controller for InlineField component
// Created Date  : Feb 26, 2018
// Created By  : Himshikha Agrawal
// 
global class InlineFieldApexController {
    
    @AuraEnabled
    public static void updateObjectRecord(String recordId, String sObjectName, String fieldAPIName,String fieldValue) {
        try{
            sObject updateRecord = Schema.getGlobalDescribe().get(sObjectName).newSObject() ;
            updateRecord.put('Id', recordId);
            updateRecord.put(fieldAPIName, fieldValue);
            update updateRecord;
        } catch(Exception e){
            throw new AuraHandledException('Darn it! Something went wrong: ' + e.getMessage());
        }
        
    }
}
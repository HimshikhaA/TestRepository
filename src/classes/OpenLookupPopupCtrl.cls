public without sharing class OpenLookupPopupCtrl {

    public List<Sobject> listRecords {get;set;}
    public List<String> listFieldNames {get; set;}
    public String selectedObject;
    public String fieldName;
    public String searchText{get;set;}
    public String fieldSetName;
    public Contact newCon{get;set;}
    public OpenLookupPopupCtrl(){
        newCon = new Contact();
        selectedObject = ApexPages.currentPage().getParameters().get('Object');
        fieldName = ApexPages.currentPage().getParameters().get('fieldName');
        searchText = ApexPages.currentPage().getParameters().get('searchText');
        fieldSetName = ApexPages.currentPage().getParameters().get('fieldSetName');
        
        List<SObject> listRecords = new List<SObject>();
        runSearch();
    }
    
    /********************************************************************************************************************
    * Method to run the search with parameters passed via Page Parameters
    *********************************************************************************************************************/
    public PageReference runSearch() {
        
        String fieldsToFetch = getFieldsForSelectedObject();
        String whereClause = ''; 
        system.debug('fieldsToFetch:::::::::::::'+fieldsToFetch);
        if(fieldsToFetch != null && fieldsToFetch != ''){
            String searchString = 'Select ' + fieldsToFetch + ' From ' + selectedObject;
            if(searchText != '' && searchText != null){
                //whereClause = ' Where ' + fieldName  + ' LIKE \'%' + String.escapeSingleQuotes(searchText)+'%\'';
            }
            system.debug('searchString:::::::::::::'+searchString);
            listRecords = Database.query(searchString +' order by Name  limit 50');
        }
        return null;
    }
    
    /********************************************************************************************************************
    * Method to Get all Fields of the selected object
    *********************************************************************************************************************/
    public String getFieldsForSelectedObject(){    
       listFieldNames = new List<String>(); 
       listFieldNames.add('Name');
       
       
       List<Schema.FieldSetMember> fieldSetMemberList = new List<Schema.FieldSetMember>();
       String fieldsToFetch = '';
       //fieldsToFetch = ' Name ';
       system.debug('selectedObject:::::::::::::'+selectedObject);
       try{
           if(selectedObject != null && selectedObject != ''){             

                Map<String, Schema.SObjectType> GlobalDescribeMap = Schema.getGlobalDescribe(); 
                Schema.SObjectType SObjectTypeObj = GlobalDescribeMap.get(selectedObject);
                Schema.DescribeSObjectResult DescribeSObjectResultObj = SObjectTypeObj.getDescribe();
                
                if(DescribeSObjectResultObj.FieldSets.getMap().ContainsKey(fieldSetName)){
                    Schema.FieldSet fieldSetObj = DescribeSObjectResultObj.FieldSets.getMap().get(fieldSetName);
                    fieldSetMemberList =  fieldSetObj.getFields(); 
                }
                
                for(Schema.FieldSetMember fieldSetMemberObj : fieldSetMemberList)
                {
                    listFieldNames.add(string.ValueOf(fieldSetMemberObj.getFieldPath()));
                }
            }
           
           //Building Query with the fields
            Integer i = 0; 
            Integer len = listFieldNames.size();
            for(String temp:listFieldNames){
                if(i==len-1){
                    fieldsToFetch = fieldsToFetch + temp;
                } else {
                    fieldsToFetch = fieldsToFetch + temp + ',';
                }
                i++;
            }
        }catch(Exception ex){          
            apexPages.addMessage(new ApexPages.message(ApexPages.severity.ERROR,
                                'There is no Field for selected Object!'));
        }           
        return fieldsToFetch;
    }  
}
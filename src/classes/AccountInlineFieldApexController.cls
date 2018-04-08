public class AccountInlineFieldApexController {
    
    public sObject accRecord{get;set;}
    public Boolean isTeamMember{get;set;}
     
    public AccountInlineFieldApexController(ApexPages.StandardController controller) { 
            
        //Getting the record id
        accRecord = (sObject)controller.getRecord();
        
        if(accRecord.Id != null){
            //Getting required account details
            List<Account> accList = [select id, OwnerId, Owner.UserRoleId from account where id =:accRecord.Id];
            if(accList != null && accList.size() > 0){
                Account acc = accList[0];
                isTeamMember = false;
                Id loggegInUser = UserInfo.getUserId();
                //checking if logged in user is account owner
                if(acc.OwnerId == loggegInUser){
                    isTeamMember = true;
                }
                //checking if logged in user is a team member
                else if(!isTeamMember){
                    List<AccountTeamMember> accTeamMembers = [SELECT Id, UserId, AccountId FROM AccountTeamMember WHERE AccountId =: accRecord.Id];
                    for(AccountTeamMember tm : accTeamMembers){
                        if(tm.UserId == loggegInUser){
                            isTeamMember = true;
                            break;
                        }
                    }
                }
            }
        }
    }
}
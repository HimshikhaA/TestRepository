trigger ApprovalInit on Case (after insert) {

    for(Case obj :Trigger.new){
        ApprovalsHelper.approvalInit('ObjectName', obj.Id, 'This record has been submitted for your approval.');
    }

}
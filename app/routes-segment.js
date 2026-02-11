

// D2 case2 routes




router.get('/app-approve2C2', function (req, res) { 
    switch (req.session.data.decision1C2) {
    case 'Approve':
        req.session.data.caseApprovedC2 = 'yes';
        req.session.data.agreementStageC2 = 'yes';
       req.session.data.filteredReviewNoteC2 = stripEmptyAndNulls(req.session.data.reviewNoteC2); 
    return res.redirect('/tasklistStage2C2');    
    case 'Reject':
        req.session.data.caseStageC2 = 'reject'; 
        req.session.data.caseStatusC2 = 'Rejected';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--red'; 
         break;
    case 'Amend':
        req.session.data.caseStageC2 = 'amend'; 
        req.session.data.caseStatusC2 = 'Amending';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--orange';  
        return res.redirect('/FRPS-D2/amend-confirm'); 
    case 'Return':
        req.session.data.caseStageC2 = 'return'; 
        req.session.data.caseStatusC2 = 'Returned to customer';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--orange';  
        return res.redirect('/FRPS-D2/return-confirm');  
    case 'Withdraw':
        req.session.data.caseStageC2 = 'withdraw'; 
        req.session.data.caseStatusC2 = 'Withdrawn';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--orange';    
        break;
    case 'Put on hold':
        req.session.data.caseStageC2 = 'on-hold'; 
        req.session.data.caseStatusC2 = 'On hold';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--yellow';    
        break;
    };
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/resume2C2', function (req, res) {
    req.session.data.caseStageC2 = 'review';
    req.session.data.caseStatusC2 = 'In review';    
    req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--blue'; 
  res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/amendReturn1C2', function (req, res) {
    req.session.data.caseStageC2 = 'review';
    req.session.data.caseStatusC2 = 'In review';    
    req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--blue'; 
  res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/returnConf1C2', function (req, res) {
  if (req.session.data.rConfC2 === 'yes') {
    res.redirect('/FRPS-D2/case2/tasklist-stage');
    }
  else 
    res.redirect('/amendReturn1C2');
});

router.get('/amendConf1C2', function (req, res) {
  if (req.session.data.aConfC2 === 'yes') {
    res.redirect('/FRPS-D2/case2/tasklist-stage');
    }
  else 
    res.redirect('/amendReturn1C2');
});



router.get('/amend1C2', function (req, res) { 
    switch (req.session.data.decisionAmC2) {
    case 'Amendment sent':
        req.session.data.caseStageC2 = 'amendment_sent';   
        req.session.data.caseStatusC2 = 'Amendment sent';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--blue'; 
    break;
    case 'Amendment recinded':
        req.session.data.caseStageC2 = 'review';   
        req.session.data.caseStatusC2 = 'In review';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--blue'; 
    break;
    return res.redirect('/tasklistStage2C2');    
    case 'Reject':
        req.session.data.caseStageC2 = 'reject'; 
        req.session.data.caseStatusC2 = 'Rejected';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--red';  
        break;
    case 'Withdraw':
        req.session.data.caseStageC2 = 'withdraw'; 
        req.session.data.caseStatusC2 = 'Withdrawn';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--orange';    
        break;
    };
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/amend2C2', function (req, res) { 

    req.session.data.caseStageC2 = 'amendment_submitted';   
    req.session.data.caseStatusC2 = 'Case close by amendment';    
    req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--orange'; 
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});


router.get('/aggSent2C2', function (req, res) { 
    switch (req.session.data.decisionAgC2) {
    case 'Agreement sent':
        req.session.data.filteredAggNote = stripEmptyAndNulls(req.session.data.moreDetail2);
    return res.redirect('/tasklistStage2C2');    
    case 'Reject':
        req.session.data.caseStageC2 = 'reject'; 
        req.session.data.caseStatusC2 = 'Rejected';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--red';  
        break;
    case 'Withdraw':
        req.session.data.caseStageC2 = 'withdraw'; 
        req.session.data.caseStatusC2 = 'Withdrawn';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--orange';    
        break;
    };
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});



router.get('/task1T2C2', function (req, res) { 
    req.session.data.detailsCheckedC2 = 'yes';
    req.session.data.noteActionTask1C2 = req.session.data.decisionTask1C2;
    switch (req.session.data.decisionTask1C2) {
    case 'Accepted':
        req.session.data.detailsTagC2 = '';
        req.session.data.detailsStatusC2 = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.detailsTagC2 = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.detailsStatusC2 = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.detailsTagC2 = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.detailsStatusC2 = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.detailsTagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.detailsStatusC2 = 'Not accepted'   
        break;
    default:
        req.session.data.detailsTagC2 = 'govuk-tag';
        req.session.data.detailsStatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote1C2 = stripEmptyAndNulls(req.session.data.task1NoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task2T2C2', function (req, res) { 
    req.session.data.detailsCheckedC2 = 'yes';
    req.session.data.noteActionTask2C2 = req.session.data.decisionTask2C2;
    switch (req.session.data.decisionTask2C2) {
    case 'Accepted':
        req.session.data.calcsTagC2 = '';
        req.session.data.calcsStatusC2 = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.calcsTagC2 = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatusC2 = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.calcsTagC2 = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatusC2 = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.calcsTagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.calcsStatusC2 = 'Not accepted'   
        break;
    default:
        req.session.data.calcsTagC2 = 'govuk-tag';
        req.session.data.calcsStatusC2 = 'Incomplete'   
    };
    req.session.data.filteredNote2C2 = stripEmptyAndNulls(req.session.data.task2NoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task2fT2C2', function (req, res) { 
    req.session.data.detailsCheckedC2 = 'yes';
    req.session.data.noteActionTask2fC2 = req.session.data.decisionTask2fC2;
    switch (req.session.data.decisionTask2fC2) {
    case 'Accepted':
        req.session.data.calcsTagC2 = '';
        req.session.data.calcsStatusC2 = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.calcsTagC2 = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatusC2 = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.calcsTagC2 = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatusC2 = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.calcsTagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.calcsStatusC2 = 'Not accepted'   
        break;
    default:
        req.session.data.calcsTagC2 = 'govuk-tag';
        req.session.data.calcsStatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote2C2 = stripEmptyAndNulls(req.session.data.task2NoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task3T2C2', function (req, res) { 
    req.session.data.detailsCheckedC2 = 'yes';
    req.session.data.noteActionTask3C2 = req.session.data.decisionTask3C2;
    switch (req.session.data.decisionTask3C2) {
    case 'Accepted':
        req.session.data.sssiTagC2 = '';
        req.session.data.sssiStatusC2 = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.sssiTagC2 = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.sssiStatusC2 = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.sssiTagC2 = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.sssiStatusC2 = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.sssiTagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.sssiStatusC2 = 'Not accepted'   
        break;
    default:
        req.session.data.sssiTagC2 = 'govuk-tag';
        req.session.data.sssiStatusC2 = 'Incomplete'  
    };
    req.session.data.filteredNote3C2 = stripEmptyAndNulls(req.session.data.task3NoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task4T2C2', function (req, res) { 
    req.session.data.detailsCheckedC2 = 'yes';
    req.session.data.noteActionTask4C2 = req.session.data.decisionTask4C2;
    switch (req.session.data.decisionTask4C2) {
    case 'Accepted':
        req.session.data.samTagC2 = '';
        req.session.data.samStatusC2 = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.samTagC2 = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.samStatusC2 = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.samTagC2 = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.samStatusC2 = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.samTagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.samStatusC2 = 'Not accepted'   
        break;
    default:
        req.session.data.samTagC2 = 'govuk-tag';
        req.session.data.samStatusC2 = 'Incomplete'  
    };
    req.session.data.filteredNote4 = stripEmptyAndNulls(req.session.data.task4Note);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task5T2C2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionTask5C2 = req.session.data.decisionTask5C2;
    switch (req.session.data.decisionTask5C2) {
    case 'Accepted':
        req.session.data.paymentTagC2 = '';
        req.session.data.paymentStatusC2 = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.paymentTagC2 = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.paymentStatusC2 = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.paymentTagC2 = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.paymentStatusC2 = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.paymentTagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.paymentStatusC2 = 'Not accepted'   
        break;
    default:
        req.session.data.paymentTagC2 = 'govuk-tag';
        req.session.data.paymentStatusC2 = 'Incomplete'  
    };
    req.session.data.filteredNote5C2 = stripEmptyAndNulls(req.session.data.task5NoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task6T2C2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionTask6C2 = req.session.data.decisionTask6C2;
    switch (req.session.data.decisionTask6C2) {
    case 'Accepted':
        req.session.data.budgetTagC2 = '';
        req.session.data.budgetStatusC2 = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.budgetTagC2 = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.budgetStatusC2 = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.budgetTagC2 = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.budgetStatusC2 = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.budgetTagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.budgetStatusC2 = 'Not accepted'   
        break;
    default:
        req.session.data.budgetTagC2 = 'govuk-tag';
        req.session.data.budgetStatusC2 = 'Incomplete'  
    };
    req.session.data.filteredNote6C2 = stripEmptyAndNulls(req.session.data.task6NoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});





router.get('/caselistTeam2C2', function (req, res) { 
    req.session.data.caseAssignedC2 = 'yes';
   res.redirect('/FRPS-D2/caselist');
});


router.get('/setUserFo2C2', function (req, res) {
    req.session.data.financeOfficerC2 = 'yes';
   res.redirect('/FRPS-D2/case2/tasklist-stage');
});

// Amendment routes 2

router.get('/task1T2AmC2', function (req, res) { 
    req.session.data.noteActionTaskAm1C2 = req.session.data.decisionTaskAm1C2;
    switch (req.session.data.decisionTaskAm1C2) {
    case 'Confirm':
        req.session.data.amend1TagC2 = '';
        req.session.data.amend1StatusC2 = 'Confirmed'       
    break;

    case 'There’s a problem':
        req.session.data.amend1TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.amend1StatusC2 = 'There’s a problem'   
        break;
    default:
        req.session.data.amend1TagC2 = 'govuk-tag';
        req.session.data.amend1StatusC2 = 'Incomplete'
    };
    req.session.data.filteredNoteAm1C2 = stripEmptyAndNulls(req.session.data.task1AmNoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task2T2AmC2', function (req, res) { 
    req.session.data.noteActionTaskAm2C2 = req.session.data.decisionTaskAm2C2;
    switch (req.session.data.decisionTaskAm2C2) {
    case 'Confirm':
        req.session.data.amend2TagC2 = '';
        req.session.data.amend2StatusC2 = 'Confirmed'       
    break;

    case 'There’s a problem':
        req.session.data.amend2TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.amend2StatusC2 = 'There’s a problem'   
        break;
    default:
        req.session.data.amend2TagC2 = 'govuk-tag';
        req.session.data.amend2StatusC2 = 'Incomplete'
    };
    req.session.data.filteredNoteAm2C2 = stripEmptyAndNulls(req.session.data.taskAm2NoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task3T2AmC2', function (req, res) { 
    req.session.data.noteActionTaskAm3C2 = req.session.data.decisionTaskAm3C2;
    switch (req.session.data.decisionTaskAm3C2) {
    case 'Confirm':
        req.session.data.amend3TagC2 = '';
        req.session.data.amend3StatusC2 = 'Confirmed'       
    break;

    case 'There’s a problem':
        req.session.data.amend3TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.amend3StatusC2 = 'There’s a problem'   
        break;
    default:
        req.session.data.amend3TagC2 = 'govuk-tag';
        req.session.data.amend3StatusC2 = 'Incomplete'
    };
    req.session.data.filteredNoteAm3C2 = stripEmptyAndNulls(req.session.data.task3AmNoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});



// Agreement routes 2

router.get('/agreementStage2C2', function (req, res) {
    req.session.data.agreementStage = 'yes';
   res.redirect('/FRPS-D2/caselist');
});

router.get('/task1AgT2C2', function (req, res) { 
    req.session.data.AgreeCheckedC2 = 'yes';
    req.session.data.noteActionAgreeTask1C2 = req.session.data.decisionTask1C2;
    switch (req.session.data.decisionAgreeTask1C2) {
    case 'Confirm':
        req.session.data.agreeTagC2 = '';
        req.session.data.agreeStatusC2 = 'Confirmed'       
    break;

    case 'There’s a problem':
        req.session.data.agreeTagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.agreeStatusC2 = 'There’s a problem'   
        break;
    default:
        req.session.data.agreeTagC2 = 'govuk-tag';
        req.session.data.agreeStatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote1AC2 = stripEmptyAndNulls(req.session.data.task1ANoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task2AgT2C2', function (req, res) { 

    req.session.data.noteActionAgreeTask2C2 = req.session.data.decisionAgreeTask2C2;
    switch (req.session.data.decisionAgreeTask2C2) {
    case 'Confirm':
        req.session.data.agreeSTagC2 = '';
        req.session.data.agreeSStatusC2 = 'Confirmed'       
    break;
    case 'There’s a problem':
        req.session.data.agreeSTagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.agreeSStatusC2 = 'There’s a problem'   
        break;
    default:
        req.session.data.agreeSTagC2 = 'govuk-tag';
        req.session.data.agreeSStatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote2AC2 = stripEmptyAndNulls(req.session.data.task2ANoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});


router.get('/setAgreeSign2C2', function (req, res) {
    req.session.data.caseStatusC2 = 'Agreement accepted';  
   res.redirect('/tasklistStage2C2');
});


router.get('/tasklistStage2C2', function (req, res) { 
    req.session.data.stageCountC2 = (req.session.data.stageCountC2 || 0) + 1;
    console.log (req.session.data.stageCountC2);
    switch (req.session.data.stageCountC2) {
    case 1:
        req.session.data.caseStageC2 = 'start'; 
        req.session.data.caseStatusC2 = 'Application received';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--grey'; 
    return res.redirect('/FRPS-D2/caselist-my');
    case 2:
        req.session.data.caseStageC2 = 'review';   
        req.session.data.caseStatusC2 = 'In review';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--blue'; 
    break;
    case 3:
        req.session.data.caseStageC2 = 'agree';
        req.session.data.caseStatusC2 = 'Agreement drafted';       
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--blue'; 
    break;
    case 4:
        req.session.data.caseStageC2 = 'agree2'; 
        req.session.data.caseStatusC2 = 'Agreement offered';  
        req.session.data.AgreeSChecked = 'yes';    
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--blue';     
    break;
    case 5:
        req.session.data.caseStageC2 = 'pay'; 
        req.session.data.caseStatusC2 = 'Agreement accepted';   
        req.session.data.caseStatusTagC2 = 'govuk-tag govuk-tag--green';     
    break;
    default:
        req.session.data.caseStageC2 = 'start';
    };
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

// 5 Month routes

router.get('/5month1C2', function (req, res) {
    req.session.data.caseStatusC2 = '5 month checks';  
    req.session.data.caseStageC2 = '5month';  
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task5m1C2', function (req, res) { 
    req.session.data.noteActionTask1mC2 = req.session.data.decisionTask1mC2;
    switch (req.session.data.decisionTask1mC2) {
    case 'No action needed':
        req.session.data.month5_1TagC2 = '';
        req.session.data.month5_1StatusC2 = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_1TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_1StatusC2 = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_1TagC2 = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_1StatusC2 = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_1TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_1StatusC2 = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_1TagC2 = 'govuk-tag';
        req.session.data.month5_1StatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote1mC2 = stripEmptyAndNulls(req.session.data.task1mNoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task5m2C2', function (req, res) { 
    req.session.data.noteActionTask2mC2 = req.session.data.decisionTask2mC2;
    switch (req.session.data.decisionTask2mC2) {
    case 'No action needed':
        req.session.data.month5_2TagC2 = '';
        req.session.data.month5_2StatusC2 = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_2TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_2StatusC2 = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_2TagC2 = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_2StatusC2 = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_2TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_2StatusC2 = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_2TagC2 = 'govuk-tag';
        req.session.data.month5_2StatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote2mC2 = stripEmptyAndNulls(req.session.data.task2mNoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task5m3C2', function (req, res) { 
    req.session.data.noteActionTask3mC2 = req.session.data.decisionTask3mC2;
    switch (req.session.data.decisionTask3mC2) {
    case 'No action needed':
        req.session.data.month5_3TagC2 = '';
        req.session.data.month5_3StatusC2 = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_3TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_3StatusC2 = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_3TagC2 = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_3StatusC2 = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_3TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_3StatusC2 = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_3TagC2 = 'govuk-tag';
        req.session.data.month5_3StatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote3mC2 = stripEmptyAndNulls(req.session.data.task3mNoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});

router.get('/task5m4C2', function (req, res) { 
    req.session.data.noteActionTask4mC2 = req.session.data.decisionTask4mC2;
    switch (req.session.data.decisionTask4mC2) {
    case 'No action needed':
        req.session.data.month5_4TagC2 = '';
        req.session.data.month5_4StatusC2 = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_4TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_4StatusC2 = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_4TagC2 = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_4StatusC2 = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_4TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_4StatusC2 = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_4TagC2 = 'govuk-tag';
        req.session.data.month5_4StatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote4mC2 = stripEmptyAndNulls(req.session.data.task4mNoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});


router.get('/task5m5C2', function (req, res) { 
    req.session.data.noteActionTask5mC2 = req.session.data.decisionTask5mC2;
    switch (req.session.data.decisionTask5mC2) {
    case 'No action needed':
        req.session.data.month5_5TagC2 = '';
        req.session.data.month5_5StatusC2 = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_5TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_5StatusC2 = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_5TagC2 = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_5StatusC2 = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_5TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_5StatusC2 = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_5TagC2 = 'govuk-tag';
        req.session.data.month5_5StatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote5mC2 = stripEmptyAndNulls(req.session.data.task5mNoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});


router.get('/task5m6C2', function (req, res) { 
    req.session.data.noteActionTask6mC2 = req.session.data.decisionTask6mC2;
    switch (req.session.data.decisionTask6mC2) {
    case 'No action needed':
        req.session.data.month5_6TagC2 = '';
        req.session.data.month5_6StatusC2 = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_6TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_6StatusC2 = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_6TagC2 = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_6StatusC2 = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_6TagC2 = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_6StatusC2 = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_6TagC2 = 'govuk-tag';
        req.session.data.month5_6StatusC2 = 'Incomplete'
    };
    req.session.data.filteredNote6mC2 = stripEmptyAndNulls(req.session.data.task6mNoteC2);
    res.redirect('/FRPS-D2/case2/tasklist-stage');
});




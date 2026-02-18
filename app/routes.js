//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

function stripEmptyAndNulls(input) {
  if (Array.isArray(input)) {
    return input.filter(value => value !== null && value !== '');
  }
  if (input === null || input === '') {
    return '';
  }
  throw new Error("Input must be an array or an empty/null value.");
}




// Add your routes here




router.get('/app-approve1', function (req, res) { 
    switch (req.session.data.decision1) {
    case 'Approve':
        req.session.data.caseApproved = 'yes';
        req.session.data.agreementStage = 'yes';
       req.session.data.filteredReviewNote = stripEmptyAndNulls(req.session.data.reviewNote); 
    return res.redirect('/tasklistStage1');    
    case 'Reject':
        req.session.data.caseStage = 'reject'; 
        req.session.data.caseStatus = 'Rejected';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--red';  
        break;
    case 'Withdraw':
        req.session.data.caseStage = 'withdraw'; 
        req.session.data.caseStatus = 'Withdrawn';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--orange';    
        break;
    case 'Put on hold':
        req.session.data.caseStage = 'on-hold'; 
        req.session.data.caseStatus = 'On hold';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--yellow';    
        break;
    };
    res.redirect('/FRPS-D1_target/tasklist-stage');
});

router.get('/resume1', function (req, res) {
    req.session.data.caseStage = 'review';
    req.session.data.caseStatus = 'In review';    
    req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue'; 
  res.redirect('/FRPS-D1_target/tasklist-stage');
});



router.get('/aggSent1', function (req, res) { 
    switch (req.session.data.decisionAg) {
    case 'Agreement sent':
        req.session.data.filteredAggNote = stripEmptyAndNulls(req.session.data.moreDetail2);
    return res.redirect('/tasklistStage1');    
    case 'Reject':
        req.session.data.caseStage = 'reject'; 
        req.session.data.caseStatus = 'Rejected';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--red';  
        break;
    case 'Withdraw':
        req.session.data.caseStage = 'withdraw'; 
        req.session.data.caseStatus = 'Withdrawn';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--orange';    
        break;
    };
    res.redirect('/FRPS-D1_target/tasklist-stage');
});



router.get('/task1T1', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionTask1 = req.session.data.decisionTask1;
    switch (req.session.data.decisionTask1) {
    case 'Accepted':
        req.session.data.detailsTag = '';
        req.session.data.detailsStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.detailsTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.detailsStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.detailsTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.detailsStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.detailsTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.detailsStatus = 'Not accepted'   
        break;
    default:
        req.session.data.detailsTag = 'govuk-tag';
        req.session.data.detailsStatus = 'Incomplete'
    };
    req.session.data.filteredNote1 = stripEmptyAndNulls(req.session.data.task1Note);
    res.redirect('/FRPS-D1_target/tasklist-stage');
});

router.get('/task2T1', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionTask2 = req.session.data.decisionTask2;
    switch (req.session.data.decisionTask2) {
    case 'Accepted':
        req.session.data.calcsTag = '';
        req.session.data.calcsStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.calcsTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.calcsTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.calcsTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.calcsStatus = 'Not accepted'   
        break;
    default:
        req.session.data.calcsTag = 'govuk-tag';
        req.session.data.calcsStatus = 'Incomplete'   
    };
    req.session.data.filteredNote2 = stripEmptyAndNulls(req.session.data.task2Note);
    res.redirect('/FRPS-D1_target/tasklist-stage');
});

router.get('/task2fT1', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionTask2f = req.session.data.decisionTask2f;
    switch (req.session.data.decisionTask2f) {
    case 'Accepted':
        req.session.data.calcsTag = '';
        req.session.data.calcsStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.calcsTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.calcsTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.calcsTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.calcsStatus = 'Not accepted'   
        break;
    default:
        req.session.data.calcsTag = 'govuk-tag';
        req.session.data.calcsStatus = 'Incomplete'
    };
    req.session.data.filteredNote2 = stripEmptyAndNulls(req.session.data.task2Note);
    res.redirect('/FRPS-D1_target/tasklist-stage');
});

router.get('/task3T1', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionTask3 = req.session.data.decisionTask3;
    switch (req.session.data.decisionTask3) {
    case 'Accepted':
        req.session.data.sssiTag = '';
        req.session.data.sssiStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.sssiTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.sssiStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.sssiTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.sssiStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.sssiTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.sssiStatus = 'Not accepted'   
        break;
    default:
        req.session.data.sssiTag = 'govuk-tag';
        req.session.data.sssiStatus = 'Incomplete'  
    };
    req.session.data.filteredNote3 = stripEmptyAndNulls(req.session.data.task3Note);
    res.redirect('/FRPS-D1_target/tasklist-stage');
});

router.get('/task4T1', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionTask4 = req.session.data.decisionTask4;
    switch (req.session.data.decisionTask4) {
    case 'Accepted':
        req.session.data.samTag = '';
        req.session.data.samStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.samTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.samStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.samTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.samStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.samTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.samStatus = 'Not accepted'   
        break;
    default:
        req.session.data.samTag = 'govuk-tag';
        req.session.data.samStatus = 'Incomplete'  
    };
    req.session.data.filteredNote4 = stripEmptyAndNulls(req.session.data.task4Note);
    res.redirect('/FRPS-D1_target/tasklist-stage');
});

router.get('/task5T1', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionTask5 = req.session.data.decisionTask5;
    switch (req.session.data.decisionTask5) {
    case 'Accepted':
        req.session.data.paymentTag = '';
        req.session.data.paymentStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.paymentTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.paymentStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.paymentTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.paymentStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.paymentTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.paymentStatus = 'Not accepted'   
        break;
    default:
        req.session.data.paymentTag = 'govuk-tag';
        req.session.data.paymentStatus = 'Incomplete'  
    };
    req.session.data.filteredNote5 = stripEmptyAndNulls(req.session.data.task5Note);
    res.redirect('/FRPS-D1_target/tasklist-stage');
});

router.get('/task6T1', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionTask6 = req.session.data.decisionTask6;
    switch (req.session.data.decisionTask6) {
    case 'Accepted':
        req.session.data.budgetTag = '';
        req.session.data.budgetStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.budgetTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.budgetStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.budgetTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.budgetStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.budgetTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.budgetStatus = 'Not accepted'   
        break;
    default:
        req.session.data.budgetTag = 'govuk-tag';
        req.session.data.budgetStatus = 'Incomplete'  
    };
    req.session.data.filteredNote6 = stripEmptyAndNulls(req.session.data.task6Note);
    res.redirect('/FRPS-D1_target/tasklist-stage');
});





router.get('/caselistTeam1', function (req, res) { 
    req.session.data.caseAssigned = 'yes';
   res.redirect('/FRPS-D1_target/caselist');
});


router.get('/setUserFo1', function (req, res) {
    req.session.data.financeOfficer = 'yes';
   res.redirect('/FRPS-D1_target/tasklist-stage');
});





// Agreement routes

router.get('/agreementStage1', function (req, res) {
    req.session.data.agreementStage = 'yes';
   res.redirect('/FRPS-D1_target/caselist');
});

router.get('/task1AgT1', function (req, res) { 
    req.session.data.AgreeChecked = 'yes';
    req.session.data.noteActionAgreeTask1 = req.session.data.decisionTask1;
    switch (req.session.data.decisionAgreeTask1) {
    case 'Confirm':
        req.session.data.agreeTag = '';
        req.session.data.agreeStatus = 'Confirmed'       
    break;

    case 'There’s a problem':
        req.session.data.agreeTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.agreeStatus = 'There’s a problem'   
        break;
    default:
        req.session.data.agreeTag = 'govuk-tag';
        req.session.data.agreeStatus = 'Incomplete'
    };
    req.session.data.filteredNote1A = stripEmptyAndNulls(req.session.data.task1ANote);
    res.redirect('/FRPS-D1_target/tasklist-stage');
});

router.get('/task2AgT1', function (req, res) { 

    req.session.data.noteActionAgreeTask2 = req.session.data.decisionAgreeTask2;
    switch (req.session.data.decisionAgreeTask2) {
    case 'Confirm':
        req.session.data.agreeSTag = '';
        req.session.data.agreeSStatus = 'Confirmed'       
    break;
    case 'There’s a problem':
        req.session.data.agreeSTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.agreeSStatus = 'There’s a problem'   
        break;
    default:
        req.session.data.agreeSTag = 'govuk-tag';
        req.session.data.agreeSStatus = 'Incomplete'
    };
    req.session.data.filteredNote2A = stripEmptyAndNulls(req.session.data.task2ANote);
    res.redirect('/FRPS-D1_target/tasklist-stage');
});


router.get('/setAgreeSign1', function (req, res) {
    req.session.data.caseStatus = 'Agreement accepted';  
   res.redirect('/tasklistStage1');
});


router.get('/tasklistStage1', function (req, res) { 
    req.session.data.stageCount = (req.session.data.stageCount || 0) + 1;
    console.log (req.session.data.stageCount);
    switch (req.session.data.stageCount) {
    case 1:
        req.session.data.caseStage = 'start'; 
        req.session.data.caseStatus = 'Application received';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--grey'; 
    return res.redirect('/FRPS-D1_target/caselist');
    case 2:
        req.session.data.caseStage = 'review';   
        req.session.data.caseStatus = 'In review';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue'; 
    break;
    case 3:
        req.session.data.caseStage = 'agree';
        req.session.data.caseStatus = 'Agreement drafted';       
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue'; 
    break;
    case 4:
        req.session.data.caseStage = 'agree2'; 
        req.session.data.caseStatus = 'Agreement offered';  
        req.session.data.AgreeSChecked = 'yes';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue';     
    break;
    case 5:
        req.session.data.caseStage = 'pay'; 
        req.session.data.caseStatus = 'Agreement accepted';   
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--green';     
    break;
    default:
        req.session.data.caseStage = 'start';
    };
    res.redirect('/FRPS-D1_target/tasklist-stage');
});


// post D1 routes




router.get('/app-approve2', function (req, res) { 
    switch (req.session.data.decision1) {
    case 'Approve':
        req.session.data.caseApproved = 'yes';
        req.session.data.agreementStage = 'yes';
       req.session.data.filteredReviewNote = stripEmptyAndNulls(req.session.data.reviewNote); 
    return res.redirect('/tasklistStage2');    
    case 'Reject':
        req.session.data.caseStage = 'reject'; 
        req.session.data.caseStatus = 'Rejected';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--red'; 
         break;
    case 'Amend':
        req.session.data.caseStage = 'amend'; 
        req.session.data.caseStatus = 'Amending';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--orange';  
        return res.redirect('/FRPS-D2/amend-confirm'); 
    case 'Return':
        req.session.data.caseStage = 'return'; 
        req.session.data.caseStatus = 'Returned to customer';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--orange';  
        return res.redirect('/FRPS-D2/return-confirm');  
    case 'Withdraw':
        req.session.data.caseStage = 'withdraw'; 
        req.session.data.caseStatus = 'Withdrawn';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--orange';    
        break;
    case 'Put on hold':
        req.session.data.caseStage = 'on-hold'; 
        req.session.data.caseStatus = 'On hold';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--yellow';    
        break;
    };
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/resume2', function (req, res) {
    req.session.data.caseStage = 'review';
    req.session.data.caseStatus = 'In review';    
    req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue'; 
  res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/amendReturn1', function (req, res) {
    req.session.data.caseStage = 'review';
    req.session.data.caseStatus = 'In review';    
    req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue'; 
  res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/returnConf1', function (req, res) {
  if (req.session.data.rConf === 'yes') {
    res.redirect('/FRPS-D2/tasklist-stage');
    }
  else 
    res.redirect('/amendReturn1');
});

router.get('/amendConf1', function (req, res) {
  if (req.session.data.aConf === 'yes') {
    res.redirect('/FRPS-D2/tasklist-stage');
    }
  else 
    res.redirect('/amendReturn1');
});



router.get('/amend1', function (req, res) { 
    switch (req.session.data.decisionAm) {
    case 'Amendment sent':
        req.session.data.caseStage = 'amendment_sent';   
        req.session.data.caseStatus = 'Amendment sent';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue'; 
    break;
    case 'Amendment recinded':
        req.session.data.caseStage = 'review';   
        req.session.data.caseStatus = 'In review';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue'; 
    break;
    return res.redirect('/tasklistStage2');    
    case 'Reject':
        req.session.data.caseStage = 'reject'; 
        req.session.data.caseStatus = 'Rejected';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--red';  
        break;
    case 'Withdraw':
        req.session.data.caseStage = 'withdraw'; 
        req.session.data.caseStatus = 'Withdrawn';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--orange';    
        break;
    };
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/amend2', function (req, res) { 

    req.session.data.caseStage = 'amendment_submitted';   
    req.session.data.caseStatus = 'Case close by amendment';    
    req.session.data.caseStatusTag = 'govuk-tag govuk-tag--orange'; 
    res.redirect('/FRPS-D2/tasklist-stage');
});


router.get('/aggSent2', function (req, res) { 
    switch (req.session.data.decisionAg) {
    case 'Agreement sent':
        req.session.data.filteredAggNote = stripEmptyAndNulls(req.session.data.agreeNote);
    return res.redirect('/tasklistStage2');    
    case 'Reject':
        req.session.data.caseStage = 'reject'; 
        req.session.data.caseStatus = 'Rejected';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--red';  
        break;
    case 'Withdraw':
        req.session.data.caseStage = 'withdraw'; 
        req.session.data.caseStatus = 'Withdrawn';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--orange';    
        break;
    };
    res.redirect('/FRPS-D2/tasklist-stage');
});



router.get('/task1T2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    if (req.session.data.noteActionTask1) {
        req.session.data.filteredNote1_2 = stripEmptyAndNulls(req.session.data.task1Note2);
    }
    else {
        req.session.data.noteActionTask1 = req.session.data.decisionTask1;
        req.session.data.filteredNote1 = stripEmptyAndNulls(req.session.data.task1Note);
    }

    switch (req.session.data.decisionTask1) {
    case 'Accepted':
        req.session.data.detailsTag = '';
        req.session.data.detailsStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.detailsTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.detailsStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.detailsTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.detailsStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.detailsTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.detailsStatus = 'Not accepted'   
        break;
    default:
        req.session.data.detailsTag = 'govuk-tag';
        req.session.data.detailsStatus = 'Incomplete'
    };

    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task2T2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    if (req.session.data.noteActionTask2) {
        req.session.data.filteredNote2_2 = stripEmptyAndNulls(req.session.data.task2Note2);
    }
    else {
    req.session.data.noteActionTask2 = req.session.data.decisionTask2;
    req.session.data.filteredNote2 = stripEmptyAndNulls(req.session.data.task2Note);
    }

    switch (req.session.data.decisionTask2) {
    case 'Accepted':
        req.session.data.calcsTag = '';
        req.session.data.calcsStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.calcsTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.calcsTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.calcsTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.calcsStatus = 'Not accepted'   
        break;
    default:
        req.session.data.calcsTag = 'govuk-tag';
        req.session.data.calcsStatus = 'Incomplete'   
    };
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task2fT2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';

    if (req.session.data.noteActionTask2f) {
        req.session.data.filteredNote2f_2 = stripEmptyAndNulls(req.session.data.task2fNote2);
    }
    else {
    req.session.datanoteActionTask2f = req.session.data.decisionTask2f;
    req.session.data.filteredNote2f = stripEmptyAndNulls(req.session.data.task2fNote);
    }


    switch (req.session.data.decisionTask2f) {
    case 'Accepted':
        req.session.data.calcsTag = '';
        req.session.data.calcsStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.calcsTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.calcsTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.calcsStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.calcsTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.calcsStatus = 'Not accepted'   
        break;
    default:
        req.session.data.calcsTag = 'govuk-tag';
        req.session.data.calcsStatus = 'Incomplete'
    };
    req.session.data.filteredNote2 = stripEmptyAndNulls(req.session.data.task2Note);
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task3T2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';

    if (req.session.data.noteActionTask3) {
        req.session.data.filteredNote3_2 = stripEmptyAndNulls(req.session.data.task3Note2);
    }
    else {
    req.session.data.noteActionTask3 = req.session.data.decisionTask3;
    req.session.data.filteredNote3 = stripEmptyAndNulls(req.session.data.task3Note);
    }

    switch (req.session.data.decisionTask3) {
    case 'Accepted':
        req.session.data.sssiTag = '';
        req.session.data.sssiStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.sssiTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.sssiStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.sssiTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.sssiStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.sssiTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.sssiStatus = 'Not accepted'   
        break;
    default:
        req.session.data.sssiTag = 'govuk-tag';
        req.session.data.sssiStatus = 'Incomplete'  
    };
    req.session.data.filteredNote3 = stripEmptyAndNulls(req.session.data.task3Note);
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task4T2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    if (req.session.data.noteActionTask4) {
    }
    else
    req.session.data.noteActionTask4 = req.session.data.decisionTask4;

    switch (req.session.data.decisionTask4) {
    case 'Accepted':
        req.session.data.samTag = '';
        req.session.data.samStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.samTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.samStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.samTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.samStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.samTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.samStatus = 'Not accepted'   
        break;
    default:
        req.session.data.samTag = 'govuk-tag';
        req.session.data.samStatus = 'Incomplete'  
    };
    req.session.data.filteredNote4 = stripEmptyAndNulls(req.session.data.task4Note);
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task5T2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';

    if (req.session.data.noteActionTask5) {
    req.session.data.filteredNote5_2 = stripEmptyAndNulls(req.session.data.task5Note2);
    }
    else {
    req.session.data.noteActionTask5 = req.session.data.decisionTask5;
    req.session.data.filteredNote5 = stripEmptyAndNulls(req.session.data.task5Note);
    }

    switch (req.session.data.decisionTask5) {
    case 'Accepted':
        req.session.data.paymentTag = '';
        req.session.data.paymentStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.paymentTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.paymentStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.paymentTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.paymentStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.paymentTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.paymentStatus = 'Not accepted'   
        break;
    default:
        req.session.data.paymentTag = 'govuk-tag';
        req.session.data.paymentStatus = 'Incomplete'  
    };
    req.session.data.filteredNote5 = stripEmptyAndNulls(req.session.data.task5Note);
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task6T2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';

    if (req.session.data.noteActionTask6) {
        req.session.data.filteredNote6_2 = stripEmptyAndNulls(req.session.data.task6Note2);
    }
    else {
    req.session.data.noteActionTask6 = req.session.data.decisionTask6;
    req.session.data.filteredNote6 = stripEmptyAndNulls(req.session.data.task6Note);
    }

    switch (req.session.data.decisionTask6) {
    case 'Accepted':
        req.session.data.budgetTag = '';
        req.session.data.budgetStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.budgetTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.budgetStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.budgetTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.budgetStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.budgetTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.budgetStatus = 'Not accepted'   
        break;
    default:
        req.session.data.budgetTag = 'govuk-tag';
        req.session.data.budgetStatus = 'Incomplete'  
    };
    req.session.data.filteredNote6 = stripEmptyAndNulls(req.session.data.task6Note);
    res.redirect('/FRPS-D2/tasklist-stage');
});





router.get('/caselistTeam2', function (req, res) { 
    req.session.data.caseAssigned = 'yes';
   res.redirect('/FRPS-D2/caselist');
});


router.get('/setUserFo2', function (req, res) {
    req.session.data.financeOfficer = 'yes';
   res.redirect('/FRPS-D2/tasklist-stage');
});

// Amendment routes 2

router.get('/task1T2Am', function (req, res) { 
    if (req.session.data.noteActionTaskAm1) {
    }
    else
    req.session.data.noteActionTaskAm1 = req.session.data.decisionTaskAm1;   
    switch (req.session.data.decisionTaskAm1) {
    case 'Confirm':
        req.session.data.amend1Tag = '';
        req.session.data.amend1Status = 'Confirmed'       
    break;

    case 'There’s a problem':
        req.session.data.amend1Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.amend1Status = 'There’s a problem'   
        break;
    default:
        req.session.data.amend1Tag = 'govuk-tag';
        req.session.data.amend1Status = 'Incomplete'
    };
    req.session.data.filteredNoteAm1 = stripEmptyAndNulls(req.session.data.task1AmNote);
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task2T2Am', function (req, res) { 
    if (req.session.data.noteActionTaskAm2) {
    }
    else
    req.session.data.noteActionTaskAm2 = req.session.data.decisionTaskAm2;       
    switch (req.session.data.decisionTaskAm2) {
    case 'Confirm':
        req.session.data.amend2Tag = '';
        req.session.data.amend2Status = 'Confirmed'       
    break;

    case 'There’s a problem':
        req.session.data.amend2Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.amend2Status = 'There’s a problem'   
        break;
    default:
        req.session.data.amend2Tag = 'govuk-tag';
        req.session.data.amend2Status = 'Incomplete'
    };
    req.session.data.filteredNoteAm2 = stripEmptyAndNulls(req.session.data.taskAm2Note);
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task3T2Am', function (req, res) { 
    if (req.session.data.noteActionTaskAm3) {
    }
    else
    req.session.data.noteActionTaskAm3 = req.session.data.decisionTaskAm3;

    switch (req.session.data.decisionTaskAm3) {
    case 'Confirm':
        req.session.data.amend3Tag = '';
        req.session.data.amend3Status = 'Confirmed'       
    break;

    case 'There’s a problem':
        req.session.data.amend3Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.amend3Status = 'There’s a problem'   
        break;
    default:
        req.session.data.amend3Tag = 'govuk-tag';
        req.session.data.amend3Status = 'Incomplete'
    };
    req.session.data.filteredNoteAm3 = stripEmptyAndNulls(req.session.data.task3AmNote);
    res.redirect('/FRPS-D2/tasklist-stage');
});



// Agreement routes 2

router.get('/agreementStage2', function (req, res) {
    req.session.data.agreementStage = 'yes';
   res.redirect('/FRPS-D2/caselist');
});

router.get('/task1AgT2', function (req, res) { 
    req.session.data.AgreeChecked = 'yes';

    if (req.session.data.noteActionAgreeTask1) {
        req.session.data.filteredNote1A_2 = stripEmptyAndNulls(req.session.data.task1ANote2);  
    }
    else {
        req.session.data.noteActionAgreeTask1  = req.session.data.decisionAgreeTask1 ; 
        req.session.data.filteredNote1A = stripEmptyAndNulls(req.session.data.task1ANote);  
    }

    switch (req.session.data.decisionAgreeTask1) {
    case 'Confirm':
        req.session.data.agreeTag = '';
        req.session.data.agreeStatus = 'Confirmed'       
    break;

    case 'There’s a problem':
        req.session.data.agreeTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.agreeStatus = 'There’s a problem'   
        break;
    default:
        req.session.data.agreeTag = 'govuk-tag';
        req.session.data.agreeStatus = 'Incomplete'
    };

    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task2AgT2', function (req, res) { 
    if (req.session.data.noteActionAgreeTask2) {
        req.session.data.filteredNote2A_2 = stripEmptyAndNulls(req.session.data.task2ANote2); 
    }
    else {
        req.session.data.noteActionAgreeTask2 = req.session.data.decisionAgreeTask2;
        req.session.data.filteredNote2A = stripEmptyAndNulls(req.session.data.task2ANote); 
    }

    switch (req.session.data.decisionAgreeTask2) {
    case 'Confirm':
        req.session.data.agreeSTag = '';
        req.session.data.agreeSStatus = 'Confirmed'       
    break;
    case 'There’s a problem':
        req.session.data.agreeSTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.agreeSStatus = 'There’s a problem'   
        break;
    default:
        req.session.data.agreeSTag = 'govuk-tag';
        req.session.data.agreeSStatus = 'Incomplete'
    };
    res.redirect('/FRPS-D2/tasklist-stage');
});


router.get('/setAgreeSign2', function (req, res) {
    req.session.data.caseStatus = 'Agreement accepted';  
   res.redirect('/tasklistStage2');
});


router.get('/tasklistStage2', function (req, res) { 
    req.session.data.stageCount = (req.session.data.stageCount || 0) + 1;
    console.log (req.session.data.stageCount);
    switch (req.session.data.stageCount) {
    case 1:
        req.session.data.caseStage = 'start'; 
        req.session.data.caseStatus = 'Application received';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--grey'; 
    return res.redirect('/FRPS-D2/caselist-my');
    case 2:
        req.session.data.caseStage = 'review';   
        req.session.data.caseStatus = 'In review';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue'; 
    break;
    case 3:
        req.session.data.caseStage = 'agree';
        req.session.data.caseStatus = 'Agreement drafted';       
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue'; 
    break;
    case 4:
        req.session.data.caseStage = 'agree2'; 
        req.session.data.caseStatus = 'Agreement offered';  
        req.session.data.AgreeSChecked = 'yes';    
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--blue';     
    break;
    case 5:
        req.session.data.caseStage = 'pay'; 
        req.session.data.caseStatus = 'Agreement accepted';   
        req.session.data.caseStatusTag = 'govuk-tag govuk-tag--green';     
    break;
    default:
        req.session.data.caseStage = 'start';
    };
    res.redirect('/FRPS-D2/tasklist-stage');
});

// 5 Month routes

router.get('/5month1', function (req, res) {
    req.session.data.caseStatus = '5 month checks';  
    req.session.data.caseStage = '5month';  
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task5m1', function (req, res) { 

    if (req.session.data.noteActionTask1m) {
        req.session.data.filteredNote1m_2 = stripEmptyAndNulls(req.session.data.task1mNote2); 
    }
    else {
        req.session.data.noteActionTask1m = req.session.data.decisionTask1m
        req.session.data.filteredNote1m = stripEmptyAndNulls(req.session.data.task1mNote);
    } 

    switch (req.session.data.decisionTask1m) {
    case 'No action needed':
        req.session.data.month5_1Tag = '';
        req.session.data.month5_1Status = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_1Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_1Status = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_1Tag = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_1Status = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_1Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_1Status = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_1Tag = 'govuk-tag';
        req.session.data.month5_1Status = 'Incomplete'
    };

    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task5m2', function (req, res) { 

    if (req.session.data.noteActionTask2m) {
        req.session.data.filteredNote2m_2 = stripEmptyAndNulls(req.session.data.task2mNote2); 
    }
    else {
        req.session.data.noteActionTask2m = req.session.data.decisionTask2m
        req.session.data.filteredNote2m = stripEmptyAndNulls(req.session.data.task2mNote);
    } 

    req.session.data.noteActionTask2m = req.session.data.decisionTask2m;

    switch (req.session.data.decisionTask2m) {
    case 'No action needed':
        req.session.data.month5_2Tag = '';
        req.session.data.month5_2Status = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_2Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_2Status = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_2Tag = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_2Status = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_2Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_2Status = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_2Tag = 'govuk-tag';
        req.session.data.month5_2Status = 'Incomplete'
    };
    req.session.data.filteredNote2m = stripEmptyAndNulls(req.session.data.task2mNote);
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task5m3', function (req, res) { 

    if (req.session.data.noteActionTask3m) {
        req.session.data.filteredNote3m_2 = stripEmptyAndNulls(req.session.data.task3mNote2); 
    }
    else {
        req.session.data.noteActionTask3m = req.session.data.decisionTask3m
        req.session.data.filteredNote3m = stripEmptyAndNulls(req.session.data.task3mNote);
    } 

    switch (req.session.data.decisionTask3m) {
    case 'No action needed':
        req.session.data.month5_3Tag = '';
        req.session.data.month5_3Status = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_3Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_3Status = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_3Tag = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_3Status = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_3Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_3Status = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_3Tag = 'govuk-tag';
        req.session.data.month5_3Status = 'Incomplete'
    };
    req.session.data.filteredNote3m = stripEmptyAndNulls(req.session.data.task3mNote);
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/task5m4', function (req, res) { 

    if (req.session.data.noteActionTask4m) {
        req.session.data.filteredNote4m_2 = stripEmptyAndNulls(req.session.data.task4mNote2); 
    }
    else {
        req.session.data.noteActionTask4m = req.session.data.decisionTask4m
        req.session.data.filteredNote4m = stripEmptyAndNulls(req.session.data.task4mNote);
    } 
 

    switch (req.session.data.decisionTask4m) {
    case 'No action needed':
        req.session.data.month5_4Tag = '';
        req.session.data.month5_4Status = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_4Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_4Status = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_4Tag = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_4Status = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_4Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_4Status = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_4Tag = 'govuk-tag';
        req.session.data.month5_4Status = 'Incomplete'
    };
    req.session.data.filteredNote4m = stripEmptyAndNulls(req.session.data.task4mNote);
    res.redirect('/FRPS-D2/tasklist-stage');
});


router.get('/task5m5', function (req, res) { 

    if (req.session.data.noteActionTask5m) {
        req.session.data.filteredNote5m_2 = stripEmptyAndNulls(req.session.data.task5mNote2); 
    }
    else {
        req.session.data.noteActionTask5m = req.session.data.decisionTask5m
        req.session.data.filteredNote5m = stripEmptyAndNulls(req.session.data.task5mNote);
    } 

    switch (req.session.data.decisionTask5m) {
    case 'No action needed':
        req.session.data.month5_5Tag = '';
        req.session.data.month5_5Status = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_5Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_5Status = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_5Tag = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_5Status = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_5Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_5Status = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_5Tag = 'govuk-tag';
        req.session.data.month5_5Status = 'Incomplete'
    };
    req.session.data.filteredNote5m = stripEmptyAndNulls(req.session.data.task5mNote);
    res.redirect('/FRPS-D2/tasklist-stage');
});


router.get('/task5m6', function (req, res) { 
    if (req.session.data.noteActionTask6m) {
        req.session.data.filteredNote6m_2 = stripEmptyAndNulls(req.session.data.task6mNote2); 
    }
    else {
        req.session.data.noteActionTask6m = req.session.data.decisionTask6m
        req.session.data.filteredNote6m = stripEmptyAndNulls(req.session.data.task6mNote);
    } 

    switch (req.session.data.decisionTask6m) {
    case 'No action needed':
        req.session.data.month5_6Tag = '';
        req.session.data.month5_6Status = 'No action needed'       
    break;

    case 'Escalate':
        req.session.data.month5_6Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_6Status = 'Escalate'   
    break;
    case 'Information requested':
        req.session.data.month5_6Tag = 'govuk-tag govuk-tag--yellow'; 
        req.session.data.month5_6Status = 'Information requested'       
    break;

    case 'Cannot accept':
        req.session.data.month5_6Tag = 'govuk-tag govuk-tag--red-status';
        req.session.data.month5_6Status = 'Cannot accept'   
    break;
    default:
        req.session.data.month5_6Tag = 'govuk-tag';
        req.session.data.month5_6Status = 'Incomplete'
    };
    req.session.data.filteredNote6m = stripEmptyAndNulls(req.session.data.task6mNote);
    res.redirect('/FRPS-D2/tasklist-stage');
});

router.get('/calcs1', function (req, res) {
    req.session.data.recalc = 'yes'; 
  res.redirect('/FRPS-D2/calculations');
});




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
      if (req.session.data.noteActionTask1C2) {
    }
    else
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
    if (req.session.data.noteActionTask2C2) {
    }
    else
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
    if (req.session.data.noteActionTask2fC2) {
    }
    else
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
    if (req.session.data.noteActionTask3C2) {
    }
    else
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
    if (req.session.data.noteActionTask4C2) {
    }
    else
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
    if (req.session.data.noteActionTask5C2) {
    }
    else
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
    if (req.session.data.noteActionTask6C2) {
    }
    else
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
    if (req.session.data.noteActionTaskAm1C2) {
    }
    else
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
    if (req.session.data.noteActionTaskAm2C2) {
    }
    else
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
    if (req.session.data.noteActionTaskAm3C2) {
    }
    else
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
    if (req.session.data.noteActionAgreeTask1C2) {
    }
    else
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
    if (req.session.data.noteActionAgreeTask2C2) {
    }
    else
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
    return res.redirect('/FRPS-D2/case2/caselist-my');
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
    if (req.session.data.noteActionTask1mC2) {
    }
    else
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
    if (req.session.data.noteActionTask1mC2) {
    }
    else
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
    if (req.session.data.noteActionTask3mC2) {
    }
    else
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
    if (req.session.data.noteActionTask4mC2) {
    }
    else
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
    if (req.session.data.noteActionTask5mC2) {
    }
    else
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
    if (req.session.data.noteActionTask6mC2) {
    }
    else
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







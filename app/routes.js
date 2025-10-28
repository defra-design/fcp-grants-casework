//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get('/question1', function (req, res) {
  if (req.session.data.proceed === 'can proceed') {
    res.redirect('/tasklist1');
    }
  else 
    res.redirect('/ftf/steel/keeper-no');
});

router.get('/questionFull1', function (req, res) {
  req.session.data.eligibleTask = 'done';
  res.redirect('/FG-casework/tasklist');
});

router.get('/failTest1', function (req, res) {
  req.session.data.failTest = 'yes';
  res.redirect('/FRPS-PB-D1/home');
});

router.get('/app-approve1', function (req, res) {
  if (req.session.data.decision === 'Approve') {
    req.session.data.caseApproved = 'yes';
    req.session.data.agreementStage = 'yes';
    }
   res.redirect('/FRPS-D1_target/caselist');
});

router.get('/review-Passed2', function (req, res) { 
    req.session.data.issueResolved = 'yes';
   res.redirect('/FRPS-PB-D1/tasklist-test');
});

router.get('/readMore1', function (req, res) { 
    req.session.data.readMore = 'Yes';
   res.redirect('/FRPS-PB-D1/notes3#task1');
});

router.get('/task1Agree1', function (req, res) { 
    req.session.data.customerCheck = 'yes';
   res.redirect('/FRPS-PB-D1/tasklist-agree');
});

router.get('/task2aAgree1', function (req, res) { 
    req.session.data.areaChecks = 'yes';
   res.redirect('/FRPS-PB-D1/tasklist-agree');
});

router.get('/task2bAgree1', function (req, res) { 
    req.session.data.intersectingData = 'yes';
   res.redirect('/FRPS-PB-D1/tasklist-agree');
});

router.get('/task3Agree1', function (req, res) { 
    req.session.data.budgetCheck = 'yes';
   res.redirect('/FRPS-PB-D1/tasklist-agree');
});

// Target routes

router.get('/readMoreT1', function (req, res) { 
    req.session.data.readMore = 'Yes';
   res.redirect('/FRPS-D1_target/notes#task1');
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
    res.redirect('/FRPS-D1_target/tasklist');
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
    res.redirect('/FRPS-D1_target/tasklist');
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
    res.redirect('/FRPS-D1_target/tasklist');
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
    res.redirect('/FRPS-D1_target/tasklist');
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
    res.redirect('/FRPS-D1_target/tasklist');
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
    res.redirect('/FRPS-D1_target/tasklist');
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
    res.redirect('/FRPS-D1_target/tasklist');
});






router.get('/A3059Checked1', function (req, res) { 
    req.session.data.A3059Checked = 'yes';
   res.redirect('/FRPS-D1_target/tasklist');
});

router.get('/A3064Checked1', function (req, res) { 
    req.session.data.A3064Checked = 'yes';
   res.redirect('/FRPS-D1_target/tasklist');
});

router.get('/AMasterChecked1', function (req, res) { 
    req.session.data.AMasterChecked = 'yes';
   res.redirect('/FRPS-D1_target/tasklist');
});

router.get('/I3059Checked1', function (req, res) { 
    req.session.data.I3059Checked = 'yes';
   res.redirect('/FRPS-D1_target/tasklist');
});

router.get('/I3064Checked1', function (req, res) { 
    req.session.data.I3064Checked = 'yes';
   res.redirect('/FRPS-D1_target/tasklist');
});

router.get('/IMasterChecked1', function (req, res) { 
    req.session.data.IMasterChecked = 'yes';
   res.redirect('/FRPS-D1_target/tasklist');
});

router.get('/task3T1', function (req, res) { 
    req.session.data.budgetChecked = 'yes';
   res.redirect('/FRPS-D1_target/tasklist');
});

router.get('/caselistTeam1', function (req, res) { 
    req.session.data.caseAssigned = 'yes';
   res.redirect('/FRPS-D1_target/caselist');
});

router.get('/A3059CheckedFull', function (req, res) { 
    req.session.data.A3059Checked = 'yes';
   res.redirect('/FRPS-D1_target/tasklist-restricted');
});

router.get('/setUserFo1', function (req, res) {
    req.session.data.financeOfficer = 'yes';
   res.redirect('/FRPS-D1_target/tasklist');
});


// D2 routes

router.get('/readMoreT2', function (req, res) { 
    req.session.data.readMore = 'Yes';
   res.redirect('/FRPS-D2/notes#task1');
});

router.get('/task1T2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    switch (req.session.data.decision-task1) {
    case 'Accepted':
        detailsTag = 'govuk-tag--grey';
        detailsStatus = 'Accepted'       
    break;
    case 'Information requested':
        dayName = 'Tuesday';
        break;
    case 'Internal investigation':
        dayName = 'Wednesday';
        break;
    case 'Not accepted':
        dayName = 'Wednesday';
        break;
    default:
        dayName = 'Unknown';
    };
    res.redirect('/FRPS-D2/tasklist');
});




router.get('/AMasterChecked2', function (req, res) { 
    req.session.data.AMasterChecked = 'yes';
   res.redirect('/FRPS-D2/tasklist');
});


router.get('/IMasterChecked2', function (req, res) { 
    req.session.data.IMasterChecked = 'yes';
   res.redirect('/FRPS-D2/tasklist');
});

router.get('/task3T2', function (req, res) { 
    req.session.data.budgetChecked = 'yes';
   res.redirect('/FRPS-D2/tasklist');
});

router.get('/caselistTeam2', function (req, res) { 
    req.session.data.caseAssigned = 'yes';
   res.redirect('/FRPS-D2/caselist');
});

router.get('/failsChecked2', function (req, res) { 
    req.session.data.failedChecked = 'yes';
   res.redirect('/FRPS-D2/tasklist');
});


router.get('/caselistF1', function (req, res) { 
    req.session.data.failReview = 'yes';
   res.redirect('/FRPS-D2/caselist');
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
    case 'Accepted':
        req.session.data.agreeTag = '';
        req.session.data.agreeStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.agreeTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.agreeStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.agreeTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.agreeStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.agreeTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.agreeStatus = 'Not accepted'   
        break;
    default:
        req.session.data.agreeTag = 'govuk-tag';
        req.session.data.agreeStatus = 'Incomplete'
    };
    res.redirect('/FRPS-D1_target/tasklist-agree');
});

router.get('/task2AgT1', function (req, res) { 
    req.session.data.AgreeSChecked = 'yes';
    req.session.data.noteActionAgreeTask2 = req.session.data.decisionAgreeTask2;
    switch (req.session.data.decisionAgreeTask2) {
    case 'Accepted':
        req.session.data.agreeSTag = '';
        req.session.data.agreeSStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.agreeSTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.agreeSStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.agreeSTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.agreeSStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.agreeSTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.agreeSStatus = 'Not accepted'   
        break;
    default:
        req.session.data.agreeSTag = 'govuk-tag';
        req.session.data.agreeSStatus = 'Incomplete'
    };
    res.redirect('/FRPS-D1_target/tasklist-agree');
});


router.get('/task3AgT1', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
    req.session.data.noteActionAgreeTask3Ag = req.session.data.decisionAgreeTask3;
    switch (req.session.data.decisionAgreeTask3) {
    case 'Accepted':
        req.session.data.agreeCTag = '';
        req.session.data.agreeCStatus = 'Accepted'       
    break;
    case 'Information requested':
        req.session.data.agreeCTag = 'govuk-tag  govuk-tag--yellow custom-width-220';
        req.session.data.agreeCStatus = 'Information requested'   
        break;
    case 'Internal investigation':
        req.session.data.agreeCTag = 'govuk-tag govuk-tag--yellow custom-width-220';
        req.session.data.agreeCStatus = 'Internal investigation'   
        break;
    case 'Cannot accept':
        req.session.data.agreeCTag = 'govuk-tag govuk-tag--red-status';
        req.session.data.agreeCStatus = 'Not accepted'   
        break;
    default:
        req.session.data.agreeCTag = 'govuk-tag';
        req.session.data.agreeCStatus = 'Incomplete'
    };
    res.redirect('/FRPS-D1_target/tasklist-agree');
});


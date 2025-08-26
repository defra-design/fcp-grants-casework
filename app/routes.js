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
    }
   res.redirect('/FRPS-PB-D1/caselist-team');
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


// D2 routes

router.get('/readMoreT2', function (req, res) { 
    req.session.data.readMore = 'Yes';
   res.redirect('/FRPS-D2/notes#task1');
});

router.get('/task1T2', function (req, res) { 
    req.session.data.detailsChecked = 'yes';
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

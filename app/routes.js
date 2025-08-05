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
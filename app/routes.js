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
  res.redirect('/FG-casework/home');
});
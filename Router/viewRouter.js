const express = require('express');
const router = express.Router();

getIndexPage = async (req, res) => {
  res.status(200).render('Overview', {
    title: ' ',
  });
};

getCheckerPage = async (req, res) => {
  res.status(200).render('Checker', {
    title: 'Color Checker',
  });
};

getEnhancedPage = async (req, res) => {
  res.status(200).render('Enhanced', {
    title: 'Enhanced Checker',
  });
};

getAboutPage = async (req, res) => {
  res.status(200).render('About', {
    title: 'About us',
  });
};

router.get('/index', getIndexPage);
router.get('/Checker', getCheckerPage);
router.get('/Enhanced', getEnhancedPage);
router.get('/About', getAboutPage);

module.exports = router;

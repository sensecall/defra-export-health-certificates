const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// redirect route to start page
router.get('/', (req, res, next) => {
	res.redirect(`/${req.version}/start`)
})

// set the service name on all pages in this version
router.all('*', function (req, res, next) {
	res.locals['serviceName'] = 'Export health certificates'

	next()
})

router.post('/certificate-number', (req, res, next) => {
	res.redirect('certificate-details')
})

router.post('/certificate-details', (req, res, next) => {
	res.redirect('exports-application')
})



module.exports = router
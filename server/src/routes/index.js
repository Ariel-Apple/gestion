const { Router }= require('express');
const router = Router();
const routerRegister = require('./register_router');
const routerLogin = require('./login_router');
const routerUsers= require('./users_router');
const routerLeads = require('./leads_router')
const routerLotes = require('./lotes_router')




router.use('/', routerRegister, routerLogin, routerUsers, routerLeads, routerLotes)


module.exports = router
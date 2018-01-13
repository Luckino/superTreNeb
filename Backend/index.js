
'use strict'

const mongoose = require('mongoose')
const Log = require('log'), log = new Log('info')
const constantFile = require('./Constant')
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3789
const app = require('./app')
// eslint-disable-next-line no-undef
mongoose.Promise = global.Promise


mongoose.connect(constantFile.db.conectionUrl, {useMongoClient: true})
	.then(() =>{

		log.info(constantFile.db.CONEXION_OK)

		app.listen(port, ()=>{
			log.info(constantFile.db.NODE_EXPRESS_OK)
		})

	}).catch(err => log.error(err))

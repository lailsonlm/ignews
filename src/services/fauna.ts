import { Client } from 'faunadb'
//var faunadb = require('faunadb')

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
  domain: 'db.fauna.com',
})


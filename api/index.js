import express from 'express'
import { MongoClient } from 'mongodb'
import assert from 'assert'
import config from '../config'

let mdb;
MongoClient.connect(config.mongodbUri, (err, database) => {
    //raise an error if error exists
    assert.equal(null, err)

    mdb = database.db('test')
}) 

const router = express.Router()

router.get('/names/:nameIds', (req, res)=>{
    const nameIds = req.params.nameIds.split(',').map(Number)
    let names = {}
    mdb.collection('names').find({ id: {$in: nameIds}})
        .each((err, name) => {
            assert.equal(null, err)

            if (!name){
                res.send({names})
                return
            }

            names[name.id] = name 
        })
})
 
router.get('/contests/:contestId', (req, res)=>{
    mdb.collection('contests')
        .findOne({
            id: Number(req.params.contestId)
        })
        .then(contest => res.send(contest))
        .catch(console.error)
})

export default router
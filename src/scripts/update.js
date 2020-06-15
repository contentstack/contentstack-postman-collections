const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

const SOURCE = './.latest-collection';

const SyncCollection = async (api) => {

  let collection = { collection:JSON.parse(fs.readFileSync(`${SOURCE}/${api}-collection.json`)) }
  collection = JSON.stringify(collection);
  const collectionUid = process.env[`${api.toUpperCase()}_COLLECTION`];

    console.log(api, 'Collection Updating....');
    
    axios({
      method: 'PUT',
      url: `https://api.getpostman.com/collections/${collectionUid}`,
      headers: {
        'X-Api-Key': process.env.POSTMAN_API_KEY,
        'Content-Type': 'application/json',
      },
      data: collection,
    }).then(()=>{ console.log(api, 'Collection Updated....');  })
    .catch(()=>{  console.error('failed', api); })
}

const SyncCollectionAll = async () => {
  apis = process.env.COLLECTIONS.split(',');
  return apis.map((api) => SyncCollection(api));
}

module.exports = {  SyncCollection, SyncCollectionAll }

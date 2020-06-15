# Contentstack Postman Collections

[![Contentstack](https://www.contentstack.com/docs/static/images/contentstack.png)](https://www.contentstack.com/)

This repository contains a script that will take a pull of latest collection and update collection on your system.

[Postman](https://www.getpostman.com/) is a tool that lets you build and test HTTP requests in an easy-to-use interface without configuring a full development environment. For a quick start you can also reffer our docs site for [contentstack.com](https://www.contentstack.com/docs/developers/#use-the-apis)

To import the collection, first `clone` this repository, then open the Postman utility and select the *`Import`* option. Select the *`Folder`* tab from the dialog and drag and drop the cloned repository folder into the target. Or update you collection by providing postman api key and collection uid in *`.env`* file

## Collections

### Auto-generated Collection

A updated Postman Collection is created whenever a new api is added to [Content Delivery API](https://www.contentstack.com/docs/developers/apis/content-delivery-api/) and [Content Management API](https://www.contentstack.com/docs/developers/apis/content-management-api/)


### Content Delivery API Collection.

[![Run in Postman](https://run.pstmn.io/button.svg)]

### Content Management API Collection

[![Run in Postman](https://run.pstmn.io/button.svg)] 

## Development


### Requirements

This project requires a [Node](https://nodejs.org/) environment, with `npm` installed.

### Guide 

To get a new Postman Collections.

```sh
# clone this repo or download it
git clone https://github.com/

# change directory to repo
cd contentstack-postman

# installation
npm install or npm i

# npm start, this command will pull/clone the latest collections.
npm start 

# following command will update your collection
npm run updateAll

# to update one collection
npm run update <collection_name>
```
for understanding working of each api reffer our `Documentation` [Content Delivery API](https://www.contentstack.com/docs/developers/apis/content-delivery-api/) and [Content Management API](https://www.contentstack.com/docs/developers/apis/content-management-api/)
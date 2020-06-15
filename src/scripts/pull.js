const Path = require('../Path');
const Git = require('../Git');
require('dotenv').config();

pull = () => {
    
    const path = new Path(process.env.LOCATION);
    path.Pathprovider();
    
    const git = new Git(path);
    git.Gitpull();
}

module.exports = { pull };
const Pull = require('./src/scripts/pull');
const Update = require('./src/scripts/update');

const App = () => {
    switch (process.argv[2]) {
        case 'clone':
            Pull.pull();
            break;
        case 'update':
            Update.SyncCollection(process.argv[3]);
            break;    
        case 'updateAll':
            Update.SyncCollectionAll();
            break;
        default:
            console.error('Invalid command');
            break;
    }
}

App();
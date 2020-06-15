const LOCATION = '.latest-collection';

class Path {
  constructor (location) {    

    if (!location) { console.error('Missing parameter: No location found'); }

    this.location = location;

    this.LOCATION = location.toUpperCase();
  }

  Pathprovider () {
    const repo = process.env[`${this.LOCATION}_REPO`];
    const [source, branch] = repo.split('#');

    this.folder = `./${LOCATION}/`;
    this.source = source;
    this.branch = branch;
  }
}

module.exports = Path;

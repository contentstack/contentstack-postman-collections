const fs = require('fs');
const { spawnSync } = require('child_process');

class Git {
  constructor(path) {
    this.location = path.folder;
    this.branch = path.branch;
    this.source = path.source;
  }

  Gitpull() {
    if (fs.existsSync(this.location)) {

      const { stderr, stdout } = spawnSync('git', ['pull'], { cwd: this.location });
      
      console.log(stderr.toString());
      console.log(stdout.toString());

    } else {
      const { stderr, stdout } = spawnSync('git', 
                ['clone', '--depth', 1, '--branch', this.branch, this.source, this.location]);

      console.log(stderr.toString());
      console.log(stdout.toString());
    }
  }
}

module.exports = Git;

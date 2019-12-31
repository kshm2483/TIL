const fs = require("fs");
const path = require("path");

class SidebarUtils {
  getFiles(workingdir, targetpath) {
    let target = path.join(__dirname, "../../", targetpath);
    return fs.readdirSync(target).filter(file => {
      return this.isMdFile(path.join(target, file));
    });
  }
  getFilePaths(files, targetDir) {
    return files.map(file => {
      if (file === "README.md") {
        return path.join(targetDir);
      }
      return path
        .join(targetDir, file)
        .replace("\\", "/")
        .replace(".md", "");
    });
  }
  isMdFile(targetPath) {
    return (
      fs.existsSync(targetPath) &&
      fs.statSync(targetPath).isFile() &&
      path.extname(targetPath) === ".md"
    );
  }
}
module.exports = new SidebarUtils();

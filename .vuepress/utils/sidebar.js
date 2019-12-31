const utils = require("./utils");

class SidebarGenerator {
  // default constructor
  constructor() {}
  getSidebarGroup(targetDir = "/", title = "", isCollapsable = true) {
    /**
     * @param {string} targetDir docs내의 directory 지정
     * @param {string} title Sidebar에 보여질 title
     * @param {bool} isCollapsable Sidebar 열고 접는 기능
     */
    let workingDir = "./docs";
    let files = utils.getFiles(workingDir, targetDir);

    let directoryGroup = {
      title: title,
      collapsable: isCollapsable,
      children: utils.getFilePaths(files, targetDir)
    };
    return directoryGroup;
  }
}
module.exports = new SidebarGenerator();

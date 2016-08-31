/**
 * Created by Administrator on 2016/8/31.
 */
var fisSkipRelease = module.exports = {};
module.exports = function() {
    fis.on('deploy:start', function(groups) {
        groups.forEach(function(group) {
            var modified = group.modified;
            var total = group.total;
            var file;
            var i = modified.length - 1;
            while ((file = modified[i--])) {
                if (file.compileButNotRelease) {
                    modified.splice(i + 1, 1);
                }
            }
            i = total.length - 1;
            while ((file = total[i--])) {
                if (file.compileButNotRelease) {
                    total.splice(i + 1, 1);
                }
            }
        });
    });
}();

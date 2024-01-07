
var FileSystem = function () {
    this.map = {};
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function (path, value) {
    const array = path.split('/').slice(1);
    return recurse(array, 0, this.map)

    function recurse(array, i, submap) {
        // base, creating or overwriting
        const pathSegment = array[i];
        if (i === array.length - 1) {
            if (submap[pathSegment]) return false;

            submap[pathSegment] = {};
            submap[pathSegment]['/'] = value;
            return true;
        } else {
            if (submap[pathSegment]) {
                return recurse(array, i + 1, submap[pathSegment])
            } else {
                return false;
            }
        }
    }
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function (path) {

    const array = path.split('/').slice(1);
    return recurse(array, 0, this.map);

    function recurse(array, i, submap) {
        // base, creating or overwriting
        const pathSegment = array[i];
        if (i === array.length - 1) {
            return submap[pathSegment] ? submap[pathSegment]['/'] : -1;
        } else {
            if (submap[pathSegment]) {
                return recurse(array, i + 1, submap[pathSegment])
            } else {
                return -1;
            }
        }
    }
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
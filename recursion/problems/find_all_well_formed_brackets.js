
/**
 * @param {int32} n
 * @return {list_str}
 */
function find_all_well_formed_brackets(n) {
    const result = [];
    
    const arr = [];
    for(let i = 1; i <=n; i++) {
        arr.push(')');
        arr.push('(')
    }
    
    helper(0, [])
    return result;
    
    function helper(i, slate) {
        // if # closing parents > # opening parents, return.
        // if any parent type exceeds n, return, because perm won't be balanced.
        if (violation(slate)) {
         return;   
        }
        
        if (i === arr.length) {// same as n
            return result.push(slate.join('')); // copy of slate 
        }
        
        // recursive cases
        // add choice 1
        slate.push(')');
        helper(i + 1, slate);
        slate.pop();
        // add choice 2
        slate.push('(');
        helper(i + 1, slate);
        slate.pop();
    }
    
    function violation(slate) {
        // make a freq map
        // loop and count
        let opening = 0;
        let closing = 0;
        slate.forEach(el => {
            if (el === '(') {
                opening++;
            } else {
                closing++;
            }
        })
        // if we ever close more than we open it is a violation
        if (closing > opening) {
            return true;
        }
        // we need to make sure both opening and closing are <= n
        if (opening > n) return true;
        if (closing > n) return true;
        return false;
    }

}


console.log('\n******************** OUTPUT ************\n');


let result = find_all_well_formed_brackets(7);
console.log('result:', result)
console.log('\n******************** ************\n')



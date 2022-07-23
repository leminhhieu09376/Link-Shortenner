import React from 'react'

const Bai2 = () => {
    function alternatingSums(a) {
        let ans = [];
        let x = 0;
        let y = 0;
        for (let i = 0; i < a.length; i = i + 2) {
            x = x + a[i]
        }
        for (let i = 1; i < a.length; i = i + 2) {
            y = y + a[i]
        }
        ans.push(x, y)
        return ans
    }
    console.log(alternatingSums([60, 40, 55, 75, 64]));
    return (
        <div></div>
    )
}

export default Bai2
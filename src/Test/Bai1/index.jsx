import React from 'react'

const Bai1 = () => {

    function adjacentElementsProduct(inputArray) {
        var product = 0;
        for (var i = 0; i < inputArray.length - 1; i++) {
            product = Math.max(product, inputArray[i] * inputArray[i + 1]);
        }
        return product;
    }

    console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));
    return (
        <div></div>
    )
}

export default Bai1
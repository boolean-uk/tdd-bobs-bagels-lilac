class Receipt {
    getReceipt(basket, totalPrice) {
        let date = new Date()
        let receipt = ""

        receipt += "===============\n"

        receipt += ` Date: ${date}\n`

        receipt += " Total: ${totalPrice}\n"

        return receipt
    }

}

module.exports = Receipt;
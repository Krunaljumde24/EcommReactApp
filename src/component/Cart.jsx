import React from 'react'

function Cart() {
    return (
        <div className='mx-20'>
            <div className="flex gap-4 m-4">
                <div className='basis-3/5'>
                    <div className="border rounded-lg shadow overflow-hidden">
                        <table className="rounded-xl min-w-full divide-y divide-gray-200">
                            <thead className="bg-slate-400 text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs  uppercase">Product</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs  uppercase">Price</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs  uppercase">Qty</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs  uppercase">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        Mac Book Air
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        1110000
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        2
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm">
                                        2220000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='basis-2/5'>
                    <div className="border rounded-lg shadow  overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-slate-400 text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium uppercase">Cart Total</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium uppercase">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        SUB TOTAL
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        <p>₹ 2345</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        DISCOUNT
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        <p>₹ 430</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        TOTAL
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        <p>₹ 1915</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default Cart
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santy',
        total: 180,
        delivered: false,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
    {
        customerName: 'Sofi',
        total: 200,
        delivered: false,
    },
];

const deliveredOrdersRepaso = orders.filter(order => order.delivered === false).map(order => ({
        customerName: order.customerName,
        delivered: order.delivered
}))
console.log(deliveredOrdersRepaso);




const deliveredOrders = orders.filter(order => order.delivered).map(order => ({
    customerName: order.customerName,
    delivered: order.delivered, 
}))


const deliveredNHundred = orders.filter(order => order.delivered && order.total > 100)

// const search = (query) => {
//     return orders.filter(order => {
//         return order.customerName.includes(query);
//     })
// }

const search = (query) => {
    return orders.filter(order => {
        return order.customerName.includes(query)
    })
}

console.log(search('a'));

function filterByLength(array) {
    return array.filter(word => word.length >= 4)
}


const arrayy  = ['amor', 'sol', 'piedra', 'día'];
console.log(filterByLength(arrayy));

  
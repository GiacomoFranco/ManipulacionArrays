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
];

const addTaxes = orders.map(order => ({...order, tax: '19%', taxAdded: Math.trunc(order.total * .19)}))

console.log(addTaxes);


const ordersWithMap = orders.map(order => {
  return{
      ...order,
      tax: 0.10
  }
})

console.log(orders);
console.log(ordersWithMap);


const arr = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 656,
    stock: 20,
  },
];

export function addNewAttr(array) {
 return array.map(product => ({...product, tax: Math.trunc(product.price * .19)}))
}

console.log(addNewAttr(arr));
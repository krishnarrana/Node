// const p = Promise.reject(new Error('reason for rejection ....'));

// p.catch(result => {
//     return console.log(result)
// })

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation  1..')
        resolve(1)
    }, 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2..')
        reject(new Error('some thing failed'))
    }, 2000)
})
Promise.all([p1, p2])
    .then((data) => {
        console.log(data)
    })
    .catch(err => console.log('Error ', err.message))
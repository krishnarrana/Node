async function notifyCustomer() {

    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold) {
        const movies = await getTopMovies();
        console.log('Top movies: ', movies);
        const email = await sendEmail(customer.email, movies);
        console.log(email)
    }

}
notifyCustomer()
function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Mosh Hamedani',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    })

}



function getTopMovies(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    })

}

function sendEmail(email, movies, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Email sent...');
        }, 4000);
    })

}
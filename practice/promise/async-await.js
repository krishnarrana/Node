async function getUsers(user) {

    let p = new Promise(res => {
        setTimeout(() => {
            console.log('After async operation 1')
            res(user)
        }, 2000);
    })
    let result = await p;
    console.log(result);
}

getUsers('krishna')
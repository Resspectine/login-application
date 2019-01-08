function initializeFakeBackend() {
    window.fetch = (url, {method, body}) => {
        if ('/login' && method === 'POST') {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (body) {
                        const {name, password} = body;
                        if (name === 'Admin' && password === '12345') {
                            resolve({ok: true, body: {name, password}});
                        } else {
                            reject('Incorrect name or password');
                        }
                    } else {
                        reject('Enter username or password');
                    }
                }, 2000);
            })
        }
    }
}

export default initializeFakeBackend;

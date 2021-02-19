export let reqSHSJ = function () {
    return fetch('./data/json/shsj.json')
        .then(function (response) {
            return response.json();
        })
}

export let reqCGSJ = function () {
    return fetch('./data/json/cgsj.json')
        .then(function (response) {
            return response.json();
        })
}
import axios from 'axios';

const url = 'http://localhost:8000';

export function login(username, password, on_response) {
    axios.post(url + '/accounts/login', {
        username:username,
        password:password,
    })
    .then(function (response) {
        let json = response['data'];
        on_response(json);
    })
    .catch(function (error) {
        console.log(error);
    })
}


export function signup(name, username, password, on_response) {
    axios.post(url + '/accounts/signup', {
        name:name,
        username:username,
        password:password,
    })
    .then(function (response) {
        let json = response['data'];
        on_response(json);
    })
    .catch(function (error) {
        console.log(error);
    })
}


export function get_days(username, on_response) {
    axios.post(url + '/study/get_days', {
        username:username,
    })
    .then(function (response) {
        let json = response['data'];
        on_response(json);
    })
    .catch(function (error) {
        console.log(error);
        alert('Network Err.')
    })
}


export function add_day(username, items, on_response) {
    axios.post(url + '/study/view2', {
        username:username,
        items:items,
    })
    .then(function (response) {
        let json = response['data'];
        on_response(json);
    })
    .catch(function (error) {
        console.log(error);
        alert('Network Err.')
    })
}

import axios from 'axios';

// const url = 'http://localhost:8000';
// const url = 'https://guarded-taiga-94931.herokuapp.com';
const url = 'http://192.168.1.180:8000';

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
        console.log('error');
        console.log(error);
        alert('Network Err.')
    })
}


export function add_day(username, items, on_response) {
    axios.post(url + '/study/add_day', {
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


export function edit_day(username, day_pk, items, on_response) {
    axios.post(url + '/study/edit_day', {
        username:username,
        day_pk:day_pk,
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


export function get_students(username, on_response) {
    axios.post(url + '/study/get_students', {
        username:username,
    })
    .then(function (response) {
        let json = response['data'];
        console.log(json)
        on_response(json);
    })
    .catch(function (error) {
        console.log(error);
        alert('Network Err.')
    })
}

export function add_comment(teacher_username, student_username, text, day_pk, on_response) {
    axios.post(url + '/study/add_comment', {
        teacher_username:teacher_username,
        student_username:student_username,
        day_pk:day_pk,
        text:text,
    })
    .then(function (response) {
        let json = response['data'];
        console.log(json)
        on_response(json);
    })
    .catch(function (error) {
        console.log(error);
        alert('Network Err.')
    })
}


export function get_comment(day_pk, on_response) {
    axios.post(url + '/study/get_comment', {
        day_pk:day_pk,
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

export function get_date(on_response) {
    axios.post(url + '/back/get_today')
    .then(function (response) {
        let json = response['data'];
        on_response(json);
    })
    .catch(function (error) {
        console.log(error);
        alert('Network Err.')
    })
}


export function get_teachers(on_response) {
    axios.post(url + '/accounts/get_teachers')
    .then(function (response) {
        let json = response['data'];
        on_response(json);
    })
    .catch(function (error) {
        console.log(error);
        alert('Network Err.')
    })
}





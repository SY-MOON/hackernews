import axios from 'axios';


//HTTP request, response 관련 기본 설정
const config = {
	baseUrl: 'https://api.hnpwa.com/v0/'
}

//api 함수 정리
function fetchNewsList() {
	return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
	return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`)
}


export {
	fetchNewsList,
	fetchAskList,
	fetchJobsList
}


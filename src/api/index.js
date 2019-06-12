import axios from 'axios';

// 1. Base Config of HTTP Request & Response
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API Functions
const fetchNewsList = () => axios.get(`${config.baseUrl}news/1.json`);
const fetchAskList = () => axios.get(`${config.baseUrl}ask/1.json`);
const fetchJobsList = () => axios.get(`${config.baseUrl}jobs/1.json`);

export { fetchNewsList, fetchAskList, fetchJobsList };

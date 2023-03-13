import axios from "axios";

// HTTP Request & Response 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// API 함수 정리
function fetchNewsList() {
  //   return axios.get(config.baseUrl + "news/1.json");
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
  //   return axios.get(config.baseUrl + "jobs/1.json");
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
  return axios.get(config.baseUrl + "ask/1.json");
}

function fetchShowList() {
  return axios.get(config.baseUrl + "show/1.json");
}

function fetchNewestList() {
  return axios.get(config.baseUrl + "newest/1.json");
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItemsInfo(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchNewestList,
  fetchShowList,
  fetchUserInfo,
  fetchItemsInfo,
};

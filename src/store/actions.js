import {
  // fetchAskList,
  // fetchJobsList,
  // fetchNewsList,
  fetchUserInfo,
  fetchItemsInfo,
  fetchList
} from "../api/index.js";

export default {
  // FETCH_NEWS(context) {
  //   // context는 mutations를 제어하기 위하여 기본 제공
  //   fetchNewsList()
  //     .then((response) => {
  //       //   console.log(response);

  //       // mutations를 제어하기 위하여 commit 사용
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })

  //     .catch((error) => console.log(error));
  // },

  // // context 안에 commit가 있기 때문에 ({commit})로 commit를 바로 사용 가능 ({data})도 같은 맥락
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => {
    
  //       commit("SET_JOBS", data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  // // context 안에 commit가 있기 때문에 ({commit})로 commit를 바로 사용 가능 ({data})도 같은 맥락
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => {
        
  //       commit("SET_ASK", data);
  //     })
  //     .catch((error) => console.log(error));
  // },

  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        
        commit("SET_USER", data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_ITEMS({ commit }, id) {
    fetchItemsInfo(id)
      .then(({ data }) => {
        
        commit("SET_ITEMS", data);
      })
      .catch((error) => console.log(error));
  },

  FETCH_LIST({commit}, pageName){
    fetchList(pageName)
    .then(({data})=> commit('SET_LIST', data) )
    .catch(error => console.log(error));
  }
};

import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
  fetchItemsInfo,
  fetchList,
} from "../api/index.js";

export default {
  //promise
  // FETCH_NEWS(context) {
  //   // context는 mutations를 제어하기 위하여 기본 제공
  //   return fetchNewsList()
  //     .then(response => {
  //       //   console.log(response);

  //       // mutations를 제어하기 위하여 commit 사용
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })

  //     .catch(error => console.log(error));
  // },

  // async
  async FETCH_NEWS({ commit }) {
    const { data } = await fetchNewsList();
    commit("SET_NEWS", data);
    return data;
  },

  // context 안에 commit가 있기 때문에 ({commit})로 commit를 바로 사용 가능 ({data})도 같은 맥락
  async FETCH_JOBS({ commit }) {
    try {
      const { data } = await fetchJobsList();
      commit("SET_JOBS", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  // context 안에 commit가 있기 때문에 ({commit})로 commit를 바로 사용 가능 ({data})도 같은 맥락
  async FETCH_ASK({ commit }) {
    const { data } = await fetchAskList();
    commit("SET_ASK", data);
    return data;
  },

  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch(error => console.log(error));
  },

  FETCH_ITEMS({ commit }, id) {
    return fetchItemsInfo(id)
      .then(({ data }) => {
        commit("SET_ITEMS", data);
      })
      .catch(error => console.log(error));
  },

  async FETCH_LIST({ commit }, pageName) {
    try {
      const { data } = await fetchList(pageName);
      commit("SET_LIST", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

import axios from 'axios'

const setAuthToken = (token) => {
  if (token) {
    // ログインしている場合はすべてのリクエストに認証トークンを適用する
    axios.defaults.headers.common['Authorization'] = token
  } else {
    // 認証ヘッダーを削除する
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken

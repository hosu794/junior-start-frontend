const setToken = async (token) => {
    await localStorage.setItem("oauthtoken", token)
}

function logout() {
    localStorage.removeItem("oauthtoken");
}



export const oauth2Service = { setToken, logout }
// auth
export const selectToken = state => state.auth.token;
export const selectIsLogin = state => state.auth.isLoggedIn;
export const selectIsUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

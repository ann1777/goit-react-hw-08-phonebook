export const users = state => state.auth.users;
export const currentUser = state => state.auth.user;
export const getUserName = state => state.auth.user.name;
export const getUserIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;
export const getAuthError = state => state.auth.error;
export const getIsLoading = state => state.auth.IsLoading;
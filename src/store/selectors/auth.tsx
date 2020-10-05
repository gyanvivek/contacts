const isAuthenticated = (state: any) => state.auth.isAuthenticated;

const loading = (state: any) => state.auth.loading;

const userData = (state: any) => state.auth.data.profileObj;

export default { isAuthenticated, loading, userData };

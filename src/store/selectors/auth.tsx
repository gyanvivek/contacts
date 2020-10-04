const isAuthenticated = (state:any )=> state.auth.isAuthenticated;

const loading = (state : any) => state.auth.loading;

export default { isAuthenticated ,loading};

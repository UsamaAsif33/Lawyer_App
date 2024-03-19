const ROUTES_OBJ = {
  Signup: '/api/auth/sign-up',
  Login: '/api/auth/login',
  GetLawyers: '/api/lawyer/get-lawyers',
  GetUserPostedJobs: '/api/job/get-user-posted-jobs?',
  GetPostedJobs: '/api/job/get-posted-jobs?',
  GetJobs: '/api/job/get-jobs',
  GetJob: '/api/job/get-job/',
  PostJob: '/api/job/post-job',
  GetMyJobs: '/api/job/get-my-jobs',
  GetCategories:'/api/job/get-categories',
  BuyPlan:'/api/auth/buy-plan',
  GetSubscriptions:'/api/admin/subscription/get-subscriptions',
  GetUserData:'/api/auth/me'
};

const getRoute = (routeName, params = {}) => {
  let url = ROUTES_OBJ[routeName];
  return url;
};

export default getRoute;

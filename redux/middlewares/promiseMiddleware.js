export default () => next => action => { // Deprecated
  if (!action.promise) {
    return next(action);
    // test
  }
  next({
    ...action,
    type: action.type.PENDING,
  });
  const actionPromise = new Promise((resolve, reject) => (
    action.promise
      .then(response => resolve(next({ ...action, type: action.type.RESOLVED, ...response })))
      .catch(error => reject(next({ ...action, type: action.type.REJECTED, error })))
  ));
  return actionPromise;
};

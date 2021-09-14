import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { addCommentSagas } from "../modules/PostsList/AddComment/AddComment.sagas";
import { postsReducer } from "../modules/PostsList/PostsLists.reducer";
import { postListsSagas } from "../modules/PostsList/PostsLists.sagas";

const rootReducer = combineReducers({
  posts: postsReducer,
});

function* rootSaga(): Generator {
  yield all([yield fork(postListsSagas), yield fork(addCommentSagas)]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middlewares));

sagaMiddleware.run(rootSaga);

export default store;

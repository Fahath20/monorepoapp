import * as actions from './common/business/redux/actions/articleAction'
import * as types from './common/business/redux/actionTypes/articleActionTypes'


describe('actions', () => {
  it('should create an action to add a todo', () => {
    const articles = ["articles"]
    const expectedAction = {
      type: types.SET_ARTICLE_DETAILS,
      payload: articles
    }
    expect(actions.setArticleDetails(articles)).toEqual(expectedAction)
  })
})
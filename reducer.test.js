import reducer from './common/business/redux/reducers/articleReducer'
import * as types from './common/business/redux/actionTypes/articleActionTypes'


//Business logic test, here we check whether implemented logic is working on storing articles information used in the app
describe('articles reducer', () => {

  it('should handle SET_ARTICLE_DETAILS', () => {
    expect(
      reducer([], {
        type: types.SET_ARTICLE_DETAILS,
        payload: ["article 1", "article 2"]
      })
    ).toEqual({data: ["article 1", "article 2"]})
  })
})
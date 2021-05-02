import reducer from './common/business/redux/reducers/articleReducer'
import * as types from './common/business/redux/actionTypes/articleActionTypes'

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
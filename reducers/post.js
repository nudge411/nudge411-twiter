export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: '넛지',
      },
      content: '이새기 뭐라는지 하나도 모르겠네',
      img:
        'https://mblogthumb-phinf.pstatic.net/MjAxNzA3MDNfMTkg/MDAxNDk5MDU5MDAyNzUw.Sfl9pMVF4t05vyKTIaZNopbUlEhYJSqWu_QlmihW-Lsg.HAS5NsYee9lAZDbrbZvaIm0iz70gCqZliVyGa6TnHfUg.JPEG.dlgydnjs2004/16790130_1762078090786540_944302028073467904_n.jpg?type=w800',
    },
  ],
  imagePaths: [],
};

const ADD_POST = 'ADD_POST'; // 액션 이름
const ADD_DUMMY = 'ADD_DUMMY'; // 액션 이름

export const addPost = {
  type: ADD_POST,
};

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: '제로초',
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;

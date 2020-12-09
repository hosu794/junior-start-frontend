import { projectConstants } from "../constants";

const intialState = {
  projects: [],
  loading: false,
  size: 0,
  totalElement: 0,
  last: false,
  page: 0,
};

export function project(state = intialState, action) {
  switch (action.type) {
    case projectConstants.GET_ALL_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case projectConstants.GET_ALL_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        projects: [...state.projects, ...action.payload.content],
        size: action.payload.size,
        totalElement: action.payload.totalElement,
        last: !action.payload.last,
      };
    case projectConstants.DELETE_PROJECT_REQUEST:
      return {
        ...state,
        projects: state.projects.filter((v) => v.id !== action.payload),
        loading: true,
      };
    case projectConstants.GET_BY_TITLE_REQUEST:
    case projectConstants.DELETE_PROJECT_SUCCESS:
    case projectConstants.UPDATE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case projectConstants.UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: state.projects.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };
    case projectConstants.GET_ALL_PROJECT_FAILURE:
    case projectConstants.CREATE_PROJECT_FAILURE:
    case projectConstants.DELETE_PROJECT_FAILURE:
    case projectConstants.GET_BY_TITLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case projectConstants.GET_BY_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentItem: action.payload,
      };
    default:
      return state;
  }
}

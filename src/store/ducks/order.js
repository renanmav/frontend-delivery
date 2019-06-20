export const Types = {
  INDEX_REQUEST: 'order/INDEX_REQUEST',
  INDEX_SUCCESS: 'order/INDEX_SUCCESS',
  INDEX_FAILURE: 'order/INDEX_FAILURE',
};

const INITIAL_STATE = {
  orders: [],
  message: '',
};

export default function Order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.INDEX_SUCCESS:
      return {
        ...state,
        orders: action.payload.orders,
      };
    case Types.INDEX_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
}

export const Creators = {
  indexSuccess: orders => ({
    type: Types.INDEX_SUCCESS,
    payload: { orders },
  }),
  indexFailure: message => ({
    type: Types.INDEX_FAILURE,
    payload: { message },
  }),
};

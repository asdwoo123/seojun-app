import { createAction, handleActions } from 'redux-actions';
import io from 'socket.io-client';

const TurkSignalLight_GREEN = 'TurkSignalLight_GREEN';
const TurkSignalLight_RED = 'TurkSignalLight_RED';
const BalluffSignalLightB1 = 'BalluffSignalLightB1'
const BalluffSignalLightB2 = 'BalluffSignalLightB2'
const BalluffSignalLightB3 = 'BalluffSignalLightB3'
const BalluffSignalLightB4 = 'BalluffSignalLightB4'
const BalluffSignalLightB5 = 'BalluffSignalLightB5'
const BalluffSignalLightB6 = 'BalluffSignalLightB6'
const BalluffSignalLightB7 = 'BalluffSignalLightB7'
const C_Total = 'C_Total';
const uliPC_Schift_OK = 'uliPC_Schift_OK';
const uliPC_Schift_NOK = 'uliPC_Schift_NOK';

const getTurkSignalLight_GREEN = createAction(TurkSignalLight_GREEN);
const getTurkSignalLight_RED = createAction(TurkSignalLight_RED);
const getBalluffSignalLightB1 = createAction(BalluffSignalLightB1);
const getBalluffSignalLightB2 = createAction(BalluffSignalLightB2);
const getBalluffSignalLightB3 = createAction(BalluffSignalLightB3);
const getBalluffSignalLightB4 = createAction(BalluffSignalLightB4);
const getBalluffSignalLightB5 = createAction(BalluffSignalLightB5);
const getBalluffSignalLightB6 = createAction(BalluffSignalLightB6);
const getBalluffSignalLightB7 = createAction(BalluffSignalLightB7);
const getC_Total = createAction(C_Total);
const getuliPC_Schift_OK = createAction(uliPC_Schift_OK);
const getuliPC_Schift_NOK = createAction(uliPC_Schift_NOK);

export function socketDataLoad() {
    return (dispatch) => {
        this.socketOnStart('http://14.37.152.122:3000', dispatch);
        this.socketOnStart('http://192.168.0.118:3000', dispatch);
    }
}

function socketOnStart(socketUrl, dispatch) {
    const socket = io(`${socketUrl}`, {
        path: '/socket.io'
    });

    socket.on('connect', () => {
        socket.on('TurkSignalLight_GREEN', (data) => {
            dispatch(getTurkSignalLight_GREEN(data));
        });
        socket.on('TurkSignalLight_RED', (data) => {
            dispatch(getTurkSignalLight_RED(data));
        });
        socket.on('BalluffSignalLightB1', (data) => {
           dispatch(getBalluffSignalLightB1(data));
        });
        socket.on('BalluffSignalLightB2', (data) => {
            dispatch(getBalluffSignalLightB2(data));
        });
        socket.on('BalluffSignalLightB3', (data) => {
            dispatch(getBalluffSignalLightB3(data));
        });
        socket.on('BalluffSignalLightB4', (data) => {
            dispatch(getBalluffSignalLightB4(data));
        });
        socket.on('BalluffSignalLightB5', (data) => {
            dispatch(getBalluffSignalLightB5(data));
        });
        socket.on('BalluffSignalLightB6', (data) => {
            dispatch(getBalluffSignalLightB6(data));
        });
        socket.on('BalluffSignalLightB7', (data) => {
            dispatch(getBalluffSignalLightB7(data));
        });
        socket.on('C_Total', (data) => {
            dispatch(getC_Total(data));
        });
        socket.on('C_OK', (data) => {
            dispatch(getuliPC_Schift_OK(data));
        });
        socket.on('C_NOK', (data) => {
            dispatch(getuliPC_Schift_NOK(data));
        });
    });
}

const initialState = {
    TurkSignalLight_GREEN: false,
    TurkSignalLight_RED: false,
    BalluffSignalLightB1: '0',
    BalluffSignalLightB2: '0',
    BalluffSignalLightB3: '0',
    BalluffSignalLightB4: '0',
    BalluffSignalLightB5: '0',
    BalluffSignalLightB6: '0',
    BalluffSignalLightB7: '0',
    C_Total: '0',
    uliPC_Schift_OK: '0',
    uliPC_Schift_NOK: '0'
}

export default handleActions({
    [TurkSignalLight_GREEN]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            TurkSignalLight_GREEN: data
        }
    },
    [TurkSignalLight_RED]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            TurkSignalLight_RED: data
        }
    },
    [BalluffSignalLightB1]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            BalluffSignalLightB1: data
        }
    },
    [BalluffSignalLightB2]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            BalluffSignalLightB2: data
        }
    },
    [BalluffSignalLightB3]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            BalluffSignalLightB3: data
        }
    },
    [BalluffSignalLightB4]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            BalluffSignalLightB4: data
        }
    },
    [BalluffSignalLightB5]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            BalluffSignalLightB5: data
        }
    },
    [BalluffSignalLightB6]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            BalluffSignalLightB6: data
        }
    },
    [BalluffSignalLightB7]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            BalluffSignalLightB7: data
        }
    },
    [C_Total]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            C_Total: data
        }
    },
    [uliPC_Schift_OK]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            uliPC_Schift_OK: data
        }
    },
    [uliPC_Schift_NOK]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            uliPC_Schift_NOK: data
        }
    }
}, initialState);

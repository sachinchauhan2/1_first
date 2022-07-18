// export default (state) => {
//     return {
//         type: 'UPDATE_STATUS',
//         payload: state
//     }
// }

import { createAction } from '@reduxjs/toolkit'


export const updateStatus = createAction('UPDATE_STATUS')
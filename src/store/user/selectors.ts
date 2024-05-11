import { RootState } from "store/types"


export const selectEmail = (state: RootState) => state.auth.email
export const selectToken = (state: RootState) => state.auth.token
export const selectId = (state: RootState) => state.auth.id
export const selectIsLoading = (state: RootState) => state.auth.isLoading
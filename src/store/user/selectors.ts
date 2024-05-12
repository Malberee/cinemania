import { RootState } from "store/types"


export const selectEmail = (state: RootState) => state.user.email
export const selectToken = (state: RootState) => state.user.token
export const selectId = (state: RootState) => state.user.id
export const selectLibrary = (state: RootState) => state.user.library
export const selectIsLoading = (state: RootState) => state.user.isLoading
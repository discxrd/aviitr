import { createSlice } from "@reduxjs/toolkit/react";
import { RootState } from "app/store";

type SessionSliceState =
  | {
      accessToken: string;
      isAuthorized: true;
    }
  | {
      isAuthorized: false;
      accessToken?: string;
    };

const initialState: SessionSliceState = {
  isAuthorized: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionData: (state, action) => {
      state.accessToken = action.payload.access_token;
      state.isAuthorized = true;
    },
    clearSessionData: (state) => {
      state.accessToken = undefined;
      state.isAuthorized = false;
    },
  },
});

export const selectIsAuthorized = (state: RootState) =>
  state.session.isAuthorized;

// export const selectIsAdmin = (state: RootState) => state.session.isAdmin;

// export const selectUserId = (state: RootState) => state.session.userId;

export const selectAccessToken = (state: RootState) =>
  state.session.accessToken;

export const { clearSessionData } = sessionSlice.actions;

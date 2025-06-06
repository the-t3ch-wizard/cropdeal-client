import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WhoAmIResponse } from '@/services/authService'

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  user: {
    userId: string;
    name: string;
    email: string;
    role: string;
  } | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('authToken'),
  isLoggedIn: !!localStorage.getItem('authToken'),
  isLoading: true,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      state.isLoggedIn = true
      localStorage.setItem('authToken', action.payload)
    },
    setUser: (state, action: PayloadAction<WhoAmIResponse>) => {
      state.user = {
        userId: action.payload.userId,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
      }
      state.isLoading = false
    },
    logout: (state) => {
      state.token = null
      state.isLoggedIn = false
      state.user = null
      state.isLoading = false
      localStorage.removeItem('authToken')
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
})

export const { setToken, setUser, logout, setLoading } = authSlice.actions
export default authSlice.reducer


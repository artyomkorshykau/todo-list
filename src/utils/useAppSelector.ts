import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppRootState } from '@/types/app/type'

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector

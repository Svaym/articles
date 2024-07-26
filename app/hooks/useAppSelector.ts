import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store/store';

// Создаем типизированный хук для useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

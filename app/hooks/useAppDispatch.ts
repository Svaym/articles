import { useDispatch, useStore } from 'react-redux';
import type { AppDispatch } from '../store/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

import { atom } from 'recoil';

export const showHeaderAtom = atom({
  key: 'ShowHeaderAtom',
  default: true
});

export const showFooterAtom = atom({
  key: 'ShowFooterAtom',
  default: true
});

import { useRequest } from './request';
import { ISong } from './types';
const useSongDetail = (id: number) =>
  useRequest<{ ids: number }, { songs: ISong[] }, unknown>({
    url: '/song/detail',
    params: {
      ids: id,
    },
    key: `songDetail-${id}`,
  });
const useSongUrl = (id: number) =>
  useRequest<{ id: number }, { data: ISong[] }, unknown>({
    url: '/song/url',
    params: { id },
    key: `songUrl-${id}`,
  });

export { useSongDetail, useSongUrl };

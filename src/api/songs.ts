import { useRequest } from './request';
import { ISong } from './types';
const useSongDetail = (id: number) =>
  useRequest<{ ids: number }, { songs: ISong[] }>({
    url: '/song/detail',
    params: {
      ids: id,
    },
    key: `songDetail-${id}`,
  });
const useSongUrl = (id: number) =>
  useRequest<{ id: number }, { data: ISong[] }>({
    url: '/song/url',
    params: { id },
    key: `songUrl-${id}`,
  });

export { useSongDetail, useSongUrl };

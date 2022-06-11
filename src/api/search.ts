import { useRequest } from './request';
import { ESearchType, ISearchResultList } from './types';

const useSearchSongByKeyword = (
  keywords: string,
  type: ESearchType = ESearchType.单曲,
  limit = 10,
  offset = 1,
) =>
  useRequest<
    {
      keywords: string;
      type: ESearchType;
      limit: number;
      offset: number;
    },
    { result: ISearchResultList }
  >({
    url: '/cloudsearch',
    params: {
      keywords,
      type,
      limit,
      offset,
    },
    key: `songDetail-${keywords}-${type}-${limit}-${offset}`,
  });

export { useSearchSongByKeyword };

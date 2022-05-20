import { useQuery } from 'react-query';
import { useAxios } from './request';
import qs from 'qs';
import { ESearchType, IResult, ISearchResultList } from './types';

const useSearchMusicByKeyword = (
  keywords: string,
  type: ESearchType = ESearchType.单曲,
  limit = 10,
  offset = 1,
) => {
  const axios = useAxios();
  const service = async () => {
    const params = {
      keywords,
      type,
      limit,
      offset: (offset - 1) * limit,
    };
    const data: IResult<ISearchResultList> = await axios.get(`/cloudsearch`, {
      params,
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    });
    return data;
  };
  return useQuery('SearchMusicByKeyword', () => service());
};

export { useSearchMusicByKeyword };

export interface IResult<T> {
  code: number;
  result: T;
}

export enum ESearchType {
  '单曲' = '1',
  '专辑' = '10',
  '歌手' = '100',
  '歌单' = '1000',
  '用户' = '1002',
  'MV' = '1004',
  '歌词' = '1006',
  '电台' = '1009',
  '视频' = '1014',
  '综合' = '1018',
}

export interface ISearchResultList {
  searchQcReminder: unknown; // 搜索质量提醒
  songCount: 300; // 搜索结果总数
  songs: ISong[]; // 搜索结果
}

export interface ISong {
  name: string; // 歌曲名
  id: number; // 歌曲id
}

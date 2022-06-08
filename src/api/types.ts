export interface IResult {
  code: number;
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
  songs: ISearchSongResult[]; // 搜索结果
}

export type ISearchSongResult = Pick<ISong, 'name' | 'ar' | 'id'>;

export interface ISongAuthor {
  id: number;
  name: string;
}

export interface ISong {
  name: string; // 歌曲名
  id: number; // 歌曲id
  ar: ISongAuthor[]; // 歌曲作者
  al: ISongAlbum; // 歌曲专辑
  url?: string; // 歌曲链接
}

export interface ISongAlbum {
  id: number; // 专辑id
  name: string; // 专辑名
  picUrl: string; // 专辑图片
}

export interface IUserAccount {
  id: string; // 用户id
  userName: string; // 用户姓名
}

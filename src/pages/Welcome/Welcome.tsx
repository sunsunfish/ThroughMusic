import { useSearchSongByKeyword } from '@/api';
import { ISearchSongResult } from '@/api/types';
import Meta from '@/components/Meta';
import { useEffect, useState } from 'react';

function Welcome() {
  const [songs, setSongs] = useState<ISearchSongResult[]>();

  const { data, error, isLoading } = useSearchSongByKeyword('夜に駆ける');

  useEffect(() => {
    setSongs(data?.result.songs);
  }, [data]);

  return (
    <>
      <Meta title="HomePage" />
      {isLoading}
      {error}
      {songs?.map((song) => {
        return (
          <div key={song.id}>
            <h1>
              id:{song.id} name:{song.name} ar:{song.ar.map((ar) => ar.name).join('/')}
            </h1>
          </div>
        );
      })}
    </>
  );
}

export default Welcome;

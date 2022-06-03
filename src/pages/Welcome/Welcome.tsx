import { useSearchMusicByKeyword } from '@/api';
import { ISong } from '@/api/types';
import Meta from '@/components/Meta';
import { useEffect, useState } from 'react';

function Welcome() {
  const [songs, setSongs] = useState<ISong[]>();

  const { data, error, isLoading } = useSearchMusicByKeyword('大家一起喜羊羊');

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
              id:{song.id} name:{song.name}
            </h1>
          </div>
        );
      })}
    </>
  );
}

export default Welcome;

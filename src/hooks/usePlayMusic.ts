import { useSongDetail, useSongUrl } from '@/api/music';
import { ISong } from '@/api/types';
import { useEffect, useState } from 'react';
import { useAudio } from 'react-use';

function usePlayMusic() {
  const [song, setSong] = useState<Pick<ISong, 'id'> & Partial<ISong>>({
    id: 1863421801,
  });
  const [audio, state, controls, ref] = useAudio({
    src: song?.url || '',
    autoPlay: false,
  });

  const { data: detail } = useSongDetail(song?.id);
  const { data: url } = useSongUrl(song.id);
  useEffect(() => {
    setSong((preState) => {
      return Object.assign({}, preState, {
        ...detail?.songs[0],
        url: url?.data[0].url,
      });
    });
  }, [detail, url]);

  return {
    song,
    audio,
    state,
    controls,
    ref,
  };
}

export default usePlayMusic;

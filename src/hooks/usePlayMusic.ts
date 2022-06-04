import { ISong } from '@/api/types';
import { useState } from 'react';
import { useAudio } from 'react-use';

function usePlayMusic() {
  const [music] = useState<ISong>({
    name: '夜に駆ける',
    id: 1863421801,
    ar: [{ id: 29026799, name: '多多poi' }],
  });
  const [audio, state, controls, ref] = useAudio({
    src: 'http://m701.music.126.net/20220604204338/66a1708c75fb004bade0cc5fdda1a609/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14083824785/3066/3131/c327/3b6885cf754f2fc86dfc6945bd3f888e.mp3',
    autoPlay: false,
  });

  return {
    music,
    audio,
    state,
    controls,
    ref,
  };
}

export default usePlayMusic;

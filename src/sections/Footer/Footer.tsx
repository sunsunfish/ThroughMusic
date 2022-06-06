import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import {
  LayoutFooterBox,
  ControlButtonBox,
  ProgressBarBox,
  MusicInfoBox,
  FunctionButtonBox,
} from './styled';
import usePlayMusic from '../../hooks/usePlayMusic';
import PlayCircle from '@mui/icons-material/PlayCircle';
import PauseCircle from '@mui/icons-material/PauseCircle';
import SkipNext from '@mui/icons-material/SkipNext';
import SkipPrevious from '@mui/icons-material/SkipPrevious';
import { FlexBox } from '@/components/styled';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import RepeatIcon from '@mui/icons-material/Repeat';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Volume from './Volume';

function Footer() {
  const { song, audio, state, controls } = usePlayMusic();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <LayoutFooterBox>
      <ProgressBarBox style={{ width: `${((state.time / state.duration) * 100).toFixed(2)}%` }} />
      <FlexBox sx={{ width: '30vw', padding: '12px', columnGap: '10px' }}>
        <Avatar variant="rounded" src={song?.al?.picUrl}></Avatar>
        <MusicInfoBox>
          <Box>{song?.name}</Box>
          <FlexBox sx={{ color: '#c4c4c4' }}>
            <Box sx={{ margin: '0 10px' }}>-</Box>
            {song?.ar?.map((artist, idx, arr) => (
              <a key={artist.id} style={{ cursor: 'pointer' }}>
                {artist.name}
                {idx !== arr.length - 1 && <Box sx={{ margin: '0 10px' }}>/</Box>}
              </a>
            ))}
          </FlexBox>
          <Box sx={{ color: '#b2b2b2' }}>
            {formatTime(state.time)} / {formatTime(state.duration)}
          </Box>
        </MusicInfoBox>
      </FlexBox>
      <ControlButtonBox>
        {audio}
        {state.paused ? (
          <FavoriteIcon color="primary" />
        ) : (
          <FavoriteBorderOutlinedIcon color="primary" />
        )}
        <SkipPrevious color="primary" />
        {state.paused ? (
          <PlayCircle sx={{ fontSize: '40px' }} color="primary" onClick={controls.play} />
        ) : (
          <PauseCircle sx={{ fontSize: '40px' }} color="primary" onClick={controls.pause} />
        )}
        <SkipNext color="primary" />
        <ScreenShareOutlinedIcon />
      </ControlButtonBox>
      <FunctionButtonBox>
        <RepeatIcon />
        <PlaylistPlayIcon />
        <Volume
          volume={state.volume}
          muted={state.muted}
          onChange={(volume: number) => controls.volume(volume)}
          onMuted={(muted: boolean) => (muted ? controls.mute() : controls.unmute())}
        />
      </FunctionButtonBox>
    </LayoutFooterBox>
  );
}

export default Footer;

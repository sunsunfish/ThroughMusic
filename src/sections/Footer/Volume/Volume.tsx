import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import IconButton from '@mui/material/IconButton';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useState } from 'react';
import { VolumeSliderBox } from './styled';
import Slider from '@mui/material/Slider';

function Volume(props: {
  volume: number;
  muted: boolean;
  onChange: (volume: number) => void;
  onMuted: (muted: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleVolumeChange = (event: object, value: number | number[]) => {
    props.onChange(value as number);
  };
  const handleVolumeMuted = () => {
    props.onMuted(!props.muted);
  };
  return (
    <>
      <IconButton
        sx={{ position: 'relative' }}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        {props.muted ? (
          <VolumeOffIcon onClick={handleVolumeMuted} />
        ) : (
          <VolumeUpIcon onClick={handleVolumeMuted} />
        )}
        <VolumeSliderBox sx={{ display: open ? 'block' : 'none' }} onMouseLeave={handleClose}>
          <Slider
            color="primary"
            aria-label="volume"
            orientation="vertical"
            defaultValue={30}
            size="small"
            max={1}
            min={0}
            step={0.01}
            value={props.volume}
            onChange={handleVolumeChange}
          />
        </VolumeSliderBox>
      </IconButton>
    </>
  );
}

export default Volume;

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause  from "./PlayPause";

import { playPause,setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({song}) => {

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const activeSong='Test';
  const add="data:image/jpeg;base64,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";
    console.log(song.attributes.artwork.url);
  return(
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup
          rounded-lg cursor-pointer">
            <div className="relative w-full h-full group">

               <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.attributes.albumName===song.attributes.albumName ? 'flex bg-black bg-opacity-70': 'hidden'}`}>
             
             <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
              </div>
            <img alt="song_img" src={add}/>
            </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song.id}`}>
          {song.attributes.albumName}
          </Link>
        </p>
         <p className=" text-sm truncate text-gray-300 mt-1">
          <Link to={ song.attributes.artistName? `/artists/${song?.attributes.artistName}` :'/top-artists'}>
          {song.attributes.artistName}
          </Link>
        </p>
        </div>            
    
  </div>
)
};

export default SongCard;

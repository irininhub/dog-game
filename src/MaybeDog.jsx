import React, {useState} from 'react';
import './MaybeDog.css';
import dog from './dog.jpg'

const MaybeDog = (props) => {
  const [isGuess, setIsGuess] = useState(null);


  let onMouseDown = () => {
    props.onAddCounter(props.id);
    setIsGuess(props.randomId === props.id)
  }
  let onMouseUp = (e) => {
    setIsGuess(false)
  }

  let classForImg = props.randomId === props.id ? 'photo' : 'hiddenphoto';
  let classForErrorClick = isGuess ? 'cell' : 'cell error'

  return (
    <div className={classForErrorClick}>
      <img src={dog}
           className={classForImg}
           id={props.id}
           onMouseDown={onMouseDown}
           onMouseUp={onMouseUp}
      />
    </div>
  );
}


export default MaybeDog;

import './App.css';
import React, {useEffect, useState} from 'react';
import Select from './Select';

function App() {
  const [img, setImg] = useState('http://apimeme.com/meme?meme=Drake-Bad-Good');
  const [loading, setLoading] = useState(false);
  const change = () => {
    setLoading(true)
    setImg(`http://apimeme.com/meme?meme=${document.getElementById('meme').value}&top=${document.getElementById('top').value}&bottom=${document.getElementById('bottom').value}`)
  }
  const generate = () => {
    setLoading(true)
    setImg(`http://apimeme.com/meme?meme=${document.getElementById('meme').value}&top=${document.getElementById('top').value}&bottom=${document.getElementById('bottom').value}`)
    document.getElementById('top').value = '';
    document.getElementById('bottom').value = '';
  }
  const load = () => {
    setLoading(false);
  }
  useEffect(()=>{
    document.title = 'Meme Maker'
  },[])
  return (
      <div className='main'>
        <div className='left'>
          <Select change={change} />
          <div>
            <label>Top Text</label>
            <input id='top' className="form-control" type='text' placeholder='This text will appear on top' />
          </div>
          <div>
            <label>Bottom Text</label>
            <input id='bottom' className="form-control" type='text' placeholder='This text will appear on bottom' />
          </div>
          <div className='generate'>
            <button onClick={generate} className="btn btn-primary">Generate</button>
          </div>
        </div>
        <div className='right'>
          {loading && <p>Loading...</p>}
          <img onLoad={load} alt='meme' src={img}/>
        </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import MaybeDog from './MaybeDog';
import dog from './dog.mp3'

class App extends React.Component {

    componentDidMount() {
        this.getRandomImageIndex()
    }

    state = {
        randomId: 0,
        cell: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16],
        counter: 0,
    };

    audio = new Audio(dog);

    onAddCounter = (clickId) => {
        if (clickId === this.state.randomId) {
            this.audio.currentTime = 0;
            this.audio.play();
            this.setState({
                counter: this.state.counter+1,
            });
        }
    };


    getRandomImageIndex = () => {
        this.setInterval();
        let randomImgIndex = Math.floor(Math.random() * 9);
        this.setState({
            randomId: randomImgIndex
        })
    };

    setInterval = () => {
        setTimeout(this.getRandomImageIndex, 800)
    };


    resetGame = () => {
        this.setState({counter: 0})
    };


    render = () => {
        let dogsImg = this.state.cell.map((el, ind) => <MaybeDog id={ind}
                                                                 randomId={this.state.randomId}
                                                                 onAddCounter={this.onAddCounter}

        />)

        return (
            <div className='app'>
                <div>
                    <button className='button'
                            onClick={this.resetGame}
                    >RESTART</button>
                </div>

                <div className='wrapper'>
                    <h1 className='name'>ANGRY DOG</h1>
                    <div className='dogsField'> {dogsImg} </div>
                    <div className='counter'>{this.state.counter}</div>
                </div>
            </div>
        );
    }

}

export default App;

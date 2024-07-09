

function Game(){


    return(
        <>
        <div className="game-area">
            <div className="area-row sq-one-three">
                <div className="game-sq sq-one">1</div>
                <div className="game-sq sq-two">2</div>
                <div className="game-sq sq-three">3</div>
            </div>
            <div className="area-row sq-four-six">
                <div className="game-sq sq-four">4</div>
                <div className="game-sq sq-five">5</div>
                <div className="game-sq sq-six">6</div> 
            </div>
            <div className="area-row sq-seven-nine">
                <div className="game-sq sq-seven">7</div>
                <div className="game-sq sq-eight">8</div>
                <div className="game-sq sq-nine">9</div>
            </div>
        </div>
        </>
    );

}

export default Game
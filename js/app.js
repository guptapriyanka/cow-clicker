var CowClicker = React.createClass({

    getInitialState: function(){
        return {
            lastClicked: new Date(),
            counter: 0
        };
    },

    handleClick: function() {

        var timeInterval = 10;

        //if its been more than 10 ms since last clicked, then increment counter by 10
        if((new Date() - this.state.lastClicked) > timeInterval) {
            this.setState({ counter: this.state.counter+10, lastClicked: new Date()});
        }

    },

    render: function(){

    return(
        <div>
            <div className="counter"> 
                {this.state.counter} 
            </div>
            <div className="image-wrapper"> 
                <img src={this.props.src} className="image" onClick={this.handleClick}/>
            </div>

        </div>
        )
}
});

ReactDOM.render(<CowClicker src='img/cow.png' />, document.getElementById('app'));

























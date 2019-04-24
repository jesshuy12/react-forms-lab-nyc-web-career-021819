import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();
    this.state = {
      tweet: "" //og state is empty
    };
  }

  newTweet = (event) => {
    this.setState({  //setting new state for tweet on event
      tweet: event.target.value // new value is the target value of the event
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
          <input
          type="text"
          name="message"
          id="message"
          onChange={(event) => this.newTweet(event)}
          value={this.state.tweet}
          />{this.props.maxChars - this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;

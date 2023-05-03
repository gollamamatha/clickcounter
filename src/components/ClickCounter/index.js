// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickme = () => {
    this.setState(prevstate => ({count: prevstate.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <sapn className="count">{count}</sapn>
          times
        </h1>
        <div>
          <p className="para">Click the button to increase the count</p>
          <div>
            <button className="button" onClick={this.clickme}>
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter

import React from 'react';
import {render} from 'react-dom';
import RangeSlider from 'reactrangeslider';
import styles from './styles.css';

class App extends React.Component {
  render () {
    return (
        <div>
            <p> Hello React with {styles.slider}!</p>
              /* <RangeSlider /> */
        </div>
        /*<RangeSlider
            step={2}
            onChange={this.onChange}
            wrapperClassName={styles.slider}
            highlightedTrackClassName={styles.sliderHighlightedTrack}
            trackClassName={styles.sliderTrack}
            handleClassName={styles.sliderHandle}
        />*/
    );
  }
}

render(<App/>, document.getElementById('app'));

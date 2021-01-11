import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class TypedText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pointer: 0,
            text: this.props.text,
            displayedText: "",
        }
    }

    tick() {
        const _pointer = this.state.pointer;
        const _displayedText = this.state.displayedText;
        const _targetText = this.state.text;
        this.setState({
            displayedText: (this.state.text.substring(0, this.state.pointer) + (_pointer < _targetText.length ? "|" : "")),
            pointer: _pointer === _displayedText.length ? _pointer + 1 : _pointer,
        });
    }

    async timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    async componentDidMount() {
        await this.timeout(this.props.initialDelay)
        this.interval = setInterval(() => this.tick(), this.props.characterDelay);
    }

    render() {
        return (
            <div className={this.props.textStyle}>
                {this.state.displayedText}
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <div>
            <TypedText
                text="horrid57"
                textStyle="title"
                characterDelay={150}
                initialDelay={0}
            />
        </div>
        <TypedText
            text="Website is under construction"
            textStyle="subtitle"
            characterDelay={100}
            initialDelay={150 * 8 + 1000}
        />
    </div>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

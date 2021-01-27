import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let greenMode = Math.floor(Math.random() * 2) === 0;

let splashTexts = [
    "Website is under construction",
    "¯\\_(ツ)_/¯",
    "Are you mad at me?",
    "Will I ever complete this?",
    "Would you say this is complete?",
    "I think I've overused the typing effect",
    "Any suggestions for a new username?",
    "Find my 'projects' on GitHub",
    "Not inspired by ottomated.net cos that's hard",
    "Anyone want to buy a Rival 600?",
    "Error 404: Splash text #11 Not Found",
    greenMode ? "Damn, green mode is pretty cool" : "Green mode is much more exciting - refresh?",
]

let splashNumber = Math.floor(Math.random() * splashTexts.length);

let elementData = {
    title: {
        text: greenMode ? "c:\\> horrid57.exe" : "horrid57",
        reference: null,
        className: greenMode ? "title-green" : "title",
        targetDuration: greenMode ? 2000 : 1000,
        initialDelay: 0,
    },
    subtitle: {
        text: splashTexts[splashNumber],
        reference: null,
        className: greenMode ? "subtitle-green" : "subtitle",
        targetDuration: 2500,
        initialDelay: greenMode ? 2700 : 1700,
    },
    links: [
        {
            text: "GitHub",
            reference: "https://github.com/horrid57",
            className: greenMode ? "link-green" : "github-link",
            targetDuration: 600,
            initialDelay: greenMode ? 6000 : 5000,
        },
        {
            text: "Youtube",
            reference: "https://www.youtube.com/channel/UCWwzXZRV79h2EUbJnKEEe2w",
            className: greenMode ? "link-green" : "youtube-link",
            targetDuration: 700,
            initialDelay: greenMode ? 6900 : 5900,
        },
        {
            text: "Twitch",
            reference: "https://www.twitch.tv/horrid57",
            className: greenMode ? "link-green" : "twitch-link",
            targetDuration: 500,
            initialDelay: greenMode ? 7900 : 6900,
        },
        {
            text: "Steam",
            reference: "https://steamcommunity.com/id/horrid57/",
            className: greenMode ? "link-green" : "steam-link",
            targetDuration: 500,
            initialDelay: greenMode ? 8700 : 7700,
        }
    ]
}

class TypedElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            displayedText: "",
            pointer: 0,
        }
    }

    tick() {
        const _pointer = this.state.pointer;
        const _targetText = this.state.data.text;
        this.setState({
            displayedText: (this.state.data.text.substring(0, this.state.pointer) + (_pointer < _targetText.length ? "|" : "")),
            pointer: _pointer <= _targetText.length + 1 ? _pointer + 1 : _pointer,
        });
    }

    async timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    async componentDidMount() {
        await this.timeout(this.props.data.initialDelay)
        this.interval = setInterval(() => this.tick(), (this.state.data.targetDuration / this.state.data.text.length));
    }

    render() {
        if (this.state.data.reference != null) {
            return (
                <a href={this.state.data.reference} style={{color: this.state.pointer < 0 ? "black" : null}}
                   className={this.state.data.className} target={"_blank"} rel={"noreferrer"} >
                    {this.state.displayedText}
                </a>
            );
        }
        else {
            return (
                <div className={this.state.data.className} style={{ color: this.state.pointer < 0 ? "black" : null }} >
                    {this.state.displayedText}
                </div>
            );
        }

    }
}

ReactDOM.render(
    <div style={{ margin: 0, position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
        <TypedElement data={elementData.title} />
        <TypedElement data={elementData.subtitle} />
        <table style={{ paddingTop: "30px" }}>
            <tbody>
                <tr>
                    <TypedElement data={elementData["links"][0]} />
                </tr>
                <tr>
                    <TypedElement data={elementData["links"][1]} />
                </tr>
                <tr>
                    <TypedElement data={elementData["links"][2]} />
                </tr>
                <tr>
                    <TypedElement data={elementData["links"][3]} />
                </tr>
            </tbody>
        </table>
    </div>,
    document.getElementById('root'),
);

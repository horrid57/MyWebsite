import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let greenMode = Math.floor(Math.random() * 10) === 0;

let splashText = [
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

let randomInt = Math.floor(Math.random() * splashText.length);

let elementText = {
    title: {
        text: greenMode ? "c:\\> horrid57.exe" : "horrid57",
        textStyle: greenMode ? "title-green" : "title",
        targetDuration: greenMode ? 2000 : 1000,
        initialDelay: 0,
    },
    subtitle: {
        text: splashText[randomInt],
        textStyle: greenMode ? "subtitle-green" : "subtitle",
        targetDuration: 2500,
        initialDelay: greenMode ? 2700 : 1700,
    },
    links: [
        {
            text: "GitHub",
            reference: "https://github.com/horrid57",
            className: greenMode ? "link-green" : "github-link",
            targetDuration: 500,
            initialDelay: greenMode ? 6000 : 5000,
        },
        {
            text: "Youtube",
            reference: "https://www.youtube.com/channel/UCWwzXZRV79h2EUbJnKEEe2w",
            className: greenMode ? "link-green" : "youtube-link",
            targetDuration: 500,
            initialDelay: greenMode ? 6800 : 5800,
        },
        {
            text: "Twitch",
            reference: "https://www.twitch.tv/horrid57",
            className: greenMode ? "link-green" : "twitch-link",
            targetDuration: 500,
            initialDelay: greenMode ? 7600 : 6600,
        },
        {
            text: "Steam",
            reference: "https://steamcommunity.com/id/horrid57/",
            className: greenMode ? "link-green" : "steam-link",
            targetDuration: 500,
            initialDelay: greenMode ? 8400 : 7400,
        }
    ]
}



class TypedText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pointer: -3,
            text: this.props.text,
            displayedText: "",
        }
    }

    tick() {
        const _pointer = this.state.pointer;
        const _targetText = this.state.text;
        this.setState({
            displayedText: (this.state.text.substring(0, this.state.pointer) + (_pointer < _targetText.length ? "|" : "")),
            pointer: _pointer <= _targetText.length + 1 ? _pointer + 1 : _pointer,
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
            <div className={this.props.textStyle} style={{color: this.state.pointer < 0 ? "black" : null}}>
                {this.state.displayedText}
            </div>
        );
    }
}

class InteractiveTypedLink extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            ref: this.props.reference,
            className: this.props.className,
            displayedText: "",
            pointer: 0,
        }
    }

    tick() {
        const _pointer = this.state.pointer;
        const _targetText = this.state.text;
        this.setState({
            displayedText: (this.state.text.substring(0, this.state.pointer) + (_pointer < _targetText.length ? "|" : "")),
            pointer: _pointer <= _targetText.length + 1 ? _pointer + 1 : _pointer,
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
            <div>
                <a href={this.state.ref}
                   style={{color: this.state.pointer < 0 ? "black" : null}}
                   className={this.state.className}
                   target={"_blank"}
                   rel={"noreferrer"}
                >
                    {this.state.displayedText}
                </a>
            </div>
        );
    }
}

ReactDOM.render(
    <div style={{
        margin: 0,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)"
    }}>
        <div>
            <TypedText
                text={elementText["title"].text}
                textStyle={elementText["title"].textStyle}
                characterDelay={elementText["title"].targetDuration / elementText["title"].text.length}
                initialDelay={elementText["title"].initialDelay}
            />
        </div>
        <TypedText
            text={elementText["subtitle"].text}
            textStyle={elementText["subtitle"].textStyle}
            characterDelay={elementText["subtitle"].targetDuration / elementText["subtitle"].text.length}
            initialDelay={elementText["subtitle"].initialDelay}
        />

        <div style={{
            paddingTop: "30px"
        }}>
            <table>

                <tr>
                    <InteractiveTypedLink
                        text={elementText["links"][0].text}
                        reference={elementText["links"][0].reference}
                        className={elementText["links"][0].className}
                        characterDelay={elementText["links"][0].targetDuration / elementText["links"][0].text.length}
                        initialDelay={elementText["links"][0].initialDelay}
                    />
                </tr>
                <tr>
                    <InteractiveTypedLink
                        text={elementText["links"][1].text}
                        reference={elementText["links"][1].reference}
                        className={elementText["links"][1].className}
                        characterDelay={elementText["links"][1].targetDuration / elementText["links"][1].text.length}
                        initialDelay={elementText["links"][1].initialDelay}
                    />
                </tr>
                <tr>
                    <InteractiveTypedLink
                        text={elementText["links"][2].text}
                        reference={elementText["links"][2].reference}
                        className={elementText["links"][2].className}
                        characterDelay={elementText["links"][2].targetDuration / elementText["links"][2].text.length}
                        initialDelay={elementText["links"][2].initialDelay}
                    />
                </tr>
                <tr>
                    <InteractiveTypedLink
                        text={elementText["links"][3].text}
                        reference={elementText["links"][3].reference}
                        className={elementText["links"][3].className}
                        characterDelay={elementText["links"][3].targetDuration / elementText["links"][3].text.length}
                        initialDelay={elementText["links"][3].initialDelay}
                    />
                </tr>

            </table>
        </div>
    </div>,
    document.getElementById('root'),
);

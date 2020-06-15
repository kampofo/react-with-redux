import React, { Component } from "react";
import ZenQuote from "./components/ZenQuote";
// import GitHubUserInfo from "./components/GitHubUserInfo";

class App extends Component {
    render() {
        console.log("inside render");
        return (
            <div>
                {/* <GitHubUserInfo username="facebook" />
                <GitHubUserInfo username="kwabena" /> */}
                <ZenQuote />
            </div>
        );
    }
}

export default App;

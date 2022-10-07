import React from "react";

function Links(){
    return (
        <div className="App">
            <header className="App-header">
                <h2>🔗 Links 🔗</h2>
            </header>
            <div className="Link-body">
                <div className="container">
                    <div>
                        <a href="https://github.com/jondmca/my-cookbook">
                            <img className="link-image" src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} alt="GitHub repository" />
                        </a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/in/jonathan-mcarthur-838602120/">
                            <img className="link-image" src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"} alt="LinkedIn profile" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};
                    

export default Links;
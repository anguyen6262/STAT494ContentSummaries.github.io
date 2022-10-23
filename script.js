import React from "react"
import ReactDOM from "react-dom/client"

class Nav extends React.Component{
    render() {
        return (
            <header>
                <nav class="navbar">
                <div class="logo">L%</div>
                <ul>
                    <li><a href="index.html" class="nav-link">Home</a></li>
                    <li><a href="#0" class="nav-link">Background Knowledge <i class="fa-solid fa-caret-down"></i></a>
                        <div class="dropMenu" id="dropMenuBK">
                            <ul>
                                <li><a class="nav-link" href="genetics.html">Genetics</a></li>
                                <li><a class="nav-link" href="#0">Statistics <i class="fa-solid fa-caret-right"></i></a>
                                <div class="dropMenu-1">
                                    <ul>
                                        <li><a class="nav-link" href="concepts.html">Concepts</a></li>
                                        <li ><a class="nav-link" href="plots.html">Plots</a></li>
                                    </ul>
                                </div>
                                </li>
                            </ul>
                        </div>
                    
                    </li>  
                    
                    <li><a href="#0" class="nav-link main-link">Research Papers <i class="fa-solid fa-caret-down"></i></a> 
                        <div class="dropMenu" id="dropMenuResearch">
                            <ul>
                                <li><a class="nav-link" href="research-paper-1.html">Diseases</a></li>
                                <li><a class="nav-link" href="research-paper-3.html">Geography</a></li>
                            </ul>
                        </div>
                    </li> 
                </ul>
                </nav>
            </header>
        );
    }
}

ReactDOM.render({Nav},document.getElementById('nav'));
// const domContainer = document.querySelector('#nav');
// const root = ReactDOM.createRoot(domContainer);
// root.render(nav);
function ingenLayout() {
    document.getElementById('container').classList.value = '';
}

function vertikalLayout() {
    ingenLayout();
    document.getElementById('container').classList.add('vertikal');
}

function horisontalLayout() {
    ingenLayout();
    document.getElementById('container').classList.add('horisontal');
}

function gridLayout() {
    ingenLayout();
    document.getElementById('container').classList.add('grid');
}


function show1(){
    blank();
    document.getElementById("innerCard1").innerHTML = /*HTML*/
    `
    De to viktigste verktøyene vi skal bruke er disse:
        <ul>
            <li>
                Koderedigeringsprogrammet 
                <a href="https://code.visualstudio.com/">
                    Visual Studio Code</a>
                <br/>
                Vi skal bruke noen <i>extensions</i>:
                <ul>
                    <li>JavaScript-booster</li>
                    <li>es6-string-html</li>
                    <li>live-server</li>
                    <li>live-share</li>
                </ul>
            </li>
            <li>
                Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
            </li>
        </ul>
    `
}

function show2(){
    blank();
    document.getElementById("innerCard2").innerHTML = /*HTML*/
    `
    Vi bruker HTML til å definere et dokument.
        <ul>
            <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
            <li>Tagger for grunnleggende formatering av tekst</li>
            <li><tt>&lt;div&gt;</tt></li>
            <li><tt>&lt;input type="text"&gt;</tt></li>
            <li><tt>&lt;button&gt;</tt></li>
            <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
            </li>
        </ul>
    `  
}

function show3(){
    blank();
    document.getElementById("innerCard3").innerHTML = /*HTML*/ 
    `
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
        <ul>
            <li><tt>background-color</tt></li>
            <li><tt>color</tt></li>
            <li><tt>padding</tt></li>
            <li><tt>margin</tt></li>
            <li><tt>border</tt></li>
            <li><tt>text-align</tt></li>
            <li><tt>font-size</tt></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
            <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
            </li>
        </ul>
    `
}

function show4(){
    blank();
    document.getElementById("innerCard4").innerHTML = /*HTML*/ 
    `
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
        ved
        å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
        <ul>
            <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                Moodle.</li>
            <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                    Reference</a></li>
        </ul>
    `
}

function show5(){
    blank();
    document.getElementById("innerCard5").innerHTML = /*HTML*/
    `
        <div id="head" class="bodyPart"></div>
        <div id="body" class="bodyPart"></div>
        <div id="legs" class="bodyPart"></div> 
             
    `
    head1()
    body1()
    legs1()
}

function head1(){
    document.getElementById("head").innerHTML = /*HTML*/
    `
    <button onclick="head4()">◀</button>
    <img src="img/head1.png" alt="">
    <button onclick="head2()">▶</button>
    `
}
function head2(){
    document.getElementById("head").innerHTML = /*HTML*/
    `
    <button onclick="head1()">◀</button>
    <img src="img/head2.png" alt="">
    <button onclick="head3()">▶</button>
    `
}
function head3(){
    document.getElementById("head").innerHTML = /*HTML*/
    `
    <button onclick="head2()">◀</button>
    <img src="img/head3.png" alt="">
    <button onclick="head4()">▶</button>
    `
}
function head4(){
    document.getElementById("head").innerHTML = /*HTML*/
    `
    <button onclick="head3()">◀</button>
    <img src="img/head4.png" alt="">
    <button onclick="head1()">▶</button>
    `
}

function body1(){
    document.getElementById("body").innerHTML = /*HTML*/
    `
    <button onclick="body4()">◀</button>
    <img src="img/body1.png" alt="">
    <button onclick="body2()">▶</button>
    `
}
function body2(){
    document.getElementById("body").innerHTML = /*HTML*/
    `
    <button onclick="body1()">◀</button>
    <img src="img/body2.png" alt="">
    <button onclick="body3()">▶</button>
    `
}
function body3(){
    document.getElementById("body").innerHTML = /*HTML*/
    `
    <button onclick="body2()">◀</button>
    <img src="img/body3.png" alt="">
    <button onclick="body4()">▶</button>
    `
}
function body4(){
    document.getElementById("body").innerHTML = /*HTML*/
    `
    <button onclick="body3()">◀</button>
    <img src="img/body4.png" alt="">
    <button onclick="body1()">▶</button>
    `
}

function legs1(){
    document.getElementById("legs").innerHTML = /*HTML*/
    `
    <button onclick="legs4()">◀</button>
    <img src="img/legs1.png" alt="">
    <button onclick="legs2()">▶</button>
    `
}
function legs2(){
    document.getElementById("legs").innerHTML = /*HTML*/
    `
    <button onclick="legs1()">◀</button>
    <img src="img/legs2.png" alt="">
    <button onclick="legs3()">▶</button>
    `
}
function legs3(){
    document.getElementById("legs").innerHTML = /*HTML*/
    `
    <button onclick="legs2()">◀</button>
    <img src="img/legs3.png" alt="">
    <button onclick="legs4()">▶</button>
    `
}
function legs4(){
    document.getElementById("legs").innerHTML = /*HTML*/
    `
    <button onclick="legs3()">◀</button>
    <img src="img/legs4.png" alt="">
    <button onclick="legs1()">▶</button>
    `
}

function blank(){
    document.getElementById("innerCard1").innerHTML = '';
    document.getElementById("innerCard2").innerHTML = '';
    document.getElementById("innerCard3").innerHTML = '';
    document.getElementById("innerCard4").innerHTML = '';
    document.getElementById("innerCard5").innerHTML = '';
}



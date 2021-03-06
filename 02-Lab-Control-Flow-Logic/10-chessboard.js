function chessboard(size) {
    size = Number(size);
    let html = '<div class="chessboard">\n';
    for (let row = 0; row < size; row++) {
        html += '\t<div>\n';
        let color = (row % 2 == 0) ? 'black' : 'white';
        for (let col = 0; col < size; col++) {
            html += `\t\t<span class="${color}"></span>\n`;
            color = (color == 'white') ? 'black' : 'white';
        }
        html += '\t</div>\n';
    }
    html += '</div>';
    return html;
}

// test in browser
let css = document.createElement("style");
css.innerHTML = `body { background: #CCC; }
                .chessboard { display: inline-block; }
                .black, .white { 
                    width:50px; height:50px;
                    display: inline-block; }
                .black { background: black; }
                .white { background: white; }
                `;
document.getElementsByTagName("head")[0].appendChild(css);
document.body.innerHTML = chessboard(["5"]);
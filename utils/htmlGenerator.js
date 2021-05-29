const { classColors } = require('./constants');
const nodeHtmlToImage = require('node-html-to-image');
const resources = {};
var fs = require('fs');

const initResources = () => {
  fs.readFile('./resources/Covenants/Kyrian.png', "base64" ,(err, res) => {
    resources["Kyrian"] = 'data:image/png;base64, ' + res;
  });
  fs.readFile('./resources/Covenants/NightFae.png', "base64" ,(err, res) => {
    resources["Night Fae"] = 'data:image/png;base64, ' + res;
  });
  fs.readFile('./resources/Covenants/Necrolord.png', "base64" ,(err, res) => {
    resources["Necrolord"] = 'data:image/png;base64, ' + res;
  });
  fs.readFile('./resources/Covenants/Venthyr.png', "base64" ,(err, res) => {
    resources["Venthyr"] = 'data:image/png;base64, ' + res;
  });
  fs.readFile('./resources/Roles/Damage.png', "base64" ,(err, res) => {
    resources["dps"] = 'data:image/png;base64, ' + res;
  });
  fs.readFile('./resources/Roles/Tank.png', "base64" ,(err, res) => {
    resources["tank"] = 'data:image/png;base64, ' + res;
  });
  fs.readFile('./resources/Roles/Healer.png', "base64" ,(err, res) => {
    resources["healer"] = 'data:image/png;base64, ' + res;
  });

  console.log('Resources init done!');
}

const htmlToImage = characters => {
  // characters.pop();
  // characters.pop();
  // characters.pop();
  // characters.pop();
  // characters.pop();
  // characters.pop();
  // characters.pop();
  // characters.pop();
  // characters.pop();
  // characters.pop();
    return nodeHtmlToImage({
      output: './image.png',
      html: generateHtml(characters)
    });
  }

const generateHtml = characters => {
const html = `<html><head>
<style>
body {
    height: ${100 + 48.4 * characters.length}px
}
table.redTable {
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    border: 2px solid #000000;
    background-color: #2e2e2e;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }
  table.redTable td, table.redTable th {
    border: 1px solid #2e2e2e;
    padding: 3px 2px;
  }
  table.redTable tbody td {
    font-size: 28px;
    font-weight: bold;
    color: #E6E6E6;
  }
  table.redTable tr:nth-child(even) {
    background: #454545;
  }
  table.redTable thead {
    background: #000000;
    border-bottom: 3px solid #000000;
  }
  table.redTable thead th {
    font-size: 19px;
    font-weight: bold;
    color: #E6E6E6;
    text-align: center;
    border-left: 0px solid #4A4A4A;
  }
  table.redTable thead th:first-child {
    border-left: none;
  }
  
  table.redTable tfoot {
    font-size: 13px;
    font-weight: bold;
    color: #FFFFFF;
    background: #000000;
  }
  table.redTable tfoot td {
    font-size: 13px;
  }
  table.redTable tfoot .links {
    text-align: right;
  }
  table.redTable tfoot .links a{
    display: inline-block;
    color: #E6E6E6;
    background: #000000;
    padding: 2px 8px;
    border-radius: 5px;
  }
</style>
</head><body><table class="redTable">
<thead>
<tr>
<th>Name</th>
<th>Score</th>
<th>Best Run</th>
</tr>
</thead>
<tfoot>
<tr>
<td colspan="3">
<div class="links">&nbsp;</div>
</td>
</tr>
</tfoot>
<tbody>

${characters.map(a=>
`<tr>
<td style="color:${classColors[a.class]}">${a.name} <img style="vertical-align: inherit" src='${resources[a.covenant]}' width="40" height="40"/></td>
<td><img style="vertical-align: inherit" src='${resources[a.role]}' width="40" height="40"/> - ${Math.round(a.mythicScores.all)}</td>
<td>${a.bestRun.short_name} +${a.bestRun.mythic_level}</td>
</tr>`
).reduce((a,b) => a + b )}
</tbody>
</table></body></html>`;

fs.writeFile('htmlBoard.html', html, () => {});
return html;
}

module.exports = { htmlToImage, initResources };
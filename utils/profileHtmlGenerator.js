const constants = require('./constants');
const nodeHtmlToImage = require('node-html-to-image');
const resources = {};
var fs = require('fs');

const initProfileResources = () => {
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
  fs.readFile('./resources/Affixes/Fortified.jpg', "base64" ,(err, res) => {
    resources["Fortified"] = 'data:image/png;base64, ' + res;
  });
  fs.readFile('./resources/Affixes/Tyrannical.jpg', "base64" ,(err, res) => {
    resources["Tyrannical"] = 'data:image/png;base64, ' + res;
  });

  constants.mythisShortNames.forEach(name => {
    fs.readFile(`./resources/Dungeons/${name}.jpg`, 'base64', (err,res) => {
      resources[name] = 'data:image/png;base64, ' + res;
    });
  });
  console.log('Resources init done!');
}

const profileHtmlToImage = char => {
    return nodeHtmlToImage({
      output: './profileImage.png',
      html: generateProfileHtml(char),
      puppeteerArgs: {
        defaultViewport: {
            width: 2010,
            height: 345
      }}
    });
  }

const sortRuns = char => {
  const dungToScore = {}
  for(let dung of Object.values(char.allRuns)) {
    if(dung.Fortified) {
      dungToScore[dung.Fortified.short_name] = {dung: dung.Fortified.short_name, score: Number((Math.round(dung.Fortified.score * 100) / 100).toFixed(2))};
    }
    if(dung.Tyrannical) {
      if(!dungToScore[dung.Tyrannical.short_name]) {
        dungToScore[dung.Tyrannical.short_name] = {dung: dung.Tyrannical.short_name, score: 0};
      }
      dungToScore[dung.Tyrannical.short_name].score += dung.Tyrannical.score;
      dungToScore[dung.Tyrannical.short_name].score = Number((Math.round(dungToScore[dung.Tyrannical.short_name].score* 100) / 100).toFixed(2));
    }
  }

  let res = Object.values(dungToScore).sort((a,b) => a.score < b.score ? 1 : -1);
  return res.map(a => a.dung);
}

const generateProfileHtml = char => {
const sortedRuns = sortRuns(char);
const html = `<html><head>
<style>
body {
    height: 345px;
    background-color: #C5e6e6;
}
table.minimalistBlack {
    border: 3px solid #000000;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    }
    table.minimalistBlack td, table.minimalistBlack th {
    border: 1px solid #000000;
    text-align: center;
    }
    table.minimalistBlack tbody td {
    font-size: 33px;
    }
    table.minimalistBlack thead {
    background: #CFCFCF;
    background: -moz-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
    background: -webkit-linear-gradient(top, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
    background: linear-gradient(to bottom, #dbdbdb 0%, #d3d3d3 66%, #CFCFCF 100%);
    border-bottom: 3px solid #000000;
    }
    table.minimalistBlack thead th {
    font-size: 35px;
    font-weight: bold;
    color: #000000;
    text-align: center;
    }
    table.minimalistBlack tfoot {
    font-size: 34px;
    font-weight: bold;
    color: #000000;
    border-top: 3px solid #000000;
    }
    table.minimalistBlack tfoot td {
    font-size: 34px;
    }
.nameHeader {
    padding: 1px;
    text-align: center;
    background-color: ${constants.classColors[char.class]};
    font-size: 44px;
    font-weight: bold;
}
</style>
</head><body><table class="minimalistBlack">
<thead>
<div class="nameHeader">${char.name}</div>

<tr>
<th>Dung/Aff</th>
${sortedRuns.map(dung => {
    return `<th>${dung}</th>`
}).reduce((a,b) => a + b )}
<th>Total</th>
</tr>
</thead>
<tfoot>
<tr>
<td><img style="vertical-align: inherit" src='${resources['Fortified']}' width="40" height="40"/></td>
${sortedRuns.map(dung => 
    `
    <td>
    <table style="width: 100%; font-weight: bold;"><tr>
    <td style="border:none">
    <span style="float: left; color: ${char.allRuns[dung]["Fortified"] && char.allRuns[dung]["Fortified"].num_keystone_upgrades ? `green` : `red`}">+${char.allRuns[dung]["Fortified"] && char.allRuns[dung]["Fortified"].mythic_level || 0}</span>
    </td>
    <td style="border:none">
    ${char.allRuns[dung]["Fortified"] && char.allRuns[dung]["Fortified"].score || 0}
    </td>
    </tr>
    </table>
    </td>  
    `
).reduce((a,b) => a+b)}
<td>${char.fortifiedScore}</td>
</tr>
<tr>
<td><img style="vertical-align: inherit" src='${resources['Tyrannical']}' width="40" height="40"/></td>
${constants.mythisShortNames.map(dung => 
    `
    <td>
    <table style="width: 100%; font-weight: bold;"><tr>
    <td style="border:none">
    <span style="float: left; color: ${char.allRuns[dung]["Tyrannical"] && char.allRuns[dung]["Tyrannical"].num_keystone_upgrades ? `green` : `red`}">+${char.allRuns[dung]["Tyrannical"] && char.allRuns[dung]["Tyrannical"].mythic_level || 0}</span>
    </td>
    <td style="border:none">
    ${char.allRuns[dung]["Tyrannical"] && char.allRuns[dung]["Tyrannical"].score || 0}
    </td>
    </tr>
    </table>
    </td>  
    `
).reduce((a,b) => a+b)}
<td>${char.tyrannicalScore}</td>
</tr>
<tr>
<td>Both</td>
${constants.mythisShortNames.map(dung => 
    `
    <td>
    <table style="width: 100%; font-weight: bold;"><tr>
    <td style="border:none">
    <span style="float: left;}"></span>
    </td>
    <td style="border:none">
    ${((char.allRuns[dung]["Tyrannical"] && char.allRuns[dung]["Tyrannical"].score || 0) + (char.allRuns[dung]["Fortified"] && char.allRuns[dung]["Fortified"].score || 0)).toFixed(2)} 
    </td>
    </tr>
    </table>
    </td>  
    `
).reduce((a,b) => a+b)}
<td style = "color: ${constants.getScoreColorTier(char.score)};">${char.score}</td>
</tr>
</tfoot>
<tbody>
<tr>
<td><img style="vertical-align: inherit" src='${resources[char.covenant]}' width="100" height="100"/></td>
${constants.mythisShortNames.map(dung => {
    return `<td><img style="vertical-align: inherit" src='${resources[dung]}' width="170" height="100"/></td>`
}).reduce((a,b) => a + b )}
<td><img style="vertical-align: inherit" src='${resources[char.role]}' width="100" height="100"/></td>
</tr>

</tbody>
</table></body></html>`;

fs.writeFile('profileHtmlBoard.html', html, () => {});
return html;
}


module.exports = { initProfileResources, profileHtmlToImage };
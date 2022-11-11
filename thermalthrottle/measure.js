const cp = require('child_process');
const fs = require('fs');
const osxTemp = require('osx-temperature-sensor');


function readThrottle() {

const output = cp.spawnSync('/usr/bin/pmset', ['-g', 'therm']);

const result = output.stdout.toString();
    const trimmed = result.split('\n').map((l) => l.trim()).join('\n').trim()

    const regMatch = new RegExp('CPU_Speed_Limit.*= (.*)', 'gm');

    const match = regMatch.exec(trimmed);

    const t = osxTemp.cpuTemperature();
    const out = new Date() + '---' + match[1] + '---' + t.main;
    console.log(out)
    fs.appendFileSync('log.txt', out + '\n');
}

readThrottle();
setInterval(readThrottle, 10 * 1000);

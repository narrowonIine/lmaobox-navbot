import { bundle } from 'luabundle'
import * as fs from 'fs';

const bundledLua = bundle('./Lmaobot/Main.lua', {
    metadata: false,
    expressionHandler: (module, expression) => {
		const start = expression.loc.start
		console.warn(`WARNING: Non-literal require found in '${module.name}' at ${start.line}:${start.column}`)
	}
});

fs.writeFile('Lmaobot.lua', bundledLua, err => {
    if (err) {
        console.error(err);
    }
});

console.log('Library bundle created');
console.log('Made by Narrow.');

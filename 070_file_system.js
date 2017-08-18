// https://www.careercup.com/question?id=5110235812331520

// Your program will simulate the creation of 
// subdirectories (folders) on one of the disks of a 
// computer. The input file to your program, 
// prog5.dat, will contain a sequence of commands 
// that a user might enter from a command line, and 
// the output file prog5.out will contain the 
// operating system’s responses to these commands. 
// Below is an example of an input file, and on the 
// right is the listing of the corresponding output 
// file. 
// dir 
// mkdir sub6 
// mkdir sub3 
// mkdir sub4 
// dir 
// mkdir sub4 
// cd sub3 
// cd sub3 
// mkdir sub3 
// mkdir sub6 
// mkdir sub4 
// dir 
// cd sub6 
// mkdir sub666 
// dir 
// up 
// up 
// dir 
// up 
// Problem 5 by team X 
// Command: dir 
// Directory of root: 
// No subdirectories 
// Command: mkdir sub6 
// Command: mkdir sub3 
// Command: mkdir sub4 
// Command: dir 
// Directory of root: 
// sub3 sub4 sub6 
// Command: mkdir sub4 
// Subdirectory already exists 
// Command: cd sub3 
// Command: cd sub3 
// Subdirectory does not exist 
// Command: mkdir sub3 
// Command: mkdir sub6 
// Command: mkdir sub4 
// Command: dir 
// Directory of root\sub3: 
// sub3 sub4 sub6 
// Command: cd sub6 
// Command: mkdir sub666 
// Command: dir 
// Directory of root\sub3\sub6: 
// sub666 
// Command: up 
// Command: up 
// Command: dir 
// Directory of root: 
// sub3 sub4 sub6 
// Command: up 
// Cannot move up from root directory 
// End of problem 5 by team X

function printRecursevly(folderName, folder, prefix, isLast) {
	console.log(prefix + '+-' + folderName);

	var subNames = [];
	for (var f in folder) subNames.push(f);

	for (var i = 0; i < subNames.length; i++) {
		printRecursevly(subNames[i], folder[subNames[i]], prefix + (isLast ? '  ' : '+ '), i === subNames.length - 1);
	}
}

var commands = [
	'mkdir sub6 ',
	'mkdir sub3 ',
	'mkdir sub4 ',
	'dir ',
	'mkdir sub4 ',
	'cd sub3 ',
	'cd sub3 ',
	'mkdir sub3 ',
	'mkdir sub6 ',
	'mkdir sub4 ',
	'dir ',
	'cd sub6 ',
	'mkdir sub666 ',
	'dir ',
	'up ',
	'up ',
	'dir ',
	'up ',
	'tree'
];

var root = {};
var currentFolders = [root];
var currentNames = ['root'];
var current = root;

function processCommand(command) {
	let commandParts = command.split(/\s/g).filter(p => p != '');

	switch (commandParts[0]) {
		case 'mkdir':
			if (commandParts.length != 2) {
				console.error(`Syntax: mkdir newfolder`);
				return;
			}

			if (/[^a-zA-Z0-9]/.test(commandParts[1]) || /^[^a-zA-Z]/.test(commandParts[1])) {
				console.error(`${commandParts[1]} is not a valid folder name`);
				return;
			}

			if (current[commandParts[1]] !== undefined) {
				console.error(`Folder ${commandParts[1]} already exists`);
				return;
			}

			current[commandParts[1]] = {};
			console.log(`Folder ${commandParts[1]} successfully created`);
			break;

		case 'dir':
			var p = [];
			for (var f in current) p.push(f);
			console.log(`Directory of ${currentNames.join('\\')}`);
			console.log(p.join(' '));
			break;

		case 'cd':
			if (commandParts.length != 2) {
				console.error(`Syntax: cd folder`);
				return;
			}

			if (current[commandParts[1]] === undefined) {
				console.error(`Folder ${commandParts[1]} does not exists`);
				return;
			}

			current = current[commandParts[1]];
			currentFolders.push(current);
			currentNames.push(commandParts[1]);
			break;

		case 'up':
			if (commandParts.length != 1) {
				console.error(`Syntax: up`);
				return;
			}

			if (current === root) {
				console.error('Already at root level');
				return;
			}

			currentFolders.pop();
			current = currentFolders[currentFolders.length - 1];
			currentNames.pop();

			break;

		case 'tree':
			if (commandParts.length != 1) {
				console.error(`Syntax: tree`);
				return;
			}

			printRecursevly(currentNames[currentNames.length - 1], current, '', true);

			break;

		default:
			console.log('Unknown command');
			break;
	}
}

for (let command of commands) {

	console.log();
	// console.log(`Command ${commandParts[0]}`);
	console.log(`Command: ${command}`);
	processCommand(command);
}

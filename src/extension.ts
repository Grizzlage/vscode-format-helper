import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// PASTE AND FORMAT AS JSON
	context.subscriptions.push(
		vscode.commands.registerCommand('json-helper.paste', async () => {
			if(!vscode.window.activeTextEditor?.document) return;
			
			await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
			await vscode.languages.setTextDocumentLanguage(vscode.window.activeTextEditor?.document, "json");
			await vscode.commands.executeCommand('editor.action.formatDocument');
		})
	);

	// FORMAT AS JSON
	context.subscriptions.push(
		vscode.commands.registerCommand('json-helper.format', async () => {
			if(!vscode.window.activeTextEditor?.document) return;
			
			await vscode.languages.setTextDocumentLanguage(vscode.window.activeTextEditor?.document, "json");
			await vscode.commands.executeCommand('editor.action.formatDocument');
			
		})
	);

	// FOLD UNFOLD CURRENT
	context.subscriptions.push(
		vscode.commands.registerCommand('json-helper.fold', async () => {
			await vscode.commands.executeCommand('editor.fold');
		})
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('json-helper.unfold', async () => {
			await vscode.commands.executeCommand('editor.unfold');
		})
	);

	// FOLD UNFOLD ALL
	context.subscriptions.push(
		vscode.commands.registerCommand('json-helper.foldAll', async () => {
			await vscode.commands.executeCommand('editor.foldAll');
		})
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('json-helper.unfoldAll', async () => {
			await vscode.commands.executeCommand('editor.unfoldAll');
		})
	);


}


export function deactivate() {}

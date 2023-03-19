import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/**
 * The first non-blank line is used to fix the identation of remaining ones.
 */
function fixIdentation(code) {

    let separateLines = code.split(/\r?\n|\r|\n/g);
    while (separateLines.at(0).trim() === '') {
        separateLines = separateLines.slice(1)
    }
    while (separateLines.at(-1).trim() === '') {
        separateLines = separateLines.slice(0, -1)
    }

    const count = separateLines[0].length - separateLines[0].trimLeft().length
    separateLines = separateLines.map(str => str.slice(count))
    return separateLines.join('\n')
}

export function Java(props) {
    
    return <SyntaxHighlighter language="java" style={docco} wrapLongLines>
        {fixIdentation(props.children)}
    </SyntaxHighlighter>
}
import React from 'react';

function BionicReader({ text }) {
    
    const boldify = (word) => {
        const length = word.length;

        if (length < 2) {
            return word;
        } else if (length <= 3) {
            return <><b>{word.substring(0, 1)}</b>{word.substring(1)}</>;
        } else if (length <= 8) {
            return <><b>{word.substring(0, 2)}</b>{word.substring(2)}</>;
        } else if (length <= 13) {
            return <><b>{word.substring(0, 3)}</b>{word.substring(3)}</>;
        } else if (length <= 18) {
            return <><b>{word.substring(0, 4)}</b>{word.substring(4)}</>;
        } else {
            return <><b>{word.substring(0, 5)}</b>{word.substring(5)}</>;
        }
    };

    // Split text based on spaces and punctuations using a regular expression
    const modifiedText = text.split(/([ ,.!?;]+)/).map((fragment, index) => {
        // If the fragment is a punctuation or space, return it as is
        if (/^([ ,.!?;]+)$/.test(fragment)) {
            return fragment;
        }
        return boldify(fragment);
    });

    return (
        <span>
            {modifiedText.map((word, index) => (
                <React.Fragment key={index}>
                    {word} 
                </React.Fragment>
            ))}
        </span>
    );
}

export default BionicReader;
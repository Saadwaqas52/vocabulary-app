fetch('https://github.com/Saadwaqas52/vocabulary-app/blob/main/vocabulary.json')
    .then(response => response.json())
    .then(data => {
        words = data;
        nextWord();
    });

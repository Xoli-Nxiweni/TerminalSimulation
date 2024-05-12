let texts = [
    {
        text: 'C:\\Users\\fakeUser\\Desktop> cd C:\\path\\to\\your\\fake\\directory'
    },
    {
        text: 'C:\\path\\to\\your\\fake\\directory> git init'
    },
    {
        text: 'C:\\path\\to\\your\\fake\\directory> git remote add origin https://github.com/FakeUser/FakeRepo.git'
    },
    {
        text: 'C:\\path\\to\\your\\fake\\directory> git branch -M main'
    },
    {
        text: 'C:\\path\\to\\your\\fake\\directory> git add .'
    },
    {
        text: 'C:\\path\\to\\your\\fake\\directory> git commit -m "I\'m Awesome!!"'
    },
    {
        text: 'C:\\path\\to\\your\\fake\\directory> git push -u origin main'
    },
    {
        text: 'C:\\path\\to\\your\\fake\\directory> git push --force origin main'
    },
];
const container = document.querySelector('.block');
letsRender = () =>{
    for (let i = 0; i < texts.length; i++) {
        const P = document.createElement('p');
        P.textContent = texts[i].text;
        container.appendChild(P);
    }
};
letsRender();
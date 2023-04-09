const files = document.querySelector('.files');
const warning = document.querySelector('.warning');
const links = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuB3DpXeLZdhbeHJelcFLUv6XglQrzqs8C9g&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsTZY3_0QoWniJyDXF1TJvsds-kI9dC5EjA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbW15JuEDHuWBA1mZeJ5Sflohnxki1HqYlA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99dvCYz7-xwh_PDbWzedkepiZm_DuWlr17w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi55VS5h-F892KlQTK5HKpvEjpLMYP-T5m4Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkU1T8YV6Bu6mRlhNVDAFB4ChDRO6GoaC6tA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasvNJr7Csc9xoX6nBelm73RK1A6m88zsTEQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ50BCnbCkVGySK4qzc-XRwtkWEHd_HQ18Mw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1kW7Apu6Z18wShK6c42yB-u5xGmtdY6sdg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1kW7Apu6Z18wShK6c42yB-u5xGmtdY6sdg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-5uHDqWb1ljz4hHtZ9PjGQm6jTYfcdrpPg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_E9WOHoTuLM3KKNp8taipEvSSfZO3xpp_w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopbWkCFgRQr1KN2aJeG0n5Dzfh6lxjA9xiA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc3W7IVW48DtuqY_F17Hq2Iiqo8i4xVZDkQ&usqp=CAU',
    'https://i.pinimg.com/236x/bb/cf/ef/bbcfef6b655956a3c8296b85eede9fc1.jpg',
    'https://i.pinimg.com/236x/7b/2a/48/7b2a48f645e4caef64ecb40c6daaba05.jpg',
    'https://i.pinimg.com/236x/67/5b/d9/675bd9f6f249ae39782a3dc440544bfc.jpg',
    'https://i.pinimg.com/236x/c2/1e/35/c21e35c8b03c601d7efcaa3278df9af2.jpg',
    'https://i.pinimg.com/236x/e3/db/18/e3db18323e4d147b21ca2e8afd7ed3ec.jpg',
    'https://i.pinimg.com/236x/10/2f/7c/102f7c03f42200588483ee4a046d5e25.jpg',
    'https://i.pinimg.com/236x/41/d6/5a/41d65a94c30ca62194346b5569f5831f.jpg',
    'https://i.pinimg.com/236x/35/cd/8f/35cd8fa3e03a848a887c7eea65ef081d.jpg',
    'https://i.pinimg.com/236x/e0/45/14/e04514944bcc6f7db0ce0bc8e9d0f66c.jpg',
    'https://i.pinimg.com/236x/6d/a4/1a/6da41a79722e1d27ba96f13f902e0acf.jpg',
    'https://i.pinimg.com/236x/ed/17/32/ed1732aafffbbdeee3e02bd617473969.jpg',
    'https://i.pinimg.com/236x/cc/cd/ee/cccdee19fcc969f95a75c25a591976f0.jpg',
    'https://i.pinimg.com/236x/b3/7f/13/b37f13c2f3818b458f65ac53dd18f46c.jpg',
    'https://i.pinimg.com/236x/c8/44/a1/c844a1861394d687f2cc466f718d8105.jpg'
]
function loadcontent() {
    for (let i = 0; i <= links.length; i++) {
        const mainframe = document.createElement('div');
        mainframe.setAttribute('class', 'mainframe');
        mainframe.id = i;

        const post = document.createElement('img');
        post.setAttribute('class', 'post');
        post.src = links[i];

        const infotab = document.createElement("div");
        infotab.setAttribute('class', 'infotab')
        infotab.innerHTML = 'Private Repository';

        files.appendChild(mainframe);
        mainframe.appendChild(post)
        mainframe.appendChild(infotab);
    }
}
loadcontent()

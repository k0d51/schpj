Zfont.init(Zdog);

let alg = new Zdog.Illustration({ 
    element: '.algebra',  
}); 
let stats = new Zdog.Illustration({
    element: '.statistics',
});
let func = new Zdog.Illustration({
    element: '.func',
});
let prog = new Zdog.Illustration({
    element: '.progressions',
});



let SofiaSans = new Zdog.Font({
    src: 'SofiaSans-VariableFont_wght.ttf'
});

new Zdog.Text({
    addTo: alg,
    font: SofiaSans,
    value: '1+1',
    fontSize: 64,
    color: '#ffbe0b',
    textAlign: 'center',
    fill: true,
    translate: { y: 18},
});


new Zdog.Text({
    addTo: func,
    font: SofiaSans,
    value: 'y=x',
    fontSize: 64,
    textAlign: 'center',
    color: '#ffbe0b',
    fill: true,
    translate: { y: 18},
});

new Zdog.Text({
    addTo: stats,
    font: SofiaSans,
    value: 'P(A)',
    fontSize: 64,
    textAlign: 'center',
    color: '#ffbe0b',
    fill: true,
    translate: { y: 18},
});

new Zdog.Text({
    addTo: prog,
    font: SofiaSans,
    value: 'a₂=a₁+b',
    fontSize: 28,
    textAlign: 'center',
    color: '#ffbe0b',
    fill: true,
    translate: { y: 10},
});


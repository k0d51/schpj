let gh = new Zdog.Illustration({
    element: '.gh',
});
let tire = new Zdog.Illustration({
    element: '.tire',
});
let flat = new Zdog.Illustration({
    element: '.flat',
});
let cs = new Zdog.Illustration({
    element: '.cs',
});
let paper = new Zdog.Illustration({
    element: '.paper',
});
let oven = new Zdog.Illustration({
    element: '.oven',
});
let travel = new Zdog.Illustration({
    element: '.travel',
});

new Zdog.Ellipse({
    addTo: gh,
    diameter: 50,
    stroke: 15,
    color:'#ffbe0b',
});
new Zdog.Ellipse({
    addTo: tire,
    diameter: 50,
    stroke: 15,
    color:'#ffbe0b',
});
new Zdog.Ellipse({
    addTo: flat,
    diameter: 50,
    stroke: 15,
    color:'#ffbe0b',
});
new Zdog.Ellipse({
    addTo: cs,
    diameter: 50,
    stroke: 15,
    color:'#ffbe0b',
});
new Zdog.Ellipse({
    addTo: paper,
    diameter: 50,
    stroke: 15,
    color:'#ffbe0b',
});
new Zdog.Ellipse({
    addTo: oven,
    diameter: 50,
    stroke: 15,
    color:'#ffbe0b',
});
new Zdog.Ellipse({
    addTo: travel,
    diameter: 50,
    stroke: 15,
    color:'#ffbe0b',
});

function animate() {
    gh.rotate.y += 0.04;
    tire.rotate.y += 0.03;
    flat.rotate.y += 0.02;
    cs.rotate.y += 0.01;
    paper.rotate.y += 0.02;
    oven.rotate.y += 0.03;
    travel.rotate.y += 0.04;
    gh.updateRenderGraph();
    tire.updateRenderGraph();
    flat.updateRenderGraph();
    cs.updateRenderGraph();
    paper.updateRenderGraph();
    oven.updateRenderGraph();
    travel.updateRenderGraph();
    requestAnimationFrame( animate );
}

animate();
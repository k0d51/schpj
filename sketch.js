let gh = new Zdog.Illustration({ //
    element: '.gh',  //
    scale: 0.6,  //
}); //
let tire = new Zdog.Illustration({
    element: '.tire',
    scale: 1.5,
});
let flat = new Zdog.Illustration({
    element: '.flat',
    scale: 1.2,
});
let cs = new Zdog.Illustration({
    element: '.cs',
    scale: 1.2,
});
let paper = new Zdog.Illustration({
    element: '.paper',
    scale: .5,
});
let oven = new Zdog.Illustration({
    element: '.oven',
    scale: 1.2,
});
let travel = new Zdog.Illustration({
    element: '.travel',
    scale: .5,
});
let angle = new Zdog.Illustration({
    element: '.angle',
});
let circ = new Zdog.Illustration({
    element: '.circles',
});
let area = new Zdog.Illustration({
    element: '.area',
});



let rect = new Zdog.Rect({  //
    addTo: gh, //
    width: 120, //
    height: 80, 
    stroke: 15, //
    color: '#ffbe0b', //
    translate: {y: 20}, //
    rotate: { x: Zdog.TAU/4 } //
}); //
let hemi = new Zdog.Ellipse({
    addTo: rect,
    diameter: 80,
    stroke: 15,
    quarters: 2,
    color:'#ffbe0b',
    translate: { x: 60 },
    rotate: { y: Zdog.TAU/4 },
});
hemi.copy ({
    translate: { x: -60 },
});
new Zdog.Shape({
    addTo: gh,
    path: [
      { x: -60, y: -20 },
      { x:  60, y: -20 },
    ],
    stroke: 15,
    color: '#ffbe0b',
  });


let tirebase = new Zdog.Ellipse({
    addTo: tire,
    diameter: 50,
    stroke: 15,
    color:'#ffbe0b',
});
let cross1 = new Zdog.Shape({
    addTo: tirebase,
    path: [
      { x: -10, y: -10 },
      { x: 10, y: 10 },
    ],
    stroke: 10,
    color: '#fb5607',
  });
  
  let cross2 = new Zdog.Shape({
    addTo: tirebase,
    path: [
      { x: -10, y: 10 },
      { x: 10, y: -10 },
    ],
    stroke: 10,
    color: '#fb5607',
})


let flat1 = new Zdog.Rect({
    addTo: flat,
    width: 80,
    height: 60,
    stroke: false,
    fill: true,
    color: '#ffbe0b',
});
new Zdog.Rect({
    addTo: flat1,
    width: 10,
    height: 20,
    stroke: 10,
    fill: true,
    color: '#fb5607',
    translate: { x: 20 },
});
new Zdog.Rect({
    addTo: flat1,
    width: 10,
    height: 20,
    stroke: 10,
    fill: true,
    color: '#fb5607',
    translate: { x: -20 },
});


let box = new Zdog.Box({
    addTo: cs,
    width: 45,
    height: 40,
    depth: 40,
    stroke: false,
    color: '#ffbe0b',
    leftFace: '#fb5607',
    rightFace: '#fb5607',
    translate: { y : 20 },
});
new Zdog.Cone({
    addTo: box,
    diameter: 50,
    length: 30,
    stroke: 10,
    color: '#fb5607',
    rotate: { x : Zdog.TAU/4 },
    translate: { y : -25 },
  });


let papergr = new Zdog.Group ({
    addTo: paper,
});
let shape11 = new Zdog.Shape({
    addTo: papergr,
    path: [
      { x: -60, y: -60 },   // start
      { arc: [
        { x:  20, y: -60 }, // corner
        { x:  20, y:  20 }, // end point
      ]},
      { arc: [ // start next arc from last end point
        { x:  20, y:  60 }, // corner
        { x:  60, y:  60 }, // end point
      ]},
    ],
    closed: false,
    stroke: 10,
    color: '#ffbe0b',
    translate: {z: -60},
});
let shape12 = shape11.copy({
    translate: { z: 60 },
});
let shape13 = new Zdog.Shape({
    addTo: papergr,
    path: [{x: -60, y:-60, z: -60},
    {x: -60, y: -60, z: 60}],
    stroke: 10,
    color: '#ffbe0b',
});
let shape14 = shape13.copy({
    path: [{x: 60, y:60, z: -60},
        {x: 60, y: 60, z: 60}],
});


let ovenbase = new Zdog.Box({
    addTo: oven,
    width: 50,
    height: 30,
    depth: 30,
    stroke: 10,
    color: '#ffbe0b',
    leftFace: '#fb5607',
    rightFace: '#fb5607',
    translate: {y: 20},
});
let roundedRect = new Zdog.RoundedRect({
    addTo: ovenbase,
    width: 30,
    height: 20,
    cornerRadius: 50,
    stroke: 10,
    color: '#fb5607',
    translate:{ z:25 },
});
 new Zdog.Box({
    addTo: ovenbase,
    width: 10,
    height: 30,
    depth: 10,
    stroke: 10,
    color: '#ffbe0b',
    leftFace: '#fb5607',
    rightFace: '#fb5607',
    translate: {y: -20, x: 10},
});


let mtn1 = new Zdog.Shape({
    addTo: travel,
    path: [
      { x:   0, y: -40 },
      { x:  40, y:  40 },
      { x: -40, y:  40 },
    ],
    stroke: 10,
    color: '#fb5607',
    translate:{ x:-40, y:40 },
});
let mtn2 = mtn1.copy({
    translate: {x: 10, y: 40},
})
new Zdog.Ellipse({
    addTo: travel,
    diameter: 10,
    stroke: 20,
    color: '#ffbe0b',
    translate: {x: 60, y: -50},
});

new Zdog.Shape({
    addTo: angle,
    path: [
      { x:   0, y: -40 },
      { x:  -40, y:  40 },
      { x: 40, y:  40 },  
    ],
    closed: false,
    stroke: 10,
    color: '#ffbe0b'
  });


  new Zdog.Ellipse({
    addTo: circ,
    diameter: 80,
    stroke: 10,
    color: '#ffbe0b',
  });

  new Zdog.Ellipse({
    addTo: area,
    diameter: 80,
    stroke: 10,
    fill: true,
    color: '#ffbe0b',
  });
  new Zdog.Shape({
    addTo: area,
    path: [
      { x:   0, y: 0 },
      { x:  40, y: 0 },
    ],
    closed: false,
    stroke: 10,
    color: '#fb5607'
  });



function animate() { //
    gh.rotate.y += 0.01; //
    tire.rotate.z += 0.03;
    paper.rotate.y += 0.02;
    oven.rotate.y += 0.01;
    gh.updateRenderGraph(); //
    tire.updateRenderGraph();
    flat.updateRenderGraph();
    cs.updateRenderGraph();
    paper.updateRenderGraph();
    oven.updateRenderGraph();
    travel.updateRenderGraph();
    angle.updateRenderGraph();
    circ.updateRenderGraph();
    area.updateRenderGraph();
    requestAnimationFrame( animate ); //
}

animate(); //
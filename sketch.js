var canvas;
let points = [];
let tri = [];

const CONF = {
  point_count: 40
}

const DRAW_DATA = {
  time: 0,
  looping: true
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  // background(15);
}

function draw() {
  background(15, 10);

  let pt_angle = cos( DRAW_DATA.time * 5 ) * TWO_PI;
  let pt_radius = sin( DRAW_DATA.time * 5 ) * sin( DRAW_DATA.time * 1.25 ) * cos( DRAW_DATA.time * 7 ) * height/2.3;
  let point1 = p5.Vector.fromAngle( pt_angle, pt_radius );
  
  pt_angle = sin( DRAW_DATA.time * 5 ) * cos( DRAW_DATA.time * -2 ) * TWO_PI;
  pt_radius = cos( DRAW_DATA.time * 5 ) * height/2.3;
  let point2 = p5.Vector.fromAngle( pt_angle, pt_radius );
  
  points = makePoints( CONF.point_count, 4 );
  tri = makePoints( 3, -1 );

  // Draw points
  // stroke( 255, 5 );
  // strokeWeight( 1 );
  // for (let i = 0; i < points.length; i++) {
  //   for (let j = 0; j < points.length; j++) {
  //     line( points[i].x, points[i].y, points[j].x, points[j].y,  );
  //   }
  // }
  // Draw tri / points
  // stroke( 255, 5 );
  // strokeWeight( 1 );
  // for (let i = 0; i < tri.length; i++) {
  //   for (let j = 0; j < points.length; j++) {
  //     line( tri[i].x, tri[i].y, points[j].x, points[j].y,  );
  //   }
  // }
  // Draw point
  stroke( 255, 30 );
  strokeWeight( 1 );
  for (let j = 0; j < points.length; j++) {
    line( point1.x + width/2, point1.y + height/2, points[j].x, points[j].y,  );
  }
  for (let j = 0; j < points.length; j++) {
    line( point2.x + width/2, point2.y + height/2, points[j].x, points[j].y,  );
  }
  stroke( 255 );
  point( point2.x + width/2, point2.y + height/2 );
  DRAW_DATA.time += 0.001;
}

function makePoints(count, time_mult) {
  let points = [];
  let center = new p5.Vector( width/2, height/2 );
  for (let i = 0; i < count; i++) {
    let pt = p5.Vector.fromAngle(i * (TWO_PI/count) + DRAW_DATA.time * time_mult, height/2.3).add(center);
    points.push( pt );
  }
  return points;
}


function keyTyped() {
  if (key === " ") {
    if (DRAW_DATA.looping) {
      noLoop();
      DRAW_DATA.looping = false;
    } else {
      loop();
      DRAW_DATA.looping = true;
    }
  }
}
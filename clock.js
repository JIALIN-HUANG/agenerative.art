function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();


// I am going to enter the circle behind
var element = document.getElementById("background");
var ctx = element.getContext("2d");
var camera = {};
camera.x = 0;
camera.y = 0;
var scale = 1.0;
var obj = [];

var t = {};
t.angle = Math.random() * Math.PI * 2; //start angle
t.radius = 350;
t.x = Math.cos(t.angle) * t.radius; // start position x
t.y = Math.sin(t.angle) * t.radius; //start position y
t.circumference = t.radius * 2 * Math.PI; //curcumfrence
t.duration = 60000; //60 seconds per rotation
t.start = Date.now();

obj.push(t);

function update() {
  for (var i = 0; i < obj.length; i++) {
    var delta = Date.now() - obj[i].start;
    obj.start = Date.now();
    // vector is a portion of circumference per ms.
    var vector = obj[i].circumference / obj[i].duration;
    // vector * data is a portion of circumference that the dot should have walked through by the duration delta.
    // You have to normalize by your radius to get an angel (in radian).
    var angle = (vector * delta) / obj[i].radius;
    // The angle is now already in radian, no longer need to convert from degree to radian.
    obj[i].x = obj[i].radius * Math.cos(angle);
    obj[i].y = obj[i].radius * Math.sin(angle);
  }
}

function draw() {
  update();
  ctx.clearRect(0, 0, element.width, element.height);

  ctx.save();

  ctx.translate(
    0 - (camera.x - element.width / 2),
    0 - (camera.y - element.height / 1.7)
  );
  ctx.scale(scale, scale);
  ctx.fillStyle = "blue";
  for (var i = 0; i < obj.length; i++) {
    ctx.beginPath();
    ctx.arc(0, 0, obj[i].radius, 0, Math.PI * 2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(obj[i].x, obj[i].y, 10, 0, Math.PI * 2);
    ctx.lineWidth = 30;
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
  }

  ctx.restore();
  requestAnimationFrame(draw);
}

draw();

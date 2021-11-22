
function hiddenCube()
{
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  const canvas = document.querySelector("canvas");

  const renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1.25, 1.25, 1.25 );
  const color0 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
  const color1 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
  const color2 = new THREE.MeshBasicMaterial( { color: 0x000000 } );
  const cube = new THREE.Mesh( geometry, color0 );
  scene.add( cube );

  color = 0 // 0, 1, 2
  time = 0

  posX = 0
  posY = -4
  factore = 1

  let animationLoop = () => {

      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
      cube.rotation.x += 0.01;
      

      if (time < 60 == 0) cube.position.x = posX+= factore;
      else if (time < 120) cube.position.y = posY+= factore;
      else if (time < 180) cube.position.x = posX-= factore;
      else if (time < 150) cube.position.y = posY-= factore;
    
      if (time % 60 == 0)
      {
        factore = factore == 0.1 ? -0.1 : 0.1;

        switch (color) {
          case 0:
            cube.material = color1;
            color = 1;
            break;
          case 1: 
            cube.material = color2;
            color = 2;
            break;
          case 2:
            cube.material = color0;
            color = 0;
            break;

          default:
            break;
        }
      }

      if (time > 180) time = 0;

      renderer.render( scene, camera );
      time++;
  };

  camera.position.z = 5;

  setInterval(animationLoop, 20);
}


/*
let launched = false
addEventListener("keypress", (event) => {
  if (event.key = ' ' && !launched) 
  {
    hiddenCube();
    launched = true;
  }
});

*/
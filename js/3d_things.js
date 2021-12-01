
function hiddenCube()
{
  
  let objects = []

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  const canvas = document.querySelector("canvas");

  const renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 3, 3, 3);
  const color0 = new THREE.MeshPhongMaterial( { color: 0x0e1fe3, specular: 0x222222, shininess: 10**4 } );

  xPos = [10, 0, -10]

  for (let i = 0; i < 3; i++) {

      let cube = new THREE.Mesh( geometry, color0)
    
      cube.position.z = -10;
      cube.position.y = 0;    
      cube.position.x = xPos[i];    

      scene.add( cube );
      objects.push(cube) 
    
    }


  const light = new THREE.PointLight(0xffffff, 10, 500)
  light.position.set(0.0, 0.0, 400.0)
  scene.add(light)



  let animationLoop = () => {

    for (let i = 0; i <  objects.length; i++) {
      objects[i].rotation.y += 0.01;
      objects[i].rotation.z += 0.01;
      objects[i].rotation.x += 0.01;
           
  };
  renderer.render( scene, camera );



}

   
    


    
  camera.position.z = 5;

  setInterval(animationLoop, 60);
}



let launched = false
addEventListener("keypress", (event) => {
  if (event.key = ' ' && !launched) 
  {
    hiddenCube();
    launched = true;
  }
});

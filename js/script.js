var texture = new TG.Texture( 600, 600 )
  .add( new TG.XOR().tint( 1, 0.3, 0.3 ) )
  .add( new TG.SinX().frequency( 0.004 ).tint( 0.25, 0, 0 ) )
  .add( new TG.Noise().tint( 0.1, 0.1, 0.2 ) )
  .toCanvas();

document.getElementById("container").appendChild(texture);
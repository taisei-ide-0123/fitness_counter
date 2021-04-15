import ml5 from 'ml5';

const sketch = (p) => {
  let video;
  let poseNet;
  let count = 0;
  let countCanvas;
  let should_count = true;
  let noseX = 0
  let noseY = 0
  let lShoulderX = 0
  let lShoulderY = 0
  let rShoulderX = 0
  let rShoulderY = 0
  let lElbowX = 0
  let lElbowY = 0
  let rElbowX = 0
  let rElbowY = 0
  let lWristX = 0
  let lWristY = 0
  let rWristX = 0
  let rWristY = 0
  let lHipX = 0
  let lHipY = 0
  let rHipX = 0
  let rHipY = 0
  let lKneeX = 0
  let lKneeY = 0
  let rKneeX = 0
  let rKneeY = 0
  let lAnkleX = 0
  let lAnkleY = 0
  let rAnkleX = 0
  let rAnkleY = 0

  // text(s, x, y, w, h)

  // 最初の1回だけ実装される処理
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    countCanvas = p.createGraphics(p.windowWidth, p.windowHeight * 0.1)
    video = p.createCapture(p.VIDEO);
    video.size(p.windowWidth, p.windowHeight);
    video.hide(); // 映像を一つにする
    poseNet = ml5.poseNet(video, p.modelReady);
    poseNet.on('pose', p.gotPoses); // ポーズが検出された時に結果を返すイベント
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.gotPoses = (poses) => {
    // console.log(poses)
    if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x
    let nY = poses[0].pose.keypoints[0].position.y
    let leftShoulderX = poses[0].pose.keypoints[5].position.x
    let leftShoulderY = poses[0].pose.keypoints[5].position.y
    let rightShoulderX = poses[0].pose.keypoints[6].position.x
    let rightShoulderY = poses[0].pose.keypoints[6].position.y
    let leftElbowX = poses[0].pose.keypoints[7].position.x
    let leftElbowY = poses[0].pose.keypoints[7].position.y
    let rightElbowX = poses[0].pose.keypoints[8].position.x
    let rightElbowY = poses[0].pose.keypoints[8].position.y
    let leftWristX = poses[0].pose.keypoints[9].position.x
    let leftWristY = poses[0].pose.keypoints[9].position.y
    let rightWristX = poses[0].pose.keypoints[10].position.x
    let rightWristY = poses[0].pose.keypoints[10].position.y
    let leftHipX = poses[0].pose.keypoints[11].position.x
    let leftHipY = poses[0].pose.keypoints[11].position.y
    let rightHipX = poses[0].pose.keypoints[12].position.x
    let rightHipY = poses[0].pose.keypoints[12].position.y
    let leftKneeX = poses[0].pose.keypoints[13].position.x
    let leftKneeY = poses[0].pose.keypoints[13].position.y
    let rightKneeX = poses[0].pose.keypoints[14].position.x
    let rightKneeY = poses[0].pose.keypoints[14].position.y
    let leftAnkleX = poses[0].pose.keypoints[15].position.x
    let leftAnkleY = poses[0].pose.keypoints[15].position.y
    let rightAnkleX = poses[0].pose.keypoints[16].position.x
    let rightAnkleY = poses[0].pose.keypoints[16].position.y

    noseX = p.lerp(noseX, nX, 0.5)
    noseY = p.lerp(noseY, nY, 0.5)
    lShoulderX = p.lerp(lShoulderX, leftShoulderX, 0.5)
    lShoulderY = p.lerp(lShoulderY, leftShoulderY, 0.5)
    rShoulderX = p.lerp(rShoulderX, rightShoulderX, 0.5)
    rShoulderY = p.lerp(rShoulderY, rightShoulderY, 0.5)
    lElbowX = p.lerp(lElbowX, leftElbowX, 0.5)
    lElbowY = p.lerp(lElbowY, leftElbowY, 0.5)
    rElbowX = p.lerp(rElbowX, rightElbowX, 0.5)
    rElbowY = p.lerp(rElbowY, rightElbowY, 0.5)
    lWristX = p.lerp(lWristX, leftWristX, 0.5)
    lWristY = p.lerp(lWristY, leftWristY, 0.5)
    rWristX = p.lerp(rWristX, rightWristX, 0.5)
    rWristY = p.lerp(rWristY, rightWristY, 0.5)
    lHipX = p.lerp(lHipX, leftHipX, 0.5)
    lHipY = p.lerp(lHipY, leftHipY, 0.5)
    rHipX = p.lerp(rHipX, rightHipX, 0.5)
    rHipY = p.lerp(rHipY, rightHipY, 0.5)
    lKneeX = p.lerp(lKneeX, leftKneeX, 0.5)
    lKneeY = p.lerp(lKneeY, leftKneeY, 0.5)
    rKneeX = p.lerp(rKneeX, rightKneeX, 0.5)
    rKneeY = p.lerp(rKneeY, rightKneeY, 0.5)
    lAnkleX = p.lerp(lAnkleX, leftAnkleX, 0.5)
    lAnkleY = p.lerp(lAnkleY, leftAnkleY, 0.5)
    rAnkleX = p.lerp(rAnkleX, rightAnkleX, 0.5)
    rAnkleY = p.lerp(rAnkleY, rightAnkleY, 0.5)

      console.log(nY);

      if (nY <= 350) {
        should_count = true;
      } else if (nY >= 370 && should_count) {
        count += 1;
        should_count = false;
      }
    }
  }

  p.modelReady = () => {
    // console.log('model ready')
  }

  // setup後に繰り返し実行される処理（フレーム単位）
  p.draw = () => {
    p.background(220);

    // カメラからの映像は一旦getしてイメージとして扱う方が軽量
    let img = video.get()
    p.image(img, 0, 0, p.width, p.height);

    p.fill(245, 222, 179)
    p.ellipse(noseX, noseY, 20)
    p.ellipse(lShoulderX, lShoulderY, 20)
    p.ellipse(rShoulderX, rShoulderY, 20)
    p.ellipse(lElbowX, lElbowY, 20)
    p.ellipse(rElbowX, rElbowY, 20)
    p.ellipse(lWristX, lWristY, 20)
    p.ellipse(rWristX, rWristY, 20)
    p.ellipse(lHipX, lHipY, 20)
    p.ellipse(rHipX, rHipY, 20)
    p.ellipse(lKneeX, lKneeY, 20)
    p.ellipse(rKneeX, rKneeY, 20)
    p.ellipse(lAnkleX, lAnkleY, 20)
    p.ellipse(rAnkleX, rAnkleY, 20)

    p.strokeWeight(5)
    p.stroke(255, 127, 80)
    p.line(lShoulderX, lShoulderY, rShoulderX, rShoulderY)
    p.line(lShoulderX, lShoulderY, lElbowX, lElbowY)
    p.line(lElbowX, lElbowY, lWristX, lWristY)
    p.line(rShoulderX, rShoulderY, rElbowX, rElbowY)
    p.line(rElbowX, rElbowY, rWristX, rWristY)
    p.line(lShoulderX, lShoulderY, lHipX, lHipY)
    p.line(lHipX, lHipY, lKneeX, lKneeY)
    p.line(lKneeX, lKneeY, lAnkleX, lAnkleY)
    p.line(rShoulderX, rShoulderY, rHipX, rHipY)
    p.line(rHipX, rHipY, rKneeX, rKneeY)
    p.line(rKneeX, rKneeY, rAnkleX, rAnkleY)
    p.line(lHipX, lHipY, rHipX, rHipY)

    p.line(0, 350, p.width, 350);

    // header
    countCanvas.background(0);
    countCanvas.noStroke();
    p.image(countCanvas, 0, 0);

    // count
    p.fill(255, 127, 80);
    p.stroke(255, 127, 80);
    p.text('count : ' + count, 50, 60);
    p.textSize(60);
  };


};

export default sketch;
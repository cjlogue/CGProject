import * as THREE from './three.module.js';
import {BoxBufferGeometry, CylinderBufferGeometry, PlaneGeometry} from "./three.module.js";



import {MtlObjBridge} from './three.js-master/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js';

import {OBJLoader2} from './three.js-master/examples/jsm/loaders/OBJLoader2.js';

import {MTLLoader} from './three.js-master/examples/jsm/loaders/MTLLoader.js';





const displayNext =  (itemArray, itemIdx, key) => {

    for (let i = 0; i < itemArray.length; i++) {

        if (i === itemIdx) {
            itemArray[i].translateX(8);
        }
        if (i === itemIdx + 1) {
            itemArray[i].translateX(-8);
        }
    }
    switch(key) {
        case "hat":
            if (itemIdx === hatArray.length -1) {
                hatIndex = -1;
                console.log("hatIndex =" + hatIndex)
            }
            else {
                hatIndex = itemIdx + 1;
                console.log("hatIndex =" + hatIndex)
            }
            break;
        case "eye":
            if (itemIdx === eyeArray.length -1) {
                eyeIndex = -1;
                console.log("eyeIndex =" + eyeIndex)
            }
            else {
                eyeIndex = itemIdx + 1;
                console.log("eyeIndex =" + eyeIndex)
            }
            break;
        case "nose":
            if (itemIdx === noseArray.length -1) {
                noseIndex = -1;
            }
            else {
                noseIndex = itemIdx + 1;
            }
            break;
        case "mouth":
            if (itemIdx === mouthArray.length -1) {
                mouthIndex = -1;
                console.log(mouthIndex);
            }
            else {
                mouthIndex = itemIdx + 1;
            }
            break;
        case "shirt":
            if (itemIdx === shirtArray.length -1) {
                shirtIndex = -1;
                console.log(shirtIndex);
            }
            else {
                shirtIndex = itemIdx + 1;
                console.log("shirt index ="  + shirtIndex);
            }
            break;
        default:
            if (itemIdx === scarfArray.length -1) {
                scarfIndex = -1;
            }
            else {
                scarfIndex = itemIdx + 1;
            }
    }

}

const displayPrevious =  (itemArray, itemIdx, key) => {
    console.log("display previous hit")

    for (let i = 0; i < itemArray.length; i++) {

        if (i === itemIdx) {
            itemArray[i].translateX(8);
        }
        if (i === itemIdx - 1) {
            itemArray[i].translateX(-8);
        }
    }
    switch(key) {
        case "hat":
            if (itemIdx === -1) {
                hatIndex = hatArray.length;
            }
            else {
                hatIndex = itemIdx - 1;
            }
            break;
        case "eye":
            if (itemIdx === -1) {
                eyeIndex = eyeArray.length;
            }
            else {
                eyeIndex = itemIdx - 1;
            }
            break;
        case "nose":
            if (itemIdx === -1) {
                noseIndex = noseArray.length;
            }
            else {
                noseIndex = itemIdx - 1;
            }
            break;
        case "mouth":
            if (itemIdx === -1) {
                mouthIndex = mouthArray.length -1;
            }
            else {
                mouthIndex = itemIdx - 1;
            }
            break;
        case "shirt":
            if (itemIdx === -1) {
                shirtIndex = shirtArray.length;
            }
            else {
                shirtIndex = itemIdx - 1;
                console.log("shirt index ="  + shirtIndex);
            }
            break;
        default:
            if (itemIdx === -1) {
                scarfIndex = scarfArray.length;
            }
            else {
                scarfIndex = itemIdx - 1;
            }
    }

}
var hatIndex;
var eyeIndex;
var noseIndex;
var mouthIndex;
var shirtIndex;
var scarfIndex;

var hatArray = [];
var eyeArray = [];
var noseArray = [];
var mouthArray = [];
var shirtArray = [];
var scarfArray = [];


// Create all elements of the Snow Buddy
const SnowBuddy = () => {

    //Materials
    const snowColor = new THREE.MeshPhongMaterial({
        color: 0xf0fffc});

    const carrotColor = new THREE.MeshPhongMaterial({
        color: 0xda841c});

    const hatColor = new THREE.MeshPhongMaterial({
        color: 0x5c504b});

    const redColor = new THREE.MeshPhongMaterial({
        color: 0xdc472c});

    const stickColor = new THREE.MeshPhongMaterial({
        color: 0x73410c});

    const sombreroColor = new THREE.MeshPhongMaterial({
        color: 0xd9c48b});

    const snowHatColor = new THREE.MeshPhongMaterial({
        color: 0x8fa1d9});

    const snowHatDetail = new THREE.MeshPhongMaterial({
        color: 0x48569c});

    const birthdayHatColor = new THREE.MeshPhongMaterial({
        color: 0xff9Bbf3});

    const birthdayPuff = new THREE.MeshPhongMaterial({
        color: 0xdc57e2});

    const icicleColor = new THREE.MeshPhongMaterial({
        color: 0xb5fff0});

    const purple = new THREE.MeshPhongMaterial({
        color: 0x3e0c66});

    const ringColor = new THREE.MeshPhongMaterial({
        color: 0xb89509});

    const yellowOrange = new THREE.MeshPhongMaterial({
        color: 0xf5bc42});

    const dustyPink = new THREE.MeshPhongMaterial({
        color: 0xcf97bc});

    const dustyPink2 = new THREE.MeshPhongMaterial({
        color: 0xbf7ca9});

    //Textures (implement once on Heroku?)
    const loader = new THREE.TextureLoader();

    const birthdayHatTexture = new THREE.MeshBasicMaterial(  {map: loader.load("./bdayHat2.jpg")});

    const HatTexture = new THREE.MeshBasicMaterial(  {map: loader.load("./WinterBirthdayHat.jpg")});

    const blueDots = new THREE.MeshBasicMaterial({map: loader.load("./BlueDots.bmp")});

    const bananaShirt = new THREE.MeshBasicMaterial({map: loader.load("./Textures/BananaShirt.jpg")});

    const cowShirt = new THREE.MeshBasicMaterial({map: loader.load("./Textures/cowPrintShirt.jpg")});

    const hawaiianShirt = new THREE.MeshBasicMaterial({map: loader.load("./Textures/HawaiianShirt.jpg")});

    const winterSweater1 = new THREE.MeshBasicMaterial({map: loader.load("./Textures/winterSweater1.jpg")});

    const winterSweater2 = new THREE.MeshBasicMaterial({map: loader.load("./Textures/winterSweater2.jpg")});

    const DownCoatMaterial = new THREE.MeshBasicMaterial({map: loader.load("./Textures/DownCoat.png")});

    const Fur = new THREE.MeshBasicMaterial({map: loader.load("./Textures/Fur.jpg")});

    const Stripes = new THREE.MeshBasicMaterial({map: loader.load("./Textures/Stripes.jpg")});

    const xmas3 = new THREE.MeshBasicMaterial({map: loader.load("./Textures/xmas3.jpg")});

    const xmas1 = new THREE.MeshBasicMaterial({map: loader.load("./Textures/xmas1.jpg")});


    // const bikini = new THREE.MeshBasicMaterial({map: loader.load("./Textures/bikini.jpg")});
    // bikini.rotation = THREE.MathUtils.degToRad(90);


    //Snowball Parts
    const baseBall = new THREE.Mesh(new THREE.SphereBufferGeometry(
        1, 30, 8), snowColor);

    const headBall = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.7, 30, 8), snowColor);

    baseBall.castShadow = true;
    headBall.castShadow = true;


    //Shirts:
    const middleBall = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), snowColor);
    middleBall.castShadow = true;

    const hawaiianBall = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), hawaiianShirt);
    hawaiianBall.castShadow = true;
    hawaiianBall.translateX(8);

    const bananaBall = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), bananaShirt);
    bananaBall.castShadow = true;
    bananaBall.translateX(8);

    const sweater1 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), winterSweater1);
    sweater1.castShadow = true;
    sweater1.translateX(8);

    const sweater2 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), winterSweater2);
    sweater2.castShadow = true;
    sweater2.translateX(8);

    const cowBall = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), cowShirt);
    cowBall.castShadow = true;
    cowBall.translateX(8);

    const dotsBall = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), blueDots);
    dotsBall.castShadow = true;
    dotsBall.translateX(8);

    const DownCoat = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), DownCoatMaterial);
    DownCoat.castShadow = true;
    DownCoat.translateX(8);

    const FurryBall = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), Fur);
    FurryBall.castShadow = true;
    FurryBall.translateX(8);

    const xmasBall3 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), xmas3);
    xmasBall3.castShadow = true;
    xmasBall3.translateX(8);

    const xmasBall1 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.85, 30, 8), xmas1);
    xmasBall1.castShadow = true;
    xmasBall1.translateX(8);


    shirtArray[0] = middleBall;
    shirtArray[1] = hawaiianBall;
    shirtArray[2] = bananaBall;
    shirtArray[3] = sweater1;
    shirtArray[4] = sweater2;
    shirtArray[5] = cowBall;
    shirtArray[6] = dotsBall;
    shirtArray[7] = DownCoat;
    shirtArray[8] = FurryBall;
    shirtArray[9] = xmasBall3;
    shirtArray[10] = xmasBall1;



    //Noses:
    // 1) Carrot Nose
    const nose = new THREE.Mesh(new THREE.ConeBufferGeometry(0.12, 0.16, 7), carrotColor);

    const carrotNose = new THREE.Group();
    carrotNose.add(nose);
    carrotNose.translateZ(1);
    carrotNose.translateY(-0.1);
    carrotNose.rotateX(90);


    // 2) Clown Nose
    const clownNose = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.12, 8, 8), redColor);
    clownNose.translateZ(1);
    clownNose.translateY(-.1);
    clownNose.translateX(8);

    // 3) Ice Cream Nose
    const iceCreamNose = new THREE.Mesh(new THREE.ConeBufferGeometry(
        0.12, 0.16, 7), icicleColor);
    iceCreamNose.translateZ(1);
    iceCreamNose.translateY(-0.1);
    iceCreamNose.rotateX(90);
    iceCreamNose.translateX(8);

    // 4) Knot Nose
    const knotNose = new THREE.Mesh(new THREE.TorusKnotBufferGeometry(
        0.07, 0.015, 64, 8), purple);
    knotNose.translateZ(1);
    knotNose.translateY(-.1);
    knotNose.translateX(8);

    // 5) Button Nose
    const buttonNose = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.08, 8, 8), hatColor);
    buttonNose.translateZ(1);
    buttonNose.translateY(-.1);
    buttonNose.translateX(8);


    noseArray[0] = carrotNose;
    noseArray[1] = clownNose;
    noseArray[2] = buttonNose;
    noseArray[3] = knotNose;
    noseArray[4] = iceCreamNose;



    //Eyes:

    // 1) Button Eyes
    const leftEye = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.08, 8, 8), hatColor);
    leftEye.translateX(-0.3);
    const rightEye = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.08, 8, 8), hatColor);
    rightEye.translateX(0.3);

    const buttonEyes = new THREE.Group();
    buttonEyes.add(leftEye);
    buttonEyes.add(rightEye);
    //buttonEyes.translateY(0.5);
    buttonEyes.translateZ(1.5);
    //buttonEyes.translateX(8);


    // 2) Glasses
    var leftGlass = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.15, 0.15, 0.01), hatColor);
    leftGlass.translateX(-0.3);
    leftGlass.rotateX(90);
    var rightGlass = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.15, 0.15, 0.01), hatColor);
    rightGlass.translateX(0.3);
    rightGlass.rotateX(90);
    var connector = new THREE.Mesh(new THREE.BoxBufferGeometry(0.4, 0.05, 0.02), hatColor);

    const sunGlasses = new THREE.Group();
    sunGlasses.add(leftGlass);
    sunGlasses.add(rightGlass);
    sunGlasses.add(connector);
    sunGlasses.translateZ(1);
    sunGlasses.translateX(8);

    // 2) Torus Eyes

    const leftTorus = new THREE.Mesh(new THREE.TorusKnotBufferGeometry(0.06, 0.015, 64, 8), redColor);
    leftTorus.translateX(-0.6);
    const rightTorus = new THREE.Mesh(new THREE.TorusKnotBufferGeometry(0.06, 0.015, 64, 8), redColor);

    const torusEyes = new THREE.Group();
    torusEyes.add(leftTorus);
    torusEyes.add(rightTorus);
    torusEyes.translateZ(1.5);
    torusEyes.translateX(.3);
    torusEyes.translateX(8);


    // 4) Heart Eyes
    const heartShape = new THREE.Shape();

    const x = -.03;
    const y = -.055;
    heartShape.moveTo(x + .03, y + .03);
    heartShape.bezierCurveTo(x + .03, y + .03, x + .025, y, x, y);
    heartShape.bezierCurveTo(x - .035, y, x - .035, y + .04, x - .035, y + .04);
    heartShape.bezierCurveTo(x - .035, y + .06, x - .02, y + .082, x + .03, y + .1);
    heartShape.bezierCurveTo(x + .065, y + .082, x + .085, y + .05, x + .085, y + .04);
    heartShape.bezierCurveTo(x + .085, y + .04, x + .085, y, x + .055, y);
    heartShape.bezierCurveTo(x + .04, y, x + .03, y + .03, x + .03, y + .03);

    const leftHeart = new THREE.Mesh(new THREE.ShapeBufferGeometry(heartShape), redColor);
    leftHeart.translateX(-.15)
    leftHeart.rotateZ(135);

    const rightHeart = new THREE.Mesh(new THREE.ShapeBufferGeometry(heartShape), redColor);
    rightHeart.translateX(.15)
    rightHeart.rotateZ(135);

    const heartEyes = new THREE.Group();
    heartEyes.add(leftHeart);
    heartEyes.add(rightHeart);

    heartEyes.translateZ(1.5);
    heartEyes.scale.y = 2;
    heartEyes.scale.x = 2;
    heartEyes.translateX(8);


    // 5) Gold Ring Eyes

    const leftRing = new THREE.Mesh(new THREE.TorusBufferGeometry(0.08, 0.03, 8, 24), ringColor);
    leftRing.translateX(-0.6);

    const rightRing = new THREE.Mesh(new THREE.TorusBufferGeometry(0.08, 0.03, 8, 24), ringColor);

    const ringEyes = new THREE.Group();
    ringEyes.add(leftRing);
    ringEyes.add(rightRing);
    ringEyes.translateZ(1.5);
    ringEyes.translateX(.3);
    ringEyes.translateX(8);


    eyeArray[0] = buttonEyes;
    eyeArray[1] = sunGlasses;
    eyeArray[2] = torusEyes;
    eyeArray[3] = heartEyes;
    eyeArray[4] = ringEyes;


    //Mouth
    // 1) Button Sphere Mouth
    const sphere1 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.05, 4, 4), hatColor);
    sphere1.translateZ(1.5);
    sphere1.translateY(-0.45);

    const sphere2 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.05, 4, 4), hatColor);
    sphere2.translateZ(2.59);
    sphere2.translateX(0.15)
    sphere2.translateY(-0.45);

    const sphere3 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.05, 4, 4), hatColor);
    sphere3.translateZ(2.59);
    sphere3.translateX(-0.15)
    sphere3.translateY(-0.45);


    const sphere4 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.05, 4, 4), hatColor);
    sphere4.translateZ(4.5);
    sphere4.translateX(0.25);
    sphere4.translateY(-0.45);


    const sphere5 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.05, 4, 4), hatColor);
    sphere5.translateZ(4.5);
    sphere5.translateX(-0.25)
    sphere5.translateY(-0.45);

    const mouthGroup = new THREE.Group();
    mouthGroup.add(sphere1);
    mouthGroup.add(sphere2);
    mouthGroup.add(sphere3);
    mouthGroup.add(sphere4);
    mouthGroup.add(sphere5);
    mouthGroup.translateY(0.05)

    //2) Blushing Mouth:
    const sphere6 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.05, 4, 4), hatColor);
    sphere6.translateZ(1.5);
    sphere6.translateY(-0.45);

    const sphere7 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.05, 4, 4), hatColor);
    sphere7.translateZ(2.59);
    sphere7.translateX(0.15)
    sphere7.translateY(-0.45);

    const sphere8 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.05, 4, 4), hatColor);
    sphere8.translateZ(2.59);
    sphere8.translateX(-0.15)
    sphere8.translateY(-0.45);


    const bigSphere1 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.07, 4, 4), redColor);
    bigSphere1.translateZ(4.5);
    bigSphere1.translateX(0.25);
    bigSphere1.translateY(-0.45);


    const bigSphere2 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.07, 4, 4), redColor);
    bigSphere2.translateZ(4.5);
    bigSphere2.translateX(-0.25);
    bigSphere2.translateY(-0.45);

    const blushingMouthGroup = new THREE.Group();
    blushingMouthGroup.add(sphere6);
    blushingMouthGroup.add(sphere7);
    blushingMouthGroup.add(sphere8);
    blushingMouthGroup.add(bigSphere1);
    blushingMouthGroup.add(bigSphere2);
    blushingMouthGroup.translateY(0.05);
    blushingMouthGroup.translateX(8);

    //3) Shock-Sphere Mouth
    const halfMouth = new THREE.Mesh(new THREE.SphereBufferGeometry(0.12,
        10, 10), hatColor);
    halfMouth.rotateZ(-50);

    const secondHalfMouth = new THREE.Mesh(new THREE.SphereBufferGeometry(0.06,
        10, 10), sombreroColor);
    secondHalfMouth.translateY(-0.15);
    secondHalfMouth.translateZ(3.5);
    //secondHalfMouth.rotateZ(-50);

    const shockSphere = new THREE.Group();
    shockSphere.add(halfMouth);
    shockSphere.add(secondHalfMouth);
    shockSphere.translateY(-0.45);
    shockSphere.translateZ(4.5);
    shockSphere.translateX(8);

    mouthArray[0] = mouthGroup;
    mouthArray[1] = blushingMouthGroup;
    mouthArray[2] = shockSphere;

    //Hats

    // 1) Top Hat
    var crown = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.5, 0.5, 0.7), hatColor);
    var brim = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.7, 0.7, 0.1), hatColor);
    brim.translateY(-0.4);
    var band = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.52, 0.52, 0.3), redColor);
    band.translateY(-0.3);

    crown.castShadow = true;
    brim.castShadow = true;
    band.castShadow = true;

    var topHat = new THREE.Group();
    topHat.add(crown);
    topHat.add(brim);
    topHat.add(band);
    topHat.translateY(1);
    //topHat.translateX(2);


    // 2) Birthday Hat
    var coneHat = new THREE.Mesh(new THREE.ConeBufferGeometry(
        0.5, 0.9, 15), birthdayHatTexture);
    var puffBall = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.12, 8, 8), birthdayPuff);
    puffBall.translateY(0.45);

    coneHat.castShadow = true;
    puffBall.castShadow = true;

    var birthdayHat = new THREE.Group();
    birthdayHat.add(coneHat);
    birthdayHat.add(puffBall);
    birthdayHat.translateY(1);
    birthdayHat.translateX(8);


    //3) Sombrero
    var sombrero = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.3, 0.6, 0.6), sombreroColor);
    sombrero.translateY(0.8);
    var sombreroBrim = new THREE.Mesh(new THREE.CylinderBufferGeometry(1.5, 1.5, 0.1), sombreroColor);
    sombreroBrim.translateY(0.5);

    sombrero.castShadow = true;
    sombreroBrim.castShadow = true;

    const sombreroHat = new THREE.Group();
    sombreroHat.add(sombrero);
    sombreroHat.add(sombreroBrim);
    sombreroHat.translateX(8);


    //4) Snow Hat
    var snowHat = new THREE.Mesh(new THREE.CylinderBufferGeometry(
        0.3, 0.6, 0.6), snowHatColor);
    snowHat.translateY(0.7);
    var roundHatTop = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.3, 8, 8), snowHatColor);
    roundHatTop.translateY(0.9);
    var snowHatFold = new THREE.Mesh(
        new THREE.CylinderBufferGeometry(0.6, 0.7, 0.2), snowHatDetail);
    snowHatFold.translateY(0.4);
    var pomPom = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.15, 8, 8), snowHatDetail);
    pomPom.translateY(1.25);

    snowHat.castShadow = true;
    roundHatTop.castShadow = true;
    snowHatFold.castShadow = true;
    pomPom.castShadow = true;

    const snowHatGroup = new THREE.Group();
    snowHatGroup.add(snowHat);
    snowHatGroup.add(snowHatFold);
    snowHatGroup.add(roundHatTop);
    snowHatGroup.add(pomPom);
    snowHatGroup.translateX(8);


    // 5) Graduation Cap
    var graduationCap = new THREE.Mesh(new THREE.CylinderBufferGeometry(
        0.5, 0.65, 0.5), hatColor);
    graduationCap.translateY(0.6);
    var graduationBrim = new THREE.Mesh(new BoxBufferGeometry(1.6, 0.1, 1.6), hatColor);
    graduationBrim.translateY(0.9);
    graduationBrim.rotateY(90);

    graduationCap.castShadow = true;
    graduationBrim.castShadow = true;

    const graduationCapGroup = new THREE.Group();
    graduationCapGroup.add(graduationCap);
    graduationCapGroup.add(graduationBrim);
    graduationCapGroup.translateX(8);


    hatArray[0] = topHat;
    hatArray[1] = birthdayHat;
    hatArray[2] = sombreroHat;
    hatArray[3] = snowHatGroup;
    hatArray[4] = graduationCapGroup;




    //SCARF
    // 1) Flying Scarf
    const neckPart = new THREE.Mesh(new CylinderBufferGeometry(0.65, 0.65, 0.15), redColor);
    neckPart.translateY(-0.55);

    const materialCloth = new THREE.MeshBasicMaterial({color: 0xdc472c, side: THREE.DoubleSide});

    const clothFlowingPart = new THREE.Mesh(new PlaneGeometry(0.3, 2), materialCloth);
    clothFlowingPart.translateX(-1);
    clothFlowingPart.translateY(-0.3);
    clothFlowingPart.rotation.x = Math.PI/ 4;
    clothFlowingPart.rotation.z = 180;

    neckPart.castShadow = true;
    clothFlowingPart.castShadow = true;

    const scarf = new THREE.Group();
    scarf.add(neckPart);
    scarf.add(clothFlowingPart);


    // 2) blue scarf

    const scarf2 = new THREE.Mesh(new CylinderBufferGeometry(
        0.65, 0.65, 0.15), blueDots);
    scarf2.translateY(-0.55);

    const scarfTail2 = new THREE.Mesh(new PlaneGeometry(0.3, 1), blueDots);
    scarfTail2.translateY(-1);
    scarfTail2.translateZ(1);
    scarfTail2.translateX(0.3);

    const scarf2Group = new THREE.Group();
    scarf2Group.add(scarf2);
    scarf2Group.add(scarfTail2);
    scarf2Group.translateX(8);


    // 2) yellowOrange Scarf

    const scarf3 = new THREE.Mesh(new CylinderBufferGeometry(
        0.65, 0.65, 0.15), yellowOrange);
    scarf3.translateY(-0.55);

    const scarfTail3 = new THREE.Mesh(new PlaneGeometry(0.3, 1), yellowOrange);
    scarfTail3.translateY(-1);
    scarfTail3.translateZ(1);
    scarfTail3.translateX(0.3);

    const scarf3Group = new THREE.Group();
    scarf3Group.add(scarf3);
    scarf3Group.add(scarfTail3);
    scarf3Group.translateX(8);


    // 4) yellowOrange Scarf

    const scarf4 = new THREE.Mesh(new CylinderBufferGeometry(
        0.65, 0.65, 0.15), dustyPink);
    scarf4.translateY(-0.55);

    const scarfTail4 = new THREE.Mesh(new PlaneGeometry(0.2, 1), dustyPink);
    scarfTail4.translateY(-1);
    scarfTail4.translateZ(1);
    scarfTail4.translateX(0.3);

    const secondScarfTail = new THREE.Mesh(new PlaneGeometry(0.2, 1), dustyPink2);
    secondScarfTail.translateY(-1);
    secondScarfTail.translateZ(0.7);
    secondScarfTail.translateX(0.5);
    secondScarfTail.rotation.z = Math.PI/ 9.5;

    const scarf4Group = new THREE.Group();
    scarf4Group.add(scarf4);
    scarf4Group.add(scarfTail4);
    scarf4Group.add(secondScarfTail);
    scarf4Group.translateX(8);


    // 5) Flying Scarf 5
    const scarf5 = new THREE.Mesh(new CylinderBufferGeometry(0.65, 0.65, 0.15), Stripes);
    scarf5.translateY(-0.55);

    const clothFlowingPart2 = new THREE.Mesh(new PlaneGeometry(0.3, 2), Stripes);
    clothFlowingPart2.translateX(-1);
    clothFlowingPart2.translateY(-0.3);
    clothFlowingPart2.rotation.x = Math.PI/ 4;
    clothFlowingPart2.rotation.z = 180;

    scarf5.castShadow = true;
    clothFlowingPart2.castShadow = true;

    const scarf5Group = new THREE.Group();
    scarf5Group.add(scarf5);
    scarf5Group.add(clothFlowingPart2);
    scarf5Group.translateX(8);

    scarfArray[0] = scarf;
    scarfArray[1] = scarf2Group;
    scarfArray[2] = scarf3Group;
    scarfArray[3] = scarf4Group;
    scarfArray[4] = scarf5Group;



    

    //Group head
    const headGroup = new THREE.Group();
    headGroup.add(headBall);
    //NOSE
    headGroup.add(carrotNose);
    headGroup.add(clownNose);
    headGroup.add(buttonNose);
    headGroup.add(knotNose);
    headGroup.add(iceCreamNose);
    //EYES
    headGroup.add(buttonEyes);
    headGroup.add(sunGlasses);
    headGroup.add(torusEyes);
    headGroup.add(heartEyes);
    headGroup.add(ringEyes);
    //HATS
    headGroup.add(topHat);
    headGroup.add(birthdayHat);
    headGroup.add(sombreroHat);
    headGroup.add(snowHatGroup);
    headGroup.add(graduationCapGroup);
    //MOUTH
    headGroup.add(mouthGroup);
    headGroup.add(blushingMouthGroup);
    headGroup.add(shockSphere);
    //SCARF
    headGroup.add(scarf);
    headGroup.add(scarf2Group);
    headGroup.add(scarf3Group);
    headGroup.add(scarf4Group);
    headGroup.add(scarf5Group);


    //INTERACTIONS
    //hat
    const nextHat = document.getElementById('nextHat')
    if(nextHat) {
        nextHat.addEventListener("click", () => displayNext(hatArray, hatIndex, "hat"));
        console.log(hatArray.length);
    }

    const previousHat = document.getElementById('previousHat')
    if(previousHat) {
        previousHat.addEventListener("click", () => displayPrevious(hatArray, hatIndex, "hat"));
        console.log("previous hat hit");
    }

    //eyes
    const nextEye = document.getElementById('nextEyes')
    if(nextEye) {
        nextEye.addEventListener("click", () => displayNext(eyeArray, eyeIndex, "eye"));
        console.log(hatArray.length);
    }

    const previousEye = document.getElementById('previousEyes')
    if(previousEye) {
        previousEye.addEventListener("click", () => displayPrevious(eyeArray, eyeIndex, "eye"));
        console.log(eyeArray.length);
    }

    //nose
    const nextNose = document.getElementById('nextNose')
    if(nextNose) {
        nextNose.addEventListener("click", () => displayNext(noseArray, noseIndex, "nose"));
        console.log(noseArray.length);
    }

    const previousNose = document.getElementById('previousNose')
    if(previousNose) {
        previousNose.addEventListener("click", () => displayPrevious(noseArray, noseIndex, "nose"));
    }

    //mouth
    const nextMouth = document.getElementById('nextMouth')
    if(nextMouth) {
        nextMouth.addEventListener("click", () => displayNext(mouthArray, mouthIndex, "mouth"));
    }

    const previousMouth = document.getElementById('previousMouth')
    if(previousMouth) {
        previousMouth.addEventListener("click", () => displayPrevious(mouthArray, mouthIndex, "mouth"));
    }

    //shirt
    const nextShirt = document.getElementById('nextShirt')
    if(nextShirt) {
        nextShirt.addEventListener("click", () => displayNext(shirtArray, shirtIndex, "shirt"));
    }

    const previousShirt = document.getElementById('previousShirt')
    if(previousShirt) {
        previousShirt.addEventListener("click", () => displayPrevious(shirtArray, shirtIndex, "shirt"));
    }

    //scarf
    const nextScarf = document.getElementById('nextScarf')
    if(nextScarf) {
        nextScarf.addEventListener("click", () => displayNext(scarfArray, scarfIndex, "scarf"));
    }

    const previousScarf = document.getElementById('previousScarf')
    if(previousScarf) {
        previousScarf.addEventListener("click", () => displayPrevious(scarfArray, scarfIndex, "scarf"));
    }





    //Buttons
    // 1) Standard Buttons:
    const button1 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.075, 8, 8), hatColor);
    button1.translateZ(1);
    button1.translateY(0.35);
    const button2 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.08, 8, 8), hatColor);
    button2.translateZ(1);
    button2.translateY(0.1);
    const button3 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.075, 8, 8), hatColor);
    button3.translateZ(1);
    button3.translateY(-0.15);


    //Arms
    // 1) Stick Arms
    const leftStick = new THREE.Mesh(new THREE.CylinderBufferGeometry(
        0.02, 0.04, 1.7), stickColor);
    leftStick.translateX(-0.7);
    leftStick.rotateZ(70);
    leftStick.translateY(0.6);
    const leftFinger1 = new THREE.Mesh(new THREE.CylinderBufferGeometry(
        0.01, 0.03, 0.5), stickColor);
    leftFinger1.translateX(-1.4);
    leftFinger1.translateY(0.8);

    leftStick.castShadow = true;
    leftFinger1.castShadow = true;

    // Left Arm Group
    const leftArm = new THREE.Group();
    leftArm.add(leftStick);
    leftArm.add(leftFinger1);


    const rightStick = new THREE.Mesh(new THREE.CylinderBufferGeometry(
        0.02, 0.04, 1.7), stickColor);
    rightStick.translateX(0.7);
    rightStick.rotateZ(250);
    rightStick.translateY(0.6);
    const rightFinger1 = new THREE.Mesh(new THREE.CylinderBufferGeometry(
        0.01, 0.03, 0.5), stickColor);
    rightFinger1.translateX(1.6);
    rightFinger1.translateY(0.5);

    rightStick.castShadow = true;
    rightFinger1.castShadow = true;

    // Right Arm Group
    const rightArm = new THREE.Group();
    rightArm.add(rightStick);
    rightArm.add(rightFinger1);



   // Middle Ball Group
    const middleBallGroup = new THREE.Group();
    middleBallGroup.add(middleBall);
    middleBallGroup.add(hawaiianBall);
    middleBallGroup.add(bananaBall);
    middleBallGroup.add(sweater1);
    middleBallGroup.add(sweater2);
    middleBallGroup.add(cowBall);
    middleBallGroup.add(dotsBall);
    middleBallGroup.add(DownCoat);
    middleBallGroup.add(FurryBall);
    middleBallGroup.add(xmasBall3);
    middleBallGroup.add(xmasBall1);
    //
    middleBallGroup.add(button1);
    middleBallGroup.add(button2);
    middleBallGroup.add(button3);
    middleBallGroup.add(leftArm);
    middleBallGroup.add(rightArm);




    //Place Snowballs on the screen
    headGroup.position.set(0,1.2, 0);     //Where should the head be on the screen?
    middleBallGroup.position.set(0, 0, 0);
    baseBall.position.set(0,-1.2, 0);


    //Group All components together: snowbuddyGroup
    const snowBuddyGroup = new THREE.Group();
    snowBuddyGroup.add(baseBall);
    snowBuddyGroup.add(middleBallGroup);
    snowBuddyGroup.add(headGroup);
    scene.add(snowBuddyGroup);


}

const createFloor = () => {

    const snowColor = new THREE.MeshPhongMaterial({
        color: 0xf0fffc});



    const planeGeo = new THREE.PlaneGeometry(15, 30, 0.5, 0.5);
    const planeMat = new THREE.MeshPhongMaterial({color: snowColor, side: THREE.DoubleSide});
    const plane = new THREE.Mesh(planeGeo, planeMat);

    plane.receiveShadow = true;
    //plane.rotation.x -= Math.PI * .5;
    plane.translateY(-1);
    plane.translateZ(-5);
    plane.rotateX(30);


    scene.add(plane);


    const pineColor = new THREE.MeshPhongMaterial({
        color: 0x2c713d});

    const stickColor = new THREE.MeshPhongMaterial({
        color: 0x73410c});

    const pineTop = new THREE.Mesh(new THREE.ConeBufferGeometry(0.5, 1.3, 5), pineColor);
    pineTop.translateY(0.8);

    const pineMiddle = new THREE.Mesh(new THREE.ConeBufferGeometry(0.7, 1, 5), pineColor);
    pineMiddle.translateY(0.2);

    const pineBottom = new THREE.Mesh(new THREE.ConeBufferGeometry(0.9, 1, 5), pineColor);
    pineBottom.translateY(-0.3);

    const pineTrunk = new THREE.Mesh(new THREE.CylinderBufferGeometry(
        0.1, 0.1, 1), stickColor);
    pineTrunk.translateY(-0.6);

    pineTop.castShadow = true;
    pineMiddle.castShadow = true;
    pineBottom.castShadow = true;
    pineTrunk.castShadow = true;

    const pineTree = new THREE.Group();
    pineTree.add(pineTop);
    pineTree.add(pineMiddle);
    pineTree.add(pineBottom);
    pineTree.add(pineTrunk);



    /* scene.add(pineTree);
    pineTree.translateZ(-1.9);
    pineTree.translateX(-4); */


    //North Pole
    /* const objLoader = new OBJLoader2();
    objLoader.load('./Pole.obj', (root) => {
        scene.add(root);
            root.translateX(3);
            root.translateY(-3);
            root.translateZ(-3);
    });
 */
    const mtlLoader = new MTLLoader();
mtlLoader.load('./Pole.mtl', (mtlParseResult) => {
    const objLoader = new OBJLoader2();
    const materials = MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult);
    objLoader.addMaterials(materials);
    objLoader.load('./Pole.obj', (root) => {
        scene.add(root);
        root.translateX(3);
        root.translateY(-3);
        root.translateZ(-3);
        root.scale.x = 0.8;
        root.scale.y = 0.9;
    });
});

mtlLoader.load('./snowTree.mtl', (mtlParseResult) => {
    const objLoader = new OBJLoader2();
    const materials = MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult);
    objLoader.addMaterials(materials);
    objLoader.load('./snowTree.obj', (root) => {
        scene.add(root);
        root.translateX(-4);
        root.translateY(-3);
        root.translateZ(-3);
        root.rotateY(200);
    });
});
    
   /*
    scene.add(pineTree);
    pineTree.translateZ(-1.5);
    pineTree.translateX(-4);
    pineTree.translateY(-.4) */


}





function createLighting() {


    const color = 0xFFFFFF;
    let directionalLight;
    directionalLight = new THREE.DirectionalLight(color, .75);
    directionalLight.position.set(-1, 2, 4);

    const ambLight = new THREE.AmbientLight(0x474747);

    scene.add(directionalLight);
    scene.add(ambLight);

    const spotLight = new THREE.SpotLight(color, .5);
    spotLight.position.set(-15, 20, 10);
    spotLight.target.position.set(0, 0, 0);
    spotLight.castShadow = true;

    scene.add(spotLight);
    scene.add(spotLight.target);


}



let scene;
const main = () => {

    // // CLOCK for timing functions
    //clock = new THREE.Clock(true);

    // RENDERER

    const canvas = document.getElementById("canvas");
    //document.querySelector('#canvas');   //////// is this how you get canvas?
    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
    });

 /*    document.getElementById("name").onclick = function(){
        var name;
        document.getElementById("myText").innerText = name; 
    } */

    // SCENE
    scene = new THREE.Scene();

    // CAMERA
    const fov = 20; //field of view (larger = fish eye)
    const aspect = 2;  // canvas default = 2 = 300/150
    const near = 0.1; //
    const far = 20; //
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.set(0, 0.3, 16); //move the camera a back
    scene.add(camera);

    createFloor();
    SnowBuddy();
    createLighting();

    hatIndex = 0;
    eyeIndex = 0;
    noseIndex = 0;
    mouthIndex = 0;
    shirtIndex = 0;
    scarfIndex = 0;


    //RENDER
    var drawScene = () => {

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        renderer.render(scene, camera);
        requestAnimationFrame(drawScene)
    }

    requestAnimationFrame(drawScene)

    // Bouncing Snow Friend

    const friendColor = new THREE.MeshPhongMaterial({
                                                        color: 0xf0fffc});
    const snowFriendGeo = new THREE.SphereBufferGeometry(0.7, 30, 8);
    const snowFriendMat = new THREE.MeshPhongMaterial({color: friendColor});
    const snowFriendMesh = new THREE.Mesh(snowFriendGeo, snowFriendMat);
    snowFriendMesh.castShadow = true;
    snowFriendMesh.translateX(4);
    console.log(snowFriendMesh.position.x);
    console.log(snowFriendMesh.position.y);
    console.log(snowFriendMesh.position.z);

    // Snow Friend Arms

    const stickColor = new THREE.MeshPhongMaterial({
                                                       color: 0x73410c});

    const leftArmFriend = new THREE.Mesh(new THREE.CylinderBufferGeometry(
        0.03, 0.02, 0.6), stickColor);

    leftArmFriend.castShadow = true;
    leftArmFriend.translateX(3.1);
    leftArmFriend.rotateZ(130);

    const rightArmFriend = new THREE.Mesh(new THREE.CylinderBufferGeometry(
        0.02, 0.03, 0.6), stickColor);

    rightArmFriend.castShadow = true;
    rightArmFriend.translateX(4.9);
    rightArmFriend.translateY(.2);
    rightArmFriend.rotateZ(-45);

    // Snow Friend Nose

    const carrotColor = new THREE.MeshPhongMaterial({
                                                        color: 0xda841c});
    const carrotNose = new THREE.Mesh(new THREE.ConeBufferGeometry(0.12, 0.16, 7), carrotColor);
    carrotNose.translateZ(2.5);
    // carrotNose.translateY(-0.1);
    carrotNose.rotateX(114.8);
    carrotNose.translateX(3.4);
    carrotNose.scale.x = .8;
    carrotNose.scale.y = .8;
    carrotNose.scale.z = .8;

    // Snow Friend Eyes

    const hatColor = new THREE.MeshPhongMaterial({
                                                     color: 0x5c504b});
    const leftEye = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.08, 8, 8), hatColor);
    leftEye.translateX(-0.2);
    const rightEye = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.08, 8, 8), hatColor);
    rightEye.translateX(0.2);

    const buttonEyes = new THREE.Group();
    buttonEyes.add(leftEye);
    buttonEyes.add(rightEye);
    buttonEyes.translateZ(2);
    buttonEyes.translateX(3.5);
    buttonEyes.translateY(.2);

    // Snow Friend Mouth

    const mouth1 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.06, 8, 8), hatColor);
    mouth1.translateX(-0.2);
    const mouth2 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.04, 8, 8), hatColor);
    mouth2.translateX(-0.1);
    mouth2.translateY(-.04);
    const mouth3 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.04, 8, 8), hatColor);
    mouth3.translateY(-0.07);
    const mouth4 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.04, 8, 8), hatColor);
    mouth4.translateX(0.1);
    mouth4.translateY(-.04);
    const mouth5 = new THREE.Mesh(new THREE.SphereBufferGeometry(
        0.06, 8, 8), hatColor);
    mouth5.translateX(0.2);

    const buttonMouth = new THREE.Group();
    buttonMouth.add(mouth1);
    buttonMouth.add(mouth2);
    buttonMouth.add(mouth3);
    buttonMouth.add(mouth4);
    buttonMouth.add(mouth5);
    buttonMouth.translateZ(2.5);
    buttonMouth.translateX(3.4);
    buttonMouth.translateY(-.15);

    // Snow Friend Hat

    const greenColor = new THREE.MeshPhongMaterial({
                                                      color: 0x2c713d});
    const redColor = new THREE.MeshPhongMaterial({
                                                     color: 0xdc472c});
    var crown = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.5, 0.5, 0.7), redColor);
    var brim = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.7, 0.7, 0.1), redColor);
    brim.translateY(-0.4);
    var band = new THREE.Mesh(new THREE.CylinderBufferGeometry(0.52, 0.52, 0.3), greenColor);
    band.translateY(-0.3);

    crown.castShadow = true;
    brim.castShadow = true;
    band.castShadow = true;

    var topHat = new THREE.Group();
    topHat.add(crown);
    topHat.add(brim);
    topHat.add(band);
    topHat.translateY(.9);
    topHat.translateX(4);
    topHat.rotateX(-.1);
    topHat.scale.x = .7;
    topHat.scale.y = .7;
    topHat.scale.z = .7;

    // Snow Friend Group
    const snowFriend = new THREE.Group();
    snowFriend.add(snowFriendMesh);
    snowFriend.add(carrotNose);
    snowFriend.add(buttonEyes);
    snowFriend.add(buttonMouth);
    snowFriend.add(topHat);
    snowFriend.add(rightArmFriend);
    snowFriend.add(leftArmFriend);
    scene.add(snowFriend);

    //RENDER Bounce
    var clock = new THREE.Clock();
    var time = 0;
    var delta = 0;

    renderBounce();

    function renderBounce() {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        requestAnimationFrame(renderBounce);
        delta = clock.getDelta();
        time += delta;
        snowFriend.position.y = -1.2 + Math.abs(Math.sin(time * 3)) * 2;
        renderer.render(scene, camera);
    }
}

// START
main();




import React, { useState } from 'react';
import { CubeColor } from '../types/cubeTypes';

import './Cube.css';

const initialCubeState: CubeColor[][][] = [
    [['W', 'W', 'W'], ['W', 'W', 'W'], ['W', 'W', 'W']], // Top face
    [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']], // Left face
    [['G', 'G', 'G'], ['G', 'G', 'G'], ['G', 'G', 'G']], // Front face
    [['R', 'R', 'R'], ['R', 'R', 'R'], ['R', 'R', 'R']], // Right face
    [['B', 'B', 'B'], ['B', 'B', 'B'], ['B', 'B', 'B']], // Back face
    [['Y', 'Y', 'Y'], ['Y', 'Y', 'Y'], ['Y', 'Y', 'Y']], // Bottom face
];

const rotateFace = (cube: CubeColor[][][], faceIndex: number, clockwise: boolean): CubeColor[][][] => {
    const newCube = JSON.parse(JSON.stringify(cube));
    const face = newCube[faceIndex];
  
    // Rotate the 3x3 face matrix clockwise or counter-clockwise
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        face[i][j] = clockwise
          ? cube[faceIndex][2 - j][i]
          : cube[faceIndex][j][2 - i];
      }
    }
    return newCube;
  };

const rotateBackCCW = (cube: CubeColor[][][]): CubeColor[][][] => {
    const newCube = rotateFace(cube, 4, false);
    // Update adjacent faces
    let topFace = newCube[0];
    let leftFace = newCube[1];
    let rightFace = newCube[3];
    let bottomFace = newCube[5];

    const temp = [topFace[0][0], topFace[0][1], topFace[0][2]];
    
    topFace[0][0] = leftFace[2][0];
    topFace[0][1] = leftFace[1][0];
    topFace[0][2] = leftFace[0][0];

    leftFace[0][0] = bottomFace[2][0];
    leftFace[1][0] = bottomFace[2][1];
    leftFace[2][0] = bottomFace[2][2];

    bottomFace[2][0] = rightFace[2][2];
    bottomFace[2][1] = rightFace[1][2];
    bottomFace[2][2] = rightFace[0][2];

    rightFace[0][2] = temp[0];
    rightFace[1][2] = temp[1];
    rightFace[2][2] = temp[2];

    return newCube;
};

const rotateFrontCW = (cube: CubeColor[][][]): CubeColor[][][] => {
    const newCube = rotateFace(cube, 2, true);
    
    let topFace = newCube[0];
    let leftFace = newCube[1];
    let rightFace = newCube[3];
    let bottomFace = newCube[5];
    
    const temp = [topFace[2][0], topFace[2][1], topFace[2][2]];

    topFace[2][0] = leftFace[2][2];
    topFace[2][1] = leftFace[1][2];
    topFace[2][2] = leftFace[0][2];
    
    leftFace[0][2] = bottomFace[0][0];
    leftFace[1][2] = bottomFace[0][1];
    leftFace[2][2] = bottomFace[0][2];
    
    bottomFace[0][0] = rightFace[2][0];
    bottomFace[0][1] = rightFace[1][0];
    bottomFace[0][2] = rightFace[0][0];
    
    rightFace[0][0] = temp[0];
    rightFace[1][0] = temp[1];
    rightFace[2][0] = temp[2];
    
    return newCube;
};

const rotateRightCCW = (cube: CubeColor[][][]): CubeColor[][][] => {
    const newCube = rotateFace(cube, 3, false);
    
    let topFace = newCube[0];
    let frontFace = newCube[2];
    let backFace = newCube[4];
    let bottomFace = newCube[5];
    
    const temp = [topFace[0][2], topFace[1][2], topFace[2][2]];
    
    topFace[0][2] = backFace[2][0];
    topFace[1][2] = backFace[1][0];
    topFace[2][2] = backFace[0][0];
    
    backFace[0][0] = bottomFace[2][2];
    backFace[1][0] = bottomFace[1][2];
    backFace[2][0] = bottomFace[0][2];
    
    bottomFace[0][2] = frontFace[0][2];
    bottomFace[1][2] = frontFace[1][2];
    bottomFace[2][2] = frontFace[2][2];
    
    frontFace[0][2] = temp[0];
    frontFace[1][2] = temp[1];
    frontFace[2][2] = temp[2];
    
    return newCube;
};

const rotateUpCW = (cube: CubeColor[][][]): CubeColor[][][] => {
    const newCube = rotateFace(cube, 0, true);
    
    let leftFace = newCube[1];
    let frontFace = newCube[2];
    let rightFace = newCube[3];
    let backFace = newCube[4];
    
    const temp = [...leftFace[0]];
    
    leftFace[0] = [...frontFace[0]];
    frontFace[0] = [...rightFace[0]];
    rightFace[0] = [...backFace[0]];
    backFace[0] = temp;
    
    return newCube;
};

const rotateLeftCW = (cube: CubeColor[][][]): CubeColor[][][] => {
    const newCube = rotateFace(cube, 1, true);
    
    let topFace = newCube[0];
    let frontFace = newCube[2];
    let backFace = newCube[4];
    let bottomFace = newCube[5];
    
    const temp = [topFace[0][0], topFace[1][0], topFace[2][0]];
    
    topFace[0][0] = backFace[2][2];
    topFace[1][0] = backFace[1][2];
    topFace[2][0] = backFace[0][2];
    
    backFace[0][2] = bottomFace[2][0];
    backFace[1][2] = bottomFace[1][0];
    backFace[2][2] = bottomFace[0][0];
    
    bottomFace[0][0] = frontFace[0][0];
    bottomFace[1][0] = frontFace[1][0];
    bottomFace[2][0] = frontFace[2][0];
    
    frontFace[0][0] = temp[0];
    frontFace[1][0] = temp[1];
    frontFace[2][0] = temp[2];
    
    return newCube;
};

const rotateDownCCW = (cube: CubeColor[][][]): CubeColor[][][] => {
    const newCube = rotateFace(cube, 5, false);
    
    let leftFace = newCube[1];
    let frontFace = newCube[2];
    let rightFace = newCube[3];
    let backFace = newCube[4];
    
    const temp = [...leftFace[2]];
    
    leftFace[2] = [...frontFace[2]];
    frontFace[2] = [...rightFace[2]];
    rightFace[2] = [...backFace[2]];
    backFace[2] = temp;
    
    return newCube;
};

const renderFace = (face: CubeColor[][]) => {
    return (
        <div className="cube-face">
            {face.map((row, rowIndex) => (
                <div key={rowIndex} className="cube-face-row">
                    {row.map((color, colIndex) => (
                        <div key={colIndex} className={`cube-cell ${color}`}></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const Cube = () => {
    const [rubiksCube, setRubiksCube] = useState(initialCubeState);

    return (
        <>
            <div>
                <div className="cube-face-container">
                    TOP
                    {renderFace(rubiksCube[0])}
                </div>

                <div className='row'>
                    <div className="cube-face-container">
                        LEFT
                        {renderFace(rubiksCube[1])}
                    </div>

                    <div className="cube-face-container">
                        FRONT
                        {renderFace(rubiksCube[2])}
                    </div>

                    <div className="cube-face-container">
                        RIGHT
                        {renderFace(rubiksCube[3])}
                    </div>

                    <div className="cube-face-container">
                        BACK
                        {renderFace(rubiksCube[4])}
                    </div>
                </div>

                <div className="cube-face-container">
                    BOTTOM
                    {renderFace(rubiksCube[5])}
                </div>
            </div>

            <div className="controls">
                <button onClick={() => setRubiksCube(rotateFrontCW(rubiksCube))}>Rotate Front Clockwise</button>
                <button onClick={() => setRubiksCube(rotateRightCCW(rubiksCube))}>Rotate Right Counter Clockwise</button>
                <button onClick={() => setRubiksCube(rotateUpCW(rubiksCube))}>Rotate Up Clockwise</button>
                <button onClick={() => setRubiksCube(rotateBackCCW(rubiksCube))}>Rotate Back Counter Clockwise</button>
                <button onClick={() => setRubiksCube(rotateLeftCW(rubiksCube))}>Rotate Left Clockwise</button>
                <button onClick={() => setRubiksCube(rotateDownCCW(rubiksCube))}>Rotate Down Counter Clockwise</button>
            </div>
        </>
    );
};

export default Cube;

export {
    rotateFrontCW,
    rotateRightCCW,
    rotateUpCW,
    rotateBackCCW,
    rotateLeftCW,
    rotateDownCCW
};

import { describe, beforeEach, test, expect } from "vitest";
import {
  rotateFrontCW,
  rotateRightCCW,
  rotateUpCW,
  rotateBackCCW,
  rotateLeftCW,
  rotateDownCCW,
} from "./Cube";
import { CubeColor } from "../types/cubeTypes";

const initialCubeState: CubeColor[][][] = [
  [['W', 'W', 'W'], ['W', 'W', 'W'], ['W', 'W', 'W']], // Top face
  [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']], // Left face
  [['G', 'G', 'G'], ['G', 'G', 'G'], ['G', 'G', 'G']], // Front face
  [['R', 'R', 'R'], ['R', 'R', 'R'], ['R', 'R', 'R']], // Right face
  [['B', 'B', 'B'], ['B', 'B', 'B'], ['B', 'B', 'B']], // Back face
  [['Y', 'Y', 'Y'], ['Y', 'Y', 'Y'], ['Y', 'Y', 'Y']], // Bottom face
];

describe("Rubik Cube Rotations", () => {
  let cube: CubeColor[][][];

  beforeEach(() => {
    cube = JSON.parse(JSON.stringify(initialCubeState));
  });

  test("should rotate the front face clockwise correctly", () => {
    const newCube = rotateFrontCW(cube);
    expect(newCube[0]).toEqual([
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
        ['O', 'O', 'O']
      ]);
      expect(newCube[1]).toEqual([
        ['O', 'O', 'Y'],
        ['O', 'O', 'Y'],
        ['O', 'O', 'Y']
      ]);
      expect(newCube[2]).toEqual([
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
        ['G', 'G', 'G']
      ]);
      expect(newCube[3]).toEqual([
        ['W', 'R', 'R'],
        ['W', 'R', 'R'],
        ['W', 'R', 'R']
      ]);
      expect(newCube[4]).toEqual([
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
        ['B', 'B', 'B']
      ]);
      expect(newCube[5]).toEqual([
        ['R', 'R', 'R'],
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y']
      ]);
  });

  test("should rotate the right face anti-clockwise correctly", () => {
    const newCube = rotateRightCCW(cube);
    expect(newCube[0]).toEqual([
      ['W', 'W', 'B'],
      ['W', 'W', 'B'],
      ['W', 'W', 'B']
    ]);
    expect(newCube[1]).toEqual([
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O']
    ]);
    expect(newCube[2]).toEqual([
      ['G', 'G', 'W'],
      ['G', 'G', 'W'],
      ['G', 'G', 'W']
    ]);
    expect(newCube[3]).toEqual([
      ['R', 'R', 'R'],
      ['R', 'R', 'R'],
      ['R', 'R', 'R']
    ]);
    expect(newCube[4]).toEqual([
      ['Y', 'B', 'B'],
      ['Y', 'B', 'B'],
      ['Y', 'B', 'B']
    ]);
    expect(newCube[5]).toEqual([
      ['Y', 'Y', 'G'],
      ['Y', 'Y', 'G'],
      ['Y', 'Y', 'G']
    ]);
  });

  test("should rotate the up face clockwise correctly", () => {
    const newCube = rotateUpCW(cube);
    expect(newCube[0]).toEqual([
      ['W', 'W', 'W'],
      ['W', 'W', 'W'],
      ['W', 'W', 'W']
    ]);
    expect(newCube[1]).toEqual([
      ['G', 'G', 'G'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O']
    ]);
    expect(newCube[2]).toEqual([
      ['R', 'R', 'R'],
      ['G', 'G', 'G'],
      ['G', 'G', 'G']
    ]);
    expect(newCube[3]).toEqual([
      ['B', 'B', 'B'],
      ['R', 'R', 'R'],
      ['R', 'R', 'R']
    ]);
    expect(newCube[4]).toEqual([
      ['O', 'O', 'O'],
      ['B', 'B', 'B'],
      ['B', 'B', 'B']
    ]);
    expect(newCube[5]).toEqual([
      ['Y', 'Y', 'Y'],
      ['Y', 'Y', 'Y'],
      ['Y', 'Y', 'Y']
    ]);
  });

  test("should rotate the back face anti-clockwise correctly", () => {
    const newCube = rotateBackCCW(cube);
    expect(newCube[0]).toEqual([
      ['O', 'O', 'O'],
      ['W', 'W', 'W'],
      ['W', 'W', 'W']
    ]);
    expect(newCube[1]).toEqual([
      ['Y', 'O', 'O'],
      ['Y', 'O', 'O'],
      ['Y', 'O', 'O']
    ]);
    expect(newCube[2]).toEqual([
      ['G', 'G', 'G'],
      ['G', 'G', 'G'],
      ['G', 'G', 'G']
    ]);
    expect(newCube[3]).toEqual([
      ['R', 'R', 'W'],
      ['R', 'R', 'W'],
      ['R', 'R', 'W']
    ]);
    expect(newCube[4]).toEqual([
      ['B', 'B', 'B'],
      ['B', 'B', 'B'],
      ['B', 'B', 'B']
    ]);
    expect(newCube[5]).toEqual([
      ['Y', 'Y', 'Y'],
      ['Y', 'Y', 'Y'],
      ['R', 'R', 'R']
    ]);
  });

  test("should rotate the left face clockwise correctly", () => {
    const newCube = rotateLeftCW(cube);
    expect(newCube[0]).toEqual([
      ['B', 'W', 'W'],
      ['B', 'W', 'W'],
      ['B', 'W', 'W']
    ]);
    expect(newCube[1]).toEqual([
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O']
    ]);
    expect(newCube[2]).toEqual([
      ['W', 'G', 'G'],
      ['W', 'G', 'G'],
      ['W', 'G', 'G']
    ]);
    expect(newCube[3]).toEqual([
      ['R', 'R', 'R'],
      ['R', 'R', 'R'],
      ['R', 'R', 'R']
    ]);
    expect(newCube[4]).toEqual([
      ['B', 'B', 'Y'],
      ['B', 'B', 'Y'],
      ['B', 'B', 'Y']
    ]);
    expect(newCube[5]).toEqual([
      ['G', 'Y', 'Y'],
      ['G', 'Y', 'Y'],
      ['G', 'Y', 'Y']
    ]);
  });

  test("should rotate the down face anti-clockwise correctly", () => {
    const newCube = rotateDownCCW(cube);
    expect(newCube[0]).toEqual([
      ['W', 'W', 'W'],
      ['W', 'W', 'W'],
      ['W', 'W', 'W']
    ]);
    expect(newCube[1]).toEqual([
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['G', 'G', 'G']
    ]);
    expect(newCube[2]).toEqual([
      ['G', 'G', 'G'],
      ['G', 'G', 'G'],
      ['R', 'R', 'R']
    ]);
    expect(newCube[3]).toEqual([
      ['R', 'R', 'R'],
      ['R', 'R', 'R'],
      ['B', 'B', 'B']
    ]);
    expect(newCube[4]).toEqual([
      ['B', 'B', 'B'],
      ['B', 'B', 'B'],
      ['O', 'O', 'O']
    ]);
    expect(newCube[5]).toEqual([
      ['Y', 'Y', 'Y'],
      ['Y', 'Y', 'Y'],
      ['Y', 'Y', 'Y']
    ]);
  });

  test("should rotate the up face clockwise and then the bottom face anti-clockwise correctly", () => {
    let newCube = rotateUpCW(cube);
    newCube = rotateBackCCW(newCube);
    
    expect(newCube[0]).toEqual([
      ['O', 'O', 'G'],
      ['W', 'W', 'W'],
      ['W', 'W', 'W']
    ]);
    expect(newCube[1]).toEqual([
      ['Y', 'G', 'G'],
      ['Y', 'O', 'O'],
      ['Y', 'O', 'O']
    ]);
    expect(newCube[2]).toEqual([
      ['R', 'R', 'R'],
      ['G', 'G', 'G'],
      ['G', 'G', 'G']
    ]);
    expect(newCube[3]).toEqual([
      ['B', 'B', 'W'],
      ['R', 'R', 'W'],
      ['R', 'R', 'W']
    ]);
    expect(newCube[4]).toEqual([
      ['O', 'B', 'B'],
      ['O', 'B', 'B'],
      ['O', 'B', 'B']
    ]);
    expect(newCube[5]).toEqual([
      ['Y', 'Y', 'Y'],
      ['Y', 'Y', 'Y'],
      ['R', 'R', 'B']
    ]);
  });

  test("should display multiple rotations correctly", () => {
    let newCube = rotateFrontCW(cube);
    newCube = rotateRightCCW(newCube);
    newCube = rotateUpCW(newCube);
    newCube = rotateBackCCW(newCube);
    newCube = rotateLeftCW(newCube);
    newCube = rotateDownCCW(newCube);
    
    expect(newCube[0]).toEqual([
      ['R', 'O', 'G'],
      ['B', 'W', 'W'],
      ['B', 'B', 'B']
    ]);
    expect(newCube[1]).toEqual([
      ['G', 'Y', 'Y'],
      ['O', 'O', 'G'],
      ['B', 'G', 'O']
    ]);
    expect(newCube[2]).toEqual([
      ['O', 'R', 'R'],
      ['O', 'G', 'W'],
      ['W', 'W', 'W']
    ]);
    expect(newCube[3]).toEqual([
      ['Y', 'B', 'O'],
      ['R', 'R', 'W'],
      ['O', 'Y', 'R']
    ]);
    expect(newCube[4]).toEqual([
      ['Y', 'B', 'W'],
      ['O', 'B', 'Y'],
      ['Y', 'Y', 'W']
    ]);
    expect(newCube[5]).toEqual([
      ['G', 'G', 'B'],
      ['R', 'Y', 'R'],
      ['R', 'G', 'G']
    ]);
  });
});

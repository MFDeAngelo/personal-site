import { enumerateSamplePoints, getDimmensionsToProjectTo, mapScalarToGrid } from '../../../src/components/randomPointGenerators/randomPointGenerator';

// getDimmensionsToProjectTo

test('gets dimmensions with equal coordinates', () => {
  // Arrange
  const totalSamples = 21;
  const dimmensions = { width: 7, height: 3 };
  // Act
  const result = getDimmensionsToProjectTo(totalSamples, dimmensions);
  // Assert
  expect(result).toStrictEqual({ columns: 7, rows: 3 });
});

test('gets dimmensions with greater coordinates', () => {
  // Arrange
  const totalSamples = 28;
  const dimmensions = { width: 7, height: 3 };
  // Act
  const result = getDimmensionsToProjectTo(totalSamples, dimmensions);
  // Assert
  expect(result).toStrictEqual({ columns: 8, rows: 3 });
});

test('gets dimmensions with quadrupled sample size', () => {
  // Arrange
  const totalSamples = 84;
  const dimmensions = { width: 7, height: 3 };
  // Act
  const result = getDimmensionsToProjectTo(totalSamples, dimmensions);
  // Assert
  expect(result).toStrictEqual({ columns: 14, rows: 6 });
});

// mapScalarToGrid

test('maps a scalar to the first row and column', () => {
  // Arrange
  const scalar = 0;
  const dimmensions = { columns: 7, rows: 3 };
  // Act
  const result = mapScalarToGrid(scalar, dimmensions);
  // Assert
  expect(result).toStrictEqual({ row: 0, column: 0 });
});

test('maps a scalar to the first row and second column', () => {
  // Arrange
  const scalar = 1;
  const dimmensions = { columns: 7, rows: 3 };
  // Act
  const result = mapScalarToGrid(scalar, dimmensions);
  // Assert
  expect(result).toStrictEqual({ row: 0, column: 1 });
});

test('maps a scalar to the second row and first column', () => {
  // Arrange
  const scalar = 7;
  const dimmensions = { columns: 7, rows: 3 };
  // Act
  const result = mapScalarToGrid(scalar, dimmensions);
  // Assert
  expect(result).toStrictEqual({ row: 1, column: 0 });
});

test('maps a scalar to the correct row and column', () => {
  // Arrange
  const scalar = 9;
  const dimmensions = { columns: 7, rows: 3 };
  // Act
  const result = mapScalarToGrid(scalar, dimmensions);
  // Assert
  expect(result).toStrictEqual({ row: 1, column: 2 });
});

// enumerateSamplePoints

test('enumerateSamplePoints returns an iterator of points', () => {
  // Arrange
  const maxSamples = 4;
  const dimmensions = { width: 20, height: 20 };
  // Act
  const result = [...enumerateSamplePoints(maxSamples, dimmensions)];
  // Assert
  expect(result).toContainEqual({ x: 5, y: 5 });
  expect(result).toContainEqual({ x: 15, y: 5 });
  expect(result).toContainEqual({ x: 5, y: 15 });
  expect(result).toContainEqual({ x: 15, y: 15 });
});







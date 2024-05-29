import { ringStrategy } from '../../src/components/randomPointGenerators/probabilityDistribution';

test('ring distribution', () => {
  const dimmensions = { height: 50, width: 50 };
  const pdf = ringStrategy(dimmensions);
  const heatMap = getHeatMap(pdf, dimmensions);

  outputHeatMap('ringDistribution', heatMap);

});

function getHeatMap(pdf, dimmensions) {
  let result = [];
  for (let i = 0; i < dimmensions.width; i++) {
    let column = [];
    for (let j = 0; j < dimmensions.height; j++) {
      let value = pdf(i, j);
      column.push(value);
    }
    result.push(column);
  }
  return result;
}

function outputHeatMap(fileName, data) {
  let output = `\n${fileName}\n`;
  for (let i = 0; i < data.length; i++) {
    let digits = [];
    for (let j = 0; j < data[i].length; j++) {
      digits.push(Math.floor(data[i][j] * 10));
    }
    output = output + digits.join('') + '\n';
  }
  console.log(output);
}

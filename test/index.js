import assert from 'assert';
import { transformFileSync } from '@babel/core';
import fs from 'fs';
import _ from 'lodash';
import path from 'path';

import handledProps from '../lib';

const fixturesDir = path.join(__dirname, 'fixtures');

const fixtureAssert = (fixtureDir, options = []) =>
  it(`should pass ${_.startCase(fixtureDir)}`, () => {
    const actualPath = path.join(fixturesDir, fixtureDir, 'actual.js');
    const expectedPath = path.join(fixturesDir, fixtureDir, 'expected.js');

    const actual = transformFileSync(actualPath, {
      babelrc: false,
      presets: [[handledProps, options]]
    }).code;

    const expected = fs.readFileSync(expectedPath).toString();
    assert.equal(_.trim(actual), _.trim(expected));
  });

describe('fixtures', () => {
  fixtureAssert('default', {});
  fixtureAssert('with-style', { style: true });
  fixtureAssert('with-style-theme', { style: true, theme: 'dark' });
  fixtureAssert('ignore-style', { style: true });
});

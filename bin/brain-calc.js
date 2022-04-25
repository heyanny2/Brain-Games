#!/usr/bin/env node

import { generateRound, gameRules } from '../src/games/calc.js';
import startEngine from '../src/index.js';

startEngine(generateRound, gameRules);

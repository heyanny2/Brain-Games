#!/usr/bin/env node

import { generateRound, gameRules } from '../src/games/gcd.js';
import startEngine from '../src/index.js';

startEngine(generateRound, gameRules);

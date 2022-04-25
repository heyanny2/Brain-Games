#!/usr/bin/env node

import { generateRound, gameRules } from '../src/games/even.js';
import startEngine from '../src/index.js';

startEngine(generateRound, gameRules);

#!/usr/bin/env node

import { gameData, gameRules } from '../src/games/calc.js';
import startEngine from '../src/index.js';

startEngine(gameData, gameRules);

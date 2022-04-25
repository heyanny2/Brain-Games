#!/usr/bin/env node

import { generateRound, gameRules } from '../src/games/progression.js';
import startEngine from '../src/index.js';

startEngine(generateRound, gameRules);

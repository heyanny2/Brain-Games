#!/usr/bin/env node

import { gameData, gameRules } from '../src/games/progression.js';
import startEngine from '../src/index.js';

startEngine(gameData, gameRules);

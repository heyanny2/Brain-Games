#!/usr/bin/env node

import { gameData, gameRules } from '../src/games/even.js';
import gameTemplate from '../src/index.js';

gameTemplate(gameData, gameRules);

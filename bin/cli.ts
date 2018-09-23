#!/usr/bin/env node

import yargs = require('yargs');
import { serveCommand } from '../src/commands/serveCommand';
import { seedCommand } from '../src/commands/seedCommand';

yargs.scriptName('datatables')
    .usage('$0 <cmd> [args]')
    .command('serve', 'Starts a development demo server.', serveCommand.register.bind(yargs), serveCommand.handle.bind(yargs))
    .command('seed', 'Creates a table and seeds demo data.', seedCommand.register.bind(yargs), seedCommand.handle.bind(yargs))
    .help()
    .argv;
    
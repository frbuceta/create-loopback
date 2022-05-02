#!/usr/bin/env node

const Environment = require('yeoman-environment');
const {YeomanCommand} = require("yeoman-environment/lib/util/command");
const generator = require('../generator');
const { name, description, version } = require('../package.json');

const command = new YeomanCommand()
  .name(name)
  .description(description)

Environment.prepareGeneratorCommand(command, generator);

command
  .version(version)
  .parseAsync(process.argv)
  .catch((e) => {
    console.error(e)
    process.exit(1)
  });

oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ cg COMMAND
running command...
$ cg (--version)
cli/0.0.0 linux-x64 node-v18.16.0
$ cg --help [COMMAND]
USAGE
  $ cg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cg hello PERSON`](#cg-hello-person)
* [`cg hello world`](#cg-hello-world)
* [`cg help [COMMANDS]`](#cg-help-commands)
* [`cg plugins`](#cg-plugins)
* [`cg plugins:install PLUGIN...`](#cg-pluginsinstall-plugin)
* [`cg plugins:inspect PLUGIN...`](#cg-pluginsinspect-plugin)
* [`cg plugins:install PLUGIN...`](#cg-pluginsinstall-plugin-1)
* [`cg plugins:link PLUGIN`](#cg-pluginslink-plugin)
* [`cg plugins:uninstall PLUGIN...`](#cg-pluginsuninstall-plugin)
* [`cg plugins:uninstall PLUGIN...`](#cg-pluginsuninstall-plugin-1)
* [`cg plugins:uninstall PLUGIN...`](#cg-pluginsuninstall-plugin-2)
* [`cg plugins update`](#cg-plugins-update)

## `cg hello PERSON`

Say hello

```
USAGE
  $ cg hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/23callGraph/cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `cg hello world`

Say hello world

```
USAGE
  $ cg hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cg hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/23callGraph/cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `cg help [COMMANDS]`

Display help for cg.

```
USAGE
  $ cg help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cg.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `cg plugins`

List installed plugins.

```
USAGE
  $ cg plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cg plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/index.ts)_

## `cg plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cg plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cg plugins add

EXAMPLES
  $ cg plugins:install myplugin 

  $ cg plugins:install https://github.com/someuser/someplugin

  $ cg plugins:install someuser/someplugin
```

## `cg plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cg plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cg plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/inspect.ts)_

## `cg plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cg plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cg plugins add

EXAMPLES
  $ cg plugins:install myplugin 

  $ cg plugins:install https://github.com/someuser/someplugin

  $ cg plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/install.ts)_

## `cg plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cg plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cg plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/link.ts)_

## `cg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cg plugins unlink
  $ cg plugins remove
```

## `cg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cg plugins unlink
  $ cg plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/uninstall.ts)_

## `cg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cg plugins unlink
  $ cg plugins remove
```

## `cg plugins update`

Update installed plugins.

```
USAGE
  $ cg plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.0.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->

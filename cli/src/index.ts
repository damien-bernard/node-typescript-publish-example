#!/usr/bin/env node

import { print } from '@damnard/node-typescript-publish-example-core/export-function'
import printMessage from '@damnard/node-typescript-publish-example-core/export-default-function'
import { MESSAGE } from '@damnard/node-typescript-publish-example-core/export-const'

print('Hello, world!')
printMessage('Hello, world!')
console.log(MESSAGE)

import {Command} from '@oclif/core'
import {readPackageJson, scanDir} from './utils'
import path from 'path'

export default class Scan extends Command {
  public async run(): Promise<void> {
    const dirRoot = '/home/juan/dev/23dev_env/'
    const pkg = await readPackageJson(path.join(dirRoot, '23universal'))
    const universal = await scanDir(path.join(dirRoot, '23universal', 'src', 'app'), [], 'component.ts')
    this.log(pkg.version)
    console.log(universal.length)
  }
}

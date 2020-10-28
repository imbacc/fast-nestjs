// const glob = require('glob')
import { glob } from 'glob'
import { join } from 'path'

/**
 * 模块自动引入
 * @param name 文件加名称
 * @param remove 去除文件名称 格式: app.module 或 ['app.module']
 */
const exportFun = (name: string, remove?: (string | Array<string>)) => {
    const list = []
    const files = glob.sync(`src/${name}/*.ts`)
    for (const module of files) {
        const path: string = join(__dirname, '../../') + module.substring(3, module.length - 3)  // 去掉了src和.ts => ../${name}/文件名 引入
        if (remove) {
           if (typeof remove === 'string' && path.indexOf(remove) !== -1) continue
           if (Array.isArray(remove)) {
               let b: boolean = false
               for (const min of remove) {
                    if (path.indexOf(min) !== -1) {
                        b = true
                        break
                    }
               }
               if (b) continue
           }
        }
        list.push(require(path).default)
    }
    return list.filter((info) => info)  // 筛选出空对象
}

export default exportFun
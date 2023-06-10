19 which eslint
20 ls /usr/local/share/npm-global
21 ls /usr/local/share/npm-global/lib
22 ls /usr/local/share/npm-global/lib/node_modules/
23 eslint --resolve-plugins-relative-to=/usr/local/share/npm-global/lib/node_modules .
24 history
node ➜ /workspaces/node-dev-container (main) $ yarn global dir
/home/node/.config/yarn/global
node ➜ /workspaces/node-dev-container (main) $ npm root -g
/usr/local/share/npm-global/lib/node_modules

yarn config set global-folder $(npm root -g)

ESLint couldn't find the plugin "@typescript-eslint/eslint-plugin".

npm install -g @typescript-eslint/eslint-plugin

yarn global add @typescript-eslint/eslint-plugin

eslint --resolve-plugins-relative-to=$(npm root -g) --print-config src/index.ts

npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier prettier

npm root -g
ls /usr/local/share/npm-global/lib/node_modules
npm install -g @typescript-eslint/parser @typescript-eslint/eslint-plugin

eslint --resolve-plugins-relative-to=$(npm root -g) --print-config src/index.ts

eslint --resolve-plugins-relative-to=$(npm root -g) src/index.ts

eslint --print-config src/index.ts

## global

settings で eslint の プラグイン ディレクトリを指定しても、Cannot find module エラーが解消しない

resolvePluginsRelativeTo のドキュメントは以下。設定自体は機能しているようだ
"eslint.options" https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
"resolvePluginsRelativeTo" https://eslint.org/docs/latest/integrate/nodejs-api#eslint-class

devcontainer.json

```json
	"settings": {

        "eslint.options": {
          "resolvePluginsRelativeTo": "/usr/local/share/npm-global/lib/node_modules"
        }
	}
```

やはり、devDependencies でプロジェクト毎にインストールするしかなさそう
参考：https://qiita.com/mysticatea/items/0931a7d910fcb91733ee#プラグインの読込元ディレクトリが変わります

package.json

```json
"devDependencies": {
	"@types/express": "4.17.17",
	"@typescript-eslint/eslint-plugin": "5.59.9",
	"@typescript-eslint/parser": "5.59.9"
}
```

.npmrc の値を global でも使いたい場合は
`npm -g config list` で npmrc の場所を調べる
/usr/local/etc/npmrc
これに、.npmrc の値をコピーする

eslint 設定の共通化
https://zenn.dev/hiro08gh/articles/2aa74ead3b2248983f92

# Jest

設定ファイルとディレクトリ構成
https://zenn.dev/huequica/articles/fix_module_decralation_in_vscode

# launch.json

```
     "runtimeArgs": [
        "--experimental-vm-modules",
        "--inspect-brk", # debug 開始直後に先頭で止める
        "/usr/local/share/npm-global/lib/node_modules/jest/bin/jest.js",
        "--runInBand"
      ],
```

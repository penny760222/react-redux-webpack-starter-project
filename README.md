# react-redux-webpack-starter-project

###  專案介紹
---
1. [IDE選擇  ](https://github.com/kensomanpow/react-redux-webpack-starter-project#ide選擇)
2. [Project Folder 介紹](https://github.com/kensomanpow/react-redux-webpack-starter-project#project-folder-介紹)  
3. [Project 使用方式](https://github.com/kensomanpow/react-redux-webpack-starter-project#project-使用方式)
4. [redux 我自己的常用套件](https://github.com/kensomanpow/react-redux-webpack-starter-project#redux-我自己的常用套件)  
  
  
>  PS: 此專案是單頁式應用，多頁式應用不能用這專案  
任何學習上不懂的地方，可以直接找我詢問，或是各位  
找到厲害好用的redux套件拜託分享給我:D  
  
  

### IDE選擇
---
- `Sublime Text 3`  -- 個人目前使用中 推薦的Sublime Text 3 plugin:
    - Babel (ES6 的 syntax)  
    - Babel snippets ( ES6 的 snippets)
    - Emmet (寫html必備，神速工具)
    - JSON Reindent (format JSON)
    - sass (sass syntax)
    - scss (scss syntax)
    - scss snippets (scss snippets)
    - sidebarEnhancements (sidebar功能變強，可以做更多事情)
    - sublimelinter (linter 要裝對應pluging才可以lint不同的語言)
    - sublimelinter-contrib-eslint (eslint 用於 lint javascript，設定檔案可以去找)
    - sublimelinter-jsxhint (這個目前我還不確定用途，但是應該跟jsx有關)
    - HTML-CSS-JS Prettify (讓程式碼自動縮排 by Linda)
    - Color Highlighter (css 色碼 下面會出現顏色,會馬上知道有沒有放錯顏色 by Linda)

- `Atom`  -- 目前也蠻主流的  
- `WebStorm` -- 要license，有興趣可先用試用版，有需要再叫公司買?
- `visual studio code` -- 試用了一下，覺得是個神器，強烈推薦大家使用，推薦的plugin:  
    - Rainbow Brackets (括號加上顏色，方便補上括號)
    - Prettify JSON (format JSON)
    - sass (sass syntax)
    - Babel ES6/ES7 (Babel syntax support)
    - jsx (react jsx syntax support)
    - React code snippets
    - beautify(format code)

###  Project Folder 介紹
---
- Proejct Root  
	- app (專案核心JS)  
		* actions (redux actions)  
		* components (react components, 通常照功能會再放到各功能的子資料夾)  
		* constants (enum)  
		* containers (每個Component的Entry, 用於Connect action 和 props，通常Naming Rule 為 XXXXZoneContainer.js)  
		* libraries (放底層js的相關utility)  
		* reducers (redux reducers)  
		* store (放redux的 configureStore.js)  
		* views (單純的html react component，通常放error page)  
        * asssets (靜態資源，圖片等等)  
        * stylesheets (scss檔案或是css檔案，裡面可以自己在新增子目錄)  
        main.jsx (entry point)  
		route.js (routing 相關設定)  
    * bin (跑 webpack 的時候會用到的一些 shell script)  
	* config (webpack不同env的config, 或是其他global的jsonconfig)  
	    
	index.html (single page entry)  
	package.json (專案dependency和執行的script)  
	readme.md  
  
  
  
### Project 使用方式
---
1. `npm install` (安裝專案的相關Denpendency)  
2. `npm run start` (目前設定執行 config/webpack.config.dev.js，會跑起專案目前設定跑在port 3000，會做hot reload)  
3. `npm run build` (目前設定執行 config/webpack.config.prod.js，build完的資源會在build/底下)  
  
  
  
  
### redux 我自己的常用套件
---
1. `redux-form` (我只能說用過之後只有讚，省很多事，可以直接跟後端整合error message和validation) <-- 出v6了，但是動很多，建議還是用v5  
2. `redux-slick` (前端一定會有slider的需求，用這就對了)  
3. `redux-select` (功能很強的select，有ajax loading options, 和 mutiselect支援)  
4. `redux-router` (用redux做的router, 可以將browser history存在store中, 必備)  
5. `react-router` (react routing, 必備)  
6. `redux-devtool` (搭配chrome debug, 必備)  
7. `redux-thunk` (middleware, 控制反轉dispatch，在action creator能夠做其他的dispatch action)  
8. `redux-motion` (做animation or transition比較方便)  


以上套件在github上面都可以找到相關文檔  


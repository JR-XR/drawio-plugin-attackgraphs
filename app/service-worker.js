if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-50a29d49"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"2d3841e9541a31b42eb4058e85709e87"},{url:"js/extensions.min.js",revision:"73cc2b66f2ddc50354256dc6b065af7d"},{url:"js/stencils.min.js",revision:"98924b5296c015cef20b904ef861eeea"},{url:"js/shapes-14-6-5.min.js",revision:"f0e1d4c09054df2f3ea3793491e9fe08"},{url:"js/math-print.js",revision:"0611491c663261a732ff18224906184d"},{url:"index.html",revision:"8b5b1cf07fc74454cf354717e9d18534"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"4f2c07c4585347249c95cd9158872fb2"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"3179f617dd02efd2cefeb8c06f965880"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"6c27011cd72d91fa2b1abbf935022844"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"c96db1790184cb35781f791e8d1dafd9"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"6d5a85e70c7b82ba685782ca6df2b9d5"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"01caa325f3ad3f6565e0b4228907fb63"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"c6552981ba1add209fe3e12ffcf79c9a"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"fab9a95f19a57bb836e42f67a1c0078b"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"d089f12446d443ca01752a5115456fcc"},{url:"connect/confluence/viewer-init.js",revision:"2bd677096ebffd3aa5cab0c347851e3f"},{url:"connect/confluence/viewer.js",revision:"a9d84488d17425d28e5d85d464e0a8f8"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4c58f3a1a4c99b1c4264593b6e05100b"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"352d2782274de07617d117926b68c205"},{url:"connect/confluence/includeDiagram.html",revision:"5cefef0227d058cf716d1f51f2cf202f"},{url:"connect/confluence/macro-editor.js",revision:"412bc4b87e630b697a40f247c579d398"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"8e34c9af7f8d502cfd1584a3906efde0"},{url:"resources/dia_am.txt",revision:"b1cae5291215a5034ac42f73b027c5d7"},{url:"resources/dia_ar.txt",revision:"6e4736c460473f556a0ac7650a1f99a3"},{url:"resources/dia_bg.txt",revision:"b6c2c2451b0e31f0925eed924289e05c"},{url:"resources/dia_bn.txt",revision:"78daf0565086adf9e1672d6f1317bda5"},{url:"resources/dia_bs.txt",revision:"06bac1fee85828b8db2837fd334adfcc"},{url:"resources/dia_ca.txt",revision:"2e034dfde79b3feb3484a26b1f6c357d"},{url:"resources/dia_cs.txt",revision:"d177d00f8f1d1b9aeac81df181136ca0"},{url:"resources/dia_da.txt",revision:"f244c674d2863b1d4a4019c5618a7fc0"},{url:"resources/dia_de.txt",revision:"73fdf0841d2c247d51a95e83aa8b0995"},{url:"resources/dia_el.txt",revision:"5284df86fb89f04e57270c1418c6becb"},{url:"resources/dia_eo.txt",revision:"72f2fc6768b1b710b4c054582588857f"},{url:"resources/dia_es.txt",revision:"4c41cd24505f6bf2d2beca8fb29dbc52"},{url:"resources/dia_et.txt",revision:"cc9e2bd4f79f4782b0a4f956f7a7d887"},{url:"resources/dia_eu.txt",revision:"a9e20c40c84023b9886fba2657d3b3a6"},{url:"resources/dia_fa.txt",revision:"48ef8e033a7e66d981a8e31eb46d7c2d"},{url:"resources/dia_fi.txt",revision:"07a230a6649d527f6fcc71190852d60f"},{url:"resources/dia_fil.txt",revision:"41d4669b6e560b4856f9ec31169d801e"},{url:"resources/dia_fr.txt",revision:"2b69ce9fcfa150e21b5f3b82baa62a83"},{url:"resources/dia_gl.txt",revision:"f696a37829215a03d74b577f0e193d39"},{url:"resources/dia_gu.txt",revision:"83cfd5e26cea2e31c14ac6be912295f3"},{url:"resources/dia_he.txt",revision:"0335866f8064454819141659ac422ca1"},{url:"resources/dia_hi.txt",revision:"92fe4218858dcbe8d30351799df0f4ca"},{url:"resources/dia_hr.txt",revision:"c7dee00a9cb74656e538646681aaa8b9"},{url:"resources/dia_hu.txt",revision:"5a28c9a4c4a52beb39da3aff77cb176a"},{url:"resources/dia_id.txt",revision:"c927e56e3b2121a9042ce9f284a126f9"},{url:"resources/dia_it.txt",revision:"ae1d326f35a964fada09f7c69948fa08"},{url:"resources/dia_ja.txt",revision:"ba6d3ca71cd2c0b78f24426495141105"},{url:"resources/dia_kn.txt",revision:"ecc38aad8980d8f546ce745b3beac484"},{url:"resources/dia_ko.txt",revision:"25cb961c38bad57e5ff76292a57652a5"},{url:"resources/dia_lt.txt",revision:"ef23c72e2256478a443874be1f61ca37"},{url:"resources/dia_lv.txt",revision:"2c35489f81edad8a8b017b77847c5e1d"},{url:"resources/dia_ml.txt",revision:"b9dd65e0ea3145fa005a9ff4042087ec"},{url:"resources/dia_mr.txt",revision:"e94f5f2050375652beb186f1836a4778"},{url:"resources/dia_ms.txt",revision:"0f87275e26a884927643a187a9468942"},{url:"resources/dia_my.txt",revision:"8e34c9af7f8d502cfd1584a3906efde0"},{url:"resources/dia_nl.txt",revision:"e275240e3c513e1b2e598ea564c38dca"},{url:"resources/dia_no.txt",revision:"d19f878a809337bed2a91da1a9dfeffd"},{url:"resources/dia_pl.txt",revision:"1bab2f1b6ddbd728e485ff64c86d0425"},{url:"resources/dia_pt-br.txt",revision:"2372f6fbd1e21c0b183b180bc94e1e63"},{url:"resources/dia_pt.txt",revision:"3e3e073a2dd715015c3d95ed227f411d"},{url:"resources/dia_ro.txt",revision:"1eab1efc5eab57335c49c0862d30d323"},{url:"resources/dia_ru.txt",revision:"b40ee1842311d03cd356d2f8fa645db7"},{url:"resources/dia_si.txt",revision:"8e34c9af7f8d502cfd1584a3906efde0"},{url:"resources/dia_sk.txt",revision:"a3e4a57e303e6bb2d60da6f8c78992fe"},{url:"resources/dia_sl.txt",revision:"d7f8c99d531f89e14c3cd2deaf576eef"},{url:"resources/dia_sr.txt",revision:"3167385790cec85acecd1c6ecaa74929"},{url:"resources/dia_sv.txt",revision:"c43570ee17b78766d6e6659363625f1d"},{url:"resources/dia_sw.txt",revision:"6326dcb2d3266cc71194a8118ffcc4f0"},{url:"resources/dia_ta.txt",revision:"f4573d8b89013b7e06f3bae1ae66d8cf"},{url:"resources/dia_te.txt",revision:"37b45cfce7ee5c8507d92b9f1dbeab3d"},{url:"resources/dia_th.txt",revision:"24338a7fa8e8a1c7a58058bf082fe614"},{url:"resources/dia_tr.txt",revision:"897b674fcf3b42e63cbf725d74c7473b"},{url:"resources/dia_uk.txt",revision:"e44438f964e9222286c18cfbf8c1fdab"},{url:"resources/dia_vi.txt",revision:"1c24f857d15d5a48926c7fd04923675d"},{url:"resources/dia_zh-tw.txt",revision:"e862d6b91264121956038107be20163d"},{url:"resources/dia_zh.txt",revision:"67598bcff64219afb6267ce6030ae007"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map

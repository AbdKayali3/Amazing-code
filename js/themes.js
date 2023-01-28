/** 
 * In here you add all your themes as JSON format.
 * Add your theme name (the same name that will be in the selectbox) and the index shoudl be the same value of that option in the select box
 * then start add your styling.
 * You can copy all-hallows-eve theme as your starting point.
**/
const themes = [
    {
        theme:"all-hallows-eve",
        index:0,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#0b1022",'color':"#fff",}},

            // header and footer to style them in one div
            {name: ".in-pre-additions",value: {'background':"#1c1c43",'height':"15px",'display':"block",'position':"relative",'font-size':"10px",}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px",}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px",}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#704287",}},
            {name: "pre .constant",value: {'color':"#3387cc",}},
            {name: "pre .storage",value: {'color':"#cc7833",}},
            {name: "pre .string, pre .comment.docstring",value: {'color':"#049b0a",}},
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#049b0a",}},
            {name: "pre .keyword",value: {'color':"#cc7833",}},
            {name: "pre .selector",value: {'color':"#cc7833",}},
            {name: "pre .entity.function",value: {'color':"#B71D76",}},
            {name: "pre .entity.name.function",value: {'color':"#B71D76",}},
            {name: "pre .entity.class",value: {'color':"#AD322C",}},
            // {name: "pre .entity",value: {'color':"#3387cc",}},
            {name: "pre .operator",value: {'color':"#ffffff",}},
            {name: "pre .integer",value: {'color':"#ffffff",}},
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#3387cc",}},

            {name: "pre .support",value: {'color':"#AC352F",}},
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#3387cc",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#D916A8",}},
        ]
    },
    {
        theme:"blackboard",
        index:1,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#0b1022",'color':"#fff",}},

            // header and footer to style them in one div
            {name: ".in-pre-additions",value: {'background':"#545454",'height':"15px",'display':"block",'position':"relative",'font-size':"10px",}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px",}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px",}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#7B7A7A",}},
            {name: "pre .constant",value: {'color':"#d8fa3c",}},
            {name: "pre .storage",value: {'color':"#fbde2d",}},
            {name: "pre .string, pre .comment.docstring",value: {'color':"#4DA42F",}},
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#ffffff",}},
            {name: "pre .keyword",value: {'color':"#fbde2d",}},
            {name: "pre .selector",value: {'color':"#fbde2d",}},
            {name: "pre .entity.function",value: {'color':"#ff6400",}},
            {name: "pre .entity.name.function",value: {'color':"#ff6400",}},
            {name: "pre .entity.class",value: {'color':"#C44F02",}},
            // {name: "pre .entity",value: {'color':"#ff6400",}},
            {name: "pre .operator",value: {'color':"#ffffff",}},
            {name: "pre .integer",value: {'color':"#ffffff",}},
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#ff6400",}},

            {name: "pre .support",value: {'color':"#8da6ce",}},
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#d8fa3c",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#8da6ce",}},
        ]
    },
    {
        theme:"dreamweaver",
        index:2,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#ffffff",'color':"#000000",}},

            // header and footer to style them in one div
            {name: ".in-pre-additions",value: {'background':"#000000",'height':"15px",'display':"block",'position':"relative",'font-size':"10px",}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px",}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px",}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#888888",}},
            {name: "pre .constant",value: {'color':"#fa0002",}},
            {name: "pre .storage",value: {'color':"#122573",}},
            {name: "pre .string, pre .comment.docstring",value: {'color':"#0d43fa",}},
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#2bd5bb",}},
            {name: "pre .keyword",value: {'color':"#000789",}},
            {name: "pre .selector",value: {'color':"#000000",}},
            {name: "pre .entity.function",value: {'color':"#000000",}},
            {name: "pre .entity.name.function",value: {'color':"#000000",}},
            {name: "pre .entity.class",value: {'color':"#cd57d5",}},
            // {name: "pre .entity",value: {'color':"#cd57d5",}},
            {name: "pre .operator",value: {'color':"#2852eb",}},
            {name: "pre .integer",value: {'color':"#cd57d5",}},
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#0d43fa",}},

            {name: "pre .support",value: {'color':"#cd57d5",}},
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#cd57d5",}},
        ]
    },
    {
        theme:"espresso-libre",
        index:3,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#2a211c",'color':"#bdae9d",}},

            // header and footer to style them in one div
            {name: ".in-pre-additions",value: {'background':"#210F06",'height':"15px",'display':"block",'position':"relative",'font-size':"10px",}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px",}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px",}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#49648D",}},
            {name: "pre .constant",value: {'color':"#00af0e",}},
            {name: "pre .storage",value: {'color':"#fbde2d",}},
            {name: "pre .string, pre .comment.docstring",value: {'color':"#049b0a",}},
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#6d79de",}},
            {name: "pre .keyword, pre .selector",value: {'color':"#43a8ed",}},
            {name: "pre .entity.function",value: {'color':"#ff9358",}},
            {name: "pre .entity.name.function",value: {'color':"#ff9358",}},
            {name: "pre .entity.class",value: {'color':"#6d79de",}},
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#ff9358",}},
            {name: "pre .integer",value: {'color':"#6d79de",}},
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#318495",}},

            {name: "pre .support",value: {'color':"#7290d9",}},
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#7290d9",}},
        ]
    },
    {
        theme:"github",
        index:4,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#f8f8f8",'color':"#333333",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#d0d7de",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px","color":"#000"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px","color":"#000"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#999988",}}, //
            {name: "pre .constant",value: {'color':"#009999",}}, //
            {name: "pre .storage",value: {'color':"#009999",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#d14",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#navy",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#43a8ed",}},
            {name: "pre .entity.function",value: {'color':"#990000",}}, //
            {name: "pre .entity.name.function",value: {'color':"#990000",}}, //
            {name: "pre .entity.class",value: {'color':"#458",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#43a8ed",}}, //
            {name: "pre .integer",value: {'color':"#990000",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#teal",}}, //

            {name: "pre .support",value: {'color':"#0086b3",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#990000",}}, //
        ]
    },
    {
        theme:"kimbie-dark",
        index:5,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#221a0f",'color':"#fbebd4",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#3E2F1A",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#705A43",}}, //
            {name: "pre .constant",value: {'color':"#f06431",}}, //
            {name: "pre .storage",value: {'color':"#98676a",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#889b4a",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#889b4a",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#98676a",}}, //
            {name: "pre .entity.function",value: {'color':"#f79a32",}}, //
            {name: "pre .entity.name.function",value: {'color':"#f79a32",}}, //
            {name: "pre .entity.class",value: {'color':"#98676a",}},  //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#f79a32",}}, //
            {name: "pre .integer",value: {'color':"#f79a32",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#dc3958",}}, //

            {name: "pre .support",value: {'color':"#98676a",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#dc3958",}}, //
        ]
    },
    {
        theme:"kimbie-light",
        index:6,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#fbebd4",'color':"#221a0f",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#3E2F1A",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#d6baad",}}, //
            {name: "pre .constant",value: {'color':"#f06431",}}, //
            {name: "pre .storage",value: {'color':"#98676a",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#889b4a",}},
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#889b4a",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#98676a",}}, //
            {name: "pre .entity.function",value: {'color':"#8ab1b0",}}, //
            {name: "pre .entity.name.function",value: {'color':"#8ab1b0",}}, //
            {name: "pre .entity.class",value: {'color':"#98676a",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#f06431",}}, //
            {name: "pre .integer",value: {'color':"#f79a32",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#dc3958",}}, //

            {name: "pre .support",value: {'color':"#f06431",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#8ab1b0",}}, //
        ]
    },
    {
        theme:"monokai",
        index:7,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#272822",'color':"#ffffff",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#0D1300",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#75715e",}}, //
            {name: "pre .constant",value: {'color':"#ae81ff",}}, //
            {name: "pre .storage",value: {'color':"#66d9ef",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#e6db74",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#889b4a",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#f92672",}}, //
            {name: "pre .entity.function",value: {'color':"#a6e22e",}}, //
            {name: "pre .entity.name.function",value: {'color':"#a6e22e",}}, //
            {name: "pre .entity.class",value: {'color':"#f92672",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#f92672",}}, //
            {name: "pre .integer",value: {'color':"#f92672",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#a6e22e",}}, //

            {name: "pre .support",value: {'color':"#66d9ef",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#a6e22e",}}, //
        ]
    },
    {
        theme:"obsidian",
        index:8,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#22282a",'color':"#f1f2f3",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#37454D",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#66747b",}}, //
            {name: "pre .constant",value: {'color':"#ec7600",}}, //
            {name: "pre .storage",value: {'color':"#ec7600",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#ec7600",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#ffffff",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#93c763",}}, //
            {name: "pre .entity.function",value: {'color':"#93c763",}}, //
            {name: "pre .entity.name.function",value: {'color':"#93c763",}}, //
            {name: "pre .entity.class",value: {'color':"#66d9ef",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#ffcd22",}}, //
            {name: "pre .integer",value: {'color':"#ffcd22",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#cccccc",}}, //

            {name: "pre .support",value: {'color':"#66d9ef",}},
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#facd22",}}, //
        ]
    },
    {
        theme:"paraiso-dark",
        index:9,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#261C26",'color':"#e7e9db",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#3D163B",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#776e71",}}, //
            {name: "pre .constant",value: {'color':"#48b685",}}, //
            {name: "pre .storage",value: {'color':"#815ba4",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#48b685",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#f99b15",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#815ba4",}}, //
            {name: "pre .entity.function",value: {'color':"#06b6ef",}}, //
            {name: "pre .entity.name.function",value: {'color':"#06b6ef",}}, //
            {name: "pre .entity.class",value: {'color':"#fec418",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#815ba4",}}, //
            {name: "pre .integer",value: {'color':"#815ba4",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#ef6155",}}, //

            {name: "pre .support",value: {'color':"#fec418",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#06b6ef",}}, //
        ]
    },
    {
        theme:"paraiso-light",
        index:10,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#e7e9db",'color':"#2f1e2e",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#2f1e2e",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#8d8687",}}, //
            {name: "pre .constant",value: {'color':"#f99b15",}}, //
            {name: "pre .storage",value: {'color':"#815ba4",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#48b685",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#48896C",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#815ba4",}}, //
            {name: "pre .entity.function",value: {'color':"#06b6ef",}}, //
            {name: "pre .entity.name.function",value: {'color':"#06b6ef",}}, //
            {name: "pre .entity.class",value: {'color':"#fec418",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#f99b15",}}, //
            {name: "pre .integer",value: {'color':"#f99b15",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#ef6155",}}, //

            {name: "pre .support",value: {'color':"#fec418",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#06b6ef",}}, //
        ]
    },
    {
        theme:"pastie",
        index:11,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#f8f8ff",'color':"#000000",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#CDCCCC",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px",'color':"#000000",}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px",'color':"#000000",}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",'color':"#000000",}},

            // code section
            {name: "pre .comment",value: {'color':"#888888",}}, //
            {name: "pre .constant",value: {'color':"#036",}}, //
            {name: "pre .storage",value: {'color':"#008800",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#dd2200",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#880088",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#008800",}}, //
            {name: "pre .entity.function",value: {'color':"#0066bb",}}, //
            {name: "pre .entity.name.function",value: {'color':"#0066bb",}}, //
            {name: "pre .entity.class",value: {'color':"#bb0066",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#000000",}}, //
            {name: "pre .integer",value: {'color':"#0000dd",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#3333bb",}}, //

            {name: "pre .support",value: {'color':"#007700",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#0066bb",}}, //
        ]
    },
    {
        theme:"rainbow",
        index:12,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#010104",'color':"#ffffff",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#3E3E3E",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#747474",}}, //
            {name: "pre .constant",value: {'color':"#ffad5c",}}, //
            {name: "pre .storage",value: {'color':"#fb2639",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#fff55c",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#fff55c",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#bc5cff",}}, //
            {name: "pre .entity.function",value: {'color':"#43a6ff",}}, //
            {name: "pre .entity.name.function",value: {'color':"#43a6ff",}}, //
            {name: "pre .entity.class",value: {'color':"#fc4959",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#bc5cff",}}, //
            {name: "pre .integer",value: {'color':"#D7D181",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#f57900",}},

            {name: "pre .support",value: {'color':"#fb2639",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#06b6ef",}}, //
        ]
    },
    {
        theme:"solarized-dark",
        index:13,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#002b36",'color':"#839496",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#485556",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#586e75",}}, //
            {name: "pre .constant",value: {'color':"#839496",}}, //
            {name: "pre .storage",value: {'color':"#268bd2",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#2aa198",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#2aa198",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#859900",}}, //
            {name: "pre .entity.function",value: {'color':"#b58900",}}, //
            {name: "pre .entity.name.function",value: {'color':"#b58900",}}, //
            {name: "pre .entity.class",value: {'color':"#b58900",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#859900",}}, //
            {name: "pre .integer",value: {'color':"#839496",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#839496",}}, //

            {name: "pre .support",value: {'color':"#839496",}},
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#b58900",}}, //
        ]
    },
    {
        theme:"solarized-light",
        index:14,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#fdf6e3",'color':"#657b83",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#37454A",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#93a1a1",}}, //
            {name: "pre .constant",value: {'color':"#657b83",}}, //
            {name: "pre .storage",value: {'color':"#268bd2",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#2aa198",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#2aa198",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#859900",}}, //
            {name: "pre .entity.function",value: {'color':"#b58900",}}, //
            {name: "pre .entity.name.function",value: {'color':"#b58900",}}, //
            {name: "pre .entity.class",value: {'color':"#b58900",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#859900",}},
            {name: "pre .integer",value: {'color':"#657b83",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#657b83",}}, //

            {name: "pre .support",value: {'color':"#657b83",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#b58900",}}, //
        ]
    },
    {
        theme:"sunburst",
        index:15,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#000000",'color':"#ffffff",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#707F80",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#aeaeae",}}, //
            {name: "pre .constant",value: {'color':"#3387cc",}}, //
            {name: "pre .storage",value: {'color':"#99cf50",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#65b042",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#e9c062",}}, //
            {name: "pre .keyword, pre .selector",value: {'color':"#e28964",}}, //
            {name: "pre .entity.function",value: {'color':"#89bdff",}}, //
            {name: "pre .entity.name.function",value: {'color':"#89bdff",}}, //
            {name: "pre .entity.class",value: {'color':"#89bdff",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#3e87e3",}},
            {name: "pre .integer",value: {'color':"#8da6ce",}},
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#839496",}},

            {name: "pre .support",value: {'color':"#dad085",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#89bdff",}},
        ]
    },
    {
        theme:"tomorrow-night",
        index:16,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#1d1f21",'color':"#c5c8c6",}},

            // header and footer to style them in one div   
            {name: ".in-pre-additions",value: {'background':"#3F4848",'height':"15px",'display':"block",'position':"relative",'font-size':"10px"}},

            // header section
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",'text-align':"center",'margin-top':"-20px"}},
            {name: ".pre-header .circles",value: {'position':"absolute",'top':"5px",'width':"5px",'height':"5px",'border-radius':"50%",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",'background':"red",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",'background':"orange",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",'background':"gray",}},

            // footer section
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",'bottom':"0",'left':"10px",'font-size':"9px"}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",'right':"10px",}},

            // code section
            {name: "pre .comment",value: {'color':"#969896",}}, //
            {name: "pre .constant",value: {'color':"#f0c674",}}, //
            {name: "pre .storage",value: {'color':"#b294bb",}}, //
            {name: "pre .string, pre .comment.docstring",value: {'color':"#b5bd68",}}, //
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#e9c062",}},
            {name: "pre .keyword, pre .selector",value: {'color':"#b294bb",}}, //
            {name: "pre .entity.function",value: {'color':"#81a2be",}}, //
            {name: "pre .entity.name.function",value: {'color':"#81a2be",}}, //
            {name: "pre .entity.class",value: {'color':"#f0c674",}}, //
            // {name: "pre .entity",value: {'color':"#6d79de",}},
            {name: "pre .operator",value: {'color':"#de935f",}}, //
            {name: "pre .integer",value: {'color':"#de935f",}}, //
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#cc6666",}}, //

            {name: "pre .support",value: {'color':"#f0c674",}}, //
            {name: "pre .inherited-class",value: {'font-style':"italic",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#81a2be",}}, //
        ]
    },
];
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
            {name: "pre .string, pre .comment.docstring",value: {'color':"#474789",}},
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#D916A8",}},
            {name: "pre .keyword, pre .selector",value: {'color':"#cc7833",}},
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
            {name: "pre .keyword, pre .selector",value: {'color':"#fbde2d",}},
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
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#0b1022",'color':"#fff",}},

            // header and footer to style them in one div
            {name: ".in-pre-additions",value: {'background':"#0b1022",'height':"15px",'display':"block",'position':"relative",'font-size':"10px",}},

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
            {name: "pre .keyword, pre .selector",value: {'color':"#fbde2d",}},
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
        theme:"espresso-libre",
        index:3,
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",'z-index':"0",'border-radius':"10px",'display':"inline-block",'width':"auto",'position':"relative",'max-width':"1200px",'min-width':"600px",'padding':"0",'padding-top':"20px",'padding-bottom':"20px",'word-wrap':"break-word",'font-size':"14px",'background':"#0b1022",'color':"#fff",}},

            // header and footer to style them in one div
            {name: ".in-pre-additions",value: {'background':"#0b1022",'height':"15px",'display':"block",'position':"relative",'font-size':"10px",}},

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
            {name: "pre .keyword, pre .selector",value: {'color':"#fbde2d",}},
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
];
// in here you add all your themes as JSON format
// add your theme name (the same name that will be in the selectbox)
// then start add your styling.
const themes = [
    {
        theme:"all-hallows-eve",
        data: [

            // the pre itself (the main thing that will hold your snippit code) aka "The Big Boss"
            {name: "pre",value: {'overflow':"visible",}},
            {name: "pre",value: {'z-index':"0",}},
            {name: "pre",value: {'border-radius':"10px",}},
            {name: "pre",value: {'display':"inline-block",}},
            {name: "pre",value: {'width':"auto",}},
            {name: "pre",value: {'position':"relative",}},
            {name: "pre",value: {'max-width':"1200px",}},
            {name: "pre",value: {'min-width':"600px",}},
            // {name: "pre",value: {'color':"#fff",}},
            // {name: "pre",value: {'margin':"0",}},
            {name: "pre",value: {'padding':"0",}},
            {name: "pre",value: {'padding-top':"20px",}},
            {name: "pre",value: {'padding-bottom':"20px",}},
            {name: "pre",value: {'word-wrap':"break-word",}},
            {name: "pre",value: {'font-size':"14px",}},
            {name: "pre",value: {'background':"#0b1022",}},
            {name: "pre",value: {'color':"#fff",}},


            // header and footer to style them in one div
            {name: ".in-pre-additions",value: {'background':"#1c1c43",}},


            // header section
            {name: ".pre-header",value: {'height':"15px",}},
            {name: ".pre-header",value: {'border-radius':"10px 10px 0 0",}},
            {name: ".pre-header",value: {'font-size':"10px",}},
            {name: ".pre-header",value: {'text-align':"center",}},
            {name: ".pre-header",value: {'display':"block",}},
            {name: ".pre-header",value: {'position':"relative",}},
            {name: ".pre-header",value: {'margin-top':"-20px",}},
            {name: ".pre-header .circle-1",value: {'position':"absolute",}},
            {name: ".pre-header .circle-1",value: {'top':"5px",}},
            {name: ".pre-header .circle-1",value: {'left':"10px",}},
            {name: ".pre-header .circle-1",value: {'width':"5px",}},
            {name: ".pre-header .circle-1",value: {'height':"5px",}},
            {name: ".pre-header .circle-1",value: {'background':"red",}},
            {name: ".pre-header .circle-1",value: {'border-radius':"50%",}},
            {name: ".pre-header .circle-2",value: {'position':"absolute",}},
            {name: ".pre-header .circle-2",value: {'top':"5px",}},
            {name: ".pre-header .circle-2",value: {'left':"20px",}},
            {name: ".pre-header .circle-2",value: {'width':"5px",}},
            {name: ".pre-header .circle-2",value: {'height':"5px",}},
            {name: ".pre-header .circle-2",value: {'background':"orange",}},
            {name: ".pre-header .circle-2",value: {'border-radius':"50%",}},
            {name: ".pre-header .circle-3",value: {'position':"absolute",}},
            {name: ".pre-header .circle-3",value: {'top':"5px",}},
            {name: ".pre-header .circle-3",value: {'left':"30px",}},
            {name: ".pre-header .circle-3",value: {'width':"5px",}},
            {name: ".pre-header .circle-3",value: {'height':"5px",}},
            {name: ".pre-header .circle-3",value: {'background':"gray",}},
            {name: ".pre-header .circle-3",value: {'border-radius':"50%",}},



            // footer section
            {name: ".pre-footer",value: {'height':"15px",}},
            {name: ".pre-footer",value: {'border-radius':"0 0 10px 10px",}},
            {name: ".pre-footer",value: {'display':"block",}},
            {name: ".pre-footer",value: {'position':"relative",}},
            {name: ".pre-footer",value: {'font-size':"10px",}},
            {name: ".pre-footer",value: {'margin-bottom':"-20px",}},
            {name: ".pre-footer .language-footer",value: {'position':"absolute",}},
            {name: ".pre-footer .language-footer",value: {'bottom':"0",}},
            {name: ".pre-footer .language-footer",value: {'left':"10px",}},
            {name: ".pre-footer .language-footer",value: {'font-size':"9px",}},
            {name: ".pre-footer .language-footer",value: {'font-size':"9px",}},
            {name: ".pre-footer .info-footer",value: {'left':"unset",}},
            {name: ".pre-footer .info-footer",value: {'right':"10px",}},



            // code section
            {name: "pre .comment",value: {'color':"#727272",}},
            {name: "pre .constant",value: {'color':"#d8fa3c",}},
            {name: "pre .storage",value: {'color':"#fbde2d",}},
            {name: "pre .string, pre .comment.docstring",value: {'color':"#61ce3c",}},
            {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#fff",}},
            {name: "pre .keyword, pre .selector",value: {'color':"#fbde2d",}},
            {name: "pre .entity",value: {'color':"#ff6400",}},
            {name: "pre .support",value: {'color':"#8da6ce",}},
            {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#ff6400",}},
            {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#8da6ce",}},
        ]
    },
    {
        theme:"ss23",
        data: [
            {name: "sdsd",value: "sadasd"},
            {name: "sdsd",value: "sadasd"},
            {name: "sdsd",value: "sadasd"},
        ]
    }
];
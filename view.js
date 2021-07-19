const option ={
    "detail": {
        "name": "mytry-adm",
        "width": 1920,
        "height": 1080,
        "scale": 105.72916666666667,
        "backgroundImage": "https://oss.bladex.vip/caster/upload/20201120/391d20010e0931733f5fb84111b2f3f0.jpg",
        "url": "",
        "mark": {},
        "gradeShow": false,
        "gradeLen": 30,
        "query": {}
    },
    "component": [
        {
            "name": "折线图",
            "title": "折线图",
            "icon": "icon-line",
            "img": "/img/line.d9ed6cf6.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月"
                ],
                "series": [
                    {
                        "name": "异常资金总额走势",
                        "data": [
                            18100.09,
                            28781.31,
                            25654.2,
                            30398.73,
                            34560.39
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 520,
                "height": 210,
                "name": "line",
                "prop": "line"
            },
            "option": {
                "gridX": 58,
                "gridY": 38,
                "gridX2": 10,
                "gridY2": 21,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "lineWidth": 3,
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": true,
                "labelShowFontSize": 12,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 30,
                "barRadius": 8,
                "barColor": [
                    {
                        "color1": "rgba(254, 178, 70, 1)",
                        "color2": "rgba(254, 178, 70, 0.5)",
                        "postion": 80,
                        "$index": 0,
                        "_show": true
                    },
                    {
                        "color1": "#23B7E5",
                        "color2": "#564AA3",
                        "postion": 50,
                        "$index": 1,
                        "_show": true
                    }
                ],
                "barMinHeight": 2,
                "symbolSize": 6,
                "labelShowColor": "#fff",
                "legend": true,
                "legendPostion": "left",
                "legendFontSize": 12,
                "areaStyle": true
            },
            "left": 1340,
            "top": 368,
            "index": "34d22489-28d7-463a-890c-1b6980f66915",
            "zIndex": 44
        },
        {
            "title": "翻牌器",
            "name": "all-3 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 186,
            "left": 988,
            "dataType": 0,
            "data": {
                "value": "423500.06"
            },
            "dataFormatter": "",
            "component": {
                "width": 160,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 34,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(254, 178, 70, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "textAlign": "center",
                "whole": true
            },
            "index": "674a09ef-4543-4171-90f7-69654020e441",
            "zIndex": 43
        },
        {
            "title": "文本框",
            "name": "all-3",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "当月下账资金总额"
            },
            "component": {
                "width": 120,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 14,
                "fontWeight": "bold",
                "color": "#fff",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1008,
            "top": 140,
            "index": "f4105e4c-0ffc-46e1-8d15-4fa3831fc7bf",
            "zIndex": 42
        },
        {
            "title": "翻牌器",
            "name": "all-2 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 146,
            "left": 820,
            "dataType": 0,
            "data": {
                "value": "123602.23"
            },
            "dataFormatter": "",
            "component": {
                "width": 100,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 20,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(11, 227, 227, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "textAlign": "center",
                "whole": true
            },
            "index": "83fa68c2-b1fc-4ae6-b533-0e9a8ff7432d",
            "zIndex": 41
        },
        {
            "title": "文本框",
            "name": "all-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "同比增长金额"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 11,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 820,
            "top": 114,
            "index": "b358e0c8-641d-4ef0-9ac6-073fcae887cd",
            "zIndex": 40
        },
        {
            "title": "翻牌器",
            "name": "all-1 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 186,
            "left": 628,
            "dataType": 0,
            "data": {
                "value": "853295.20"
            },
            "dataFormatter": "",
            "component": {
                "width": 160,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 36,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(11, 227, 227, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "textAlign": "center",
                "whole": true
            },
            "index": "a4288ad1-1031-4619-8b45-9ecece75640b",
            "zIndex": 39
        },
        {
            "title": "文本框",
            "name": "all-1",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "当月上账资金总额"
            },
            "component": {
                "width": 120,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 14,
                "fontWeight": "bold",
                "color": "#fff",
                "split": 0,
                "lineHeight": 0
            },
            "left": 648,
            "top": 140,
            "index": "6f8cf560-d400-467c-8c51-349462b2f076",
            "zIndex": 38
        },
        {
            "name": "date",
            "title": "实时时间",
            "icon": "icon-datetime",
            "img": "data:image/png;base64,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",
            "top": 14,
            "left": 1572,
            "component": {
                "width": 200,
                "height": 30,
                "name": "datetime",
                "prop": "datetime"
            },
            "option": {
                "format": "yyyy年MM月dd日",
                "color": "rgba(138, 167, 208, 1)",
                "textAlign": "right",
                "fontSize": 20,
                "fontWeight": "normal",
                "split": 2
            },
            "index": "269e7306-c660-46ee-a4fa-c8cc1b17b239",
            "zIndex": 37
        },
        {
            "name": "time",
            "title": "实时时间",
            "icon": "icon-datetime",
            "img": "data:image/png;base64,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",
            "top": 8,
            "left": 1788,
            "component": {
                "width": 80,
                "height": 30,
                "name": "datetime",
                "prop": "datetime"
            },
            "option": {
                "format": "hh:mm",
                "color": "#fff",
                "textAlign": "right",
                "fontSize": 28,
                "fontWeight": "bold",
                "split": 2
            },
            "index": "817cfabb-d13e-47bd-873a-0f6a67eafeaf",
            "zIndex": 36
        },
        {
            "title": "文本框",
            "name": "version info",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "湖南永州监狱 V1.0.0"
            },
            "component": {
                "width": 400,
                "height": 30,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 30
            },
            "left": 28,
            "top": 8,
            "index": "df9e82bd-6ee5-45b0-9a13-3805f9a0e43b",
            "zIndex": 35
        },
        {
            "title": "文本框",
            "name": "department-fin",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "财务科数据展示"
            },
            "component": {
                "width": 600,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 32,
                "fontWeight": "bold",
                "color": "#fff",
                "split": 4,
                "lineHeight": 0
            },
            "left": 650,
            "top": 24,
            "index": "0d1b0e1e-d653-4646-bd76-ffac4ba65bff",
            "zIndex": 34
        },
        {
            "title": "文本框",
            "name": "title-1",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "物料采购概况"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 63,
            "top": 118,
            "index": "83ff1abe-78e3-44ae-8d16-785bb3746cb9",
            "zIndex": 33
        },
        {
            "name": "healthy",
            "title": "柱状图",
            "icon": "icon-bar",
            "img": "/img/bar.179e480c.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月"
                ],
                "series": [
                    {
                        "name": "商品采购占比",
                        "data": [
                            12,
                            16,
                            13,
                            20,
                            24
                        ]
                    },
                    {
                        "name": "药品采购占比",
                        "data": [
                            28,
                            24,
                            25,
                            13,
                            12
                        ]
                    },
                    {
                        "name": "被服采购占比",
                        "data": [
                            34,
                            22,
                            32,
                            34,
                            40
                        ]
                    },
                    {
                        "name": "办公用品采购占比",
                        "data": [
                            26,
                            38,
                            30,
                            28,
                            16
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 520,
                "height": 210,
                "name": "bar",
                "prop": "bar"
            },
            "option": {
                "gridX": 31,
                "gridY": 48,
                "gridX2": 8,
                "gridY2": 23,
                "legend": true,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": true,
                "labelShowColor": "#fff",
                "labelShowFontSize": 13,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 12,
                "barRadius": 2,
                "barColor": [
                    {
                        "color1": "#00eaff",
                        "color2": "rgba(0, 234, 255, 0.5)",
                        "postion": 50,
                        "$index": 0,
                        "_show": true
                    },
                    {
                        "color1": "#01bbf2",
                        "color2": "rgba(1, 187, 242, 0.5)",
                        "postion": 50,
                        "$index": 1,
                        "_show": true
                    },
                    {
                        "color1": "#028ce5",
                        "color2": "rgba(2, 140, 229, 0.5)",
                        "postion": 50,
                        "$index": 2
                    },
                    {
                        "color1": "rgba(21, 31, 221, 1)",
                        "color2": "rgba(21, 31, 221, 0.5)",
                        "postion": 50,
                        "$index": 3
                    }
                ],
                "barMinHeight": 2,
                "legendPostion": "left",
                "legendOrient": "horizontal",
                "legendFontSize": 12,
                "color": "#028ce5"
            },
            "left": 44,
            "top": 360,
            "index": "2967ea0e-f56e-45bc-88e4-8016124c69ea",
            "zIndex": 32
        },
        {
            "title": "翻牌器",
            "name": "1-2 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 282,
            "left": 64,
            "dataType": 0,
            "data": {
                "value": "2240.00"
            },
            "dataFormatter": "",
            "component": {
                "width": 180,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 34,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "#028ce5",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0
            },
            "index": "c1a8079e-ba12-40bb-8632-181c1eb3b83f",
            "zIndex": 31
        },
        {
            "title": "文本框",
            "name": "1-1",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "当月商品采购金额"
            },
            "component": {
                "width": 140,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 14,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 64,
            "top": 170,
            "index": "eab57ee1-94ac-4eb4-9e4b-9d2675fda61f",
            "zIndex": 30
        },
        {
            "title": "翻牌器",
            "name": "1-1 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 202,
            "left": 64,
            "dataType": 0,
            "data": {
                "value": "74216.00"
            },
            "dataFormatter": "",
            "component": {
                "width": 180,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 34,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "#00eaff",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0
            },
            "index": "3043232c-7e7e-4cf4-94c1-ac1bde3dc0e9",
            "zIndex": 29
        },
        {
            "title": "文本框",
            "name": "1-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "当月被服采购金额"
            },
            "component": {
                "width": 140,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 14,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 64,
            "top": 250,
            "index": "36fddab2-081a-4819-88f0-fa8bf2b7fbab",
            "zIndex": 28
        },
        {
            "title": "文本框",
            "name": "1-3",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "当月药品采购金额"
            },
            "component": {
                "width": 140,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 14,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 320,
            "top": 170,
            "index": "1abfc970-4f12-4b73-8f5e-a2514c6c1d5d",
            "zIndex": 27
        },
        {
            "title": "翻牌器",
            "name": "1-3 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 202,
            "left": 320,
            "dataType": 0,
            "data": {
                "value": "20024.23"
            },
            "dataFormatter": "",
            "component": {
                "width": 180,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 34,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "#01bbf2",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0
            },
            "index": "5e5017e9-4fe9-42ce-812e-fea3b8883438",
            "zIndex": 26
        },
        {
            "title": "文本框",
            "name": "1-4",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "当月办公用品采购金额"
            },
            "component": {
                "width": 180,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 14,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 320,
            "top": 250,
            "index": "fbaedf2a-596c-4bce-a6ef-d27fa4a4dffe",
            "zIndex": 25
        },
        {
            "title": "翻牌器",
            "name": "1-4 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 282,
            "left": 320,
            "dataType": 0,
            "data": {
                "value": "5520.21"
            },
            "dataFormatter": "",
            "component": {
                "width": 180,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 34,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(21, 31, 221, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0
            },
            "index": "4c04dac3-e018-435e-8bcb-8ded8ffbaa91",
            "zIndex": 24
        },
        {
            "title": "文本框",
            "name": "title-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "账户异常数据"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 1350,
            "top": 118,
            "index": "cd18144d-d676-4155-8594-1dd8fde9b566",
            "zIndex": 23
        },
        {
            "title": "文本框",
            "name": "2-1",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "资金异常账户数"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 14,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1350,
            "top": 170,
            "index": "a5093f42-a680-4e0a-af1f-937605ca7f57",
            "zIndex": 22
        },
        {
            "title": "翻牌器",
            "name": "2-1 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 202,
            "left": 1606,
            "dataType": 0,
            "data": {
                "value": "34560.32"
            },
            "dataFormatter": "",
            "component": {
                "width": 180,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 34,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(254, 178, 70, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0
            },
            "index": "df150b43-a02a-49c8-98bd-edffa1b6fd00",
            "zIndex": 21
        },
        {
            "title": "文本框",
            "name": "2-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "异常资金总额"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 14,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1606,
            "top": 170,
            "index": "c12efccc-b57a-4ac1-89c0-4d98692150d3",
            "zIndex": 20
        },
        {
            "title": "翻牌器",
            "name": "2-2 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 202,
            "left": 1350,
            "dataType": 0,
            "data": {
                "value": "311"
            },
            "dataFormatter": "",
            "component": {
                "width": 180,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 34,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(14, 86, 241, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0
            },
            "index": "5eb56d1a-0786-411b-be53-145ca6e23a58",
            "zIndex": 19
        },
        {
            "title": "文本框",
            "name": "2-3",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "银行结账异常数"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 14,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1350,
            "top": 250,
            "index": "72ad0178-cea9-44cd-97bb-a3e0e3df6728",
            "zIndex": 18
        },
        {
            "title": "翻牌器",
            "name": "2-3 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 282,
            "left": 1350,
            "dataType": 0,
            "data": {
                "value": "12280.00"
            },
            "dataFormatter": "",
            "component": {
                "width": 180,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 34,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "#0fb2f8",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0
            },
            "index": "97bd2946-ed30-47f8-96af-e19793e01702",
            "zIndex": 17
        },
        {
            "title": "文本框",
            "name": "2-4",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "出所结算异常总额"
            },
            "component": {
                "width": 140,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 14,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1606,
            "top": 250,
            "index": "93a9f369-b2bf-4e41-91fa-d010f627a9f4",
            "zIndex": 16
        },
        {
            "title": "翻牌器",
            "name": "2-4 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 282,
            "left": 1606,
            "dataType": 0,
            "data": {
                "value": "22280.32"
            },
            "dataFormatter": "",
            "component": {
                "width": 180,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 34,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(11, 227, 227, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0
            },
            "index": "41a0c894-2267-484f-861f-c7a42e2cd5da",
            "zIndex": 15
        },
        {
            "title": "文本框",
            "name": "title-3",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "药品领用实时数据"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 63,
            "top": 614,
            "index": "e9b0f1e6-350d-48d8-bd23-d8673e077582",
            "zIndex": 14
        },
        {
            "title": "表格",
            "name": "3-1 c",
            "icon": "icon-table",
            "img": "/img/table.215c94c3.png",
            "top": 672,
            "left": 42,
            "dataType": 0,
            "data": [
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "咳嗽药",
                    "number": "3片",
                    "time": "2020-11-19 15:30:15"
                }
            ],
            "dataFormatter": "",
            "component": {
                "width": 520,
                "height": 324,
                "name": "table",
                "prop": "table"
            },
            "option": {
                "headerBackground": "rgba(8, 90, 111, 0.2)",
                "headerColor": "rgba(154, 168, 212, 1)",
                "headerTextAlign": "center",
                "bodyBackground": "rgba(0, 0, 0, 0.01)",
                "bodyColor": "rgba(154, 168, 212, 1)",
                "borderColor": "rgba(51, 65, 107, 1)",
                "bodyTextAlign": "center",
                "column": [
                    {
                        "label": "罪犯姓名",
                        "prop": "name",
                        "width": "",
                        "$index": 0
                    },
                    {
                        "label": "罪犯编号",
                        "prop": "SN",
                        "width": "",
                        "$index": 1
                    },
                    {
                        "label": "处遇等级",
                        "prop": "level",
                        "width": "",
                        "$index": 2
                    },
                    {
                        "label": "领取药品",
                        "prop": "item",
                        "width": "",
                        "$index": 3
                    },
                    {
                        "label": "数量",
                        "prop": "number",
                        "width": "",
                        "$index": 4
                    },
                    {
                        "label": "时间",
                        "prop": "time",
                        "width": "80",
                        "$index": 5
                    }
                ],
                "menu": false,
                "align": "center",
                "headerAlign": "center",
                "header": false,
                "scroll": true,
                "scrollTime": 3000,
                "scrollCount": 1,
                "fontSize": 12,
                "count": 8,
                "nthColor": "rgba(14, 86, 241, 0.08)"
            },
            "index": "41b69d7a-e353-489a-aa25-7a9513e5c15a",
            "zIndex": 13
        },
        {
            "title": "文本框",
            "name": "title-4",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "罪犯实时上下账数据"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 640,
            "top": 614,
            "index": "b9baca5c-7736-49e2-8731-07c0d8c35a9e",
            "zIndex": 12
        },
        {
            "title": "表格",
            "name": "4-1 c",
            "icon": "icon-table",
            "img": "/img/table.215c94c3.png",
            "top": 672,
            "left": 618,
            "dataType": 0,
            "data": [
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "上账",
                    "A": "244.50",
                    "B": "0.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "上账",
                    "A": "0.00",
                    "B": "1000.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "下账",
                    "A": "64.50",
                    "B": "0.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "下账",
                    "A": "0.00",
                    "B": "162.30",
                    "C": "16.71",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "上账",
                    "A": "2000.00",
                    "B": "0.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "上账",
                    "A": "20.10",
                    "B": "0.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "下账",
                    "A": "0.00",
                    "B": "120.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "上账",
                    "A": "244.10",
                    "B": "0.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "下账",
                    "A": "0.50",
                    "B": "0.00",
                    "C": "120.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "下账",
                    "A": "0.00",
                    "B": "1000.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "下账",
                    "A": "244.50",
                    "B": "0.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890",
                    "level": "宽管",
                    "item": "下账",
                    "A": "244.50",
                    "B": "0.00",
                    "C": "0.00",
                    "time": "2020-11-19 15:30:15"
                }
            ],
            "dataFormatter": "",
            "component": {
                "width": 660,
                "height": 324,
                "name": "table",
                "prop": "table"
            },
            "option": {
                "headerBackground": "rgba(8, 90, 111, 0.2)",
                "headerColor": "rgba(154, 168, 212, 1)",
                "headerTextAlign": "center",
                "bodyBackground": "rgba(0, 0, 0, 0.01)",
                "bodyColor": "rgba(154, 168, 212, 1)",
                "borderColor": "rgba(51, 65, 107, 1)",
                "bodyTextAlign": "center",
                "column": [
                    {
                        "label": "罪犯姓名",
                        "prop": "name",
                        "width": "",
                        "$index": 0
                    },
                    {
                        "label": "罪犯编号",
                        "prop": "SN",
                        "width": "",
                        "$index": 1
                    },
                    {
                        "label": "处遇等级",
                        "prop": "level",
                        "width": "",
                        "$index": 2
                    },
                    {
                        "label": "流向",
                        "prop": "item",
                        "width": "",
                        "$index": 3
                    },
                    {
                        "label": "A账户",
                        "prop": "A",
                        "width": "",
                        "$index": 4
                    },
                    {
                        "label": "B账户",
                        "prop": "B",
                        "width": "",
                        "$index": 5
                    },
                    {
                        "label": "C账户",
                        "prop": "C",
                        "width": "",
                        "$index": 6
                    },
                    {
                        "label": "时间",
                        "prop": "time",
                        "width": "80",
                        "$index": 7
                    }
                ],
                "menu": false,
                "align": "center",
                "headerAlign": "center",
                "header": false,
                "scroll": true,
                "scrollTime": 3000,
                "scrollCount": 1,
                "fontSize": 12,
                "count": 8,
                "nthColor": "rgba(14, 86, 241, 0.08)"
            },
            "index": "232ff383-bcda-47e3-8ea6-86ec52dcda35",
            "zIndex": 11
        },
        {
            "title": "文本框",
            "name": "title-5",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "资金异常账户"
            },
            "component": {
                "width": 400,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "left",
                "fontSize": 20,
                "fontWeight": "bold",
                "color": "rgba(138, 167, 208, 1)",
                "split": 2,
                "lineHeight": 0
            },
            "left": 1350,
            "top": 614,
            "index": "5388d4de-5994-4570-82d8-a2aac0bb4e8d",
            "zIndex": 10
        },
        {
            "title": "表格",
            "name": "5-1 c",
            "icon": "icon-table",
            "img": "/img/table.215c94c3.png",
            "top": 674,
            "left": 1332,
            "dataType": 0,
            "data": [
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "出所结算",
                    "item": "205.32",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "出所结算",
                    "item": "68.32",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "银行结算",
                    "item": "381.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "银行结算",
                    "item": "381.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "出所结算",
                    "item": "8.32",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "出所结算",
                    "item": "68.32",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "银行结算",
                    "item": "381.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "银行结算",
                    "item": "381.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "出所结算",
                    "item": "68.32",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "银行结算",
                    "item": "32.24",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "银行结算",
                    "item": "381.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "银行结算",
                    "item": "381.00",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "出所结算",
                    "item": "68.32",
                    "time": "2020-11-19 15:30:15"
                },
                {
                    "name": "张三",
                    "SN": "1234657890023154",
                    "manage": "银行结算",
                    "item": "32.24",
                    "time": "2020-11-19 15:30:15"
                }
            ],
            "dataFormatter": "",
            "component": {
                "width": 520,
                "height": 324,
                "name": "table",
                "prop": "table"
            },
            "option": {
                "headerBackground": "rgba(8, 90, 111, 0.2)",
                "headerColor": "rgba(154, 168, 212, 1)",
                "headerTextAlign": "center",
                "bodyBackground": "rgba(0, 0, 0, 0.01)",
                "bodyColor": "rgba(154, 168, 212, 1)",
                "borderColor": "rgba(51, 65, 107, 1)",
                "bodyTextAlign": "center",
                "column": [
                    {
                        "label": "罪犯姓名",
                        "prop": "name",
                        "width": "",
                        "$index": 0
                    },
                    {
                        "label": "银行账户",
                        "prop": "SN",
                        "width": "80",
                        "$index": 1
                    },
                    {
                        "label": "异常来源",
                        "prop": "manage",
                        "width": "",
                        "$index": 2
                    },
                    {
                        "label": "异常金额",
                        "prop": "item",
                        "width": "",
                        "$index": 3
                    },
                    {
                        "label": "时间",
                        "prop": "time",
                        "width": "80",
                        "$index": 4
                    }
                ],
                "menu": false,
                "align": "center",
                "headerAlign": "center",
                "header": false,
                "scroll": true,
                "scrollTime": 3000,
                "scrollCount": 1,
                "fontSize": 12,
                "count": 8,
                "nthColor": "rgba(14, 86, 241, 0.08)"
            },
            "index": "de3b47cb-46d2-44c8-9354-19e38d9cff4c",
            "zIndex": 9
        },
        {
            "name": "折线图",
            "title": "折线图",
            "icon": "icon-line",
            "img": "/img/line.d9ed6cf6.png",
            "dataType": 0,
            "dataMethod": "get",
            "data": {
                "categories": [
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月"
                ],
                "series": [
                    {
                        "name": "上账资金走势",
                        "data": [
                            18100.09,
                            28781.31,
                            25654.2,
                            30398.73,
                            16560.39
                        ]
                    },
                    {
                        "name": "下账资金走势",
                        "data": [
                            20100.09,
                            16281.31,
                            18654.2,
                            20021.73,
                            31560.02
                        ]
                    }
                ]
            },
            "dataFormatter": "",
            "url": "./bar",
            "time": 5000,
            "component": {
                "width": 660,
                "height": 290,
                "name": "line",
                "prop": "line"
            },
            "option": {
                "gridX": 58,
                "gridY": 38,
                "gridX2": 10,
                "gridY2": 21,
                "nameColor": "#828ecb",
                "lineColor": "#5a68ad",
                "lineWidth": 3,
                "xNameFontSize": 11,
                "yNameFontSize": 11,
                "labelShow": true,
                "labelShowFontSize": 12,
                "labelShowFontWeight": 300,
                "yAxisInverse": false,
                "xAxisInverse": false,
                "xAxisShow": true,
                "yAxisShow": true,
                "xAxisSplitLineShow": false,
                "yAxisSplitLineShow": false,
                "barWidth": 30,
                "barRadius": 8,
                "barColor": [
                    {
                        "color1": "rgba(11, 227, 227, 1)",
                        "color2": "rgba(11, 227, 227, 0.5)",
                        "postion": 50,
                        "$index": 0,
                        "_show": true
                    },
                    {
                        "color1": "rgba(254, 178, 70, 1)",
                        "color2": "rgba(254, 178, 70, 0.5)",
                        "postion": 60,
                        "$index": 1,
                        "_show": true
                    }
                ],
                "barMinHeight": 2,
                "symbolSize": 6,
                "labelShowColor": "#fff",
                "legend": true,
                "legendPostion": "left",
                "legendFontSize": 12,
                "areaStyle": false
            },
            "left": 620,
            "top": 302,
            "index": "8eb0e5a8-1070-4c71-b773-9c174b50d258",
            "zIndex": 8
        },
        {
            "title": "文本框",
            "name": "all-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "同比增长率"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 11,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 820,
            "top": 194,
            "index": "0fd016ef-7f84-4b04-8b52-37064a11a282",
            "zIndex": 7
        },
        {
            "title": "翻牌器",
            "name": "all-2 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAADXCAIAAAAm1ls2AAAACXBIWXMAAACHAAAAhwGdEjxIAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAxcSURBVHja7N1tjFxVGcDx59x7Z3Zmd6c7s3R32RbabZWku0BExIgvQbrVD2qCRl4SiYmWNpqYGO0LqKFpjDYayJYaNYrarQYiIYr6QSAE2G00CkSghAC75aXtQmm3tLAz3dd5ufccP9yZ2dnZbssMc6fd9v/rl+3N7jw9557nnufce7tHBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAjqPG6b7YSccLTsYLgxlp2eqOLTmq79QjY9XXrEiJl6+hExRkSUUuForCax7Hib1dVTdjAzMpQ7esD/uqFxSflZVMoYU10vha76bNmR3LGRzMGXFoolIsqyjfaqiNVwda+e+4Nu6kR66JnTxLJDYS+XrSJW9JrPuW6u9IhOT03vGzxHBqdzfl9XWjpW5HOkmC2ejjS3SIXDVFlWeM3HL/ryt2cvWEpEmze+lDCeu2AsraPNcW10RbGsWGvLjx+U/E8pP7He/cOdyb/+opDPzdFYa2kgP1Y1113Lnh/r5MN/OP7L7+fHRzjSlGgvi6W1VlXFin33HiveVhpr+vmBIz+6Id9w24ktXVYey9NKVROr6dY7nFWXl5wvlTt6cOSbV5J4dXLizeE5g1L5fyo7mUbrJQdeNM8PFJLDjn7kOqWssm8bO3LAzabnTIpKWfO+7Uxz6xLn2Sfy/0BlhTpXhTpXlX2Lm02PHTlQdmmoonOM1s6zjyuVTwO7tbOhq7v8e4w+MTJck1jWvr12y0X5z4jFI5ddPe+bzPE3h0pTT1mqirrMaN320n/CY8fyHxKORq/45Dk1LM//xBMxcy6iJv+nUuOPPzDx5IP5ExkKr/7bYbEtUcoftfmxWxbLH7amwqpsIjm6/ab8aLOs1lvvaP3a7SUhiguEshnPq653RrffXIilYmtvad/0GxE1J5apWaxjfd9SYvlJHun5xPK7Hp7TLv8LUxaryhL6xG9/kL8yKrFbO7r+9HLxZBXOjCHxFkX+esYrDDjbEq3FlqUr1oh/UNU2lFv4Kr+aakq0Oyu684GM8eauXmoUyxKtRUykOb60GEvXdHR6nhEvn2PaE2NCkaagYulCLBHxtIix7VAxVnZ64uTxwyTeYpUaPWQ8LxSJxi7qDDTQzPjYydFDItK6fHXQF+rs9ERy9JCIJJatDvrum5ud8WO1tF9q2cGORu25fqzmiy4WdZZvK5J4H3DcpI3nWrYddCDtuW52plBnBpt6WhdjBV9GaO3HqkPhZ0whVrWlMon3vthOyBgtpvbXNuPmjm2/qTneZmbvWCpjdO3nB63Hn3ggfPj17MgrxdETiSUm3zsWRMJNPT84/vP16UINZoyJxhIz4+8FkQSZkaHUz76hp8aL4aOx1umJsSBGgjc+NvbTr9vF02PEiTSSeEHx3JxSlh0Ou5mZmo/R7KvPu22XWJattbZsW8QoZVl2SCRd4xw/NpK1HTN1UkSUsrTrpieSswuz2vZY8lj2tRd04caszmXSE0ldu/XknC6cTGVf3Tf7V9edmRgznquUZYyucZrn0tlX9znhSPHmkJuZPruD0xIAJB5A4gEg8QASDwCJ90FtGUwaY4wxQ3sCjrRnyMxKDmwKLNCmgWRJJDO8uz49uXs4yKaVNarurSPxapwGfWvjdcjugaQx60vfQo733mOSg1sCadc9vXOatGaDSQ5sCb4/N6zhMk7ivX+pwcH9QU+q23rjktq7VRVs3ZsSkfjabYFMDvv7i4HU5sGUiMR7tw0Gmnq7h9Z3S2p4OBX4yZrtRF/3RhJvUbmtJ3/mEusOBR5sdHCzSvTuLP59Z+8OPyE6rwygXaVjcde6HX6Sd3YHWWRu6BYZ/kf/KNdxEu/csbO3Z92u8mOPvpASkc6uwGvAnSMBp4NfZO7v77mNU03infO6O+MiMjqyM/D1ZVeniAw/HVBJ5heZg1sXW8lH4l2Ydn9qjYgMPxXwLLFlMNm3Ni6pwf5gAu0e3tAtqcGfrNtZn26L9/aV3BjeQuKhwny4sVsktbc/kGmi5LlF39p4au9WlQgmMfYMbVgjqb075hXSdUvCIJ/KkHjnmz1D/iy0o7ce80R8bV8gzy0KRWZ9WiG71iVKb2b6d2sl3rt9kc17JN5ZyzqzvltkuD8RWHlWvGGrlFL9wyLxtX21ftC8ZSBZ3yLzFHnYPywi8au/uInEw/vMOtVTr3sRG3v8AbrmxlpWZXs29MbFfw2gRF/JwToUgRuf2i+BPJIh8c6vdV2y7lnnGx5N0f0k3gVp97Dx13Vb6511UnhyEVw1O/tCzmBKRFKDm5VSicDvuGwauLEud4ZJvEWcdf4jZpUIekW0e6j8be/dQ2ZDt4ik9j26a3H34ZxbRJsGkv4rqfufWlwPEC/4xCt5291/u7d7fTAPiIpvD6/ZMP/d+iD+S8RsQ4wxftYFei+nXuJrZ5/h5V8EX4QP7pnxzksbe/L13qzU3q3qLNS3tW5Yt+qf+y778B+VWoRXkwv+92ruWpeoT+l1W4+q6yJk57rE2RqNwYbe2K3Og9fSmPEAEg8g8QCwxqtYqGOltWyVYzvuwZek1r8uX7uuUkq7rohoz1OhBtW23AlHsq+/UPNYthP2N68yRluOE1l5uUyPW9PjeiJZ806zbcctbOhhhxoiXT3ZzIw9M+mljkuttzewSvbZU04ouqonm0k72ZncibdrHkuUsguboijLdkINzHhB8dxc7M77l/c9Vt1GimdilLJmfxu/MbE77++8+xFlBbCBScnWNkpZ8rHelu1/brzyM4FseaPmBNOXXRXbdl+s95aAYhU/VolyO1Y0b7svfvP3RNX+fKnSblTi5jIkXqAzekjZdp32ZHJCyrLFCjiWPxU4IbGswLew92PZIWXZgccSIyLKDinLUUGfL3P2ByZrPIDEAy4MF8ADdCfcsfV3UthFeeJfD80896RV4UrMc7NGlCqpUU5dDjmhji33FmNN/e+xyX//3XbClcWat/yYH0lZVvwr32n+9A35my65zHu/3lzVMjgrZwqmLCt2/c0Nq6/MxxIzdu8PzcxkDWKdatUX/ej1Hbf/XnR+p67UA3e577xVi3YpEq9ujL+PXPN1X5XCTqrq7dcjRw56Fa6tQ5FGY7RSdukANcaUrhbmx7JTJxoOvpxLV7YVWzjaVDb85y1JtNE6cvm1xTTR6anMA3dX0UGhSNOpBmhJQK2N9sKrrwivvkLl+1RnH/qVv19fxbGMmZMASuXSk2WxQp2rQp2rVKHh7uBf3Fy2iljGGDU3lnaz587QVOdx2qlIY9M1ny90u7Wk7ZKTJw57Rw6Yd96q9D6nPuUTAiOZ6XERCUebWzq7ZpZ9qHiOW9ouHX/3iHv0oB49VOnsqvUpNp10sxn/YtHedXlmSau3pNU/3hRvF5HJ947ql5+qootO2S4vl3WzaRFpW9mTa467iTb/eDTW6jREJt496r3yjFQ+iE8ZS3uuf2FqXf5hs6Q1V9hKvqFxSaS55eTxw/qNF6tIcq29+XtWG62zM5Mi0tK+QpScrHwiZcZ7f/Ndenryv/8s1kvRld1TI0PGGBGjKrzinHmPUm1mYynV2NUz9dar2nOl7Lpbi1jZkaGZwhM85+IuEZk6NlLdFfSMsXJHD0wNPZNv19Jl4Wjz5OHXAorlnjgyuf+5fHe2LLUT7ZMjQ0qpKp7p1XxPWRKv0jOgZ8s1Y1raLzVai1JS4YlRlm0WTqH8nFb4TCNKjGlpW661VkpVvNW9sk+Xqv5AnG2XdsLRlo4V1T21P/1TR1UWS2vLsuIdK0y1sczCJZbthHOZ6dJ2iUi8Y4XWnqquXWVl7ZxVfyR3trdivmD+d4Ix6amTItIQjWVmJirPX6+hsTkzPblQYeOWll5G8rEW/pHTsNQCla2ISP6TZ2e/9JTWnlLKVHldOl0KpafH55a7M5lp26/bq5hSjPYs29EL7N5edlK8XMZvqe2EvcrLWqM9J9Sw0FPybHpKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcOH5/wDaOpwTkdu4IwAAAABJRU5ErkJggg==",
            "top": 226,
            "left": 820,
            "dataType": 0,
            "data": {
                "value": "7.23"
            },
            "dataFormatter": "",
            "component": {
                "width": 100,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 20,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(11, 227, 227, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "textAlign": "center",
                "whole": true,
                "decimals": 2
            },
            "index": "6b117fcf-9f99-41ce-9eb8-09e5ebfca660",
            "zIndex": 6
        },
        {
            "title": "文本框",
            "name": "all-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "%"
            },
            "component": {
                "width": 40,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 16,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 884,
            "top": 220,
            "index": "acb7bb22-7f86-440d-b584-e789ac940751",
            "zIndex": 5
        },
        {
            "title": "文本框",
            "name": "all-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "同比增长金额"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 11,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1180,
            "top": 114,
            "index": "7fc11e58-8e4f-4be0-ac92-f9c72ddf6a9e",
            "zIndex": 4
        },
        {
            "title": "翻牌器",
            "name": "all-2 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 146,
            "left": 1180,
            "dataType": 0,
            "data": {
                "value": "53602.23"
            },
            "dataFormatter": "",
            "component": {
                "width": 100,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 20,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(254, 178, 70, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "textAlign": "center",
                "whole": true
            },
            "index": "05cfde22-326b-4dfe-84f5-768ff7f0de46",
            "zIndex": 3
        },
        {
            "title": "文本框",
            "name": "all-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "同比增长率"
            },
            "component": {
                "width": 100,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 11,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1180,
            "top": 194,
            "index": "b9b845c3-1114-49e9-8cb5-f3a5c6f29a81",
            "zIndex": 2
        },
        {
            "title": "翻牌器",
            "name": "all-2 c",
            "icon": "icon-flop",
            "img": "data:image/png;base64,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",
            "top": 226,
            "left": 1176,
            "dataType": 0,
            "data": {
                "value": "4.23"
            },
            "dataFormatter": "",
            "component": {
                "width": 100,
                "height": 40,
                "name": "flop",
                "prop": "flop"
            },
            "option": {
                "type": "",
                "suffixText": "",
                "suffixTextAlign": "",
                "suffixSplit": "",
                "suffixColor": "",
                "suffixFontSize": 0,
                "borderColor": "#fff",
                "borderWidth": 3,
                "backgroundBorder": "/img/border/border1.png",
                "fontSize": 20,
                "fontWeight": "bold",
                "splitx": 0,
                "splity": 0,
                "backgroundColor": "",
                "color": "rgba(254, 178, 70, 1)",
                "prefixSplitx": 0,
                "prefixSplity": 0,
                "suffixSplitx": 0,
                "suffixSplity": 0,
                "textAlign": "center",
                "whole": true,
                "decimals": 2
            },
            "index": "9be7f053-09ca-44fd-afc4-7c78136c9e22",
            "zIndex": 1
        },
        {
            "title": "文本框",
            "name": "all-2",
            "icon": "icon-text",
            "img": "/img/text.852a3c54.png",
            "dataType": 0,
            "dataFormatter": "",
            "data": {
                "value": "%"
            },
            "component": {
                "width": 40,
                "height": 40,
                "name": "text",
                "prop": "text"
            },
            "option": {
                "textAlign": "center",
                "fontSize": 16,
                "fontWeight": "normal",
                "color": "rgba(138, 167, 208, 1)",
                "split": 0,
                "lineHeight": 0
            },
            "left": 1240,
            "top": 220,
            "index": "13a3258b-9067-4c6b-974d-4d9dfcb0347b",
            "zIndex": 0
        }
    ]
}
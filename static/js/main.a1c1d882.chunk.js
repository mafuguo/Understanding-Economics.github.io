(this["webpackJsonpunderstanding-economics"]=this["webpackJsonpunderstanding-economics"]||[]).push([[0],{25:function(e,t,n){e.exports=n(40)},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),a=n(22),c=n.n(a),o=n(1),l=n(2),r=n(4),u=n(3),d=n(5),p=(n(30),n(31),n(15)),h=n(7),m=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).call(this))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Object.keys(h.b).map((function(e){var t=h.b[e];return s.a.createElement("li",{className:"nav-item"},s.a.createElement(p.b,{className:"nav-link",activeClassName:"active",to:"/survey/".concat(e)},t.title))}));return s.a.createElement("ul",{className:"nav nav-tabs"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(p.b,{exact:!0,className:"nav-link",activeClassName:"active",to:"/"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(p.b,{exact:!0,className:"nav-link",activeClassName:"active",to:"/background"},"Background")),e)}},{key:"componentDidMount",value:function(){}}]),t}(s.a.Component),v=n(11),f=n(9),b=(n(37),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).slctDivRef=s.a.createRef(),e.descDivRef=s.a.createRef(),e.slctRef=s.a.createRef(),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(!this.props.options)return null;var e,t=(e=this.props.options,Object.keys(e).map((function(t){return e[t]}))).map((function(e){return s.a.createElement("option",{value:e.id},e.title)})),n=this.props.selected?this.props.options[this.props.selected].description:"";return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("h4",null,this.props.title)),s.a.createElement("div",{className:"row"},s.a.createElement("span",null,this.props.description)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 slctDiv",ref:this.slctDivRef},s.a.createElement("select",{className:"align-left",size:8,ref:this.slctRef,value:this.props.selected,onChange:this.props.handleSelect},t)),s.a.createElement("div",{className:"col-md-6 scrolling",ref:this.descDivRef},s.a.createElement("span",{className:"align-top align-text-top",dangerouslySetInnerHTML:{__html:n}}))))}},{key:"componentDidUpdate",value:function(){this.slctDivRef.current&&this.descDivRef.current&&(this.descDivRef.current.style.height="".concat(this.slctDivRef.current.offsetHeight,"px")),this.slctRef.current&&!this.props.selected&&(this.slctRef.current.selectedIndex="-1")}}]),t}(s.a.Component));var y=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Page not found")," ",s.a.createElement("br",null),s.a.createElement("h3",null,"Please double check the URL and try again"))}}]),t}(s.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.selectedQuestion&&this.props.selectedGroup?s.a.createElement("div",{id:this.props.elementId}):null}},{key:"componentDidUpdate",value:function(){var e=this.props.selectedGroup,t=this.props.selectedQuestion,n=this.props.data,i=this.props.renderFunction;e&&t&&n&&i(this.props.elementId,e,t,n)}}]),t}(s.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(E,{elementId:"chart",survey:this.props.survey,data:this.props.data,selectedGroup:this.props.selectedGroup,selectedQuestion:this.props.selectedQuestion,renderFunction:this.renderChart})}},{key:"renderChart",value:function(e,t,n,i){console.log("rendering chart...");var s=i.map((function(e){var i={};return i[t.title]=e[t.id]||" No response",i.response=e[n.id]||" No response",i}));n.numeric?$("#".concat(e)).pivot(s,{rows:[t.title],aggregator:$.pivotUtilities.aggregators.Average(["response"]),renderer:$.pivotUtilities.c3_renderers["Horizontal Bar Chart"],rowOrder:"value_z_to_a"}):($("#".concat(e)).pivot(s,{rows:[t.title],cols:["response"],aggregator:$.pivotUtilities.aggregators["Count as Fraction of Rows"](),renderer:$.pivotUtilities.c3_renderers["Horizontal Stacked Bar Chart"],rowOrder:"value_z_to_a",colOrder:"value_z_to_a"}),document.getElementById("chart").getElementsByTagName("p")[0].remove())}}]),t}(s.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(E,{elementId:"crosstab",survey:this.props.survey,data:this.props.data,selectedGroup:this.props.selectedGroup,selectedQuestion:this.props.selectedQuestion,renderFunction:this.renderCrossTabs})}},{key:"renderCrossTabs",value:function(e,t,n,i){var s=i.map((function(e){return{group:e[t.id]||" No Response",response:e[n.id]||" No Response"}}));n.numeric?$("#".concat(e)).pivot(s,{rows:["group"],aggregator:$.pivotUtilities.aggregators.Average(["response"])}):$("#".concat(e)).pivot(s,{rows:["group"],cols:["response"],aggregator:$.pivotUtilities.aggregators.Count()})}}]),t}(s.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement(O,{survey:this.props.survey,data:this.props.data,selectedGroup:this.props.selectedGroup,selectedQuestion:this.props.selectedQuestion})),s.a.createElement("div",{className:"row"},s.a.createElement(j,{survey:this.props.survey,data:this.props.data,selectedGroup:this.props.selectedGroup,selectedQuestion:this.props.selectedQuestion})))}}]),t}(s.a.Component),S={},Q=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={selectedGroup:void 0,selectedTopic:void 0,selectedQuestion:void 0},e.handleGroupSelect=e.handleGroupSelect.bind(Object(f.a)(e)),e.handleTopicSelect=e.handleTopicSelect.bind(Object(f.a)(e)),e.handleQuestionSelect=e.handleQuestionSelect.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.surveyId=this.props.surveyId,this.surveyId&&this.surveyId in h.b&&(this.survey=h.b[this.surveyId]),this.groups=Object(v.a)({},h.a,{},this.survey.additionalGroups||{})}},{key:"render",value:function(){return this.survey?s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(b,{title:"Group",description:"Select how you would like to group responses",options:this.groups,selected:this.state.selectedGroup,handleSelect:this.handleGroupSelect})),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(b,{title:"Topic",description:"Select a topic that you would like to examine",options:this.survey.topics,selected:this.state.selectedTopic,handleSelect:this.handleTopicSelect})),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(b,{title:"Question",description:"Select a question to examine",options:this.state.selectedTopic?this.survey.topics[this.state.selectedTopic].questions:null,selected:this.state.selectedQuestion,handleSelect:this.handleQuestionSelect})),s.a.createElement("div",{className:"col-md-6",style:{background:"lightgrey"}},s.a.createElement("h3",null,"Possibly have variable definitions for the question here?"))),s.a.createElement(g,{survey:this.survey,data:this.state.surveyData,selectedGroup:this.groups[this.state.selectedGroup],selectedQuestion:this.state.selectedQuestion?this.survey.topics[this.state.selectedTopic].questions[this.state.selectedQuestion]:null})):s.a.createElement(y,null)}},{key:"componentDidMount",value:function(){var e=this;this.survey&&(document.title=this.survey.title,this.surveyId in S?this.setState({surveyData:S[this.surveyId]}):d3.csv("".concat("","/data/data_").concat(this.surveyId,".csv")).then((function(t){S[e.surveyId]=t,e.setState({surveyData:t})})))}},{key:"handleGroupSelect",value:function(e){this.setState({selectedGroup:e.target.value})}},{key:"handleTopicSelect",value:function(e){this.setState({selectedTopic:e.target.value,selectedQuestion:void 0})}},{key:"handleQuestionSelect",value:function(e){this.setState({selectedQuestion:e.target.value})}}]),t}(s.a.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={selectedTopic:void 0,selectedQuestion:void 0},e.handleTopicSelect=e.handleTopicSelect.bind(Object(f.a)(e)),e.handleQuestionSelect=e.handleQuestionSelect.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return Object(v.a)({},this.state)!=Object(v.a)({},t)||Object(v.a)({},this.props)!=Object(v.a)({},e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"row"},s.a.createElement(b,{title:this.props.topicTitle||"Topic",description:this.props.topicDescription||"Select a topic to examine.",options:this.props.topics,selected:this.state.selectedTopic,handleSelect:this.handleTopicSelect})),s.a.createElement("div",{className:"row"},s.a.createElement(b,{title:this.props.questionTitle||"Question",description:this.props.questionDescription||"Select a question to examine.",options:this.state.selectedTopic?this.props.topics[this.state.selectedTopic].questions:null,selected:this.state.selectedQuestion,handleSelect:this.handleQuestionSelect})))}},{key:"handleTopicSelect",value:function(e){var t=this;this.setState({selectedTopic:e.target.value,selectedQuestion:void 0},(function(){t.props.receiveSelection(null)}))}},{key:"handleQuestionSelect",value:function(e){var t=this;this.setState({selectedQuestion:e.target.value},(function(){t.props.receiveSelection(t.props.topics[t.state.selectedTopic].questions[t.state.selectedQuestion])}))}}]),t}(s.a.Component),C={},T=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={selectedGroup:void 0,selectedContent:void 0},e.handleGroupSelect=e.handleGroupSelect.bind(Object(f.a)(e)),e.handleContentSelect=e.handleContentSelect.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.surveyId=this.props.surveyId,this.surveyId&&this.surveyId in h.b&&(this.survey=h.b[this.surveyId]),this.groups=Object(v.a)({},h.a,{},this.survey.additionalGroups||{}),this.topics=Object(v.a)({Demographics:{id:"Demographics",title:"Demographics",description:"Questions about the demographics of the respondent",questions:this.groups}},this.survey.topics)}},{key:"render",value:function(){return this.survey?s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement(k,{topics:this.topics,receiveSelection:this.handleGroupSelect}),s.a.createElement(k,{topics:this.topics,receiveSelection:this.handleContentSelect})),s.a.createElement(g,{survey:this.survey,data:this.state.surveyData,selectedGroup:this.state.selectedGroup,selectedQuestion:this.state.selectedContent})):s.a.createElement(y,null)}},{key:"componentDidMount",value:function(){var e=this;this.survey&&(document.title=this.survey.title,this.surveyId in C?this.setState({surveyData:C[this.surveyId]}):d3.csv("".concat("","/data/data_").concat(this.surveyId,".csv")).then((function(t){C[e.surveyId]=t,e.setState({surveyData:t})})))}},{key:"handleGroupSelect",value:function(e){this.setState({selectedGroup:e})}},{key:"handleContentSelect",value:function(e){this.setState({selectedContent:e})}}]),t}(s.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"HomePage"},s.a.createElement("span",null,s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))}}]),t}(s.a.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"HomePage"},s.a.createElement("span",null,s.a.createElement("p",null,"Some background info about the project here."),s.a.createElement("p",null,"Some other background info.")))}}]),t}(s.a.Component),_=n(13),G=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={surveyData:null,selectedGroup:null,selectedQuestion:null},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Object.keys(h.b).map((function(e){return s.a.createElement(_.a,{exact:!0,path:"/survey/".concat(e),component:function(){return s.a.createElement(Q,{surveyId:"".concat(e)})}})}));return s.a.createElement(p.a,{basename:"/"},s.a.createElement("div",{className:"App container"},s.a.createElement("h3",null,"Understanding Economics"),s.a.createElement(m,null),s.a.createElement(_.c,null,s.a.createElement(_.a,{exact:!0,path:"/",component:N}),s.a.createElement(_.a,{exact:!0,path:"/background",component:x}),e,s.a.createElement(_.a,{exact:!0,path:"/survey_alt/income_survey",component:function(){return s.a.createElement(T,{surveyId:"income_survey"})}}),s.a.createElement(_.a,{component:y}))))}}]),t}(s.a.Component);n(38),n(39);c.a.render(s.a.createElement(G,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"a":{"gender":{"id":"gender","title":"Gender","numeric":false,"description":"The gender of the respondent."},"income":{"id":"income","title":"Income","numeric":false,"description":"The annual income range of the respondent."},"born_us":{"id":"born_us","title":"Born in US","numeric":false,"description":"Whether the respondent was born in the U.S."}},"b":{"income_survey":{"title":"Income Survey","additionalGroups":{},"topics":{"Economic Effects":{"description":"Questions about economic effects","id":"Economic Effects","title":"Economic Effects","questions":{"Q06006_en":{"id":"Q06006_en","title":"Economic Effect","numeric":false,"description":"The economic effect that the respondent believes.\\n<ul>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li><li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n</ul>"},"Q06009_en":{"id":"Q06009_en","title":"Yes or No","numeric":false,"description":"A yes or no question where I don\'t know the question"}}},"Tax Cut":{"description":"Questions about the recent tax cut","id":"Tax Cut","title":"Tax Cut","questions":{"Q06007_en":{"id":"Q06007_en","title":"Tax Cut Deficit","numeric":false,"description":"How the respondents believes the tax cut affected the deficit"},"Q06008_en":{"id":"Q06008_en","title":"Tax Cut Deficit 2","numeric":false,"description":"Another tax cut deficit question"}}}}},"tax_survey":{"title":"Tax Survey","additionalGroups":{},"topics":{"Blah blah blah":{"description":"Questions about economic effects","id":"Blah blah blah","title":"Blah blah blah","questions":{"Q06006_en":{"id":"Q06006_en","title":"Economic Effect","numeric":false,"description":"The economic effect that the respondent believes.\\n<ul>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li><li>Hello</li>\\n<li>Hello</li>\\n<li>Hello</li>\\n</ul>"},"Q06009":{"id":"Q06009","title":"Yes or No","numeric":false,"description":"A yes or no question where I don\'t know the question"}}},"Tax Cut":{"description":"Questions about the recent tax cut","id":"Tax Cut","title":"Tax Cut","questions":{"Q06007_en":{"id":"Q06007_en","title":"Tax Cut Deficit","numeric":false,"description":"How the respondents believes the tax cut affected the deficit"},"Q06008_en":{"id":"Q06008_en","title":"Tax Cut Deficit 2","numeric":false,"description":"Another tax cut deficit question"}}}}}}}')}},[[25,1,2]]]);
//# sourceMappingURL=main.a1c1d882.chunk.js.map
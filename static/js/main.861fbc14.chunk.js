(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(A,n,e){},22:function(A,n,e){},28:function(A,n,e){},29:function(A,n,e){},30:function(A,n,e){},31:function(A,n,e){"use strict";e.r(n);var t=e(0),i=e(12),a=e.n(i),o=e(2),r=(e(21),e(3)),c=e(4);e(22);var g,l,j,s,u,d,C,h,D=function(A){var n=Object(t.useState)(!1),e=Object(o.a)(n,2),i=e[0],a=e[1],r=Object(t.useState)(A.content),c=Object(o.a)(r,2),g=c[0],l=c[1];return{editing:i,setEditing:a,editContent:g,setEditContent:l,handleCheck:function(){a(!1)},handleEdit:function(){a((function(A){return!A}))},handleCancel:function(){a((function(A){return!A})),l(A.content)},handleChangeInput:function(A){var n=A.target.value;l(n)},handleFinish:function(A,n,e){a((function(A){return!A})),""!==e&&A(n,e)}}},B=e(1),b=c.a.div(g||(g=Object(r.a)(["\n  width: 100%;\n  min-height: 50px;\n  padding: 0 3%;\n  border-radius: 10px;\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  align-items: center;\n\n  &:last-child {\n    margin-bottom: 30px;\n  }\n\n  &:hover {\n    background: #dde6fa;\n    transition: background 0.2s;\n  }\n\n  ","\n"])),(function(A){return A.isDone&&"\n    filter: opacity(25%);\n  "})),w=c.a.div(l||(l=Object(r.a)(["\n  min-width: 18px;\n  min-height: 18px;\n  border: 1px solid #3b66c3;\n  border-radius: 1px;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:hover {\n    box-shadow: 0 0 2px 1px #3b66c3;\n  }\n\n  ","\n"])),(function(A){return A.isDone&&"\n    background-image: url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU4SURBVHgB7ZztT1t1FMfPpUAH9GHonBuMtjzoYENnJL7RxCzqEs02dLpFXxgTMSxL9k/4D/hKM02MvNToYDOiL4yby7IsURATnWzD0PEwoKhsZRuFPty2nvPDztLe3h66e0tv+X0SQssFkvvh/M793vMrVZ47fikJkrxUgISFFMVEimIiRTGRophIUUykKCZSFBMpiokUxUSKYiJFMZGimEhRTCphk1BdVQGP1tth32NucDsq4Yr/LlydXAJVTbB+ftOI2tvshOOveaGzxQWKAnAvpMIHX4zDueEF1s9viqXX1b4Vel/1whOtq5IIZ10lvP2yh/07yr6iSM6JIz7o8DmyjtU7+adf1qKoknoOeTQlEZd+uwVcynbpdbY44d2DTdi8XZrHf72+CKfPB4BLWVYUSTrxug/2YAPXYmTsDpwamISp+WXgUlai7BgB9qYk+bIlxdQkDF8LwsdnJmFiji+JKKulx5H02eD0uiURZVNRT+92Q89hj6akKIbKX64tQh9KGptagkIoC1GdFAFyVBIx8p+k6wVKIiwvSlTSIW9uSXh1O1VAT8rE0j2Krm6Uk556PHcEMEISYdmK4kaAsenCl1s6lhNlZgTQw3JLz8wIoIelKsrsCKCHZUQVIwLoYQlRxYoAepR8jypmBNCjpCuq2BFAj7yi6p1VcGT/Tnh+38OwuBSDsxfn4fKV2+yhfCFQBKDZNknSGrpF8eo2NHobPjk7BZMBcyspRV5R77zSBMdebLj/vK2pFh75rgp+GFqAOyjODDiS+r69WTRJRN4etb9r25rnWx3VorEeeGab2AIyGhrfvtetPb6NxhIwdHVV0p9FWG7p5D3T5bCa9TUX7mD0HPbCwWe3GyortRHwZJt246Yw2TdYfElE3rMcuBAQf8lMXGK7Z5eQZTdAFlVSrt0SYhhzEt2WbIQkwubp6nlf7xv+DkYgjp7aMcNU2pQ1x2rtNmjbhSeGm2V0AvFEYa/tp6tbb7cXI4Bb83gqAvhni9eTMskraiWSgPGbIfF4j88FtjRZCgpy1FSCd0cNhKMJcSLrlXU/AuBnW4WSdTwVATaqklLkFUVEcOmNTYcgkUxAS4MDtlSvXWp1KKuz1Y1S4+CfCbFk0XKlraSTx5pFb8qURDe4P48G4aPTEzA+E4KNhiWKiKmrFWNHSZ4dteJElbRzo+ftXidWVhxm/wlDJKqfs0gSZwpQCpIItiiCKouWAPlpbazLqix6Ti+GuBtSxQnmqqzUFIAqKROzpwCFsi5RBMnyz4aELOormQ0+NVhbWlbhBt5/xeNrZdEU4OTRZk1JxNBo0NQpQKGsWxQhKgsbPC29Dp+2LKo4avA30ho8VVJvty+nJJoCfNhfGj0pk4JEEdSzpv9aERWjFR1qtmB0QFmp6ED5iF56ky8ClKIk4oGmBwuLUfjq3CwuQwXeOtCIKf1/WRUoaPtDdngDb6gpPtAFYLenTvP3iDA5MCGqtFRRjPgPUIoHb760E6U0ipf9cTFrI8AMDLlRC62o0P9jAAYvz+MoRoUkQ72ZGwFmYNgdLUWCz7+fgTMX5sRjPSgCrN7gllYE0MPQOQkJ6kdRA/gRieUOnGZvBJiB4aNgkvXl+TlxT0gNPnOyMFKkGbfRmDIzp5719cWA6FVHX2jAG2cbPk7CT38E4dNvrNGTMlHMfN8De7UNpwMO6PC6cFwTht/992D+VhisiCLfIIKH/F8YJlIUEymKiRTFRIpiIkUxkaKYSFFMpCgmUhQTKYqJFMVEimIiRTGRophIUUz+BWWka63NIJXLAAAAAElFTkSuQmCC",");\n    background-size: contain;\n  ")})),O=c.a.div(j||(j=Object(r.a)(["\n  width: 100%;\n  color: #2b3b54;\n  font-size: 16px;\n  text-align: left;\n  overflow-wrap: anywhere;\n  display: ",";\n"])),(function(A){return A.editing?"none":"block"})),E=c.a.div(s||(s=Object(r.a)(["\n  min-width: 22px;\n  min-height: 22px;\n  background-image: url(",");\n  filter: opacity(40%);\n  background-size: cover;\n  cursor: pointer;\n  margin-left: 15px;\n\n  &:hover {\n    filter: none;\n  }\n"])),"data:image/png;base64,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"),f=Object(c.a)(E)(u||(u=Object(r.a)(["\n  ","\n"])),(function(A){return A.editing?"display: none":"background-image:url(".concat("data:image/png;base64,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",")")})),I=Object(c.a)(E)(d||(d=Object(r.a)(["\n  ","\n"])),(function(A){return A.editing?"background-image:url(".concat("data:image/png;base64,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",")"):"display: none"})),k=Object(c.a)(E)(C||(C=Object(r.a)(["\n  ","\n"])),(function(A){return A.editing?"background-image:url(".concat("data:image/png;base64,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",")"):"display: none"})),p=c.a.input(h||(h=Object(r.a)(["\n  border: 1px solid #93aae9;\n  border-radius: 4px;\n  height: 30px;\n  width: 100%;\n  padding: 0 2%;\n  font-size: 16px;\n  color: #2b3b54;\n  display: ",";\n"])),(function(A){return A.editing?"block":"none"}));var v=function(A){var n=A.todo,e=Object(t.useContext)(J),i=e.handleDelete,a=e.handleToggleIsDone,o=e.handleEditContent,r=D(n),c=r.editing,g=r.editContent,l=r.handleCheck,j=r.handleEdit,s=r.handleCancel,u=r.handleChangeInput,d=r.handleFinish;return Object(B.jsxs)(b,{isDone:n.isDone,children:[Object(B.jsx)(w,{isDone:n.isDone,onClick:function(){l(),a(n.id)}}),Object(B.jsx)(O,{editing:c,children:n.content}),Object(B.jsx)(p,{value:g,editing:c,onChange:u}),Object(B.jsx)(I,{onClick:function(){return d(o,n.id,g)},editing:c}),Object(B.jsx)(k,{onClick:s,editing:c}),Object(B.jsx)(f,{onClick:j,editing:c}),Object(B.jsx)(E,{onClick:function(){return i(n.id)}})]})};var Y=function(A){var n=A.showData,e=A.todosData;return("all"===n?e:"isDone"===n?e.filter((function(A){return A.isDone})):e.filter((function(A){return!A.isDone}))).map((function(A){return Object(B.jsx)(v,{todo:A},A.id)}))};e(28);var x=function(){var A=Object(t.useState)(""),n=Object(o.a)(A,2),e=n[0],i=n[1];return{input:e,setInput:i,handleInputChange:function(A){var n=A.target.value;i(n)},handleKeyPress:function(A,n,e){if("Enter"===A.key){if(""===n)return;e(n),i("")}}}};var M=function(A){var n=A.createTask,e=x(),t=e.input,i=e.handleInputChange,a=e.handleKeyPress;return Object(B.jsx)("input",{type:"text",className:"create-task",onChange:i,onKeyPress:function(A){a(A,t,n)},value:t,autoFocus:!0})},F=(e(29),{color:"#F7F8FD",background:"#A4B8ED"});var Q=function(A){var n=A.name,e=A.buttonText,i=Object(t.useContext)(L),a=i.filter,o=i.setFilter;return Object(B.jsx)("button",{style:a===n?F:{},name:n,onClick:function(){return o(n)},className:"btn",children:e})};var U=function(A){var n=A.show;return Object(B.jsxs)("div",{style:n?{marginBottom:"20px"}:{display:"none"},children:[Object(B.jsx)(Q,{name:"all",buttonText:"\u5168\u90e8"}),Object(B.jsx)(Q,{name:"unDone",buttonText:"\u672a\u5b8c\u6210"}),Object(B.jsx)(Q,{name:"isDone",buttonText:"\u5df2\u5b8c\u6210"})]})},N=e(6),T=e(16);var K=function(){var A=Object(t.useRef)(1),n=Object(t.useState)((function(){var n=window.localStorage.getItem("todos")||"";return n&&"[]"!==n?(n=JSON.parse(n),A.current=n[0].id+1):n=[],n})),e=Object(o.a)(n,2),i=e[0],a=e[1];return Object(t.useEffect)((function(){!function(A){window.localStorage.setItem("todos",JSON.stringify(A))}(i)}),[i]),{id:A,todos:i,setTodos:a,createTask:function(n){a([{id:A.current,content:n,isDone:!1}].concat(Object(T.a)(i))),A.current++},handleDelete:function(A){a(i.filter((function(n){return n.id!==A})))},handleToggleIsDone:function(A){a(i.map((function(n){return n.id!==A?n:Object(N.a)(Object(N.a)({},n),{},{isDone:!n.isDone})})))},handleDeleteAll:function(){a([])},handleEditContent:function(A,n){a(i.map((function(e){return e.id!==A?e:Object(N.a)(Object(N.a)({},e),{},{content:n})})))}}},J=Object(t.createContext)(),L=Object(t.createContext)();var m=function(){var A=K(),n=A.todos,e=A.createTask,i=A.handleDelete,a=A.handleToggleIsDone,r=A.handleDeleteAll,c=A.handleEditContent,g=Object(t.useState)("all"),l=Object(o.a)(g,2),j=l[0],s=l[1];return Object(B.jsx)("section",{className:"todo-list",children:Object(B.jsxs)("div",{style:{paddingBottom:0!==n.length?"60px":"35px"},className:"wrapper",children:[Object(B.jsx)("h1",{className:"title",children:"TODO LIST"}),Object(B.jsx)(M,{createTask:e}),Object(B.jsx)(L.Provider,{value:{filter:j,setFilter:s},children:Object(B.jsx)(U,{show:0!==n.length})}),Object(B.jsx)("div",{children:Object(B.jsx)(J.Provider,{value:{todos:n,handleDelete:i,handleToggleIsDone:a,handleEditContent:c},children:Object(B.jsx)(Y,{todosData:n,showData:j})})}),Object(B.jsx)("button",{style:0!==n.length?{}:{display:"none"},onClick:r,className:"delete-all",children:"Delete All"})]})})};e(30);a.a.render(Object(B.jsx)(m,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.861fbc14.chunk.js.map
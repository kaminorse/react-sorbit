import{j as e}from"./classNameUtility-Dvixbo9Q.js";import{M as o,a as l,b as m}from"./MessageHeader-WFvqF_Ba.js";import{S as g}from"./SorbitStatic-DcKl56fc.js";import"./index-l2PZgWEW.js";const x={title:"Components/Message",component:o,tags:["autodocs"],argTypes:{}},s={args:{colorName:void 0},render:a=>e.jsx(g,{children:e.jsxs(o,{...a,children:[e.jsx(l,{children:"Header"}),e.jsx(m,{children:"Body"})]})})},r={args:{colorName:void 0},render:a=>e.jsx(g,{children:e.jsx(o,{...a,children:e.jsx(m,{children:"Body"})})})};var n,d,t;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <SorbitStatic>
      <Message {...props}>
        <MessageHeader>
          {"Header"}
        </MessageHeader>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </SorbitStatic>
}`,...(t=(d=s.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <SorbitStatic>
      <Message {...props}>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </SorbitStatic>
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const B=["Plain","BodyOnly"];export{r as BodyOnly,s as Plain,B as __namedExportsOrder,x as default};

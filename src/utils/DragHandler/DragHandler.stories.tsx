import React from 'react'
import DragHandler, { DragProps } from './DragHandler'
import {Story, Meta} from '@storybook/react/types-6-0';
import styled from 'styled-components';


const TestUser = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #00ffbb;
`
const DragFrame = styled.div`
  width: 600px;
  height: 300px;
  position: relative;
`

export default {
  title: "Example/DragHandler",
  argTypes: {
    callback:{action:'dragged'}
  },
  component: DragHandler,
} as Meta

const Template: Story<DragProps> = (args) => <DragFrame id="dragFrame"><DragHandler {...args}><TestUser/></DragHandler></DragFrame>

export const Default = Template.bind({})

Default.args = {
  initPos: {
    x:0,y:0
  }
}

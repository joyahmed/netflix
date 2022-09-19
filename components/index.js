import xw from 'xwind'
import ButtonReact from './ButtonReact'
import ButtonStyled from './ButtonStyled'

const Index = () => (
  <div css={xw`grid justify-center items-center h-screen space-y-20`}>
    <div css={xw`space-y-20`}>
      <ButtonReact>@emotion/react</ButtonReact>
      <ButtonStyled>@emotion/styled</ButtonStyled>
    </div>
  </div>
)

export default Index

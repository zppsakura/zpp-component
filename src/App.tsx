import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import './styles/index.scss';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button disabled>Hello</Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Small Danger
        </Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com'>
          Baidu Link
        </Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled>
          Disabled Link
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
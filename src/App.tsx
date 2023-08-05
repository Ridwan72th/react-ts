import './App.css';
import { Button, ConfigProvider, } from 'antd';
import { theme } from "./antd/theme"

function App() {
  return (
    <ConfigProvider theme={theme} >
      <div>
        <Button type="primary">Button</Button>
      </div>
    </ConfigProvider>

  )
}


export default App;

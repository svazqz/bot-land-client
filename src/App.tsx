import { useState } from 'react';
import './App.css';
import BotListContainer from './modules/BotList';
import CreateBotContainer from './modules/CreateBot';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './components/ui/resizable';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';

function onChange(newValue: any) {
  console.log('change', newValue);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border justify-center self-center w-full h-full align-middle"
    >
      <ResizablePanel
        defaultSize={25}
        minSize={25}
        maxSize={35}
        className="h-full items-center align-middle justify-center"
      >
        <div className="flex items-center justify-center p-6">
          <CreateBotContainer></CreateBotContainer>
        </div>

        <BotListContainer></BotListContainer>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="p-10 w-full h-full">
          <div className="rounded-lg shadow-lg w-full h-full">
            <div className="rounded-lg w-full h-full overflow-hidden">
              <AceEditor
                mode="java"
                theme="github"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default App;

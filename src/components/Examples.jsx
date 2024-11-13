import { CORE_CONCEPTS, EXAMPLES } from '../data.js'
import TabButton from './TabButton.jsx';
import { useState, Fragment } from 'react';
import Section from'./Section.jsx'
import Tabs from './Tabs.jsx';
export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();


    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);

    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic){

        tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>

            <p>{EXAMPLES[selectedTopic].description}</p>

            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        );



    }

    return (
        <Section id="examples" title = "Examples">
            
            {/* This custom component, using mulitple JSX slots
                it receives tabcontent as a child
                and passes a fragment of jxs code as a parameter named buttons.

                Setting Component Type dynamically:
                pass built in component with name start with lowercase: buttonContainer = "meunu"
                pass custom component with name start with uppercase : buttonContainer = {Section}

                the prop should be starting with lowercase because it will make the prop reusable.

                Default Prop Value example is inside Tabs Component.
            
            */}
            <Tabs
                buttonsContainer = "menu"
                buttons={
                    <>
                    <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect('state')}>State</TabButton>
                    </>

                }
            >

                {tabContent}


            </Tabs>

 

        
        
          



        </Section>
    
    
    );

}
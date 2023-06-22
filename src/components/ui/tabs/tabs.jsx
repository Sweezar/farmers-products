import React, { useState } from "react";
import { Wrapper, TitleList, TitleButton, TitleText, Content } from "./styled";

function Tabs({ tabs, className }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Wrapper className={className}>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (activeTab === index) {
              return (
                <TitleButton active key={item.id}>
                  <TitleText active>{item.title}</TitleText>
                </TitleButton>
              );
            }
            return (
              <TitleButton key={item.id} onClick={() => setActiveTab(index)}>
                <TitleText>{item.title}</TitleText>
              </TitleButton>
            );
          })}
      </TitleList>
      <Content>{tabs[activeTab].content}</Content>
    </Wrapper>
  );
}

export default Tabs;

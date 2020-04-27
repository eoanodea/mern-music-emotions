/*
 * File: TabController.tsx
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Monday, 27th April 2020 5:51:29 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Handles Tab functionality on the Show Track Page
 * Last Modified: Monday, 27th April 2020 5:57:38 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

import React, { Component } from "react";
import { TabPanel } from "./TabPanel";
import { Tabs, Tab } from "@material-ui/core";
import { List, Add } from "@material-ui/icons";
import CreateReaction from "../reaction/Create";
import ListReaction from "../reaction/List";

type IProps = {
  id: string;
  currentTime: number;
  handleAudioJump: (seconds: number) => void;
};

type IState = {
  tab: number;
};

class TabController extends Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      tab: 0,
    };
  }

  a11yProps(index: number) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }

  /**
   * Handles the change of tab
   */
  handleTabChange = (event: any, tab: any) => {
    this.setState({ tab });
  };

  render() {
    const { tab } = this.state;
    const { id, currentTime, handleAudioJump } = this.props;
    return (
      <React.Fragment>
        <Tabs
          value={tab}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Create Reaction" icon={<Add />} {...this.a11yProps(0)} />
          <Tab label="Reactions" icon={<List />} {...this.a11yProps(1)} />
        </Tabs>
        <TabPanel value={tab} index={0}>
          <CreateReaction id={id} time={currentTime} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <ListReaction id={id} handleAudioJump={handleAudioJump} />
        </TabPanel>
      </React.Fragment>
    );
  }
}

export default TabController;

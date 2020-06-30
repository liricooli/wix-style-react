import * as React from 'react';
import {TagProps} from "../Tag";

export interface TagListProps {
  dataHook?: string;
}

interface ActionProps {
  dataHook?: string;
  onClick?(): void
}

declare const Tag: React.FunctionComponent<TagProps>;
declare const Action: React.FunctionComponent<ActionProps>;



export default class TagList extends React.PureComponent<TagListProps>{
  static Tag: typeof Tag;
  static Action: typeof Action;
}



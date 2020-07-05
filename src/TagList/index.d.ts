import * as React from 'react';
import {TagProps} from "../Tag";

export interface TagListProps {
  dataHook?: string;
  tags: React.ReactNode[];
  actionButton?: ActionButtonProps;
}

interface ActionButtonProps {
  label?: string;
  onClick?(): void
}


declare const TagItem: React.FunctionComponent<TagProps>;



export default class TagList extends React.PureComponent<TagListProps>{
  static Tag: typeof TagItem;
}



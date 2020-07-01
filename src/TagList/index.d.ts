import * as React from 'react';
import Tag, {TagProps} from "../Tag";

export interface TagListProps {
  dataHook?: string;
  tags: Tag[];
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



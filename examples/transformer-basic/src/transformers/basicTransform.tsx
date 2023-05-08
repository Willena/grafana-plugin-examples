import React from 'react';
import {TransformerUIProps} from "@grafana/data/src/transformations";
import {DataTransformerInfo, PluginState} from "@grafana/data";
import {TransformerDef} from "../../../../../packages/grafana-data/src/types/transformerPlugin";

interface BasicTransformerOptions {
  options: {}
  onChange: () => void
}

// TODO:  Minimal implementation
export const BasicTransformerEditor = ({options, onChange}: TransformerUIProps<BasicTransformerOptions>) => {
  return (
    <>
      <p>Yo ! </p>
    </>)
};

export const basicTransformer: DataTransformerInfo<BasicTransformerOptions> = {
  id: "basic-transform",
  name: 'BASIC TEST',
  description: 'TEST TEST TEST TEST',
  defaultOptions: {},
  state: PluginState.alpha,

  /**
   * Return a modified copy of the series.  If the transform is not or should not
   * be applied, just return the input series
   */
  operator: (options) => (source) => {
    console.log('Operator called ! ')
    return source;
  }
};


export const basicTransformRegistryItem: TransformerDef<BasicTransformerOptions> = {
  editor: BasicTransformerEditor,
  transformation: basicTransformer,
};

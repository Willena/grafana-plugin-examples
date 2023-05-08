import {TransformerPlugin} from "@grafana/data";
import {basicTransformRegistryItem} from "./transformers/basicTransform";

export const plugin = new TransformerPlugin<{}>()
  .registerTransformer(basicTransformRegistryItem);

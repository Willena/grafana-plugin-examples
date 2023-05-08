import {TransformerPlugin} from "../../../../packages/grafana-data/src/types/transformerPlugin";
import {basicTransformRegistryItem} from "./transformers/basicTransform";

export const plugin = new TransformerPlugin<{}>()
  .registerTransformer(basicTransformRegistryItem);

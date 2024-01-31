import { FileType, PostProcessor } from "@teleporthq/teleport-types";
import { transform } from "@babel/core";
import presetReact from "@babel/preset-react";

export interface PostProcessorFactoryOptions {}

export const createJSXTranspilePostProcessor = () => {
  const processor: PostProcessor = (codeChunks) => {
    Object.keys(codeChunks).forEach((fileKey) => {
      if (
        fileKey === FileType.JS ||
        fileKey === FileType.TS ||
        fileKey === FileType.TSX
      ) {
        const transformedCode = transform(codeChunks[fileKey], {
          presets: [presetReact],
        });
        codeChunks[fileKey] = transformedCode?.code || codeChunks[fileKey];
      }
    });
    return codeChunks;
  };

  return processor;
};

export default createJSXTranspilePostProcessor();

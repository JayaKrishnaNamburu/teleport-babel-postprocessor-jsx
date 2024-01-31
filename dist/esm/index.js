import { FileType } from "@teleporthq/teleport-types";
import { transform } from "@babel/core";
import presetReact from "@babel/preset-react";
const createJSXTranspilePostProcessor = () => {
  const processor = (codeChunks) => {
    Object.keys(codeChunks).forEach((fileKey) => {
      if (fileKey === FileType.JS || fileKey === FileType.TS || fileKey === FileType.TSX) {
        const transformedCode = transform(codeChunks[fileKey], {
          presets: [presetReact]
        });
        codeChunks[fileKey] = (transformedCode == null ? void 0 : transformedCode.code) || codeChunks[fileKey];
      }
    });
    return codeChunks;
  };
  return processor;
};
var src_default = createJSXTranspilePostProcessor();
export {
  createJSXTranspilePostProcessor,
  src_default as default
};

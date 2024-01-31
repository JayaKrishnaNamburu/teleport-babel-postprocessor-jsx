var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  createJSXTranspilePostProcessor: () => createJSXTranspilePostProcessor,
  default: () => src_default
});
var import_teleport_types = __toModule(require("@teleporthq/teleport-types"));
var import_core = __toModule(require("@babel/core"));
var import_preset_react = __toModule(require("@babel/preset-react"));
const createJSXTranspilePostProcessor = () => {
  const processor = (codeChunks) => {
    Object.keys(codeChunks).forEach((fileKey) => {
      if (fileKey === import_teleport_types.FileType.JS || fileKey === import_teleport_types.FileType.TS || fileKey === import_teleport_types.FileType.TSX) {
        const transformedCode = (0, import_core.transform)(codeChunks[fileKey], {
          presets: [import_preset_react.default]
        });
        codeChunks[fileKey] = (transformedCode == null ? void 0 : transformedCode.code) || codeChunks[fileKey];
      }
    });
    return codeChunks;
  };
  return processor;
};
var src_default = createJSXTranspilePostProcessor();

declare module "p5.plotsvg" {
  export interface P5PlotSvg {
    VERSION: string;
    SVG_INDENT_NONE: 0;
    SVG_INDENT_SPACES: 1;
    SVG_INDENT_TABS: 2;

    // Core recording functions
    beginRecordSVG(p5Instance: any, filename?: string): void;
    pauseRecordSVG(pause: boolean): void;
    endRecordSVG(): void;

    // Configuration functions
    setSVGDocumentSize(width: number, height: number): void;
    setSvgResolutionDPI(dpi: number): void;
    setSvgResolutionDPCM(dpcm: number): void;
    setSvgDefaultStrokeWeight(weight: number): void;
    setSvgDefaultStrokeColor(color: string): void;
    setSvgBackgroundColor(color: string): void;
    setSvgIndent(indentType: number, indentAmount?: number): void;
    setSvgFlattenTransforms(flatten: boolean): void;
    setSvgCoordinatePrecision(precision: number): void;
    setSvgTransformPrecision(precision: number): void;
    setSvgPointRadius(radius: number): void;
    setSvgExportPolylinesAsPaths(exportAsPaths: boolean): void;
    setSvgMergeNamedGroups(merge: boolean): void;
    setSvgGroupByStrokeColor(groupByColor: boolean): void;

    // Grouping functions
    beginSvgGroup(
      groupNameOrAttrs?: string | Record<string, any>,
      attrs?: Record<string, any>,
    ): void;
    endSvgGroup(): void;

    // Utility functions
    getDefaultStrokeColor(): string;
    isRecordingSVG(): boolean;

    // Injection utilities
    injectSvgHeaderAttribute(attrName: string, attrValue: string): void;
    injectSvgDef(type: string, attributesObj: Record<string, any>): void;

    // Internal properties (for addon libraries)
    _commands: any[] | null;
    _recordingSessionId: number;
  }

  // Export all functions individually
  export function beginRecordSVG(p5Instance: any, filename?: string): void;
  export function pauseRecordSVG(pause: boolean): void;
  export function endRecordSVG(): void;
  export function setSVGDocumentSize(width: number, height: number): void;
  export function setSvgResolutionDPI(dpi: number): void;
  export function setSvgResolutionDPCM(dpcm: number): void;
  export function setSvgDefaultStrokeWeight(weight: number): void;
  export function setSvgMergeNamedGroups(merge: boolean): void;
  export function setSvgGroupByStrokeColor(groupByColor: boolean): void;
  export function setSvgDefaultStrokeColor(color: string): void;
  export function setSvgBackgroundColor(color: string): void;
  export function setSvgIndent(indentType: number, indentAmount?: number): void;
  export function setSvgFlattenTransforms(flatten: boolean): void;
  export function setSvgCoordinatePrecision(precision: number): void;
  export function setSvgTransformPrecision(precision: number): void;
  export function setSvgPointRadius(radius: number): void;
  export function beginSvgGroup(
    groupNameOrAttrs?: string | Record<string, any>,
    attrs?: Record<string, any>,
  ): void;
  export function endSvgGroup(): void;
  export function getDefaultStrokeColor(): string;
  export function isRecordingSVG(): boolean;
  export function injectSvgHeaderAttribute(
    attrName: string,
    attrValue: string,
  ): void;
  export function injectSvgDef(
    type: string,
    attributesObj: Record<string, any>,
  ): void;
  export function setSvgExportPolylinesAsPaths(exportAsPaths: boolean): void;

  // Export constants
  export const SVG_INDENT_SPACES: 1;
  export const SVG_INDENT_NONE: 0;
  export const SVG_INDENT_TABS: 2;

  // Default export
  const p5plotSvg: P5PlotSvg;
  export default p5plotSvg;
}

// Also declare as a global module for UMD/global usage
declare global {
  const p5plotSvg: typeof import("p5.plotsvg").default;

  // Global function declarations
  function beginRecordSVG(p5Instance: any, filename?: string): void;
  function pauseRecordSVG(pause: boolean): void;
  function endRecordSVG(): void;
  function setSVGDocumentSize(width: number, height: number): void;
  function setSvgResolutionDPI(dpi: number): void;
  function setSvgResolutionDPCM(dpcm: number): void;
  function setSvgDefaultStrokeWeight(weight: number): void;
  function setSvgMergeNamedGroups(merge: boolean): void;
  function setSvgGroupByStrokeColor(groupByColor: boolean): void;
  function setSvgDefaultStrokeColor(color: string): void;
  function setSvgBackgroundColor(color: string): void;
  function setSvgIndent(indentType: number, indentAmount?: number): void;
  function setSvgFlattenTransforms(flatten: boolean): void;
  function setSvgCoordinatePrecision(precision: number): void;
  function setSvgTransformPrecision(precision: number): void;
  function setSvgPointRadius(radius: number): void;
  function beginSvgGroup(
    groupNameOrAttrs?: string | Record<string, any>,
    attrs?: Record<string, any>,
  ): void;
  function endSvgGroup(): void;
  function getDefaultStrokeColor(): string;
  function isRecordingSVG(): boolean;
  function injectSvgHeaderAttribute(attrName: string, attrValue: string): void;
  function injectSvgDef(type: string, attributesObj: Record<string, any>): void;
  function setSvgExportPolylinesAsPaths(exportAsPaths: boolean): void;

  // Global constants
  const SVG_INDENT_SPACES: 1;
  const SVG_INDENT_NONE: 0;
  const SVG_INDENT_TABS: 2;

  // Extend Window interface
  interface Window {
    p5plotSvg: typeof import("p5.plotsvg").default;
    beginRecordSVG: typeof beginRecordSVG;
    pauseRecordSVG: typeof pauseRecordSVG;
    endRecordSVG: typeof endRecordSVG;
    setSVGDocumentSize: typeof setSVGDocumentSize;
    setSvgResolutionDPI: typeof setSvgResolutionDPI;
    setSvgResolutionDPCM: typeof setSvgResolutionDPCM;
    setSvgDefaultStrokeWeight: typeof setSvgDefaultStrokeWeight;
    setSvgMergeNamedGroups: typeof setSvgMergeNamedGroups;
    setSvgGroupByStrokeColor: typeof setSvgGroupByStrokeColor;
    setSvgDefaultStrokeColor: typeof setSvgDefaultStrokeColor;
    setSvgBackgroundColor: typeof setSvgBackgroundColor;
    setSvgIndent: typeof setSvgIndent;
    setSvgFlattenTransforms: typeof setSvgFlattenTransforms;
    setSvgCoordinatePrecision: typeof setSvgCoordinatePrecision;
    setSvgTransformPrecision: typeof setSvgTransformPrecision;
    setSvgPointRadius: typeof setSvgPointRadius;
    beginSvgGroup: typeof beginSvgGroup;
    endSvgGroup: typeof endSvgGroup;
    getDefaultStrokeColor: typeof getDefaultStrokeColor;
    isRecordingSVG: typeof isRecordingSVG;
    injectSvgHeaderAttribute: typeof injectSvgHeaderAttribute;
    injectSvgDef: typeof injectSvgDef;
    setSvgExportPolylinesAsPaths: typeof setSvgExportPolylinesAsPaths;
    SVG_INDENT_SPACES: typeof SVG_INDENT_SPACES;
    SVG_INDENT_NONE: typeof SVG_INDENT_NONE;
    SVG_INDENT_TABS: typeof SVG_INDENT_TABS;
  }
}

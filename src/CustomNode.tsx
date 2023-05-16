import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

export const CustomNode = memo(
  ({
    data,
    isConnectable,
    targetPosition = Position.Top,
    sourcePosition = Position.Bottom,
  }: NodeProps) => {
    return (
      <>
        <Handle
          type="target"
          position={targetPosition}
          isConnectable={isConnectable}
        />
        {data?.label}
        <Handle
          type="source"
          position={sourcePosition}
          isConnectable={isConnectable}
        />
      </>
    );
  }
);

CustomNode.displayName = "CustomNode";

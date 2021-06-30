import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonInfo = () => {
    return (
        <div className="room-info skeleton">
            <Skeleton height={80} width={200} />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    );
};

export default SkeletonInfo;

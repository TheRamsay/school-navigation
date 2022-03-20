import React, {useEffect} from "react";
import * as d3 from "d3";

const ZoomablePannableMap: React.FC = ({children}) => {

    useEffect(() => {
        const zoom = d3.zoom()
            .scaleExtent([0.25, 3])
            // .translateExtent([[-700, -1100], [4000, 3400]])
            .on('zoom', handleZoom);

        // @ts-ignore
        function handleZoom(e) {
            d3.select('#svg-map g')
                .attr('transform', e.transform);
        }

        // @ts-ignore
        d3.select('#svg-map').call(zoom);

    });

    return (
        <>
            {children}
        </>
    )
}

export default ZoomablePannableMap;
